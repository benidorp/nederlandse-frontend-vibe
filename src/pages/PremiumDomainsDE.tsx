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
import LegalLinksPremiumDomainsDE from "@/components/premium-domains/LegalLinksPremiumDomainsDE";
import FooterPremiumDomainsDE from "@/components/premium-domains/FooterPremiumDomainsDE";
import LanguageSwitcher from "@/components/premium-domains/LanguageSwitcher";
import stripeLogo from "@/assets/stripe-logo.svg";
import { validateContactForm, buildSafeMailtoUrl } from "@/lib/formValidation";

// Premium domain data - German translations
const premiumDomains = [
  // DA 38
  {
    name: "escp-eap.eu",
    description: "Premium Business-School-Domain mit Backlinks von Wikipedia, Cornell, Spiegel und Le Monde.",
    mozScore: 38,
    pageAuthority: 28,
    linkingDomains: 292,
    inboundLinks: "4.6K+",
    followedLinks: "4.2K+",
    category: "Bildung",
    price: "€1495",
    backlinks: "4.6K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "lemonde.fr (DA 93)", "cornell.edu (DA 92)", "spiegel.de (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/6oUeVdepVg18dXf9OO9Zm04"
  },
  // DA 37
  {
    name: "grandparkhotel.at",
    description: "Premium österreichische Hotel-Domain mit Backlinks von The Guardian, Telegraph, Daily Mail, Irish Times und Der Standard.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 198,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Gastgewerbe",
    price: "€1750",
    backlinks: "1.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dailymail.co.uk (DA 94)", "irishtimes.com (DA 91)", "derstandard.at (DA 82)"],
    stripePaymentLink: "https://buy.stripe.com/8x2dR9epV9CK5qJaSS9Zm0i"
  },
  {
    name: "icesculpture.be",
    description: "Belgische Kunst/Event-Domain mit Backlinks von Europa.eu, The Guardian, Telegraph, DW und Boston.com.",
    mozScore: 37,
    pageAuthority: 33,
    linkingDomains: 349,
    inboundLinks: "1.9K+",
    followedLinks: "1.5K+",
    category: "Kunst",
    price: "€950",
    backlinks: "1.9K+",
    topBacklinks: ["europa.eu (DA 97)", "theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dw.com (DA 93)", "boston.com (DA 92)"],
    stripePaymentLink: "https://buy.stripe.com/fZu4gzdlRaGOg5n3qq9Zm0h"
  },
  {
    name: "tabby.eu",
    description: "Kurze und einprägsame EU-Domain mit Backlinks von YouTube, Le Monde, MDPI, Corriere und Wired Italia.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 166,
    inboundLinks: "3K+",
    followedLinks: "2.9K+",
    category: "Allgemein",
    price: "€1950",
    stripePaymentLink: "https://buy.stripe.com/bJe7sL2HdcOWbP7bWW9Zm0g",
    backlinks: "3K+",
    topBacklinks: ["youtube.com (DA 100)", "lemonde.fr (DA 93)", "mdpi.com (DA 92)", "corriere.it (DA 92)", "wired.it (DA 90)"]
  },
  // DA 36
  {
    name: "antigonetickets.be",
    description: "Belgische Ticketing-Domain mit Backlinks von Nieuwsblad, De Standaard und GVA.",
    mozScore: 36,
    pageAuthority: 23,
    linkingDomains: 120,
    inboundLinks: "6.6K+",
    followedLinks: "6.6K+",
    category: "Unterhaltung",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "6.6K+",
    topBacklinks: ["standaard.be (DA 81)", "nieuwsblad.be (DA 79)", "gva.be (DA 73)"]
  },
  {
    name: "beauxartsliege.be",
    description: "Kunst-Domain mit Backlinks von Wikipedia, CNN, Behance und RTBF.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 231,
    inboundLinks: "1.1K+",
    followedLinks: "831+",
    category: "Kunst/Kultur",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "1.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnn.com (DA 94)", "behance.net (DA 92)", "rtbf.be (DA 82)"]
  },
  {
    name: "paulsmithmusic.eu",
    description: "Musik-Domain mit Backlinks von BBC, The Guardian, NME und Pitchfork.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 302,
    inboundLinks: "719+",
    followedLinks: "663+",
    category: "Musik",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "719+",
    topBacklinks: ["bbc.co.uk (DA 95)", "theguardian.com (DA 95)", "pitchfork.com (DA 88)", "nme.com (DA 86)"]
  },
  {
    name: "eu-asiacentre.eu",
    description: "EU-Asien-Domain mit Backlinks von Wikipedia, NBC News, Cambridge und Reddit.",
    mozScore: 36,
    pageAuthority: 33,
    linkingDomains: 277,
    inboundLinks: "898+",
    followedLinks: "785+",
    category: "International",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "898+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "reddit.com (DA 97)", "nbcnews.com (DA 93)", "cam.ac.uk (DA 93)"]
  },
  // DA 35
  {
    name: "toulousespaceshow.eu",
    description: "Premium Raumfahrt-Domain mit Backlinks von Europa.eu, NASA.gov, IEEE.org und Wikipedia.",
    mozScore: 35,
    pageAuthority: 31,
    linkingDomains: 397,
    inboundLinks: "3.4K+",
    followedLinks: "1.8K+",
    category: "Technologie",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "nasa.gov (DA 95)", "europa.eu (DA 94)", "ieee.org (DA 93)"]
  },
  {
    name: "martonecycling.eu",
    description: "Radsport-Domain mit Backlinks von Globo, Harper's Bazaar, Vogue und Grazia.",
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
    description: "Deutsche Nachrichten/Religions-Domain mit Backlinks von Wikipedia (EN, DE, ZH, NL), Spiegel und La Croix.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 281,
    inboundLinks: "3.3K+",
    followedLinks: "1.8K+",
    category: "Nachrichten",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.3K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "de.wikipedia.org (DA 94)", "fandom.com (DA 94)", "spiegel.de (DA 93)", "la-croix.com (DA 88)"]
  },
  // DA 33
  {
    name: "etongmbh.de",
    description: "Deutsche Unternehmens-Domain mit starker geschäftlicher Autorität und Backlinks von Naver, Yumpu, Heise, Computerbase und Motor-Talk.",
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
    description: "Französische/Europäische Regions-Domain mit Backlinks von Scoop.it, France Info, La Tribune und französischer Regierung.",
    mozScore: 33,
    pageAuthority: 24,
    linkingDomains: 167,
    inboundLinks: "690.3K+",
    followedLinks: "689.6K+",
    category: "Tourismus",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "690.3K+",
    topBacklinks: ["scoop.it (DA 92)", "franceinfo.fr (DA 91)", "latribune.fr (DA 86)", "culture.gouv.fr (DA 76)", "agriculture.gouv.fr (DA 72)"]
  },
  {
    name: "fffb.be",
    description: "Kurze und kraftvolle belgische Domain mit Backlinks von Wikipedia, Variety, RTBF und Courrier International.",
    mozScore: 33,
    pageAuthority: 33,
    linkingDomains: 228,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Allgemein",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "1.7K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "variety.com (DA 93)", "constantcontact.com (DA 90)", "rtbf.be (DA 89)", "courrierinternational.com (DA 80)"]
  },
  // DA 32
  {
    name: "improve-research.eu",
    description: "Forschungs-Domain mit Backlinks von Europa.eu, Cambridge, Springer und LSE.",
    mozScore: 32,
    pageAuthority: 30,
    linkingDomains: 106,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "Forschung",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.7K+",
    topBacklinks: ["europa.eu (DA 94)", "cam.ac.uk (DA 93)", "springer.com (DA 92)", "lse.ac.uk (DA 90)"]
  },
  {
    name: "co-da.eu",
    description: "Kurze und kraftvolle EU-Domain mit Backlinks von Globo, HuffPost, CBS News, Gizmodo und Fast Company.",
    mozScore: 32,
    pageAuthority: 22,
    linkingDomains: 96,
    inboundLinks: "276+",
    followedLinks: "260+",
    category: "Zusammenarbeit",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "276+",
    topBacklinks: ["globo.com (DA 95)", "huffpost.com (DA 94)", "cbsnews.com (DA 93)", "gizmodo.com (DA 93)", "fastcompany.com (DA 92)"]
  },
  {
    name: "emg-nice2015.fr",
    description: "Französische Domain mit Backlinks von Wikipedia, GoFundMe, Nice Matin und Triathlon.org.",
    mozScore: 32,
    pageAuthority: 31,
    linkingDomains: 191,
    inboundLinks: "3.1K+",
    followedLinks: "3K+",
    category: "International",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "3.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "gofundme.com (DA 93)", "mundodeportivo.com (DA 92)", "nicematin.com (DA 73)", "triathlon.org (DA 68)"]
  },
  {
    name: "euromedialiteracy.eu",
    description: "Bildungs-EU-Domain mit Backlinks von Wikipedia, Penn State, Wisconsin und Europarat.",
    mozScore: 32,
    pageAuthority: 38,
    linkingDomains: 372,
    inboundLinks: "2.5K+",
    followedLinks: "2.3K+",
    category: "Bildung",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.5K+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "psu.edu (DA 92)", "scoop.it (DA 92)", "wisc.edu (DA 91)", "coe.int (DA 89)"]
  },
  {
    name: "citiexpress.eu",
    description: "Transport- und Logistik-EU-Domain mit Backlinks von TripAdvisor, SkyscraperCity und Rick Steves.",
    mozScore: 32,
    pageAuthority: 32,
    linkingDomains: 171,
    inboundLinks: "307+",
    followedLinks: "254+",
    category: "Transport",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "307+",
    topBacklinks: ["goo.gl (DA 95)", "tripadvisor.com (DA 93)", "skyscrapercity.com (DA 86)", "ricksteves.com (DA 77)", "rome2rio.com (DA 76)"]
  },
  // DA 31
  {
    name: "machuproject.eu",
    description: "Europäisches Projekt-Domain mit Backlinks von Wikipedia, Cambridge, UNESCO und Reddit.",
    mozScore: 31,
    pageAuthority: 27,
    linkingDomains: 162,
    inboundLinks: "379+",
    followedLinks: "266+",
    category: "Projekte",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "379+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cambridge.org (DA 93)", "unesco.org (DA 93)", "reddit.com (DA 92)", "mdpi.com (DA 92)"]
  },
  {
    name: "ramcip-project.eu",
    description: "Europäisches Forschungsprojekt-Domain mit Backlinks von Europa.eu, GitHub, NY Times und Springer.",
    mozScore: 31,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "333+",
    followedLinks: "293+",
    category: "Forschung",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "333+",
    topBacklinks: ["europa.eu (DA 97)", "github.com (DA 96)", "nytimes.com (DA 95)", "elpais.com (DA 94)", "springer.com (DA 93)"]
  },
  {
    name: "evader-project.eu",
    description: "EU-Projekt-Domain mit Backlinks von Europa.eu, Spiegel, Europa Press und Heise.",
    mozScore: 31,
    pageAuthority: 30,
    linkingDomains: 91,
    inboundLinks: "128+",
    followedLinks: "109+",
    category: "Projekte",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "128+",
    topBacklinks: ["europa.eu (DA 97)", "spiegel.de (DA 93)", "europapress.es (DA 91)", "heise.de (DA 91)", "autoblog.com (DA 90)"]
  },
  {
    name: "toastit-live.be",
    description: "Belgische Unterhaltungs/Medien-Domain mit Backlinks von Wikipedia, KU Leuven, Nieuwsblad und Yle.",
    mozScore: 31,
    pageAuthority: 29,
    linkingDomains: 268,
    inboundLinks: "15.2K+",
    followedLinks: "15K+",
    category: "Medien",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "15.2K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "kuleuven.be (DA 83)", "nieuwsblad.be (DA 82)", "skynet.be (DA 80)", "yle.fi (DA 78)"]
  },
  {
    name: "hznet.nl",
    description: "Niederländische Netzwerk-Domain mit Backlinks von Microsoft, NOS, Neowin, Tweakers und XS4All.",
    mozScore: 31,
    pageAuthority: 25,
    linkingDomains: 152,
    inboundLinks: "1.7K+",
    followedLinks: "1.6K+",
    category: "Netzwerk",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "1.7K+",
    topBacklinks: ["microsoft.com (DA 99)", "nos.nl (DA 90)", "neowin.net (DA 88)", "techpowerup.com (DA 83)", "tweakers.net (DA 79)"]
  },
  {
    name: "leading-the-digital-decade.eu",
    description: "Digitale Transformation EU-Domain mit Backlinks von Europa.eu, Politico EU und LSE.",
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
    description: "EU-Landmanagement/Nachhaltigkeit-Domain mit Backlinks von Europa.eu, ABC.es, Gencat.cat und spanischen Universitäten.",
    mozScore: 31,
    pageAuthority: 33,
    linkingDomains: 200,
    inboundLinks: "7.5K+",
    followedLinks: "7.4K+",
    category: "Nachhaltigkeit",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "7.5K+",
    topBacklinks: ["europa.eu (DA 97)", "abc.es (DA 93)", "gencat.cat (DA 89)", "ask.com (DA 88)", "ecoticias.com (DA 74)"],
    useCases: ["Naturschutz & Rewilding NGO", "Nachhaltige Landwirtschaft Plattform", "Ökotourismus & Agrotourismus", "Umweltberatung Büro", "Landschaftsarchitektur Studio", "Bio-Bauernhof Kollektiv", "Klimaschutz Stiftung", "Permakultur Akademie", "Wälder & Biodiversität Initiative", "Regenerative Landwirtschaft Community"]
  },
  // DA 30
  {
    name: "ilovecosmetics.eu",
    description: "Beauty- und Kosmetik-Domain mit Backlinks von Alza, Glamour Magazine und CB Insights.",
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
    useCases: ["Beauty & Skincare E-Commerce", "Kosmetik Review Blog", "Make-up Artist Portfolio", "Naturkosmetik Marke", "Beauty Influencer Plattform", "Schönheitssalon Kette", "K-Beauty & J-Beauty Import", "Vegane Kosmetik Webshop", "Beauty Box Abo-Service", "Kosmetik Inhaltsstoffe Datenbank"]
  },
  {
    name: "rtmpilecki.eu",
    description: "Historische/kulturelle EU-Domain mit Backlinks von Wikipedia (ES, ID, ZH), polnischer Regierung und Thread Reader.",
    mozScore: 30,
    pageAuthority: 27,
    linkingDomains: 96,
    inboundLinks: "199+",
    followedLinks: "95+",
    category: "Kultur",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "199+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "gov.pl (DA 91)", "threadreaderapp.com (DA 78)", "gloria.tv (DA 69)", "dbpedia.org (DA 65)"]
  },
  {
    name: "friendsofthesupergrid.eu",
    description: "Energie- und Infrastruktur-EU-Domain mit Backlinks von Wikipedia, CNET, IEEE und The Conversation.",
    mozScore: 30,
    pageAuthority: 30,
    linkingDomains: 297,
    inboundLinks: "156.1K+",
    followedLinks: "155.8K+",
    category: "Energie",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/9B6cN54Pl5mu9GZe549Zm0l",
    backlinks: "156.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnet.com (DA 93)", "theconversation.com (DA 92)", "ieee.org (DA 92)", "corriere.it (DA 92)"]
  },
  {
    name: "eureka-hvacr.eu",
    description: "HVAC- und Klimatechnik-EU-Domain mit Backlinks von Ow.ly, EurActiv und Danfoss.",
    mozScore: 30,
    pageAuthority: 23,
    linkingDomains: 80,
    inboundLinks: "375+",
    followedLinks: "357+",
    category: "Technologie",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "375+",
    topBacklinks: ["ow.ly (DA 90)", "euractiv.com (DA 84)", "campaign-archive.com (DA 84)", "danfoss.com (DA 69)", "coleurope.eu (DA 57)"]
  },
  {
    name: "partymenu.eu",
    description: "EU Catering/Event-Domain mit Backlinks von Google.sk, Wikiwand, RA.co und Pravda.sk.",
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
    description: "Sicherheit und Notfallplanung EU-Domain mit Backlinks von Europa.eu, El País, Springer und KU Leuven.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 99,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Sicherheit",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.7K+",
    topBacklinks: ["europa.eu (DA 97)", "elpais.com (DA 94)", "springer.com (DA 93)", "mdpi.com (DA 92)", "xataka.com (DA 90)"]
  },
  {
    name: "greenweek2010.eu",
    description: "Nachhaltigkeits-Domain mit Backlinks von Europa.eu, EurekAlert, RAI und AAAS.",
    mozScore: 29,
    pageAuthority: 28,
    linkingDomains: 109,
    inboundLinks: "259+",
    followedLinks: "249+",
    category: "Nachhaltigkeit",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "259+",
    topBacklinks: ["europa.eu (DA 97)", "eurekalert.org (DA 91)", "rai.it (DA 81)", "au.dk (DA 77)", "aaas.org (DA 76)"]
  },
  {
    name: "bryn-somersethouse.co.uk",
    description: "Britische Immobilien/Hospitality-Domain mit Backlinks von Forbes, The Guardian, Evening Standard und Time Out.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 96,
    inboundLinks: "167+",
    followedLinks: "132+",
    category: "Immobilien",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "167+",
    topBacklinks: ["forbes.com (DA 94)", "theguardian.com (DA 94)", "standard.co.uk (DA 93)", "timeout.com (DA 92)", "thetimes.com (DA 92)"]
  },
  {
    name: "euforistudy.eu",
    description: "Bildungs-EU-Studien-Domain mit Backlinks von The Guardian, Trinity College Dublin und VU Amsterdam.",
    mozScore: 29,
    pageAuthority: 27,
    linkingDomains: 72,
    inboundLinks: "215+",
    followedLinks: "170+",
    category: "Bildung",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "215+",
    topBacklinks: ["theguardian.com (DA 94)", "ask.com (DA 88)", "tcd.ie (DA 86)", "vu.nl (DA 76)", "muni.cz (DA 74)"]
  },
  {
    name: "beatassist.eu",
    description: "Musikproduktions-Domain mit Backlinks von Google Sites, Scoop.it, Envato und MusicRadar.",
    mozScore: 29,
    pageAuthority: 29,
    linkingDomains: 164,
    inboundLinks: "1.5K+",
    followedLinks: "1.2K+",
    category: "Musik/Audio",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.5K+",
    topBacklinks: ["sites.google.com (DA 96)", "scoop.it (DA 92)", "envato.com (DA 91)", "informer.com (DA 90)", "codecanyon.net (DA 83)"]
  },
  {
    name: "energaware.eu",
    description: "Energiebewusstseins-EU-Projekt-Domain mit Backlinks von Europa.eu, UOL, El País und Le Figaro.",
    mozScore: 29,
    pageAuthority: 26,
    linkingDomains: 61,
    inboundLinks: "15.1K+",
    followedLinks: "15.1K+",
    category: "Energie",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "15.1K+",
    topBacklinks: ["europa.eu (DA 97)", "uol.com.br (DA 95)", "elpais.com (DA 94)", "lefigaro.fr (DA 93)", "mdpi.com (DA 92)"]
  },
  {
    name: "5gmedia.eu",
    description: "Telekommunikation/Medien-Domain mit Backlinks von Medium, IBM, Telefónica und Universitäten.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 69,
    inboundLinks: "338+",
    followedLinks: "265+",
    category: "Technologie",
    price: "€675",
    stripePaymentLink: "https://buy.stripe.com/cNi00jdlR9CK5qJf989Zm0k",
    backlinks: "338+",
    topBacklinks: ["medium.com (DA 95)", "ibm.com (DA 93)", "telefonica.com (DA 79)", "upv.es (DA 79)", "upm.es (DA 78)"]
  },
  {
    name: "finnovaregio.eu",
    description: "Finanzinnovation EU-Regions-Domain mit Backlinks von Crunchbase, Splashthat und Climate-KIC.",
    mozScore: 29,
    pageAuthority: 20,
    linkingDomains: 41,
    inboundLinks: "156+",
    followedLinks: "143+",
    category: "Finanzen",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "156+",
    topBacklinks: ["goo.gl (DA 95)", "crunchbase.com (DA 91)", "splashthat.com (DA 86)", "emprendedores.es (DA 66)", "climate-kic.org (DA 64)"]
  },
  {
    name: "worth-project.eu",
    description: "Design- und Innovationsprojekt-Domain mit Backlinks von Europa.eu, Euronews, AngelList und UAL Arts.",
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
    description: "EU-Mobilität/Parken-Domain mit Backlinks von Europa.eu, Medium, Zeit.de und Thread Reader.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 107,
    inboundLinks: "320+",
    followedLinks: "292+",
    category: "Mobilität",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "320+",
    topBacklinks: ["europa.eu (DA 97)", "medium.com (DA 95)", "zeit.de (DA 91)", "threadreaderapp.com (DA 78)", "eur.nl (DA 68)"]
  },
  // DA 28
  {
    name: "bovisadrivein.it",
    description: "Italienische Unterhaltungs-Domain mit Backlinks von Behance, Giphy, Corriere und MyMovies.",
    mozScore: 28,
    pageAuthority: 22,
    linkingDomains: 52,
    inboundLinks: "78+",
    followedLinks: "60+",
    category: "Unterhaltung",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "78+",
    topBacklinks: ["behance.net (DA 93)", "giphy.com (DA 92)", "corriere.it (DA 92)", "ilgiornale.it (DA 85)", "elledecor.com (DA 81)"]
  },
  {
    name: "resurbis.eu",
    description: "EU-Domain für Nachhaltigkeit mit Backlinks von Europa.eu, MDPI, EurekAlert und Wired.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 87,
    inboundLinks: "185+",
    followedLinks: "153+",
    category: "Nachhaltigkeit",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "185+",
    topBacklinks: ["europa.eu (DA 97)", "mdpi.com (DA 92)", "eurekalert.org (DA 91)", "wired.it (DA 90)", "ub.edu (DA 86)"]
  },
  {
    name: "eu-sabana.eu",
    description: "Nachhaltige Landwirtschaft EU-Projekt-Domain mit Backlinks von Europa.eu, The Conversation und Frontiers.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 69,
    inboundLinks: "413+",
    followedLinks: "397+",
    category: "Landwirtschaft",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "413+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "frontiersin.org (DA 92)", "diarioinformacion.com (DA 82)", "informacion.es (DA 78)"]
  },
  {
    name: "ellinikiglossa.eu",
    description: "Griechische Sprach/Kultur-Domain mit starken Backlinks von Wikipedia, UCI.edu und Universitäten.",
    mozScore: 28,
    pageAuthority: 31,
    linkingDomains: 164,
    inboundLinks: "4.1K+",
    followedLinks: "4K+",
    category: "Sprache/Kultur",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "4.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "uci.edu (DA 91)"]
  },
  {
    name: "bringaexpo.eu",
    description: "Ungarische Fahrrad/Expo-Domain mit starken Backlinks von Origo.hu, Velvet.hu, Network.hu und anderen ungarischen Medienwebsites.",
    mozScore: 27,
    pageAuthority: 25,
    linkingDomains: 79,
    inboundLinks: "551+",
    followedLinks: "513+",
    category: "Sport/Veranstaltungen",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "551+",
    topBacklinks: ["origo.hu (DA 72)", "velvet.hu (DA 60)", "network.hu (DA 57)", "femcafe.hu (DA 56)", "hwsw.hu (DA 56)"]
  },
  {
    name: "movecare-project.eu",
    description: "Pflege- und Mobilitäts-EU-Projekt-Domain mit Backlinks von Springer, MDPI, Il Fatto Quotidiano und italienischen Universitäten.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "117+",
    followedLinks: "97+",
    category: "Gesundheit",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "117+",
    topBacklinks: ["springer.com (DA 93)", "mdpi.com (DA 92)", "ilfattoquotidiano.it (DA 90)", "unimi.it (DA 72)", "polimi.it (DA 71)"]
  },
  {
    name: "davidhughesillustration.co.uk",
    description: "Kreative UK-Domain mit Backlinks von The Guardian, Creative Bloq, ORF.at und Publishers Weekly.",
    mozScore: 28,
    pageAuthority: 27,
    linkingDomains: 157,
    inboundLinks: "3.9K+",
    followedLinks: "3.9K+",
    category: "Kunst/Design",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "3.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "creativebloq.com (DA 86)", "orf.at (DA 86)", "librarything.com (DA 80)", "publishersweekly.com (DA 77)"]
  },
  {
    name: "centremlm.be",
    description: "Belgische Zentrums-Domain mit Backlinks von Wikipedia (FR, IT, NL), Le Figaro und Wiktionary.",
    mozScore: 28,
    pageAuthority: 28,
    linkingDomains: 182,
    inboundLinks: "9.6K+",
    followedLinks: "9.3K+",
    category: "Allgemein",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "9.6K+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "it.wikipedia.org (DA 93)", "wiktionary.org (DA 93)", "lefigaro.fr (DA 93)", "nl.wikipedia.org (DA 91)"]
  },
  {
    name: "epc2018.be",
    description: "Belgische Event-Domain mit Backlinks von TinyURL, UB.edu, Lund Universität und Confex.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 57,
    inboundLinks: "136+",
    followedLinks: "121+",
    category: "Veranstaltungen",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "136+",
    topBacklinks: ["tinyurl.com (DA 94)", "ub.edu (DA 86)", "lu.se (DA 79)", "confex.com (DA 73)", "sdu.dk (DA 71)"]
  },
  {
    name: "youthstartproject.eu",
    description: "Bildungs/Jugend-Projekt-Domain mit Backlinks von Europa.eu, Campaign Archive, Observador und OpenEdition.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 64,
    inboundLinks: "2.9K+",
    followedLinks: "2.8K+",
    category: "Bildung",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "2.9K+",
    topBacklinks: ["europa.eu (DA 97)", "campaign-archive.com (DA 84)", "observador.pt (DA 84)", "openedition.org (DA 78)", "wort.lu (DA 75)"]
  },
  // DA 27
  {
    name: "spanvis.nl",
    description: "Niederländische Domain mit Backlinks von Wikipedia (EN, RU, NL), Wikiwand und XS4All.",
    mozScore: 27,
    pageAuthority: 29,
    linkingDomains: 241,
    inboundLinks: "2.1K+",
    followedLinks: "1.9K+",
    category: "Allgemein",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "ru.wikipedia.org (DA 94)", "nl.wikipedia.org (DA 91)", "wikiwand.com (DA 85)", "xs4all.nl (DA 79)"]
  },
  {
    name: "seatglobal.eu",
    description: "Internationale Mobilitäts/Transport-Domain mit Backlinks von Europa.eu, Springer, PLOS und Phys.org.",
    mozScore: 27,
    pageAuthority: 29,
    linkingDomains: 123,
    inboundLinks: "4.8K+",
    followedLinks: "4.7K+",
    category: "Transport",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "4.8K+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "plos.org (DA 93)", "salon.com (DA 91)", "phys.org (DA 91)"]
  },
  {
    name: "arcomem.eu",
    description: "Digitales Archiv EU-Projekt-Domain mit Backlinks von Wikipedia, Europa.eu, W3.org, SlideShare und Oxford.",
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
    description: "Baltische Region EU-Kooperations-Domain mit Backlinks von Europa.eu, Wikipedia DE, Ask.com und Rzeczpospolita.",
    mozScore: 27,
    pageAuthority: 31,
    linkingDomains: 155,
    inboundLinks: "44.2K+",
    followedLinks: "37.2K+",
    category: "International",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "44.2K+",
    topBacklinks: ["europa.eu (DA 97)", "de.wikipedia.org (DA 94)", "ask.com (DA 88)", "rp.pl (DA 82)", "worldwidetopsite.com (DA 71)"]
  },
  {
    name: "transitionproject.eu",
    description: "Übergang und Veränderung EU-Projekt-Domain mit Backlinks von Europa.eu, Eventbrite, Storify und Sheffield Universität.",
    mozScore: 27,
    pageAuthority: 28,
    linkingDomains: 75,
    inboundLinks: "207+",
    followedLinks: "179+",
    category: "Projekte",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "207+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "eventbrite.com (DA 93)", "storify.com (DA 90)", "shef.ac.uk (DA 79)"]
  },
  {
    name: "expo-2050.be",
    description: "Belgische Expo/Ausstellungs-Domain mit Backlinks von The Conversation, Radio France, RTBF und La Libre.",
    mozScore: 27,
    pageAuthority: 27,
    linkingDomains: 96,
    inboundLinks: "210+",
    followedLinks: "182+",
    category: "Veranstaltungen",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "210+",
    topBacklinks: ["theconversation.com (DA 92)", "radiofrance.fr (DA 92)", "theculturetrip.com (DA 89)", "rtbf.be (DA 89)", "lalibre.be (DA 84)"]
  },
  {
    name: "iceel.eu",
    description: "EU-Domain mit Backlinks von Europa.eu, France Info, CNRS und französischen Universitäten.",
    mozScore: 27,
    pageAuthority: 30,
    linkingDomains: 130,
    inboundLinks: "3.6K+",
    followedLinks: "3.5K+",
    category: "Allgemein",
    price: "€450",
    stripePaymentLink: "https://buy.stripe.com/fZu14n6Xt7uCf1j9OO9Zm0j",
    backlinks: "3.6K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "cnrs.fr (DA 90)", "psl.eu (DA 78)", "education.fr (DA 77)"]
  },
  {
    name: "eustartupvillageforum.eu",
    description: "Startup- und Innovations-EU-Forum-Domain mit Backlinks von Europa.eu, Pages.dev, Campaign Archive und Silicon Republic.",
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
    description: "Umwelt- und Natur-EU-Projekt-Domain mit Backlinks von Europa.eu, FranceInfo, Campaign Archive und Midi Libre.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 54,
    inboundLinks: "67.8K+",
    followedLinks: "67.8K+",
    category: "Umwelt",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "67.8K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "campaign-archive.com (DA 84)", "midilibre.fr (DA 81)", "developpement-durable.gouv.fr (DA 74)"]
  },
  // DA 26
  {
    name: "covenant-capacity.eu",
    description: "EU-Konvent und Kapazitätsaufbau-Domain mit Backlinks von Europa.eu, BT, MyNewsDesk und WWF Panda.",
    mozScore: 26,
    pageAuthority: 24,
    linkingDomains: 85,
    inboundLinks: "2.6K+",
    followedLinks: "2.5K+",
    category: "Zusammenarbeit",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.6K+",
    topBacklinks: ["europa.eu (DA 97)", "bt.com (DA 91)", "mynewsdesk.com (DA 89)", "campaign-archive.com (DA 84)", "panda.org (DA 77)"]
  },
  {
    name: "wetenschapbegintmetverwondering.nl",
    description: "Niederländische Wissenschaftskommunikations-Domain mit Backlinks von RUG, NU.nl und Nationale Wissenschaftsagenda.",
    mozScore: 27,
    pageAuthority: 24,
    linkingDomains: 52,
    inboundLinks: "97+",
    followedLinks: "81+",
    category: "Wissenschaft",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "97+",
    topBacklinks: ["rug.nl (DA 84)", "nu.nl (DA 91)", "wetenschapsagenda.nl (DA 65)"]
  },
  {
    name: "khresmoi.eu",
    description: "Medizinisches Such-EU-Projekt-Domain mit Backlinks von MDPI, Springer, BioMedCentral und Charles Universität.",
    mozScore: 27,
    pageAuthority: 32,
    linkingDomains: 184,
    inboundLinks: "31.7K+",
    followedLinks: "31.5K+",
    category: "Gesundheit",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "31.7K+",
    topBacklinks: ["mdpi.com (DA 92)", "springer.com (DA 93)", "biomedcentral.com (DA 91)", "cuni.cz (DA 85)"]
  },
  {
    name: "sialon.eu",
    description: "EU-Gesundheitsforschungs-Domain mit Backlinks von BBC, Europa.eu und The Conversation.",
    mozScore: 24,
    pageAuthority: 25,
    linkingDomains: 66,
    inboundLinks: "145+",
    followedLinks: "125+",
    category: "Gesundheit",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "145+",
    topBacklinks: ["bbc.co.uk (DA 95)", "europa.eu (DA 97)", "theconversation.com (DA 92)", "bbc.com (DA 94)"]
  },
  {
    name: "spaceinfoday.eu",
    description: "EU-Raumfahrt-Domain mit Backlinks von Wikipedia, Europa.eu, ESA, UCM und ORF.",
    mozScore: 26,
    pageAuthority: 24,
    linkingDomains: 77,
    inboundLinks: "6.4K+",
    followedLinks: "6.3K+",
    category: "Technologie",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "6.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "esa.int (DA 91)", "ucm.es (DA 89)", "orf.at (DA 86)"]
  },
  {
    name: "beehive-erasmusplus.eu",
    description: "Erasmus+ Bildungs-EU-Domain mit Backlinks von Pages.dev, Gameforge, GitBook und Universitäten.",
    mozScore: 26,
    pageAuthority: 34,
    linkingDomains: 452,
    inboundLinks: "6.2K+",
    followedLinks: "3.7K+",
    category: "Bildung",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "6.2K+",
    topBacklinks: ["sakura.ne.jp (DA 93)", "pages.dev (DA 91)", "biglobe.ne.jp (DA 91)", "gameforge.com (DA 90)", "gitbook.io (DA 85)"]
  },
  {
    name: "dunyaendesiedefilm.nl",
    description: "Niederländische Film/Medien-Domain mit Backlinks von Wikipedia (EN, JA), IPFS, FilmWeb und Cinemagia.",
    mozScore: 26,
    pageAuthority: 23,
    linkingDomains: 102,
    inboundLinks: "214+",
    followedLinks: "180+",
    category: "Medien",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "214+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "ja.wikipedia.org (DA 93)", "ipfs.io (DA 84)", "filmweb.pl (DA 80)", "csfd.cz (DA 72)"]
  },
  {
    name: "102touchfm.co.uk",
    description: "Britische Radio/Medien-Domain mit Backlinks von Wikipedia, BBC, Bit.ly, Foursquare und DigitalSpy.",
    mozScore: 26,
    pageAuthority: 30,
    linkingDomains: 292,
    inboundLinks: "11.8K+",
    followedLinks: "8.8K+",
    category: "Medien",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "11.8K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "bbc.co.uk (DA 95)", "bit.ly (DA 94)", "foursquare.com (DA 92)", "digitalspy.com (DA 88)"]
  },
  {
    name: "tca2000.co.uk",
    description: "Britische Domain mit Backlinks von Wikipedia (EN, FR, JA, PL), Fandom und DigitalSpy.",
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
    description: "Belgische Netzwerk-Domain mit Backlinks von Europa.eu, Wikipedia (ES, FR), Yumpu und Google.be.",
    mozScore: 26,
    pageAuthority: 28,
    linkingDomains: 135,
    inboundLinks: "710+",
    followedLinks: "445+",
    category: "Netzwerk",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "710+",
    topBacklinks: ["europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "jimdofree.com (DA 95)", "yumpu.com (DA 91)"]
  },
  // DA 25
  {
    name: "gastrosafezone.eu",
    description: "Design- und Gastronomie-Sicherheits-Domain mit Backlinks von CNN, The Conversation, Pagina12 und Elle Decor.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 47,
    inboundLinks: "66+",
    followedLinks: "58+",
    category: "Design/Gastronomie",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "66+",
    topBacklinks: ["cnn.com (DA 94)", "theconversation.com (DA 92)", "realty.rbc.ru (DA 88)", "pagina12.com.ar (DA 82)", "elledecor.com (DA 80)"]
  },
  {
    name: "hotelgiotto.eu",
    description: "Gastgewerbe-Domain mit Backlinks von Pages.dev, Wikitravel, Groupon UK und Travellerspoint.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 78,
    inboundLinks: "284+",
    followedLinks: "198+",
    category: "Gastgewerbe",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "284+",
    topBacklinks: ["pages.dev (DA 91)", "wikitravel.org (DA 79)", "groupon.co.uk (DA 76)", "groupon.fr (DA 63)", "travellerspoint.com (DA 60)"]
  },
  {
    name: "recharge-green.eu",
    description: "Grüne Energie und Aufladen EU-Domain mit Backlinks von Google Groups, MDPI, BioMedCentral und FAO.",
    mozScore: 25,
    pageAuthority: 28,
    linkingDomains: 128,
    inboundLinks: "5.5K+",
    followedLinks: "5.5K+",
    category: "Energie",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "5.5K+",
    topBacklinks: ["groups.google.com (DA 93)", "mdpi.com (DA 92)", "biomedcentral.com (DA 91)", "fao.org (DA 91)", "bayern.de (DA 89)"]
  },
  {
    name: "brave-project.eu",
    description: "EU-Projekt-Domain mit Backlinks von Europa.eu, El Diario, Stuttgarter Zeitung und Universitäten.",
    mozScore: 24,
    pageAuthority: 24,
    linkingDomains: 73,
    inboundLinks: "194+",
    followedLinks: "133+",
    category: "Projekte",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "194+",
    topBacklinks: ["europa.eu (DA 97)", "eldiario.es (DA 91)", "stuttgarter-zeitung.de (DA 81)", "techxplore.com (DA 79)", "uah.es (DA 70)"]
  },
  {
    name: "aaliance.eu",
    description: "Gesundheitswesen/Seniorenpflege-EU-Domain mit Backlinks von Europa.eu, Cambridge, Springer, Heise und EurActiv.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 69,
    inboundLinks: "227+",
    followedLinks: "163+",
    category: "Gesundheit",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "227+",
    topBacklinks: ["europa.eu (DA 97)", "cambridge.org (DA 93)", "springer.com (DA 93)", "heise.de (DA 91)", "euractiv.com (DA 84)"]
  },
  {
    name: "unamec.be",
    description: "Belgische Medizin/Pflege-Domain mit Backlinks von OUP, Yumpu, KU Leuven und UGent.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 93,
    inboundLinks: "188+",
    followedLinks: "150+",
    category: "Gesundheit",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "188+",
    topBacklinks: ["oup.com (DA 93)", "yumpu.com (DA 91)", "kuleuven.be (DA 83)", "ugent.be (DA 76)", "justlanded.com (DA 76)"]
  },
  {
    name: "josephines.be",
    description: "Belgische Lifestyle/Gastgewerbe-Domain mit Backlinks von Mixcloud, De Standaard und Elle.be.",
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
    description: "Historische WK1-Gedenkstätten-Domain mit Backlinks von Wikipedia (FR, DE), StackExchange, FranceInfo und INRIA.",
    mozScore: 25,
    pageAuthority: 27,
    linkingDomains: 122,
    inboundLinks: "443+",
    followedLinks: "318+",
    category: "Geschichte",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "443+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "stackexchange.com (DA 91)", "franceinfo.fr (DA 91)", "inria.fr (DA 83)"]
  },
  {
    name: "serletproject.eu",
    description: "EU-Projekt-Domain mit Backlinks von Apple.com, Bit.ly, RTL.fr und Wikipedia Griechisch.",
    mozScore: 25,
    pageAuthority: 30,
    linkingDomains: 491,
    inboundLinks: "2K+",
    followedLinks: "1.9K+",
    category: "Innovation",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "2K+",
    topBacklinks: ["apple.com (DA 99)", "bit.ly (DA 94)", "home.pl (DA 93)", "cocolog-nifty.com (DA 90)", "rtl.fr (DA 89)"]
  },
  {
    name: "landmark-project.eu",
    description: "EU-Projekt-Domain mit Backlinks von Europa.eu, Wikipedia DE, Cambridge und Yumpu.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 161,
    inboundLinks: "1.1K+",
    followedLinks: "954+",
    category: "Projekte",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "1.1K+",
    topBacklinks: ["europa.eu (DA 97)", "goo.gl (DA 95)", "de.wikipedia.org (DA 94)", "cambridge.org (DA 93)", "yumpu.com (DA 91)"]
  },
  {
    name: "tandemtech.be",
    description: "Belgische Tech-Domain mit Backlinks von Medium, TinyURL, Bit.ly, Tweakers und Knack.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 61,
    inboundLinks: "613+",
    followedLinks: "565+",
    category: "Technologie",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "613+",
    topBacklinks: ["medium.com (DA 95)", "tinyurl.com (DA 94)", "bit.ly (DA 94)", "about.me (DA 92)", "pages.dev (DA 91)"]
  },
  {
    name: "happyvpro.nl",
    description: "Niederländische Medien-Domain mit Backlinks von TinyURL, Ello, XS4ALL, Emerce und VPRO.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 74,
    inboundLinks: "1.5K+",
    followedLinks: "1.4K+",
    category: "Medien",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "1.5K+",
    topBacklinks: ["tinyurl.com (DA 94)", "ello.co (DA 85)", "xs4all.nl (DA 79)", "emerce.nl (DA 69)", "vpro.nl (DA 68)"]
  },
  {
    name: "edlupt.eu",
    description: "EU-Domain mit Backlinks von Pinterest, ANSA, RUG Groningen und italienischen Universitäten.",
    mozScore: 25,
    pageAuthority: 28,
    linkingDomains: 192,
    inboundLinks: "119.7K+",
    followedLinks: "119.6K+",
    category: "Allgemein",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "119.7K+",
    topBacklinks: ["pinterest.com (DA 94)", "ansa.it (DA 91)", "rug.nl (DA 81)", "cnr.it (DA 75)", "unito.it (DA 70)"]
  },
  {
    name: "xcycle-h2020.eu",
    description: "EU H2020 Mobilitäts-Domain mit Backlinks von Europa.eu, Springer, MDPI und Frontiers.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 145,
    inboundLinks: "275+",
    followedLinks: "202+",
    category: "Mobilität",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "275+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "mdpi.com (DA 92)", "frontiersin.org (DA 92)", "euractiv.com (DA 84)"]
  },
  {
    name: "heinekenthecity.nl",
    description: "Niederländische Städtische/Lifestyle-Domain mit Backlinks von Dezeen, Symbaloo, Fodors und VPRO.",
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
    description: "Fotografie-EU-Domain mit Backlinks von E-Monsite, JournalDuNet, CNRS und Wikipedia SV.",
    mozScore: 24,
    pageAuthority: 31,
    linkingDomains: 578,
    inboundLinks: "4.6K+",
    followedLinks: "3.8K+",
    category: "Fotografie",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "4.6K+",
    topBacklinks: ["e-monsite.com (DA 92)", "home.blog (DA 91)", "journaldunet.com (DA 91)", "cnrs.fr (DA 90)", "allthatsinteresting.com (DA 85)"]
  },
  {
    name: "eulis.eu",
    description: "EU-Domain mit Backlinks von Wikipedia (EN, ES, PT, FR), Europa.eu und MDPI.",
    mozScore: 24,
    pageAuthority: 33,
    linkingDomains: 246,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Allgemein",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "1.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "pt.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)"]
  },
  {
    name: "maribe.eu",
    description: "Maritime EU-Domain mit Backlinks von Europa.eu, The Conversation, MDPI und Bristol Universität.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 90,
    inboundLinks: "146+",
    followedLinks: "115+",
    category: "Maritim",
    price: "€125",
    backlinks: "146+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "mdpi.com (DA 92)", "siliconrepublic.com (DA 83)", "bristol.ac.uk (DA 78)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "200jaarstaten-generaal.nl",
    description: "Niederländische Regierungs-Domain mit Backlinks von NOS, Universität Leiden und Zweite Kammer.",
    mozScore: 22,
    pageAuthority: 21,
    linkingDomains: 37,
    inboundLinks: "150+",
    followedLinks: "136+",
    category: "Regierung/Kultur",
    price: "€125",
    backlinks: "150+",
    topBacklinks: ["nos.nl (DA 90)", "universiteitleiden.nl (DA 82)", "transparent.com (DA 76)", "tweedekamer.nl (DA 64)", "rd.nl (DA 62)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eu-thor.eu",
    description: "EU-Projekt-Domain mit Backlinks von Wikipedia (EN, FR, DE), Europa.eu, Yumpu und WHOI.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 156,
    inboundLinks: "18.4K+",
    followedLinks: "18.3K+",
    category: "Projekte",
    price: "€125",
    backlinks: "18.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "yumpu.com (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eccomascfd2006.nl",
    description: "Niederländische technische Domain mit Backlinks von TU Delft, Southampton, Liverpool und NTNU.",
    mozScore: 23,
    pageAuthority: 25,
    linkingDomains: 52,
    inboundLinks: "371+",
    followedLinks: "352+",
    category: "Technologie",
    price: "€125",
    backlinks: "371+",
    topBacklinks: ["tudelft.nl (DA 85)", "soton.ac.uk (DA 85)", "uu.se (DA 83)", "liverpool.ac.uk (DA 83)", "ntnu.no (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "mbelgique.be",
    description: "Belgische nationale Domain mit Backlinks von Wikipedia FR, BFMTV, Heise, NU.nl und Europe1.",
    mozScore: 23,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "113+",
    followedLinks: "87+",
    category: "Allgemein",
    price: "€125",
    backlinks: "113+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "bfmtv.com (DA 92)", "heise.de (DA 91)", "nu.nl (DA 91)", "europe1.fr (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "lifemanev.eu",
    description: "EU-Projekt-Domain über nachhaltige Landwirtschaft mit Backlinks von MDPI, ITACYL und CSIC.",
    mozScore: 23,
    pageAuthority: 24,
    linkingDomains: 40,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "Nachhaltigkeit",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["mdpi.com (DA 92)", "itacyl.es (DA 45)", "cebas.csic.es (DA 42)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  // DA 22
  {
    name: "bruegel2019.be",
    description: "Kulturerbe-Domain mit Backlinks von Campaign Archive, Knack.be und Brusselslife.",
    mozScore: 22,
    pageAuthority: 24,
    linkingDomains: 42,
    inboundLinks: "323+",
    followedLinks: "312+",
    category: "Kunst/Erbe",
    price: "€125",
    backlinks: "323+",
    topBacklinks: ["campaign-archive.com (DA 84)", "knack.be (DA 77)", "tntcode.com (DA 61)", "tvl.be (DA 52)", "brusselslife.be (DA 52)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "infoecmi.eu",
    description: "EU-Informations-Domain mit Backlinks von Wikipedia (EN, ES, PT, RU, DE), UCL und ETH Zürich.",
    mozScore: 22,
    pageAuthority: 31,
    linkingDomains: 259,
    inboundLinks: "1.2K+",
    followedLinks: "727+",
    category: "Information",
    price: "€125",
    backlinks: "1.2K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "pt.wikipedia.org (DA 96)", "ru.wikipedia.org (DA 94)", "ucl.ac.uk (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "romain-roquette.be",
    description: "Belgische persönliche/Portfolio-Domain mit Backlinks von Airbnb, Foursquare, The Culture Trip und Knack.be.",
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
    description: "Deutsche/EU-Lokalverwaltungs-Domain mit Backlinks von Wikipedia (EN, ES, FR, RU, NL), Bit.ly und Creative Commons.",
    mozScore: 22,
    pageAuthority: 32,
    linkingDomains: 810,
    inboundLinks: "4.9K+",
    followedLinks: "4.7K+",
    category: "Regierung",
    price: "€125",
    backlinks: "4.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "ru.wikipedia.org (DA 94)", "creativecommons.org (DA 94)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "europeanmuseumforum.eu",
    description: "Europäisches Museumsforum-Domain mit Backlinks von Wikipedia (EN, ES, FR, RU, NL), Bit.ly und Creative Commons.",
    mozScore: 22,
    pageAuthority: 32,
    linkingDomains: 810,
    inboundLinks: "4.9K+",
    followedLinks: "4.7K+",
    category: "Kultur",
    price: "€125",
    backlinks: "4.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "ru.wikipedia.org (DA 94)", "creativecommons.org (DA 94)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "escmalta2018.eu",
    description: "ESC-Event-Domain mit Backlinks von ETH Zürich, Azure, Copernicus, CSIC und Monash Universität.",
    mozScore: 22,
    pageAuthority: 25,
    linkingDomains: 102,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "Veranstaltungen",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["ethz.ch (DA 89)", "azure.com (DA 84)", "copernicus.eu (DA 83)", "csic.es (DA 78)", "monash.edu (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eurasiancouncilforeignaffairs.eu",
    description: "Internationale Beziehungen-Domain mit Backlinks von Wikipedia (EN, ES, FR, ZH), Cambridge und The Diplomat.",
    mozScore: 23,
    pageAuthority: 23,
    linkingDomains: 65,
    inboundLinks: "184+",
    followedLinks: "98+",
    category: "International",
    price: "€125",
    backlinks: "184+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "bit.ly (DA 94)", "cam.ac.uk (DA 92)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "waterpipp.eu",
    description: "Wasser- und Umwelt-EU-Projekt-Domain mit Backlinks von Europa.eu, Bit.ly, Ask.com und Campaign Archive.",
    mozScore: 22,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "1.2K+",
    followedLinks: "1.1K+",
    category: "Umwelt",
    price: "€125",
    backlinks: "1.2K+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "ask.com (DA 88)", "campaign-archive.com (DA 84)", "worldwidetopsite.com (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "artsalivewales.org.uk",
    description: "Walisische Kunst/Kultur-Domain mit Backlinks von The Guardian, Mirror, Eventbrite und Wales Online.",
    mozScore: 22,
    pageAuthority: 27,
    linkingDomains: 116,
    inboundLinks: "863+",
    followedLinks: "752+",
    category: "Kunst",
    price: "€125",
    backlinks: "863+",
    topBacklinks: ["theguardian.com (DA 94)", "mirror.co.uk (DA 94)", "eventbrite.co.uk (DA 91)", "walesonline.co.uk (DA 90)", "constantcontact.com (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  // DA 21
  {
    name: "stationlansingerland-zoetermeer.nl",
    description: "Niederländische Transport/Bahnhof-Domain mit Backlinks von Wikipedia (FR, NL), NS, Nieuws.nl und ProRail.",
    mozScore: 21,
    pageAuthority: 24,
    linkingDomains: 62,
    inboundLinks: "187+",
    followedLinks: "134+",
    category: "Transport",
    price: "€79",
    backlinks: "187+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "nl.wikipedia.org (DA 91)", "ns.nl (DA 72)", "nieuws.nl (DA 63)", "prorail.nl (DA 55)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "oramed-fp7.eu",
    description: "Medizinische Forschung EU-FP7 Projekt-Domain mit Backlinks von Europa.eu, Springer, IIT und FGOV.be.",
    mozScore: 21,
    pageAuthority: 24,
    linkingDomains: 60,
    inboundLinks: "130+",
    followedLinks: "109+",
    category: "Forschung",
    price: "€79",
    backlinks: "130+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "iit.edu (DA 75)", "fgov.be (DA 72)", "upc.edu (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "ismagazine.nl",
    description: "Niederländische Magazin/Medien-Domain mit Backlinks von UNESCO, WUR und Startpagina.",
    mozScore: 21,
    pageAuthority: 20,
    linkingDomains: 56,
    inboundLinks: "496+",
    followedLinks: "339+",
    category: "Medien",
    price: "€79",
    backlinks: "496+",
    topBacklinks: ["unesco.org (DA 93)", "wur.nl (DA 71)", "jouwweb.nl (DA 63)", "startpagina.nl (DA 63)", "fok.nl (DA 59)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "wbetting.co.uk",
    description: "Britische Wetten/Gaming-Domain mit Backlinks von OVH, Joomla.org, WSU und CSIC.",
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
    description: "Niederländische Sport/Gymnastik-Domain mit Backlinks von LiveInternet, Pages.dev, XSRV und Toolforge.",
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
    description: "Nanotechnologie-EU-Projekt-Domain mit Backlinks von Springer, Sapo.pt, Pages.dev und Universitäten (UPM, UC3M).",
    mozScore: 21,
    pageAuthority: 28,
    linkingDomains: 76,
    inboundLinks: "338+",
    followedLinks: "306+",
    category: "Technologie",
    price: "€79",
    backlinks: "338+",
    topBacklinks: ["springer.com (DA 93)", "sapo.pt (DA 93)", "pages.dev (DA 91)", "upm.es (DA 78)", "uc3m.es (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  // DA 20
  {
    name: "espresso-project.eu",
    description: "Smart-City und Mobilitätsprojekt-Domain mit Backlinks von Europa.eu, Medium, MDPI und Telecom TV.",
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

const PremiumDomainsDE = () => {
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
      const firstError = Object.values(errorResult.errors)[0] || "Überprüfen Sie Ihre Eingabe";
      toast({
        title: "Bitte füllen Sie alle Pflichtfelder korrekt aus",
        description: firstError,
        variant: "destructive"
      });
      return;
    }

    const { data } = validation;
    
    const subject = `Premium Domain Anfrage: ${data.domain}`;
    const body = `Name: ${data.name}\nE-Mail: ${data.email}\nDomain: ${data.domain}\n\nNachricht:\n${data.message || ""}`;
    
    window.location.href = buildSafeMailtoUrl("support@iaee.eu", subject, body);
    
    toast({
      title: "Anfrage wird gesendet",
      description: "Ihr E-Mail-Programm wird geöffnet, um die Anfrage zu senden."
    });
  };

  const handleDomainInquiry = (domainName: string) => {
    setFormData(prev => ({ ...prev, domain: domainName }));
    scrollToSection("contact");
  };

  return (
    <>
      <Helmet>
        <title>Premium Expired Domains mit Backlinks hoher Autorität & SEO-Wert kaufen</title>
        <meta name="description" content="Expired Domain mit Backlinks kaufen? Zuverlässige expired Domains mit hoher Autorität und SEO-Wert. Premium Domain kaufen für schnellere Google-Rankings. Sofort verfügbar." />
        <meta name="keywords" content="expired domain kaufen, expired domains mit backlinks, domain mit autorität, zuverlässige expired domains, premium domain kaufen, domain mit SEO wert, alte domain mit links, beste domains zu kaufen" />
        <link rel="canonical" href="https://iaee.eu/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Language Switcher */}
        <LanguageSwitcher currentLanguage="de" />
        
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert" className="flex items-center gap-3">
              <Crown className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent hover:from-amber-300 hover:to-amber-500 transition-all">
                Premium Domains
              </span>
            </RouterLink>
            <nav className="hidden md:flex items-center gap-6">
              <RouterLink to="/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
                <Home className="h-4 w-4" />
                Startseite
              </RouterLink>
              <button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Domains
              </button>
              <button onClick={() => scrollToSection("why-premium")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Warum Premium?
              </button>
              <button onClick={() => scrollToSection("seo-redirects")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                SEO & Redirects
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold"
              >
                Kontakt
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-amber-500/10 text-amber-400 border-amber-500/30 px-4 py-2">
                <Star className="w-4 h-4 mr-2 inline" />
                Exklusive Kollektion Premium Domains
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Premium Expired Domains mit Backlinks hoher Autorität & SEO-Wert
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Stärken Sie Ihre Online-Präsenz mit Domainnamen, die bereits seit Jahren Autorität aufgebaut haben. 
                Ideal für schnellere Rankings, starke Backlinks und sofortige SEO-Vorteile.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("domains")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg px-8 py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-105"
                >
                  Domains ansehen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("why-premium")}
                  className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white text-lg px-8 py-6"
                >
                  Mehr Informationen
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Durchschnittlicher MOZ Score", value: "29+" },
                  { label: "Premium Domains", value: "110+" },
                  { label: "Jahre Erfahrung", value: "10+" },
                  { label: "Zufriedene Kunden", value: "500+" }
                ].map((stat, index) => (
                  <div key={index} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur">
                    <div className="text-2xl md:text-3xl font-bold text-amber-400">{stat.value}</div>
                    <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
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
                Verfügbare Domains
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Premium Domainnamen zum Verkauf
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Jede Domain ist sorgfältig nach MOZ-Autorität, Backlink-Profil und SEO-Potenzial ausgewählt. 
                Möchten Sie eine <strong className="text-white">expired Domain kaufen</strong> oder suchen Sie <strong className="text-white">zuverlässige expired Domains</strong>? Sehen Sie sich unser Angebot unten an.
              </p>
            </div>
            
            {/* SEO Intro Text */}
            <div className="max-w-5xl mx-auto mb-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">Auf der Suche nach einem Domainnamen mit echtem SEO-Wert?</strong> Bei uns kaufen Sie zuverlässige <strong className="text-amber-400">expired Domains mit Backlinks</strong> und hoher Autorität, sorgfältig auf Qualität und Historie geprüft. Mit einer expired Domain starten Sie nicht bei null, sondern profitieren sofort von bestehenden Links, Vertrauen und Online-Geschichte.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Neben expired Domains bieten wir auch <strong className="text-amber-400">Premium Domainnamen</strong> an: kurze, kraftvolle Namen mit Markenwert und kommerziellem Potenzial. Ob Sie eine Website, einen Webshop oder ein SEO-Projekt starten — ein <strong className="text-white">Domainname mit Autorität</strong> gibt Ihnen einen klaren Vorsprung bei Google.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                <strong className="text-white">Oft gesucht:</strong> expired domain mit backlinks kaufen • zuverlässige expired domains • expired domain mit autorität • premium domain kaufen • domain mit SEO wert • alte domain mit links • beste domains zu kaufen
              </p>
            </div>

            {/* VAT Notice */}
            <div className="max-w-5xl mx-auto mb-10 text-center">
              <p className="text-sm text-slate-300 font-medium bg-slate-800/40 border border-slate-700/40 rounded-lg px-4 py-3 inline-block">
                <span className="text-amber-400 font-semibold">MwSt.-Information:</span> Preise sind exklusive MwSt. für Privatkunden innerhalb der EU. Geschäftskunden innerhalb der EU können die MwSt. verlagern. Für Kunden außerhalb der EU wird keine MwSt. berechnet.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumDomains.map((domain, index) => (
                <Card 
                  key={index} 
                  className="h-full flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                        {domain.category}
                      </Badge>
                      <div className="flex items-center gap-1 bg-amber-500/10 px-2 py-1 rounded-full">
                        <BarChart3 className="w-3 h-3 text-amber-400" />
                        <span className="text-xs font-semibold text-amber-400">MOZ {domain.mozScore}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-amber-400 transition-colors mt-3">
                      {domain.name}
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      {domain.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Link className="w-4 h-4" />
                          <span>Backlinks: {domain.backlinks}</span>
                        </div>
                      </div>
                      
                      {domain.pageAuthority && (
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-slate-800/50 rounded px-2 py-1">
                            <span className="text-slate-500">Page Authority:</span>
                            <span className="text-white ml-1 font-medium">{domain.pageAuthority}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-2 py-1">
                            <span className="text-slate-500">Linking Domains:</span>
                            <span className="text-white ml-1 font-medium">{domain.linkingDomains}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-2 py-1">
                            <span className="text-slate-500">Inbound Links:</span>
                            <span className="text-white ml-1 font-medium">{domain.inboundLinks}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-2 py-1">
                            <span className="text-slate-500">Followed Links:</span>
                            <span className="text-white ml-1 font-medium">{domain.followedLinks}</span>
                          </div>
                        </div>
                      )}
                      
                      {/* Top backlinks */}
                      {domain.topBacklinks && domain.topBacklinks.length > 0 && (
                        <div className="text-xs">
                          <span className="text-slate-500 block mb-1">Top Backlinks:</span>
                          <div className="flex flex-col gap-1">
                            {domain.topBacklinks.slice(0, 5).map((link, i) => (
                              <Badge key={i} variant="outline" className="text-[10px] border-amber-500/30 text-amber-400/80 bg-amber-500/5 w-fit">
                                {link}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Use Cases */}
                      {domain.useCases && domain.useCases.length > 0 && (
                        <div className="text-xs">
                          <span className="text-slate-500 block mb-1">Geeignet für:</span>
                          <div className="flex flex-wrap gap-1">
                            {domain.useCases.map((useCase, i) => (
                              <Badge key={i} variant="outline" className="text-[10px] border-emerald-500/30 text-emerald-400/80 bg-emerald-500/5">
                                {useCase}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Price Display - Compact at bottom */}
                    <div className="mt-auto pt-4 border-t border-slate-700/50">
                      <div className="flex items-center justify-between mb-3 bg-slate-800/60 rounded-lg px-3 py-2">
                        <span className="text-sm font-medium text-slate-300">Preis</span>
                        <span className="text-lg font-bold text-amber-400">{domain.price}</span>
                      </div>
                      
                      {domain.stripePaymentLink ? (
                        <div className="flex flex-col gap-3">
                          <a 
                            href={domain.stripePaymentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold rounded-md transition-all duration-200 shadow-md hover:shadow-lg text-lg"
                          >
                            Jetzt Kaufen
                          </a>
                          <div className="flex flex-col items-center gap-2 text-center" data-nosnippet>
                            <div className="flex items-center justify-center gap-1 flex-wrap">
                              {/* Visa - Clear text logo */}
                              <div className="flex items-center bg-[#1A1F71] rounded px-1 py-0.5 h-4">
                                <span className="text-white font-bold text-[7px] italic tracking-tight" style={{fontFamily: 'Arial'}}>VISA</span>
                              </div>
                              {/* Mastercard - Clear circles */}
                              <div className="flex items-center bg-[#000000] rounded px-1 py-0.5 h-4">
                                <svg className="h-2.5 w-4" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="11" cy="10" r="8" fill="#EB001B"/>
                                  <circle cx="21" cy="10" r="8" fill="#F79E1B"/>
                                  <path d="M16 3.5C18.5 5.5 20 7.5 20 10C20 12.5 18.5 14.5 16 16.5C13.5 14.5 12 12.5 12 10C12 7.5 13.5 5.5 16 3.5Z" fill="#FF5F00"/>
                                </svg>
                              </div>
                              {/* PayPal - Clear text logo */}
                              <div className="flex items-center bg-[#003087] rounded px-1 py-0.5 h-4">
                                <span className="text-white font-bold text-[7px] italic" style={{fontFamily: 'Arial'}}>Pay</span>
                                <span className="text-[#00ADEF] font-bold text-[7px] italic" style={{fontFamily: 'Arial'}}>Pal</span>
                              </div>
                              {/* Amazon Pay - Clear logo */}
                              <div className="flex items-center bg-[#232F3E] rounded px-1 py-0.5 h-4">
                                <svg className="h-2.5 w-8" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <text x="2" y="13" fill="#FF9900" fontSize="10" fontWeight="bold" fontFamily="Arial">amazon</text>
                                  <path d="M2 16C8 18 16 19 24 18C28 17.5 32 16.5 35 15" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                                  <path d="M34 13L36 15L34 17" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                  <text x="38" y="13" fill="white" fontSize="8" fontFamily="Arial">pay</text>
                                </svg>
                              </div>
                              {/* Apple Pay - Clear logo */}
                              <div className="flex items-center bg-black rounded px-1 py-0.5 h-4">
                                <svg className="h-2.5 w-6" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.5 4C9.5 4 10.3 3.5 10.8 2.7C11.3 2 11.5 1 11.4 0C10.5 0.1 9.4 0.6 8.8 1.4C8.3 2 7.9 3 8 4C9 4 9.5 4 8.5 4Z" fill="white"/>
                                  <path d="M11.4 4.3C9.8 4.2 8.4 5.2 7.6 5.2C6.8 5.2 5.6 4.3 4.3 4.4C2.6 4.4 1 5.3 0.2 6.9C-1.5 10 0.1 14.5 1.7 17C2.5 18.2 3.5 19.6 4.8 19.5C6 19.5 6.5 18.7 8 18.7C9.5 18.7 10 19.5 11.3 19.5C12.6 19.5 13.5 18.2 14.3 17C15.2 15.7 15.6 14.4 15.6 14.3C15.6 14.3 12.5 13.1 12.5 9.6C12.5 6.5 15 5.1 15.1 5C13.8 3.1 11.8 4.3 11.4 4.3Z" fill="white"/>
                                  <text x="18" y="14" fill="white" fontSize="10" fontWeight="500" fontFamily="Arial">Pay</text>
                                </svg>
                              </div>
                              {/* Google Pay - Clear and readable */}
                              <div className="flex items-center bg-white rounded px-1 py-0.5 border border-slate-300 h-4">
                                <svg className="h-2.5 w-10" viewBox="0 0 65 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <text x="0" y="14" fontSize="11" fontWeight="500" fontFamily="Arial">
                                    <tspan fill="#4285F4">G</tspan>
                                    <tspan fill="#EA4335">o</tspan>
                                    <tspan fill="#FBBC05">o</tspan>
                                    <tspan fill="#4285F4">g</tspan>
                                    <tspan fill="#34A853">l</tspan>
                                    <tspan fill="#EA4335">e</tspan>
                                  </text>
                                  <text x="38" y="14" fill="#5F6368" fontSize="11" fontWeight="500" fontFamily="Arial">Pay</text>
                                </svg>
                              </div>
                              {/* Klarna - Clear logo */}
                              <div className="flex items-center bg-[#FFB3C7] rounded px-1 py-0.5 h-4">
                                <span className="text-black font-bold text-[7px]" style={{fontFamily: 'Arial'}}>Klarna</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <Lock className="w-3 h-3 text-slate-400" />
                              <div className="flex items-center bg-[#635BFF] rounded px-2 py-0.5">
                                <span className="text-white font-bold text-sm" style={{fontFamily: 'Arial'}}>stripe</span>
                              </div>
                            </div>
                            <div data-nosnippet>
                              <p className="text-[10px] text-slate-400 leading-tight mt-2">
                                Sichere Zahlung über Stripe
                                <br />
                                Automatisch in Ihre lokale Währung umgerechnet
                              </p>
                              <p className="text-[10px] text-slate-400 leading-tight mt-3">
                                Nach der Zahlung erhalten Sie innerhalb von 24 Stunden den Umzugstoken (EPP/Auth-Code) an Ihre E-Mail-Adresse.
                                <br />
                                Überprüfen Sie auch Ihren Spam-Ordner.
                              </p>
                              <a href="#domain-umziehen" className="text-[10px] text-amber-400 hover:text-amber-300 underline mt-2">
                                Wie funktioniert der Umzug?
                              </a>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Button 
                          onClick={() => handleDomainInquiry(domain.name)}
                          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold"
                        >
                          Anfragen
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
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
                Strategischer Vorteil
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Warum Premium Domainnamen?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Premium Domainnamen mit hoher MOZ-Autorität sind eine strategische Investition, die Ihnen einen enormen Vorsprung in den Suchergebnissen verschafft.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Schnellere Rankings bei Google",
                  description: "Domains mit bestehender Autorität ranken schneller als neue Domains. Google vertraut Websites mit nachgewiesener Erfolgsbilanz."
                },
                {
                  icon: Shield,
                  title: "Mehr Vertrauen bei Google",
                  description: "Eine Domain mit jahrelanger Geschichte und hochwertigen Backlinks wird von Google als vertrauenswürdiger angesehen und erhält höhere Rankings."
                },
                {
                  icon: Target,
                  title: "Höhere Klickraten (CTR)",
                  description: "Premium Domainnamen wecken Vertrauen bei Nutzern, was zu höheren Klickraten in Suchergebnissen und Anzeigen führt."
                },
                {
                  icon: Zap,
                  title: "Sofortiger SEO-Vorteil",
                  description: "Anstatt Jahre auf den Aufbau von Autorität zu warten, profitieren Sie sofort vom bestehenden SEO-Wert der Domain."
                },
                {
                  icon: Globe,
                  title: "Direkter Type-In Traffic",
                  description: "Einprägsame Premium-Domainnamen generieren direkten Traffic von Nutzern, die die Domain direkt in ihren Browser eingeben."
                },
                {
                  icon: Award,
                  title: "Nachhaltige SEO-Investition",
                  description: "Eine Premium-Domain ist ein Vermögenswert, der an Wert gewinnt, wenn Ihre Online-Präsenz wächst und die Autorität zunimmt."
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
                    Die Kraft der MOZ Domain Authority
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    MOZ Domain Authority (DA) ist ein Wert von 1-100, der vorhersagt, wie gut eine Website in Suchmaschinen ranken wird. 
                    Je höher der Score, desto mehr Autorität hat die Domain durch hochwertige Backlinks, Alter und Vertrauenswürdigkeit aufgebaut.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="rounded-lg bg-black border border-cyan-500/50 p-4 text-center">
                      <div className="text-xl font-bold text-cyan-400 mb-1">DA 20-25</div>
                      <div className="text-sm font-medium text-white">Gute Autorität</div>
                    </div>
                    
                    <div className="rounded-lg bg-black border border-yellow-500/50 p-4 text-center">
                      <div className="text-xl font-bold text-yellow-400 mb-1">DA 25-30</div>
                      <div className="text-sm font-medium text-white">Starke Autorität</div>
                    </div>
                    
                    <div className="rounded-lg bg-black border border-green-500/50 p-4 text-center">
                      <div className="text-xl font-bold text-green-400 mb-1">DA 30+</div>
                      <div className="text-sm font-medium text-white">Premium Autorität</div>
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
                SEO-Strategien
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Wie funktionieren SEO-Redirects und Autoritätsaufbau?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Es gibt mehrere strategische Möglichkeiten, Premium-Domains für maximale SEO-Wirkung einzusetzen.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "301-Redirect-Strategie",
                  description: "Ein 301-Redirect leitet allen SEO-Wert und alle Autorität der Premium-Domain an Ihre Hauptdomain weiter. Dies ist der schnellste Weg, Ihre Rankings zu verbessern.",
                  benefits: [
                    "Direkte Übertragung von Link Juice",
                    "Erhalt aller Backlinks",
                    "Schneller Autoritätsschub",
                    "Einmalige Einrichtung, dauerhafter Effekt"
                  ]
                },
                {
                  title: "Authority Stacking",
                  description: "Bauen Sie ein Netzwerk von autoritativen Domains auf, die alle auf Ihre Hauptseite verlinken. Dies schafft ein kraftvolles Ökosystem relevanter, hochwertiger Backlinks.",
                  benefits: [
                    "Mehrere Autoritätsquellen",
                    "Thematische Relevanz",
                    "Natürliches Linkprofil",
                    "Langfristige SEO-Strategie"
                  ]
                },
                {
                  title: "Als Hauptdomain verwenden",
                  description: "Starten Sie Ihr neues Projekt direkt mit einer Domain, die bereits Autorität hat. Dies spart Jahre an Linkbuilding und Domain-Alter-Aufbau.",
                  benefits: [
                    "Direkter Start mit Autorität",
                    "Bestehendes Vertrauen von Google",
                    "Schnellere Indexierung",
                    "Vorsprung vor der Konkurrenz"
                  ]
                },
                {
                  title: "Private Blog Network (PBN)",
                  description: "Nutzen Sie Premium-Domains, um wertvolle Content-Seiten aufzubauen, die starke Backlinks zu Ihrer Hauptseite generieren.",
                  benefits: [
                    "Volle Kontrolle über Backlinks",
                    "Thematische Content-Seiten",
                    "Diverse Linkprofile",
                    "Skalierbares Linkbuilding"
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
                  Warum diese Domains einzigartig sind
                </h3>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Unsere Premium-Domains sind sorgfältig ausgewählt und erfüllen strenge Qualitätsanforderungen.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { icon: Shield, title: "Saubere Historie", desc: "Keine Spam- oder Penalty-Vergangenheit" },
                  { icon: Link, title: "Hochwertige Backlinks", desc: "Von vertrauenswürdigen Quellen" },
                  { icon: BarChart3, title: "Hoher DA-Score", desc: "Mindestens DA 20+" },
                  { icon: Globe, title: "Relevante Nischen", desc: "Thematisch passende Domains" }
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
                Häufig gestellte Fragen
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                FAQ über Premium Domains & SEO
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Wo kann ich eine expired Domain mit Backlinks kaufen?",
                    answer: "Eine expired Domain mit Backlinks kaufen Sie am besten bei einem spezialisierten Verkäufer, der Domains manuell auf Qualität, Historie und Autorität prüft. So vermeiden Sie den Kauf eines Domainnamens mit Spam-Links oder SEO-Problemen. Wir bieten nur zuverlässige expired Domains an, die sorgfältig geprüft wurden."
                  },
                  {
                    question: "Was ist eine zuverlässige expired Domain mit hoher Autorität?",
                    answer: "Eine zuverlässige expired Domain mit hoher Autorität ist eine Domain mit hochwertigen Backlinks, einer sauberen Website-Geschichte, ohne Spam-, Glücksspiel- oder Adult-Vergangenheit und relevanten Links aus echtem Content. Diese Art von Domainnamen bietet echten SEO-Wert und gibt Ihnen einen Vorsprung bei Google."
                  },
                  {
                    question: "Wie viel SEO-Wert hat eine expired Domain mit Links?",
                    answer: "Der SEO-Wert einer expired Domain mit Links liegt hauptsächlich in bestehenden Backlinks, aufgebauter Domain-Autorität und schnellerem Vertrauen bei Google. Dies kann die Zeit bis zum Ranking erheblich verkürzen — oft Monate bis Jahre schneller als mit einem neuen Domainnamen."
                  },
                  {
                    question: "Ist eine expired Domain mit Autorität besser als Linkbuilding?",
                    answer: "In vielen Fällen ja. Mit einer expired Domain kaufen Sie bestehende Links und Autorität, während Linkbuilding zeitaufwändig, teuer und riskant sein kann. Ein alter Domainname mit SEO-Wert gibt Ihnen sofort einen Vorsprung ohne monatelange Investitionen in Linkbuilding."
                  },
                  {
                    question: "Kann ich eine expired Domain für eine neue Website verwenden?",
                    answer: "Ja. Sie können eine expired Domain mit SEO-Wert perfekt für eine neue Website einsetzen, solange der Inhalt logisch zum Thema und zur Geschichte der Domain passt. Die Backlinks bleiben aktiv und Sie profitieren sofort von der aufgebauten Autorität."
                  },
                  {
                    question: "Was ist der Unterschied zwischen einer Premium Domain und einer expired Domain?",
                    answer: "Eine Premium Domain ist vor allem wegen Namensqualität und Markenwert wertvoll, während eine expired Domain mit Backlinks zusätzliche SEO-Autorität und Geschichte mitbringt. Beide können wertvoll sein, je nach Ihrem Ziel. Einige Domains kombinieren beide Vorteile."
                  },
                  {
                    question: "Warum sind expired Domains mit Backlinks teurer?",
                    answer: "Expired Domains mit Backlinks sind teurer, weil sie bereits SEO-Wert haben, Zeit und Kosten sparen und einen schnelleren Start ermöglichen. Sie zahlen für aufgebautes Vertrauen, nicht nur für einen Namen. Die Investition amortisiert sich oft schnell durch bessere Rankings."
                  },
                  {
                    question: "Sind expired Domains mit Autorität für Webshops geeignet?",
                    answer: "Ja. Für Webshops ist Vertrauen entscheidend. Eine expired Domain mit hoher Autorität kann zu besserer Sichtbarkeit, höheren Conversions und schnellerer Indexierung beitragen. Dies gibt Ihrem Webshop einen Vorsprung gegenüber Konkurrenten, die mit einem neuen Domainnamen beginnen."
                  },
                  {
                    question: "Kann ich eine Premium Domain mit SEO-Vorteilen kombinieren?",
                    answer: "Ja. Einige Premium Domainnamen sind auch expired Domains mit einer starken Link-Historie. Dies kombiniert Markenwert mit SEO-Autorität und ist oft am wertvollsten. In unserem Portfolio finden Sie verschiedene Domains, die beide Vorteile bieten."
                  },
                  {
                    question: "Warum entscheiden sich immer mehr Unternehmer für expired Domains mit SEO-Wert?",
                    answer: "Weil Unternehmer nach schnelleren Ergebnissen bei Google suchen, weniger Abhängigkeit von Linkbuilding und einer starken Basis für Wachstum. Eine zuverlässige expired Domain mit Backlinks und Autorität bietet genau den Vorsprung, der den Unterschied macht."
                  },
                  {
                    question: "Was ist Domain Authority (DA) und warum ist sie wichtig?",
                    answer: "Domain Authority ist ein Wert von 1-100, entwickelt von MOZ, der vorhersagt, wie gut eine Website in Suchmaschinen ranken wird. Ein höherer DA bedeutet mehr Autorität und bessere Chancen, hoch zu ranken. Er basiert auf Faktoren wie der Anzahl und Qualität von Backlinks, dem Alter der Domain und der allgemeinen Vertrauenswürdigkeit."
                  },
                  {
                    question: "Wie funktioniert ein 301-Redirect für SEO?",
                    answer: "Ein 301-Redirect ist eine permanente Weiterleitung, die Suchmaschinen mitteilt, dass eine Seite dauerhaft verschoben wurde. Wenn Sie eine Premium-Domain 301 auf Ihre Website umleiten, wird ein großer Teil des SEO-Werts (Link Juice) von dieser Domain auf Ihre Seite übertragen. Dies kann Ihre Rankings erheblich verbessern."
                  },
                  {
                    question: "Wie lange dauert es, bis ich Ergebnisse sehe?",
                    answer: "Die Auswirkungen einer Domain-Übertragung oder eines 301-Redirects sind normalerweise innerhalb von 2-8 Wochen in den Suchergebnissen sichtbar. Dies hängt davon ab, wie oft Google Ihre Seite crawlt und vom aktuellen Zustand Ihrer Website. Premium-Domains mit aktiven Backlinks zeigen oft schnellere Ergebnisse."
                  },
                  {
                    question: "Was ist der beste Weg, expired Domains mit Autorität zu finden?",
                    answer: "Der beste Weg ist, bei einem spezialisierten Anbieter wie uns zu kaufen. Wir prüfen jede Domain manuell auf Spam-Historie, Backlink-Qualität und tatsächlichen SEO-Wert. Selbst suchen ist zeitaufwändig und riskant — bei uns wissen Sie, dass Sie eine saubere Domain mit echtem Wert kaufen."
                  },
                  {
                    question: "Ist es riskant, eine expired Domain zu kaufen?",
                    answer: "Risiken bestehen bei ungeprüften Domains mit möglicher Spam-Historie, versteckten Penalties oder minderwertigen Backlinks. Deshalb ist der Kauf bei einem zuverlässigen Anbieter wichtig. Wir prüfen jede Domain sorgfältig, sodass Sie mit Vertrauen kaufen können."
                  },
                  {
                    question: "Welche Branchen profitieren am meisten von expired Domains?",
                    answer: "Fast jede Branche kann von einer expired Domain mit Autorität profitieren: E-Commerce, Affiliate-Marketing, lokale Unternehmen, Blogs, SaaS, Immobilien, Gesundheitswesen, Finanzwesen und mehr. Überall, wo organischer Traffic und Google-Sichtbarkeit wichtig sind, bietet eine Domain mit bestehendem SEO-Wert einen Vorteil."
                  },
                  {
                    question: "Warum erscheinen manchmal Websites aus eurem Portfolio in der Historie einer Domain?",
                    answer: "Einige Domainnamen in unserem Portfolio wurden früher für eigene Projekte, Test-Websites oder 301-Redirects eingesetzt. Dies betrifft Websites wie NailTalk, OntwerpNovi, OliveVines und ähnliche Projekte. Das ist eigentlich ein Vorteil: Diese Domains haben nachgewiesene Ergebnisse und wurden aktiv auf SEO-Leistung getestet. Alle unsere Domainnamen werden vor dem Verkauf gründlich bei mehreren Quellen geprüft (wie Web-Historien-Archive, Google, Ahrefs, MOZ und Spam-Checker) und sind völlig frei von schädlicher Vergangenheit wie Spam, Erwachsenen-Inhalte oder Glücksspiel-Geschichte. Eine Website aus unserem eigenen Portfolio in der Historie ist also ein Zeichen von Qualität und sorgfältiger Verwaltung — kein Grund zur Sorge."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-slate-700/50 rounded-lg px-6 bg-slate-800/30">
                    <AccordionTrigger className="text-white hover:text-amber-400 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            {/* Extended FAQ */}
            <div className="max-w-3xl mx-auto mt-12">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="complete-guide" className="border border-amber-500/30 rounded-lg px-6 bg-slate-800/50">
                  <AccordionTrigger className="text-amber-400 hover:text-amber-300 text-left font-semibold">
                    📚 Vollständiger Leitfaden: 36 Fragen über Expired Domains, SEO & Domain-Autorität
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    <div className="space-y-6 pt-4">
                      {[
                        { q: "Was genau ist eine expired Domain?", a: "Eine expired Domain ist ein Domainname, der von seinem ursprünglichen Eigentümer nicht verlängert wurde und nun wieder zur Registrierung verfügbar ist. Diese Domains können wertvolle Backlinks und aufgebaute Autorität enthalten." },
                        { q: "Wie überprüfe ich, ob eine expired Domain sauber ist?", a: "Überprüfen Sie die Domain über die Wayback Machine (archive.org), checken Sie auf Spam-Historie via Ahrefs oder Moz, und suchen Sie in Google nach manuellen Penalties. Wir prüfen all dies für Sie." },
                        { q: "Was bedeutet 'link juice' im Zusammenhang mit Domains?", a: "Link Juice ist der SEO-Wert, der durch Backlinks übertragen wird. Wenn eine Domain Backlinks von autoritativen Seiten hat, kann dieser Wert durch 301-Redirects auf Ihre Hauptseite übertragen werden." },
                        { q: "Wie schnell kann ich eine gekaufte Domain einsetzen?", a: "Nach Erhalt des EPP/Auth-Codes können Sie die Domain innerhalb von 24-72 Stunden zu Ihrem Registrar übertragen und sofort einsetzen." },
                        { q: "Was ist ein EPP/Auth-Code?", a: "Der EPP-Code (auch Auth-Code oder Umzugstoken genannt) ist ein Sicherheitscode, der benötigt wird, um eine Domain zu einem anderen Registrar zu übertragen." },
                        { q: "Kann ich eine expired Domain für mehrere Websites verwenden?", a: "Eine Domain kann nur an eine Website gebunden sein, aber Sie können Subdomains erstellen oder die Hauptdomain per 301-Redirect nutzen, um SEO-Wert zu übertragen." },
                        { q: "Wie wirken sich Backlinks auf meine SEO aus?", a: "Hochwertige Backlinks signalisieren Google, dass Ihre Seite vertrauenswürdig und relevant ist. Mehr und bessere Backlinks = höhere Rankings." },
                        { q: "Was ist der Unterschied zwischen DA und PA?", a: "Domain Authority (DA) misst die Autorität einer gesamten Domain, während Page Authority (PA) die Stärke einer einzelnen Seite misst." },
                        { q: "Kann ich die DA einer Domain steigern?", a: "Ja, durch kontinuierlichen Aufbau hochwertiger Backlinks, qualitativ hochwertigen Content und eine starke interne Verlinkung." },
                        { q: "Warum variieren die Preise der Domains so stark?", a: "Der Preis hängt von DA, Backlink-Qualität, Domain-Geschichte, TLD (.eu, .com, .de), Nischen-Relevanz und Markenpotenzial ab." },
                        { q: "Was passiert mit den bestehenden Backlinks nach dem Kauf?", a: "Die Backlinks bleiben bestehen, solange die verlinkenden Seiten online sind. Sie profitieren sofort vom bestehenden Linkprofil." },
                        { q: "Kann ich eine Rückerstattung bekommen, wenn die Domain nicht funktioniert?", a: "Domain-Verkäufe sind endgültig, da Domains einzigartige digitale Vermögenswerte sind, die sofort übertragen werden. Überprüfen Sie sorgfältig vor dem Kauf." },
                        { q: "Was ist eine Google Penalty und wie erkenne ich sie?", a: "Eine Google Penalty ist eine Abstrafung wegen Verstößen gegen Googles Richtlinien. Prüfen Sie via Google Search Console oder durch eine 'site:domain.com' Suche, ob Seiten indexiert sind." },
                        { q: "Sind .eu Domains für deutsches SEO geeignet?", a: "Ja, .eu Domains werden von Google als europäisch betrachtet und eignen sich hervorragend für deutsche, österreichische und schweizer Zielgruppen." },
                        { q: "Wie übertrage ich eine Domain zu meinem Hosting-Provider?", a: "Fordern Sie den EPP-Code an, starten Sie die Übertragung bei Ihrem neuen Registrar, geben Sie den Code ein, und warten Sie auf die Bestätigung (1-5 Tage)." },
                        { q: "Was ist ein PBN und ist es sicher?", a: "Ein Private Blog Network (PBN) ist ein Netzwerk von Domains für Linkbuilding. Bei sauberer Ausführung kann es effektiv sein, aber es erfordert Vorsicht, um Google-Strafen zu vermeiden." },
                        { q: "Wie viele Backlinks sind 'genug'?", a: "Qualität ist wichtiger als Quantität. 10 Backlinks von Wikipedia, NASA oder großen Nachrichtenseiten sind wertvoller als 1000 Spam-Links." },
                        { q: "Kann ich die Domain-Historie komplett löschen?", a: "Die technische Historie bleibt in Archiven erhalten, aber Sie können neuen Content erstellen und das Image der Domain durch positive SEO-Maßnahmen verbessern." },
                        { q: "Was sind referring domains vs. backlinks?", a: "Referring Domains = Anzahl einzigartiger Domains, die auf Sie verlinken. Backlinks = Gesamtzahl aller Links (eine Domain kann mehrere Links geben)." },
                        { q: "Wie wichtig ist das Domain-Alter?", a: "Ältere Domains werden von Google oft als vertrauenswürdiger betrachtet, aber Backlink-Qualität und Content sind wichtiger als nur das Alter." },
                        { q: "Kann ich eine expired Domain für E-Mail verwenden?", a: "Ja, nach dem Setup entsprechender MX-Records bei Ihrem Hosting-Provider können Sie professionelle E-Mail-Adressen einrichten." },
                        { q: "Was bedeutet TLD und welche ist am besten?", a: "TLD (Top Level Domain) ist die Endung (.com, .de, .eu). .com ist global am stärksten, aber lokale TLDs können für spezifische Märkte vorteilhaft sein." },
                        { q: "Wie erkenne ich, ob Backlinks natürlich sind?", a: "Natürliche Backlinks kommen von relevanten, autoritativen Seiten im passenden Kontext. Unnatürliche Links zeigen oft Muster wie identische Ankertexte oder stammen von Link-Farmen." },
                        { q: "Was ist der beste Zeitpunkt, eine expired Domain zu kaufen?", a: "Sobald Sie eine passende Domain gefunden haben. Gute Domains werden schnell von anderen Käufern entdeckt." },
                        { q: "Kann ich mehrere Domains auf eine Website weiterleiten?", a: "Ja, Sie können mehrere Domains per 301-Redirect auf Ihre Hauptdomain leiten und so den kombinierten SEO-Wert sammeln." },
                        { q: "Was sind toxische Backlinks?", a: "Toxische Backlinks sind Links von Spam-Seiten, Glücksspiel/Adult-Seiten oder Link-Farmen. Diese können Ihrem SEO schaden." },
                        { q: "Wie entferne ich schlechte Backlinks?", a: "Nutzen Sie Googles Disavow Tool in der Search Console, um toxische Links zu entwerten. Wir verkaufen nur saubere Domains ohne diese Probleme." },
                        { q: "Was ist 'Domain Parking'?", a: "Domain Parking bedeutet, eine Domain zu besitzen ohne aktive Website, oft mit einer Halteseite oder für zukünftige Projekte." },
                        { q: "Beeinflusst HTTPS meinen SEO-Wert?", a: "Ja, HTTPS ist ein Ranking-Faktor. Nach dem Domain-Kauf sollten Sie ein SSL-Zertifikat einrichten." },
                        { q: "Was ist der Unterschied zwischen 301 und 302 Redirect?", a: "301 ist permanent und überträgt SEO-Wert. 302 ist temporär und überträgt weniger SEO-Wert. Verwenden Sie 301 für Domains." },
                        { q: "Wie lange dauert es, bis ein 301-Redirect wirkt?", a: "Google erkennt 301-Redirects meist innerhalb von Tagen, aber die volle SEO-Wirkung kann 2-8 Wochen dauern." },
                        { q: "Kann ich eine Domain zurückgeben?", a: "Nein, Domain-Verkäufe sind endgültig. Domains sind einzigartige digitale Vermögenswerte, die bei Übertragung ihren Besitzer wechseln." },
                        { q: "Was passiert, wenn ich die Domain nicht verlängere?", a: "Die Domain läuft ab und wird wieder öffentlich verfügbar — möglicherweise kauft jemand anders sie." },
                        { q: "Wie schütze ich meine Domain-Investition?", a: "Verlängern Sie rechtzeitig, aktivieren Sie Auto-Renew, nutzen Sie Domain-Lock, und halten Sie Ihre Kontaktdaten aktuell." },
                        { q: "Gibt es versteckte Kosten beim Domain-Kauf?", a: "Der angezeigte Preis ist der Verkaufspreis. Sie zahlen zusätzlich die jährliche Domain-Verlängerungsgebühr bei Ihrem Registrar (typisch €10-25/Jahr)." },
                        { q: "Warum sollte ich bei Ihnen kaufen und nicht bei einem Auktionshaus?", a: "Wir prüfen jede Domain manuell auf Qualität, bieten transparente Preise ohne Bietergefechte, und garantieren saubere Historie ohne versteckte Probleme." }
                      ].map((item, idx) => (
                        <div key={idx} className="border-b border-slate-700/50 pb-4 last:border-0">
                          <h4 className="font-semibold text-amber-400/90 mb-2">{idx + 1}. {item.q}</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                  <Mail className="w-4 h-4 mr-2 inline" />
                  Kontaktieren Sie uns
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Interesse an einer Domain?
                </h2>
                <p className="text-slate-400">
                  Füllen Sie das Formular aus und wir antworten innerhalb von 24 Stunden.
                </p>
              </div>
              
              <Card className="bg-slate-800/50 border-slate-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Name *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Ihr Name"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          E-Mail *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="ihre@email.com"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Globe className="w-4 h-4 inline mr-2" />
                        Domain-Auswahl *
                      </label>
                      <Input
                        type="text"
                        value={formData.domain}
                        onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                        placeholder="z.B. FinanceAuthority.com"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Nachricht / Zusätzliche Informationen
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Erzählen Sie uns mehr über Ihr Interesse, stellen Sie Fragen oder machen Sie ein Angebot..."
                        rows={5}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40"
                    >
                      Anfrage senden
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
                  Expired Domains kaufen: Investieren Sie in bewährte SEO-Autorität
                </h2>
                
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    Eine <strong className="text-amber-400">expired Domain kaufen</strong> ist der klügste Weg, um sofort von jahrelang aufgebauter <strong className="text-white">Domain-Autorität</strong> und <strong className="text-white">hochwertigen Backlinks</strong> zu profitieren. Im Gegensatz zu einem neuen Domainnamen verfügt eine Premium Expired Domain bereits über Vertrauen bei Google und anderen Suchmaschinen. Dies führt direkt zu besseren Rankings, schnellerer Indexierung und mehr organischem Traffic.
                  </p>
                  
                  <p>
                    Unsere sorgfältig ausgewählten <strong className="text-amber-400">Premium Domains</strong> haben eine bewährte Erfolgsbilanz mit Backlinks von autoritativen Quellen wie Wikipedia, Universitäten, Regierungsbehörden und renommierten Nachrichtenseiten. Diese <strong className="text-white">hochwertigen Backlinks</strong> sind das Ergebnis jahrelanger Online-Präsenz und praktisch unmöglich selbst aufzubauen — es sei denn, Sie sind bereit, Tausende von Euro in Linkbuilding zu investieren.
                  </p>
                  
                  <p>
                    Ob Sie einen <strong className="text-white">Webshop starten</strong> möchten, eine <strong className="text-white">Affiliate-Website</strong> lancieren oder Ihrem bestehenden Unternehmen einen <strong className="text-white">SEO-Boost</strong> geben wollen: Eine expired Domain mit hoher <strong className="text-amber-400">MOZ Domain Authority (DA)</strong> gibt Ihnen einen unverkennbaren Vorsprung gegenüber der Konkurrenz. Während andere Monate warten, bis Google ihrer neuen Domain vertraut, profitieren Sie sofort von bestehender Autorität.
                  </p>
                  
                  <p>
                    <strong className="text-white">Warum warten?</strong> Jede Premium Domain in unserem Portfolio ist auf spam-freie Geschichte, relevante Backlinks und gute Linkprofile geprüft. Sie kaufen einen strategischen Vermögenswert, der sofort Wert zu Ihrer Online-Präsenz hinzufügt. Von <strong className="text-white">301-Redirects</strong> für Authority Stacking bis zum direkten Start einer neuen Website: Die Möglichkeiten sind endlos.
                  </p>
                  
                  <div className="bg-gradient-to-r from-amber-500/10 to-slate-800/30 border border-amber-500/20 rounded-xl p-6 mt-8">
                    <p className="text-center text-lg mb-0">
                      <strong className="text-amber-400">Bereit, Ihren Online-Erfolg zu beschleunigen?</strong><br />
                      <span className="text-slate-300">Erkunden Sie unser Portfolio von 110+ Premium Expired Domains und entdecken Sie, welche Domain perfekt zu Ihren Ambitionen passt. Investieren Sie noch heute in bewährte Autorität und lassen Sie Ihre Konkurrenten hinter sich.</span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Domain Transfer Instructions */}
        <section id="domain-umziehen" className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="border border-amber-500/30 rounded-xl bg-slate-800/50">
                  <div className="px-6 py-4">
                    <h2 className="text-xl font-bold text-white">
                      <div className="flex items-center gap-3">
                        <Globe className="w-6 h-6 text-amber-400" />
                        <span>Wie übertragen Sie Ihre Domain mit dem Umzugstoken (EPP/Auth-Code)?</span>
                      </div>
                    </h2>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="space-y-6 text-slate-300">
                      <p className="text-lg">
                        Nach Ihrem Kauf erhalten Sie innerhalb von 24 Stunden einen <strong className="text-amber-400">Umzugstoken</strong> (auch EPP-Code oder Auth-Code genannt) an die E-Mail-Adresse, die Sie bei der Zahlung angegeben haben. Mit diesem Code können Sie die Domain einfach zu Ihrem eigenen Domain-Registrar oder Hosting-Provider übertragen.
                      </p>
                      
                      <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                        <h3 className="text-lg font-semibold text-white mb-4">Schritt-für-Schritt-Anleitung:</h3>
                        <ol className="space-y-4">
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">1</span>
                            <div>
                              <strong className="text-white">Umzugstoken erhalten</strong>
                              <p className="text-slate-400 mt-1">Überprüfen Sie Ihren Posteingang (und Spam-Ordner) auf die E-Mail mit dem Umzugstoken. Diese erhalten Sie innerhalb von 24 Stunden nach der Zahlung.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">2</span>
                            <div>
                              <strong className="text-white">Bei Ihrem Domain-Registrar oder Hosting-Provider einloggen</strong>
                              <p className="text-slate-400 mt-1">Gehen Sie zur Domain-Verwaltung Ihres Providers (z.B. IONOS, Strato, All-Inkl, Domain Factory, GoDaddy, etc.).</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">3</span>
                            <div>
                              <strong className="text-white">Domain-Transfer starten</strong>
                              <p className="text-slate-400 mt-1">Suchen Sie nach der Option "Domain umziehen", "Domain transferieren" oder "Domain übernehmen". Geben Sie den Domainnamen ein, den Sie übertragen möchten.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">4</span>
                            <div>
                              <strong className="text-white">Umzugstoken eingeben</strong>
                              <p className="text-slate-400 mt-1">Fügen Sie den Umzugstoken (EPP/Auth-Code) ein, den Sie von uns erhalten haben, in das dafür vorgesehene Feld.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">5</span>
                            <div>
                              <strong className="text-white">Übertragung bestätigen</strong>
                              <p className="text-slate-400 mt-1">Geben Sie den gekauften Domainnamen bei Ihrem Provider ein und bestätigen Sie die Übertragung. Geben Sie dann den EPP-Code (Umzugstoken) ein, den Sie von uns erhalten haben.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">6</span>
                            <div>
                              <strong className="text-white">Auf Fertigstellung warten</strong>
                              <p className="text-slate-400 mt-1">Die Übertragung wird nun in Gang gesetzt und dauert normalerweise 1-5 Werktage, abhängig von der Domain-Endung (.de, .at, .eu, .com, etc.). Sobald die Übertragung abgeschlossen ist, erscheint die Domain automatisch in Ihrem Konto.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">7</span>
                            <div>
                              <strong className="text-white">Ihre Domain nutzen</strong>
                              <p className="text-slate-400 mt-1">Nach Fertigstellung können Sie die Domain sofort einsetzen: Verwenden Sie sie als 301-Redirect auf Ihre bestehende Website für zusätzlichen SEO-Wert, oder verbinden Sie sie mit einem Hosting-Paket, um eine neue Website zu erstellen.</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      
                      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                        <div className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-white">Unsere Empfehlung: Junda Hosting</strong>
                            <p className="text-slate-300 mt-1">
                              Auf der Suche nach zuverlässigem Hosting oder Domain-Registrierung? Wir empfehlen <strong className="text-amber-400">Junda</strong> — ein niederländischer Provider mit ausgezeichnetem Support, schnellen Servern und fairen Preisen. Junda bietet kostenlose Domain-Übertragung an und macht es einfach, Ihre neue Domain direkt mit professionellem WordPress-Hosting zu verbinden.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-3">
                              <a 
                                href="https://www.junda.nl/wordpress-hosting?via=291063" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                                WordPress Hosting ansehen
                              </a>
                              <a 
                                href="https://www.junda.nl/domeinnaam-verhuizen?via=291063" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 border border-amber-500 text-amber-400 hover:bg-amber-500/10 font-semibold rounded-lg transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Domain umziehen
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-400 text-sm">
                        Haben Sie Fragen zum Domain-Transfer? Kontaktieren Sie uns gerne unter <a href="mailto:support@iaee.eu" className="text-amber-400 hover:text-amber-300">support@iaee.eu</a>.
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
                Kontaktieren Sie uns
              </h2>
              <p className="text-slate-300 mb-8">
                Haben Sie Fragen zu einer bestimmten Domain oder möchten Sie Beratung darüber, welche expired Domain am besten zu Ihrem Projekt passt? Kontaktieren Sie uns gerne.
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
                    Wir antworten innerhalb von 24 Stunden auf Ihre Nachricht.
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
          aria-label="Nach oben"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        {/* Legal Footer */}
        <LegalLinksPremiumDomainsDE />

        {/* Footer */}
        <FooterPremiumDomainsDE />
      </div>
    </>
  );
};

export default PremiumDomainsDE;