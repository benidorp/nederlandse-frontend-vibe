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
import LegalLinksPremiumDomainsPT from "@/components/premium-domains/LegalLinksPremiumDomainsPT";
import FooterPremiumDomainsPT from "@/components/premium-domains/FooterPremiumDomainsPT";
import LanguageSwitcher from "@/components/premium-domains/LanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import stripeLogo from "@/assets/stripe-logo.svg";
import { validateContactForm, buildSafeMailtoUrl } from "@/lib/formValidation";

// Premium domain data - exact same as Dutch version
const premiumDomains = [
  // DA 38
  {
    name: "escp-eap.eu",
    description: "Domínio premium de escola de negócios com backlinks da Wikipedia, Cornell, Spiegel e Le Monde.",
    mozScore: 38,
    pageAuthority: 28,
    linkingDomains: 292,
    inboundLinks: "4.6K+",
    followedLinks: "4.2K+",
    category: "Educação",
    price: "€1495",
    backlinks: "4.6K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "lemonde.fr (DA 93)", "cornell.edu (DA 92)", "spiegel.de (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/6oUeVdepVg18dXf9OO9Zm04"
  },
  // DA 37
  {
    name: "grandparkhotel.at",
    description: "Domínio premium de hotel austríaco com backlinks do The Guardian, Telegraph, Daily Mail, Irish Times e Der Standard.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 198,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Hospitalidade",
    price: "€1750",
    backlinks: "1.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dailymail.co.uk (DA 94)", "irishtimes.com (DA 91)", "derstandard.at (DA 82)"],
    stripePaymentLink: "https://buy.stripe.com/8x2dR9epV9CK5qJaSS9Zm0i"
  },
  {
    name: "icesculpture.be",
    description: "Domínio belga de arte/eventos com backlinks da Europa.eu, The Guardian, Telegraph, DW e Boston.com.",
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
    description: "Domínio EU curto e memorável com backlinks do YouTube, Le Monde, MDPI, Corriere e Wired Italia.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 166,
    inboundLinks: "3K+",
    followedLinks: "2.9K+",
    category: "Geral",
    price: "€1950",
    stripePaymentLink: "https://buy.stripe.com/bJe7sL2HdcOWbP7bWW9Zm0g",
    backlinks: "3K+",
    topBacklinks: ["youtube.com (DA 100)", "lemonde.fr (DA 93)", "mdpi.com (DA 92)", "corriere.it (DA 92)", "wired.it (DA 90)"]
  },
  // DA 36
  {
    name: "antigonetickets.be",
    description: "Domínio belga de bilheteria com backlinks do Nieuwsblad, De Standaard e GVA.",
    mozScore: 36,
    pageAuthority: 23,
    linkingDomains: 120,
    inboundLinks: "6.6K+",
    followedLinks: "6.6K+",
    category: "Entretenimento",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "6.6K+",
    topBacklinks: ["standaard.be (DA 81)", "nieuwsblad.be (DA 79)", "gva.be (DA 73)"]
  },
  {
    name: "beauxartsliege.be",
    description: "Domínio de arte com backlinks da Wikipedia, CNN, Behance e RTBF.",
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
    description: "Domínio musical com backlinks da BBC, The Guardian, NME e Pitchfork.",
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
    description: "Domínio EU-Ásia com backlinks da Wikipedia, NBC News, Cambridge e Reddit.",
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
    description: "Domínio premium espacial com backlinks da Europa.eu, NASA.gov, IEEE.org e Wikipedia.",
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
    description: "Domínio de ciclismo com backlinks da Globo, Harper's Bazaar, Vogue e Grazia.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 118,
    inboundLinks: "232+",
    followedLinks: "173+",
    category: "Desporto",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "232+",
    topBacklinks: ["globo.com (DA 93)", "vogue.com (DA 92)", "harpersbazaar.com (DA 89)", "grazia.it (DA 73)"]
  },
  {
    name: "muenchner-kirchennachrichten.de",
    description: "Domínio alemão de notícias/religioso com backlinks da Wikipedia (EN, DE, ZH, NL), Spiegel e La Croix.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 281,
    inboundLinks: "3.3K+",
    followedLinks: "1.8K+",
    category: "Notícias",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.3K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "de.wikipedia.org (DA 94)", "fandom.com (DA 94)", "spiegel.de (DA 93)", "la-croix.com (DA 88)"]
  },
  // DA 33
  {
    name: "etongmbh.de",
    description: "Domínio empresarial alemão com forte autoridade de negócios e backlinks da Naver, Yumpu, Heise, Computerbase e Motor-Talk.",
    mozScore: 33,
    pageAuthority: 27,
    linkingDomains: 321,
    inboundLinks: "3.9K+",
    followedLinks: "1.6K+",
    category: "Negócios",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "3.9K+",
    topBacklinks: ["naver.com (DA 93)", "yumpu.com (DA 91)", "heise.de (DA 91)", "computerbase.de (DA 84)", "motor-talk.de (DA 73)"]
  },
  {
    name: "europe-en-midipyrenees.eu",
    description: "Domínio regional francês/europeu com backlinks do Scoop.it, France Info, La Tribune e governo francês.",
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
    description: "Domínio belga curto e poderoso com backlinks da Wikipedia, Variety, RTBF e Courrier International.",
    mozScore: 33,
    pageAuthority: 33,
    linkingDomains: 228,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Geral",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "1.7K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "variety.com (DA 93)", "constantcontact.com (DA 90)", "rtbf.be (DA 89)", "courrierinternational.com (DA 80)"]
  },
  // DA 32
  {
    name: "improve-research.eu",
    description: "Domínio de pesquisa com backlinks da Europa.eu, Cambridge, Springer e LSE.",
    mozScore: 32,
    pageAuthority: 30,
    linkingDomains: 106,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "Pesquisa",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.7K+",
    topBacklinks: ["europa.eu (DA 94)", "cam.ac.uk (DA 93)", "springer.com (DA 92)", "lse.ac.uk (DA 90)"]
  },
  {
    name: "co-da.eu",
    description: "Domínio EU curto e poderoso com backlinks da Globo, HuffPost, CBS News, Gizmodo e Fast Company.",
    mozScore: 32,
    pageAuthority: 22,
    linkingDomains: 96,
    inboundLinks: "276+",
    followedLinks: "260+",
    category: "Colaboração",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "276+",
    topBacklinks: ["globo.com (DA 95)", "huffpost.com (DA 94)", "cbsnews.com (DA 93)", "gizmodo.com (DA 93)", "fastcompany.com (DA 92)"]
  },
  {
    name: "emg-nice2015.fr",
    description: "Domínio francês com backlinks da Wikipedia, GoFundMe, Nice Matin e Triathlon.org.",
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
    description: "Domínio educacional EU com backlinks da Wikipedia, Penn State, Wisconsin e Conselho da Europa.",
    mozScore: 32,
    pageAuthority: 38,
    linkingDomains: 372,
    inboundLinks: "2.5K+",
    followedLinks: "2.3K+",
    category: "Educação",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.5K+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "psu.edu (DA 92)", "scoop.it (DA 92)", "wisc.edu (DA 91)", "coe.int (DA 89)"]
  },
  {
    name: "citiexpress.eu",
    description: "Domínio de transporte e logística EU com backlinks do TripAdvisor, SkyscraperCity e Rick Steves.",
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
    description: "Domínio de projeto europeu com backlinks da Wikipedia, Cambridge, UNESCO e Reddit.",
    mozScore: 31,
    pageAuthority: 27,
    linkingDomains: 162,
    inboundLinks: "379+",
    followedLinks: "266+",
    category: "Projetos",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "379+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cambridge.org (DA 93)", "unesco.org (DA 93)", "reddit.com (DA 92)", "mdpi.com (DA 92)"]
  },
  {
    name: "ramcip-project.eu",
    description: "Domínio de projeto de pesquisa europeu com backlinks da Europa.eu, GitHub, NY Times e Springer.",
    mozScore: 31,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "333+",
    followedLinks: "293+",
    category: "Pesquisa",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "333+",
    topBacklinks: ["europa.eu (DA 97)", "github.com (DA 96)", "nytimes.com (DA 95)", "elpais.com (DA 94)", "springer.com (DA 93)"]
  },
  {
    name: "evader-project.eu",
    description: "Domínio de projeto EU com backlinks da Europa.eu, Spiegel, Europa Press e Heise.",
    mozScore: 31,
    pageAuthority: 30,
    linkingDomains: 91,
    inboundLinks: "128+",
    followedLinks: "109+",
    category: "Projetos",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "128+",
    topBacklinks: ["europa.eu (DA 97)", "spiegel.de (DA 93)", "europapress.es (DA 91)", "heise.de (DA 91)", "autoblog.com (DA 90)"]
  },
  {
    name: "toastit-live.be",
    description: "Domínio belga de entretenimento/media com backlinks da Wikipedia, KU Leuven, Nieuwsblad e Yle.",
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
    description: "Domínio holandês de rede com backlinks da Microsoft, NOS, Neowin, Tweakers e XS4All.",
    mozScore: 31,
    pageAuthority: 25,
    linkingDomains: 152,
    inboundLinks: "1.7K+",
    followedLinks: "1.6K+",
    category: "Rede",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "1.7K+",
    topBacklinks: ["microsoft.com (DA 99)", "nos.nl (DA 90)", "neowin.net (DA 88)", "techpowerup.com (DA 83)", "tweakers.net (DA 79)"]
  },
  {
    name: "leading-the-digital-decade.eu",
    description: "Domínio de transformação digital EU com backlinks da Europa.eu, Politico EU e LSE.",
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
    description: "Domínio EU de gestão de terras/sustentabilidade com backlinks da Europa.eu, ABC.es, Gencat.cat e universidades espanholas.",
    mozScore: 31,
    pageAuthority: 33,
    linkingDomains: 200,
    inboundLinks: "7.5K+",
    followedLinks: "7.4K+",
    category: "Sustentabilidade",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "7.5K+",
    topBacklinks: ["europa.eu (DA 97)", "abc.es (DA 93)", "gencat.cat (DA 89)", "ask.com (DA 88)", "ecoticias.com (DA 74)"]
  },
  {
    name: "imess.eu",
    description: "Domínio EU com backlinks de Bit.ly, Wikipedia (JA), UCL e Universidade de Helsínquia.",
    mozScore: 31,
    pageAuthority: 32,
    linkingDomains: 174,
    inboundLinks: "748+",
    followedLinks: "675+",
    category: "Tecnologia",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "748+",
    topBacklinks: ["bit.ly (DA 94)", "ja.wikipedia.org (DA 93)", "ucl.ac.uk (DA 91)", "ku.dk (DA 87)", "helsinki.fi (DA 85)"]
  },
  // DA 30
  {
    name: "ilovecosmetics.eu",
    description: "Domínio de beleza e cosméticos com backlinks da Alza, Glamour Magazine e CB Insights.",
    mozScore: 30,
    pageAuthority: 36,
    linkingDomains: 472,
    inboundLinks: "1.6K+",
    followedLinks: "1.3K+",
    category: "Beleza",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "1.6K+",
    topBacklinks: ["alza.cz (DA 92)", "glamourmagazine.co.uk (DA 82)", "polyvore.com (DA 79)", "fave.co (DA 78)", "cbinsights.com (DA 77)"]
  },
  {
    name: "rtmpilecki.eu",
    description: "Domínio EU histórico/cultural com backlinks da Wikipedia (ES, ID, ZH), governo polaco e Thread Reader.",
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
    description: "Domínio EU de energia e infraestrutura com backlinks da Wikipedia, CNET, IEEE e The Conversation.",
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
    description: "Domínio EU de HVAC e tecnologia climática com backlinks da Ow.ly, EurActiv e Danfoss.",
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
    description: "Domínio EU de catering/eventos com backlinks do Google.sk, Wikiwand, RA.co e Pravda.sk.",
    mozScore: 30,
    pageAuthority: 35,
    linkingDomains: 328,
    inboundLinks: "2.2K+",
    followedLinks: "2.1K+",
    category: "Alimentação",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "2.2K+",
    topBacklinks: ["google.sk (DA 85)", "wikiwand.com (DA 85)", "ra.co (DA 85)", "pravda.sk (DA 79)", "dennikn.sk (DA 76)"]
  },
  {
    name: "dowse.eu",
    description: "Domínio EU com backlinks de GitHub, Medium, The Guardian e Vercel.",
    mozScore: 30,
    pageAuthority: 33,
    linkingDomains: 184,
    inboundLinks: "853+",
    followedLinks: "462+",
    category: "Tecnologia",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "853+",
    topBacklinks: ["github.com (DA 96)", "medium.com (DA 95)", "theguardian.com (DA 94)", "vercel.app (DA 92)", "ycombinator.com (DA 90)"]
  },
  // DA 29
  {
    name: "evacuate.eu",
    description: "Domínio EU de segurança e planeamento de emergência com backlinks da Europa.eu, El País, Springer e KU Leuven.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 99,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Segurança",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.7K+",
    topBacklinks: ["europa.eu (DA 97)", "elpais.com (DA 94)", "springer.com (DA 93)", "mdpi.com (DA 92)", "xataka.com (DA 90)"]
  },
  {
    name: "greenweek2010.eu",
    description: "Domínio de sustentabilidade com backlinks da Europa.eu, EurekAlert, RAI e AAAS.",
    mozScore: 29,
    pageAuthority: 28,
    linkingDomains: 109,
    inboundLinks: "259+",
    followedLinks: "249+",
    category: "Sustentabilidade",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "259+",
    topBacklinks: ["europa.eu (DA 97)", "eurekalert.org (DA 91)", "rai.it (DA 81)", "au.dk (DA 77)", "aaas.org (DA 76)"]
  },
  {
    name: "bryn-somersethouse.co.uk",
    description: "Domínio britânico de imobiliário/hospitalidade com backlinks da Forbes, The Guardian, Evening Standard e Time Out.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 96,
    inboundLinks: "167+",
    followedLinks: "132+",
    category: "Imobiliário",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "167+",
    topBacklinks: ["forbes.com (DA 94)", "theguardian.com (DA 94)", "standard.co.uk (DA 93)", "timeout.com (DA 92)", "thetimes.com (DA 92)"]
  },
  {
    name: "euforistudy.eu",
    description: "Domínio EU de estudo educacional com backlinks do The Guardian, Trinity College Dublin e VU Amsterdam.",
    mozScore: 29,
    pageAuthority: 27,
    linkingDomains: 72,
    inboundLinks: "215+",
    followedLinks: "170+",
    category: "Educação",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "215+",
    topBacklinks: ["theguardian.com (DA 94)", "ask.com (DA 88)", "tcd.ie (DA 86)", "vu.nl (DA 76)", "muni.cz (DA 74)"]
  },
  {
    name: "beatassist.eu",
    description: "Domínio de produção musical com backlinks do Google Sites, Scoop.it, Envato e MusicRadar.",
    mozScore: 29,
    pageAuthority: 29,
    linkingDomains: 164,
    inboundLinks: "1.5K+",
    followedLinks: "1.2K+",
    category: "Música/Áudio",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.5K+",
    topBacklinks: ["sites.google.com (DA 96)", "scoop.it (DA 92)", "envato.com (DA 91)", "informer.com (DA 90)", "codecanyon.net (DA 83)"]
  },
  {
    name: "energaware.eu",
    description: "Domínio de projeto EU de consciência energética com backlinks da Europa.eu, UOL, El País e Le Figaro.",
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
    description: "Domínio de telecomunicações/media com backlinks da Medium, IBM, Telefónica e universidades.",
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
    description: "Domínio EU regional de inovação financeira com backlinks da Crunchbase, Splashthat e Climate-KIC.",
    mozScore: 29,
    pageAuthority: 20,
    linkingDomains: 41,
    inboundLinks: "156+",
    followedLinks: "143+",
    category: "Finanças",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "156+",
    topBacklinks: ["goo.gl (DA 95)", "crunchbase.com (DA 91)", "splashthat.com (DA 86)", "emprendedores.es (DA 66)", "climate-kic.org (DA 64)"]
  },
  {
    name: "worth-project.eu",
    description: "Domínio de projeto de design e inovação com backlinks da Europa.eu, Euronews, AngelList e UAL Arts.",
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
    description: "Domínio EU de mobilidade/estacionamento com backlinks da Europa.eu, Medium, Zeit.de e Thread Reader.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 107,
    inboundLinks: "320+",
    followedLinks: "292+",
    category: "Mobilidade",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "320+",
    topBacklinks: ["europa.eu (DA 97)", "medium.com (DA 95)", "zeit.de (DA 91)", "threadreaderapp.com (DA 78)", "eur.nl (DA 68)"]
  },
  // DA 28
  {
    name: "scpenetwork.eu",
    description: "Domínio rede EU com backlinks de Springer, The Conversation, MDPI e Player.fm.",
    mozScore: 28,
    pageAuthority: 30,
    linkingDomains: 131,
    inboundLinks: "280+",
    followedLinks: "186+",
    category: "Investigação",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "280+",
    topBacklinks: ["springer.com (DA 93)", "theconversation.com (DA 92)", "mdpi.com (DA 92)", "player.fm (DA 88)", "ncl.ac.uk (DA 85)"]
  },
  {
    name: "papilios.eu",
    description: "Domínio EU com altos linking domains e backlinks de Zoznam.sk, Centrum.cz e Penize.cz.",
    mozScore: 28,
    pageAuthority: 32,
    linkingDomains: 833,
    inboundLinks: "20.2K+",
    followedLinks: "20.1K+",
    category: "Geral",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "20.2K+",
    topBacklinks: ["zoznam.sk (DA 90)", "centrum.cz (DA 72)", "penize.cz (DA 62)", "n-1publications.org (DA 55)", "vinosol.ch (DA 55)"]
  },
  {
    name: "bovisadrivein.it",
    description: "Domínio italiano de entretenimento com backlinks da Behance, Giphy, Corriere e MyMovies.",
    mozScore: 28,
    pageAuthority: 22,
    linkingDomains: 52,
    inboundLinks: "78+",
    followedLinks: "60+",
    category: "Entretenimento",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "78+",
    topBacklinks: ["behance.net (DA 93)", "giphy.com (DA 92)", "corriere.it (DA 92)", "ilgiornale.it (DA 85)", "elledecor.com (DA 81)"]
  },
  {
    name: "resurbis.eu",
    description: "Domínio EU de sustentabilidade com backlinks da Europa.eu, MDPI, EurekAlert e Wired.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 87,
    inboundLinks: "185+",
    followedLinks: "153+",
    category: "Sustentabilidade",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "185+",
    topBacklinks: ["europa.eu (DA 97)", "mdpi.com (DA 92)", "eurekalert.org (DA 91)", "wired.it (DA 90)", "ub.edu (DA 86)"]
  },
  {
    name: "eu-sabana.eu",
    description: "Domínio de projeto EU de agricultura sustentável com backlinks da Europa.eu, The Conversation e Frontiers.",
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
    description: "Domínio de língua/cultura grega com fortes backlinks da Wikipedia, UCI.edu e universidades.",
    mozScore: 28,
    pageAuthority: 31,
    linkingDomains: 164,
    inboundLinks: "4.1K+",
    followedLinks: "4K+",
    category: "Língua/Cultura",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "4.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "uci.edu (DA 91)"]
  },
  {
    name: "bringaexpo.eu",
    description: "Domínio húngaro de ciclismo/expo com fortes backlinks da Origo.hu, Velvet.hu, Network.hu e outros sites de media húngaros.",
    mozScore: 27,
    pageAuthority: 25,
    linkingDomains: 79,
    inboundLinks: "551+",
    followedLinks: "513+",
    category: "Desporto/Eventos",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "551+",
    topBacklinks: ["origo.hu (DA 72)", "velvet.hu (DA 60)", "network.hu (DA 57)", "femcafe.hu (DA 56)", "hwsw.hu (DA 56)"]
  },
  {
    name: "movecare-project.eu",
    description: "Domínio de projeto EU de cuidados e mobilidade com backlinks da Springer, MDPI, Il Fatto Quotidiano e universidades italianas.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "117+",
    followedLinks: "97+",
    category: "Saúde",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "117+",
    topBacklinks: ["springer.com (DA 93)", "mdpi.com (DA 92)", "ilfattoquotidiano.it (DA 90)", "unimi.it (DA 72)", "polimi.it (DA 71)"]
  },
  {
    name: "davidhughesillustration.co.uk",
    description: "Domínio criativo UK com backlinks do The Guardian, Creative Bloq, ORF.at e Publishers Weekly.",
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
    description: "Domínio de centro belga com backlinks da Wikipedia (FR, IT, NL), Le Figaro e Wiktionary.",
    mozScore: 28,
    pageAuthority: 28,
    linkingDomains: 182,
    inboundLinks: "9.6K+",
    followedLinks: "9.3K+",
    category: "Geral",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "9.6K+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "it.wikipedia.org (DA 93)", "wiktionary.org (DA 93)", "lefigaro.fr (DA 93)", "nl.wikipedia.org (DA 91)"]
  },
  {
    name: "epc2018.be",
    description: "Domínio belga de eventos com backlinks do TinyURL, UB.edu, Universidade de Lund e Confex.",
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
    description: "Domínio de projeto de educação/juventude com backlinks da Europa.eu, Campaign Archive, Observador e OpenEdition.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 64,
    inboundLinks: "2.9K+",
    followedLinks: "2.8K+",
    category: "Educação",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "2.9K+",
    topBacklinks: ["europa.eu (DA 97)", "campaign-archive.com (DA 84)", "observador.pt (DA 84)", "openedition.org (DA 78)", "wort.lu (DA 75)"]
  },
  // DA 27
  {
    name: "spanvis.nl",
    description: "Domínio holandês com backlinks da Wikipedia (EN, RU, NL), Wikiwand e XS4All.",
    mozScore: 27,
    pageAuthority: 29,
    linkingDomains: 241,
    inboundLinks: "2.1K+",
    followedLinks: "1.9K+",
    category: "Geral",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "ru.wikipedia.org (DA 94)", "nl.wikipedia.org (DA 91)", "wikiwand.com (DA 85)", "xs4all.nl (DA 79)"]
  },
  {
    name: "seatglobal.eu",
    description: "Domínio internacional de mobilidade/transporte com backlinks da Europa.eu, Springer, PLOS e Phys.org.",
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
    description: "Domínio de projeto EU de arquivo digital com backlinks da Wikipedia, Europa.eu, W3.org, SlideShare e Oxford.",
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
    description: "Domínio EU de cooperação da região báltica com backlinks da Europa.eu, Wikipedia DE, Ask.com e Rzeczpospolita.",
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
    description: "Domínio de projeto EU de transição e mudança com backlinks da Europa.eu, Eventbrite, Storify e Universidade de Sheffield.",
    mozScore: 27,
    pageAuthority: 28,
    linkingDomains: 75,
    inboundLinks: "207+",
    followedLinks: "179+",
    category: "Projetos",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "207+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "eventbrite.com (DA 93)", "storify.com (DA 90)", "shef.ac.uk (DA 79)"]
  },
  {
    name: "expo-2050.be",
    description: "Domínio belga de expo/exposição com backlinks do The Conversation, Radio France, RTBF e La Libre.",
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
    description: "Domínio EU com backlinks da Europa.eu, France Info, CNRS e universidades francesas.",
    mozScore: 27,
    pageAuthority: 30,
    linkingDomains: 130,
    inboundLinks: "3.6K+",
    followedLinks: "3.5K+",
    category: "Geral",
    price: "€450",
    stripePaymentLink: "https://buy.stripe.com/fZu14n6Xt7uCf1j9OO9Zm0j",
    backlinks: "3.6K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "cnrs.fr (DA 90)", "psl.eu (DA 78)", "education.fr (DA 77)"]
  },
  {
    name: "eustartupvillageforum.eu",
    description: "Domínio EU de fórum de startups e inovação com backlinks da Europa.eu, Pages.dev, Campaign Archive e Silicon Republic.",
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
    description: "Domínio de projeto EU de ambiente e natureza com backlinks da Europa.eu, FranceInfo, Campaign Archive e Midi Libre.",
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
    description: "Domínio EU de pacto e capacitação com backlinks da Europa.eu, BT, MyNewsDesk e WWF Panda.",
    mozScore: 26,
    pageAuthority: 24,
    linkingDomains: 85,
    inboundLinks: "2.6K+",
    followedLinks: "2.5K+",
    category: "Colaboração",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.6K+",
    topBacklinks: ["europa.eu (DA 97)", "bt.com (DA 91)", "mynewsdesk.com (DA 89)", "campaign-archive.com (DA 84)", "panda.org (DA 77)"]
  },
  {
    name: "wetenschapbegintmetverwondering.nl",
    description: "Domínio holandês de comunicação científica com backlinks da RUG, NU.nl e Agenda Nacional de Ciência.",
    mozScore: 27,
    pageAuthority: 24,
    linkingDomains: 52,
    inboundLinks: "97+",
    followedLinks: "81+",
    category: "Ciência",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "97+",
    topBacklinks: ["rug.nl (DA 84)", "nu.nl (DA 91)", "wetenschapsagenda.nl (DA 65)"]
  },
  {
    name: "khresmoi.eu",
    description: "Domínio de projeto EU de pesquisa médica com backlinks da MDPI, Springer, BioMedCentral e Universidade Charles.",
    mozScore: 27,
    pageAuthority: 32,
    linkingDomains: 184,
    inboundLinks: "31.7K+",
    followedLinks: "31.5K+",
    category: "Saúde",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "31.7K+",
    topBacklinks: ["mdpi.com (DA 92)", "springer.com (DA 93)", "biomedcentral.com (DA 91)", "cuni.cz (DA 85)"]
  },
  {
    name: "sialon.eu",
    description: "Domínio EU de pesquisa em saúde com backlinks da BBC, Europa.eu e The Conversation.",
    mozScore: 24,
    pageAuthority: 25,
    linkingDomains: 66,
    inboundLinks: "145+",
    followedLinks: "125+",
    category: "Saúde",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "145+",
    topBacklinks: ["bbc.co.uk (DA 95)", "europa.eu (DA 97)", "theconversation.com (DA 92)", "bbc.com (DA 94)"]
  },
  {
    name: "spaceinfoday.eu",
    description: "Domínio EU espacial com backlinks da Wikipedia, Europa.eu, ESA, UCM e ORF.",
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
    description: "Domínio educacional EU Erasmus+ com backlinks do Pages.dev, Gameforge, GitBook e universidades.",
    mozScore: 26,
    pageAuthority: 34,
    linkingDomains: 452,
    inboundLinks: "6.2K+",
    followedLinks: "3.7K+",
    category: "Educação",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "6.2K+",
    topBacklinks: ["sakura.ne.jp (DA 93)", "pages.dev (DA 91)", "biglobe.ne.jp (DA 91)", "gameforge.com (DA 90)", "gitbook.io (DA 85)"]
  },
  {
    name: "dunyaendesiedefilm.nl",
    description: "Domínio holandês de filme/media com backlinks da Wikipedia (EN, JA), IPFS, FilmWeb e Cinemagia.",
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
    description: "Domínio britânico de rádio/media com backlinks da Wikipedia, BBC, Bit.ly, Foursquare e DigitalSpy.",
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
    description: "Domínio britânico com backlinks da Wikipedia (EN, FR, JA, PL), Fandom e DigitalSpy.",
    mozScore: 26,
    pageAuthority: 29,
    linkingDomains: 180,
    inboundLinks: "662+",
    followedLinks: "460+",
    category: "Negócios",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "662+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "fr.wikipedia.org (DA 95)", "fandom.com (DA 94)", "ja.wikipedia.org (DA 93)", "pl.wikipedia.org (DA 93)"]
  },
  {
    name: "deparisnet.be",
    description: "Domínio de rede belga com backlinks da Europa.eu, Wikipedia (ES, FR), Yumpu e Google.be.",
    mozScore: 26,
    pageAuthority: 28,
    linkingDomains: 135,
    inboundLinks: "710+",
    followedLinks: "445+",
    category: "Rede",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "710+",
    topBacklinks: ["europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "jimdofree.com (DA 95)", "yumpu.com (DA 91)"]
  },
  // DA 25
  {
    name: "gastrosafezone.eu",
    description: "Domínio de design e segurança hoteleira com backlinks da CNN, The Conversation, Pagina12 e Elle Decor.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 47,
    inboundLinks: "66+",
    followedLinks: "58+",
    category: "Design/Hotelaria",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "66+",
    topBacklinks: ["cnn.com (DA 94)", "theconversation.com (DA 92)", "realty.rbc.ru (DA 88)", "pagina12.com.ar (DA 82)", "elledecor.com (DA 80)"]
  },
  {
    name: "hotelgiotto.eu",
    description: "Domínio de hospitalidade com backlinks do Pages.dev, Wikitravel, Groupon UK e Travellerspoint.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 78,
    inboundLinks: "284+",
    followedLinks: "198+",
    category: "Hospitalidade",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "284+",
    topBacklinks: ["pages.dev (DA 91)", "wikitravel.org (DA 79)", "groupon.co.uk (DA 76)", "groupon.fr (DA 63)", "travellerspoint.com (DA 60)"]
  },
  {
    name: "recharge-green.eu",
    description: "Domínio EU de energia verde e carregamento com backlinks do Google Groups, MDPI, BioMedCentral e FAO.",
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
    description: "Domínio de projeto EU com backlinks da Europa.eu, El Diario, Stuttgarter Zeitung e universidades.",
    mozScore: 24,
    pageAuthority: 24,
    linkingDomains: 73,
    inboundLinks: "194+",
    followedLinks: "133+",
    category: "Projetos",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "194+",
    topBacklinks: ["europa.eu (DA 97)", "eldiario.es (DA 91)", "stuttgarter-zeitung.de (DA 81)", "techxplore.com (DA 79)", "uah.es (DA 70)"]
  },
  {
    name: "aaliance.eu",
    description: "Domínio EU de saúde/cuidados a idosos com backlinks da Europa.eu, Cambridge, Springer, Heise e EurActiv.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 69,
    inboundLinks: "227+",
    followedLinks: "163+",
    category: "Saúde",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "227+",
    topBacklinks: ["europa.eu (DA 97)", "cambridge.org (DA 93)", "springer.com (DA 93)", "heise.de (DA 91)", "euractiv.com (DA 84)"]
  },
  {
    name: "unamec.be",
    description: "Domínio belga médico/saúde com backlinks da OUP, Yumpu, KU Leuven e UGent.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 93,
    inboundLinks: "188+",
    followedLinks: "150+",
    category: "Saúde",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "188+",
    topBacklinks: ["oup.com (DA 93)", "yumpu.com (DA 91)", "kuleuven.be (DA 83)", "ugent.be (DA 76)", "justlanded.com (DA 76)"]
  },
  {
    name: "josephines.be",
    description: "Domínio belga de lifestyle/hospitalidade com backlinks do Mixcloud, De Standaard e Elle.be.",
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
    description: "Domínio histórico de comemoração da WWI com backlinks da Wikipedia (FR, DE), StackExchange, FranceInfo e INRIA.",
    mozScore: 25,
    pageAuthority: 27,
    linkingDomains: 122,
    inboundLinks: "443+",
    followedLinks: "318+",
    category: "História",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "443+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "stackexchange.com (DA 91)", "franceinfo.fr (DA 91)", "inria.fr (DA 83)"]
  },
  {
    name: "serletproject.eu",
    description: "Domínio de projeto EU com backlinks da Apple.com, Bit.ly, RTL.fr e Wikipedia Grego.",
    mozScore: 25,
    pageAuthority: 30,
    linkingDomains: 491,
    inboundLinks: "2K+",
    followedLinks: "1.9K+",
    category: "Inovação",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "2K+",
    topBacklinks: ["apple.com (DA 99)", "bit.ly (DA 94)", "home.pl (DA 93)", "cocolog-nifty.com (DA 90)", "rtl.fr (DA 89)"]
  },
  {
    name: "landmark-project.eu",
    description: "Domínio de projeto EU com backlinks da Europa.eu, Wikipedia DE, Cambridge e Yumpu.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 161,
    inboundLinks: "1.1K+",
    followedLinks: "954+",
    category: "Projetos",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "1.1K+",
    topBacklinks: ["europa.eu (DA 97)", "goo.gl (DA 95)", "de.wikipedia.org (DA 94)", "cambridge.org (DA 93)", "yumpu.com (DA 91)"]
  },
  {
    name: "tandemtech.be",
    description: "Domínio tech belga com backlinks da Medium, TinyURL, Bit.ly, Tweakers e Knack.",
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
    description: "Domínio holandês de media com backlinks do TinyURL, Ello, XS4ALL, Emerce e VPRO.",
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
    description: "Domínio EU com backlinks do Pinterest, ANSA, RUG Groningen e universidades italianas.",
    mozScore: 25,
    pageAuthority: 28,
    linkingDomains: 192,
    inboundLinks: "119.7K+",
    followedLinks: "119.6K+",
    category: "Geral",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "119.7K+",
    topBacklinks: ["pinterest.com (DA 94)", "ansa.it (DA 91)", "rug.nl (DA 81)", "cnr.it (DA 75)", "unito.it (DA 70)"]
  },
  // DA 25
  {
    name: "xcycle-h2020.eu",
    description: "Domínio EU H2020 de mobilidade com backlinks da Europa.eu, Springer, MDPI e Frontiers.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 145,
    inboundLinks: "275+",
    followedLinks: "202+",
    category: "Mobilidade",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "275+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "mdpi.com (DA 92)", "frontiersin.org (DA 92)", "euractiv.com (DA 84)"]
  },
  {
    name: "heinekenthecity.nl",
    description: "Domínio holandês urbano/lifestyle com backlinks da Dezeen, Symbaloo, Fodors e VPRO.",
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
    description: "Domínio EU de fotografia com backlinks do E-Monsite, JournalDuNet, CNRS e Wikipedia SV.",
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
    description: "Domínio EU com backlinks da Wikipedia (EN, ES, PT, FR), Europa.eu e MDPI.",
    mozScore: 24,
    pageAuthority: 33,
    linkingDomains: 246,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Geral",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "1.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "pt.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)"]
  },
  {
    name: "maribe.eu",
    description: "Domínio EU marítimo com backlinks da Europa.eu, The Conversation, MDPI e Universidade de Bristol.",
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
    description: "Domínio governamental holandês com backlinks da NOS, Universidade de Leiden e Segunda Câmara.",
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
    description: "Domínio de projeto EU com backlinks da Wikipedia (EN, FR, DE), Europa.eu, Yumpu e WHOI.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 156,
    inboundLinks: "18.4K+",
    followedLinks: "18.3K+",
    category: "Projetos",
    price: "€125",
    backlinks: "18.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "yumpu.com (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eccomascfd2006.nl",
    description: "Domínio técnico holandês com backlinks da TU Delft, Southampton, Liverpool e NTNU.",
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
    description: "Domínio nacional belga com backlinks da Wikipedia FR, BFMTV, Heise, NU.nl e Europe1.",
    mozScore: 23,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "113+",
    followedLinks: "87+",
    category: "Geral",
    price: "€125",
    backlinks: "113+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "bfmtv.com (DA 92)", "heise.de (DA 91)", "nu.nl (DA 91)", "europe1.fr (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "lifemanev.eu",
    description: "Domínio de projeto EU sobre agricultura sustentável com backlinks da MDPI, ITACYL e CSIC.",
    mozScore: 23,
    pageAuthority: 24,
    linkingDomains: 40,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "Sustentabilidade",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["mdpi.com (DA 92)", "itacyl.es (DA 45)", "cebas.csic.es (DA 42)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  // DA 22
  {
    name: "bruegel2019.be",
    description: "Domínio de património cultural com backlinks do Campaign Archive, Knack.be e Brusselslife.",
    mozScore: 22,
    pageAuthority: 24,
    linkingDomains: 42,
    inboundLinks: "323+",
    followedLinks: "312+",
    category: "Arte/Património",
    price: "€125",
    backlinks: "323+",
    topBacklinks: ["campaign-archive.com (DA 84)", "knack.be (DA 77)", "tntcode.com (DA 61)", "tvl.be (DA 52)", "brusselslife.be (DA 52)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "infoecmi.eu",
    description: "Domínio de informação EU com backlinks da Wikipedia (EN, ES, PT, RU, DE), UCL e ETH Zürich.",
    mozScore: 22,
    pageAuthority: 31,
    linkingDomains: 259,
    inboundLinks: "1.2K+",
    followedLinks: "727+",
    category: "Informação",
    price: "€125",
    backlinks: "1.2K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "pt.wikipedia.org (DA 96)", "ru.wikipedia.org (DA 94)", "ucl.ac.uk (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "romain-roquette.be",
    description: "Domínio pessoal/portfolio belga com backlinks do Airbnb, Foursquare, The Culture Trip e Knack.be.",
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
    description: "Domínio alemão/EU de governo local com backlinks da Wikipedia (EN, ES, FR, RU, NL), Bit.ly e Creative Commons.",
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
    description: "Domínio do fórum de museus europeus com backlinks da Wikipedia (EN, ES, FR, RU, NL), Bit.ly e Creative Commons.",
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
    description: "Domínio de evento ESC com backlinks da ETH Zürich, Azure, Copernicus, CSIC e Monash University.",
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
    name: "eurasiancouncilforeignaffairs.eu",
    description: "Domínio de relações internacionais com backlinks da Wikipedia (EN, ES, FR, ZH), Cambridge e The Diplomat.",
    mozScore: 23,
    pageAuthority: 23,
    linkingDomains: 65,
    inboundLinks: "184+",
    followedLinks: "98+",
    category: "Internacional",
    price: "€125",
    backlinks: "184+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "bit.ly (DA 94)", "cam.ac.uk (DA 92)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "waterpipp.eu",
    description: "Domínio de projeto EU de água e ambiente com backlinks da Europa.eu, Bit.ly, Ask.com e Campaign Archive.",
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
    description: "Domínio galês de cultura/arte com backlinks do The Guardian, Mirror, Eventbrite e Wales Online.",
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
    description: "Domínio holandês de transporte/estação com backlinks da Wikipedia (FR, NL), NS, Nieuws.nl e ProRail.",
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
    description: "Domínio de investigação médica EU-FP7 com backlinks da Europa.eu, Springer, IIT e FGOV.be.",
    mozScore: 21,
    pageAuthority: 24,
    linkingDomains: 60,
    inboundLinks: "130+",
    followedLinks: "109+",
    category: "Investigação",
    price: "€79",
    backlinks: "130+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "iit.edu (DA 75)", "fgov.be (DA 72)", "upc.edu (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "ismagazine.nl",
    description: "Domínio holandês de revista/media com backlinks da UNESCO, WUR e Startpagina.",
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
    description: "Domínio britânico de apostas/gaming com backlinks da OVH, Joomla.org, WSU e CSIC.",
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
    description: "Domínio holandês de desporto/ginástica com backlinks do LiveInternet, Pages.dev, XSRV e Toolforge.",
    mozScore: 21,
    pageAuthority: 29,
    linkingDomains: 246,
    inboundLinks: "7.6K+",
    followedLinks: "7.5K+",
    category: "Desporto",
    price: "€79",
    backlinks: "7.6K+",
    topBacklinks: ["liveinternet.ru (DA 93)", "pages.dev (DA 91)", "xsrv.jp (DA 89)", "toolforge.org (DA 80)", "worldwidetopsite.com (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "nanostarproject.eu",
    description: "Domínio de projeto EU de nanotecnologia com backlinks da Springer, Sapo.pt, Pages.dev e universidades (UPM, UC3M).",
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
    description: "Domínio de projeto de cidade inteligente e mobilidade com backlinks da Europa.eu, Medium, MDPI e Telecom TV.",
    mozScore: 20,
    pageAuthority: 28,
    linkingDomains: 81,
    inboundLinks: "191+",
    followedLinks: "146+",
    category: "Cidade Inteligente",
    price: "€79",
    backlinks: "191+",
    topBacklinks: ["europa.eu (DA 97)", "medium.com (DA 95)", "mdpi.com (DA 92)", "campaign-archive.com (DA 84)", "telecomtv.com (DA 67)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
];

const PremiumDomainsPT = () => {
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
      const firstError = Object.values(errorResult.errors)[0] || "Verifique os seus dados";
      toast({
        title: "Preencha todos os campos obrigatórios corretamente",
        description: firstError,
        variant: "destructive"
      });
      return;
    }

    const { data } = validation;
    
    const subject = `Pedido de Domínio Premium: ${data.domain}`;
    const body = `Nome: ${data.name}\nE-mail: ${data.email}\nDomínio: ${data.domain}\n\nMensagem:\n${data.message || ""}`;
    
    window.location.href = buildSafeMailtoUrl("support@iaee.eu", subject, body);
    
    toast({
      title: "Pedido a ser enviado",
      description: "O seu programa de e-mail será aberto para enviar o pedido."
    });
  };

  const handleDomainInquiry = (domainName: string) => {
    setFormData(prev => ({ ...prev, domain: domainName }));
    scrollToSection("contact");
  };

  return (
    <>
      <Helmet>
        <html lang="pt" />
        <title>Domínios Premium Expirados com Backlinks | Alta Autoridade & Valor SEO</title>
        <meta name="description" content="Comprar domínio expirado com backlinks? Domínios expirados fiáveis com alta autoridade e valor SEO. Comprar domínio premium para rankings mais rápidos no Google. Disponíveis imediatamente." />
        <meta name="keywords" content="comprar domínio expirado, domínios expirados com backlinks, domínio com autoridade, domínios expirados fiáveis, comprar domínio premium, domínio com valor SEO, domínio antigo com links, melhores domínios à venda" />
        <link rel="canonical" href="https://www.iaee.eu/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="IAEE Premium Domains" />
        
        {/* Hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="nl" href="https://www.iaee.eu/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" />
        <link rel="alternate" hrefLang="en" href="https://www.iaee.eu/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" />
        <link rel="alternate" hrefLang="de" href="https://www.iaee.eu/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert" />
        <link rel="alternate" hrefLang="fr" href="https://www.iaee.eu/expireddomainnames/fr/acheter-domaines-premium-haute-autorite-valeur-seo" />
        <link rel="alternate" hrefLang="es" href="https://www.iaee.eu/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo" />
        <link rel="alternate" hrefLang="it" href="https://www.iaee.eu/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo" />
        <link rel="alternate" hrefLang="pt" href="https://www.iaee.eu/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo" />
        <link rel="alternate" hrefLang="pl" href="https://www.iaee.eu/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo" />
        <link rel="alternate" hrefLang="ja" href="https://www.iaee.eu/expireddomainnames/ja/puremiamudomein-kounyuu-seo-kachi" />
        <link rel="alternate" hrefLang="zh" href="https://www.iaee.eu/expireddomainnames/zh/gou-mai-gao-quan-zhong-you-zhi-yu-ming-seo-jia-zhi" />
        <link rel="alternate" hrefLang="ar" href="https://www.iaee.eu/expireddomainnames/ar/shira-asma-nitaqat-mumayaza-sulta-aliya-qima-seo" />
        <link rel="alternate" hrefLang="tr" href="https://www.iaee.eu/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri" />
        <link rel="alternate" hrefLang="hi" href="https://www.iaee.eu/expireddomainnames/hi/premium-domain-kharidein-uchch-authority-seo-mulya" />
        <link rel="alternate" hrefLang="x-default" href="https://www.iaee.eu/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" />
        
        {/* Open Graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Domínios Premium Expirados com Backlinks | Alta Autoridade & Valor SEO" />
        <meta property="og:description" content="Domínios expirados fiáveis com alta autoridade e valor SEO. Disponíveis imediatamente." />
        <meta property="og:url" content="https://www.iaee.eu/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo" />
        <meta property="og:locale" content="pt_PT" />
        <meta property="og:site_name" content="IAEE Premium Domains" />
        <meta property="og:image" content="https://www.iaee.eu/images/premium-domains-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:alt" content="Domínios Premium - Nomes de Domínio Alta Autoridade" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Domínios Premium Expirados com Backlinks" />
        <meta name="twitter:description" content="Domínios expirados fiáveis com alta autoridade e valor SEO. Disponíveis imediatamente." />
        <meta name="twitter:image" content="https://www.iaee.eu/images/premium-domains-og.jpg" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://iaee.eu/#organization",
                "name": "IAEE Premium Domains",
                "url": "https://iaee.eu",
                "logo": "https://iaee.eu/images/premium-domains-og.jpg",
                "description": "Especialista em domínios expirados premium com alta autoridade e valor SEO"
              },
              {
                "@type": "WebPage",
                "url": "https://iaee.eu/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo",
                "name": "Domínios Premium Expirados com Backlinks | Alta Autoridade & Valor SEO",
                "inLanguage": "pt"
              },
              {
                "@type": "ItemList",
                "name": "Domínios Premium Expirados",
                "numberOfItems": ${premiumDomains.length},
                "itemListElement": ${JSON.stringify(premiumDomains.slice(0, 10).map((domain, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "Product",
                    "name": domain.name,
                    "description": domain.description,
                    "offers": {
                      "@type": "Offer",
                      "price": domain.price.replace("€", ""),
                      "priceCurrency": "EUR"
                    }
                  }
                })))}
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {"@type": "Question", "name": "O que é um domínio expirado?", "acceptedAnswer": {"@type": "Answer", "text": "Um domínio expirado é um nome de domínio que não foi renovado pelo proprietário anterior e está agora disponível para registo."}},
                  {"@type": "Question", "name": "Por que os backlinks são importantes?", "acceptedAnswer": {"@type": "Answer", "text": "Os backlinks são um dos fatores de classificação mais importantes para o Google. Domínios com backlinks de qualidade têm vantagem nos resultados de pesquisa."}},
                  {"@type": "Question", "name": "Como funciona um redirecionamento 301 para SEO?", "acceptedAnswer": {"@type": "Answer", "text": "Um redirecionamento 301 redireciona permanentemente visitantes e motores de busca do domínio antigo para o seu novo site, transferindo o valor dos links."}}
                ]
              }
            ]
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Language Switcher */}
        <LanguageSwitcher currentLanguage="pt" />
        
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 flex-shrink-0" />
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent truncate">Domínios Premium</span>
            </RouterLink>
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <RouterLink to="/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1"><Home className="h-4 w-4" />Início</RouterLink>
              <button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">Domínios</button>
              <button onClick={() => scrollToSection("why-premium")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">Porquê Premium?</button>
              <button onClick={() => scrollToSection("faq")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">FAQ</button>
              <Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold">Contacto</Button>
            </nav>
            <Button onClick={() => scrollToSection("domains")} className="md:hidden bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-xs px-3 py-2">Domínios</Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 sm:mb-6 bg-amber-500/10 text-amber-400 border-amber-500/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"><Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 inline" />Coleção Exclusiva de Domínios Premium</Badge>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2"><span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">Domínios Premium Expirados com Backlinks Alta Autoridade & Valor SEO</span></h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">Fortaleça a sua presença online com nomes de domínio que já construíram anos de autoridade.</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button size="lg" onClick={() => scrollToSection("domains")} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-lg shadow-amber-500/25">Ver Domínios<ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" /></Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("why-premium")} className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">Mais Informações</Button>
              </div>
              <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2">
                {[{ label: "Pontuação MOZ Média", value: "29+" },{ label: "Domínios Premium", value: "110+" },{ label: "Anos de Experiência", value: "10+" },{ label: "Clientes Satisfeitos", value: "500+" }].map((stat, index) => (
                  <div key={index} className="p-3 sm:p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur"><div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400">{stat.value}</div><div className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</div></div>
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
                Domínios Disponíveis
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nomes de Domínio Premium à Venda
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Cada domínio é cuidadosamente selecionado com base na autoridade MOZ, perfil de backlinks e potencial SEO. 
                Quer <strong className="text-white">comprar um domínio expirado</strong> ou procura <strong className="text-white">domínios expirados fiáveis</strong>? Veja a nossa oferta abaixo.
              </p>
            </div>
            
            {/* SEO Intro Text */}
            <div className="max-w-5xl mx-auto mb-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">À procura de um nome de domínio com valor SEO real?</strong> Connosco compra <strong className="text-amber-400">domínios expirados fiáveis com backlinks</strong> e alta autoridade, cuidadosamente verificados quanto à qualidade e histórico. Com um domínio expirado não começa do zero, mas beneficia imediatamente de links existentes, confiança e histórico online.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-amber-400">Somos especializados em .EU e outras extensões de domínio europeias</strong> e distinguimo-nos claramente no segmento de nomes web europeus.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Estes domínios expirados possuem backlinks existentes de <strong className="text-amber-400">empresas conceituadas, instituições de media e organizações governamentais</strong> — links essenciais que para websites normais são muito difíceis ou impossíveis de obter. Domínios expirados são uma vantagem estratégica que os melhores profissionais de marketing, agências e investidores utilizam há anos para crescer mais rápido que os restantes.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Além de domínios expirados, também oferecemos <strong className="text-amber-400">nomes de domínio premium</strong>: nomes curtos e poderosos com valor de marca e potencial comercial. Seja para um website, loja online ou projeto SEO — um <strong className="text-white">nome de domínio com autoridade</strong> dá-lhe uma vantagem clara no Google.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                <strong className="text-white">Mais pesquisados:</strong> comprar domínio expirado com backlinks • domínios expirados fiáveis • domínio expirado com autoridade • comprar domínio premium • domínio com valor SEO • domínio antigo com links • melhores domínios à venda
              </p>
            </div>

            {/* VAT Notice */}
            <div className="max-w-5xl mx-auto mb-10 text-center">
              <p className="text-sm text-slate-300 font-medium bg-slate-800/40 border border-slate-700/40 rounded-lg px-4 py-3 inline-block">
                <span className="text-amber-400 font-semibold">Informação IVA:</span> Os preços não incluem IVA para clientes particulares na UE. Clientes empresariais na UE podem aplicar o mecanismo de autoliquidação. Para clientes fora da UE não é cobrado IVA.
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
                      
                      {domain.topBacklinks && domain.topBacklinks.length > 0 && (
                        <div className="text-[10px] sm:text-xs">
                          <span className="text-slate-500 block mb-1">Top Backlinks:</span>
                          <div className="flex flex-wrap gap-0.5 sm:gap-1">
                            {domain.topBacklinks.slice(0, 5).map((link, i) => (
                              <Badge key={i} variant="outline" className="text-[8px] sm:text-[10px] border-amber-500/30 text-amber-400/80 bg-amber-500/5">
                                {link}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Price Display - Compact at bottom */}
                    <div className="mt-auto pt-3 sm:pt-4 border-t border-slate-700/50">
                      <div className="flex items-center justify-between mb-2 sm:mb-3 bg-slate-800/60 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                        <span className="text-xs sm:text-sm font-medium text-slate-300">Preço</span>
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
                            Comprar Agora
                          </a>
                        ) : (
                          <div 
                            className="w-full inline-flex items-center justify-center gap-2 px-3 sm:px-6 py-2.5 sm:py-4 bg-[#F59E0B] text-slate-950 font-bold rounded-md shadow-md text-sm sm:text-lg"
                          >
                            Comprar Agora
                          </div>
                        )}
                        <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-center" data-nosnippet>
                          <div className="flex items-center justify-center gap-0.5 sm:gap-1 flex-wrap">
                            {/* Visa - Clear text logo */}
                            <div className="flex items-center bg-[#1A1F71] rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
                              <span className="text-white font-bold text-[5px] sm:text-[7px] italic tracking-tight" style={{fontFamily: 'Arial'}}>VISA</span>
                            </div>
                            {/* Mastercard - Clear circles */}
                            <div className="flex items-center bg-[#000000] rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
                              <svg className="h-2 sm:h-2.5 w-3 sm:w-4" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="10" r="8" fill="#EB001B"/>
                                <circle cx="21" cy="10" r="8" fill="#F79E1B"/>
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
                            <p className="text-[8px] sm:text-[10px] text-slate-400 leading-tight mt-1 sm:mt-2">
                              Pagamento seguro via Stripe
                              <br />
                              Convertido automaticamente para a sua moeda local
                            </p>
                            <p className="text-[8px] sm:text-[10px] text-slate-400 leading-tight mt-2 sm:mt-3">
                              Após o pagamento, receberá o token de transferência (EPP/Auth-code) no seu e-mail dentro de 24 horas.
                              <br />
                              Verifique também a pasta de spam.
                            </p>
                            <a href="#domein-verhuizen" className="text-[10px] text-amber-400 hover:text-amber-300 underline mt-2">
                              Como funciona a transferência?
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

        {/* Why Premium Section */}
        <section id="why-premium" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30">
                <Award className="w-4 h-4 mr-2 inline" />
                Porquê Domínios Premium?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                As Vantagens de Domínios Expirados Premium
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Descubra porque os profissionais escolhem domínios expirados premium para os seus projetos.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: TrendingUp, title: "Rankings Mais Rápidos", desc: "Comece com autoridade de domínio existente e alcance posições mais altas no Google mais rapidamente." },
                { icon: Link, title: "Backlinks de Qualidade", desc: "Beneficie de anos de links construídos naturalmente de websites autoritários." },
                { icon: Shield, title: "Histórico Verificado", desc: "Cada domínio é cuidadosamente verificado quanto a spam, penalizações e histórico negativo." },
                { icon: Zap, title: "Início Imediato", desc: "Sem período de sandbox ou de espera — comece a construir imediatamente." },
                { icon: Target, title: "Nicho Específico", desc: "Encontre domínios que correspondam perfeitamente ao seu público-alvo e setor." },
                { icon: BarChart3, title: "Valor Mensurável", desc: "Pontuações MOZ verificadas e métricas que provam a qualidade de cada domínio." }
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-amber-500/30 transition-all">
                  <item.icon className="w-10 h-10 text-amber-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO & Redirects Section */}
        <section id="seo-redirects" className="py-20 bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                <ArrowUp className="w-4 h-4 mr-2 inline" />
                SEO & Redirects
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Como Usar Domínios Premium para SEO
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  301 Redirect para o Seu Próprio Website
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Uma das formas mais eficazes de utilizar um domínio premium é através de um 301 redirect. Isto transfere grande parte do valor SEO (link juice) do domínio premium para o seu website existente. Perfeito para aumentar a autoridade do seu website principal.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  Novo Website no Domínio Premium
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Comece um projeto completamente novo com uma vantagem. A autoridade existente e os backlinks dão ao seu novo website um impulso imediato nos motores de busca.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  PBN (Private Blog Network)
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Para estratégias SEO avançadas, domínios premium podem ser utilizados para construir uma rede de blogs de suporte. Cada domínio traz a sua própria autoridade e histórico único.
                </p>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Porque Estes Domínios São Únicos
                </h3>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Os nossos domínios premium são cuidadosamente selecionados e cumprem requisitos de qualidade rigorosos.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { icon: Shield, title: "Histórico Limpo", desc: "Sem spam ou histórico de penalizações" },
                  { icon: Link, title: "Backlinks de Qualidade", desc: "De fontes fiáveis" },
                  { icon: BarChart3, title: "Alta Pontuação DA", desc: "Mínimo DA 20+" },
                  { icon: Globe, title: "Nichos Relevantes", desc: "Domínios tematicamente adequados" }
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
                Perguntas Frequentes
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                FAQ sobre Domínios Premium & SEO
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Onde posso comprar um domínio expirado com backlinks?",
                    answer: "A melhor forma de comprar um domínio expirado com backlinks é através de um vendedor especializado que verifica manualmente os domínios quanto à qualidade, histórico e autoridade. Assim evita comprar um domínio com links de spam ou problemas SEO. Oferecemos apenas domínios expirados fiáveis que foram cuidadosamente verificados."
                  },
                  {
                    question: "O que é um domínio expirado fiável com alta autoridade?",
                    answer: "Um domínio expirado fiável com alta autoridade é um domínio que tem backlinks de qualidade, um histórico de website limpo, sem histórico de spam, jogos de azar ou conteúdo adulto, e links relevantes de conteúdo real. Este tipo de domínio oferece valor SEO real e dá-lhe uma vantagem no Google."
                  },
                  {
                    question: "Quanto valor SEO tem um domínio expirado com links?",
                    answer: "O valor SEO de um domínio expirado com links está principalmente nos backlinks existentes, autoridade de domínio construída e confiança mais rápida no Google. Isto pode reduzir significativamente o tempo para classificar — frequentemente meses a anos mais rápido do que com um novo domínio."
                  },
                  {
                    question: "Um domínio expirado com autoridade é melhor que linkbuilding?",
                    answer: "Em muitos casos, sim. Com um domínio expirado compra links e autoridade existentes, enquanto o linkbuilding pode ser demorado, caro e arriscado. Um domínio antigo com valor SEO dá-lhe uma vantagem imediata sem meses de investimento em linkbuilding."
                  },
                  {
                    question: "Posso usar um domínio expirado para um novo website?",
                    answer: "Sim. Pode usar perfeitamente um domínio expirado com valor SEO para um novo website, desde que o conteúdo se alinhe logicamente com o tema e histórico do domínio. Os backlinks permanecem ativos e beneficia imediatamente da autoridade construída."
                  },
                  {
                    question: "Qual é a diferença entre um domínio premium e um domínio expirado?",
                    answer: "Um domínio premium é principalmente valioso devido à qualidade do nome e valor de marca, enquanto um domínio expirado com backlinks traz autoridade SEO e histórico extra. Ambos podem ser valiosos, dependendo do seu objetivo. Alguns domínios combinam ambas as vantagens."
                  },
                  {
                    question: "Porque são os domínios expirados com backlinks mais caros?",
                    answer: "Os domínios expirados com backlinks são mais caros porque já têm valor SEO, poupam tempo e custos, e permitem um início mais rápido. Está a pagar por confiança construída, não apenas por um nome. O investimento frequentemente compensa-se rapidamente através de melhores rankings."
                  },
                  {
                    question: "Os domínios expirados com autoridade são adequados para lojas online?",
                    answer: "Sim. Para lojas online, a confiança é crucial. Um domínio expirado com alta autoridade pode contribuir para melhor visibilidade, conversões mais altas e indexação mais rápida. Isto dá à sua loja online uma vantagem sobre concorrentes que começam com um novo domínio."
                  },
                  {
                    question: "Posso combinar um domínio premium com vantagens SEO?",
                    answer: "Sim. Alguns domínios premium são também domínios expirados com um forte histórico de links. Isto combina valor de marca com autoridade SEO e é frequentemente o mais valioso. No nosso portfólio encontrará vários domínios que oferecem ambas as vantagens."
                  },
                  {
                    question: "Porque é que cada vez mais empreendedores escolhem domínios expirados com valor SEO?",
                    answer: "Porque os empreendedores procuram resultados mais rápidos no Google, menos dependência de linkbuilding e uma base sólida para crescimento. Um domínio expirado fiável com backlinks e autoridade oferece precisamente essa vantagem que faz a diferença."
                  },
                  {
                    question: "O que é Domain Authority (DA) e porque é importante?",
                    answer: "Domain Authority é uma pontuação de 1-100 desenvolvida pela MOZ que prevê quão bem um website irá classificar nos motores de busca. Um DA mais alto significa mais autoridade e melhores hipóteses de classificar bem. Baseia-se em fatores como o número e qualidade de backlinks, a idade do domínio e a fiabilidade geral."
                  },
                  {
                    question: "Como funciona um 301 redirect para SEO?",
                    answer: "Um 301 redirect é um redirecionamento permanente que diz aos motores de busca que uma página foi permanentemente movida. Quando faz um 301 redirect de um domínio premium para o seu site, grande parte do valor SEO (link juice) desse domínio é transferido para o seu site. Isto pode melhorar significativamente os seus rankings."
                  },
                  {
                    question: "Quanto tempo leva até ver resultados?",
                    answer: "Os efeitos de uma transferência de domínio ou 301 redirect são geralmente visíveis nos resultados de pesquisa dentro de 2-8 semanas. Isto depende de quão frequentemente o Google rastreia o seu site e do estado atual do seu website. Domínios premium com backlinks ativos frequentemente mostram resultados mais rápidos."
                  },
                  {
                    question: "Qual é a melhor forma de encontrar domínios expirados com autoridade?",
                    answer: "A melhor forma é através de um vendedor especializado que verifica os domínios antecipadamente. Procurar sozinho através de sites de leilão acarreta riscos. Selecionamos apenas domínios com links de qualidade, sem histórico de spam e valor SEO real. Assim sabe com certeza que está a investir num domínio fiável."
                  },
                  {
                    question: "Porque é que por vezes aparecem websites do nosso portfólio no histórico de um domínio?",
                    answer: "Alguns domínios no nosso portfólio foram anteriormente utilizados para os nossos próprios projetos, websites de teste ou 301 redirects. Isto inclui websites como NailTalk, OntwerpNovi, OliveVines e projetos similares. Esta é na verdade uma vantagem: estes domínios têm resultados comprovados e foram ativamente testados quanto ao desempenho SEO. Todos os nossos domínios são minuciosamente verificados em múltiplas fontes (como arquivos de histórico web, Google, Ahrefs, MOZ e verificadores de spam) antes da venda e estão completamente livres de histórico prejudicial como spam, conteúdo adulto ou histórico relacionado com jogos de azar. Um website do nosso próprio portfólio no histórico é portanto um sinal de qualidade e gestão cuidadosa — não uma razão para preocupação."
                  },
                  {
                    question: "Como funciona SEO e linkbuilding? E porque devo continuar a manter o meu domínio comprado?",
                    answer: "SEO (Search Engine Optimization) trata de otimizar o seu website para que motores de busca como o Google possam encontrá-lo, compreendê-lo e classificá-lo melhor. Linkbuilding é uma parte crucial disto: obter backlinks (referências) de outros websites para o seu. Estes links funcionam como 'votos de confiança' e dizem ao Google que o seu conteúdo é valioso.\n\n**Porque a manutenção é essencial:**\nUm domínio premium com backlinks existentes dá-lhe uma base forte, mas nenhum domínio oferece garantias de rankings. SEO é um processo contínuo. Backlinks podem desaparecer ao longo do tempo quando websites de referência ficam offline ou removem conteúdo. Além disso, os algoritmos do Google mudam regularmente, então o que funciona hoje pode ser diferente amanhã.\n\n**Dicas para manutenção e linkbuilding bem-sucedidos:**\n• **Crie conteúdo valioso** — Publique regularmente artigos, guias ou ferramentas relevantes e originais que outros queiram partilhar e linkar.\n• **Guest blogging** — Escreva artigos para websites respeitados na sua indústria com um link de volta para o seu site.\n• **Broken link building** — Encontre links quebrados em websites relevantes e ofereça o seu conteúdo como substituição.\n• **HARO/Helpareporter** — Responda a perguntas de jornalistas para obter menções e links em artigos de notícias.\n• **Redes sociais e RP** — Partilhe ativamente o seu conteúdo e construa relações com influenciadores e media.\n• **Estrutura de links internos** — Assegure links internos lógicos entre as suas páginas para distribuir autoridade.\n• **Monitorize os seus backlinks** — Use ferramentas como Ahrefs, MOZ ou SEMrush para monitorizar o seu perfil de links e desautorizar links prejudiciais.\n• **SEO técnico** — Assegure tempos de carregamento rápidos, design responsivo e uma conexão HTTPS segura.\n\n**Importante saber:**\nNenhum domínio, por mais forte que seja, garante posições de topo no Google. A autoridade construída dá-lhe uma vantagem, mas o sucesso depende de esforço contínuo: conteúdo regular, linkbuilding ativo e manutenção técnica. Veja o seu domínio premium como uma fundação sólida — o edifício em cima determina você mesmo com esforços SEO consistentes."
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
                    <AccordionContent className="text-slate-400 pb-4 leading-relaxed whitespace-pre-line">
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
                    <h3 className="font-semibold">Guia Completo: 35 Perguntas sobre Domínios Expirados & SEO</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 pb-6 leading-relaxed">
                    <div className="space-y-8 whitespace-pre-line">
                      {[
                        {
                          question: "1. Que nome de domínio devo comprar como iniciante?",
                          answer: "Como iniciante, escolha um nome de domínio fácil de lembrar, que indique claramente o que faz e transmita confiança. Muitos iniciantes pesquisam \"que nome de domínio devo comprar\" e acabam em domínios novos, enquanto um domínio expirado fiável muitas vezes já construiu autoridade e valor."
                        },
                        {
                          question: "2. Qual é a diferença entre um novo domínio e um domínio expirado?",
                          answer: "Um novo domínio não tem histórico e começa completamente do zero. Um domínio expirado foi registrado anteriormente e pode ainda ter backlinks, autoridade e confiança no Google. Isso torna um domínio expirado muitas vezes mais atraente para SEO e visibilidade."
                        },
                        {
                          question: "3. É melhor comprar um novo domínio ou um domínio expirado?",
                          answer: "Quem pesquisa \"novo domínio ou domínio expirado\" geralmente compara velocidade e resultado. Para branding, um novo nome pode funcionar, mas para ser encontrado mais rapidamente no Google, um bom domínio expirado oferece muitas vezes uma vantagem clara."
                        },
                        {
                          question: "4. Porque é que o meu novo website tem um desempenho tão fraco no Google?",
                          answer: "Novos websites precisam de construir a sua fiabilidade. Sem backlinks e histórico, isto geralmente leva meses. Um domínio expirado com bons links pode garantir que não precisa de começar completamente do zero."
                        },
                        {
                          question: "5. É seguro comprar um domínio expirado?",
                          answer: "Sim, desde que seja um domínio expirado verificado e fiável. O risco não está em \"expirado\", mas em domínios que não foram verificados quanto a spam, abuso ou backlinks negativos."
                        },
                        {
                          question: "6. O que significa um domínio com bons backlinks?",
                          answer: "Um domínio com bons backlinks tem referências de websites reais e relevantes. Estes links proporcionam autoridade e confiança nos motores de busca, o que é essencial para o desempenho SEO."
                        },
                        {
                          question: "7. Porque são importantes os backlinks ao comprar um domínio?",
                          answer: "Os backlinks são um dos fatores de ranking mais importantes do Google. Quando pesquisa \"comprar domínio SEO\", está na verdade à procura de um domínio que já construiu confiança — exatamente o que um bom domínio expirado oferece."
                        },
                        {
                          question: "8. Como posso ver se um domínio expirado é fiável?",
                          answer: "Um domínio expirado fiável é verificado quanto a: histórico do website, qualidade dos backlinks, ausência de spam, jogos de azar ou conteúdo adulto. Como vendedor, seleciona apenas domínios que cumprem estes critérios."
                        },
                        {
                          question: "9. Posso usar um domínio expirado para um novo website?",
                          answer: "Sim. Pode usar perfeitamente um domínio expirado para um projeto completamente novo. O conteúdo é novo, mas o nome de domínio já traz autoridade online."
                        },
                        {
                          question: "10. Um domínio expirado é adequado para iniciantes?",
                          answer: "Certamente. Os iniciantes muitas vezes beneficiam mais porque: obtêm visibilidade mais rapidamente, têm menos desvantagem SEO, fazem um início mais profissional."
                        },
                        {
                          question: "11. Porque são alguns domínios mais caros que outros?",
                          answer: "Pesquisas como \"porque é que um domínio é tão caro\" muitas vezes surgem de incompreensão sobre valor. O preço é determinado por: qualidade do nome, valor SEO, backlinks, aplicabilidade comercial."
                        },
                        {
                          question: "12. Posso vender um domínio expirado mais tarde?",
                          answer: "Sim. Muitas pessoas pesquisam \"domínio como investimento\". Um domínio expirado forte muitas vezes mantém o seu valor e pode até aumentar de preço."
                        },
                        {
                          question: "13. Um domínio expirado pode ser mau para SEO?",
                          answer: "Apenas se tiver um histórico negativo. Por isso, a diferença é grande entre: domínios expirados não verificados e nomes de domínio cuidadosamente selecionados e fiáveis."
                        },
                        {
                          question: "14. O que devo ter em atenção ao comprar um domínio expirado?",
                          answer: "Pontos de atenção importantes são: histórico livre de spam, backlinks relevantes, nome de domínio lógico, sem risco de marca registrada."
                        },
                        {
                          question: "15. Quão rápido posso começar após comprar um domínio?",
                          answer: "Após a transferência, pode usar imediatamente o domínio para: um website, email, loja online. Tal como com um novo domínio."
                        },
                        {
                          question: "16. Preciso de conhecimento técnico para usar um domínio expirado?",
                          answer: "Não. Um domínio expirado funciona tecnicamente da mesma forma que um novo domínio e pode ser usado em qualquer provedor de hospedagem."
                        },
                        {
                          question: "17. Um domínio expirado é adequado para uma loja online?",
                          answer: "Sim. Lojas online beneficiam especialmente de: confiança, autoridade, melhor início no Google. Isso é crucial para conversões."
                        },
                        {
                          question: "18. O que significa autoridade de domínio ao comprar um domínio?",
                          answer: "Autoridade de domínio é uma indicação de quão forte é um domínio com base em links e histórico. Muitos domínios expirados pontuam mais alto aqui do que novos domínios."
                        },
                        {
                          question: "19. Um domínio expirado é melhor do que link building?",
                          answer: "Em muitos casos, sim. Está efetivamente a comprar uma reputação existente, em vez de a construir mais tarde de forma cara e arriscada."
                        },
                        {
                          question: "20. Porque é que os empresários escolhem conscientemente um domínio expirado?",
                          answer: "Porque procuram: resultado mais rápido, menos risco SEO, um início inteligente com vantagem."
                        },
                        {
                          question: "21. Um domínio expirado é adequado para qualquer nicho?",
                          answer: "Para quase qualquer nicho estão disponíveis bons domínios expirados, desde que o nome e o histórico se alinhem logicamente com o tema."
                        },
                        {
                          question: "22. Posso obter ajuda na escolha do domínio certo?",
                          answer: "Sim. Muitos iniciantes pesquisam \"que domínio se adequa ao meu negócio\". Orientação evita compras erradas e poupa dinheiro."
                        },
                        {
                          question: "23. Qual é a maior vantagem de um domínio expirado?",
                          answer: "A maior vantagem é que não começa do zero nos motores de busca."
                        },
                        {
                          question: "24. Qual é o maior equívoco sobre domínios expirados?",
                          answer: "Que são inerentemente arriscados. Na realidade, domínios não testados são arriscados — não domínios expirados cuidadosamente selecionados."
                        },
                        {
                          question: "25. Para quem é mais adequado um domínio expirado fiável?",
                          answer: "Para: iniciantes, empresários, lojas online, projetos SEO, investidores. Todos que pesquisam \"comprar melhor domínio\" e querem começar de forma inteligente."
                        },
                        {
                          question: "26. Como sei se um domínio é adequado para SEO?",
                          answer: "Um domínio é adequado para SEO se: o nome é lógico e relevante, não tem histórico de spam, existem backlinks de qualidade. Um domínio expirado com bons links muitas vezes pontua melhor aqui do que um novo domínio."
                        },
                        {
                          question: "27. Comprar um domínio expirado afeta os rankings do Google?",
                          answer: "Sim. O Google olha para o histórico e estrutura de links de um domínio. Um domínio expirado fiável pode ajudar a construir visibilidade mais rapidamente, se usado corretamente."
                        },
                        {
                          question: "28. Quais são as vantagens de um domínio expirado com autoridade?",
                          answer: "As principais vantagens são: confiança mais rápida nos motores de busca, menos dependência de link building, posição inicial mais forte do que concorrentes com novos domínios."
                        },
                        {
                          question: "29. Preciso de ter uma keyword no meu domínio para SEO?",
                          answer: "Não necessariamente. Pesquisas como \"keyword domínio SEO\" mostram que esta é uma pergunta frequente. Um nome claro e fiável é mais importante do que palavras-chave exatas, especialmente em domínios expirados com autoridade."
                        },
                        {
                          question: "30. Um domínio curto é melhor do que um domínio longo?",
                          answer: "Sim. Domínios curtos são: mais fáceis de lembrar, mais profissionais, mais valiosos. Muitos domínios expirados premium são precisamente curtos e poderosos."
                        },
                        {
                          question: "31. Posso usar um domínio expirado para vários projetos?",
                          answer: "Sim, por exemplo para: um website principal, um projeto de nicho, um portal de marca. É importante que o conteúdo se alinhe logicamente com o histórico do domínio."
                        },
                        {
                          question: "32. O que acontece com backlinks antigos quando coloco um novo website?",
                          answer: "Os backlinks permanecem enquanto não forem removidos pelos websites de referência. Essa é precisamente uma das grandes vantagens de comprar um domínio expirado."
                        },
                        {
                          question: "33. Um domínio expirado é melhor do que vários novos domínios?",
                          answer: "Para foco e SEO, um domínio expirado forte é muitas vezes mais eficaz do que vários novos domínios sem autoridade."
                        },
                        {
                          question: "34. Posso obter clientes mais rapidamente com um domínio expirado?",
                          answer: "Indiretamente, sim. Visibilidade mais rápida e mais confiança fazem com que os visitantes convertam mais cedo."
                        },
                        {
                          question: "35. Durante quanto tempo o valor de um domínio expirado se mantém?",
                          answer: "Enquanto o domínio for bem utilizado e mantido, o valor mantém-se e pode até crescer."
                        },
                        {
                          question: "36. Porque devo comprar um domínio a um vendedor especializado?",
                          answer: "Porque um vendedor especializado: verifica domínios antecipadamente, exclui riscos, orienta iniciantes, é transparente sobre qualidade e histórico. Isso faz a diferença entre apostar e investir conscientemente."
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

        {/* Contact Form */}
        <section id="contact" className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30">
                  <Mail className="w-4 h-4 mr-2 inline" />
                  Entre em Contacto
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Peça Informações ou Faça uma Oferta
                </h2>
                <p className="text-slate-400">
                  Interessado num dos nossos domínios premium? Preencha o formulário e entraremos em contacto o mais rapidamente possível.
                </p>
              </div>
              
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Nome *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="O seu nome"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          E-mail *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="seu@email.com"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Globe className="w-4 h-4 inline mr-2" />
                        Domínio Escolhido *
                      </label>
                      <Input
                        type="text"
                        value={formData.domain}
                        onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                        placeholder="ex: FinanceAuthority.com"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Mensagem / Informação Adicional
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Conte-nos mais sobre o seu interesse, faça perguntas ou faça uma oferta..."
                        rows={5}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40"
                    >
                      Enviar Pedido
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
                  Comprar Domínios Expirados: Invista em Autoridade SEO Comprovada
                </h2>
                
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-amber-400">Comprar um domínio expirado</strong> é a forma mais inteligente de beneficiar imediatamente de anos de <strong className="text-white">autoridade de domínio</strong> e <strong className="text-white">backlinks de qualidade</strong> construídos. Ao contrário de um novo domínio, um domínio premium expirado já tem confiança no Google e noutros motores de busca. Isto traduz-se diretamente em melhores rankings, indexação mais rápida e mais tráfego orgânico.
                  </p>
                  
                  <p>
                    Os nossos <strong className="text-amber-400">domínios premium</strong> cuidadosamente selecionados têm um histórico comprovado com backlinks de fontes autoritárias como Wikipedia, universidades, instituições governamentais e sites de notícias respeitáveis. Estes <strong className="text-white">backlinks de alta qualidade</strong> são o resultado de anos de presença online e são praticamente impossíveis de construir por conta própria — a menos que esteja disposto a investir milhares de euros em linkbuilding.
                  </p>
                  
                  <p>
                    Quer queira <strong className="text-white">iniciar uma loja online</strong>, lançar um <strong className="text-white">website de afiliados</strong>, ou dar ao seu negócio existente um <strong className="text-white">impulso SEO</strong>: um domínio expirado com alta <strong className="text-amber-400">MOZ Domain Authority (DA)</strong> dá-lhe uma vantagem inconfundível sobre a concorrência. Enquanto outros esperam meses até que o Google confie no seu novo domínio, você beneficia imediatamente da autoridade existente.
                  </p>
                  
                  <p>
                    <strong className="text-white">Porquê esperar?</strong> Cada domínio premium no nosso portfólio é verificado quanto a histórico limpo de spam, backlinks relevantes e bons perfis de links. Está a comprar um ativo estratégico de nome de domínio que adiciona valor imediatamente à sua presença online. De <strong className="text-white">301 redirects</strong> para empilhamento de autoridade a iniciar diretamente um novo website: as possibilidades são infinitas.
                  </p>
                  
                  <div className="bg-gradient-to-r from-amber-500/10 to-slate-800/30 border border-amber-500/20 rounded-xl p-6 mt-8">
                    <p className="text-center text-lg mb-0">
                      <strong className="text-amber-400">Pronto para acelerar o seu sucesso online?</strong><br />
                      <span className="text-slate-300">Explore o nosso portfólio de mais de 110 domínios premium expirados e descubra qual domínio se encaixa perfeitamente na sua ambição. Invista hoje em autoridade comprovada e deixe os seus concorrentes para trás.</span>
                    </p>
                  </div>
                </div>
              </article>

              {/* New EU Domain Value Section */}
              <div className="bg-gradient-to-br from-slate-800/80 via-slate-900/90 to-slate-800/80 border border-amber-500/30 rounded-2xl p-8 md:p-10 mt-16 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                  Porque os nomes de domínio europeus .EU premium têm tanto valor
                </h2>
                
                <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                  <h3 className="text-xl md:text-2xl font-semibold text-amber-400 mb-6">
                    Valiosos nomes europeus .EU com um passado confiável para o mercado europeu e internacional
                  </h3>
                  
                  <p>
                    Enquanto outras extensões estão frequentemente saturadas, <strong className="text-amber-400">.EU</strong> e as <strong className="text-white">extensões de domínio europeias</strong> oferecem <strong className="text-amber-400">fiabilidade</strong>, <strong className="text-amber-400">credibilidade</strong> e uma clara <strong className="text-white">identidade geográfica</strong>. Na prática, estes nomes europeus são frequentemente mais valiosos e fiáveis do que muitos nomes <strong className="text-slate-200">.com</strong>, <strong className="text-slate-200">.net</strong> ou <strong className="text-slate-200">.org</strong>.
                  </p>
                  
                  <p>
                    Para compradores europeus e <strong className="text-white">internacionais</strong>, um <strong className="text-amber-400">nome web internacional</strong> com histórico online oferece credibilidade extra. Um <strong className="text-white">endereço web antigo com reputação</strong>, um <strong className="text-amber-400">nome web multilingue</strong> ou um <strong className="text-white">nome web para a Europa</strong> é ideal como endereço web para o <strong className="text-amber-400">mercado internacional</strong> ou como <strong className="text-white">nome online global</strong> para empresas e projetos que querem posicionar-se profissionalmente. Em muitos casos, a autoridade de um <strong className="text-amber-400">nome .EU</strong> também pode ser empregada estrategicamente através de um <strong className="text-white">redirect</strong>, preservando o apelo europeu e o valor acumulado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Domain Transfer Instructions */}
        <section id="domein-verhuizen" className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="border border-amber-500/30 rounded-xl bg-slate-800/50">
                <div className="px-6 py-4">
                  <h2 className="text-xl font-bold text-white">
                    <div className="flex items-center gap-3">
                      <Globe className="w-6 h-6 text-amber-400" />
                      <span>Como transferir o seu domínio com o token de transferência (EPP/Auth code)?</span>
                    </div>
                  </h2>
                </div>
                <div className="px-6 pb-6">
                  <div className="space-y-6 text-slate-300">
                    <p className="text-lg">
                      Após a sua compra, receberá dentro de 24 horas um <strong className="text-amber-400">token de transferência</strong> (também chamado código EPP ou Auth-code) no endereço de e-mail que indicou no pagamento. Com este código pode facilmente transferir o domínio para o seu próprio registador de domínios ou fornecedor de alojamento.
                    </p>
                    
                    <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                      <h3 className="text-lg font-semibold text-white mb-4">Instruções passo a passo:</h3>
                      <ol className="space-y-4">
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">1</span>
                          <div>
                            <strong className="text-white">Receba o token de transferência</strong>
                            <p className="text-slate-400 mt-1">Após o pagamento receberá dentro de 24 horas o código de autorização único por e-mail.</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">2</span>
                          <div>
                            <strong className="text-white">Inicie a transferência no seu registador</strong>
                            <p className="text-slate-400 mt-1">Aceda ao seu fornecedor de alojamento ou registador de domínios preferido e escolha "Transferir domínio".</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">3</span>
                          <div>
                            <strong className="text-white">Introduza o nome de domínio e o código de autorização</strong>
                            <p className="text-slate-400 mt-1">Preencha o nome de domínio e o código EPP/Auth que recebeu de nós.</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">4</span>
                          <div>
                            <strong className="text-white">Confirme a transferência</strong>
                            <p className="text-slate-400 mt-1">Siga os passos do seu novo registador para completar a transferência. Isto normalmente demora 5-7 dias.</p>
                          </div>
                        </li>
                      </ol>
                    </div>
                    
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                      <p className="text-amber-300 text-sm">
                        <strong>Nota:</strong> Se tiver problemas com a transferência ou não receber o código dentro de 24 horas, entre em contacto connosco através do formulário de contacto ou envie um e-mail para support@iaee.eu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Section */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Pagamento Seguro via Stripe
              </h2>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                Todos os pagamentos são processados de forma segura através do Stripe. Aceitamos todos os principais cartões de crédito e métodos de pagamento locais.
              </p>
              <div className="flex justify-center mb-8">
                <img src={stripeLogo} alt="Stripe - Pagamento Seguro" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
              </div>

              {/* NordVPN Recommendation Section */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <h4 className="font-bold text-white text-lg mb-2">🔒 Proteja a Sua Privacidade com NordVPN</h4>
                  <p className="text-white/90 text-sm mb-3">
                    O que é uma VPN? Uma <a href="https://www.dpbolvw.net/click-100643838-15520886" target="_blank" rel="nofollow noopener noreferrer" className="underline text-yellow-300 hover:text-yellow-200">Rede Privada Virtual (VPN)</a> encripta a sua ligação à internet e oculta o seu endereço IP, protegendo os seus dados pessoais de hackers, rastreadores e vigilância.
                  </p>
                  <p className="text-white/80 text-xs mb-4">
                    Para proprietários de domínios premium, proteger a sua identidade online é essencial. A NordVPN permite navegar anonimamente, aceder a conteúdos globais e proteger as suas transações comerciais.
                  </p>
                  <a 
                    href="https://www.dpbolvw.net/click-100643838-15520886" 
                    target="_blank" 
                    rel="nofollow noopener noreferrer"
                    className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-6 rounded-full transition-colors text-sm"
                  >
                    Obtenha NordVPN Agora →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden Internal Links for SEO */}
        <HiddenInternalLinks />

        {/* Legal Links */}
        <LegalLinksPremiumDomainsPT />

        {/* Footer */}
        <FooterPremiumDomainsPT />
      </div>
    </>
  );
};

export default PremiumDomainsPT;
