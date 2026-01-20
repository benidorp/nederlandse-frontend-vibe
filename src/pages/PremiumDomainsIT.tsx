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
import LegalLinksPremiumDomainsIT from "@/components/premium-domains/LegalLinksPremiumDomainsIT";
import FooterPremiumDomainsIT from "@/components/premium-domains/FooterPremiumDomainsIT";
import LanguageSwitcher from "@/components/premium-domains/LanguageSwitcher";
import { validateContactForm, buildSafeMailtoUrl } from "@/lib/formValidation";

// Premium domain data - identical to Dutch version
const premiumDomains = [
  // DA 38
  {
    name: "escp-eap.eu",
    description: "Dominio premium di business school con backlink da Wikipedia, Cornell, Spiegel e Le Monde.",
    mozScore: 38,
    pageAuthority: 28,
    linkingDomains: 292,
    inboundLinks: "4.6K+",
    followedLinks: "4.2K+",
    category: "Educazione",
    price: "€1495",
    backlinks: "4.6K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "lemonde.fr (DA 93)", "cornell.edu (DA 92)", "spiegel.de (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/6oUeVdepVg18dXf9OO9Zm04"
  },
  // DA 37
  {
    name: "grandparkhotel.at",
    description: "Dominio premium hotel austriaco con backlink da The Guardian, Telegraph, Daily Mail, Irish Times e Der Standard.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 198,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Ospitalità",
    price: "€1750",
    backlinks: "1.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dailymail.co.uk (DA 94)", "irishtimes.com (DA 91)", "derstandard.at (DA 82)"],
    stripePaymentLink: "https://buy.stripe.com/8x2dR9epV9CK5qJaSS9Zm0i"
  },
  {
    name: "icesculpture.be",
    description: "Dominio belga arte/eventi con backlink da Europa.eu, The Guardian, Telegraph, DW e Boston.com.",
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
    description: "Dominio EU corto e memorabile con backlink da YouTube, Le Monde, MDPI, Corriere e Wired Italia.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 166,
    inboundLinks: "3K+",
    followedLinks: "2.9K+",
    category: "Generale",
    price: "€1950",
    stripePaymentLink: "https://buy.stripe.com/bJe7sL2HdcOWbP7bWW9Zm0g",
    backlinks: "3K+",
    topBacklinks: ["youtube.com (DA 100)", "lemonde.fr (DA 93)", "mdpi.com (DA 92)", "corriere.it (DA 92)", "wired.it (DA 90)"]
  },
  // DA 36
  {
    name: "antigonetickets.be",
    description: "Dominio belga ticketing con backlink da Nieuwsblad, De Standaard e GVA.",
    mozScore: 36,
    pageAuthority: 23,
    linkingDomains: 120,
    inboundLinks: "6.6K+",
    followedLinks: "6.6K+",
    category: "Intrattenimento",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "6.6K+",
    topBacklinks: ["standaard.be (DA 81)", "nieuwsblad.be (DA 79)", "gva.be (DA 73)"]
  },
  {
    name: "beauxartsliege.be",
    description: "Dominio artistico con backlink da Wikipedia, CNN, Behance e RTBF.",
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
    description: "Dominio musicale con backlink da BBC, The Guardian, NME e Pitchfork.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 302,
    inboundLinks: "719+",
    followedLinks: "663+",
    category: "Musica",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "719+",
    topBacklinks: ["bbc.co.uk (DA 95)", "theguardian.com (DA 95)", "pitchfork.com (DA 88)", "nme.com (DA 86)"]
  },
  {
    name: "eu-asiacentre.eu",
    description: "Dominio EU-Asia con backlink da Wikipedia, NBC News, Cambridge e Reddit.",
    mozScore: 36,
    pageAuthority: 33,
    linkingDomains: 277,
    inboundLinks: "898+",
    followedLinks: "785+",
    category: "Internazionale",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "898+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "reddit.com (DA 97)", "nbcnews.com (DA 93)", "cam.ac.uk (DA 93)"]
  },
  // DA 35
  {
    name: "toulousespaceshow.eu",
    description: "Dominio premium spaziale con backlink da Europa.eu, NASA.gov, IEEE.org e Wikipedia.",
    mozScore: 35,
    pageAuthority: 31,
    linkingDomains: 397,
    inboundLinks: "3.4K+",
    followedLinks: "1.8K+",
    category: "Tecnologia",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "nasa.gov (DA 95)", "europa.eu (DA 94)", "ieee.org (DA 93)"]
  },
  {
    name: "martonecycling.eu",
    description: "Dominio ciclismo con backlink da Globo, Harper's Bazaar, Vogue e Grazia.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 118,
    inboundLinks: "232+",
    followedLinks: "173+",
    category: "Sport",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "232+",
    topBacklinks: ["globo.com (DA 93)", "vogue.com (DA 92)", "harpersbazaar.com (DA 89)", "grazia.it (DA 73)"]
  },
  {
    name: "muenchner-kirchennachrichten.de",
    description: "Dominio tedesco notizie/religioso con backlink da Wikipedia (EN, DE, ZH, NL), Spiegel e La Croix.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 281,
    inboundLinks: "3.3K+",
    followedLinks: "1.8K+",
    category: "Notizie",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.3K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "de.wikipedia.org (DA 94)", "fandom.com (DA 94)", "spiegel.de (DA 93)", "la-croix.com (DA 88)"]
  },
  // DA 33
  {
    name: "etongmbh.de",
    description: "Dominio aziendale tedesco con forte autorità commerciale e backlink da Naver, Yumpu, Heise, Computerbase e Motor-Talk.",
    mozScore: 33,
    pageAuthority: 27,
    linkingDomains: 321,
    inboundLinks: "3.9K+",
    followedLinks: "1.6K+",
    category: "Business",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "3.9K+",
    topBacklinks: ["naver.com (DA 93)", "yumpu.com (DA 91)", "heise.de (DA 91)", "computerbase.de (DA 84)", "motor-talk.de (DA 73)"]
  },
  {
    name: "europe-en-midipyrenees.eu",
    description: "Dominio regionale francese/europeo con backlink da Scoop.it, France Info, La Tribune e governo francese.",
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
    description: "Dominio belga corto e potente con backlink da Wikipedia, Variety, RTBF e Courrier International.",
    mozScore: 33,
    pageAuthority: 33,
    linkingDomains: 228,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Generale",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "1.7K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "variety.com (DA 93)", "constantcontact.com (DA 90)", "rtbf.be (DA 89)", "courrierinternational.com (DA 80)"]
  },
  // DA 32
  {
    name: "improve-research.eu",
    description: "Dominio di ricerca con backlink da Europa.eu, Cambridge, Springer e LSE.",
    mozScore: 32,
    pageAuthority: 30,
    linkingDomains: 106,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "Ricerca",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.7K+",
    topBacklinks: ["europa.eu (DA 94)", "cam.ac.uk (DA 93)", "springer.com (DA 92)", "lse.ac.uk (DA 90)"]
  },
  {
    name: "co-da.eu",
    description: "Dominio EU corto e potente con backlink da Globo, HuffPost, CBS News, Gizmodo e Fast Company.",
    mozScore: 32,
    pageAuthority: 22,
    linkingDomains: 96,
    inboundLinks: "276+",
    followedLinks: "260+",
    category: "Collaborazione",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "276+",
    topBacklinks: ["globo.com (DA 95)", "huffpost.com (DA 94)", "cbsnews.com (DA 93)", "gizmodo.com (DA 93)", "fastcompany.com (DA 92)"]
  },
  {
    name: "emg-nice2015.fr",
    description: "Dominio francese con backlink da Wikipedia, GoFundMe, Nice Matin e Triathlon.org.",
    mozScore: 32,
    pageAuthority: 31,
    linkingDomains: 191,
    inboundLinks: "3.1K+",
    followedLinks: "3K+",
    category: "Internazionale",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "3.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "gofundme.com (DA 93)", "mundodeportivo.com (DA 92)", "nicematin.com (DA 73)", "triathlon.org (DA 68)"]
  },
  {
    name: "euromedialiteracy.eu",
    description: "Dominio educativo EU con backlink da Wikipedia, Penn State, Wisconsin e Consiglio d'Europa.",
    mozScore: 32,
    pageAuthority: 38,
    linkingDomains: 372,
    inboundLinks: "2.5K+",
    followedLinks: "2.3K+",
    category: "Educazione",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.5K+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "psu.edu (DA 92)", "scoop.it (DA 92)", "wisc.edu (DA 91)", "coe.int (DA 89)"]
  },
  {
    name: "citiexpress.eu",
    description: "Dominio EU trasporto e logistica con backlink da TripAdvisor, SkyscraperCity e Rick Steves.",
    mozScore: 32,
    pageAuthority: 32,
    linkingDomains: 171,
    inboundLinks: "307+",
    followedLinks: "254+",
    category: "Trasporto",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "307+",
    topBacklinks: ["goo.gl (DA 95)", "tripadvisor.com (DA 93)", "skyscrapercity.com (DA 86)", "ricksteves.com (DA 77)", "rome2rio.com (DA 76)"]
  },
  // DA 31
  {
    name: "machuproject.eu",
    description: "Dominio progetto europeo con backlink da Wikipedia, Cambridge, UNESCO e Reddit.",
    mozScore: 31,
    pageAuthority: 27,
    linkingDomains: 162,
    inboundLinks: "379+",
    followedLinks: "266+",
    category: "Progetti",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "379+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cambridge.org (DA 93)", "unesco.org (DA 93)", "reddit.com (DA 92)", "mdpi.com (DA 92)"]
  },
  {
    name: "ramcip-project.eu",
    description: "Dominio progetto ricerca europeo con backlink da Europa.eu, GitHub, NY Times e Springer.",
    mozScore: 31,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "333+",
    followedLinks: "293+",
    category: "Ricerca",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "333+",
    topBacklinks: ["europa.eu (DA 97)", "github.com (DA 96)", "nytimes.com (DA 95)", "elpais.com (DA 94)", "springer.com (DA 93)"]
  },
  {
    name: "evader-project.eu",
    description: "Dominio progetto EU con backlink da Europa.eu, Spiegel, Europa Press e Heise.",
    mozScore: 31,
    pageAuthority: 30,
    linkingDomains: 91,
    inboundLinks: "128+",
    followedLinks: "109+",
    category: "Progetti",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "128+",
    topBacklinks: ["europa.eu (DA 97)", "spiegel.de (DA 93)", "europapress.es (DA 91)", "heise.de (DA 91)", "autoblog.com (DA 90)"]
  },
  {
    name: "toastit-live.be",
    description: "Dominio belga intrattenimento/media con backlink da Wikipedia, KU Leuven, Nieuwsblad e Yle.",
    mozScore: 31,
    pageAuthority: 29,
    linkingDomains: 268,
    inboundLinks: "15.2K+",
    followedLinks: "15K+",
    category: "Media",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "15.2K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "kuleuven.be (DA 83)", "nieuwsblad.be (DA 82)", "skynet.be (DA 80)", "yle.fi (DA 78)"]
  },
  {
    name: "hznet.nl",
    description: "Dominio network olandese con backlink da Microsoft, NOS, Neowin, Tweakers e XS4All.",
    mozScore: 31,
    pageAuthority: 25,
    linkingDomains: 152,
    inboundLinks: "1.7K+",
    followedLinks: "1.6K+",
    category: "Network",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "1.7K+",
    topBacklinks: ["microsoft.com (DA 99)", "nos.nl (DA 90)", "neowin.net (DA 88)", "techpowerup.com (DA 83)", "tweakers.net (DA 79)"]
  },
  {
    name: "leading-the-digital-decade.eu",
    description: "Dominio EU trasformazione digitale con backlink da Europa.eu, Politico EU e LSE.",
    mozScore: 31,
    pageAuthority: 30,
    linkingDomains: 80,
    inboundLinks: "189+",
    followedLinks: "174+",
    category: "Digitale",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "189+",
    topBacklinks: ["europa.eu (DA 97)", "politico.eu (DA 91)", "lse.ac.uk (DA 89)", "fapesp.br (DA 72)", "eureporter.co (DA 68)"]
  },
  {
    name: "landstewardship.eu",
    description: "Dominio EU gestione del territorio/sostenibilità con backlink da Europa.eu, ABC.es, Gencat.cat e università spagnole.",
    mozScore: 31,
    pageAuthority: 33,
    linkingDomains: 200,
    inboundLinks: "7.5K+",
    followedLinks: "7.4K+",
    category: "Sostenibilità",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "7.5K+",
    topBacklinks: ["europa.eu (DA 97)", "abc.es (DA 93)", "gencat.cat (DA 89)", "ask.com (DA 88)", "ecoticias.com (DA 74)"],
    useCases: ["ONG Gestione Naturale & Rewilding", "Piattaforma Agricoltura Sostenibile", "Ecoturismo & Agriturismo", "Studio Consulenza Ambientale", "Studio Architettura del Paesaggio", "Collettivo Fattorie Biologiche", "Fondazione Azione Climatica", "Accademia Permacultura", "Iniziativa Foreste & Biodiversità", "Comunità Agricoltura Rigenerativa"]
  },
  // DA 30
  {
    name: "ilovecosmetics.eu",
    description: "Dominio beauty e cosmetici con backlink da Alza, Glamour Magazine e CB Insights.",
    mozScore: 30,
    pageAuthority: 36,
    linkingDomains: 472,
    inboundLinks: "1.6K+",
    followedLinks: "1.3K+",
    category: "Beauty",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "1.6K+",
    topBacklinks: ["alza.cz (DA 92)", "glamourmagazine.co.uk (DA 82)", "polyvore.com (DA 79)", "fave.co (DA 78)", "cbinsights.com (DA 77)"],
    useCases: ["E-commerce Beauty & Skincare", "Blog Recensioni Cosmetici", "Portfolio Make-up Artist", "Brand Cosmetica Naturale", "Piattaforma Influencer Beauty", "Catena Saloni di Bellezza", "Import K-Beauty & J-Beauty", "Webshop Cosmetici Vegani", "Servizio Subscription Beauty Box", "Database Ingredienti Cosmetici"]
  },
  {
    name: "rtmpilecki.eu",
    description: "Dominio storico/culturale EU con backlink da Wikipedia (ES, ID, ZH), governo polacco e Thread Reader.",
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
    description: "Dominio EU energia e infrastrutture con backlink da Wikipedia, CNET, IEEE e The Conversation.",
    mozScore: 30,
    pageAuthority: 30,
    linkingDomains: 297,
    inboundLinks: "156.1K+",
    followedLinks: "155.8K+",
    category: "Energia",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/9B6cN54Pl5mu9GZe549Zm0l",
    backlinks: "156.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnet.com (DA 93)", "theconversation.com (DA 92)", "ieee.org (DA 92)", "corriere.it (DA 92)"]
  },
  {
    name: "eureka-hvacr.eu",
    description: "Dominio EU HVAC e climatizzazione con backlink da Ow.ly, EurActiv e Danfoss.",
    mozScore: 30,
    pageAuthority: 23,
    linkingDomains: 80,
    inboundLinks: "375+",
    followedLinks: "357+",
    category: "Tecnologia",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "375+",
    topBacklinks: ["ow.ly (DA 90)", "euractiv.com (DA 84)", "campaign-archive.com (DA 84)", "danfoss.com (DA 69)", "coleurope.eu (DA 57)"]
  },
  {
    name: "partymenu.eu",
    description: "Dominio EU catering/eventi con backlink da Google.sk, Wikiwand, RA.co e Pravda.sk.",
    mozScore: 30,
    pageAuthority: 35,
    linkingDomains: 328,
    inboundLinks: "2.2K+",
    followedLinks: "2.1K+",
    category: "Food",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "2.2K+",
    topBacklinks: ["google.sk (DA 85)", "wikiwand.com (DA 85)", "ra.co (DA 85)", "pravda.sk (DA 79)", "dennikn.sk (DA 76)"]
  },
  // DA 29
  {
    name: "evacuate.eu",
    description: "Dominio EU sicurezza e pianificazione emergenze con backlink da Europa.eu, El País, Springer e KU Leuven.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 99,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Sicurezza",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.7K+",
    topBacklinks: ["europa.eu (DA 97)", "elpais.com (DA 94)", "springer.com (DA 93)", "mdpi.com (DA 92)", "xataka.com (DA 90)"]
  },
  {
    name: "greenweek2010.eu",
    description: "Dominio sostenibilità con backlink da Europa.eu, EurekAlert, RAI e AAAS.",
    mozScore: 29,
    pageAuthority: 28,
    linkingDomains: 109,
    inboundLinks: "259+",
    followedLinks: "249+",
    category: "Sostenibilità",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "259+",
    topBacklinks: ["europa.eu (DA 97)", "eurekalert.org (DA 91)", "rai.it (DA 81)", "au.dk (DA 77)", "aaas.org (DA 76)"]
  },
  {
    name: "bryn-somersethouse.co.uk",
    description: "Dominio UK immobiliare/ospitalità con backlink da Forbes, The Guardian, Evening Standard e Time Out.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 96,
    inboundLinks: "167+",
    followedLinks: "132+",
    category: "Immobiliare",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "167+",
    topBacklinks: ["forbes.com (DA 94)", "theguardian.com (DA 94)", "standard.co.uk (DA 93)", "timeout.com (DA 92)", "thetimes.com (DA 92)"]
  },
  {
    name: "euforistudy.eu",
    description: "Dominio educativo EU con backlink da The Guardian, Trinity College Dublin e VU Amsterdam.",
    mozScore: 29,
    pageAuthority: 27,
    linkingDomains: 72,
    inboundLinks: "215+",
    followedLinks: "170+",
    category: "Educazione",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "215+",
    topBacklinks: ["theguardian.com (DA 94)", "ask.com (DA 88)", "tcd.ie (DA 86)", "vu.nl (DA 76)", "muni.cz (DA 74)"]
  },
  {
    name: "beatassist.eu",
    description: "Dominio produzione musicale con backlink da Google Sites, Scoop.it, Envato e MusicRadar.",
    mozScore: 29,
    pageAuthority: 29,
    linkingDomains: 164,
    inboundLinks: "1.5K+",
    followedLinks: "1.2K+",
    category: "Musica/Audio",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.5K+",
    topBacklinks: ["sites.google.com (DA 96)", "scoop.it (DA 92)", "envato.com (DA 91)", "informer.com (DA 90)", "codecanyon.net (DA 83)"]
  },
  {
    name: "energaware.eu",
    description: "Dominio progetto EU consapevolezza energetica con backlink da Europa.eu, UOL, El País e Le Figaro.",
    mozScore: 29,
    pageAuthority: 26,
    linkingDomains: 61,
    inboundLinks: "15.1K+",
    followedLinks: "15.1K+",
    category: "Energia",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "15.1K+",
    topBacklinks: ["europa.eu (DA 97)", "uol.com.br (DA 95)", "elpais.com (DA 94)", "lefigaro.fr (DA 93)", "mdpi.com (DA 92)"]
  },
  {
    name: "5gmedia.eu",
    description: "Dominio telecom/media con backlink da Medium, IBM, Telefónica e università.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 69,
    inboundLinks: "338+",
    followedLinks: "265+",
    category: "Tecnologia",
    price: "€675",
    stripePaymentLink: "https://buy.stripe.com/cNi00jdlR9CK5qJf989Zm0k",
    backlinks: "338+",
    topBacklinks: ["medium.com (DA 95)", "ibm.com (DA 93)", "telefonica.com (DA 79)", "upv.es (DA 79)", "upm.es (DA 78)"]
  },
  {
    name: "finnovaregio.eu",
    description: "Dominio EU innovazione finanziaria regionale con backlink da Crunchbase, Splashthat e Climate-KIC.",
    mozScore: 29,
    pageAuthority: 20,
    linkingDomains: 41,
    inboundLinks: "156+",
    followedLinks: "143+",
    category: "Finanza",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "156+",
    topBacklinks: ["goo.gl (DA 95)", "crunchbase.com (DA 91)", "splashthat.com (DA 86)", "emprendedores.es (DA 66)", "climate-kic.org (DA 64)"]
  },
  {
    name: "worth-project.eu",
    description: "Dominio progetto design e innovazione con backlink da Europa.eu, Euronews, AngelList e UAL Arts.",
    mozScore: 29,
    pageAuthority: 32,
    linkingDomains: 162,
    inboundLinks: "245+",
    followedLinks: "209+",
    category: "Design",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "245+",
    topBacklinks: ["europa.eu (DA 97)", "euronews.com (DA 92)", "angel.co (DA 86)", "campaign-archive.com (DA 84)", "arts.ac.uk (DA 81)"]
  },
  {
    name: "push-pull-parking.eu",
    description: "Dominio EU mobilità/parcheggio con backlink da Europa.eu, Medium, Zeit.de e Thread Reader.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 107,
    inboundLinks: "320+",
    followedLinks: "292+",
    category: "Mobilità",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "320+",
    topBacklinks: ["europa.eu (DA 97)", "medium.com (DA 95)", "zeit.de (DA 91)", "threadreaderapp.com (DA 78)", "eur.nl (DA 68)"]
  },
  // DA 28
  {
    name: "bovisadrivein.it",
    description: "Dominio italiano intrattenimento con backlink da Behance, Giphy, Corriere e MyMovies.",
    mozScore: 28,
    pageAuthority: 22,
    linkingDomains: 52,
    inboundLinks: "78+",
    followedLinks: "60+",
    category: "Intrattenimento",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "78+",
    topBacklinks: ["behance.net (DA 93)", "giphy.com (DA 92)", "corriere.it (DA 92)", "ilgiornale.it (DA 85)", "elledecor.com (DA 81)"]
  },
  {
    name: "resurbis.eu",
    description: "Dominio EU sostenibilità con backlink da Europa.eu, MDPI, EurekAlert e Wired.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 87,
    inboundLinks: "185+",
    followedLinks: "153+",
    category: "Sostenibilità",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "185+",
    topBacklinks: ["europa.eu (DA 97)", "mdpi.com (DA 92)", "eurekalert.org (DA 91)", "wired.it (DA 90)", "ub.edu (DA 86)"]
  },
  {
    name: "eu-sabana.eu",
    description: "Dominio progetto EU agricoltura sostenibile con backlink da Europa.eu, The Conversation e Frontiers.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 69,
    inboundLinks: "413+",
    followedLinks: "397+",
    category: "Agricoltura",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "413+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "frontiersin.org (DA 92)", "diarioinformacion.com (DA 82)", "informacion.es (DA 78)"]
  },
  {
    name: "ellinikiglossa.eu",
    description: "Dominio lingua/cultura greca con forti backlink da Wikipedia, UCI.edu e università.",
    mozScore: 28,
    pageAuthority: 31,
    linkingDomains: 164,
    inboundLinks: "4.1K+",
    followedLinks: "4K+",
    category: "Lingua/Cultura",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "4.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "uci.edu (DA 91)"]
  },
  {
    name: "bringaexpo.eu",
    description: "Dominio ungherese ciclismo/expo con forti backlink da Origo.hu, Velvet.hu, Network.hu e altri siti media ungheresi.",
    mozScore: 27,
    pageAuthority: 25,
    linkingDomains: 79,
    inboundLinks: "551+",
    followedLinks: "513+",
    category: "Sport/Eventi",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "551+",
    topBacklinks: ["origo.hu (DA 72)", "velvet.hu (DA 60)", "network.hu (DA 57)", "femcafe.hu (DA 56)", "hwsw.hu (DA 56)"]
  },
  {
    name: "movecare-project.eu",
    description: "Dominio progetto EU cura e mobilità con backlink da Springer, MDPI, Il Fatto Quotidiano e università italiane.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "117+",
    followedLinks: "97+",
    category: "Sanità",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "117+",
    topBacklinks: ["springer.com (DA 93)", "mdpi.com (DA 92)", "ilfattoquotidiano.it (DA 90)", "unimi.it (DA 72)", "polimi.it (DA 71)"]
  },
  {
    name: "davidhughesillustration.co.uk",
    description: "Dominio creativo UK con backlink da The Guardian, Creative Bloq, ORF.at e Publishers Weekly.",
    mozScore: 28,
    pageAuthority: 27,
    linkingDomains: 157,
    inboundLinks: "3.9K+",
    followedLinks: "3.9K+",
    category: "Arte/Design",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "3.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "creativebloq.com (DA 86)", "orf.at (DA 86)", "librarything.com (DA 80)", "publishersweekly.com (DA 77)"]
  },
  {
    name: "centremlm.be",
    description: "Dominio centro belga con backlink da Wikipedia (FR, IT, NL), Le Figaro e Wiktionary.",
    mozScore: 28,
    pageAuthority: 28,
    linkingDomains: 182,
    inboundLinks: "9.6K+",
    followedLinks: "9.3K+",
    category: "Generale",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "9.6K+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "it.wikipedia.org (DA 93)", "wiktionary.org (DA 93)", "lefigaro.fr (DA 93)", "nl.wikipedia.org (DA 91)"]
  },
  {
    name: "epc2018.be",
    description: "Dominio evento belga con backlink da TinyURL, UB.edu, Lund University e Confex.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 57,
    inboundLinks: "136+",
    followedLinks: "121+",
    category: "Eventi",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "136+",
    topBacklinks: ["tinyurl.com (DA 94)", "ub.edu (DA 86)", "lu.se (DA 79)", "confex.com (DA 73)", "sdu.dk (DA 71)"]
  },
  {
    name: "youthstartproject.eu",
    description: "Dominio progetto educazione/giovani con backlink da Europa.eu, Campaign Archive, Observador e OpenEdition.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 64,
    inboundLinks: "2.9K+",
    followedLinks: "2.8K+",
    category: "Educazione",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "2.9K+",
    topBacklinks: ["europa.eu (DA 97)", "campaign-archive.com (DA 84)", "observador.pt (DA 84)", "openedition.org (DA 78)", "wort.lu (DA 75)"]
  },
  // DA 27
  {
    name: "spanvis.nl",
    description: "Dominio olandese con backlink da Wikipedia (EN, RU, NL), Wikiwand e XS4All.",
    mozScore: 27,
    pageAuthority: 29,
    linkingDomains: 241,
    inboundLinks: "2.1K+",
    followedLinks: "1.9K+",
    category: "Generale",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "ru.wikipedia.org (DA 94)", "nl.wikipedia.org (DA 91)", "wikiwand.com (DA 85)", "xs4all.nl (DA 79)"]
  },
  {
    name: "seatglobal.eu",
    description: "Dominio internazionale mobilità/trasporto con backlink da Europa.eu, Springer, PLOS e Phys.org.",
    mozScore: 27,
    pageAuthority: 29,
    linkingDomains: 123,
    inboundLinks: "4.8K+",
    followedLinks: "4.7K+",
    category: "Trasporto",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "4.8K+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "plos.org (DA 93)", "salon.com (DA 91)", "phys.org (DA 91)"]
  },
  {
    name: "arcomem.eu",
    description: "Dominio progetto EU archivio digitale con backlink da Wikipedia, Europa.eu, W3.org, SlideShare e Oxford.",
    mozScore: 27,
    pageAuthority: 33,
    linkingDomains: 691,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "Digitale",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.7K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "w3.org (DA 95)", "slideshare.net (DA 94)", "ox.ac.uk (DA 92)"]
  },
  {
    name: "lt-pl-ru.eu",
    description: "Dominio EU cooperazione regione baltica con backlink da Europa.eu, Wikipedia DE, Ask.com e Rzeczpospolita.",
    mozScore: 27,
    pageAuthority: 31,
    linkingDomains: 155,
    inboundLinks: "44.2K+",
    followedLinks: "37.2K+",
    category: "Internazionale",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "44.2K+",
    topBacklinks: ["europa.eu (DA 97)", "de.wikipedia.org (DA 94)", "ask.com (DA 88)", "rp.pl (DA 82)", "worldwidetopsite.com (DA 71)"]
  },
  {
    name: "transitionproject.eu",
    description: "Dominio progetto EU transizione e cambiamento con backlink da Europa.eu, Eventbrite, Storify e Sheffield University.",
    mozScore: 27,
    pageAuthority: 28,
    linkingDomains: 75,
    inboundLinks: "207+",
    followedLinks: "179+",
    category: "Progetti",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "207+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "eventbrite.com (DA 93)", "storify.com (DA 90)", "shef.ac.uk (DA 79)"]
  },
  {
    name: "expo-2050.be",
    description: "Dominio belga expo/mostra con backlink da The Conversation, Radio France, RTBF e La Libre.",
    mozScore: 27,
    pageAuthority: 27,
    linkingDomains: 96,
    inboundLinks: "210+",
    followedLinks: "182+",
    category: "Eventi",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "210+",
    topBacklinks: ["theconversation.com (DA 92)", "radiofrance.fr (DA 92)", "theculturetrip.com (DA 89)", "rtbf.be (DA 89)", "lalibre.be (DA 84)"]
  },
  {
    name: "iceel.eu",
    description: "Dominio EU con backlink da Europa.eu, France Info, CNRS e università francesi.",
    mozScore: 27,
    pageAuthority: 30,
    linkingDomains: 130,
    inboundLinks: "3.6K+",
    followedLinks: "3.5K+",
    category: "Generale",
    price: "€450",
    stripePaymentLink: "https://buy.stripe.com/fZu14n6Xt7uCf1j9OO9Zm0j",
    backlinks: "3.6K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "cnrs.fr (DA 90)", "psl.eu (DA 78)", "education.fr (DA 77)"]
  },
  {
    name: "eustartupvillageforum.eu",
    description: "Dominio forum EU startup e innovazione con backlink da Europa.eu, Pages.dev, Campaign Archive e Silicon Republic.",
    mozScore: 27,
    pageAuthority: 28,
    linkingDomains: 85,
    inboundLinks: "219+",
    followedLinks: "185+",
    category: "Startup",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "219+",
    topBacklinks: ["europa.eu (DA 97)", "pages.dev (DA 91)", "campaign-archive.com (DA 84)", "siliconrepublic.com (DA 83)", "wko.at (DA 74)"]
  },
  {
    name: "life-envoll.eu",
    description: "Dominio progetto EU ambiente e natura con backlink da Europa.eu, FranceInfo, Campaign Archive e Midi Libre.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 54,
    inboundLinks: "67.8K+",
    followedLinks: "67.8K+",
    category: "Ambiente",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "67.8K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "campaign-archive.com (DA 84)", "midilibre.fr (DA 81)", "developpement-durable.gouv.fr (DA 74)"]
  },
  // DA 26
  {
    name: "covenant-capacity.eu",
    description: "Dominio EU covenant e capacity building con backlink da Europa.eu, BT, MyNewsDesk e WWF Panda.",
    mozScore: 26,
    pageAuthority: 24,
    linkingDomains: 85,
    inboundLinks: "2.6K+",
    followedLinks: "2.5K+",
    category: "Collaborazione",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.6K+",
    topBacklinks: ["europa.eu (DA 97)", "bt.com (DA 91)", "mynewsdesk.com (DA 89)", "campaign-archive.com (DA 84)", "panda.org (DA 77)"]
  },
  {
    name: "wetenschapbegintmetverwondering.nl",
    description: "Dominio olandese comunicazione scientifica con backlink da RUG, NU.nl e Agenda Nazionale della Scienza.",
    mozScore: 27,
    pageAuthority: 24,
    linkingDomains: 52,
    inboundLinks: "97+",
    followedLinks: "81+",
    category: "Scienza",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "97+",
    topBacklinks: ["rug.nl (DA 84)", "nu.nl (DA 91)", "wetenschapsagenda.nl (DA 65)"]
  },
  {
    name: "khresmoi.eu",
    description: "Dominio EU progetto sanitario con backlink da Wikipedia, Europa.eu, MDPI, GitHub e The Conversation.",
    mozScore: 27,
    pageAuthority: 28,
    linkingDomains: 148,
    inboundLinks: "404+",
    followedLinks: "326+",
    category: "Sanità",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "404+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "mdpi.com (DA 92)", "github.com (DA 96)", "theconversation.com (DA 92)"]
  },
  {
    name: "sialon.eu",
    description: "Dominio EU ricerca sanitaria con backlink da BBC, Europa.eu e The Conversation.",
    mozScore: 24,
    pageAuthority: 25,
    linkingDomains: 66,
    inboundLinks: "145+",
    followedLinks: "125+",
    category: "Sanità",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "145+",
    topBacklinks: ["bbc.co.uk (DA 95)", "europa.eu (DA 97)", "theconversation.com (DA 92)", "bbc.com (DA 94)"]
  },
  {
    name: "spaceinfoday.eu",
    description: "Dominio EU spaziale con backlink da Wikipedia, Europa.eu, ESA, UCM e ORF.",
    mozScore: 26,
    pageAuthority: 24,
    linkingDomains: 77,
    inboundLinks: "6.4K+",
    followedLinks: "6.3K+",
    category: "Tecnologia",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "6.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "esa.int (DA 91)", "ucm.es (DA 89)", "orf.at (DA 86)"]
  },
  {
    name: "beehive-erasmusplus.eu",
    description: "Dominio educativo EU Erasmus+ con backlink da Pages.dev, Gameforge, GitBook e università.",
    mozScore: 26,
    pageAuthority: 34,
    linkingDomains: 452,
    inboundLinks: "6.2K+",
    followedLinks: "3.7K+",
    category: "Educazione",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "6.2K+",
    topBacklinks: ["sakura.ne.jp (DA 93)", "pages.dev (DA 91)", "biglobe.ne.jp (DA 91)", "gameforge.com (DA 90)", "gitbook.io (DA 85)"]
  },
  {
    name: "dunyaendesiedefilm.nl",
    description: "Dominio olandese film/media con backlink da Wikipedia (EN, JA), IPFS, FilmWeb e Cinemagia.",
    mozScore: 26,
    pageAuthority: 23,
    linkingDomains: 102,
    inboundLinks: "214+",
    followedLinks: "180+",
    category: "Media",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "214+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "ja.wikipedia.org (DA 93)", "ipfs.io (DA 84)", "filmweb.pl (DA 80)", "csfd.cz (DA 72)"]
  },
  {
    name: "102touchfm.co.uk",
    description: "Dominio UK radio/media con backlink da Wikipedia, BBC, Bit.ly, Foursquare e DigitalSpy.",
    mozScore: 26,
    pageAuthority: 30,
    linkingDomains: 292,
    inboundLinks: "11.8K+",
    followedLinks: "8.8K+",
    category: "Media",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "11.8K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "bbc.co.uk (DA 95)", "bit.ly (DA 94)", "foursquare.com (DA 92)", "digitalspy.com (DA 88)"]
  },
  {
    name: "tca2000.co.uk",
    description: "Dominio UK con backlink da Wikipedia (EN, FR, JA, PL), Fandom e DigitalSpy.",
    mozScore: 26,
    pageAuthority: 29,
    linkingDomains: 180,
    inboundLinks: "662+",
    followedLinks: "460+",
    category: "Business",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "662+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "fr.wikipedia.org (DA 95)", "fandom.com (DA 94)", "ja.wikipedia.org (DA 93)", "pl.wikipedia.org (DA 93)"]
  },
  {
    name: "deparisnet.be",
    description: "Dominio belga network con backlink da Europa.eu, Wikipedia (ES, FR), Yumpu e Google.be.",
    mozScore: 26,
    pageAuthority: 28,
    linkingDomains: 135,
    inboundLinks: "710+",
    followedLinks: "445+",
    category: "Network",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "710+",
    topBacklinks: ["europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "jimdofree.com (DA 95)", "yumpu.com (DA 91)"]
  },
  // DA 25
  {
    name: "gastrosafezone.eu",
    description: "Dominio design e sicurezza ristorazione con backlink da CNN, The Conversation, Pagina12 e Elle Decor.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 47,
    inboundLinks: "66+",
    followedLinks: "58+",
    category: "Design/Ristorazione",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "66+",
    topBacklinks: ["cnn.com (DA 94)", "theconversation.com (DA 92)", "realty.rbc.ru (DA 88)", "pagina12.com.ar (DA 82)", "elledecor.com (DA 80)"]
  },
  {
    name: "hotelgiotto.eu",
    description: "Dominio ospitalità con backlink da Pages.dev, Wikitravel, Groupon UK e Travellerspoint.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 78,
    inboundLinks: "284+",
    followedLinks: "198+",
    category: "Ospitalità",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "284+",
    topBacklinks: ["pages.dev (DA 91)", "wikitravel.org (DA 79)", "groupon.co.uk (DA 76)", "groupon.fr (DA 63)", "travellerspoint.com (DA 60)"]
  },
  {
    name: "recharge-green.eu",
    description: "Dominio EU energia verde e ricarica con backlink da Google Groups, MDPI, BioMedCentral e FAO.",
    mozScore: 25,
    pageAuthority: 28,
    linkingDomains: 128,
    inboundLinks: "5.5K+",
    followedLinks: "5.5K+",
    category: "Energia",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "5.5K+",
    topBacklinks: ["groups.google.com (DA 93)", "mdpi.com (DA 92)", "biomedcentral.com (DA 91)", "fao.org (DA 91)", "bayern.de (DA 89)"]
  },
  {
    name: "brave-project.eu",
    description: "Dominio progetto EU con backlink da Europa.eu, El Diario, Stuttgarter Zeitung e università.",
    mozScore: 24,
    pageAuthority: 24,
    linkingDomains: 73,
    inboundLinks: "194+",
    followedLinks: "133+",
    category: "Progetti",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "194+",
    topBacklinks: ["europa.eu (DA 97)", "eldiario.es (DA 91)", "stuttgarter-zeitung.de (DA 81)", "techxplore.com (DA 79)", "uah.es (DA 70)"]
  },
  {
    name: "aaliance.eu",
    description: "Dominio EU sanità/anziani con backlink da Europa.eu, Cambridge, Springer, Heise e EurActiv.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 69,
    inboundLinks: "227+",
    followedLinks: "163+",
    category: "Sanità",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "227+",
    topBacklinks: ["europa.eu (DA 97)", "cambridge.org (DA 93)", "springer.com (DA 93)", "heise.de (DA 91)", "euractiv.com (DA 84)"]
  },
  {
    name: "unamec.be",
    description: "Dominio belga medico/sanità con backlink da OUP, Yumpu, KU Leuven e UGent.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 93,
    inboundLinks: "188+",
    followedLinks: "150+",
    category: "Sanità",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "188+",
    topBacklinks: ["oup.com (DA 93)", "yumpu.com (DA 91)", "kuleuven.be (DA 83)", "ugent.be (DA 76)", "justlanded.com (DA 76)"]
  },
  {
    name: "josephines.be",
    description: "Dominio belga lifestyle/ospitalità con backlink da Mixcloud, De Standaard e Elle.be.",
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
    description: "Dominio storico commemorativo WW1 con backlink da Wikipedia (FR, DE), StackExchange, FranceInfo e INRIA.",
    mozScore: 25,
    pageAuthority: 27,
    linkingDomains: 122,
    inboundLinks: "443+",
    followedLinks: "318+",
    category: "Storia",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "443+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "stackexchange.com (DA 91)", "franceinfo.fr (DA 91)", "inria.fr (DA 83)"]
  },
  {
    name: "serletproject.eu",
    description: "Dominio progetto EU con backlink da Apple.com, Bit.ly, RTL.fr e Wikipedia greco.",
    mozScore: 25,
    pageAuthority: 30,
    linkingDomains: 491,
    inboundLinks: "2K+",
    followedLinks: "1.9K+",
    category: "Innovazione",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "2K+",
    topBacklinks: ["apple.com (DA 99)", "bit.ly (DA 94)", "home.pl (DA 93)", "cocolog-nifty.com (DA 90)", "rtl.fr (DA 89)"]
  },
  {
    name: "landmark-project.eu",
    description: "Dominio progetto EU con backlink da Europa.eu, Wikipedia DE, Cambridge e Yumpu.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 161,
    inboundLinks: "1.1K+",
    followedLinks: "954+",
    category: "Progetti",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "1.1K+",
    topBacklinks: ["europa.eu (DA 97)", "goo.gl (DA 95)", "de.wikipedia.org (DA 94)", "cambridge.org (DA 93)", "yumpu.com (DA 91)"]
  },
  {
    name: "tandemtech.be",
    description: "Dominio tech belga con backlink da Medium, TinyURL, Bit.ly, Tweakers e Knack.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 61,
    inboundLinks: "613+",
    followedLinks: "565+",
    category: "Tecnologia",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "613+",
    topBacklinks: ["medium.com (DA 95)", "tinyurl.com (DA 94)", "bit.ly (DA 94)", "about.me (DA 92)", "pages.dev (DA 91)"]
  },
  {
    name: "happyvpro.nl",
    description: "Dominio olandese media con backlink da TinyURL, Ello, XS4ALL, Emerce e VPRO.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 74,
    inboundLinks: "1.5K+",
    followedLinks: "1.4K+",
    category: "Media",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "1.5K+",
    topBacklinks: ["tinyurl.com (DA 94)", "ello.co (DA 85)", "xs4all.nl (DA 79)", "emerce.nl (DA 69)", "vpro.nl (DA 68)"]
  },
  {
    name: "edlupt.eu",
    description: "Dominio EU con backlink da Pinterest, ANSA, RUG Groningen e università italiane.",
    mozScore: 25,
    pageAuthority: 28,
    linkingDomains: 192,
    inboundLinks: "119.7K+",
    followedLinks: "119.6K+",
    category: "Generale",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "119.7K+",
    topBacklinks: ["pinterest.com (DA 94)", "ansa.it (DA 91)", "rug.nl (DA 81)", "cnr.it (DA 75)", "unito.it (DA 70)"]
  },
  {
    name: "xcycle-h2020.eu",
    description: "Dominio EU H2020 mobilità con backlink da Europa.eu, Springer, MDPI e Frontiers.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 145,
    inboundLinks: "275+",
    followedLinks: "202+",
    category: "Mobilità",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "275+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "mdpi.com (DA 92)", "frontiersin.org (DA 92)", "euractiv.com (DA 84)"]
  },
  {
    name: "heinekenthecity.nl",
    description: "Dominio olandese urbano/lifestyle con backlink da Dezeen, Symbaloo, Fodors e VPRO.",
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
    description: "Dominio fotografia EU con backlink da E-Monsite, JournalDuNet, CNRS e Wikipedia SV.",
    mozScore: 24,
    pageAuthority: 31,
    linkingDomains: 578,
    inboundLinks: "4.6K+",
    followedLinks: "3.8K+",
    category: "Fotografia",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "4.6K+",
    topBacklinks: ["e-monsite.com (DA 92)", "home.blog (DA 91)", "journaldunet.com (DA 91)", "cnrs.fr (DA 90)", "allthatsinteresting.com (DA 85)"]
  },
  {
    name: "eulis.eu",
    description: "Dominio EU con backlink da Wikipedia (EN, ES, PT, FR), Europa.eu e MDPI.",
    mozScore: 24,
    pageAuthority: 33,
    linkingDomains: 246,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Generale",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "1.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "pt.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)"]
  },
  {
    name: "maribe.eu",
    description: "Dominio marittimo EU con backlink da Europa.eu, The Conversation, MDPI e Bristol University.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 90,
    inboundLinks: "146+",
    followedLinks: "115+",
    category: "Marittimo",
    price: "€125",
    backlinks: "146+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "mdpi.com (DA 92)", "siliconrepublic.com (DA 83)", "bristol.ac.uk (DA 78)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "200jaarstaten-generaal.nl",
    description: "Dominio governativo olandese con backlink da NOS, Università di Leiden e Tweede Kamer.",
    mozScore: 22,
    pageAuthority: 21,
    linkingDomains: 37,
    inboundLinks: "150+",
    followedLinks: "136+",
    category: "Governo/Cultura",
    price: "€125",
    backlinks: "150+",
    topBacklinks: ["nos.nl (DA 90)", "universiteitleiden.nl (DA 82)", "transparent.com (DA 76)", "tweedekamer.nl (DA 64)", "rd.nl (DA 62)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eu-thor.eu",
    description: "Dominio progetto EU con backlink da Wikipedia (EN, FR, DE), Europa.eu, Yumpu e WHOI.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 156,
    inboundLinks: "18.4K+",
    followedLinks: "18.3K+",
    category: "Progetti",
    price: "€125",
    backlinks: "18.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "yumpu.com (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eccomascfd2006.nl",
    description: "Dominio tecnico olandese con backlink da TU Delft, Southampton, Liverpool e NTNU.",
    mozScore: 23,
    pageAuthority: 25,
    linkingDomains: 52,
    inboundLinks: "371+",
    followedLinks: "352+",
    category: "Tecnologia",
    price: "€125",
    backlinks: "371+",
    topBacklinks: ["tudelft.nl (DA 85)", "soton.ac.uk (DA 85)", "uu.se (DA 83)", "liverpool.ac.uk (DA 83)", "ntnu.no (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "mbelgique.be",
    description: "Dominio nazionale belga con backlink da Wikipedia FR, BFMTV, Heise, NU.nl e Europe1.",
    mozScore: 23,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "113+",
    followedLinks: "87+",
    category: "Generale",
    price: "€125",
    backlinks: "113+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "bfmtv.com (DA 92)", "heise.de (DA 91)", "nu.nl (DA 91)", "europe1.fr (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "lifemanev.eu",
    description: "Dominio progetto EU agricoltura sostenibile con backlink da MDPI, ITACYL e CSIC.",
    mozScore: 23,
    pageAuthority: 24,
    linkingDomains: 40,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "Sostenibilità",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["mdpi.com (DA 92)", "itacyl.es (DA 45)", "cebas.csic.es (DA 42)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  // DA 22
  {
    name: "bruegel2019.be",
    description: "Dominio patrimonio culturale con backlink da Campaign Archive, Knack.be e Brusselslife.",
    mozScore: 22,
    pageAuthority: 24,
    linkingDomains: 42,
    inboundLinks: "323+",
    followedLinks: "312+",
    category: "Arte/Patrimonio",
    price: "€125",
    backlinks: "323+",
    topBacklinks: ["campaign-archive.com (DA 84)", "knack.be (DA 77)", "tntcode.com (DA 61)", "tvl.be (DA 52)", "brusselslife.be (DA 52)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "infoecmi.eu",
    description: "Dominio EU informazione con backlink da Wikipedia (EN, ES, PT, RU, DE), UCL e ETH Zurigo.",
    mozScore: 22,
    pageAuthority: 31,
    linkingDomains: 259,
    inboundLinks: "1.2K+",
    followedLinks: "727+",
    category: "Informazione",
    price: "€125",
    backlinks: "1.2K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "pt.wikipedia.org (DA 96)", "ru.wikipedia.org (DA 94)", "ucl.ac.uk (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "romain-roquette.be",
    description: "Dominio belga personale/portfolio con backlink da Airbnb, Foursquare, The Culture Trip e Knack.be.",
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
    description: "Dominio tedesco/EU governo locale con backlink da Wikipedia (EN, ES, FR, RU, NL), Bit.ly e Creative Commons.",
    mozScore: 22,
    pageAuthority: 32,
    linkingDomains: 810,
    inboundLinks: "4.9K+",
    followedLinks: "4.7K+",
    category: "Governo",
    price: "€125",
    backlinks: "4.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "ru.wikipedia.org (DA 94)", "creativecommons.org (DA 94)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "europeanmuseumforum.eu",
    description: "Dominio forum museo europeo con backlink da Wikipedia (EN, ES, FR, RU, NL), Bit.ly e Creative Commons.",
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
    description: "Dominio evento ESC con backlink da ETH Zurigo, Azure, Copernicus, CSIC e Monash University.",
    mozScore: 22,
    pageAuthority: 25,
    linkingDomains: 102,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "Eventi",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["ethz.ch (DA 89)", "azure.com (DA 84)", "copernicus.eu (DA 83)", "csic.es (DA 78)", "monash.edu (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eurasiancouncilforeignaffairs.eu",
    description: "Dominio relazioni internazionali con backlink da Wikipedia (EN, ES, FR, ZH), Cambridge e The Diplomat.",
    mozScore: 23,
    pageAuthority: 23,
    linkingDomains: 65,
    inboundLinks: "184+",
    followedLinks: "98+",
    category: "Internazionale",
    price: "€125",
    backlinks: "184+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "bit.ly (DA 94)", "cam.ac.uk (DA 92)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "waterpipp.eu",
    description: "Dominio progetto EU acqua e ambiente con backlink da Europa.eu, Bit.ly, Ask.com e Campaign Archive.",
    mozScore: 22,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "1.2K+",
    followedLinks: "1.1K+",
    category: "Ambiente",
    price: "€125",
    backlinks: "1.2K+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "ask.com (DA 88)", "campaign-archive.com (DA 84)", "worldwidetopsite.com (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "artsalivewales.org.uk",
    description: "Dominio gallese arte/cultura con backlink da The Guardian, Mirror, Eventbrite e Wales Online.",
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
    description: "Dominio olandese trasporto/stazione con backlink da Wikipedia (FR, NL), NS, Nieuws.nl e ProRail.",
    mozScore: 21,
    pageAuthority: 24,
    linkingDomains: 62,
    inboundLinks: "187+",
    followedLinks: "134+",
    category: "Trasporto",
    price: "€79",
    backlinks: "187+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "nl.wikipedia.org (DA 91)", "ns.nl (DA 72)", "nieuws.nl (DA 63)", "prorail.nl (DA 55)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "oramed-fp7.eu",
    description: "Dominio progetto EU-FP7 ricerca medica con backlink da Europa.eu, Springer, IIT e FGOV.be.",
    mozScore: 21,
    pageAuthority: 24,
    linkingDomains: 60,
    inboundLinks: "130+",
    followedLinks: "109+",
    category: "Ricerca",
    price: "€79",
    backlinks: "130+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "iit.edu (DA 75)", "fgov.be (DA 72)", "upc.edu (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "ismagazine.nl",
    description: "Dominio olandese magazine/media con backlink da UNESCO, WUR e Startpagina.",
    mozScore: 21,
    pageAuthority: 20,
    linkingDomains: 56,
    inboundLinks: "496+",
    followedLinks: "339+",
    category: "Media",
    price: "€79",
    backlinks: "496+",
    topBacklinks: ["unesco.org (DA 93)", "wur.nl (DA 71)", "jouwweb.nl (DA 63)", "startpagina.nl (DA 63)", "fok.nl (DA 59)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "wbetting.co.uk",
    description: "Dominio UK betting/gaming con backlink da OVH, Joomla.org, WSU e CSIC.",
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
    description: "Dominio olandese sport/ginnastica con backlink da LiveInternet, Pages.dev, XSRV e Toolforge.",
    mozScore: 21,
    pageAuthority: 29,
    linkingDomains: 246,
    inboundLinks: "7.6K+",
    followedLinks: "7.5K+",
    category: "Sport",
    price: "€79",
    backlinks: "7.6K+",
    topBacklinks: ["liveinternet.ru (DA 93)", "pages.dev (DA 91)", "xsrv.jp (DA 89)", "toolforge.org (DA 80)", "worldwidetopsite.com (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "nanostarproject.eu",
    description: "Dominio progetto EU nanotecnologia con backlink da Springer, Sapo.pt, Pages.dev e università (UPM, UC3M).",
    mozScore: 21,
    pageAuthority: 28,
    linkingDomains: 76,
    inboundLinks: "338+",
    followedLinks: "306+",
    category: "Tecnologia",
    price: "€79",
    backlinks: "338+",
    topBacklinks: ["springer.com (DA 93)", "sapo.pt (DA 93)", "pages.dev (DA 91)", "upm.es (DA 78)", "uc3m.es (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  // DA 20
  {
    name: "espresso-project.eu",
    description: "Dominio progetto smart city e mobilità con backlink da Europa.eu, Medium, MDPI e Telecom TV.",
    mozScore: 20,
    pageAuthority: 28,
    linkingDomains: 81,
    inboundLinks: "191+",
    followedLinks: "146+",
    category: "Smart City",
    price: "€79",
    backlinks: "191+",
    topBacklinks: ["europa.eu (DA 97)", "medium.com (DA 95)", "mdpi.com (DA 92)", "campaign-archive.com (DA 84)", "telecomtv.com (DA 67)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
];

const PremiumDomainsIT = () => {
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
    
    const validation = validateContactForm(formData);
    
    if (!validation.success) {
      const errorResult = validation as { success: false; errors: Record<string, string> };
      setFormErrors(errorResult.errors);
      const firstError = Object.values(errorResult.errors)[0] || "Verifica i tuoi dati";
      toast({
        title: "Compila tutti i campi obbligatori correttamente",
        description: firstError,
        variant: "destructive"
      });
      return;
    }

    const { data } = validation;
    
    const subject = `Richiesta Dominio Premium: ${data.domain}`;
    const body = `Nome: ${data.name}\nE-mail: ${data.email}\nDominio: ${data.domain}\n\nMessaggio:\n${data.message || ""}`;
    
    window.location.href = buildSafeMailtoUrl("support@iaee.eu", subject, body);
    
    toast({
      title: "Richiesta in elaborazione",
      description: "Il tuo programma email viene aperto per inviare la richiesta."
    });
  };

  const handleDomainInquiry = (domainName: string) => {
    setFormData(prev => ({ ...prev, domain: domainName }));
    scrollToSection("contact");
  };

  return (
    <>
      <Helmet>
        <title>Domini Premium Scaduti con Backlink Alta Autorità & Valore SEO</title>
        <meta name="description" content="Acquista domini scaduti con backlink? Domini scaduti affidabili con alta autorità e valore SEO. Acquista dominio premium per ranking Google più veloci. Disponibili subito." />
        <meta name="keywords" content="acquistare dominio scaduto, domini scaduti con backlink, dominio con autorità, domini scaduti affidabili, acquistare dominio premium, dominio con valore SEO, vecchio dominio con link, migliori domini in vendita" />
        <link rel="canonical" href="https://iaee.eu/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Language Switcher */}
        <LanguageSwitcher currentLanguage="it" />
        
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 flex-shrink-0" />
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent hover:from-amber-300 hover:to-amber-500 transition-all truncate">
                Domini Premium
              </span>
            </RouterLink>
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <RouterLink to="/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
                <Home className="h-4 w-4" />
                Home
              </RouterLink>
              <button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Domini
              </button>
              <button onClick={() => scrollToSection("why-premium")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Perché Premium?
              </button>
              <button onClick={() => scrollToSection("seo-redirects")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                SEO & Redirect
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold"
              >
                Contatto
              </Button>
            </nav>
            <Button 
              onClick={() => scrollToSection("domains")}
              className="md:hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-xs px-3 py-2"
            >
              Domini
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
                Collezione Esclusiva Domini Premium
              </Badge>
              
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Domini Premium Scaduti con Backlink Alta Autorità & Valore SEO
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Rafforza la tua presenza online con nomi di dominio che hanno già costruito anni di autorità.
                Ideali per ranking più veloci, backlink potenti e vantaggi SEO immediati.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("domains")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-105"
                >
                  Vedi Domini
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("why-premium")}
                  className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6"
                >
                  Maggiori Informazioni
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2">
                {[
                  { label: "Punteggio MOZ Medio", value: "29+" },
                  { label: "Domini Premium", value: "110+" },
                  { label: "Anni di Esperienza", value: "10+" },
                  { label: "Clienti Soddisfatti", value: "500+" }
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
                Domini Disponibili
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Domini Premium in Vendita
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Ogni dominio è stato accuratamente selezionato in base all'autorità MOZ, profilo backlink e potenziale SEO.
                Vuoi <strong className="text-white">acquistare un dominio scaduto</strong> o cerchi <strong className="text-white">domini scaduti affidabili</strong>? Sfoglia la nostra offerta qui sotto.
              </p>
            </div>
            
            {/* SEO Intro Text */}
            <div className="max-w-5xl mx-auto mb-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">Cerchi un nome di dominio con vero valore SEO?</strong> Da noi acquisti <strong className="text-amber-400">domini scaduti con backlink</strong> affidabili e alta autorità, accuratamente verificati per qualità e storia. Con un dominio scaduto non parti da zero, ma benefici subito di link esistenti, fiducia e storia online.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-amber-400">Siamo specializzati in .EU e altre estensioni di dominio europee</strong> e ci distinguiamo chiaramente nel segmento dei nomi web europei.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Questi domini scaduti dispongono di backlink esistenti da <strong className="text-amber-400">aziende rinomate, istituzioni mediatiche e organizzazioni governative</strong> — link essenziali che per i siti web normali sono molto difficili o impossibili da ottenere. I domini scaduti sono un vantaggio strategico che i migliori marketer, agenzie e investitori utilizzano da anni per crescere più velocemente degli altri.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Oltre ai domini scaduti offriamo anche <strong className="text-amber-400">domini premium</strong>: nomi corti e potenti con valore di marca e potenziale commerciale. Che tu stia avviando un sito web, un negozio online o un progetto SEO — un <strong className="text-white">dominio con autorità</strong> ti dà un chiaro vantaggio su Google.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                <strong className="text-white">Ricerche frequenti:</strong> acquistare dominio scaduto con backlink • domini scaduti affidabili • dominio scaduto con autorità • acquistare dominio premium • dominio con valore SEO • vecchio dominio con link • migliori domini in vendita
              </p>
            </div>

            {/* VAT Notice */}
            <div className="max-w-5xl mx-auto mb-10 text-center">
              <p className="text-sm text-slate-300 font-medium bg-slate-800/40 border border-slate-700/40 rounded-lg px-4 py-3 inline-block">
                <span className="text-amber-400 font-semibold">Informazioni IVA:</span> I prezzi sono esclusi IVA per i clienti privati nell'UE. I clienti aziendali nell'UE possono applicare il reverse charge. Per i clienti fuori dall'UE non viene addebitata IVA.
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
                          <span>Backlink: {domain.backlinks}</span>
                        </div>
                      </div>
                      
                      {domain.pageAuthority && (
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Page Authority:</span>
                            <span className="text-white ml-1 font-medium">{domain.pageAuthority}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Domini Collegati:</span>
                            <span className="text-white ml-1 font-medium">{domain.linkingDomains}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Link in Entrata:</span>
                            <span className="text-white ml-1 font-medium">{domain.inboundLinks}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Link Seguiti:</span>
                            <span className="text-white ml-1 font-medium">{domain.followedLinks}</span>
                          </div>
                        </div>
                      )}
                      
                      {/* Top backlinks - vertical like Dutch version */}
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
                      
                      {/* Use Cases with emerald styling */}
                      {domain.useCases && domain.useCases.length > 0 && (
                        <div className="text-[10px] sm:text-xs">
                          <span className="text-slate-500 block mb-1">Adatto per:</span>
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
                        <span className="text-xs sm:text-sm font-medium text-slate-300">Prezzo</span>
                        <span className="text-base sm:text-lg font-bold text-amber-400">{domain.price}</span>
                      </div>
                      
                      {domain.stripePaymentLink ? (
                        <div className="flex flex-col gap-2 sm:gap-3">
                          <a 
                            href={domain.stripePaymentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold rounded-md shadow-md transition-all duration-200 hover:shadow-lg text-sm sm:text-base md:text-lg"
                          >
                            Acquista Ora
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          </a>
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
                              <p className="text-[8px] sm:text-[10px] text-slate-400 leading-tight mt-1.5 sm:mt-2">Pagamento sicuro tramite Stripe</p>
                              <a href="#trasferimento-dominio" className="text-[8px] sm:text-[10px] text-amber-400 hover:text-amber-300 underline mt-1.5 sm:mt-2">Come funziona il trasferimento?</a>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#F59E0B] text-slate-950 font-bold rounded-md shadow-md text-sm sm:text-base md:text-lg">
                          Acquista Ora
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Premium Domains Section */}
        <section id="why-premium" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                <Award className="w-4 h-4 mr-2 inline" />
                Vantaggi
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perché Scegliere Domini Premium?
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                I domini premium offrono vantaggi unici che possono accelerare significativamente la tua strategia online.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: TrendingUp,
                  title: "Ranking Più Veloci",
                  description: "I domini con autorità esistente vengono indicizzati e posizionati più velocemente su Google rispetto ai domini completamente nuovi."
                },
                {
                  icon: Link,
                  title: "Profilo Backlink Esistente",
                  description: "Beneficia di backlink già costruiti da siti autorevoli che aumentano la tua autorità di dominio."
                },
                {
                  icon: Shield,
                  title: "Fiducia & Credibilità",
                  description: "I domini più vecchi con una storia pulita godono di più fiducia sia dai motori di ricerca che dagli utenti."
                },
                {
                  icon: Zap,
                  title: "Vantaggio Competitivo",
                  description: "Salta anni di costruzione del dominio e supera immediatamente la concorrenza con un vantaggio di autorità."
                },
                {
                  icon: Target,
                  title: "Rilevanza di Nicchia",
                  description: "Molti dei nostri domini hanno backlink da siti rilevanti per la nicchia, perfetti per settori specifici."
                },
                {
                  icon: BarChart3,
                  title: "Punteggio MOZ Verificato",
                  description: "Ogni dominio viene consegnato con metriche MOZ verificate così sai esattamente cosa acquisti."
                }
              ].map((benefit, index) => (
                <div key={index} className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-amber-500/30 transition-all group">
                  <benefit.icon className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MOZ DA Explanation */}
        <section id="moz-explanation" className="py-20 bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                  <BarChart3 className="w-4 h-4 mr-2 inline" />
                  Comprendere il Punteggio MOZ
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Cosa Significa la Domain Authority?
                </h2>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-semibold text-amber-400 mb-4">MOZ Domain Authority (DA)</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    La Domain Authority è un punteggio di ranking sviluppato da MOZ che predice quanto bene un sito web si posizionerà nelle pagine dei risultati dei motori di ricerca (SERP). I punteggi DA vanno da 1 a 100, dove punteggi più alti indicano una maggiore probabilità di posizionamento.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-red-400 mb-1">1-20</div>
                      <div className="text-sm text-slate-400">DA Basso</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-1">21-40</div>
                      <div className="text-sm text-slate-400">DA Medio</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">41+</div>
                      <div className="text-sm text-slate-400">DA Alto</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-amber-400 mb-4">Come Viene Calcolato?</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    MOZ calcola la DA analizzando oltre 40 segnali, tra cui:
                  </p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span>Domini di root collegati (quanti siti unici collegano a te)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span>Numero totale di link (quantità e qualità)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span>Qualità del profilo link</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span>Dati di ranking della ricerca in tempo reale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Redirects Section */}
        <section id="seo-redirects" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                <Link className="w-4 h-4 mr-2 inline" />
                Strategie SEO
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Come Funzionano i Redirect SEO e la Costruzione dell'Autorità?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Ci sono diversi modi strategici per utilizzare i domini premium per un impatto SEO massimo.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Strategia Redirect 301",
                  description: "Un redirect 301 trasferisce tutto il valore SEO e l'autorità dal dominio premium al tuo dominio principale. Questo è il modo più veloce per migliorare i tuoi ranking.",
                  benefits: [
                    "Trasferimento diretto del link juice",
                    "Conservazione di tutti i backlink",
                    "Boost rapido dell'autorità",
                    "Setup una tantum, effetto permanente"
                  ]
                },
                {
                  title: "Authority Stacking",
                  description: "Costruisci un network di domini autorevoli che collegano tutti al tuo sito principale. Questo crea un ecosistema potente di backlink rilevanti e di alta qualità.",
                  benefits: [
                    "Molteplici fonti di autorità",
                    "Rilevanza tematica",
                    "Profilo link naturale",
                    "Strategia SEO a lungo termine"
                  ]
                },
                {
                  title: "Usare Come Dominio Principale",
                  description: "Avvia il tuo nuovo progetto direttamente con un dominio che ha già autorità. Questo risparmia anni di link building e costruzione dell'anzianità del dominio.",
                  benefits: [
                    "Inizia subito con autorità",
                    "Fiducia esistente da Google",
                    "Indicizzazione più veloce",
                    "Vantaggio sulla concorrenza"
                  ]
                },
                {
                  title: "Private Blog Network (PBN)",
                  description: "Usa i domini premium per creare siti di contenuti di valore che generano backlink potenti verso il tuo sito principale.",
                  benefits: [
                    "Controllo completo sui backlink",
                    "Siti di contenuti tematici",
                    "Profili link diversificati",
                    "Link building scalabile"
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
                  Perché Questi Domini Sono Unici
                </h3>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  I nostri domini premium sono accuratamente selezionati e soddisfano requisiti di qualità rigorosi.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { icon: Shield, title: "Storia Pulita", desc: "Nessun passato spam o penalità" },
                  { icon: Link, title: "Backlink di Qualità", desc: "Da fonti affidabili" },
                  { icon: BarChart3, title: "Alto Punteggio DA", desc: "Minimo DA 20+" },
                  { icon: Globe, title: "Nicchie Rilevanti", desc: "Domini tematicamente appropriati" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-amber-500/30 transition-all">
                    <item.icon className="w-10 h-10 text-amber-400 mx-auto mb-4" />
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
                Domande Frequenti
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                FAQ sui Domini Premium & SEO
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Dove posso acquistare un dominio scaduto con backlink?",
                    answer: "Un dominio scaduto con backlink lo acquisti meglio da un venditore specializzato che controlla manualmente i domini per qualità, storia e autorità. Così eviti di comprare un dominio con link spam o problemi SEO. Noi offriamo solo domini scaduti affidabili che sono stati accuratamente verificati."
                  },
                  {
                    question: "Cos'è un dominio scaduto affidabile con alta autorità?",
                    answer: "Un dominio scaduto affidabile con alta autorità è un dominio che ha backlink di qualità, una storia pulita del sito, nessun passato spam, gioco d'azzardo o adult e link rilevanti da contenuti reali. Questo tipo di dominio offre vero valore SEO e ti dà un vantaggio su Google."
                  },
                  {
                    question: "Quanto valore SEO ha un dominio scaduto con link?",
                    answer: "Il valore SEO di un dominio scaduto con link sta principalmente nei backlink esistenti, nell'autorità di dominio costruita e nella fiducia più veloce da Google. Questo può ridurre significativamente il tempo per posizionarsi — spesso mesi o anni più velocemente rispetto a un nuovo dominio."
                  },
                  {
                    question: "Un dominio scaduto con autorità è meglio del link building?",
                    answer: "In molti casi sì. Con un dominio scaduto acquisti link e autorità esistenti, mentre il link building può essere dispendioso in termini di tempo, costoso e rischioso. Un vecchio dominio con valore SEO ti dà subito un vantaggio senza mesi di investimento in link building."
                  },
                  {
                    question: "Posso usare un dominio scaduto per un nuovo sito web?",
                    answer: "Sì. Puoi usare perfettamente un dominio scaduto con valore SEO per un nuovo sito web, purché il contenuto si colleghi logicamente all'argomento e alla storia del dominio. I backlink rimangono attivi e benefici subito dell'autorità costruita."
                  },
                  {
                    question: "Qual è la differenza tra un dominio premium e un dominio scaduto?",
                    answer: "Un dominio premium è principalmente prezioso per la qualità del nome e il valore del marchio, mentre un dominio scaduto con backlink porta anche autorità SEO e storia extra. Entrambi possono essere preziosi, a seconda del tuo obiettivo. Alcuni domini combinano entrambi i vantaggi."
                  },
                  {
                    question: "Perché i domini scaduti con backlink sono più costosi?",
                    answer: "I domini scaduti con backlink sono più costosi perché hanno già valore SEO, risparmiano tempo e costi e rendono possibile un inizio più veloce. Paghi per fiducia costruita, non solo per un nome. L'investimento spesso si ripaga rapidamente attraverso migliori ranking."
                  },
                  {
                    question: "I domini scaduti con autorità sono adatti per negozi online?",
                    answer: "Sì. Per i negozi online la fiducia è cruciale. Un dominio scaduto con alta autorità può contribuire a una migliore visibilità, conversioni più alte e indicizzazione più veloce. Questo dà al tuo negozio online un vantaggio sui concorrenti che iniziano con un nuovo dominio."
                  },
                  {
                    question: "Cos'è la Domain Authority (DA) e perché è importante?",
                    answer: "La Domain Authority è un punteggio da 1-100 sviluppato da MOZ che predice quanto bene un sito web si posizionerà nei motori di ricerca. Un DA più alto significa più autorità e migliori possibilità di posizionarsi in alto. Si basa su fattori come il numero e la qualità dei backlink, l'età del dominio e l'affidabilità complessiva."
                  },
                  {
                    question: "Come funziona un redirect 301 per la SEO?",
                    answer: "Un redirect 301 è un reindirizzamento permanente che dice ai motori di ricerca che una pagina si è spostata permanentemente. Quando fai un redirect 301 di un dominio premium al tuo sito, gran parte del valore SEO (link juice) di quel dominio viene trasferita al tuo sito. Questo può migliorare significativamente i tuoi ranking."
                  },
                  {
                    question: "Quanto tempo ci vuole prima di vedere risultati?",
                    answer: "Gli effetti di un trasferimento di dominio o redirect 301 sono generalmente visibili nei risultati di ricerca entro 2-8 settimane. Dipende da quanto spesso Google crawla il tuo sito e dallo stato attuale del tuo sito web. I domini premium con backlink attivi spesso mostrano risultati più velocemente."
                  },
                  {
                    question: "Perché a volte appaiono siti web dal vostro portfolio nella storia di un dominio?",
                    answer: "Alcuni nomi di dominio nel nostro portfolio sono stati precedentemente utilizzati per i nostri progetti, siti web di prova o redirect 301. Questo riguarda siti web come NailTalk, OntwerpNovi, OliveVines e progetti simili. Questo è in realtà un vantaggio: questi domini hanno risultati comprovati e sono stati attivamente testati per le prestazioni SEO. Tutti i nostri nomi di dominio vengono accuratamente controllati presso più fonti prima della vendita (come archivi di storia web, Google, Ahrefs, MOZ e spam checker) e sono completamente privi di passato dannoso come spam, contenuti per adulti o storia di gioco d'azzardo. Un sito web dal nostro portfolio nella storia è quindi un segno di qualità e gestione attenta — non un motivo di preoccupazione."
                  }
                ].map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-slate-800/40 border border-slate-700/50 rounded-xl px-6 data-[state=open]:border-amber-500/30"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-amber-400 hover:no-underline py-4">
                      <h3 className="font-semibold">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
                
                {/* Complete Guide: 35 Questions about Expired Domains */}
                <AccordionItem 
                  value="complete-guide"
                  className="bg-gradient-to-br from-amber-500/10 to-slate-800/40 border border-amber-500/30 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:text-amber-400 hover:no-underline py-4">
                    <h3 className="font-semibold">Guida Completa: 35 Domande sui Domini Scaduti & SEO</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 pb-6 leading-relaxed">
                    <div className="space-y-8 whitespace-pre-line">
                      {[
                        {
                          question: "1. Quale nome di dominio dovrei comprare come principiante?",
                          answer: "Come principiante, è meglio scegliere un nome di dominio facile da ricordare, che indichi chiaramente cosa fai e che ispiri fiducia. Molti principianti cercano 'quale dominio devo comprare' e finiscono automaticamente sui nuovi domini, mentre un dominio scaduto affidabile ha spesso già accumulato autorità e valore."
                        },
                        {
                          question: "2. Qual è la differenza tra un nuovo dominio e un dominio scaduto?",
                          answer: "Un nuovo dominio non ha storia e parte completamente da zero. Un dominio scaduto è già stato registrato e potrebbe ancora avere backlink, autorità e fiducia con Google. Questo rende un dominio scaduto spesso più attraente per SEO e visibilità."
                        },
                        {
                          question: "3. È meglio comprare un nuovo dominio o un dominio scaduto?",
                          answer: "Chi cerca 'nuovo dominio o dominio scaduto' sta solitamente confrontando velocità e risultati. Per il branding, un nuovo nome può funzionare, ma per essere trovati più velocemente in Google, un buon dominio scaduto offre spesso un chiaro vantaggio."
                        },
                        {
                          question: "4. Perché il mio nuovo sito web si posiziona così male in Google?",
                          answer: "I nuovi siti web devono ancora costruire la loro affidabilità. Senza backlink e storia, questo richiede spesso mesi. Un dominio scaduto con buoni link può evitarti di dover ricominciare completamente da zero."
                        },
                        {
                          question: "5. È sicuro comprare un dominio scaduto?",
                          answer: "Sì, purché sia un dominio scaduto verificato e affidabile. Il rischio non è in 'scaduto', ma nei domini che non sono stati verificati per spam, abusi o backlink di bassa qualità."
                        },
                        {
                          question: "6. Cosa significa un dominio con buoni backlink?",
                          answer: "Un dominio con buoni backlink ha riferimenti da siti web reali e pertinenti. Questi link forniscono autorità e fiducia con i motori di ricerca, essenziale per le prestazioni SEO."
                        },
                        {
                          question: "7. Perché i backlink sono importanti quando compri un dominio?",
                          answer: "I backlink sono uno dei fattori di ranking più importanti di Google. Quando cerchi 'comprare dominio SEO', stai effettivamente cercando un dominio che ha già costruito fiducia — esattamente ciò che offre un buon dominio scaduto."
                        },
                        {
                          question: "8. Come posso vedere se un dominio scaduto è affidabile?",
                          answer: "Un dominio scaduto affidabile è verificato per: storia del sito web, qualità dei backlink, assenza di spam, gioco d'azzardo o contenuti per adulti. Come venditore, selezioniamo solo domini che soddisfano questi criteri."
                        },
                        {
                          question: "9. Posso usare un dominio scaduto per un nuovo sito web?",
                          answer: "Sì. Puoi usare perfettamente un dominio scaduto per un progetto completamente nuovo. Il contenuto è nuovo, ma il dominio porta già autorità online."
                        },
                        {
                          question: "10. Un dominio scaduto è adatto ai principianti?",
                          answer: "Certamente. I principianti spesso ne beneficiano di più perché: ottengono visibilità più velocemente, hanno meno ritardo SEO, fanno un inizio più professionale."
                        },
                        {
                          question: "11. Perché alcuni domini sono più costosi di altri?",
                          answer: "Ricerche come 'perché un dominio è così costoso' spesso derivano da incomprensione del valore. Il prezzo è determinato da: qualità del nome, valore SEO, backlink, applicabilità commerciale."
                        },
                        {
                          question: "12. Posso rivendere un dominio scaduto in seguito?",
                          answer: "Sì. Molte persone cercano 'dominio come investimento'. Un dominio scaduto forte spesso mantiene il suo valore e può persino aumentare di prezzo."
                        },
                        {
                          question: "13. Un dominio scaduto può essere dannoso per la SEO?",
                          answer: "Solo se ha una cattiva storia. Ecco perché c'è una grande differenza tra: domini scaduti non verificati e domini selezionati con cura e affidabili."
                        },
                        {
                          question: "14. A cosa devo fare attenzione quando compro un dominio scaduto?",
                          answer: "Punti importanti da considerare sono: storia senza spam, backlink pertinenti, nome di dominio logico, nessun rischio di marchio registrato."
                        },
                        {
                          question: "15. Quanto velocemente posso iniziare dopo aver comprato un dominio?",
                          answer: "Dopo il trasferimento puoi usare immediatamente il dominio per: un sito web, email, negozio online. Proprio come con un nuovo dominio."
                        },
                        {
                          question: "16. Ho bisogno di conoscenze tecniche per usare un dominio scaduto?",
                          answer: "No. Un dominio scaduto funziona tecnicamente come un nuovo dominio e può essere usato con qualsiasi provider di hosting."
                        },
                        {
                          question: "17. Un dominio scaduto è adatto per un negozio online?",
                          answer: "Sì. I negozi online beneficiano particolarmente di: fiducia, autorità, miglior inizio in Google. Questo è cruciale per le conversioni."
                        },
                        {
                          question: "18. Cosa significa autorità di dominio quando compri un dominio?",
                          answer: "L'autorità di dominio è un'indicazione di quanto è forte un dominio in base a link e storia. Molti domini scaduti ottengono punteggi più alti qui rispetto ai nuovi domini."
                        },
                        {
                          question: "19. Un dominio scaduto è meglio del link building?",
                          answer: "In molti casi sì. Acquisti essenzialmente una reputazione esistente, invece di costruirla più tardi in modo costoso e rischioso."
                        },
                        {
                          question: "20. Perché gli imprenditori scelgono consapevolmente un dominio scaduto?",
                          answer: "Perché cercano: risultati più veloci, meno rischio SEO, un inizio intelligente con vantaggio."
                        },
                        {
                          question: "21. Un dominio scaduto è adatto per ogni nicchia?",
                          answer: "Per quasi ogni nicchia sono disponibili buoni domini scaduti, purché nome e storia si colleghino logicamente all'argomento."
                        },
                        {
                          question: "22. Posso ricevere aiuto nella scelta del dominio giusto?",
                          answer: "Sì. Molti principianti cercano 'quale dominio si adatta alla mia azienda'. La guida previene errori di acquisto e fa risparmiare denaro."
                        },
                        {
                          question: "23. Qual è il più grande vantaggio di un dominio scaduto?",
                          answer: "Il più grande vantaggio è che non parti da zero nei motori di ricerca."
                        },
                        {
                          question: "24. Qual è il più grande malinteso sui domini scaduti?",
                          answer: "Che siano per definizione rischiosi. In realtà, i domini non testati sono rischiosi — non i domini scaduti selezionati con cura."
                        },
                        {
                          question: "25. Per chi è più adatto un dominio scaduto affidabile?",
                          answer: "Per: principianti, imprenditori, negozi online, progetti SEO, investitori. Chiunque cerchi 'comprare il miglior dominio' e voglia iniziare in modo intelligente."
                        },
                        {
                          question: "26. Come so se un dominio è adatto per la SEO?",
                          answer: "Un dominio è adatto per la SEO se: il nome è logico e pertinente, non ha passato di spam, sono presenti backlink di qualità. Un dominio scaduto con buoni link spesso ottiene punteggi migliori qui rispetto a un nuovo dominio."
                        },
                        {
                          question: "27. L'acquisto di un dominio scaduto influenza i ranking di Google?",
                          answer: "Sì. Google guarda la storia e la struttura dei link di un dominio. Un dominio scaduto affidabile può aiutare a costruire visibilità più velocemente, se usato correttamente."
                        },
                        {
                          question: "28. Quali sono i vantaggi di un dominio scaduto con autorità?",
                          answer: "I principali vantaggi sono: fiducia più veloce con i motori di ricerca, meno dipendenza dal link building, posizione di partenza più forte rispetto ai concorrenti con nuovi domini."
                        },
                        {
                          question: "29. Devo avere una keyword nel mio dominio per la SEO?",
                          answer: "Non necessariamente. Ricerche come 'dominio keyword SEO' mostrano che questa è una domanda frequente. Un nome chiaro e affidabile è più importante delle keyword esatte, specialmente per domini scaduti con autorità."
                        },
                        {
                          question: "30. Un dominio corto è meglio di un dominio lungo?",
                          answer: "Sì. I domini corti sono: più facili da ricordare, più professionali, più stabili nel valore. Molti domini scaduti premium sono proprio corti e potenti."
                        },
                        {
                          question: "31. Posso usare un dominio scaduto per più progetti?",
                          answer: "Sì, per esempio per: un sito web principale, un progetto di nicchia, un portale di marca. È importante però che il contenuto si colleghi logicamente alla storia del dominio."
                        },
                        {
                          question: "32. Cosa succede ai vecchi backlink se creo un nuovo sito web?",
                          answer: "I backlink rimangono finché non vengono rimossi dai siti web di riferimento. Questo è proprio uno dei grandi vantaggi dell'acquisto di un dominio scaduto."
                        },
                        {
                          question: "33. Un dominio scaduto è meglio di più nuovi domini?",
                          answer: "Per focus e SEO, un dominio scaduto forte è spesso più efficace di più nuovi domini senza autorità."
                        },
                        {
                          question: "34. Posso ottenere clienti più velocemente con un dominio scaduto?",
                          answer: "Indirettamente sì. Visibilità più veloce e più fiducia fanno sì che i visitatori convertano prima."
                        },
                        {
                          question: "35. Quanto a lungo si mantiene il valore di un dominio scaduto?",
                          answer: "Finché il dominio viene usato e mantenuto bene, il valore si mantiene e può persino crescere."
                        },
                        {
                          question: "36. Perché dovrei comprare un dominio da un venditore specializzato?",
                          answer: "Perché un venditore specializzato: verifica i domini in anticipo, esclude i rischi, guida i principianti, è trasparente sulla qualità e la storia. Questo fa la differenza tra scommettere e investire consapevolmente."
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

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                  <Mail className="w-4 h-4 mr-2 inline" />
                  Contattaci
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Interesse per un Dominio Premium?
                </h2>
                <p className="text-slate-400">
                  Compila il modulo sottostante e ti contatteremo entro 24 ore.
                </p>
              </div>
              
              <Card className="bg-slate-800/40 border-slate-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                        <User className="w-4 h-4 text-amber-400" />
                        Nome *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Il tuo nome"
                        className={`bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-amber-500 ${formErrors.name ? 'border-red-500' : ''}`}
                        required
                      />
                      {formErrors.name && <p className="text-red-400 text-xs">{formErrors.name}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-amber-400" />
                        E-mail *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="tua@email.com"
                        className={`bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-amber-500 ${formErrors.email ? 'border-red-500' : ''}`}
                        required
                      />
                      {formErrors.email && <p className="text-red-400 text-xs">{formErrors.email}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-amber-400" />
                        Dominio di Interesse *
                      </label>
                      <Input
                        value={formData.domain}
                        onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                        placeholder="esempio.eu"
                        className={`bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-amber-500 ${formErrors.domain ? 'border-red-500' : ''}`}
                        required
                      />
                      {formErrors.domain && <p className="text-red-400 text-xs">{formErrors.domain}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-amber-400" />
                        Messaggio (opzionale)
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Raccontaci di più sulla tua richiesta..."
                        className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-amber-500 min-h-[120px]"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-6 text-lg"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Invia Richiesta
                    </Button>
                    
                    <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3" />
                      I tuoi dati sono al sicuro e non saranno condivisi con terze parti.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Domain Transfer Instructions */}
        <section id="trasferimento-dominio" className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="border border-amber-500/30 rounded-xl bg-slate-800/50">
                <div className="px-6 py-4">
                  <h2 className="text-xl font-bold text-white">
                    <div className="flex items-center gap-3">
                      <Globe className="w-6 h-6 text-amber-400" />
                      <span>Come trasferire il tuo dominio con il token di trasferimento (EPP/Auth code)?</span>
                    </div>
                  </h2>
                </div>
                <div className="px-6 pb-6">
                  <div className="space-y-6 text-slate-300">
                    <p className="text-lg">
                      Dopo l'acquisto, riceverai entro 24 ore un <strong className="text-amber-400">token di trasferimento</strong> (chiamato anche codice EPP o Auth-code) all'indirizzo email indicato durante il pagamento. Con questo codice puoi facilmente trasferire il dominio al tuo registrar o provider di hosting.
                    </p>
                    
                    <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                      <h3 className="text-lg font-semibold text-white mb-4">Istruzioni passo passo:</h3>
                      <ol className="space-y-4">
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">1</span>
                          <div>
                            <strong className="text-white">Ricevi il token di trasferimento</strong>
                            <p className="text-slate-400 mt-1">Dopo il pagamento riceverai entro 24 ore il codice di autorizzazione unico via email.</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">2</span>
                          <div>
                            <strong className="text-white">Avvia il trasferimento presso il tuo registrar</strong>
                            <p className="text-slate-400 mt-1">Accedi al tuo provider di hosting o registrar preferito e scegli "Trasferisci dominio".</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">3</span>
                          <div>
                            <strong className="text-white">Inserisci il nome del dominio e il codice di autorizzazione</strong>
                            <p className="text-slate-400 mt-1">Compila il nome del dominio e il codice EPP/Auth che hai ricevuto da noi.</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">4</span>
                          <div>
                            <strong className="text-white">Conferma il trasferimento</strong>
                            <p className="text-slate-400 mt-1">Segui i passaggi del tuo nuovo registrar per completare il trasferimento. Di solito richiede 5-7 giorni.</p>
                          </div>
                        </li>
                      </ol>
                    </div>
                    
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                      <p className="text-amber-300 text-sm">
                        <strong>Nota:</strong> Se hai problemi con il trasferimento o non ricevi il codice entro 24 ore, contattaci tramite il modulo di contatto o invia un'email a support@iaee.eu.
                      </p>
                    </div>

                    {/* NordVPN Recommendation Section */}
                    <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-4 mt-4">
                      <div className="text-center">
                        <h4 className="font-bold text-white text-lg mb-2">🔒 Proteggi la Tua Privacy con NordVPN</h4>
                        <p className="text-white/90 text-sm mb-3">
                          Cos'è una VPN? Una <a href="https://www.anrdoezrs.net/click-100643838-13345017" target="_blank" rel="nofollow noopener noreferrer" className="underline text-yellow-300 hover:text-yellow-200">Rete Privata Virtuale (VPN)</a> crittografa la tua connessione internet e nasconde il tuo indirizzo IP, proteggendo i tuoi dati personali da hacker, tracker e sorveglianza.
                        </p>
                        <p className="text-white/80 text-xs mb-4">
                          Per i proprietari di domini premium, proteggere la propria identità online è fondamentale. NordVPN ti permette di navigare in modo anonimo, accedere a contenuti globali e proteggere le tue transazioni commerciali.
                        </p>
                        <a 
                          href="https://www.anrdoezrs.net/click-100643838-13345017" 
                          target="_blank" 
                          rel="nofollow noopener noreferrer"
                          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-6 rounded-full transition-colors text-sm"
                        >
                          Ottieni NordVPN Ora →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-full shadow-lg shadow-amber-500/25 transition-all hover:scale-110 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* Legal Links */}
        <LegalLinksPremiumDomainsIT />
        
        {/* Footer */}
        <FooterPremiumDomainsIT />
      </div>
    </>
  );
};

export default PremiumDomainsIT;
