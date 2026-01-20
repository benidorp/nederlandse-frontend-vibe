import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Crown, TrendingUp, Shield, Globe, Zap, Award, ArrowRight, CheckCircle, Star, Link, Target, BarChart3, Mail, User, MessageSquare, Lock, ArrowUp, Home, ExternalLink } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import LegalLinksPremiumDomainsES from "@/components/premium-domains/LegalLinksPremiumDomainsES";
import FooterPremiumDomainsES from "@/components/premium-domains/FooterPremiumDomainsES";
import LanguageSwitcher from "@/components/premium-domains/LanguageSwitcher";
import stripeLogo from "@/assets/stripe-logo.svg";
import { validateContactForm, buildSafeMailtoUrl } from "@/lib/formValidation";

// Premium domain data - exact copy from Dutch version
const premiumDomains = [
  // DA 38
  {
    name: "escp-eap.eu",
    description: "Dominio premium de escuela de negocios con backlinks de Wikipedia, Cornell, Spiegel y Le Monde.",
    mozScore: 38,
    pageAuthority: 28,
    linkingDomains: 292,
    inboundLinks: "4.6K+",
    followedLinks: "4.2K+",
    category: "Educación",
    price: "€1495",
    backlinks: "4.6K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "lemonde.fr (DA 93)", "cornell.edu (DA 92)", "spiegel.de (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/6oUeVdepVg18dXf9OO9Zm04"
  },
  // DA 37
  {
    name: "grandparkhotel.at",
    description: "Dominio premium de hotel austriaco con backlinks de The Guardian, Telegraph, Daily Mail, Irish Times y Der Standard.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 198,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Hostelería",
    price: "€1750",
    backlinks: "1.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dailymail.co.uk (DA 94)", "irishtimes.com (DA 91)", "derstandard.at (DA 82)"],
    stripePaymentLink: "https://buy.stripe.com/8x2dR9epV9CK5qJaSS9Zm0i"
  },
  {
    name: "icesculpture.be",
    description: "Dominio belga de arte/eventos con backlinks de Europa.eu, The Guardian, Telegraph, DW y Boston.com.",
    mozScore: 37,
    pageAuthority: 33,
    linkingDomains: 349,
    inboundLinks: "1.9K+",
    followedLinks: "1.5K+",
    category: "Arte",
    price: "€950",
    backlinks: "1.9K+",
    topBacklinks: ["europa.eu (DA 97)", "theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dw.com (DA 93)", "boston.com (DA 92)"],
    stripePaymentLink: "https://buy.stripe.com/fZu4gzdlRaGOg5n3qq9Zm0h"
  },
  {
    name: "tabby.eu",
    description: "Dominio EU corto y memorable con backlinks de YouTube, Le Monde, MDPI, Corriere y Wired Italia.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 166,
    inboundLinks: "3K+",
    followedLinks: "2.9K+",
    category: "General",
    price: "€1950",
    stripePaymentLink: "https://buy.stripe.com/bJe7sL2HdcOWbP7bWW9Zm0g",
    backlinks: "3K+",
    topBacklinks: ["youtube.com (DA 100)", "lemonde.fr (DA 93)", "mdpi.com (DA 92)", "corriere.it (DA 92)", "wired.it (DA 90)"]
  },
  // DA 36
  {
    name: "antigonetickets.be",
    description: "Dominio belga de venta de entradas con backlinks de Nieuwsblad, De Standaard y GVA.",
    mozScore: 36,
    pageAuthority: 23,
    linkingDomains: 120,
    inboundLinks: "6.6K+",
    followedLinks: "6.6K+",
    category: "Entretenimiento",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "6.6K+",
    topBacklinks: ["standaard.be (DA 81)", "nieuwsblad.be (DA 79)", "gva.be (DA 73)"]
  },
  {
    name: "beauxartsliege.be",
    description: "Dominio de arte con backlinks de Wikipedia, CNN, Behance y RTBF.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 231,
    inboundLinks: "1.1K+",
    followedLinks: "831+",
    category: "Arte/Cultura",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "1.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnn.com (DA 94)", "behance.net (DA 92)", "rtbf.be (DA 82)"]
  },
  {
    name: "paulsmithmusic.eu",
    description: "Dominio de música con backlinks de BBC, The Guardian, NME y Pitchfork.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 302,
    inboundLinks: "719+",
    followedLinks: "663+",
    category: "Música",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "719+",
    topBacklinks: ["bbc.co.uk (DA 95)", "theguardian.com (DA 95)", "pitchfork.com (DA 88)", "nme.com (DA 86)"]
  },
  {
    name: "eu-asiacentre.eu",
    description: "Dominio UE-Asia con backlinks de Wikipedia, NBC News, Cambridge y Reddit.",
    mozScore: 36,
    pageAuthority: 33,
    linkingDomains: 277,
    inboundLinks: "898+",
    followedLinks: "785+",
    category: "Internacional",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "898+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "reddit.com (DA 97)", "nbcnews.com (DA 93)", "cam.ac.uk (DA 93)"]
  },
  // DA 35
  {
    name: "toulousespaceshow.eu",
    description: "Dominio premium espacial con backlinks de Europa.eu, NASA.gov, IEEE.org y Wikipedia.",
    mozScore: 35,
    pageAuthority: 31,
    linkingDomains: 397,
    inboundLinks: "3.4K+",
    followedLinks: "1.8K+",
    category: "Tecnología",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "nasa.gov (DA 95)", "europa.eu (DA 94)", "ieee.org (DA 93)"]
  },
  {
    name: "martonecycling.eu",
    description: "Dominio de ciclismo con backlinks de Globo, Harper's Bazaar, Vogue y Grazia.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 118,
    inboundLinks: "232+",
    followedLinks: "173+",
    category: "Deporte",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "232+",
    topBacklinks: ["globo.com (DA 93)", "vogue.com (DA 92)", "harpersbazaar.com (DA 89)", "grazia.it (DA 73)"]
  },
  {
    name: "muenchner-kirchennachrichten.de",
    description: "Dominio alemán de noticias/religioso con backlinks de Wikipedia (EN, DE, ZH, NL), Spiegel y La Croix.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 281,
    inboundLinks: "3.3K+",
    followedLinks: "1.8K+",
    category: "Noticias",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.3K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "de.wikipedia.org (DA 94)", "fandom.com (DA 94)", "spiegel.de (DA 93)", "la-croix.com (DA 88)"]
  },
  // DA 33
  {
    name: "etongmbh.de",
    description: "Dominio empresarial alemán con fuerte autoridad comercial y backlinks de Naver, Yumpu, Heise, Computerbase y Motor-Talk.",
    mozScore: 33,
    pageAuthority: 27,
    linkingDomains: 321,
    inboundLinks: "3.9K+",
    followedLinks: "1.6K+",
    category: "Negocios",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "3.9K+",
    topBacklinks: ["naver.com (DA 93)", "yumpu.com (DA 91)", "heise.de (DA 91)", "computerbase.de (DA 84)", "motor-talk.de (DA 73)"]
  },
  {
    name: "europe-en-midipyrenees.eu",
    description: "Dominio regional francés/europeo con backlinks de Scoop.it, France Info, La Tribune y gobierno francés.",
    mozScore: 33,
    pageAuthority: 24,
    linkingDomains: 167,
    inboundLinks: "690.3K+",
    followedLinks: "689.6K+",
    category: "Turismo",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "690.3K+",
    topBacklinks: ["scoop.it (DA 92)", "franceinfo.fr (DA 91)", "latribune.fr (DA 86)", "culture.gouv.fr (DA 76)", "agriculture.gouv.fr (DA 72)"]
  },
  {
    name: "fffb.be",
    description: "Dominio belga corto y potente con backlinks de Wikipedia, Variety, RTBF y Courrier International.",
    mozScore: 33,
    pageAuthority: 33,
    linkingDomains: 228,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "General",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "1.7K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "variety.com (DA 93)", "constantcontact.com (DA 90)", "rtbf.be (DA 89)", "courrierinternational.com (DA 80)"]
  },
  // DA 32
  {
    name: "improve-research.eu",
    description: "Dominio de investigación con backlinks de Europa.eu, Cambridge, Springer y LSE.",
    mozScore: 32,
    pageAuthority: 30,
    linkingDomains: 106,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "Investigación",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.7K+",
    topBacklinks: ["europa.eu (DA 94)", "cam.ac.uk (DA 93)", "springer.com (DA 92)", "lse.ac.uk (DA 90)"]
  },
  {
    name: "co-da.eu",
    description: "Dominio EU corto y potente con backlinks de Globo, HuffPost, CBS News, Gizmodo y Fast Company.",
    mozScore: 32,
    pageAuthority: 22,
    linkingDomains: 96,
    inboundLinks: "276+",
    followedLinks: "260+",
    category: "Colaboración",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "276+",
    topBacklinks: ["globo.com (DA 95)", "huffpost.com (DA 94)", "cbsnews.com (DA 93)", "gizmodo.com (DA 93)", "fastcompany.com (DA 92)"]
  },
  {
    name: "emg-nice2015.fr",
    description: "Dominio francés con backlinks de Wikipedia, GoFundMe, Nice Matin y Triathlon.org.",
    mozScore: 32,
    pageAuthority: 31,
    linkingDomains: 191,
    inboundLinks: "3.1K+",
    followedLinks: "3K+",
    category: "Internacional",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "3.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "gofundme.com (DA 93)", "mundodeportivo.com (DA 92)", "nicematin.com (DA 73)", "triathlon.org (DA 68)"]
  },
  {
    name: "euromedialiteracy.eu",
    description: "Dominio educativo EU con backlinks de Wikipedia, Penn State, Wisconsin y Consejo de Europa.",
    mozScore: 32,
    pageAuthority: 38,
    linkingDomains: 372,
    inboundLinks: "2.5K+",
    followedLinks: "2.3K+",
    category: "Educación",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.5K+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "psu.edu (DA 92)", "scoop.it (DA 92)", "wisc.edu (DA 91)", "coe.int (DA 89)"]
  },
  {
    name: "citiexpress.eu",
    description: "Dominio EU de transporte y logística con backlinks de TripAdvisor, SkyscraperCity y Rick Steves.",
    mozScore: 32,
    pageAuthority: 32,
    linkingDomains: 171,
    inboundLinks: "307+",
    followedLinks: "254+",
    category: "Transporte",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "307+",
    topBacklinks: ["goo.gl (DA 95)", "tripadvisor.com (DA 93)", "skyscrapercity.com (DA 86)", "ricksteves.com (DA 77)", "rome2rio.com (DA 76)"]
  },
  // DA 31
  {
    name: "machuproject.eu",
    description: "Dominio de proyecto europeo con backlinks de Wikipedia, Cambridge, UNESCO y Reddit.",
    mozScore: 31,
    pageAuthority: 27,
    linkingDomains: 162,
    inboundLinks: "379+",
    followedLinks: "266+",
    category: "Proyectos",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "379+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cambridge.org (DA 93)", "unesco.org (DA 93)", "reddit.com (DA 92)", "mdpi.com (DA 92)"]
  },
  {
    name: "ramcip-project.eu",
    description: "Dominio de proyecto de investigación europeo con backlinks de Europa.eu, GitHub, NY Times y Springer.",
    mozScore: 31,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "333+",
    followedLinks: "293+",
    category: "Investigación",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "333+",
    topBacklinks: ["europa.eu (DA 97)", "github.com (DA 96)", "nytimes.com (DA 95)", "elpais.com (DA 94)", "springer.com (DA 93)"]
  },
  {
    name: "evader-project.eu",
    description: "Dominio de proyecto EU con backlinks de Europa.eu, Spiegel, Europa Press y Heise.",
    mozScore: 31,
    pageAuthority: 30,
    linkingDomains: 91,
    inboundLinks: "128+",
    followedLinks: "109+",
    category: "Proyectos",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "128+",
    topBacklinks: ["europa.eu (DA 97)", "spiegel.de (DA 93)", "europapress.es (DA 91)", "heise.de (DA 91)", "autoblog.com (DA 90)"]
  },
  {
    name: "toastit-live.be",
    description: "Dominio belga de entretenimiento/medios con backlinks de Wikipedia, KU Leuven, Nieuwsblad y Yle.",
    mozScore: 31,
    pageAuthority: 29,
    linkingDomains: 268,
    inboundLinks: "15.2K+",
    followedLinks: "15K+",
    category: "Medios",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "15.2K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "kuleuven.be (DA 83)", "nieuwsblad.be (DA 82)", "skynet.be (DA 80)", "yle.fi (DA 78)"]
  },
  {
    name: "hznet.nl",
    description: "Dominio holandés de red con backlinks de Microsoft, NOS, Neowin, Tweakers y XS4All.",
    mozScore: 31,
    pageAuthority: 25,
    linkingDomains: 152,
    inboundLinks: "1.7K+",
    followedLinks: "1.6K+",
    category: "Red",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "1.7K+",
    topBacklinks: ["microsoft.com (DA 99)", "nos.nl (DA 90)", "neowin.net (DA 88)", "techpowerup.com (DA 83)", "tweakers.net (DA 79)"]
  },
  {
    name: "leading-the-digital-decade.eu",
    description: "Dominio EU de transformación digital con backlinks de Europa.eu, Politico EU y LSE.",
    mozScore: 31,
    pageAuthority: 30,
    linkingDomains: 80,
    inboundLinks: "189+",
    followedLinks: "174+",
    category: "Digital",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "189+",
    topBacklinks: ["europa.eu (DA 97)", "politico.eu (DA 91)", "lse.ac.uk (DA 89)", "fapesp.br (DA 72)", "eureporter.co (DA 68)"]
  },
  {
    name: "landstewardship.eu",
    description: "Dominio EU de gestión territorial/sostenibilidad con backlinks de Europa.eu, ABC.es, Gencat.cat y universidades españolas.",
    mozScore: 31,
    pageAuthority: 33,
    linkingDomains: 200,
    inboundLinks: "7.5K+",
    followedLinks: "7.4K+",
    category: "Sostenibilidad",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "7.5K+",
    topBacklinks: ["europa.eu (DA 97)", "abc.es (DA 93)", "gencat.cat (DA 89)", "ask.com (DA 88)", "ecoticias.com (DA 74)"],
    useCases: ["ONG de Gestión Natural y Rewilding", "Plataforma de Agricultura Sostenible", "Ecoturismo y Agroturismo", "Consultoría Ambiental", "Estudio de Arquitectura Paisajista", "Colectivo de Agricultura Ecológica", "Fundación de Acción Climática", "Academia de Permacultura", "Iniciativa de Bosques y Biodiversidad", "Comunidad de Agricultura Regenerativa"]
  },
  // DA 30
  {
    name: "ilovecosmetics.eu",
    description: "Dominio de belleza y cosmética con backlinks de Alza, Glamour Magazine y CB Insights.",
    mozScore: 30,
    pageAuthority: 36,
    linkingDomains: 472,
    inboundLinks: "1.6K+",
    followedLinks: "1.3K+",
    category: "Belleza",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "1.6K+",
    topBacklinks: ["alza.cz (DA 92)", "glamourmagazine.co.uk (DA 82)", "polyvore.com (DA 79)", "fave.co (DA 78)", "cbinsights.com (DA 77)"],
    useCases: ["E-commerce de Belleza y Cuidado de la Piel", "Blog de Reseñas de Cosméticos", "Portfolio de Maquillador", "Marca de Cosmética Natural", "Plataforma de Influencer de Belleza", "Cadena de Salones de Belleza", "Importación K-Beauty y J-Beauty", "Tienda de Cosmética Vegana", "Servicio de Suscripción Beauty Box", "Base de Datos de Ingredientes Cosméticos"]
  },
  {
    name: "rtmpilecki.eu",
    description: "Dominio EU histórico/cultural con backlinks de Wikipedia (ES, ID, ZH), gobierno polaco y Thread Reader.",
    mozScore: 30,
    pageAuthority: 27,
    linkingDomains: 96,
    inboundLinks: "199+",
    followedLinks: "95+",
    category: "Cultura",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "199+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "gov.pl (DA 91)", "threadreaderapp.com (DA 78)", "gloria.tv (DA 69)", "dbpedia.org (DA 65)"]
  },
  {
    name: "friendsofthesupergrid.eu",
    description: "Dominio EU de energía e infraestructura con backlinks de Wikipedia, CNET, IEEE y The Conversation.",
    mozScore: 30,
    pageAuthority: 30,
    linkingDomains: 297,
    inboundLinks: "156.1K+",
    followedLinks: "155.8K+",
    category: "Energía",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/9B6cN54Pl5mu9GZe549Zm0l",
    backlinks: "156.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnet.com (DA 93)", "theconversation.com (DA 92)", "ieee.org (DA 92)", "corriere.it (DA 92)"]
  },
  {
    name: "eureka-hvacr.eu",
    description: "Dominio EU de HVAC y tecnología climática con backlinks de Ow.ly, EurActiv y Danfoss.",
    mozScore: 30,
    pageAuthority: 23,
    linkingDomains: 80,
    inboundLinks: "375+",
    followedLinks: "357+",
    category: "Tecnología",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "375+",
    topBacklinks: ["ow.ly (DA 90)", "euractiv.com (DA 84)", "campaign-archive.com (DA 84)", "danfoss.com (DA 69)", "coleurope.eu (DA 57)"]
  },
  {
    name: "partymenu.eu",
    description: "Dominio EU de catering/eventos con backlinks de Google.sk, Wikiwand, RA.co y Pravda.sk.",
    mozScore: 30,
    pageAuthority: 35,
    linkingDomains: 328,
    inboundLinks: "2.2K+",
    followedLinks: "2.1K+",
    category: "Alimentación",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "2.2K+",
    topBacklinks: ["google.sk (DA 85)", "wikiwand.com (DA 85)", "ra.co (DA 85)", "pravda.sk (DA 79)", "dennikn.sk (DA 76)"]
  },
  // DA 29
  {
    name: "evacuate.eu",
    description: "Dominio EU de seguridad y planificación de emergencias con backlinks de Europa.eu, El País, Springer y KU Leuven.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 99,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Seguridad",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.7K+",
    topBacklinks: ["europa.eu (DA 97)", "elpais.com (DA 94)", "springer.com (DA 93)", "mdpi.com (DA 92)", "xataka.com (DA 90)"]
  },
  {
    name: "greenweek2010.eu",
    description: "Dominio de sostenibilidad con backlinks de Europa.eu, EurekAlert, RAI y AAAS.",
    mozScore: 29,
    pageAuthority: 28,
    linkingDomains: 109,
    inboundLinks: "259+",
    followedLinks: "249+",
    category: "Sostenibilidad",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "259+",
    topBacklinks: ["europa.eu (DA 97)", "eurekalert.org (DA 91)", "rai.it (DA 81)", "au.dk (DA 77)", "aaas.org (DA 76)"]
  },
  {
    name: "bryn-somersethouse.co.uk",
    description: "Dominio británico de inmobiliaria/hostelería con backlinks de Forbes, The Guardian, Evening Standard y Time Out.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 96,
    inboundLinks: "167+",
    followedLinks: "132+",
    category: "Inmobiliaria",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "167+",
    topBacklinks: ["forbes.com (DA 94)", "theguardian.com (DA 94)", "standard.co.uk (DA 93)", "timeout.com (DA 92)", "thetimes.com (DA 92)"]
  },
  {
    name: "euforistudy.eu",
    description: "Dominio EU de estudio educativo con backlinks de The Guardian, Trinity College Dublin y VU Amsterdam.",
    mozScore: 29,
    pageAuthority: 27,
    linkingDomains: 72,
    inboundLinks: "215+",
    followedLinks: "170+",
    category: "Educación",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "215+",
    topBacklinks: ["theguardian.com (DA 94)", "ask.com (DA 88)", "tcd.ie (DA 86)", "vu.nl (DA 76)", "muni.cz (DA 74)"]
  },
  {
    name: "beatassist.eu",
    description: "Dominio de producción musical con backlinks de Google Sites, Scoop.it, Envato y MusicRadar.",
    mozScore: 29,
    pageAuthority: 29,
    linkingDomains: 164,
    inboundLinks: "1.5K+",
    followedLinks: "1.2K+",
    category: "Música/Audio",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.5K+",
    topBacklinks: ["sites.google.com (DA 96)", "scoop.it (DA 92)", "envato.com (DA 91)", "informer.com (DA 90)", "codecanyon.net (DA 83)"]
  },
  {
    name: "energaware.eu",
    description: "Dominio de proyecto EU de concienciación energética con backlinks de Europa.eu, UOL, El País y Le Figaro.",
    mozScore: 29,
    pageAuthority: 26,
    linkingDomains: 61,
    inboundLinks: "15.1K+",
    followedLinks: "15.1K+",
    category: "Energía",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "15.1K+",
    topBacklinks: ["europa.eu (DA 97)", "uol.com.br (DA 95)", "elpais.com (DA 94)", "lefigaro.fr (DA 93)", "mdpi.com (DA 92)"]
  },
  {
    name: "5gmedia.eu",
    description: "Dominio de telecom/medios con backlinks de Medium, IBM, Telefónica y universidades.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 69,
    inboundLinks: "338+",
    followedLinks: "265+",
    category: "Tecnología",
    price: "€675",
    stripePaymentLink: "https://buy.stripe.com/cNi00jdlR9CK5qJf989Zm0k",
    backlinks: "338+",
    topBacklinks: ["medium.com (DA 95)", "ibm.com (DA 93)", "telefonica.com (DA 79)", "upv.es (DA 79)", "upm.es (DA 78)"]
  },
  {
    name: "finnovaregio.eu",
    description: "Dominio EU de innovación financiera regional con backlinks de Crunchbase, Splashthat y Climate-KIC.",
    mozScore: 29,
    pageAuthority: 20,
    linkingDomains: 41,
    inboundLinks: "156+",
    followedLinks: "143+",
    category: "Finanzas",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "156+",
    topBacklinks: ["goo.gl (DA 95)", "crunchbase.com (DA 91)", "splashthat.com (DA 86)", "emprendedores.es (DA 66)", "climate-kic.org (DA 64)"]
  },
  {
    name: "worth-project.eu",
    description: "Dominio de proyecto de diseño e innovación con backlinks de Europa.eu, Euronews, AngelList y UAL Arts.",
    mozScore: 29,
    pageAuthority: 32,
    linkingDomains: 162,
    inboundLinks: "245+",
    followedLinks: "209+",
    category: "Diseño",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "245+",
    topBacklinks: ["europa.eu (DA 97)", "euronews.com (DA 92)", "angel.co (DA 86)", "campaign-archive.com (DA 84)", "arts.ac.uk (DA 81)"]
  },
  {
    name: "push-pull-parking.eu",
    description: "Dominio EU de movilidad/aparcamiento con backlinks de Europa.eu, Medium, Zeit.de y Thread Reader.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 107,
    inboundLinks: "320+",
    followedLinks: "292+",
    category: "Movilidad",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "320+",
    topBacklinks: ["europa.eu (DA 97)", "medium.com (DA 95)", "zeit.de (DA 91)", "threadreaderapp.com (DA 78)", "eur.nl (DA 68)"]
  },
  // DA 28
  {
    name: "bovisadrivein.it",
    description: "Dominio italiano de entretenimiento con backlinks de Behance, Giphy, Corriere y MyMovies.",
    mozScore: 28,
    pageAuthority: 22,
    linkingDomains: 52,
    inboundLinks: "78+",
    followedLinks: "60+",
    category: "Entretenimiento",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "78+",
    topBacklinks: ["behance.net (DA 93)", "giphy.com (DA 92)", "corriere.it (DA 92)", "ilgiornale.it (DA 85)", "elledecor.com (DA 81)"]
  },
  {
    name: "resurbis.eu",
    description: "Dominio EU de sostenibilidad con backlinks de Europa.eu, MDPI, EurekAlert y Wired.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 87,
    inboundLinks: "185+",
    followedLinks: "153+",
    category: "Sostenibilidad",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "185+",
    topBacklinks: ["europa.eu (DA 97)", "mdpi.com (DA 92)", "eurekalert.org (DA 91)", "wired.it (DA 90)", "ub.edu (DA 86)"]
  },
  {
    name: "eu-sabana.eu",
    description: "Dominio de proyecto EU de agricultura sostenible con backlinks de Europa.eu, The Conversation y Frontiers.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 69,
    inboundLinks: "413+",
    followedLinks: "397+",
    category: "Agricultura",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "413+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "frontiersin.org (DA 92)", "diarioinformacion.com (DA 82)", "informacion.es (DA 78)"]
  },
  {
    name: "ellinikiglossa.eu",
    description: "Dominio de lengua/cultura griega con fuertes backlinks de Wikipedia, UCI.edu y universidades.",
    mozScore: 28,
    pageAuthority: 31,
    linkingDomains: 164,
    inboundLinks: "4.1K+",
    followedLinks: "4K+",
    category: "Lengua/Cultura",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "4.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "uci.edu (DA 91)"]
  },
  {
    name: "bringaexpo.eu",
    description: "Dominio húngaro de ciclismo/expo con fuertes backlinks de Origo.hu, Velvet.hu, Network.hu y otros sitios de medios húngaros.",
    mozScore: 27,
    pageAuthority: 25,
    linkingDomains: 79,
    inboundLinks: "551+",
    followedLinks: "513+",
    category: "Deporte/Eventos",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "551+",
    topBacklinks: ["origo.hu (DA 72)", "velvet.hu (DA 60)", "network.hu (DA 57)", "femcafe.hu (DA 56)", "hwsw.hu (DA 56)"]
  },
  {
    name: "movecare-project.eu",
    description: "Dominio de proyecto EU de atención y movilidad con backlinks de Springer, MDPI, Il Fatto Quotidiano y universidades italianas.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "117+",
    followedLinks: "97+",
    category: "Salud",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "117+",
    topBacklinks: ["springer.com (DA 93)", "mdpi.com (DA 92)", "ilfattoquotidiano.it (DA 90)", "unimi.it (DA 72)", "polimi.it (DA 71)"]
  },
  {
    name: "davidhughesillustration.co.uk",
    description: "Dominio creativo UK con backlinks de The Guardian, Creative Bloq, ORF.at y Publishers Weekly.",
    mozScore: 28,
    pageAuthority: 27,
    linkingDomains: 157,
    inboundLinks: "3.9K+",
    followedLinks: "3.9K+",
    category: "Arte/Diseño",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "3.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "creativebloq.com (DA 86)", "orf.at (DA 86)", "librarything.com (DA 80)", "publishersweekly.com (DA 77)"]
  },
  {
    name: "centremlm.be",
    description: "Dominio de centro belga con backlinks de Wikipedia (FR, IT, NL), Le Figaro y Wiktionary.",
    mozScore: 28,
    pageAuthority: 28,
    linkingDomains: 182,
    inboundLinks: "9.6K+",
    followedLinks: "9.3K+",
    category: "General",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "9.6K+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "it.wikipedia.org (DA 93)", "wiktionary.org (DA 93)", "lefigaro.fr (DA 93)", "nl.wikipedia.org (DA 91)"]
  },
  {
    name: "epc2018.be",
    description: "Dominio de evento belga con backlinks de TinyURL, UB.edu, Universidad de Lund y Confex.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 57,
    inboundLinks: "136+",
    followedLinks: "121+",
    category: "Eventos",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "136+",
    topBacklinks: ["tinyurl.com (DA 94)", "ub.edu (DA 86)", "lu.se (DA 79)", "confex.com (DA 73)", "sdu.dk (DA 71)"]
  },
  {
    name: "youthstartproject.eu",
    description: "Dominio de proyecto educativo/juvenil con backlinks de Europa.eu, Campaign Archive, Observador y OpenEdition.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 64,
    inboundLinks: "2.9K+",
    followedLinks: "2.8K+",
    category: "Educación",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "2.9K+",
    topBacklinks: ["europa.eu (DA 97)", "campaign-archive.com (DA 84)", "observador.pt (DA 84)", "openedition.org (DA 78)", "wort.lu (DA 75)"]
  },
  // DA 27
  {
    name: "spanvis.nl",
    description: "Dominio holandés con backlinks de Wikipedia (EN, RU, NL), Wikiwand y XS4All.",
    mozScore: 27,
    pageAuthority: 29,
    linkingDomains: 241,
    inboundLinks: "2.1K+",
    followedLinks: "1.9K+",
    category: "General",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "ru.wikipedia.org (DA 94)", "nl.wikipedia.org (DA 91)", "wikiwand.com (DA 85)", "xs4all.nl (DA 79)"]
  },
  {
    name: "seatglobal.eu",
    description: "Dominio internacional de movilidad/transporte con backlinks de Europa.eu, Springer, PLOS y Phys.org.",
    mozScore: 27,
    pageAuthority: 29,
    linkingDomains: 123,
    inboundLinks: "4.8K+",
    followedLinks: "4.7K+",
    category: "Transporte",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "4.8K+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "plos.org (DA 93)", "salon.com (DA 91)", "phys.org (DA 91)"]
  },
  {
    name: "arcomem.eu",
    description: "Dominio de proyecto EU de archivo digital con backlinks de Wikipedia, Europa.eu, W3.org, SlideShare y Oxford.",
    mozScore: 27,
    pageAuthority: 33,
    linkingDomains: 691,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "Digital",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.7K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "w3.org (DA 95)", "slideshare.net (DA 94)", "ox.ac.uk (DA 92)"]
  },
  {
    name: "lt-pl-ru.eu",
    description: "Dominio de cooperación EU de la región báltica con backlinks de Europa.eu, Wikipedia DE, Ask.com y Rzeczpospolita.",
    mozScore: 27,
    pageAuthority: 31,
    linkingDomains: 155,
    inboundLinks: "44.2K+",
    followedLinks: "37.2K+",
    category: "Internacional",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "44.2K+",
    topBacklinks: ["europa.eu (DA 97)", "de.wikipedia.org (DA 94)", "ask.com (DA 88)", "rp.pl (DA 82)", "worldwidetopsite.com (DA 71)"]
  },
  {
    name: "transitionproject.eu",
    description: "Dominio de proyecto EU de transición y cambio con backlinks de Europa.eu, Eventbrite, Storify y Universidad de Sheffield.",
    mozScore: 27,
    pageAuthority: 28,
    linkingDomains: 75,
    inboundLinks: "207+",
    followedLinks: "179+",
    category: "Proyectos",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "207+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "eventbrite.com (DA 93)", "storify.com (DA 90)", "shef.ac.uk (DA 79)"]
  },
  {
    name: "expo-2050.be",
    description: "Dominio belga de expo/exposición con backlinks de The Conversation, Radio France, RTBF y La Libre.",
    mozScore: 27,
    pageAuthority: 27,
    linkingDomains: 96,
    inboundLinks: "210+",
    followedLinks: "182+",
    category: "Eventos",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "210+",
    topBacklinks: ["theconversation.com (DA 92)", "radiofrance.fr (DA 92)", "theculturetrip.com (DA 89)", "rtbf.be (DA 89)", "lalibre.be (DA 84)"]
  },
  {
    name: "iceel.eu",
    description: "Dominio EU con backlinks de Europa.eu, France Info, CNRS y universidades francesas.",
    mozScore: 27,
    pageAuthority: 30,
    linkingDomains: 130,
    inboundLinks: "3.6K+",
    followedLinks: "3.5K+",
    category: "General",
    price: "€450",
    stripePaymentLink: "https://buy.stripe.com/fZu14n6Xt7uCf1j9OO9Zm0j",
    backlinks: "3.6K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "cnrs.fr (DA 90)", "psl.eu (DA 78)", "education.fr (DA 77)"]
  },
  {
    name: "eustartupvillageforum.eu",
    description: "Dominio de foro EU de startup e innovación con backlinks de Europa.eu, Pages.dev, Campaign Archive y Silicon Republic.",
    mozScore: 27,
    pageAuthority: 28,
    linkingDomains: 85,
    inboundLinks: "219+",
    followedLinks: "185+",
    category: "Startups",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "219+",
    topBacklinks: ["europa.eu (DA 97)", "pages.dev (DA 91)", "campaign-archive.com (DA 84)", "siliconrepublic.com (DA 83)", "wko.at (DA 74)"]
  },
  {
    name: "life-envoll.eu",
    description: "Dominio de proyecto EU de medio ambiente y naturaleza con backlinks de Europa.eu, FranceInfo, Campaign Archive y Midi Libre.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 54,
    inboundLinks: "67.8K+",
    followedLinks: "67.8K+",
    category: "Medio Ambiente",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "67.8K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "campaign-archive.com (DA 84)", "midilibre.fr (DA 81)", "developpement-durable.gouv.fr (DA 74)"]
  },
  // DA 26
  {
    name: "covenant-capacity.eu",
    description: "Dominio EU de pacto y desarrollo de capacidades con backlinks de Europa.eu, BT, MyNewsDesk y WWF Panda.",
    mozScore: 26,
    pageAuthority: 24,
    linkingDomains: 85,
    inboundLinks: "2.6K+",
    followedLinks: "2.5K+",
    category: "Colaboración",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.6K+",
    topBacklinks: ["europa.eu (DA 97)", "bt.com (DA 91)", "mynewsdesk.com (DA 89)", "campaign-archive.com (DA 84)", "panda.org (DA 77)"]
  },
  {
    name: "wetenschapbegintmetverwondering.nl",
    description: "Dominio holandés de comunicación científica con backlinks de RUG, NU.nl y Agenda Nacional de Ciencia.",
    mozScore: 27,
    pageAuthority: 24,
    linkingDomains: 52,
    inboundLinks: "97+",
    followedLinks: "81+",
    category: "Ciencia",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "97+",
    topBacklinks: ["rug.nl (DA 84)", "nu.nl (DA 91)", "wetenschapsagenda.nl (DA 65)"]
  },
  {
    name: "khresmoi.eu",
    description: "Dominio de proyecto EU de búsqueda médica con backlinks de MDPI, Springer, BioMedCentral y Universidad Charles.",
    mozScore: 27,
    pageAuthority: 32,
    linkingDomains: 184,
    inboundLinks: "31.7K+",
    followedLinks: "31.5K+",
    category: "Salud",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "31.7K+",
    topBacklinks: ["mdpi.com (DA 92)", "springer.com (DA 93)", "biomedcentral.com (DA 91)", "cuni.cz (DA 85)"]
  },
  {
    name: "sialon.eu",
    description: "Dominio de investigación de salud EU con backlinks de BBC, Europa.eu y The Conversation.",
    mozScore: 24,
    pageAuthority: 25,
    linkingDomains: 66,
    inboundLinks: "145+",
    followedLinks: "125+",
    category: "Salud",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "145+",
    topBacklinks: ["bbc.co.uk (DA 95)", "europa.eu (DA 97)", "theconversation.com (DA 92)", "bbc.com (DA 94)"]
  },
  {
    name: "spaceinfoday.eu",
    description: "Dominio EU espacial con backlinks de Wikipedia, Europa.eu, ESA, UCM y ORF.",
    mozScore: 26,
    pageAuthority: 24,
    linkingDomains: 77,
    inboundLinks: "6.4K+",
    followedLinks: "6.3K+",
    category: "Tecnología",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "6.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "esa.int (DA 91)", "ucm.es (DA 89)", "orf.at (DA 86)"]
  },
  {
    name: "beehive-erasmusplus.eu",
    description: "Dominio educativo EU Erasmus+ con backlinks de Pages.dev, Gameforge, GitBook y universidades.",
    mozScore: 26,
    pageAuthority: 34,
    linkingDomains: 452,
    inboundLinks: "6.2K+",
    followedLinks: "3.7K+",
    category: "Educación",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "6.2K+",
    topBacklinks: ["sakura.ne.jp (DA 93)", "pages.dev (DA 91)", "biglobe.ne.jp (DA 91)", "gameforge.com (DA 90)", "gitbook.io (DA 85)"]
  },
  {
    name: "dunyaendesiedefilm.nl",
    description: "Dominio holandés de cine/medios con backlinks de Wikipedia (EN, JA), IPFS, FilmWeb y Cinemagia.",
    mozScore: 26,
    pageAuthority: 23,
    linkingDomains: 102,
    inboundLinks: "214+",
    followedLinks: "180+",
    category: "Medios",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "214+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "ja.wikipedia.org (DA 93)", "ipfs.io (DA 84)", "filmweb.pl (DA 80)", "csfd.cz (DA 72)"]
  },
  {
    name: "102touchfm.co.uk",
    description: "Dominio británico de radio/medios con backlinks de Wikipedia, BBC, Bit.ly, Foursquare y DigitalSpy.",
    mozScore: 26,
    pageAuthority: 30,
    linkingDomains: 292,
    inboundLinks: "11.8K+",
    followedLinks: "8.8K+",
    category: "Medios",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "11.8K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "bbc.co.uk (DA 95)", "bit.ly (DA 94)", "foursquare.com (DA 92)", "digitalspy.com (DA 88)"]
  },
  {
    name: "tca2000.co.uk",
    description: "Dominio británico con backlinks de Wikipedia (EN, FR, JA, PL), Fandom y DigitalSpy.",
    mozScore: 26,
    pageAuthority: 29,
    linkingDomains: 180,
    inboundLinks: "662+",
    followedLinks: "460+",
    category: "Negocios",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "662+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "fr.wikipedia.org (DA 95)", "fandom.com (DA 94)", "ja.wikipedia.org (DA 93)", "pl.wikipedia.org (DA 93)"]
  },
  {
    name: "deparisnet.be",
    description: "Dominio de red belga con backlinks de Europa.eu, Wikipedia (ES, FR), Yumpu y Google.be.",
    mozScore: 26,
    pageAuthority: 28,
    linkingDomains: 135,
    inboundLinks: "710+",
    followedLinks: "445+",
    category: "Red",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "710+",
    topBacklinks: ["europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "jimdofree.com (DA 95)", "yumpu.com (DA 91)"]
  },
  // DA 25
  {
    name: "gastrosafezone.eu",
    description: "Dominio de diseño y seguridad hotelera con backlinks de CNN, The Conversation, Pagina12 y Elle Decor.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 47,
    inboundLinks: "66+",
    followedLinks: "58+",
    category: "Diseño/Hostelería",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "66+",
    topBacklinks: ["cnn.com (DA 94)", "theconversation.com (DA 92)", "realty.rbc.ru (DA 88)", "pagina12.com.ar (DA 82)", "elledecor.com (DA 80)"]
  },
  {
    name: "hotelgiotto.eu",
    description: "Dominio de hostelería con backlinks de Pages.dev, Wikitravel, Groupon UK y Travellerspoint.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 78,
    inboundLinks: "284+",
    followedLinks: "198+",
    category: "Hostelería",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "284+",
    topBacklinks: ["pages.dev (DA 91)", "wikitravel.org (DA 79)", "groupon.co.uk (DA 76)", "groupon.fr (DA 63)", "travellerspoint.com (DA 60)"]
  },
  {
    name: "recharge-green.eu",
    description: "Dominio EU de energía verde y recarga con backlinks de Google Groups, MDPI, BioMedCentral y FAO.",
    mozScore: 25,
    pageAuthority: 28,
    linkingDomains: 128,
    inboundLinks: "5.5K+",
    followedLinks: "5.5K+",
    category: "Energía",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "5.5K+",
    topBacklinks: ["groups.google.com (DA 93)", "mdpi.com (DA 92)", "biomedcentral.com (DA 91)", "fao.org (DA 91)", "bayern.de (DA 89)"]
  },
  {
    name: "brave-project.eu",
    description: "Dominio de proyecto EU con backlinks de Europa.eu, El Diario, Stuttgarter Zeitung y universidades.",
    mozScore: 24,
    pageAuthority: 24,
    linkingDomains: 73,
    inboundLinks: "194+",
    followedLinks: "133+",
    category: "Proyectos",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "194+",
    topBacklinks: ["europa.eu (DA 97)", "eldiario.es (DA 91)", "stuttgarter-zeitung.de (DA 81)", "techxplore.com (DA 79)", "uah.es (DA 70)"]
  },
  {
    name: "aaliance.eu",
    description: "Dominio EU de atención sanitaria/tercera edad con backlinks de Europa.eu, Cambridge, Springer, Heise y EurActiv.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 69,
    inboundLinks: "227+",
    followedLinks: "163+",
    category: "Salud",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "227+",
    topBacklinks: ["europa.eu (DA 97)", "cambridge.org (DA 93)", "springer.com (DA 93)", "heise.de (DA 91)", "euractiv.com (DA 84)"]
  },
  {
    name: "unamec.be",
    description: "Dominio médico/sanitario belga con backlinks de OUP, Yumpu, KU Leuven y UGent.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 93,
    inboundLinks: "188+",
    followedLinks: "150+",
    category: "Salud",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "188+",
    topBacklinks: ["oup.com (DA 93)", "yumpu.com (DA 91)", "kuleuven.be (DA 83)", "ugent.be (DA 76)", "justlanded.com (DA 76)"]
  },
  {
    name: "josephines.be",
    description: "Dominio belga de lifestyle/hostelería con backlinks de Mixcloud, De Standaard y Elle.be.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 69,
    inboundLinks: "175+",
    followedLinks: "145+",
    category: "Lifestyle",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "175+",
    topBacklinks: ["mixcloud.com (DA 92)", "standaard.be (DA 76)", "elle.be (DA 62)", "outtraveler.com (DA 55)", "seniorennet.be (DA 54)"]
  },
  {
    name: "front-vosges-14-18.eu",
    description: "Dominio histórico de conmemoración WW1 con backlinks de Wikipedia (FR, DE), StackExchange, FranceInfo e INRIA.",
    mozScore: 25,
    pageAuthority: 27,
    linkingDomains: 122,
    inboundLinks: "443+",
    followedLinks: "318+",
    category: "Historia",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "443+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "stackexchange.com (DA 91)", "franceinfo.fr (DA 91)", "inria.fr (DA 83)"]
  },
  {
    name: "serletproject.eu",
    description: "Dominio de proyecto EU con backlinks de Apple.com, Bit.ly, RTL.fr y Wikipedia Griego.",
    mozScore: 25,
    pageAuthority: 30,
    linkingDomains: 491,
    inboundLinks: "2K+",
    followedLinks: "1.9K+",
    category: "Innovación",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "2K+",
    topBacklinks: ["apple.com (DA 99)", "bit.ly (DA 94)", "home.pl (DA 93)", "cocolog-nifty.com (DA 90)", "rtl.fr (DA 89)"]
  },
  {
    name: "landmark-project.eu",
    description: "Dominio de proyecto EU con backlinks de Europa.eu, Wikipedia DE, Cambridge y Yumpu.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 161,
    inboundLinks: "1.1K+",
    followedLinks: "954+",
    category: "Proyectos",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "1.1K+",
    topBacklinks: ["europa.eu (DA 97)", "goo.gl (DA 95)", "de.wikipedia.org (DA 94)", "cambridge.org (DA 93)", "yumpu.com (DA 91)"]
  },
  {
    name: "tandemtech.be",
    description: "Dominio tech belga con backlinks de Medium, TinyURL, Bit.ly, Tweakers y Knack.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 61,
    inboundLinks: "613+",
    followedLinks: "565+",
    category: "Tecnología",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "613+",
    topBacklinks: ["medium.com (DA 95)", "tinyurl.com (DA 94)", "bit.ly (DA 94)", "about.me (DA 92)", "pages.dev (DA 91)"]
  },
  {
    name: "happyvpro.nl",
    description: "Dominio holandés de medios con backlinks de TinyURL, Ello, XS4ALL, Emerce y VPRO.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 74,
    inboundLinks: "1.5K+",
    followedLinks: "1.4K+",
    category: "Medios",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "1.5K+",
    topBacklinks: ["tinyurl.com (DA 94)", "ello.co (DA 85)", "xs4all.nl (DA 79)", "emerce.nl (DA 69)", "vpro.nl (DA 68)"]
  },
  {
    name: "edlupt.eu",
    description: "Dominio EU con backlinks de Pinterest, ANSA, RUG Groningen y universidades italianas.",
    mozScore: 25,
    pageAuthority: 28,
    linkingDomains: 192,
    inboundLinks: "119.7K+",
    followedLinks: "119.6K+",
    category: "General",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "119.7K+",
    topBacklinks: ["pinterest.com (DA 94)", "ansa.it (DA 91)", "rug.nl (DA 81)", "cnr.it (DA 75)", "unito.it (DA 70)"]
  },
  // DA 25
  {
    name: "xcycle-h2020.eu",
    description: "Dominio EU H2020 de movilidad con backlinks de Europa.eu, Springer, MDPI y Frontiers.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 145,
    inboundLinks: "275+",
    followedLinks: "202+",
    category: "Movilidad",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "275+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "mdpi.com (DA 92)", "frontiersin.org (DA 92)", "euractiv.com (DA 84)"]
  },
  {
    name: "heinekenthecity.nl",
    description: "Dominio holandés urbano/lifestyle con backlinks de Dezeen, Symbaloo, Fodors y VPRO.",
    mozScore: 24,
    pageAuthority: 18,
    linkingDomains: 52,
    inboundLinks: "214+",
    followedLinks: "205+",
    category: "Lifestyle",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "214+",
    topBacklinks: ["dezeen.com (DA 88)", "symbaloo.com (DA 84)", "fodors.com (DA 82)", "vpro.nl (DA 68)", "clara.net (DA 65)"]
  },
  // DA 24
  {
    name: "vos-photos.eu",
    description: "Dominio EU de fotografía con backlinks de E-Monsite, JournalDuNet, CNRS y Wikipedia SV.",
    mozScore: 24,
    pageAuthority: 31,
    linkingDomains: 578,
    inboundLinks: "4.6K+",
    followedLinks: "3.8K+",
    category: "Fotografía",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "4.6K+",
    topBacklinks: ["e-monsite.com (DA 92)", "home.blog (DA 91)", "journaldunet.com (DA 91)", "cnrs.fr (DA 90)", "allthatsinteresting.com (DA 85)"]
  },
  {
    name: "eulis.eu",
    description: "Dominio EU con backlinks de Wikipedia (EN, ES, PT, FR), Europa.eu y MDPI.",
    mozScore: 24,
    pageAuthority: 33,
    linkingDomains: 246,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "General",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "1.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "pt.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)"]
  },
  {
    name: "maribe.eu",
    description: "Dominio EU marítimo con backlinks de Europa.eu, The Conversation, MDPI y Universidad de Bristol.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 90,
    inboundLinks: "146+",
    followedLinks: "115+",
    category: "Marítimo",
    price: "€125",
    backlinks: "146+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "mdpi.com (DA 92)", "siliconrepublic.com (DA 83)", "bristol.ac.uk (DA 78)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "200jaarstaten-generaal.nl",
    description: "Dominio gubernamental holandés con backlinks de NOS, Universidad de Leiden y Segunda Cámara.",
    mozScore: 22,
    pageAuthority: 21,
    linkingDomains: 37,
    inboundLinks: "150+",
    followedLinks: "136+",
    category: "Gobierno/Cultura",
    price: "€125",
    backlinks: "150+",
    topBacklinks: ["nos.nl (DA 90)", "universiteitleiden.nl (DA 82)", "transparent.com (DA 76)", "tweedekamer.nl (DA 64)", "rd.nl (DA 62)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eu-thor.eu",
    description: "Dominio de proyecto EU con backlinks de Wikipedia (EN, FR, DE), Europa.eu, Yumpu y WHOI.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 156,
    inboundLinks: "18.4K+",
    followedLinks: "18.3K+",
    category: "Proyectos",
    price: "€125",
    backlinks: "18.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "yumpu.com (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eccomascfd2006.nl",
    description: "Dominio técnico holandés con backlinks de TU Delft, Southampton, Liverpool y NTNU.",
    mozScore: 23,
    pageAuthority: 25,
    linkingDomains: 52,
    inboundLinks: "371+",
    followedLinks: "352+",
    category: "Tecnología",
    price: "€125",
    backlinks: "371+",
    topBacklinks: ["tudelft.nl (DA 85)", "soton.ac.uk (DA 85)", "uu.se (DA 83)", "liverpool.ac.uk (DA 83)", "ntnu.no (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "mbelgique.be",
    description: "Dominio nacional belga con backlinks de Wikipedia FR, BFMTV, Heise, NU.nl y Europe1.",
    mozScore: 23,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "113+",
    followedLinks: "87+",
    category: "General",
    price: "€125",
    backlinks: "113+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "bfmtv.com (DA 92)", "heise.de (DA 91)", "nu.nl (DA 91)", "europe1.fr (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "lifemanev.eu",
    description: "Dominio de proyecto EU sobre agricultura sostenible con backlinks de MDPI, ITACYL y CSIC.",
    mozScore: 23,
    pageAuthority: 24,
    linkingDomains: 40,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "Sostenibilidad",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["mdpi.com (DA 92)", "itacyl.es (DA 45)", "cebas.csic.es (DA 42)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  // DA 22
  {
    name: "bruegel2019.be",
    description: "Dominio de patrimonio cultural con backlinks de Campaign Archive, Knack.be y Brusselslife.",
    mozScore: 22,
    pageAuthority: 24,
    linkingDomains: 42,
    inboundLinks: "323+",
    followedLinks: "312+",
    category: "Arte/Patrimonio",
    price: "€125",
    backlinks: "323+",
    topBacklinks: ["campaign-archive.com (DA 84)", "knack.be (DA 70)", "brusselslife.be (DA 52)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "infoecmi.eu",
    description: "Dominio EU de información con backlinks de Wikipedia (EN, ES, PT, RU, DE), UCL y ETH Zürich.",
    mozScore: 22,
    pageAuthority: 31,
    linkingDomains: 259,
    inboundLinks: "1.2K+",
    followedLinks: "727+",
    category: "Información",
    price: "€125",
    backlinks: "1.2K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "pt.wikipedia.org (DA 96)", "ru.wikipedia.org (DA 94)", "ucl.ac.uk (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "romain-roquette.be",
    description: "Dominio belga personal/portfolio con backlinks de Airbnb, Foursquare, The Culture Trip y Knack.be.",
    mozScore: 22,
    pageAuthority: 28,
    linkingDomains: 63,
    inboundLinks: "112+",
    followedLinks: "74+",
    category: "Portfolio",
    price: "€125",
    backlinks: "112+",
    topBacklinks: ["airbnb.com (DA 93)", "foursquare.com (DA 92)", "theculturetrip.com (DA 89)", "untappd.com (DA 77)", "knack.be (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "naumburgermeister.eu",
    description: "Dominio alemán/EU de gobierno local con backlinks de Wikipedia (EN, ES, FR, RU, NL), Bit.ly y Creative Commons.",
    mozScore: 22,
    pageAuthority: 32,
    linkingDomains: 810,
    inboundLinks: "4.9K+",
    followedLinks: "4.7K+",
    category: "Gobierno",
    price: "€125",
    backlinks: "4.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "ru.wikipedia.org (DA 94)", "creativecommons.org (DA 94)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "europeanmuseumforum.eu",
    description: "Dominio foro museo europeo con backlinks de Wikipedia (EN, ES, FR, RU, NL), Bit.ly y Creative Commons.",
    mozScore: 22,
    pageAuthority: 32,
    linkingDomains: 810,
    inboundLinks: "4.9K+",
    followedLinks: "4.7K+",
    category: "Cultura",
    price: "€125",
    backlinks: "4.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "ru.wikipedia.org (DA 94)", "creativecommons.org (DA 94)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "escmalta2018.eu",
    description: "Dominio de evento ESC con backlinks de ETH Zürich, Azure, Copernicus, CSIC y Universidad Monash.",
    mozScore: 22,
    pageAuthority: 25,
    linkingDomains: 102,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "Eventos",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["ethz.ch (DA 89)", "azure.com (DA 84)", "copernicus.eu (DA 83)", "csic.es (DA 78)", "monash.edu (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "waterpipp.eu",
    description: "Dominio de proyecto EU de agua y medio ambiente con backlinks de Europa.eu, Bit.ly, Ask.com y Campaign Archive.",
    mozScore: 22,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "1.2K+",
    followedLinks: "1.1K+",
    category: "Medio Ambiente",
    price: "€125",
    backlinks: "1.2K+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "ask.com (DA 88)", "campaign-archive.com (DA 84)", "worldwidetopsite.com (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "artsalivewales.org.uk",
    description: "Dominio galés de arte/cultura con backlinks de The Guardian, Mirror, Eventbrite y Wales Online.",
    mozScore: 22,
    pageAuthority: 27,
    linkingDomains: 116,
    inboundLinks: "863+",
    followedLinks: "752+",
    category: "Arte",
    price: "€125",
    backlinks: "863+",
    topBacklinks: ["theguardian.com (DA 94)", "mirror.co.uk (DA 94)", "eventbrite.co.uk (DA 91)", "walesonline.co.uk (DA 90)", "constantcontact.com (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  // DA 21
  {
    name: "stationlansingerland-zoetermeer.nl",
    description: "Dominio holandés de transporte/estación con backlinks de Wikipedia (FR, NL), NS, Nieuws.nl y ProRail.",
    mozScore: 21,
    pageAuthority: 24,
    linkingDomains: 62,
    inboundLinks: "187+",
    followedLinks: "134+",
    category: "Transporte",
    price: "€79",
    backlinks: "187+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "nl.wikipedia.org (DA 91)", "ns.nl (DA 72)", "nieuws.nl (DA 63)", "prorail.nl (DA 55)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "oramed-fp7.eu",
    description: "Dominio de proyecto EU-FP7 de investigación médica con backlinks de Europa.eu, Springer, IIT y FGOV.be.",
    mozScore: 21,
    pageAuthority: 24,
    linkingDomains: 60,
    inboundLinks: "130+",
    followedLinks: "109+",
    category: "Investigación",
    price: "€79",
    backlinks: "130+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "iit.edu (DA 75)", "fgov.be (DA 72)", "upc.edu (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "ismagazine.nl",
    description: "Dominio holandés de revista/medios con backlinks de UNESCO, WUR y Startpagina.",
    mozScore: 21,
    pageAuthority: 20,
    linkingDomains: 56,
    inboundLinks: "496+",
    followedLinks: "339+",
    category: "Medios",
    price: "€79",
    backlinks: "496+",
    topBacklinks: ["unesco.org (DA 93)", "wur.nl (DA 71)", "jouwweb.nl (DA 63)", "startpagina.nl (DA 63)", "fok.nl (DA 59)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "wbetting.co.uk",
    description: "Dominio británico de apuestas/gaming con backlinks de OVH, Joomla.org, WSU y CSIC.",
    mozScore: 21,
    pageAuthority: 41,
    linkingDomains: 468,
    inboundLinks: "280.6K+",
    followedLinks: "198.3K+",
    category: "Gaming",
    price: "€79",
    backlinks: "280.6K+",
    topBacklinks: ["ovh.net (DA 92)", "joomla.org (DA 92)", "wsu.edu (DA 87)", "csic.es (DA 78)", "knows.nl (DA 65)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "fantasticgymnastics.nl",
    description: "Dominio holandés de deporte/gimnasia con backlinks de LiveInternet, Pages.dev, XSRV y Toolforge.",
    mozScore: 21,
    pageAuthority: 29,
    linkingDomains: 246,
    inboundLinks: "7.6K+",
    followedLinks: "7.5K+",
    category: "Deporte",
    price: "€79",
    backlinks: "7.6K+",
    topBacklinks: ["liveinternet.ru (DA 93)", "pages.dev (DA 91)", "xsrv.jp (DA 89)", "toolforge.org (DA 80)", "worldwidetopsite.com (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "nanostarproject.eu",
    description: "Dominio de proyecto EU de nanotecnología con backlinks de Springer, Sapo.pt, Pages.dev y universidades (UPM, UC3M).",
    mozScore: 21,
    pageAuthority: 28,
    linkingDomains: 76,
    inboundLinks: "338+",
    followedLinks: "306+",
    category: "Tecnología",
    price: "€79",
    backlinks: "338+",
    topBacklinks: ["springer.com (DA 93)", "sapo.pt (DA 93)", "pages.dev (DA 91)", "upm.es (DA 78)", "uc3m.es (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  // DA 20
  {
    name: "espresso-project.eu",
    description: "Dominio de proyecto de ciudad inteligente y movilidad con backlinks de Europa.eu, Medium, MDPI y Telecom TV.",
    mozScore: 20,
    pageAuthority: 28,
    linkingDomains: 81,
    inboundLinks: "191+",
    followedLinks: "146+",
    category: "Ciudad Inteligente",
    price: "€79",
    backlinks: "191+",
    topBacklinks: ["europa.eu (DA 97)", "medium.com (DA 95)", "mdpi.com (DA 92)", "campaign-archive.com (DA 84)", "telecomtv.com (DA 67)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
];

const PremiumDomainsES = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    
    // Validate form data
    const validation = validateContactForm(formData);
    
    if (!validation.success) {
      const errorResult = validation as { success: false; errors: Record<string, string> };
      setFormErrors(errorResult.errors);
      const firstError = Object.values(errorResult.errors)[0] || "Por favor verifique su entrada";
      toast({
        title: "Por favor corrija los errores del formulario",
        description: firstError,
        variant: "destructive"
      });
      return;
    }

    const { data } = validation;
    
    // Build safe mailto URL with sanitized data
    const subject = `Solicitud de Dominio Premium: ${data.domain}`;
    const body = `Nombre: ${data.name}\nCorreo electrónico: ${data.email}\nDominio: ${data.domain}\n\nMensaje:\n${data.message || ""}`;
    
    window.location.href = buildSafeMailtoUrl("support@iaee.eu", subject, body);
    
    toast({
      title: "Solicitud enviándose",
      description: "Su programa de correo se abrirá para enviar la solicitud."
    });
  };

  const handleDomainInquiry = (domainName: string) => {
    setFormData(prev => ({ ...prev, domain: domainName }));
    scrollToSection("contact");
  };

  return (
    <>
      <Helmet>
        <title>Dominios Premium Expirados con Backlinks de Alta Autoridad y Valor SEO</title>
        <meta name="description" content="¿Comprar dominio expirado con backlinks? Dominios expirados fiables con alta autoridad y valor SEO. Comprar dominio premium para posicionamiento más rápido en Google. Disponibles inmediatamente." />
        <meta name="keywords" content="comprar dominio expirado, dominios expirados con backlinks, dominio con autoridad, dominios expirados fiables, comprar dominio premium, dominio con valor SEO, dominio antiguo con enlaces, mejores dominios en venta" />
        <link rel="canonical" href="https://iaee.eu/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Language Switcher */}
        <LanguageSwitcher currentLanguage="es" />
        
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 flex-shrink-0" />
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent hover:from-amber-300 hover:to-amber-500 transition-all truncate">
                Dominios Premium
              </span>
            </RouterLink>
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <RouterLink to="/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
                <Home className="h-4 w-4" />
                Inicio
              </RouterLink>
              <button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Dominios
              </button>
              <button onClick={() => scrollToSection("why-premium")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                ¿Por Qué Premium?
              </button>
              <button onClick={() => scrollToSection("seo-redirects")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                SEO y Redirecciones
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold"
              >
                Contacto
              </Button>
            </nav>
            <Button 
              onClick={() => scrollToSection("domains")}
              className="md:hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-xs px-3 py-2"
            >
              Dominios
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 sm:mb-6 bg-amber-500/10 text-amber-400 border-amber-500/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 inline" />
                Colección Exclusiva de Dominios Premium
              </Badge>
              
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Dominios Premium Expirados con Backlinks de Alta Autoridad y Valor SEO
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Fortalezca su presencia online con nombres de dominio que ya han construido autoridad durante años. 
                Ideal para posicionamientos más rápidos, backlinks potentes y ventajas SEO directas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("domains")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-105"
                >
                  Ver Dominios
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("why-premium")}
                  className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6"
                >
                  Más Información
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2">
                {[
                  { label: "Puntuación MOZ Media", value: "29+" },
                  { label: "Dominios Premium", value: "110+" },
                  { label: "Años de Experiencia", value: "10+" },
                  { label: "Clientes Satisfechos", value: "500+" }
                ].map((stat, index) => (
                  <div key={index} className="p-3 sm:p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Domain Listings */}
        <section id="domains" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                <Globe className="w-4 h-4 mr-2 inline" />
                Dominios Disponibles
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nombres de Dominio Premium en Venta
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Cada dominio ha sido cuidadosamente seleccionado en base a su autoridad MOZ, perfil de backlinks y potencial SEO. 
                ¿Quiere <strong className="text-white">comprar un dominio expirado</strong> o busca <strong className="text-white">dominios expirados fiables</strong>? Vea nuestra oferta a continuación.
              </p>
            </div>
            
            {/* SEO Intro Text */}
            <div className="max-w-5xl mx-auto mb-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">¿Buscando un nombre de dominio con valor SEO real?</strong> Con nosotros compra <strong className="text-amber-400">dominios expirados con backlinks</strong> fiables y alta autoridad, cuidadosamente verificados en calidad e historial. Con un dominio expirado no empieza desde cero, sino que se beneficia directamente de enlaces existentes, confianza e historial online.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-amber-400">Nos especializamos en .EU y otras extensiones de dominio europeas</strong> y nos distinguimos claramente en el segmento de nombres web europeos.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Además de dominios expirados, también ofrecemos <strong className="text-amber-400">dominios premium</strong>: nombres cortos y potentes con valor de marca y potencial comercial. Ya sea que inicie un sitio web, tienda online o proyecto SEO, un <strong className="text-white">dominio con autoridad</strong> le da una clara ventaja en Google.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                <strong className="text-white">Muy buscado:</strong> comprar dominio expirado con backlinks • dominios expirados fiables • dominio expirado con autoridad • comprar dominio premium • dominio con valor SEO • dominio antiguo con enlaces • mejores dominios en venta
              </p>
            </div>

            {/* Important Information Box */}
            <div className="max-w-5xl mx-auto mb-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-amber-500/30 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-amber-400" />
                Importante Saber
              </h3>
              <p className="text-amber-400 font-medium mb-4">🌐 Accesible globalmente – también para compradores fuera de la UE</p>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  <span className="text-amber-400 font-semibold">Residentes de la UE</span> pueden registrar libremente todas las extensiones de dominio europeas
                </p>
                <p>
                  <span className="text-white font-semibold">.NL · .BE · .CO.UK</span> son registrables libremente en todo el mundo
                </p>
                <p>
                  Para <span className="text-amber-400 font-semibold">.EU · .IT · .FR · .DE</span> normalmente se requiere una dirección de la UE o empresa de la UE
                </p>
                <p className="text-amber-400 font-medium pt-2">
                  ➡️ ¿No es residente de la UE? No hay problema, puede registrar fácilmente estos dominios a través de un registrador de dominios con servicio de trustee — Utilizando su dirección física de la UE para el registro.{" "}
                  <a 
                    href="#trustee-service-section" 
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('trustee-service-section');
                      element?.scrollIntoView({ behavior: 'smooth' });
                      const trigger = element?.querySelector('button');
                      if (trigger && trigger.getAttribute('data-state') === 'closed') {
                        trigger.click();
                      }
                    }}
                    className="underline hover:text-amber-300 cursor-pointer"
                  >
                    ¿Qué es un Servicio de Trustee?
                  </a>
                </p>
              </div>
            </div>

            {/* VAT Notice */}
            <div className="max-w-5xl mx-auto mb-10 text-center">
              <p className="text-sm text-slate-300 font-medium bg-slate-800/40 border border-slate-700/40 rounded-lg px-4 py-3 inline-block">
                <span className="text-amber-400 font-semibold">Información de IVA:</span> Los precios son sin IVA para clientes particulares dentro de la UE. Los clientes comerciales dentro de la UE pueden aplicar la inversión del sujeto pasivo. Para clientes fuera de la UE no se cobra IVA.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {premiumDomains.map((domain, index) => (
                <Card 
                  key={index} 
                  className="h-full flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group"
                >
                  <CardHeader className="p-3 sm:p-4 pb-2 sm:pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="outline" className="text-[10px] sm:text-xs border-slate-600 text-slate-400">
                        {domain.category}
                      </Badge>
                      <div className="flex items-center gap-1 bg-amber-500/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                        <BarChart3 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
                        <span className="text-[10px] sm:text-xs font-semibold text-amber-400">MOZ {domain.mozScore}</span>
                      </div>
                    </div>
                    <CardTitle className="text-base sm:text-lg md:text-xl text-white group-hover:text-amber-400 transition-colors mt-2 sm:mt-3 break-all">
                      {domain.name}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-slate-400">
                      {domain.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-4 pt-0 flex flex-col flex-grow">
                    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-slate-400">
                          <Link className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Backlinks: {domain.backlinks}</span>
                        </div>
                      </div>
                      
                      {/* Extra stats for domains with detailed info */}
                      {domain.pageAuthority && (
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Page Authority:</span>
                            <span className="text-white ml-1 font-medium">{domain.pageAuthority}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Linking Domains:</span>
                            <span className="text-white ml-1 font-medium">{domain.linkingDomains}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Inbound Links:</span>
                            <span className="text-white ml-1 font-medium">{domain.inboundLinks}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Followed Links:</span>
                            <span className="text-white ml-1 font-medium">{domain.followedLinks}</span>
                          </div>
                        </div>
                      )}
                      
                      {/* Top backlinks */}
                      {domain.topBacklinks && domain.topBacklinks.length > 0 && (
                        <div className="text-[10px] sm:text-xs">
                          <span className="text-slate-500 block mb-1">Top Backlinks:</span>
                          <div className="flex flex-col gap-0.5 sm:gap-1">
                            {domain.topBacklinks.slice(0, 5).map((link, i) => (
                              <Badge key={i} variant="outline" className="text-[8px] sm:text-[10px] border-amber-500/30 text-amber-400/80 bg-amber-500/5 w-fit">
                                {link}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Use Cases */}
                      {domain.useCases && domain.useCases.length > 0 && (
                        <div className="text-[10px] sm:text-xs">
                          <span className="text-slate-500 block mb-1">Ideal para:</span>
                          <div className="flex flex-wrap gap-0.5 sm:gap-1">
                            {domain.useCases.map((useCase, i) => (
                              <Badge key={i} variant="outline" className="text-[8px] sm:text-[10px] border-emerald-500/30 text-emerald-400/80 bg-emerald-500/5">
                                {useCase}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Price Display - Compact at bottom */}
                    <div className="mt-auto pt-3 sm:pt-4 border-t border-slate-700/50">
                      <div className="flex items-center justify-between mb-2 sm:mb-3 bg-slate-800/60 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                        <span className="text-xs sm:text-sm font-medium text-slate-300">Precio</span>
                        <span className="text-base sm:text-lg font-bold text-amber-400">{domain.price}</span>
                      </div>
                      
                      
                        <div className="flex flex-col gap-2 sm:gap-3">
                          {domain.stripePaymentLink ? (
                            <a 
                              href={domain.stripePaymentLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-center gap-2 px-3 sm:px-6 py-2.5 sm:py-4 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold rounded-md transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-lg"
                            >
                              Comprar Ahora
                            </a>
                          ) : (
                            <div 
                              className="w-full inline-flex items-center justify-center gap-2 px-3 sm:px-6 py-2.5 sm:py-4 bg-[#F59E0B] text-slate-950 font-bold rounded-md shadow-md text-sm sm:text-lg"
                            >
                              Comprar Ahora
                            </div>
                          )}
                          <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-center" data-nosnippet>
                            <div className="flex items-center justify-center gap-0.5 sm:gap-1 flex-wrap">
                              {/* Visa */}
                              <div className="flex items-center bg-[#1A1F71] rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
                                <span className="text-white font-bold text-[5px] sm:text-[7px] italic tracking-tight" style={{fontFamily: 'Arial'}}>VISA</span>
                              </div>
                              {/* Mastercard */}
                              <div className="flex items-center bg-[#000000] rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
                                <svg className="h-2 sm:h-2.5 w-3 sm:w-4" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="11" cy="10" r="8" fill="#EB001B"/><circle cx="21" cy="10" r="8" fill="#F79E1B"/>
                                  <path d="M16 3.5C18.5 5.5 20 7.5 20 10C20 12.5 18.5 14.5 16 16.5C13.5 14.5 12 12.5 12 10C12 7.5 13.5 5.5 16 3.5Z" fill="#FF5F00"/>
                                </svg>
                              </div>
                              {/* PayPal */}
                              <div className="flex items-center bg-[#003087] rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
                                <span className="text-white font-bold text-[5px] sm:text-[7px] italic" style={{fontFamily: 'Arial'}}>Pay</span>
                                <span className="text-[#00ADEF] font-bold text-[5px] sm:text-[7px] italic" style={{fontFamily: 'Arial'}}>Pal</span>
                              </div>
                              {/* Amazon Pay */}
                              <div className="flex items-center bg-[#232F3E] rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
                                <svg className="h-2 sm:h-2.5 w-6 sm:w-8" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <text x="2" y="13" fill="#FF9900" fontSize="10" fontWeight="bold" fontFamily="Arial">amazon</text>
                                  <path d="M2 16C8 18 16 19 24 18C28 17.5 32 16.5 35 15" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                                  <path d="M34 13L36 15L34 17" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                  <text x="38" y="13" fill="white" fontSize="8" fontFamily="Arial">pay</text>
                                </svg>
                              </div>
                              {/* Apple Pay */}
                              <div className="flex items-center bg-black rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
                                <svg className="h-2 sm:h-2.5 w-5 sm:w-6" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.5 4C9.5 4 10.3 3.5 10.8 2.7C11.3 2 11.5 1 11.4 0C10.5 0.1 9.4 0.6 8.8 1.4C8.3 2 7.9 3 8 4C9 4 9.5 4 8.5 4Z" fill="white"/>
                                  <path d="M11.4 4.3C9.8 4.2 8.4 5.2 7.6 5.2C6.8 5.2 5.6 4.3 4.3 4.4C2.6 4.4 1 5.3 0.2 6.9C-1.5 10 0.1 14.5 1.7 17C2.5 18.2 3.5 19.6 4.8 19.5C6 19.5 6.5 18.7 8 18.7C9.5 18.7 10 19.5 11.3 19.5C12.6 19.5 13.5 18.2 14.3 17C15.2 15.7 15.6 14.4 15.6 14.3C15.6 14.3 12.5 13.1 12.5 9.6C12.5 6.5 15 5.1 15.1 5C13.8 3.1 11.8 4.3 11.4 4.3Z" fill="white"/>
                                  <text x="18" y="14" fill="white" fontSize="10" fontWeight="500" fontFamily="Arial">Pay</text>
                                </svg>
                              </div>
                              {/* GPay */}
                              <div className="flex items-center bg-white rounded px-0.5 sm:px-1 py-0.5 border border-slate-300 h-3 sm:h-4">
                                <span className="font-bold text-[5px] sm:text-[7px]" style={{fontFamily: 'Arial'}}>
                                  <span style={{color: '#4285F4'}}>G</span>
                                  <span style={{color: '#5F6368'}}>Pay</span>
                                </span>
                              </div>
                              {/* Klarna */}
                              <div className="flex items-center bg-[#FFB3C7] rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
                                <span className="text-black font-bold text-[5px] sm:text-[7px]" style={{fontFamily: 'Arial'}}>Klarna</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-2">
                              <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400" />
                              <div className="flex items-center bg-[#635BFF] rounded px-1.5 sm:px-2 py-0.5">
                                <span className="text-white font-bold text-xs sm:text-sm" style={{fontFamily: 'Arial'}}>stripe</span>
                              </div>
                            </div>
                            <div data-nosnippet>
                              <p className="text-[8px] sm:text-[10px] text-slate-400 leading-tight mt-1.5 sm:mt-2">
                                Pago seguro vía Stripe
                                <br />
                                Convertido automáticamente a su moneda local
                              </p>
                              <p className="text-[8px] sm:text-[10px] text-slate-400 leading-tight mt-2 sm:mt-3">
                                Después del pago recibirá el token de transferencia (código EPP/Auth) en su correo electrónico dentro de 24 horas.
                                <br />
                                Revise también su carpeta de spam.
                              </p>
                              <a href="#domain-transfer" className="text-[8px] sm:text-[10px] text-amber-400 hover:text-amber-300 underline mt-1.5 sm:mt-2">
                                ¿Cómo funciona la transferencia?
                              </a>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Premium Domains */}
        <section id="why-premium" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                <Award className="w-4 h-4 mr-2 inline" />
                Ventaja Estratégica
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Por Qué Nombres de Dominio Premium?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Los nombres de dominio premium con alta autoridad MOZ son una inversión estratégica que le da una enorme ventaja en los resultados de búsqueda.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Posicionamiento Más Rápido en Google",
                  description: "Los dominios con autoridad existente se posicionan más rápido que los dominios nuevos. Google confía en sitios web con un historial probado."
                },
                {
                  icon: Shield,
                  title: "Más Confianza de Google",
                  description: "Un dominio con años de historia y backlinks de calidad es visto por Google como más confiable y obtiene posiciones más altas."
                },
                {
                  icon: Target,
                  title: "Mayores Tasas de Clics (CTR)",
                  description: "Los nombres de dominio premium generan confianza en los usuarios, lo que resulta en mayores tasas de clics en resultados de búsqueda y anuncios."
                },
                {
                  icon: Zap,
                  title: "Ventaja SEO Directa",
                  description: "En lugar de esperar años para construir autoridad, se beneficia directamente del valor SEO existente del dominio."
                },
                {
                  icon: Globe,
                  title: "Tráfico Directo Type-In",
                  description: "Los nombres de dominio premium memorables generan tráfico directo de usuarios que escriben el dominio directamente en su navegador."
                },
                {
                  icon: Award,
                  title: "Inversión SEO Sostenible",
                  description: "Un dominio premium es un activo que aumenta de valor a medida que crece su presencia online y aumenta la autoridad."
                }
              ].map((item, index) => (
                <Card key={index} className="bg-slate-800/30 border-slate-700/50 hover:border-amber-500/30 transition-all group">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center mb-4 group-hover:from-amber-500/30 group-hover:to-amber-600/20 transition-all">
                      <item.icon className="h-6 w-6 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* SEO Value Explanation */}
            <div className="mt-16 max-w-4xl mx-auto">
              <Card className="bg-slate-950 border-amber-500/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    El Poder de MOZ Domain Authority
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    MOZ Domain Authority (DA) es una puntuación del 1 al 100 que predice qué tan bien se posicionará un sitio web en los motores de búsqueda. 
                    Cuanto mayor sea la puntuación, más autoridad ha construido el dominio a través de backlinks de calidad, antigüedad y confiabilidad.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="rounded-lg bg-black border border-cyan-500/50 p-4 text-center">
                      <div className="text-xl font-bold text-cyan-400 mb-1">DA 20-25</div>
                      <div className="text-sm font-medium text-white">Buena Autoridad</div>
                    </div>
                    
                    <div className="rounded-lg bg-black border border-yellow-500/50 p-4 text-center">
                      <div className="text-xl font-bold text-yellow-400 mb-1">DA 25-30</div>
                      <div className="text-sm font-medium text-white">Fuerte Autoridad</div>
                    </div>
                    
                    <div className="rounded-lg bg-black border border-green-500/50 p-4 text-center">
                      <div className="text-xl font-bold text-green-400 mb-1">DA 30+</div>
                      <div className="text-sm font-medium text-white">Autoridad Premium</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEO Redirects & Authority Building */}
        <section id="seo-redirects" className="py-20 bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                <Link className="w-4 h-4 mr-2 inline" />
                Estrategias SEO
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Cómo Funcionan las Redirecciones SEO y la Construcción de Autoridad?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Hay múltiples formas estratégicas de utilizar dominios premium para un impacto SEO máximo.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Estrategia de Redirección 301",
                  description: "Una redirección 301 transfiere todo el valor SEO y la autoridad del dominio premium a su dominio principal. Esta es la forma más rápida de mejorar sus posiciones.",
                  benefits: [
                    "Transferencia directa de link juice",
                    "Conservación de todos los backlinks",
                    "Impulso rápido en autoridad",
                    "Configuración única, efecto permanente"
                  ]
                },
                {
                  title: "Authority Stacking",
                  description: "Construya una red de dominios autoritativos que todos enlacen a su sitio principal. Esto crea un poderoso ecosistema de backlinks relevantes y de alta calidad.",
                  benefits: [
                    "Múltiples fuentes de autoridad",
                    "Relevancia temática",
                    "Perfil de enlaces natural",
                    "Estrategia SEO a largo plazo"
                  ]
                },
                {
                  title: "Usar como Dominio Principal",
                  description: "Inicie su nuevo proyecto directamente con un dominio que ya tiene autoridad. Esto ahorra años de link building y construcción de antigüedad de dominio.",
                  benefits: [
                    "Empezar directamente con autoridad",
                    "Confianza existente de Google",
                    "Indexación más rápida",
                    "Ventaja sobre la competencia"
                  ]
                },
                {
                  title: "Private Blog Network (PBN)",
                  description: "Use dominios premium para configurar sitios de contenido valiosos que generen backlinks potentes hacia su sitio principal.",
                  benefits: [
                    "Control total sobre backlinks",
                    "Sitios de contenido temático",
                    "Perfiles de enlaces diversos",
                    "Link building escalable"
                  ]
                }
              ].map((strategy, index) => (
                <Card key={index} className="bg-slate-800/40 border-slate-700/50 hover:border-amber-500/30 transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{strategy.title}</h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">{strategy.description}</p>
                    <ul className="space-y-2">
                      {strategy.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300">
                          <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Unique Value Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Por Qué Estos Dominios Son Únicos
                </h3>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Nuestros dominios premium han sido cuidadosamente seleccionados y cumplen con estrictos requisitos de calidad.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { icon: Shield, title: "Historial Limpio", desc: "Sin historial de spam o penalizaciones" },
                  { icon: Link, title: "Backlinks de Calidad", desc: "De fuentes confiables" },
                  { icon: BarChart3, title: "Alta Puntuación DA", desc: "Mínimo DA 20+" },
                  { icon: Globe, title: "Extensiones EU/UK", desc: "Dominios de alta calidad" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                Preguntas Frecuentes
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Encuentre respuestas a las preguntas más frecuentes sobre dominios premium y SEO.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Qué es un dominio expirado?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Un dominio expirado es un nombre de dominio que no fue renovado por el propietario anterior. Estos dominios a menudo tienen backlinks existentes, autoridad en motores de búsqueda e historial, lo que puede ser valioso para SEO.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Cómo me beneficia un dominio premium para SEO?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Los dominios premium con alta autoridad pueden ayudarle a posicionarse más rápido en los resultados de búsqueda. Tienen backlinks existentes, confianza de los motores de búsqueda y una historia probada. Esto puede ahorrarle meses o incluso años de link building.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Qué es MOZ Domain Authority?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    MOZ Domain Authority (DA) es una puntuación del 1 al 100 desarrollada por MOZ que predice qué tan bien se posicionará un sitio web en los resultados de búsqueda. Cuanto mayor sea la puntuación, más autoridad tiene el dominio. Una puntuación DA de 30+ se considera excelente.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Cómo funciona la transferencia de dominio?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Después de su compra, recibirá el código de transferencia (código EPP/Auth) dentro de 24 horas. Con este código puede transferir el dominio a su propio registrador o proveedor de hosting. Las transferencias generalmente toman de 1 a 5 días hábiles.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Es posible obtener un reembolso?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Debido a la naturaleza de los productos digitales y la singularidad de los nombres de dominio, todas las ventas son finales. Le recomendamos investigar a fondo antes de la compra. Proporcionamos todas las métricas e información relevante por adelantado.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Cómo sé si un dominio es adecuado para mi proyecto?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Verifique el perfil de backlinks, el historial del dominio y la relevancia para su nicho. Proporcionamos métricas detalladas para cada dominio. ¿Tiene dudas? Contáctenos para asesoramiento personalizado.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Qué métodos de pago aceptan?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Aceptamos todas las principales tarjetas de crédito (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, iDEAL, Bancontact, Klarna y muchos otros métodos de pago a través de nuestra integración segura con Stripe.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-8" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Puedo usar el dominio inmediatamente después de la compra?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Recibirá el código de transferencia dentro de 24 horas después del pago. Después de transferir el dominio a su registrador, generalmente toma de 1 a 5 días hábiles. Después de eso, puede usar el dominio inmediatamente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Cómo puedo verificar el historial de un dominio?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Puede verificar el historial de un dominio usando herramientas como Wayback Machine (archive.org), MOZ Link Explorer, Ahrefs o SEMrush. Hemos verificado todos nuestros dominios en busca de historial de spam y penalizaciones.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Qué pasa con los backlinks existentes después de la compra?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Los backlinks permanecen mientras no sean eliminados por los sitios web de referencia. Esta es precisamente una de las grandes ventajas de comprar un dominio expirado - hereda los enlaces existentes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Es legal comprar dominios expirados?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Sí, comprar dominios expirados es completamente legal. Una vez que un dominio expira y está disponible para el público, puede ser comprado por cualquiera. Es su responsabilidad asegurarse de que su uso no infrinja marcas registradas existentes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Puedo negociar el precio?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Nuestros precios están basados en extensas investigaciones de mercado y métricas de dominio. Para compras más grandes o preguntas específicas, puede contactarnos para discutir posibilidades.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Cuánto tiempo permanecerá activo un dominio?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Después de la transferencia, usted es el propietario del dominio. Debe renovar el dominio anualmente con su registrador. Mientras continúe renovando, el dominio permanece activo indefinidamente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Qué pasa si tengo problemas con la transferencia?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Nuestro equipo de soporte está listo para ayudarle con cualquier problema de transferencia. Contáctenos en support@iaee.eu y responderemos dentro de 24 horas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Ofrecen dominios personalizados?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Nuestro enfoque principal está en dominios premium con autoridad existente. Si está buscando un dominio específico, contáctenos y veremos qué podemos hacer por usted.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-16" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Cómo contacto con soporte?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Puede contactarnos en support@iaee.eu. Respondemos a todos los correos electrónicos dentro de 24 horas. Para preguntas urgentes, use el formulario de contacto en esta página.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-17" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">
                    ¿Por qué a veces aparecen sitios web de su portfolio en el historial de un dominio?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Algunos nombres de dominio en nuestro portfolio se han utilizado anteriormente para nuestros propios proyectos, sitios web de prueba o redirecciones 301. Esto incluye sitios web como NailTalk, OntwerpNovi, OliveVines y proyectos similares. Esto es en realidad una ventaja: estos dominios tienen resultados comprobados y han sido probados activamente para el rendimiento SEO. Todos nuestros nombres de dominio se verifican exhaustivamente en múltiples fuentes antes de la venta (como archivos de historial web, Google, Ahrefs, MOZ y verificadores de spam) y están completamente libres de pasado dañino como spam, contenido para adultos o historial de juegos de azar. Un sitio web de nuestro propio portfolio en el historial es, por lo tanto, una señal de calidad y gestión cuidadosa — no un motivo de preocupación.
                  </AccordionContent>
                </AccordionItem>

                {/* Complete Guide */}
                <AccordionItem value="complete-guide" className="bg-slate-800/50 border border-amber-500/30 rounded-lg px-6">
                  <AccordionTrigger className="text-amber-400 hover:text-amber-300 text-lg font-semibold">
                    📚 Guía Completa: Todo Sobre Dominios Expirados (36 Preguntas)
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    <div className="space-y-6 pt-4">
                      {[
                        {
                          question: "1. ¿Qué es exactamente un dominio expirado?",
                          answer: "Un dominio expirado es un nombre de dominio que: no fue renovado por el propietario original, ha pasado el período de gracia del registrador, y ahora está disponible para el registro público nuevamente. Durante ese tiempo, el dominio ha construido historial, backlinks y posiblemente autoridad en motores de búsqueda."
                        },
                        {
                          question: "2. ¿Por qué alguien compraría un dominio expirado en lugar de uno nuevo?",
                          answer: "Porque un dominio expirado tiene una ventaja: puede ya tener backlinks, autoridad de dominio (DA) y confianza de los motores de búsqueda. Esto puede ayudarle a posicionarse más rápido que empezando desde cero."
                        },
                        {
                          question: "3. ¿Son todos los dominios expirados valiosos?",
                          answer: "No. Muchos dominios expirados no tienen valor porque: no tienen backlinks, fueron usados para spam, o no tienen relevancia para su nicho. Solo dominios cuidadosamente seleccionados con un historial limpio y backlinks de calidad son valiosos."
                        },
                        {
                          question: "4. ¿Cómo sé si un dominio expirado es confiable?",
                          answer: "Un dominio expirado confiable tiene: un historial limpio (sin spam, sin penalizaciones de Google), backlinks de sitios respetables, una puntuación de autoridad de dominio que refleja calidad real."
                        },
                        {
                          question: "5. ¿Cuál es la diferencia entre un dominio premium y un dominio expirado?",
                          answer: "Un dominio premium es un dominio con un nombre valioso, corto o memorable. Un dominio expirado es un dominio que alguna vez fue registrado y luego quedó disponible nuevamente. Algunos dominios expirados también son premium por su nombre, pero eso no es automático."
                        },
                        {
                          question: "6. ¿Qué significa 'dominio con autoridad'?",
                          answer: "Un 'dominio con autoridad' significa: el dominio tiene una puntuación DA (Domain Authority) de al menos 20+, tiene backlinks de sitios confiables, y Google lo ve como creíble."
                        },
                        {
                          question: "7. ¿Cuál es la diferencia entre DA, PA y DR?",
                          answer: "DA (Domain Authority de MOZ): puntuación del 1-100 que indica la fuerza del dominio. PA (Page Authority de MOZ): puntuación para páginas específicas. DR (Domain Rating de Ahrefs): puntuación comparable pero de una herramienta diferente."
                        },
                        {
                          question: "8. ¿Puedo simplemente configurar una redirección 301 desde un dominio expirado?",
                          answer: "Sí, pero solo si el dominio es suyo. Una redirección 301 transfiere parte del link juice a su dominio principal. Nota: funciona mejor cuando hay relevancia temática entre los dos dominios."
                        },
                        {
                          question: "9. ¿Son los dominios expirados buenos para la construcción de enlaces?",
                          answer: "Sí, si se usan correctamente. Puede usar dominios expirados como 'sites satélite' que enlazan a su sitio principal. Esto se llama a menudo una PBN (Private Blog Network), aunque las prácticas correctas y sutiles funcionan mejor."
                        },
                        {
                          question: "10. ¿Cuáles son los riesgos de comprar un dominio expirado?",
                          answer: "Historial de spam, penalizaciones de Google, backlinks de baja calidad o irrelevantes, y falta de relevancia con su marca. Por eso es crucial comprar solo dominios expirados fiables de un vendedor especializado."
                        },
                        {
                          question: "11. ¿Cómo puedo verificar el historial de spam de un dominio?",
                          answer: "Use herramientas como: Wayback Machine (archive.org), para ver el contenido antiguo, MOZ Spam Score, Google Search Console (después de añadir), Ahrefs o SEMrush para el perfil de backlinks."
                        },
                        {
                          question: "12. ¿Es legal comprar un dominio expirado?",
                          answer: "Sí, siempre que no infrinja marcas registradas de terceros. Después de la expiración, el dominio vuelve a estar disponible públicamente."
                        },
                        {
                          question: "13. ¿Cuánto cuesta un buen dominio expirado?",
                          answer: "Desde unas pocas decenas de euros para dominios simples, hasta cientos o miles para dominios premium con mucha autoridad o nombres únicos."
                        },
                        {
                          question: "14. ¿Dónde puedo comprar dominios expirados?",
                          answer: "A través de un vendedor especializado (como nosotros), subastas, o plataformas de dominios expirados. La ventaja de un vendedor especializado: pre-verificación, asesoramiento y garantía de calidad."
                        },
                        {
                          question: "15. ¿Cuánto tiempo se tarda en transferir un dominio?",
                          answer: "Depende de la extensión del dominio: .com/.net: 5-7 días, .nl: 1-3 días, .eu/.be: 1-5 días. Esto también depende del registrador."
                        },
                        {
                          question: "16. ¿Qué es un código EPP o Auth code?",
                          answer: "Este es el 'código de transferencia' que necesita para transferir un dominio a su propio registrador."
                        },
                        {
                          question: "17. ¿Puedo usar un dominio expirado para mi propia marca?",
                          answer: "Sí, pero preferiblemente si el nombre del dominio se ajusta a su marca. Si no, use el dominio para redirección o como site satélite."
                        },
                        {
                          question: "18. ¿Pierden los dominios expirados su autoridad con el tiempo?",
                          answer: "Sí, si permanecen offline durante demasiado tiempo. Por eso es importante activarlos rápidamente después de la compra."
                        },
                        {
                          question: "19. ¿Debo alojar contenido en un dominio expirado?",
                          answer: "Eso depende de su estrategia. Para una redirección 301, no necesita contenido. Para un site satélite o uso de marca, sí."
                        },
                        {
                          question: "20. ¿Qué extensión de dominio es mejor?",
                          answer: ".com es la más universal. .nl es fuerte para los Países Bajos. .eu es bueno para confianza europea. .co.uk y .de tienen autoridad regional."
                        },
                        {
                          question: "21. ¿Cómo veo qué backlinks tiene un dominio?",
                          answer: "Con herramientas como: MOZ Link Explorer, Ahrefs, SEMrush, Majestic."
                        },
                        {
                          question: "22. ¿Qué significa 'perfil de backlinks limpio'?",
                          answer: "Significa: sin enlaces de spam, sin granjas de enlaces, sin enlaces pagados no naturales, solo enlaces de sitios legítimos y relevantes."
                        },
                        {
                          question: "23. ¿Cuál es la mayor ventaja de un dominio expirado?",
                          answer: "La mayor ventaja es que no empieza desde cero en los motores de búsqueda."
                        },
                        {
                          question: "24. ¿Cuál es el mayor malentendido sobre los dominios expirados?",
                          answer: "Que son inherentemente arriesgados. En realidad, los dominios no probados son arriesgados, no los dominios expirados cuidadosamente seleccionados."
                        },
                        {
                          question: "25. ¿Para quién es más adecuado un dominio expirado fiable?",
                          answer: "Para: emprendedores, startups, tiendas online, proyectos SEO, inversores. Cualquiera que busque 'mejor dominio para comprar' y quiera empezar de forma inteligente."
                        },
                        {
                          question: "26. ¿Cómo sé si un dominio es adecuado para SEO?",
                          answer: "Un dominio es adecuado para SEO si: el nombre es lógico y relevante, no tiene historial de spam, hay backlinks de calidad presentes. Un dominio expirado con buenos enlaces a menudo puntúa mejor que un dominio nuevo."
                        },
                        {
                          question: "27. ¿Comprar un dominio expirado afecta las posiciones en Google?",
                          answer: "Sí. Google mira el historial y la estructura de enlaces de un dominio. Un dominio expirado fiable puede ayudar a construir visibilidad más rápido, si se usa correctamente."
                        },
                        {
                          question: "28. ¿Cuáles son las ventajas de un dominio expirado con autoridad?",
                          answer: "Las principales ventajas son: confianza más rápida de los motores de búsqueda, menos dependencia del link building, posición de partida más fuerte que los competidores con dominios nuevos."
                        },
                        {
                          question: "29. ¿Necesito tener una palabra clave en mi nombre de dominio para SEO?",
                          answer: "No necesariamente. Búsquedas como 'dominio con palabra clave SEO' muestran que es una pregunta frecuente. Un nombre claro y fiable es más importante que palabras clave exactas, especialmente para dominios expirados con autoridad."
                        },
                        {
                          question: "30. ¿Es mejor un nombre de dominio corto que uno largo?",
                          answer: "Sí. Los nombres de dominio cortos son: más fáciles de recordar, más profesionales, más valiosos. Muchos dominios expirados premium son precisamente cortos y potentes."
                        },
                        {
                          question: "31. ¿Puedo usar un dominio expirado para múltiples proyectos?",
                          answer: "Sí, por ejemplo para: un sitio web principal, un proyecto de nicho, un portal de marca. Sin embargo, es importante que el contenido conecte lógicamente con el historial del dominio."
                        },
                        {
                          question: "32. ¿Qué pasa con los backlinks antiguos si pongo un nuevo sitio web?",
                          answer: "Los backlinks permanecen mientras no sean eliminados por los sitios web de referencia. Esa es precisamente una de las grandes ventajas de comprar un dominio expirado."
                        },
                        {
                          question: "33. ¿Es un dominio expirado mejor que múltiples dominios nuevos?",
                          answer: "Para enfoque y SEO, un dominio expirado fuerte es a menudo más efectivo que múltiples dominios nuevos sin autoridad."
                        },
                        {
                          question: "34. ¿Puedo conseguir clientes más rápido con un dominio expirado?",
                          answer: "Indirectamente sí. Visibilidad más rápida y más confianza hacen que los visitantes conviertan antes."
                        },
                        {
                          question: "35. ¿Cuánto tiempo permanece preservado el valor de un dominio expirado?",
                          answer: "Mientras el dominio se use y mantenga bien, el valor permanece preservado e incluso puede crecer."
                        },
                        {
                          question: "36. ¿Por qué debería comprar un dominio de un vendedor especializado?",
                          answer: "Porque un vendedor especializado: verifica los dominios por adelantado, excluye riesgos, guía a principiantes, es transparente sobre calidad e historial. Eso marca la diferencia entre apostar e invertir conscientemente."
                        }
                      ].map((item, index) => (
                        <article key={index} className="space-y-2">
                          <h4 className="text-lg font-semibold text-white">{item.question}</h4>
                          <p className="text-slate-400">{item.answer}</p>
                        </article>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Trustee Service Section */}
        <section id="trustee-service-section" className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem 
                  value="trustee-service"
                  className="bg-gradient-to-br from-amber-500/10 to-slate-800/40 border border-amber-500/30 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-amber-400 hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <h3 className="text-lg sm:text-xl font-semibold">Dominios Premium .EU y Extensiones Europeas con Historia — ¿Qué es un Servicio de Trustee?</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pb-6 leading-relaxed">
                    <div className="space-y-6">
                      {/* Introduction */}
                      <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                        <p className="text-sm sm:text-base mb-3">
                          Nos especializamos en <span className="text-amber-400 font-semibold">.EU y otras extensiones de dominio europeas</span>. Nuestro portafolio consiste en <span className="text-white font-semibold">nombres de dominio premium y expirados</span> con historial online probado, a menudo de antiguos proyectos e iniciativas europeas.
                        </p>
                        <p className="text-amber-400 font-medium">🌐 Accesible globalmente – también para compradores fuera de la UE mediante registro trustee usando una dirección UE verificada.</p>
                      </div>

                      {/* What is a Trustee */}
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                          🔐 ¿Qué es un Trustee (Servicio de Presencia Local)?
                        </h4>
                        <p className="mb-3">Un trustee es un registrador reconocido que:</p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                            <span>Usa una dirección física dentro de la UE para el registro</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                            <span>Actúa como contacto administrativo con el registro</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                            <span>Asegura que el dominio cumpla con todas las reglas de la UE</span>
                          </li>
                        </ul>
                      </div>

                      {/* What this means for you */}
                      <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                        <h4 className="text-white font-semibold mb-3">Lo que esto significa para usted:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-green-400">✔️</span>
                            <span>Usted sigue siendo propietario y administrador completo</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-green-400">✔️</span>
                            <span>Uso libre para sitio web, email, branding o redirecciones</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-green-400">✔️</span>
                            <span>No necesita empresa UE ni dirección local</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-green-400">✔️</span>
                            <span>Completamente legal y transparente</span>
                          </div>
                        </div>
                        <p className="text-slate-400 text-sm mt-3">Para compradores fuera de la UE esta es la solución estándar y más utilizada.</p>
                      </div>

                      {/* Trustee Registrars */}
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                          🧩 Registro Trustee mediante Registradores Reconocidos
                        </h4>
                        <div className="space-y-4">
                          {/* INWX */}
                          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                            <h5 className="text-amber-400 font-semibold mb-2">INWX — Trustee muy económico (desde €3)</h5>
                            <p className="text-sm mb-2"><span className="text-slate-400">Extensiones soportadas:</span> .EU · .IT · .FR · .DE</p>
                            <p className="text-sm mb-2"><span className="text-slate-400">Cómo funciona:</span> Durante el registro se ofrece automáticamente la opción trustee. INWX usa una dirección UE para el registro. Usted mantiene el control total.</p>
                            <p className="text-sm"><span className="text-slate-400">💰 Coste:</span> <span className="text-white font-medium">€3 por año</span></p>
                            <a href="https://www.inwx.com/en/offer/localpresence" target="_blank" rel="nofollow noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-sm underline">🔗 inwx.com/en/offer/localpresence</a>
                          </div>

                          {/* 101domain */}
                          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                            <h5 className="text-amber-400 font-semibold mb-2">101domain — Trustee directamente en el checkout</h5>
                            <p className="text-sm mb-2">Trustee se ofrece automáticamente. Adecuado para múltiples ccTLDs europeos. Ideal para empresas internacionales.</p>
                            <p className="text-sm"><span className="text-slate-400">💰 Coste:</span> <span className="text-white font-medium">± $25 por año</span></p>
                            <a href="https://www.101domain.com/trustee_service.htm" target="_blank" rel="nofollow noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-sm underline">🔗 101domain.com/trustee_service.htm</a>
                          </div>

                          {/* Netim */}
                          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                            <h5 className="text-amber-400 font-semibold mb-2">Netim — Trustee solo cuando es requerido</h5>
                            <p className="text-sm mb-2">Solo activo para extensiones con obligación. Solución transparente y profesional.</p>
                            <p className="text-sm"><span className="text-slate-400">💰 Coste:</span> <span className="text-white font-medium">€10–€30 por año</span></p>
                            <a href="https://www.netim.com/en/domain-name/services/trustee-service" target="_blank" rel="nofollow noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-sm underline">🔗 netim.com/en/domain-name/services/trustee-service</a>
                          </div>
                        </div>
                      </div>

                      {/* Comparison Table */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">📊 Resumen de un Vistazo</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm border border-slate-700/50 rounded-lg overflow-hidden">
                            <thead className="bg-slate-800/70">
                              <tr>
                                <th className="text-left px-4 py-2 text-amber-400 font-semibold">Registrador</th>
                                <th className="text-left px-4 py-2 text-amber-400 font-semibold">Extensiones</th>
                                <th className="text-left px-4 py-2 text-amber-400 font-semibold">Coste Trustee</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700/30">
                              <tr className="bg-slate-800/30">
                                <td className="px-4 py-2 text-white">INWX</td>
                                <td className="px-4 py-2">.EU · .IT · .FR · .DE</td>
                                <td className="px-4 py-2 text-green-400">€3 / año</td>
                              </tr>
                              <tr className="bg-slate-800/50">
                                <td className="px-4 py-2 text-white">101domain</td>
                                <td className="px-4 py-2">Varios ccTLDs UE</td>
                                <td className="px-4 py-2">± $25 / año</td>
                              </tr>
                              <tr className="bg-slate-800/30">
                                <td className="px-4 py-2 text-white">Netim</td>
                                <td className="px-4 py-2">Varios ccTLDs UE</td>
                                <td className="px-4 py-2">€10–€30 / año</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Why Premium EU Domains */}
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                          💎 Por Qué los Dominios Europeos Premium Son Extra Valiosos
                        </h4>
                        <p className="mb-3">Nuestros dominios son más que solo un nombre:</p>
                        <div className="grid sm:grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-2"><span>🔗</span><span>Historial online y menciones</span></div>
                          <div className="flex items-center gap-2"><span>🏛️</span><span>A menudo antiguos proyectos UE</span></div>
                          <div className="flex items-center gap-2"><span>🌍</span><span>Confianza con visitantes europeos</span></div>
                          <div className="flex items-center gap-2"><span>📉</span><span>Menos competencia que .COM</span></div>
                          <div className="flex items-center gap-2"><span>🔁</span><span>Perfecto para redirecciones 301 (retener autoridad UE)</span></div>
                          <div className="flex items-center gap-2"><span>🧠</span><span>Interesante para branding, SEO e inversiones</span></div>
                        </div>
                        <p className="text-slate-400 text-sm mt-3">
                          En la práctica, estos nombres europeos son a menudo más valiosos y fiables que muchos dominios .COM, .NET o .ORG.
                        </p>
                      </div>

                      {/* For International Investors */}
                      <div className="bg-gradient-to-r from-amber-500/10 to-slate-800/30 rounded-xl p-5 border border-amber-500/20">
                        <h4 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                          🌍 Ideal para Inversores Internacionales
                        </h4>
                        <p className="mb-3">Para inversores fuera de la UE, los dominios europeos ofrecen:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Exclusividad a través de regulaciones</li>
                          <li>• Mayor umbral de calidad</li>
                          <li>• Fuerte posicionamiento geográfico</li>
                          <li>• Despliegue atractivo para proyectos internacionales</li>
                        </ul>
                        <p className="text-amber-400 font-medium mt-4">
                          Mediante registro trustee, incluso los dominios .EU expirados premium son desplegables en todo el mundo.
                        </p>
                        <p className="text-white font-semibold mt-2">
                          ➡️ Autoridad europea. Aplicabilidad internacional.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30">
                  <Mail className="w-4 h-4 mr-2 inline" />
                  Contáctenos
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Solicite Información o Haga una Oferta
                </h2>
                <p className="text-slate-400">
                  ¿Interesado en uno de nuestros dominios premium? Complete el formulario y nos pondremos en contacto con usted lo antes posible.
                </p>
              </div>
              
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Nombre *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Su nombre"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Correo Electrónico *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="su@email.com"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Globe className="w-4 h-4 inline mr-2" />
                        Nombre de Dominio Elegido *
                      </label>
                      <Input
                        type="text"
                        value={formData.domain}
                        onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                        placeholder="ej. FinanceAuthority.com"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Mensaje / Información Adicional
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Cuéntenos más sobre su interés, haga preguntas o haga una oferta..."
                        rows={5}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40"
                    >
                      Enviar Solicitud
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                  Comprar Dominios Expirados: Invierta en Autoridad SEO Probada
                </h2>
                
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-amber-400">Comprar un dominio expirado</strong> es la forma más inteligente de beneficiarse directamente de años de <strong className="text-white">autoridad de dominio</strong> acumulada y <strong className="text-white">backlinks de calidad</strong>. A diferencia de un nuevo nombre de dominio, un dominio expirado premium ya tiene confianza de Google y otros motores de búsqueda. Esto se traduce directamente en mejores posiciones, indexación más rápida y más tráfico orgánico.
                  </p>
                  
                  <p>
                    Nuestros <strong className="text-amber-400">dominios premium</strong> cuidadosamente seleccionados tienen un historial probado con backlinks de fuentes autorizadas como Wikipedia, universidades, instituciones gubernamentales y sitios de noticias reconocidos. Estos <strong className="text-white">backlinks de alta calidad</strong> son el resultado de años de presencia online y son prácticamente imposibles de construir usted mismo, a menos que esté dispuesto a invertir miles de euros en link building.
                  </p>
                  
                  <p>
                    Ya sea que quiera <strong className="text-white">iniciar una tienda online</strong>, lanzar un <strong className="text-white">sitio web de afiliados</strong>, o dar a su negocio existente un <strong className="text-white">impulso SEO</strong>: un dominio expirado con alta <strong className="text-amber-400">MOZ Domain Authority (DA)</strong> le da una ventaja innegable sobre la competencia. Mientras otros esperan meses hasta que Google confíe en su nuevo dominio, usted se beneficia directamente de la autoridad existente.
                  </p>
                  
                  <p>
                    <strong className="text-white">¿Por qué esperar?</strong> Cada dominio premium en nuestro portafolio ha sido verificado para historial libre de spam, backlinks relevantes y buenos perfiles de enlaces. Compra un activo de dominio estratégico que añade valor directo a su presencia online. Desde <strong className="text-white">redirecciones 301</strong> para authority stacking hasta iniciar directamente un nuevo sitio web: las posibilidades son infinitas.
                  </p>
                  
                  <div className="bg-gradient-to-r from-amber-500/10 to-slate-800/30 border border-amber-500/20 rounded-xl p-6 mt-8">
                    <p className="text-center text-lg mb-0">
                      <strong className="text-amber-400">¿Listo para acelerar su éxito online?</strong><br />
                      <span className="text-slate-300">Explore nuestro portafolio de más de 110 dominios expirados premium y descubra qué dominio se adapta perfectamente a su ambición. Invierta hoy en autoridad probada y deje atrás a sus competidores.</span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Domain Transfer Instructions - Collapsible Section */}
        <section id="domein-verhuizen" className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="border border-amber-500/30 rounded-xl bg-slate-800/50">
                  <div className="px-6 py-4">
                    <h2 className="text-xl font-bold text-white">
                      <div className="flex items-center gap-3">
                        <Globe className="w-6 h-6 text-amber-400" />
                        <span>¿Cómo transferir su dominio con el código de transferencia (EPP/Auth)?</span>
                      </div>
                    </h2>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="space-y-6 text-slate-300">
                      <p className="text-lg">
                        Después de su compra, recibirá un <strong className="text-amber-400">código de transferencia</strong> (también llamado código EPP o Auth) dentro de 24 horas en la dirección de correo electrónico que proporcionó durante el pago. Con este código puede transferir fácilmente el dominio a su propio registrador de dominios o proveedor de hosting.
                      </p>
                      
                      <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                        <h3 className="text-lg font-semibold text-white mb-4">Instrucciones paso a paso:</h3>
                        <ol className="space-y-4">
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">1</span>
                            <div>
                              <strong className="text-white">Reciba el código de transferencia</strong>
                              <p className="text-slate-400 mt-1">Revise su bandeja de entrada (y carpeta de spam) para el correo con el código de transferencia. Lo recibirá dentro de 24 horas después del pago.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">2</span>
                            <div>
                              <strong className="text-white">Inicie sesión en su registrador de dominios o proveedor de hosting</strong>
                              <p className="text-slate-400 mt-1">Vaya a la gestión de dominios de su proveedor (ej. GoDaddy, Namecheap, etc.).</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">3</span>
                            <div>
                              <strong className="text-white">Inicie la transferencia de dominio</strong>
                              <p className="text-slate-400 mt-1">Busque la opción "Transferir dominio", "Transfer domain" o "Transferir dominio entrante". Introduzca el nombre de dominio que quiere transferir.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">4</span>
                            <div>
                              <strong className="text-white">Introduzca el código de transferencia</strong>
                              <p className="text-slate-400 mt-1">Pegue el código de transferencia (código EPP/Auth) que recibió de nosotros en el campo designado.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">5</span>
                            <div>
                              <strong className="text-white">Confirme la transferencia</strong>
                              <p className="text-slate-400 mt-1">Complete el nombre de dominio comprado en su proveedor y confirme la transferencia. Luego introduzca el código EPP (código de transferencia) que recibió de nosotros.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">6</span>
                            <div>
                              <strong className="text-white">Espere a que se complete</strong>
                              <p className="text-slate-400 mt-1">La transferencia ahora está en proceso y generalmente toma de 1 a 5 días hábiles, dependiendo de la extensión del dominio (.nl, .be, .eu, .com, etc.). Una vez completada la transferencia, el dominio aparecerá automáticamente en su cuenta.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">7</span>
                            <div>
                              <strong className="text-white">Use su dominio</strong>
                              <p className="text-slate-400 mt-1">Después de completarse, puede usar el dominio inmediatamente: úselo como redirección 301 a su sitio web existente para valor SEO adicional, o conéctelo a un paquete de hosting para construir un nuevo sitio web.</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      
                      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                        <div className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-white">Nuestra recomendación</strong>
                            <p className="text-slate-300 mt-1">
                              ¿Buscando hosting confiable o registro de dominio? Recomendamos proveedores con excelente soporte, servidores rápidos y precios competitivos que ofrecen transferencia de dominio gratuita.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* NordVPN Recommendation Section */}
                      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-4 mt-4">
                        <div className="text-center">
                          <h4 className="font-bold text-white text-lg mb-2">🔒 Protege tu Privacidad con NordVPN</h4>
                          <p className="text-white/90 text-sm mb-3">
                            ¿Qué es una VPN? Una <a href="https://www.anrdoezrs.net/click-100643838-14439598" target="_blank" rel="noopener noreferrer" className="underline text-yellow-300 hover:text-yellow-200">Red Privada Virtual (VPN)</a> encripta tu conexión a internet y oculta tu dirección IP, protegiendo tus datos personales de hackers, rastreadores y vigilancia.
                          </p>
                          <p className="text-white/80 text-xs mb-4">
                            Para propietarios de dominios premium, proteger su identidad online es crucial. NordVPN te permite navegar de forma anónima, acceder a contenido global y proteger tus transacciones comerciales.
                          </p>
                          <a 
                            href="https://www.anrdoezrs.net/click-100643838-14439598" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-6 rounded-full transition-colors text-sm"
                          >
                            Obtén NordVPN Ahora →
                          </a>
                        </div>
                      </div>
                      
                      <p className="text-slate-400 text-sm">
                        ¿Tiene preguntas sobre la transferencia de dominio? No dude en contactarnos en <a href="mailto:support@iaee.eu" className="text-amber-400 hover:text-amber-300">support@iaee.eu</a>.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Contáctenos
              </h2>
              <p className="text-slate-300 mb-8">
                ¿Tiene preguntas sobre un dominio específico o quiere asesoramiento sobre qué dominio expirado se adapta mejor a su proyecto? No dude en contactarnos.
              </p>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5 text-amber-400" />
                    <a href="mailto:support@iaee.eu" className="text-amber-400 hover:text-amber-300 transition-colors text-lg font-medium">
                      support@iaee.eu
                    </a>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Respondemos dentro de 24 horas a su mensaje.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 p-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        {/* Legal Footer */}
        <LegalLinksPremiumDomainsES />

        {/* Footer */}
        <FooterPremiumDomainsES />
      </div>
    </>
  );
};

export default PremiumDomainsES;
