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
import LegalLinksPremiumDomains from "@/components/premium-domains/LegalLinksPremiumDomains";
import FooterPremiumDomains from "@/components/premium-domains/FooterPremiumDomains";
import LanguageSwitcher from "@/components/premium-domains/LanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import stripeLogo from "@/assets/stripe-logo.svg";
import StripeBuyButton from "@/components/StripeBuyButton";
import { validateContactForm, buildSafeMailtoUrl } from "@/lib/formValidation";

// Premium domain data - can be easily updated
const premiumDomains = [
  // DA 38
  {
    name: "escp-eap.eu",
    description: "Premium business school domein met backlinks van Wikipedia, Cornell, Spiegel en Le Monde.",
    mozScore: 38,
    pageAuthority: 28,
    linkingDomains: 292,
    inboundLinks: "4.6K+",
    followedLinks: "4.2K+",
    category: "Onderwijs",
    price: "€1495",
    backlinks: "4.6K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "lemonde.fr (DA 93)", "cornell.edu (DA 92)", "spiegel.de (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/6oUeVdepVg18dXf9OO9Zm04"
  },
  // DA 37
  {
    name: "grandparkhotel.at",
    description: "Premium Oostenrijks hoteldomein met backlinks van The Guardian, Telegraph, Daily Mail, Irish Times en Der Standard.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 198,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Hospitality",
    price: "€1750",
    backlinks: "1.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dailymail.co.uk (DA 94)", "irishtimes.com (DA 91)", "derstandard.at (DA 82)"],
    stripePaymentLink: "https://buy.stripe.com/8x2dR9epV9CK5qJaSS9Zm0i",
    image: "/images/premium-domains-logo.png"
  },
  {
    name: "icesculpture.be",
    description: "Belgisch kunst/evenement domein met backlinks van Europa.eu, The Guardian, Telegraph, DW en Boston.com.",
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
    description: "Kort en memorabel EU-domein met backlinks van YouTube, Le Monde, MDPI, Corriere en Wired Italia.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 166,
    inboundLinks: "3K+",
    followedLinks: "2.9K+",
    category: "Algemeen",
    price: "€1950",
    stripePaymentLink: "https://buy.stripe.com/bJe7sL2HdcOWbP7bWW9Zm0g",
    backlinks: "3K+",
    topBacklinks: ["youtube.com (DA 100)", "lemonde.fr (DA 93)", "mdpi.com (DA 92)", "corriere.it (DA 92)", "wired.it (DA 90)"],
    image: "/images/premium-domains-logo.png"
  },
  // DA 36
  {
    name: "antigonetickets.be",
    description: "Belgisch ticketing domein met backlinks van Nieuwsblad, De Standaard en GVA.",
    mozScore: 36,
    pageAuthority: 23,
    linkingDomains: 120,
    inboundLinks: "6.6K+",
    followedLinks: "6.6K+",
    category: "Entertainment",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "6.6K+",
    topBacklinks: ["standaard.be (DA 81)", "nieuwsblad.be (DA 79)", "gva.be (DA 73)"]
  },
  {
    name: "beauxartsliege.be",
    description: "Kunst domein met backlinks van Wikipedia, CNN, Behance en RTBF.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 231,
    inboundLinks: "1.1K+",
    followedLinks: "831+",
    category: "Kunst/Cultuur",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "1.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnn.com (DA 94)", "behance.net (DA 92)", "rtbf.be (DA 82)"]
  },
  {
    name: "paulsmithmusic.eu",
    description: "Muziekdomein met backlinks van BBC, The Guardian, NME en Pitchfork.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 302,
    inboundLinks: "719+",
    followedLinks: "663+",
    category: "Muziek",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "719+",
    topBacklinks: ["bbc.co.uk (DA 95)", "theguardian.com (DA 95)", "pitchfork.com (DA 88)", "nme.com (DA 86)"]
  },
  {
    name: "eu-asiacentre.eu",
    description: "EU-Azië domein met backlinks van Wikipedia, NBC News, Cambridge en Reddit.",
    mozScore: 36,
    pageAuthority: 33,
    linkingDomains: 277,
    inboundLinks: "898+",
    followedLinks: "785+",
    category: "Internationaal",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "898+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "reddit.com (DA 97)", "nbcnews.com (DA 93)", "cam.ac.uk (DA 93)"]
  },
  // DA 35
  {
    name: "toulousespaceshow.eu",
    description: "Premium ruimtevaart domein met backlinks van Europa.eu, NASA.gov, IEEE.org en Wikipedia.",
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
    description: "Fiets domein met backlinks van Globo, Harper's Bazaar, Vogue en Grazia.",
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
    description: "Duits nieuws/religieus domein met backlinks van Wikipedia (EN, DE, ZH, NL), Spiegel en La Croix.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 281,
    inboundLinks: "3.3K+",
    followedLinks: "1.8K+",
    category: "Nieuws",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.3K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "de.wikipedia.org (DA 94)", "fandom.com (DA 94)", "spiegel.de (DA 93)", "la-croix.com (DA 88)"]
  },
  // DA 33
  {
    name: "etongmbh.de",
    description: "Duits bedrijfsdomein met sterke zakelijke autoriteit en backlinks van Naver, Yumpu, Heise, Computerbase en Motor-Talk.",
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
    description: "Frans/Europees regio domein met backlinks van Scoop.it, France Info, La Tribune en Franse overheid.",
    mozScore: 33,
    pageAuthority: 24,
    linkingDomains: 167,
    inboundLinks: "690.3K+",
    followedLinks: "689.6K+",
    category: "Toerisme",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "690.3K+",
    topBacklinks: ["scoop.it (DA 92)", "franceinfo.fr (DA 91)", "latribune.fr (DA 86)", "culture.gouv.fr (DA 76)", "agriculture.gouv.fr (DA 72)"]
  },
  {
    name: "fffb.be",
    description: "Kort en krachtig Belgisch domein met backlinks van Wikipedia, Variety, RTBF en Courrier International.",
    mozScore: 33,
    pageAuthority: 33,
    linkingDomains: 228,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Algemeen",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "1.7K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "variety.com (DA 93)", "constantcontact.com (DA 90)", "rtbf.be (DA 89)", "courrierinternational.com (DA 80)"]
  },
  // DA 32
  {
    name: "improve-research.eu",
    description: "Onderzoeksdomein met backlinks van Europa.eu, Cambridge, Springer en LSE.",
    mozScore: 32,
    pageAuthority: 30,
    linkingDomains: 106,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "Onderzoek",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.7K+",
    topBacklinks: ["europa.eu (DA 94)", "cam.ac.uk (DA 93)", "springer.com (DA 92)", "lse.ac.uk (DA 90)"]
  },
  {
    name: "co-da.eu",
    description: "Kort en krachtig EU-domein met backlinks van Globo, HuffPost, CBS News, Gizmodo en Fast Company.",
    mozScore: 32,
    pageAuthority: 22,
    linkingDomains: 96,
    inboundLinks: "276+",
    followedLinks: "260+",
    category: "Samenwerking",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "276+",
    topBacklinks: ["globo.com (DA 95)", "huffpost.com (DA 94)", "cbsnews.com (DA 93)", "gizmodo.com (DA 93)", "fastcompany.com (DA 92)"]
  },
  {
    name: "emg-nice2015.fr",
    description: "Frans domein met backlinks van Wikipedia, GoFundMe, Nice Matin en Triathlon.org.",
    mozScore: 32,
    pageAuthority: 31,
    linkingDomains: 191,
    inboundLinks: "3.1K+",
    followedLinks: "3K+",
    category: "Internationaal",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "3.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "gofundme.com (DA 93)", "mundodeportivo.com (DA 92)", "nicematin.com (DA 73)", "triathlon.org (DA 68)"]
  },
  {
    name: "euromedialiteracy.eu",
    description: "Educatief EU-domein met backlinks van Wikipedia, Penn State, Wisconsin en Council of Europe.",
    mozScore: 32,
    pageAuthority: 38,
    linkingDomains: 372,
    inboundLinks: "2.5K+",
    followedLinks: "2.3K+",
    category: "Onderwijs",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.5K+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "psu.edu (DA 92)", "scoop.it (DA 92)", "wisc.edu (DA 91)", "coe.int (DA 89)"]
  },
  {
    name: "citiexpress.eu",
    description: "Transport en logistiek EU-domein met backlinks van TripAdvisor, SkyscraperCity en Rick Steves.",
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
    description: "Europees project domein met backlinks van Wikipedia, Cambridge, UNESCO en Reddit.",
    mozScore: 31,
    pageAuthority: 27,
    linkingDomains: 162,
    inboundLinks: "379+",
    followedLinks: "266+",
    category: "Projecten",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "379+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cambridge.org (DA 93)", "unesco.org (DA 93)", "reddit.com (DA 92)", "mdpi.com (DA 92)"]
  },
  {
    name: "ramcip-project.eu",
    description: "Europees onderzoeksproject domein met backlinks van Europa.eu, GitHub, NY Times en Springer.",
    mozScore: 31,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "333+",
    followedLinks: "293+",
    category: "Onderzoek",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "333+",
    topBacklinks: ["europa.eu (DA 97)", "github.com (DA 96)", "nytimes.com (DA 95)", "elpais.com (DA 94)", "springer.com (DA 93)"]
  },
  {
    name: "evader-project.eu",
    description: "EU-project domein met backlinks van Europa.eu, Spiegel, Europa Press en Heise.",
    mozScore: 31,
    pageAuthority: 30,
    linkingDomains: 91,
    inboundLinks: "128+",
    followedLinks: "109+",
    category: "Projecten",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "128+",
    topBacklinks: ["europa.eu (DA 97)", "spiegel.de (DA 93)", "europapress.es (DA 91)", "heise.de (DA 91)", "autoblog.com (DA 90)"]
  },
  {
    name: "toastit-live.be",
    description: "Belgisch entertainment/media domein met backlinks van Wikipedia, KU Leuven, Nieuwsblad en Yle.",
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
    description: "Nederlands netwerk domein met backlinks van Microsoft, NOS, Neowin, Tweakers en XS4All.",
    mozScore: 31,
    pageAuthority: 25,
    linkingDomains: 152,
    inboundLinks: "1.7K+",
    followedLinks: "1.6K+",
    category: "Netwerk",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "1.7K+",
    topBacklinks: ["microsoft.com (DA 99)", "nos.nl (DA 90)", "neowin.net (DA 88)", "techpowerup.com (DA 83)", "tweakers.net (DA 79)"]
  },
  {
    name: "leading-the-digital-decade.eu",
    description: "Digitale transformatie EU-domein met backlinks van Europa.eu, Politico EU en LSE.",
    mozScore: 31,
    pageAuthority: 30,
    linkingDomains: 80,
    inboundLinks: "189+",
    followedLinks: "174+",
    category: "Digitaal",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "189+",
    topBacklinks: ["europa.eu (DA 97)", "politico.eu (DA 91)", "lse.ac.uk (DA 89)", "fapesp.br (DA 72)", "eureporter.co (DA 68)"]
  },
  {
    name: "landstewardship.eu",
    description: "EU landbeheer/duurzaamheid domein met backlinks van Europa.eu, ABC.es, Gencat.cat en Spaanse universiteiten.",
    mozScore: 31,
    pageAuthority: 33,
    linkingDomains: 200,
    inboundLinks: "7.5K+",
    followedLinks: "7.4K+",
    category: "Duurzaamheid",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "7.5K+",
    topBacklinks: ["europa.eu (DA 97)", "abc.es (DA 93)", "gencat.cat (DA 89)", "ask.com (DA 88)", "ecoticias.com (DA 74)"],
    useCases: ["Natuurbeheer & Rewilding NGO", "Duurzame Landbouw Platform", "Ecotoerisme & Agritoerisme", "Milieu Consultancy Bureau", "Landschapsarchitectuur Studio", "Biologische Boerderij Collectief", "Climate Action Stichting", "Permacultuur Academie", "Bossen & Biodiversiteit Initiatief", "Regeneratieve Landbouw Community"]
  },
  // DA 30
  {
    name: "ilovecosmetics.eu",
    description: "Beauty en cosmetica domein met backlinks van Alza, Glamour Magazine en CB Insights.",
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
    useCases: ["Beauty & Skincare E-commerce", "Cosmetica Review Blog", "Make-up Artist Portfolio", "Natuurlijke Cosmetica Merk", "Beauty Influencer Platform", "Schoonheidssalon Keten", "K-Beauty & J-Beauty Import", "Vegan Cosmetica Webshop", "Beauty Box Subscription Service", "Cosmetica Ingrediënten Database"]
  },
  {
    name: "rtmpilecki.eu",
    description: "Historisch/cultureel EU-domein met backlinks van Wikipedia (ES, ID, ZH), Poolse overheid en Thread Reader.",
    mozScore: 30,
    pageAuthority: 27,
    linkingDomains: 96,
    inboundLinks: "199+",
    followedLinks: "95+",
    category: "Cultuur",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "199+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "gov.pl (DA 91)", "threadreaderapp.com (DA 78)", "gloria.tv (DA 69)", "dbpedia.org (DA 65)"]
  },
  {
    name: "friendsofthesupergrid.eu",
    description: "Energie en infrastructuur EU-domein met backlinks van Wikipedia, CNET, IEEE en The Conversation.",
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
    description: "HVAC en klimaattechniek EU-domein met backlinks van Ow.ly, EurActiv en Danfoss.",
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
    description: "EU catering/evenement domein met backlinks van Google.sk, Wikiwand, RA.co en Pravda.sk.",
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
    description: "Veiligheid en noodplanning EU-domein met backlinks van Europa.eu, El País, Springer en KU Leuven.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 99,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Veiligheid",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.7K+",
    topBacklinks: ["europa.eu (DA 97)", "elpais.com (DA 94)", "springer.com (DA 93)", "mdpi.com (DA 92)", "xataka.com (DA 90)"]
  },
  {
    name: "greenweek2010.eu",
    description: "Duurzaamheids domein met backlinks van Europa.eu, EurekAlert, RAI en AAAS.",
    mozScore: 29,
    pageAuthority: 28,
    linkingDomains: 109,
    inboundLinks: "259+",
    followedLinks: "249+",
    category: "Duurzaamheid",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "259+",
    topBacklinks: ["europa.eu (DA 97)", "eurekalert.org (DA 91)", "rai.it (DA 81)", "au.dk (DA 77)", "aaas.org (DA 76)"]
  },
  {
    name: "bryn-somersethouse.co.uk",
    description: "Brits vastgoed/hospitality domein met backlinks van Forbes, The Guardian, Evening Standard en Time Out.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 96,
    inboundLinks: "167+",
    followedLinks: "132+",
    category: "Vastgoed",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "167+",
    topBacklinks: ["forbes.com (DA 94)", "theguardian.com (DA 94)", "standard.co.uk (DA 93)", "timeout.com (DA 92)", "thetimes.com (DA 92)"]
  },
  {
    name: "euforistudy.eu",
    description: "Educatief EU-studie domein met backlinks van The Guardian, Trinity College Dublin en VU Amsterdam.",
    mozScore: 29,
    pageAuthority: 27,
    linkingDomains: 72,
    inboundLinks: "215+",
    followedLinks: "170+",
    category: "Onderwijs",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "215+",
    topBacklinks: ["theguardian.com (DA 94)", "ask.com (DA 88)", "tcd.ie (DA 86)", "vu.nl (DA 76)", "muni.cz (DA 74)"]
  },
  {
    name: "beatassist.eu",
    description: "Muziekproductie domein met backlinks van Google Sites, Scoop.it, Envato en MusicRadar.",
    mozScore: 29,
    pageAuthority: 29,
    linkingDomains: 164,
    inboundLinks: "1.5K+",
    followedLinks: "1.2K+",
    category: "Muziek/Audio",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.5K+",
    topBacklinks: ["sites.google.com (DA 96)", "scoop.it (DA 92)", "envato.com (DA 91)", "informer.com (DA 90)", "codecanyon.net (DA 83)"]
  },
  {
    name: "energaware.eu",
    description: "Energie bewustzijn EU-project domein met backlinks van Europa.eu, UOL, El País en Le Figaro.",
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
    description: "Telecom/media domein met backlinks van Medium, IBM, Telefónica en universiteiten.",
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
    description: "Financiële innovatie EU-regio domein met backlinks van Crunchbase, Splashthat en Climate-KIC.",
    mozScore: 29,
    pageAuthority: 20,
    linkingDomains: 41,
    inboundLinks: "156+",
    followedLinks: "143+",
    category: "Finance",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "156+",
    topBacklinks: ["goo.gl (DA 95)", "crunchbase.com (DA 91)", "splashthat.com (DA 86)", "emprendedores.es (DA 66)", "climate-kic.org (DA 64)"]
  },
  {
    name: "worth-project.eu",
    description: "Design en innovatie project domein met backlinks van Europa.eu, Euronews, AngelList en UAL Arts.",
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
    description: "EU mobiliteit/parking domein met backlinks van Europa.eu, Medium, Zeit.de en Thread Reader.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 107,
    inboundLinks: "320+",
    followedLinks: "292+",
    category: "Mobiliteit",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "320+",
    topBacklinks: ["europa.eu (DA 97)", "medium.com (DA 95)", "zeit.de (DA 91)", "threadreaderapp.com (DA 78)", "eur.nl (DA 68)"]
  },
  // DA 28
  {
    name: "bovisadrivein.it",
    description: "Italiaans entertainment domein met backlinks van Behance, Giphy, Corriere en MyMovies.",
    mozScore: 28,
    pageAuthority: 22,
    linkingDomains: 52,
    inboundLinks: "78+",
    followedLinks: "60+",
    category: "Entertainment",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "78+",
    topBacklinks: ["behance.net (DA 93)", "giphy.com (DA 92)", "corriere.it (DA 92)", "ilgiornale.it (DA 85)", "elledecor.com (DA 81)"]
  },
  {
    name: "resurbis.eu",
    description: "EU-domein voor duurzaamheid met backlinks van Europa.eu, MDPI, EurekAlert en Wired.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 87,
    inboundLinks: "185+",
    followedLinks: "153+",
    category: "Duurzaamheid",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "185+",
    topBacklinks: ["europa.eu (DA 97)", "mdpi.com (DA 92)", "eurekalert.org (DA 91)", "wired.it (DA 90)", "ub.edu (DA 86)"]
  },
  {
    name: "eu-sabana.eu",
    description: "Duurzame landbouw EU-project domein met backlinks van Europa.eu, The Conversation en Frontiers.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 69,
    inboundLinks: "413+",
    followedLinks: "397+",
    category: "Landbouw",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "413+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "frontiersin.org (DA 92)", "diarioinformacion.com (DA 82)", "informacion.es (DA 78)"],
    sold: true
  },
  {
    name: "ellinikiglossa.eu",
    description: "Grieks taal/cultuur domein met sterke backlinks van Wikipedia, UCI.edu en universiteiten.",
    mozScore: 28,
    pageAuthority: 31,
    linkingDomains: 164,
    inboundLinks: "4.1K+",
    followedLinks: "4K+",
    category: "Taal/Cultuur",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "4.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "uci.edu (DA 91)"]
  },
  {
    name: "bringaexpo.eu",
    description: "Hongaars fiets/expo domein met sterke backlinks van Origo.hu, Velvet.hu, Network.hu en andere Hongaarse mediawebsites.",
    mozScore: 27,
    pageAuthority: 25,
    linkingDomains: 79,
    inboundLinks: "551+",
    followedLinks: "513+",
    category: "Sport/Evenementen",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "551+",
    topBacklinks: ["origo.hu (DA 72)", "velvet.hu (DA 60)", "network.hu (DA 57)", "femcafe.hu (DA 56)", "hwsw.hu (DA 56)"]
  },
  {
    name: "movecare-project.eu",
    description: "Zorg en mobiliteit EU-project domein met backlinks van Springer, MDPI, Il Fatto Quotidiano en Italiaanse universiteiten.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "117+",
    followedLinks: "97+",
    category: "Zorg",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "117+",
    topBacklinks: ["springer.com (DA 93)", "mdpi.com (DA 92)", "ilfattoquotidiano.it (DA 90)", "unimi.it (DA 72)", "polimi.it (DA 71)"]
  },
  {
    name: "davidhughesillustration.co.uk",
    description: "Creatief UK domein met backlinks van The Guardian, Creative Bloq, ORF.at en Publishers Weekly.",
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
    description: "Belgisch centrum domein met backlinks van Wikipedia (FR, IT, NL), Le Figaro en Wiktionary.",
    mozScore: 28,
    pageAuthority: 28,
    linkingDomains: 182,
    inboundLinks: "9.6K+",
    followedLinks: "9.3K+",
    category: "Algemeen",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "9.6K+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "it.wikipedia.org (DA 93)", "wiktionary.org (DA 93)", "lefigaro.fr (DA 93)", "nl.wikipedia.org (DA 91)"]
  },
  {
    name: "epc2018.be",
    description: "Belgisch evenement domein met backlinks van TinyURL, UB.edu, Lund Universiteit en Confex.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 57,
    inboundLinks: "136+",
    followedLinks: "121+",
    category: "Evenementen",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "136+",
    topBacklinks: ["tinyurl.com (DA 94)", "ub.edu (DA 86)", "lu.se (DA 79)", "confex.com (DA 73)", "sdu.dk (DA 71)"]
  },
  {
    name: "youthstartproject.eu",
    description: "Onderwijs/jeugd project domein met backlinks van Europa.eu, Campaign Archive, Observador en OpenEdition.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 64,
    inboundLinks: "2.9K+",
    followedLinks: "2.8K+",
    category: "Onderwijs",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "2.9K+",
    topBacklinks: ["europa.eu (DA 97)", "campaign-archive.com (DA 84)", "observador.pt (DA 84)", "openedition.org (DA 78)", "wort.lu (DA 75)"]
  },
  // DA 27
  {
    name: "spanvis.nl",
    description: "Nederlands domein met backlinks van Wikipedia (EN, RU, NL), Wikiwand en XS4All.",
    mozScore: 27,
    pageAuthority: 29,
    linkingDomains: 241,
    inboundLinks: "2.1K+",
    followedLinks: "1.9K+",
    category: "Algemeen",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "ru.wikipedia.org (DA 94)", "nl.wikipedia.org (DA 91)", "wikiwand.com (DA 85)", "xs4all.nl (DA 79)"]
  },
  {
    name: "seatglobal.eu",
    description: "Internationaal mobiliteit/transport domein met backlinks van Europa.eu, Springer, PLOS en Phys.org.",
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
    description: "Digitaal archief EU-project domein met backlinks van Wikipedia, Europa.eu, W3.org, SlideShare en Oxford.",
    mozScore: 27,
    pageAuthority: 33,
    linkingDomains: 691,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "Digitaal",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.7K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "w3.org (DA 95)", "slideshare.net (DA 94)", "ox.ac.uk (DA 92)"]
  },
  {
    name: "lt-pl-ru.eu",
    description: "Baltische regio EU-samenwerkingsdomein met backlinks van Europa.eu, Wikipedia DE, Ask.com en Rzeczpospolita.",
    mozScore: 27,
    pageAuthority: 31,
    linkingDomains: 155,
    inboundLinks: "44.2K+",
    followedLinks: "37.2K+",
    category: "Internationaal",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "44.2K+",
    topBacklinks: ["europa.eu (DA 97)", "de.wikipedia.org (DA 94)", "ask.com (DA 88)", "rp.pl (DA 82)", "worldwidetopsite.com (DA 71)"]
  },
  {
    name: "transitionproject.eu",
    description: "Transitie en verandering EU-project domein met backlinks van Europa.eu, Eventbrite, Storify en Sheffield University.",
    mozScore: 27,
    pageAuthority: 28,
    linkingDomains: 75,
    inboundLinks: "207+",
    followedLinks: "179+",
    category: "Projecten",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "207+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "eventbrite.com (DA 93)", "storify.com (DA 90)", "shef.ac.uk (DA 79)"]
  },
  {
    name: "expo-2050.be",
    description: "Belgisch expo/tentoonstelling domein met backlinks van The Conversation, Radio France, RTBF en La Libre.",
    mozScore: 27,
    pageAuthority: 27,
    linkingDomains: 96,
    inboundLinks: "210+",
    followedLinks: "182+",
    category: "Evenementen",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "210+",
    topBacklinks: ["theconversation.com (DA 92)", "radiofrance.fr (DA 92)", "theculturetrip.com (DA 89)", "rtbf.be (DA 89)", "lalibre.be (DA 84)"]
  },
  {
    name: "iceel.eu",
    description: "EU-domein met backlinks van Europa.eu, France Info, CNRS en Franse universiteiten.",
    mozScore: 27,
    pageAuthority: 30,
    linkingDomains: 130,
    inboundLinks: "3.6K+",
    followedLinks: "3.5K+",
    category: "Algemeen",
    price: "€450",
    stripePaymentLink: "https://buy.stripe.com/fZu14n6Xt7uCf1j9OO9Zm0j",
    backlinks: "3.6K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "cnrs.fr (DA 90)", "psl.eu (DA 78)", "education.fr (DA 77)"]
  },
  {
    name: "eustartupvillageforum.eu",
    description: "Startup en innovatie EU-forum domein met backlinks van Europa.eu, Pages.dev, Campaign Archive en Silicon Republic.",
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
    description: "Milieu en natuur EU-project domein met backlinks van Europa.eu, FranceInfo, Campaign Archive en Midi Libre.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 54,
    inboundLinks: "67.8K+",
    followedLinks: "67.8K+",
    category: "Milieu",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "67.8K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "campaign-archive.com (DA 84)", "midilibre.fr (DA 81)", "developpement-durable.gouv.fr (DA 74)"]
  },
  // DA 26
  {
    name: "covenant-capacity.eu",
    description: "EU-covenant en capaciteitsopbouw domein met backlinks van Europa.eu, BT, MyNewsDesk en WWF Panda.",
    mozScore: 26,
    pageAuthority: 24,
    linkingDomains: 85,
    inboundLinks: "2.6K+",
    followedLinks: "2.5K+",
    category: "Samenwerking",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.6K+",
    topBacklinks: ["europa.eu (DA 97)", "bt.com (DA 91)", "mynewsdesk.com (DA 89)", "campaign-archive.com (DA 84)", "panda.org (DA 77)"]
  },
  {
    name: "wetenschapbegintmetverwondering.nl",
    description: "Nederlands wetenschapscommunicatie domein met backlinks van RUG, NU.nl en Nationale Wetenschapsagenda.",
    mozScore: 27,
    pageAuthority: 24,
    linkingDomains: 52,
    inboundLinks: "97+",
    followedLinks: "81+",
    category: "Wetenschap",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "97+",
    topBacklinks: ["rug.nl (DA 84)", "nu.nl (DA 91)", "wetenschapsagenda.nl (DA 65)"]
  },
  {
    name: "khresmoi.eu",
    description: "Medisch zoek-EU-project domein met backlinks van MDPI, Springer, BioMedCentral en Charles University.",
    mozScore: 27,
    pageAuthority: 32,
    linkingDomains: 184,
    inboundLinks: "31.7K+",
    followedLinks: "31.5K+",
    category: "Gezondheid",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "31.7K+",
    topBacklinks: ["mdpi.com (DA 92)", "springer.com (DA 93)", "biomedcentral.com (DA 91)", "cuni.cz (DA 85)"]
  },
  {
    name: "sialon.eu",
    description: "EU-gezondheidsonderzoek domein met backlinks van BBC, Europa.eu en The Conversation.",
    mozScore: 24,
    pageAuthority: 25,
    linkingDomains: 66,
    inboundLinks: "145+",
    followedLinks: "125+",
    category: "Gezondheid",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "145+",
    topBacklinks: ["bbc.co.uk (DA 95)", "europa.eu (DA 97)", "theconversation.com (DA 92)", "bbc.com (DA 94)"]
  },
  {
    name: "spaceinfoday.eu",
    description: "EU ruimtevaart domein met backlinks van Wikipedia, Europa.eu, ESA, UCM en ORF.",
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
    description: "Erasmus+ educatief EU-domein met backlinks van Pages.dev, Gameforge, GitBook en universiteiten.",
    mozScore: 26,
    pageAuthority: 34,
    linkingDomains: 452,
    inboundLinks: "6.2K+",
    followedLinks: "3.7K+",
    category: "Onderwijs",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "6.2K+",
    topBacklinks: ["sakura.ne.jp (DA 93)", "pages.dev (DA 91)", "biglobe.ne.jp (DA 91)", "gameforge.com (DA 90)", "gitbook.io (DA 85)"]
  },
  {
    name: "dunyaendesiedefilm.nl",
    description: "Nederlands film/media domein met backlinks van Wikipedia (EN, JA), IPFS, FilmWeb en Cinemagia.",
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
    description: "Brits radio/media domein met backlinks van Wikipedia, BBC, Bit.ly, Foursquare en DigitalSpy.",
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
    description: "Brits domein met backlinks van Wikipedia (EN, FR, JA, PL), Fandom en DigitalSpy.",
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
    description: "Belgisch netwerk domein met backlinks van Europa.eu, Wikipedia (ES, FR), Yumpu en Google.be.",
    mozScore: 26,
    pageAuthority: 28,
    linkingDomains: 135,
    inboundLinks: "710+",
    followedLinks: "445+",
    category: "Netwerk",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "710+",
    topBacklinks: ["europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "jimdofree.com (DA 95)", "yumpu.com (DA 91)"]
  },
  // DA 25
  {
    name: "gastrosafezone.eu",
    description: "Design en horeca veiligheid domein met backlinks van CNN, The Conversation, Pagina12 en Elle Decor.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 47,
    inboundLinks: "66+",
    followedLinks: "58+",
    category: "Design/Horeca",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "66+",
    topBacklinks: ["cnn.com (DA 94)", "theconversation.com (DA 92)", "realty.rbc.ru (DA 88)", "pagina12.com.ar (DA 82)", "elledecor.com (DA 80)"]
  },
  {
    name: "hotelgiotto.eu",
    description: "Hospitality domein met backlinks van Pages.dev, Wikitravel, Groupon UK en Travellerspoint.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 78,
    inboundLinks: "284+",
    followedLinks: "198+",
    category: "Hospitality",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "284+",
    topBacklinks: ["pages.dev (DA 91)", "wikitravel.org (DA 79)", "groupon.co.uk (DA 76)", "groupon.fr (DA 63)", "travellerspoint.com (DA 60)"]
  },
  {
    name: "recharge-green.eu",
    description: "Groene energie en opladen EU-domein met backlinks van Google Groups, MDPI, BioMedCentral en FAO.",
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
    description: "EU-project domein met backlinks van Europa.eu, El Diario, Stuttgarter Zeitung en universiteiten.",
    mozScore: 24,
    pageAuthority: 24,
    linkingDomains: 73,
    inboundLinks: "194+",
    followedLinks: "133+",
    category: "Projecten",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "194+",
    topBacklinks: ["europa.eu (DA 97)", "eldiario.es (DA 91)", "stuttgarter-zeitung.de (DA 81)", "techxplore.com (DA 79)", "uah.es (DA 70)"]
  },
  {
    name: "aaliance.eu",
    description: "Gezondheidszorg/ouderenzorg EU-domein met backlinks van Europa.eu, Cambridge, Springer, Heise en EurActiv.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 69,
    inboundLinks: "227+",
    followedLinks: "163+",
    category: "Zorg",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "227+",
    topBacklinks: ["europa.eu (DA 97)", "cambridge.org (DA 93)", "springer.com (DA 93)", "heise.de (DA 91)", "euractiv.com (DA 84)"]
  },
  {
    name: "unamec.be",
    description: "Belgisch medisch/zorg domein met backlinks van OUP, Yumpu, KU Leuven en UGent.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 93,
    inboundLinks: "188+",
    followedLinks: "150+",
    category: "Zorg",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "188+",
    topBacklinks: ["oup.com (DA 93)", "yumpu.com (DA 91)", "kuleuven.be (DA 83)", "ugent.be (DA 76)", "justlanded.com (DA 76)"]
  },
  {
    name: "josephines.be",
    description: "Belgisch lifestyle/hospitality domein met backlinks van Mixcloud, De Standaard en Elle.be.",
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
    description: "Historisch WO1 herdenkingsdomein met backlinks van Wikipedia (FR, DE), StackExchange, FranceInfo en INRIA.",
    mozScore: 25,
    pageAuthority: 27,
    linkingDomains: 122,
    inboundLinks: "443+",
    followedLinks: "318+",
    category: "Geschiedenis",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "443+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "stackexchange.com (DA 91)", "franceinfo.fr (DA 91)", "inria.fr (DA 83)"]
  },
  {
    name: "serletproject.eu",
    description: "EU-project domein met backlinks van Apple.com, Bit.ly, RTL.fr en Wikipedia Grieks.",
    mozScore: 25,
    pageAuthority: 30,
    linkingDomains: 491,
    inboundLinks: "2K+",
    followedLinks: "1.9K+",
    category: "Innovatie",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "2K+",
    topBacklinks: ["apple.com (DA 99)", "bit.ly (DA 94)", "home.pl (DA 93)", "cocolog-nifty.com (DA 90)", "rtl.fr (DA 89)"]
  },
  {
    name: "landmark-project.eu",
    description: "EU-project domein met backlinks van Europa.eu, Wikipedia DE, Cambridge en Yumpu.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 161,
    inboundLinks: "1.1K+",
    followedLinks: "954+",
    category: "Projecten",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "1.1K+",
    topBacklinks: ["europa.eu (DA 97)", "goo.gl (DA 95)", "de.wikipedia.org (DA 94)", "cambridge.org (DA 93)", "yumpu.com (DA 91)"]
  },
  {
    name: "tandemtech.be",
    description: "Belgisch tech domein met backlinks van Medium, TinyURL, Bit.ly, Tweakers en Knack.",
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
    description: "Nederlands media domein met backlinks van TinyURL, Ello, XS4ALL, Emerce en VPRO.",
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
    description: "EU-domein met backlinks van Pinterest, ANSA, RUG Groningen en Italiaanse universiteiten.",
    mozScore: 25,
    pageAuthority: 28,
    linkingDomains: 192,
    inboundLinks: "119.7K+",
    followedLinks: "119.6K+",
    category: "Algemeen",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "119.7K+",
    topBacklinks: ["pinterest.com (DA 94)", "ansa.it (DA 91)", "rug.nl (DA 81)", "cnr.it (DA 75)", "unito.it (DA 70)"]
  },
  // DA 25
  {
    name: "xcycle-h2020.eu",
    description: "EU H2020 mobiliteit domein met backlinks van Europa.eu, Springer, MDPI en Frontiers.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 145,
    inboundLinks: "275+",
    followedLinks: "202+",
    category: "Mobiliteit",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "275+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "mdpi.com (DA 92)", "frontiersin.org (DA 92)", "euractiv.com (DA 84)"]
  },
  {
    name: "heinekenthecity.nl",
    description: "Nederlands stedelijk/lifestyle domein met backlinks van Dezeen, Symbaloo, Fodors en VPRO.",
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
    description: "Fotografie EU-domein met backlinks van E-Monsite, JournalDuNet, CNRS en Wikipedia SV.",
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
    description: "EU-domein met backlinks van Wikipedia (EN, ES, PT, FR), Europa.eu en MDPI.",
    mozScore: 24,
    pageAuthority: 33,
    linkingDomains: 246,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Algemeen",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "1.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "pt.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)"]
  },
  {
    name: "maribe.eu",
    description: "Maritiem EU-domein met backlinks van Europa.eu, The Conversation, MDPI en Bristol University.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 90,
    inboundLinks: "146+",
    followedLinks: "115+",
    category: "Maritiem",
    price: "€125",
    backlinks: "146+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "mdpi.com (DA 92)", "siliconrepublic.com (DA 83)", "bristol.ac.uk (DA 78)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "200jaarstaten-generaal.nl",
    description: "Nederlands overheidsdomein met backlinks van NOS, Universiteit Leiden en Tweede Kamer.",
    mozScore: 22,
    pageAuthority: 21,
    linkingDomains: 37,
    inboundLinks: "150+",
    followedLinks: "136+",
    category: "Overheid/Cultuur",
    price: "€125",
    backlinks: "150+",
    topBacklinks: ["nos.nl (DA 90)", "universiteitleiden.nl (DA 82)", "transparent.com (DA 76)", "tweedekamer.nl (DA 64)", "rd.nl (DA 62)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eu-thor.eu",
    description: "EU-project domein met backlinks van Wikipedia (EN, FR, DE), Europa.eu, Yumpu en WHOI.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 156,
    inboundLinks: "18.4K+",
    followedLinks: "18.3K+",
    category: "Projecten",
    price: "€125",
    backlinks: "18.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "yumpu.com (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eccomascfd2006.nl",
    description: "Nederlands technisch domein met backlinks van TU Delft, Southampton, Liverpool en NTNU.",
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
    description: "Belgisch nationaal domein met backlinks van Wikipedia FR, BFMTV, Heise, NU.nl en Europe1.",
    mozScore: 23,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "113+",
    followedLinks: "87+",
    category: "Algemeen",
    price: "€125",
    backlinks: "113+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "bfmtv.com (DA 92)", "heise.de (DA 91)", "nu.nl (DA 91)", "europe1.fr (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "lifemanev.eu",
    description: "EU-project domein over duurzame landbouw met backlinks van MDPI, ITACYL en CSIC.",
    mozScore: 23,
    pageAuthority: 24,
    linkingDomains: 40,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "Duurzaamheid",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["mdpi.com (DA 92)", "itacyl.es (DA 45)", "cebas.csic.es (DA 42)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  // DA 22
  {
    name: "bruegel2019.be",
    description: "Cultureel erfgoed domein met backlinks van Campaign Archive, Knack.be en Brusselslife.",
    mozScore: 22,
    pageAuthority: 24,
    linkingDomains: 42,
    inboundLinks: "323+",
    followedLinks: "312+",
    category: "Kunst/Erfgoed",
    price: "€125",
    backlinks: "323+",
    topBacklinks: ["campaign-archive.com (DA 84)", "knack.be (DA 77)", "tntcode.com (DA 61)", "tvl.be (DA 52)", "brusselslife.be (DA 52)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "infoecmi.eu",
    description: "EU-informatie domein met backlinks van Wikipedia (EN, ES, PT, RU, DE), UCL en ETH Zürich.",
    mozScore: 22,
    pageAuthority: 31,
    linkingDomains: 259,
    inboundLinks: "1.2K+",
    followedLinks: "727+",
    category: "Informatie",
    price: "€125",
    backlinks: "1.2K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "pt.wikipedia.org (DA 96)", "ru.wikipedia.org (DA 94)", "ucl.ac.uk (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "romain-roquette.be",
    description: "Belgisch persoonlijk/portfolio domein met backlinks van Airbnb, Foursquare, The Culture Trip en Knack.be.",
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
    description: "Duits/EU lokaal bestuur domein met backlinks van Wikipedia (EN, ES, FR, RU, NL), Bit.ly en Creative Commons.",
    mozScore: 22,
    pageAuthority: 32,
    linkingDomains: 810,
    inboundLinks: "4.9K+",
    followedLinks: "4.7K+",
    category: "Overheid",
    price: "€125",
    backlinks: "4.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "ru.wikipedia.org (DA 94)", "creativecommons.org (DA 94)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "europeanmuseumforum.eu",
    description: "Europees museum forum domein met backlinks van Wikipedia (EN, ES, FR, RU, NL), Bit.ly en Creative Commons.",
    mozScore: 22,
    pageAuthority: 32,
    linkingDomains: 810,
    inboundLinks: "4.9K+",
    followedLinks: "4.7K+",
    category: "Cultuur",
    price: "€125",
    backlinks: "4.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "ru.wikipedia.org (DA 94)", "creativecommons.org (DA 94)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "escmalta2018.eu",
    description: "ESC evenement domein met backlinks van ETH Zürich, Azure, Copernicus, CSIC en Monash University.",
    mozScore: 22,
    pageAuthority: 25,
    linkingDomains: 102,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "Evenementen",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["ethz.ch (DA 89)", "azure.com (DA 84)", "copernicus.eu (DA 83)", "csic.es (DA 78)", "monash.edu (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eurasiancouncilforeignaffairs.eu",
    description: "Internationale betrekkingen domein met backlinks van Wikipedia (EN, ES, FR, ZH), Cambridge en The Diplomat.",
    mozScore: 23,
    pageAuthority: 23,
    linkingDomains: 65,
    inboundLinks: "184+",
    followedLinks: "98+",
    category: "Internationaal",
    price: "€125",
    backlinks: "184+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "bit.ly (DA 94)", "cam.ac.uk (DA 92)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "waterpipp.eu",
    description: "Water en milieu EU-project domein met backlinks van Europa.eu, Bit.ly, Ask.com en Campaign Archive.",
    mozScore: 22,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "1.2K+",
    followedLinks: "1.1K+",
    category: "Milieu",
    price: "€125",
    backlinks: "1.2K+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "ask.com (DA 88)", "campaign-archive.com (DA 84)", "worldwidetopsite.com (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "artsalivewales.org.uk",
    description: "Welsh kunst/cultuur domein met backlinks van The Guardian, Mirror, Eventbrite en Wales Online.",
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
    description: "Nederlands transport/station domein met backlinks van Wikipedia (FR, NL), NS, Nieuws.nl en ProRail.",
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
    description: "Medisch onderzoek EU-FP7 project domein met backlinks van Europa.eu, Springer, IIT en FGOV.be.",
    mozScore: 21,
    pageAuthority: 24,
    linkingDomains: 60,
    inboundLinks: "130+",
    followedLinks: "109+",
    category: "Onderzoek",
    price: "€79",
    backlinks: "130+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "iit.edu (DA 75)", "fgov.be (DA 72)", "upc.edu (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "ismagazine.nl",
    description: "Nederlands magazine/media domein met backlinks van UNESCO, WUR en Startpagina.",
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
    description: "Brits betting/gaming domein met backlinks van OVH, Joomla.org, WSU en CSIC.",
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
    description: "Nederlands sport/gymnastiek domein met backlinks van LiveInternet, Pages.dev, XSRV en Toolforge.",
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
    description: "Nanotechnologie EU-project domein met backlinks van Springer, Sapo.pt, Pages.dev en universiteiten (UPM, UC3M).",
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
    description: "Smart city en mobiliteit project domein met backlinks van Europa.eu, Medium, MDPI en Telecom TV.",
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
const PremiumDomains = () => {
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
      const firstError = Object.values(errorResult.errors)[0] || "Controleer uw invoer";
      toast({
        title: "Vul alle verplichte velden correct in",
        description: firstError,
        variant: "destructive"
      });
      return;
    }

    const { data } = validation;
    
    // Build safe mailto URL with sanitized data
    const subject = `Premium Domein Aanvraag: ${data.domain}`;
    const body = `Naam: ${data.name}\nE-mail: ${data.email}\nDomein: ${data.domain}\n\nBericht:\n${data.message || ""}`;
    
    window.location.href = buildSafeMailtoUrl("support@iaee.eu", subject, body);
    
    toast({
      title: "Aanvraag wordt verzonden",
      description: "Uw e-mailprogramma wordt geopend om de aanvraag te versturen."
    });
  };

  const handleDomainInquiry = (domainName: string) => {
    setFormData(prev => ({ ...prev, domain: domainName }));
    scrollToSection("contact");
  };

  return (
    <>
      <Helmet>
        <html lang="nl" />
        <title>Premium Expired Domeinnamen met Backlinks | Hoge Autoriteit & SEO-Waarde</title>
        <meta name="description" content="Expired domeinnaam met backlinks kopen? Betrouwbare expired domeinen met hoge autoriteit en SEO-waarde. Premium domeinnaam kopen voor snellere Google rankings. Direct beschikbaar." />
        <meta name="keywords" content="expired domeinnaam kopen, expired domeinnamen met backlinks, domeinnaam met autoriteit, betrouwbare expired domeinen, premium domeinnaam kopen, domeinnaam met SEO waarde, oude domeinnaam met links, beste domeinnamen te koop" />
        <link rel="canonical" href="https://www.iaee.eu/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" />
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
        <meta property="og:title" content="Premium Expired Domeinnamen met Backlinks | Hoge Autoriteit & SEO-Waarde" />
        <meta property="og:description" content="Expired domeinnaam met backlinks kopen? Betrouwbare expired domeinen met hoge autoriteit en SEO-waarde. Direct beschikbaar." />
        <meta property="og:url" content="https://www.iaee.eu/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="IAEE Premium Domains" />
        <meta property="og:image" content="https://www.iaee.eu/images/premium-domains-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:alt" content="Premium Domains - Hoge Autoriteit Domeinnamen" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Expired Domeinnamen met Backlinks" />
        <meta name="twitter:description" content="Betrouwbare expired domeinen met hoge autoriteit en SEO-waarde. Direct beschikbaar." />
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
                "description": "Specialist in premium expired domeinnamen met hoge autoriteit en SEO-waarde",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "support@iaee.eu",
                  "contactType": "sales"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://iaee.eu/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde/#webpage",
                "url": "https://iaee.eu/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde",
                "name": "Premium Expired Domeinnamen met Backlinks | Hoge Autoriteit & SEO-Waarde",
                "description": "Expired domeinnaam met backlinks kopen? Betrouwbare expired domeinen met hoge autoriteit en SEO-waarde.",
                "inLanguage": "nl",
                "isPartOf": {"@id": "https://iaee.eu/#website"}
              },
              {
                "@type": "WebSite",
                "@id": "https://iaee.eu/#website",
                "url": "https://iaee.eu",
                "name": "IAEE Premium Domains",
                "publisher": {"@id": "https://iaee.eu/#organization"}
              },
              {
                "@type": "ItemList",
                "name": "Premium Expired Domeinnamen",
                "description": "Gecureerde selectie van premium expired domeinnamen met hoge autoriteit",
                "numberOfItems": ${premiumDomains.length},
                "itemListElement": ${JSON.stringify(premiumDomains.slice(0, 10).map((domain, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                   "item": {
                    "@type": "Product",
                    "name": domain.name,
                    "description": domain.description,
                    "category": domain.category,
                    ...(domain.image ? {"image": "https://www.nederlandse-frontend-vibe.lovable.app" + domain.image} : {}),
                    "offers": {
                      "@type": "Offer",
                      "price": domain.price.replace("€", ""),
                      "priceCurrency": "EUR",
                      "availability": "https://schema.org/InStock"
                    }
                  }
                })))}
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Wat is een expired domein?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Een expired domein is een domeinnaam die niet is verlengd door de vorige eigenaar en nu beschikbaar is voor registratie. Deze domeinen behouden vaak hun opgebouwde backlinks en autoriteit."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Waarom zijn backlinks belangrijk?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Backlinks zijn een van de belangrijkste rankingfactoren voor Google. Domeinen met kwalitatieve backlinks van gezaghebbende websites hebben een voorsprong in zoekmachineresultaten."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Hoe werkt een 301 redirect voor SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Een 301 redirect stuurt bezoekers en zoekmachines permanent door van het oude domein naar uw nieuwe website, waarbij de linkwaarde wordt overgedragen voor betere rankings."
                    }
                  }
                ]
              }
            ]
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Language Switcher */}
        <LanguageSwitcher currentLanguage="nl" />
        
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 flex-shrink-0" />
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent hover:from-amber-300 hover:to-amber-500 transition-all truncate">
                Premium Domeinen
              </span>
            </RouterLink>
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <RouterLink to="/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
                <Home className="h-4 w-4" />
                Home
              </RouterLink>
              <button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Domeinen
              </button>
              <button onClick={() => scrollToSection("why-premium")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Waarom Premium?
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
                Contact
              </Button>
            </nav>
            <Button 
              onClick={() => scrollToSection("domains")}
              className="md:hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-xs px-3 py-2"
            >
              Domeinen
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 sm:mb-6 bg-amber-500/10 text-amber-400 border-amber-500/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 inline" />
                Exclusieve Collectie Premium Domeinen
              </Badge>
              
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Premium Expired domeinnamen met backlinks hoge autoriteit & SEO-Waarde
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Versterk uw online aanwezigheid met domeinnamen die al jaren autoriteit hebben opgebouwd. 
                Ideaal voor snellere rankings, krachtige backlinks en directe SEO-voordelen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("domains")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-105"
                >
                  Bekijk Domeinen
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("why-premium")}
                  className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6"
                >
                  Meer Informatie
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2">
                {[
                  { label: "Gemiddelde MOZ Score", value: "29+" },
                  { label: "Premium Domeinen", value: "110+" },
                  { label: "Jaren Ervaring", value: "10+" },
                  { label: "Tevreden Klanten", value: "500+" }
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
        <section id="domains" className="py-10 sm:py-16 md:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
          
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-3 sm:mb-4 bg-slate-800 text-amber-400 border-slate-700 text-xs sm:text-sm">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 inline" />
                Beschikbare Domeinen
              </Badge>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
                Premium Domeinnamen Te Koop
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto text-sm sm:text-base px-2">
                Elk domein is zorgvuldig geselecteerd op basis van MOZ-autoriteit, backlinkprofiel en SEO-potentieel. 
                Wil je een <strong className="text-white">expired domeinnaam kopen</strong> of zoek je <strong className="text-white">betrouwbare expired domeinamen</strong>? Bekijk ons aanbod hieronder.
              </p>
            </div>
            
            {/* SEO Intro Text */}
            <div className="max-w-5xl mx-auto mb-6 sm:mb-8 bg-slate-800/30 border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <p className="text-slate-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                <strong className="text-white">Op zoek naar een domeinnaam met echte SEO-waarde?</strong> Bij ons koop je betrouwbare <strong className="text-amber-400">expired domeinnamen met backlinks</strong> en hoge autoriteit, zorgvuldig gecontroleerd op kwaliteit en historie. Met een expired domein start je niet vanaf nul, maar profiteer je direct van bestaande links, vertrouwen en online geschiedenis.
              </p>
              <p className="text-slate-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                <strong className="text-amber-400">Wij zijn gespecialiseerd in .EU en andere Europese domeinextensies</strong> en onderscheiden ons nadrukkelijk binnen het segment van Europese webnamen.
              </p>
              <p className="text-slate-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Deze expired domains beschikken over bestaande backlinks van <strong className="text-amber-400">gerenommeerde bedrijven, media instituten en overheidsorganisaties</strong> — essentiële links die voor normale websites zeer moeilijk tot onmogelijk te verkrijgen zijn. Expired domains zijn een strategisch voordeel dat topmarketeers, agencies en investeerders al jaren inzetten om sneller te groeien dan de rest.
              </p>
              <p className="text-slate-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Naast expired domeinnamen bieden wij ook <strong className="text-amber-400">premium domeinnamen</strong> aan: korte, krachtige namen met merkwaarde en commerciële potentie. Of je nu een website, webshop of SEO-project start — een <strong className="text-white">domeinnaam met autoriteit</strong> geeft je een duidelijke voorsprong in Google.
              </p>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                <strong className="text-white">Veel gezocht:</strong> expired domeinnaam met backlinks kopen • betrouwbare expired domeinen • expired domeinnaam met autoriteit • premium domeinnaam kopen • domeinnaam met SEO waarde • oude domeinnaam met links • beste domeinnamen te koop
              </p>
            </div>

            {/* VAT Notice */}
            <div className="max-w-5xl mx-auto mb-6 sm:mb-10 text-center px-2">
              <p className="text-xs sm:text-sm text-slate-300 font-medium bg-slate-800/40 border border-slate-700/40 rounded-lg px-3 sm:px-4 py-2 sm:py-3 inline-block">
                <span className="text-amber-400 font-semibold">BTW-informatie:</span> Prijzen zijn exclusief BTW voor particuliere klanten binnen de EU. Zakelijke klanten binnen de EU kunnen de BTW verleggen. Voor klanten buiten de EU wordt geen BTW berekend.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {premiumDomains.map((domain, index) => (
                <Card 
                  key={index} 
                  className={`h-full flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur transition-all duration-300 group relative overflow-hidden ${
                    'sold' in domain && domain.sold 
                      ? 'opacity-75' 
                      : 'hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10'
                  }`}
                >
                  {/* Sold Banner */}
                  {'sold' in domain && domain.sold && (
                    <div className="absolute top-8 -right-12 z-20 rotate-45 bg-red-600 text-white text-sm sm:text-base font-extrabold py-2 px-14 shadow-xl border-y-2 border-red-400 tracking-wider uppercase">
                      VERKOCHT
                    </div>
                  )}
                  <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-4 md:p-6">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="outline" className="text-[10px] sm:text-xs border-slate-600 text-slate-400 flex-shrink-0">
                        {domain.category}
                      </Badge>
                      {domain.image && (
                        <img src={domain.image} alt={`${domain.name} premium domain`} className="w-8 h-8 rounded object-cover flex-shrink-0" />
                      )}
                      <div className="flex items-center gap-1 bg-amber-500/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex-shrink-0">
                        <BarChart3 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
                        <span className="text-[10px] sm:text-xs font-semibold text-amber-400">MOZ {domain.mozScore}</span>
                      </div>
                    </div>
                    <CardTitle className="text-base sm:text-lg md:text-xl text-white group-hover:text-amber-400 transition-colors mt-2 sm:mt-3 break-all">
                      {domain.name}
                    </CardTitle>
                    <CardDescription className="text-slate-400 text-xs sm:text-sm">
                      {domain.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow p-3 sm:p-4 md:p-6 pt-0">
                    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-slate-400">
                          <Link className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
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
                          <div className="flex flex-wrap gap-0.5 sm:gap-1">
                            {domain.topBacklinks.slice(0, 5).map((link, i) => (
                              <Badge key={i} variant="outline" className="text-[8px] sm:text-[10px] border-amber-500/30 text-amber-400/80 bg-amber-500/5 px-1 sm:px-1.5 py-0">
                                {link}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Use Cases */}
                      {domain.useCases && domain.useCases.length > 0 && (
                        <div className="text-[10px] sm:text-xs">
                          <span className="text-slate-500 block mb-1">Geschikt voor:</span>
                          <div className="flex flex-wrap gap-0.5 sm:gap-1">
                            {domain.useCases.map((useCase, i) => (
                              <Badge key={i} variant="outline" className="text-[8px] sm:text-[10px] border-emerald-500/30 text-emerald-400/80 bg-emerald-500/5 px-1 sm:px-1.5 py-0">
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
                        <span className="text-xs sm:text-sm font-medium text-slate-300">Prijs</span>
                        <span className="text-base sm:text-lg font-bold text-amber-400">{domain.price}</span>
                      </div>
                      
                      {'stripeButtonId' in domain && domain.stripeButtonId ? (
                        <div className="flex flex-col gap-2 sm:gap-3">
                          <div 
                            className="stripe-button-container flex justify-center"
                          >
                            <StripeBuyButton buyButtonId={domain.stripeButtonId as string} className="stripe-button-container flex justify-center" />
                          </div>
                          <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-center" data-nosnippet>
                            <div className="flex items-center justify-center gap-0.5 sm:gap-1 flex-wrap">
                              {/* Apple Pay */}
                              <div className="flex items-center bg-black rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
                                <svg className="h-2 sm:h-2.5 w-5 sm:w-6" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.5 4C9.5 4 10.3 3.5 10.8 2.7C11.3 2 11.5 1 11.4 0C10.5 0.1 9.4 0.6 8.8 1.4C8.3 2 7.9 3 8 4C9 4 9.5 4 8.5 4Z" fill="white"/>
                                  <path d="M11.4 4.3C9.8 4.2 8.4 5.2 7.6 5.2C6.8 5.2 5.6 4.3 4.3 4.4C2.6 4.4 1 5.3 0.2 6.9C-1.5 10 0.1 14.5 1.7 17C2.5 18.2 3.5 19.6 4.8 19.5C6 19.5 6.5 18.7 8 18.7C9.5 18.7 10 19.5 11.3 19.5C12.6 19.5 13.5 18.2 14.3 17C15.2 15.7 15.6 14.4 15.6 14.3C15.6 14.3 12.5 13.1 12.5 9.6C12.5 6.5 15 5.1 15.1 5C13.8 3.1 11.8 4.3 11.4 4.3Z" fill="white"/>
                                  <text x="18" y="14" fill="white" fontSize="10" fontWeight="500" fontFamily="Arial">Pay</text>
                                </svg>
                              </div>
                              {/* Google Pay */}
                              <div className="flex items-center bg-white rounded px-0.5 sm:px-1 py-0.5 border border-slate-300 h-3 sm:h-4">
                                <svg className="h-2 sm:h-2.5 w-6 sm:w-10" viewBox="0 0 65 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <text x="0" y="14" fontSize="11" fontWeight="500" fontFamily="Arial">
                                    <tspan fill="#4285F4">G</tspan>
                                  </text>
                                  <text x="8" y="14" fill="#5F6368" fontSize="11" fontWeight="500" fontFamily="Arial">Pay</text>
                                </svg>
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
                                Veilige betaling via Stripe
                                <br />
                                Automatisch omgerekend naar uw lokale valuta
                              </p>
                              <p className="text-[8px] sm:text-[10px] text-slate-400 leading-tight mt-2 sm:mt-3">
                                Na betaling ontvangt u binnen 24 uur de verhuistoken (EPP/Auth-code) op uw e-mailadres.
                                <br />
                                Controleer ook uw spamfolder.
                              </p>
                              <a href="#domein-verhuizen" className="text-[8px] sm:text-[10px] text-amber-400 hover:text-amber-300 underline mt-1.5 sm:mt-2">
                                Hoe werkt verhuizen?
                              </a>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-3">
                          {domain.stripePaymentLink ? (
                            <a 
                              href={domain.stripePaymentLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold rounded-md transition-all duration-200 shadow-md hover:shadow-lg text-lg"
                            >
                              Koop Nu
                            </a>
                          ) : (
                            <div 
                              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#F59E0B] text-slate-950 font-bold rounded-md shadow-md text-lg"
                            >
                              Koop Nu
                            </div>
                          )}
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
                              {/* GPay */}
                              <div className="flex items-center bg-white rounded px-1 py-0.5 border border-slate-300 h-4">
                                <span className="font-bold text-[7px]" style={{fontFamily: 'Arial'}}>
                                  <span style={{color: '#4285F4'}}>G</span>
                                  <span style={{color: '#5F6368'}}>Pay</span>
                                </span>
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
                                Veilige betaling via Stripe
                                <br />
                                Automatisch omgerekend naar uw lokale valuta
                              </p>
                              <p className="text-[10px] text-slate-400 leading-tight mt-3">
                                Na betaling ontvangt u binnen 24 uur de verhuistoken (EPP/Auth-code) op uw e-mailadres.
                                <br />
                                Controleer ook uw spamfolder.
                              </p>
                              <a href="#domein-verhuizen" className="text-[10px] text-amber-400 hover:text-amber-300 underline mt-2">
                                Hoe werkt verhuizen?
                              </a>
                            </div>
                          </div>
                        </div>
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
                Strategisch Voordeel
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Waarom Premium Domeinnamen?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Premium domeinnamen met hoge MOZ-autoriteit zijn een strategische investering die u een enorme voorsprong geeft in de zoekresultaten.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Snellere Rankings in Google",
                  description: "Domeinen met bestaande autoriteit ranken sneller dan nieuwe domeinen. Google vertrouwt websites met een bewezen track record."
                },
                {
                  icon: Shield,
                  title: "Meer Vertrouwen bij Google",
                  description: "Een domein met jarenlange geschiedenis en kwaliteitsbacklinks wordt door Google gezien als betrouwbaarder en krijgt hogere rankings."
                },
                {
                  icon: Target,
                  title: "Hogere Klikratio's (CTR)",
                  description: "Premium domeinnamen wekken vertrouwen bij gebruikers, wat leidt tot hogere klikratio's in zoekresultaten en advertenties."
                },
                {
                  icon: Zap,
                  title: "Direct SEO-Voordeel",
                  description: "In plaats van jaren te wachten op het opbouwen van autoriteit, profiteert u direct van de bestaande SEO-waarde van het domein."
                },
                {
                  icon: Globe,
                  title: "Direct Type-In Traffic",
                  description: "Memorabele premium domeinnamen genereren direct verkeer van gebruikers die het domein direct in hun browser typen."
                },
                {
                  icon: Award,
                  title: "Duurzame SEO-Investering",
                  description: "Een premium domein is een actief dat in waarde stijgt naarmate uw online aanwezigheid groeit en de autoriteit toeneemt."
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
                    De Kracht van MOZ Domain Authority
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    MOZ Domain Authority (DA) is een score van 1-100 die voorspelt hoe goed een website zal ranken in zoekmachines. 
                    Hoe hoger de score, hoe meer autoriteit het domein heeft opgebouwd door kwaliteitsbacklinks, leeftijd en betrouwbaarheid.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="rounded-lg bg-black border border-cyan-500/50 p-4 text-center">
                      <div className="text-xl font-bold text-cyan-400 mb-1">DA 20-25</div>
                      <div className="text-sm font-medium text-white">Goede Autoriteit</div>
                    </div>
                    
                    <div className="rounded-lg bg-black border border-yellow-500/50 p-4 text-center">
                      <div className="text-xl font-bold text-yellow-400 mb-1">DA 25-30</div>
                      <div className="text-sm font-medium text-white">Sterke Autoriteit</div>
                    </div>
                    
                    <div className="rounded-lg bg-black border border-green-500/50 p-4 text-center">
                      <div className="text-xl font-bold text-green-400 mb-1">DA 30+</div>
                      <div className="text-sm font-medium text-white">Premium Autoriteit</div>
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
                SEO Strategieën
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Hoe Werken SEO-Redirects en Autoriteitsopbouw?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Er zijn meerdere strategische manieren om premium domeinen in te zetten voor maximale SEO-impact.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "301 Redirect Strategie",
                  description: "Een 301 redirect stuurt alle SEO-waarde en autoriteit van het premium domein door naar uw hoofddomein. Dit is de snelste manier om uw rankings te verbeteren.",
                  benefits: [
                    "Directe overdracht van link juice",
                    "Behoud van alle backlinks",
                    "Snelle boost in autoriteit",
                    "Eenmalige setup, blijvend effect"
                  ]
                },
                {
                  title: "Authority Stacking",
                  description: "Bouw een netwerk van autoritaire domeinen die allemaal naar uw hoofdsite linken. Dit creëert een krachtig ecosysteem van relevante, hoogwaardige backlinks.",
                  benefits: [
                    "Meerdere autoriteitsbronnen",
                    "Thematische relevantie",
                    "Natuurlijk linkprofiel",
                    "Langetermijn SEO-strategie"
                  ]
                },
                {
                  title: "Als Hoofddomein Gebruiken",
                  description: "Start uw nieuwe project direct met een domein dat al autoriteit heeft. Dit bespaart jaren aan linkbuilding en domeinleeftijd opbouw.",
                  benefits: [
                    "Direct starten met autoriteit",
                    "Bestaand vertrouwen van Google",
                    "Snellere indexatie",
                    "Voorsprong op concurrentie"
                  ]
                },
                {
                  title: "Private Blog Network (PBN)",
                  description: "Gebruik premium domeinen om waardevolle content sites op te zetten die krachtige backlinks genereren naar uw hoofdsite.",
                  benefits: [
                    "Volledige controle over backlinks",
                    "Thematische content sites",
                    "Diverse linkprofielen",
                    "Schaalbare linkbuilding"
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
                  Waarom Deze Domeinen Uniek Zijn
                </h3>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Onze premium domeinen zijn zorgvuldig geselecteerd en voldoen aan strikte kwaliteitseisen.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { icon: Shield, title: "Schone Geschiedenis", desc: "Geen spam of penaltyverleden" },
                  { icon: Link, title: "Kwalitatieve Backlinks", desc: "Van betrouwbare bronnen" },
                  { icon: BarChart3, title: "Hoge DA Score", desc: "Minimaal DA 20+" },
                  { icon: Globe, title: "Relevante Niches", desc: "Thematisch passende domeinen" }
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
                Veelgestelde Vragen
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                FAQ over Premium Domeinen & SEO
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Waar kan ik een expired domeinnaam met backlinks kopen?",
                    answer: "Een expired domeinnaam met backlinks koop je het beste bij een gespecialiseerde verkoper die domeinen handmatig controleert op kwaliteit, historie en autoriteit. Zo voorkom je dat je een domeinnaam koopt met spamlinks of SEO-problemen. Wij bieden alleen betrouwbare expired domeinen aan die zorgvuldig zijn gecontroleerd."
                  },
                  {
                    question: "Wat is een betrouwbare expired domeinnaam met hoge autoriteit?",
                    answer: "Een betrouwbare expired domeinnaam met hoge autoriteit is een domein dat kwalitatieve backlinks heeft, een schone websitegeschiedenis, geen spam-, gok- of adultverleden en relevante links uit echte content. Dit type domeinnaam biedt echte SEO-waarde en geeft je een voorsprong in Google."
                  },
                  {
                    question: "Hoeveel SEO-waarde heeft een expired domeinnaam met links?",
                    answer: "De SEO-waarde van een expired domeinnaam met links zit vooral in bestaande backlinks, opgebouwde domeinautoriteit en sneller vertrouwen bij Google. Dit kan de tijd om te ranken aanzienlijk verkorten — vaak maanden tot jaren sneller dan met een nieuwe domeinnaam."
                  },
                  {
                    question: "Is een expired domeinnaam met autoriteit beter dan linkbuilding?",
                    answer: "In veel gevallen wel. Met een expired domeinnaam koop je bestaande links en autoriteit, terwijl linkbuilding tijdrovend, duur en risicovol kan zijn. Een oude domeinnaam met SEO-waarde geeft je direct een voorsprong zonder maandenlange investering in linkbuilding."
                  },
                  {
                    question: "Kan ik een expired domeinnaam gebruiken voor een nieuwe website?",
                    answer: "Ja. Je kunt een expired domeinnaam met SEO-waarde perfect inzetten voor een nieuwe website, zolang de inhoud logisch aansluit bij het onderwerp en de historie van het domein. De backlinks blijven actief en je profiteert direct van de opgebouwde autoriteit."
                  },
                  {
                    question: "Wat is het verschil tussen een premium domeinnaam en een expired domeinnaam?",
                    answer: "Een premium domeinnaam is vooral waardevol vanwege naamkwaliteit en merkwaarde, terwijl een expired domeinnaam met backlinks extra SEO-autoriteit en historie meebrengt. Beide kunnen waardevol zijn, afhankelijk van je doel. Sommige domeinen combineren beide voordelen."
                  },
                  {
                    question: "Waarom zijn expired domeinnamen met backlinks duurder?",
                    answer: "Expired domeinnamen met backlinks zijn duurder omdat ze al SEO-waarde hebben, ze tijd en kosten besparen en ze een snellere start mogelijk maken. Je betaalt voor opgebouwd vertrouwen, niet alleen voor een naam. De investering verdient zich vaak snel terug door betere rankings."
                  },
                  {
                    question: "Zijn expired domeinnamen met autoriteit geschikt voor webshops?",
                    answer: "Ja. Voor webshops is vertrouwen cruciaal. Een expired domeinnaam met hoge autoriteit kan bijdragen aan betere zichtbaarheid, hogere conversies en snellere indexatie. Dit geeft je webshop een voorsprong op concurrenten die met een nieuwe domeinnaam beginnen."
                  },
                  {
                    question: "Kan ik een premium domeinnaam combineren met SEO-voordelen?",
                    answer: "Ja. Sommige premium domeinnamen zijn ook expired domeinen met een sterke linkhistorie. Dit combineert merkwaarde met SEO-autoriteit en is vaak het meest waardevol. In ons portfolio vind je verschillende domeinen die beide voordelen bieden."
                  },
                  {
                    question: "Waarom kiezen steeds meer ondernemers voor expired domeinnamen met SEO-waarde?",
                    answer: "Omdat ondernemers zoeken naar sneller resultaat in Google, minder afhankelijkheid van linkbuilding en een sterke basis voor groei. Een betrouwbare expired domeinnaam met backlinks en autoriteit biedt precies die voorsprong die het verschil maakt."
                  },
                  {
                    question: "Wat is Domain Authority (DA) en waarom is het belangrijk?",
                    answer: "Domain Authority is een score van 1-100 ontwikkeld door MOZ die voorspelt hoe goed een website zal ranken in zoekmachines. Een hoger DA betekent meer autoriteit en betere kansen om hoog te ranken. Het is gebaseerd op factoren zoals het aantal en de kwaliteit van backlinks, de leeftijd van het domein en de algehele betrouwbaarheid."
                  },
                  {
                    question: "Hoe werkt een 301 redirect voor SEO?",
                    answer: "Een 301 redirect is een permanente doorverwijzing die zoekmachines vertelt dat een pagina permanent is verplaatst. Wanneer u een premium domein 301-redirect naar uw site, wordt een groot deel van de SEO-waarde (link juice) van dat domein overgedragen naar uw site. Dit kan uw rankings significant verbeteren."
                  },
                  {
                    question: "Hoelang duurt het voordat ik resultaten zie?",
                    answer: "De effecten van een domeinoverdracht of 301 redirect zijn meestal binnen 2-8 weken zichtbaar in de zoekresultaten. Dit hangt af van hoe vaak Google uw site crawlt en de huidige staat van uw website. Premium domeinen met actieve backlinks tonen vaak sneller resultaten."
                  },
                  {
                    question: "Wat is de beste manier om expired domeinnamen met autoriteit te vinden?",
                    answer: "De beste manier is via een gespecialiseerde verkoper die domeinen vooraf controleert. Zelf zoeken via auction sites brengt risico's met zich mee. Wij selecteren alleen domeinnamen met kwalitatieve links, geen spamhistorie en echte SEO-waarde. Zo weet je zeker dat je investeert in een betrouwbaar domein."
                  },
                  {
                    question: "Waarom staan er soms websites uit jullie portfolio in de geschiedenis van een domein?",
                    answer: "Sommige domeinnamen in ons portfolio zijn eerder ingezet voor onze eigen projecten, testwebsites of 301 redirects. Dit betreft websites zoals NailTalk, OntwerpNovi, OliveVines en vergelijkbare projecten. Dit is juist een voordeel: deze domeinen hebben bewezen resultaten en zijn actief getest op SEO-prestaties. Al onze domeinnamen worden vóór verkoop grondig gecontroleerd bij meerdere bronnen (zoals webgeschiedenis-archieven, Google, Ahrefs, MOZ en spamcheckers) en zijn volledig vrij van schadelijk verleden zoals spam, adult content of gokgerelateerde historie. Een website uit ons eigen portfolio in de geschiedenis is dus een teken van kwaliteit en zorgvuldig beheer — geen reden tot zorg."
                  },
                  {
                    question: "Hoe werkt SEO en linkbuilding? En waarom moet ik mijn gekochte domein blijven onderhouden?",
                    answer: "SEO (Search Engine Optimization) draait om het optimaliseren van uw website zodat zoekmachines zoals Google deze beter kunnen vinden, begrijpen en hoger ranken. Linkbuilding is een cruciaal onderdeel hiervan: het verkrijgen van backlinks (verwijzingen) van andere websites naar de uwe. Deze links fungeren als 'stemmen van vertrouwen' en vertellen Google dat uw content waardevol is.\n\n**Waarom onderhoud essentieel is:**\nEen premium domeinnaam met bestaande backlinks geeft u een sterke basis, maar geen enkele domeinnaam biedt garanties op rankings. SEO is een doorlopend proces. Backlinks kunnen na verloop van tijd verdwijnen wanneer verwijzende websites offline gaan of content verwijderen. Daarnaast veranderen Google's algoritmes regelmatig, waardoor wat vandaag werkt morgen anders kan zijn.\n\n**Tips voor succesvol onderhoud en linkbuilding:**\n• **Creëer waardevolle content** — Publiceer regelmatig relevante, originele artikelen, gidsen of tools die anderen willen delen en naar willen linken.\n• **Gastbloggen** — Schrijf artikelen voor gerespecteerde websites in uw branche met een link terug naar uw site.\n• **Broken link building** — Zoek kapotte links op relevante websites en bied uw content aan als vervanging.\n• **HARO/Helpareporter** — Reageer op journalistenvragen om vermeldingen en links te krijgen in nieuwsartikelen.\n• **Sociale media en PR** — Deel uw content actief en bouw relaties op met influencers en media.\n• **Interne linkstructuur** — Zorg voor logische interne links tussen uw pagina's om autoriteit te verdelen.\n• **Monitor uw backlinks** — Gebruik tools zoals Ahrefs, MOZ of SEMrush om uw linkprofiel te bewaken en schadelijke links te disavowen.\n• **Technische SEO** — Zorg voor snelle laadtijden, mobielvriendelijk design en een veilige HTTPS-verbinding.\n\n**Belangrijk om te weten:**\nGeen enkele domeinnaam, hoe sterk ook, garandeert topposities in Google. De opgebouwde autoriteit geeft u een voorsprong, maar succes hangt af van continue inspanning: regelmatige content, actieve linkbuilding en technisch onderhoud. Zie uw premium domein als een stevige fundering — het bouwwerk erboven bepaalt u zelf met consistente SEO-inspanningen."
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
                    <h3 className="font-semibold">Complete Gids: 35 Vragen over Expired Domeinnamen & SEO</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 pb-6 leading-relaxed">
                    <div className="space-y-8 whitespace-pre-line">
                      {[
                        {
                          question: "1. Welke domeinnaam moet ik kopen als beginner?",
                          answer: "Als beginner kies je het beste een domeinnaam die makkelijk te onthouden is, duidelijk aangeeft wat je doet en vertrouwen uitstraalt. Veel starters zoeken op \"welke domeinnaam moet ik kopen\" en komen automatisch bij nieuwe domeinen uit, terwijl een betrouwbare expired domeinnaam vaak al autoriteit en waarde heeft opgebouwd."
                        },
                        {
                          question: "2. Wat is het verschil tussen een nieuwe domeinnaam en een expired domeinnaam?",
                          answer: "Een nieuwe domeinnaam heeft geen geschiedenis en begint volledig vanaf nul. Een expired domeinnaam is eerder geregistreerd geweest en kan nog backlinks, autoriteit en vertrouwen bij Google hebben. Dat maakt een expired domeinnaam vaak aantrekkelijker voor SEO en zichtbaarheid."
                        },
                        {
                          question: "3. Is het beter om een nieuwe domeinnaam te kopen of een expired domeinnaam?",
                          answer: "Wie zoekt op \"nieuwe domeinnaam of expired domeinnaam\" vergelijkt meestal snelheid en resultaat. Voor branding kan een nieuwe naam werken, maar voor sneller vindbaar worden in Google biedt een goede expired domeinnaam vaak een duidelijke voorsprong."
                        },
                        {
                          question: "4. Waarom scoort mijn nieuwe website zo slecht in Google?",
                          answer: "Nieuwe websites moeten hun betrouwbaarheid nog opbouwen. Zonder backlinks en geschiedenis duurt dit vaak maanden. Een expired domeinnaam met goede links kan ervoor zorgen dat je niet helemaal opnieuw hoeft te beginnen."
                        },
                        {
                          question: "5. Is een expired domeinnaam veilig om te kopen?",
                          answer: "Ja, mits het gaat om een gecontroleerde en betrouwbare expired domeinnaam. Het risico zit niet in \"expired\", maar in domeinen die niet zijn gecontroleerd op spam, misbruik of slechte backlinks."
                        },
                        {
                          question: "6. Wat betekent een domeinnaam met goede backlinks?",
                          answer: "Een domeinnaam met goede backlinks heeft verwijzingen van echte, relevante websites. Deze links zorgen voor autoriteit en vertrouwen bij zoekmachines, wat essentieel is voor SEO-prestaties."
                        },
                        {
                          question: "7. Waarom zijn backlinks belangrijk bij het kopen van een domeinnaam?",
                          answer: "Backlinks zijn één van de belangrijkste rankingfactoren van Google. Wanneer je zoekt op \"SEO domeinnaam kopen\", zoek je eigenlijk naar een domein dat al vertrouwen heeft opgebouwd — precies wat een goede expired domeinnaam biedt."
                        },
                        {
                          question: "8. Hoe kan ik zien of een expired domeinnaam betrouwbaar is?",
                          answer: "Een betrouwbare expired domeinnaam is gecontroleerd op: websitegeschiedenis, kwaliteit van backlinks, afwezigheid van spam, gokken of adult content. Als verkoper selecteer je alleen domeinen die aan deze criteria voldoen."
                        },
                        {
                          question: "9. Kan ik een expired domeinnaam gebruiken voor een nieuwe website?",
                          answer: "Ja. Je kunt een expired domeinnaam perfect gebruiken voor een compleet nieuw project. De inhoud is nieuw, maar de domeinnaam brengt al online autoriteit mee."
                        },
                        {
                          question: "10. Is een expired domeinnaam geschikt voor beginners?",
                          answer: "Zeker. Beginners profiteren vaak juist het meest omdat ze: sneller zichtbaarheid krijgen, minder SEO-achterstand hebben, een professionelere start maken."
                        },
                        {
                          question: "11. Waarom zijn sommige domeinnamen duurder dan andere?",
                          answer: "Zoekopdrachten zoals \"waarom is een domeinnaam zo duur\" komen vaak voort uit onbegrip over waarde. De prijs wordt bepaald door: naamkwaliteit, SEO-waarde, backlinks, commerciële toepasbaarheid."
                        },
                        {
                          question: "12. Kan ik een expired domeinnaam later weer verkopen?",
                          answer: "Ja. Veel mensen zoeken naar \"domeinnaam als investering\". Een sterke expired domeinnaam behoudt vaak zijn waarde en kan zelfs in prijs stijgen."
                        },
                        {
                          question: "13. Kan een expired domeinnaam slecht zijn voor SEO?",
                          answer: "Alleen als hij een slechte geschiedenis heeft. Daarom is het verschil groot tussen: ongecontroleerde expired domeinen en zorgvuldig geselecteerde, betrouwbare domeinnamen."
                        },
                        {
                          question: "14. Waar moet ik op letten bij het kopen van een expired domeinnaam?",
                          answer: "Belangrijke aandachtspunten zijn: spamvrije historie, relevante backlinks, logische domeinnaam, geen merknaamrisico."
                        },
                        {
                          question: "15. Hoe snel kan ik starten na het kopen van een domeinnaam?",
                          answer: "Na overdracht kun je de domeinnaam direct gebruiken voor: een website, e-mail, webshop. Net als bij een nieuwe domeinnaam."
                        },
                        {
                          question: "16. Heb ik technische kennis nodig om een expired domeinnaam te gebruiken?",
                          answer: "Nee. Een expired domeinnaam werkt technisch hetzelfde als een nieuwe domeinnaam en kan bij elke hostingprovider worden gebruikt."
                        },
                        {
                          question: "17. Is een expired domeinnaam geschikt voor een webshop?",
                          answer: "Ja. Webshops profiteren extra van: vertrouwen, autoriteit, betere start in Google. Dat is cruciaal voor conversies."
                        },
                        {
                          question: "18. Wat betekent domeinautoriteit bij het kopen van een domeinnaam?",
                          answer: "Domeinautoriteit is een indicatie van hoe sterk een domein is op basis van links en historie. Veel expired domeinnamen scoren hier hoger dan nieuwe domeinen."
                        },
                        {
                          question: "19. Is een expired domeinnaam beter dan linkbuilding?",
                          answer: "In veel gevallen wel. Je koopt als het ware een bestaande reputatie, in plaats van die later duur en risicovol op te bouwen."
                        },
                        {
                          question: "20. Waarom kiezen ondernemers bewust voor een expired domeinnaam?",
                          answer: "Omdat ze zoeken naar: sneller resultaat, minder SEO-risico, een slimme start met voorsprong."
                        },
                        {
                          question: "21. Is een expired domeinnaam geschikt voor elke niche?",
                          answer: "Voor bijna elke niche zijn goede expired domeinnamen beschikbaar, zolang naam en historie logisch aansluiten bij het onderwerp."
                        },
                        {
                          question: "22. Kan ik hulp krijgen bij het kiezen van de juiste domeinnaam?",
                          answer: "Ja. Veel beginners zoeken op \"welke domeinnaam past bij mijn bedrijf\". Begeleiding voorkomt miskopen en bespaart geld."
                        },
                        {
                          question: "23. Wat is het grootste voordeel van een expired domeinnaam?",
                          answer: "Het grootste voordeel is dat je niet vanaf nul begint in zoekmachines."
                        },
                        {
                          question: "24. Wat is het grootste misverstand over expired domeinnamen?",
                          answer: "Dat ze per definitie risicovol zijn. In werkelijkheid zijn ongeteste domeinen risicovol — niet zorgvuldig geselecteerde expired domeinnamen."
                        },
                        {
                          question: "25. Voor wie is een betrouwbare expired domeinnaam het meest geschikt?",
                          answer: "Voor: starters, ondernemers, webshops, SEO-projecten, investeerders. Iedereen die zoekt op \"beste domeinnaam kopen\" en slim wil beginnen."
                        },
                        {
                          question: "26. Hoe weet ik of een domeinnaam geschikt is voor SEO?",
                          answer: "Een domeinnaam is geschikt voor SEO als: de naam logisch en relevant is, hij geen spamverleden heeft, er kwalitatieve backlinks aanwezig zijn. Een expired domeinnaam met goede links scoort hier vaak beter dan een nieuwe domeinnaam."
                        },
                        {
                          question: "27. Heeft het kopen van een expired domeinnaam invloed op Google rankings?",
                          answer: "Ja. Google kijkt naar de geschiedenis en linkstructuur van een domein. Een betrouwbare expired domeinnaam kan helpen om sneller zichtbaarheid op te bouwen, mits correct ingezet."
                        },
                        {
                          question: "28. Wat zijn de voordelen van een expired domeinnaam met autoriteit?",
                          answer: "De belangrijkste voordelen zijn: sneller vertrouwen bij zoekmachines, minder afhankelijkheid van linkbuilding, sterkere startpositie dan concurrenten met nieuwe domeinen."
                        },
                        {
                          question: "29. Moet ik een keyword in mijn domeinnaam hebben voor SEO?",
                          answer: "Niet per se. Zoekopdrachten zoals \"keyword domeinnaam SEO\" laten zien dat dit een veelgestelde vraag is. Een duidelijke, betrouwbare naam is belangrijker dan exacte zoekwoorden, vooral bij expired domeinnamen met autoriteit."
                        },
                        {
                          question: "30. Is een korte domeinnaam beter dan een lange domeinnaam?",
                          answer: "Ja. Korte domeinnamen zijn: makkelijker te onthouden, professioneler, waardevaster. Veel premium expired domeinnamen zijn juist kort en krachtig."
                        },
                        {
                          question: "31. Kan ik een expired domeinnaam gebruiken voor meerdere projecten?",
                          answer: "Ja, bijvoorbeeld voor: een hoofdwebsite, een nicheproject, een merkportaal. Wel is het belangrijk dat de inhoud logisch aansluit bij de geschiedenis van het domein."
                        },
                        {
                          question: "32. Wat gebeurt er met oude backlinks als ik een nieuwe website plaats?",
                          answer: "De backlinks blijven bestaan zolang ze niet worden verwijderd door de verwijzende websites. Dat is juist één van de grote voordelen van het kopen van een expired domeinnaam."
                        },
                        {
                          question: "33. Is een expired domeinnaam beter dan meerdere nieuwe domeinen?",
                          answer: "Voor focus en SEO is één sterke expired domeinnaam vaak effectiever dan meerdere nieuwe domeinen zonder autoriteit."
                        },
                        {
                          question: "34. Kan ik met een expired domeinnaam sneller klanten krijgen?",
                          answer: "Indirect wel. Snellere zichtbaarheid en meer vertrouwen zorgen ervoor dat bezoekers eerder converteren."
                        },
                        {
                          question: "35. Hoe lang blijft de waarde van een expired domeinnaam behouden?",
                          answer: "Zolang het domein goed wordt gebruikt en onderhouden, blijft de waarde behouden en kan deze zelfs groeien."
                        },
                        {
                          question: "36. Waarom zou ik een domeinnaam kopen bij een gespecialiseerde verkoper?",
                          answer: "Omdat een gespecialiseerde verkoper: domeinen vooraf controleert, risico's uitsluit, beginners begeleidt, transparant is over kwaliteit en geschiedenis. Dat maakt het verschil tussen gokken en bewust investeren."
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
                  Neem Contact Op
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Vraag Informatie Aan of Doe een Bod
                </h2>
                <p className="text-slate-400">
                  Geïnteresseerd in een van onze premium domeinen? Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
                </p>
              </div>
              
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Naam *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Uw naam"
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
                          placeholder="uw@email.com"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Globe className="w-4 h-4 inline mr-2" />
                        Domeinnaam Keuze *
                      </label>
                      <Input
                        type="text"
                        value={formData.domain}
                        onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                        placeholder="bijv. FinanceAuthority.com"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Bericht / Extra Informatie
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Vertel ons meer over uw interesse, stel vragen of doe een bod..."
                        rows={5}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40"
                    >
                      Verstuur Aanvraag
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
                  Expired Domeinnamen Kopen: Investeer in Bewezen SEO-Autoriteit
                </h2>
                
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    Een <strong className="text-amber-400">expired domeinnaam kopen</strong> is de slimste manier om direct te profiteren van jarenlang opgebouwde <strong className="text-white">domeinautoriteit</strong> en <strong className="text-white">kwalitatieve backlinks</strong>. In tegenstelling tot een nieuwe domeinnaam, beschikt een premium expired domein al over vertrouwen bij Google en andere zoekmachines. Dit vertaalt zich direct naar betere rankings, snellere indexatie en meer organisch verkeer.
                  </p>
                  
                  <p>
                    Onze zorgvuldig geselecteerde <strong className="text-amber-400">premium domeinen</strong> hebben een bewezen trackrecord met backlinks van autoritaire bronnen zoals Wikipedia, universiteiten, overheidsinstanties en gerenommeerde nieuwssites. Deze <strong className="text-white">hoogwaardige backlinks</strong> zijn het resultaat van jaren online aanwezigheid en zijn praktisch onmogelijk om zelf op te bouwen — tenzij u bereid bent duizenden euro's te investeren in linkbuilding.
                  </p>
                  
                  <p>
                    Of u nu een <strong className="text-white">webshop wilt starten</strong>, een <strong className="text-white">affiliate website</strong> wilt lanceren, of uw bestaande bedrijf een <strong className="text-white">SEO-boost</strong> wilt geven: een expired domeinnaam met hoge <strong className="text-amber-400">MOZ Domain Authority (DA)</strong> geeft u een onmiskenbare voorsprong op de concurrentie. Terwijl anderen maanden wachten tot Google hun nieuwe domein vertrouwt, profiteert u direct van bestaande autoriteit.
                  </p>
                  
                  <p>
                    <strong className="text-white">Waarom wachten?</strong> Elk premium domein in ons portfolio is gecontroleerd op spamvrije geschiedenis, relevante backlinks en goede linkprofielen. U koopt een strategisch actief domeinnaam dat direct waarde toevoegt aan uw online aanwezigheid. Van <strong className="text-white">301 redirects</strong> voor authority stacking tot het direct starten van een nieuwe website: de mogelijkheden zijn eindeloos.
                  </p>
                  
                  <div className="bg-gradient-to-r from-amber-500/10 to-slate-800/30 border border-amber-500/20 rounded-xl p-6 mt-8">
                    <p className="text-center text-lg mb-0">
                      <strong className="text-amber-400">Klaar om uw online succes te versnellen?</strong><br />
                      <span className="text-slate-300">Bekijk ons portfolio van 110+ premium expired domeinnamen en ontdek welk domein perfect past bij uw ambitie. Investeer vandaag nog in bewezen autoriteit en laat uw concurrenten achter.</span>
                    </p>
                  </div>
                </div>
              </article>

              {/* New EU Domain Value Section */}
              <div className="bg-gradient-to-br from-slate-800/80 via-slate-900/90 to-slate-800/80 border border-amber-500/30 rounded-2xl p-8 md:p-10 mt-16 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                  Waarom hoogwaardige Europese .EU-webnamen zoveel waarde hebben
                </h2>
                
                <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                  <h3 className="text-xl md:text-2xl font-semibold text-amber-400 mb-6">
                    Waardevolle Europese .EU-namen met een betrouwbaar verleden voor de Europese en internationale markt
                  </h3>
                  
                  <p>
                    Waar andere extensies vaak verzadigd zijn, bieden <strong className="text-amber-400">.EU</strong> en <strong className="text-white">Europese domeinextensies</strong> juist <strong className="text-amber-400">betrouwbaarheid</strong>, <strong className="text-amber-400">geloofwaardigheid</strong> en een duidelijke <strong className="text-white">geografische identiteit</strong>. In de praktijk zijn deze Europese namen vaak waardevoller en betrouwbaarder dan veel <strong className="text-slate-200">.com</strong>, <strong className="text-slate-200">.net</strong> of <strong className="text-slate-200">.org</strong>-namen.
                  </p>
                  
                  <p>
                    Voor zowel Europese als <strong className="text-white">internationale kopers</strong> biedt een <strong className="text-amber-400">internationale webnaam</strong> met online verleden extra geloofwaardigheid. Een <strong className="text-white">oude webadres met reputatie</strong>, een <strong className="text-amber-400">meertalige webnaam</strong> of een <strong className="text-white">webnaam voor Europa</strong> is bij uitstek geschikt als webadres voor de <strong className="text-amber-400">internationale markt</strong> of als <strong className="text-white">globale online naam</strong> voor bedrijven en projecten die professioneel willen positioneren. In veel gevallen kan ook de autoriteit van een <strong className="text-amber-400">.EU-naam</strong> strategisch worden ingezet via een <strong className="text-white">redirect</strong>, waarbij de Europese uitstraling en opgebouwde waarde behouden blijven.
                  </p>
                </div>
              </div>
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
                        <span>Hoe verhuist u uw domein met de verhuistoken (EPP/Auth code)?</span>
                      </div>
                    </h2>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="space-y-6 text-slate-300">
                      <p className="text-lg">
                        Na uw aankoop ontvangt u binnen 24 uur een <strong className="text-amber-400">verhuistoken</strong> (ook wel EPP-code of Auth-code genoemd) op het e-mailadres dat u bij de betaling hebt opgegeven. Met deze code kunt u het domein eenvoudig verhuizen naar uw eigen domeinregistrar of hostingprovider.
                      </p>
                      
                      <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                        <h3 className="text-lg font-semibold text-white mb-4">Stapsgewijze instructies:</h3>
                        <ol className="space-y-4">
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">1</span>
                            <div>
                              <strong className="text-white">Ontvang de verhuistoken</strong>
                              <p className="text-slate-400 mt-1">Controleer uw inbox (en spamfolder) voor de e-mail met de verhuistoken. Deze ontvangt u binnen 24 uur na betaling.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">2</span>
                            <div>
                              <strong className="text-white">Log in bij uw domeinregistrar of hostingprovider</strong>
                              <p className="text-slate-400 mt-1">Ga naar het domeinbeheer van uw provider (bijv. TransIP, Versio, Hostnet, Combell, one.com, GoDaddy, etc.).</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">3</span>
                            <div>
                              <strong className="text-white">Start de domeinverhuizing</strong>
                              <p className="text-slate-400 mt-1">Zoek naar de optie "Domein verhuizen", "Transfer domein" of "Domein overnemen". Voer de domeinnaam in die u wilt verhuizen.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">4</span>
                            <div>
                              <strong className="text-white">Voer de verhuistoken in</strong>
                              <p className="text-slate-400 mt-1">Plak de verhuistoken (EPP/Auth-code) die u van ons hebt ontvangen in het daarvoor bestemde veld.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">5</span>
                            <div>
                              <strong className="text-white">Bevestig de verhuizing</strong>
                              <p className="text-slate-400 mt-1">Vul de gekochte domeinnaam in bij uw provider en bevestig de verhuizing. Voer vervolgens de EPP-code (verhuistoken) in die u van ons hebt ontvangen.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">6</span>
                            <div>
                              <strong className="text-white">Wacht op voltooiing</strong>
                              <p className="text-slate-400 mt-1">De verhuizing wordt nu in werking gezet en duurt meestal 1-5 werkdagen, afhankelijk van de domeinextensie (.nl, .be, .eu, .com, etc.). Zodra de verhuizing is voltooid, verschijnt het domein automatisch in uw account.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">7</span>
                            <div>
                              <strong className="text-white">Gebruik uw domein</strong>
                              <p className="text-slate-400 mt-1">Na voltooiing kunt u het domein direct inzetten: gebruik het als een 301-redirect naar uw bestaande website voor extra SEO-waarde, of koppel het aan een hostingpakket om een nieuwe website te bouwen.</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      
                      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                        <div className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-white">Onze aanbeveling: Junda Hosting</strong>
                            <p className="text-slate-300 mt-1">
                              Op zoek naar betrouwbare hosting of domeinregistratie? Wij raden <strong className="text-amber-400">Junda</strong> aan — een Nederlandse provider met uitstekende support, snelle servers en scherpe prijzen. Junda biedt gratis domeinverhuizing aan en maakt het eenvoudig om uw nieuwe domein direct te koppelen aan professionele WordPress-hosting.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-3">
                              <a 
                                href="https://www.junda.nl/wordpress-hosting?via=291063" 
                                target="_blank" 
                                rel="nofollow noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Bekijk WordPress Hosting
                              </a>
                              <a 
                                href="https://www.junda.nl/domeinnaam-verhuizen?via=291063" 
                                target="_blank" 
                                rel="nofollow noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 border border-amber-500 text-amber-400 hover:bg-amber-500/10 font-semibold rounded-lg transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Domein Verhuizen
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* NordVPN Recommendation Section */}
                      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-4 mt-4">
                        <div className="text-center">
                          <h4 className="font-bold text-white text-lg mb-2">🔒 Bescherm Je Privacy met NordVPN</h4>
                          <p className="text-white/90 text-sm mb-3">
                            Wat is een VPN? Een <a href="https://www.tkqlhce.com/click-100643838-14352852" target="_blank" rel="nofollow noopener noreferrer" className="underline text-yellow-300 hover:text-yellow-200">Virtual Private Network (VPN)</a> versleutelt je internetverbinding en verbergt je IP-adres, waardoor je persoonlijke gegevens worden beschermd tegen hackers, trackers en surveillance.
                          </p>
                          <p className="text-white/80 text-xs mb-4">
                            Voor eigenaren van premium domeinen is het beschermen van je online identiteit cruciaal. NordVPN stelt je in staat om anoniem te browsen, toegang te krijgen tot wereldwijde content en je zakelijke transacties te beveiligen.
                          </p>
                          <a 
                            href="https://www.tkqlhce.com/click-100643838-14352852" 
                            target="_blank" 
                            rel="nofollow noopener noreferrer"
                            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-6 rounded-full transition-colors text-sm"
                          >
                            Haal NordVPN Nu →
                          </a>
                        </div>
                      </div>
                      
                      <p className="text-slate-400 text-sm">
                        Heeft u vragen over de domeinverhuizing? Neem gerust contact met ons op via <a href="mailto:support@iaee.eu" className="text-amber-400 hover:text-amber-300">support@iaee.eu</a>.
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
                Neem Contact Op
              </h2>
              <p className="text-slate-300 mb-8">
                Heeft u vragen over een specifiek domein of wilt u advies over welke expired domeinnaam het beste bij uw project past? Neem gerust contact met ons op.
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
                    Wij reageren binnen 24 uur op uw bericht.
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
          aria-label="Terug naar boven"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        {/* Hidden Internal Links for SEO */}
        <HiddenInternalLinks />

        {/* Legal Footer */}
        <LegalLinksPremiumDomains />

        {/* Footer */}
        <FooterPremiumDomains />
      </div>
    </>
  );
};

export default PremiumDomains;
