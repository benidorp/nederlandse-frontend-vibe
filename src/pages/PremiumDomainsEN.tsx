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
import LegalLinksPremiumDomainsEN from "@/components/premium-domains/LegalLinksPremiumDomainsEN";
import FooterPremiumDomainsEN from "@/components/premium-domains/FooterPremiumDomainsEN";
import stripeLogo from "@/assets/stripe-logo.svg";

// Premium domain data - can be easily updated
const premiumDomains = [
  // DA 38
  {
    name: "escp-eap.eu",
    description: "Premium business school domain with backlinks from Wikipedia, Cornell, Spiegel and Le Monde.",
    mozScore: 38,
    pageAuthority: 28,
    linkingDomains: 292,
    inboundLinks: "4.6K+",
    followedLinks: "4.2K+",
    category: "Education",
    price: "€1495",
    backlinks: "4.6K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "lemonde.fr (DA 93)", "cornell.edu (DA 92)", "spiegel.de (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/6oUeVdepVg18dXf9OO9Zm04"
  },
  // DA 37
  {
    name: "grandparkhotel.at",
    description: "Premium Austrian hotel domain with backlinks from The Guardian, Telegraph, Daily Mail, Irish Times and Der Standard.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 198,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Hospitality",
    price: "€1750",
    backlinks: "1.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dailymail.co.uk (DA 94)", "irishtimes.com (DA 91)", "derstandard.at (DA 82)"],
    stripePaymentLink: "https://buy.stripe.com/8x2dR9epV9CK5qJaSS9Zm0i"
  },
  {
    name: "icesculpture.be",
    description: "Belgian art/event domain with backlinks from Europa.eu, The Guardian, Telegraph, DW and Boston.com.",
    mozScore: 37,
    pageAuthority: 33,
    linkingDomains: 349,
    inboundLinks: "1.9K+",
    followedLinks: "1.5K+",
    category: "Art",
    price: "€950",
    backlinks: "1.9K+",
    topBacklinks: ["europa.eu (DA 97)", "theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dw.com (DA 93)", "boston.com (DA 92)"],
    stripePaymentLink: "https://buy.stripe.com/fZu4gzdlRaGOg5n3qq9Zm0h"
  },
  {
    name: "tabby.eu",
    description: "Short and memorable EU domain with backlinks from YouTube, Le Monde, MDPI, Corriere and Wired Italia.",
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
    description: "Belgian ticketing domain with backlinks from Nieuwsblad, De Standaard and GVA.",
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
    description: "Art domain with backlinks from Wikipedia, CNN, Behance and RTBF.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 231,
    inboundLinks: "1.1K+",
    followedLinks: "831+",
    category: "Art/Culture",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "1.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnn.com (DA 94)", "behance.net (DA 92)", "rtbf.be (DA 82)"]
  },
  {
    name: "paulsmithmusic.eu",
    description: "Music domain with backlinks from BBC, The Guardian, NME and Pitchfork.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 302,
    inboundLinks: "719+",
    followedLinks: "663+",
    category: "Music",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "719+",
    topBacklinks: ["bbc.co.uk (DA 95)", "theguardian.com (DA 95)", "pitchfork.com (DA 88)", "nme.com (DA 86)"]
  },
  {
    name: "eu-asiacentre.eu",
    description: "EU-Asia domain with backlinks from Wikipedia, NBC News, Cambridge and Reddit.",
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
    description: "Premium space domain with backlinks from Europa.eu, NASA.gov, IEEE.org and Wikipedia.",
    mozScore: 35,
    pageAuthority: 31,
    linkingDomains: 397,
    inboundLinks: "3.4K+",
    followedLinks: "1.8K+",
    category: "Technology",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "nasa.gov (DA 95)", "europa.eu (DA 94)", "ieee.org (DA 93)"]
  },
  {
    name: "martonecycling.eu",
    description: "Cycling domain with backlinks from Globo, Harper's Bazaar, Vogue and Grazia.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 118,
    inboundLinks: "232+",
    followedLinks: "173+",
    category: "Sports",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "232+",
    topBacklinks: ["globo.com (DA 93)", "vogue.com (DA 92)", "harpersbazaar.com (DA 89)", "grazia.it (DA 73)"]
  },
  {
    name: "muenchner-kirchennachrichten.de",
    description: "German news/religious domain with backlinks from Wikipedia (EN, DE, ZH, NL), Spiegel and La Croix.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 281,
    inboundLinks: "3.3K+",
    followedLinks: "1.8K+",
    category: "News",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.3K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "de.wikipedia.org (DA 94)", "fandom.com (DA 94)", "spiegel.de (DA 93)", "la-croix.com (DA 88)"]
  },
  // DA 33
  {
    name: "etongmbh.de",
    description: "German business domain with strong commercial authority and backlinks from Naver, Yumpu, Heise, Computerbase and Motor-Talk.",
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
    description: "French/European regional domain with backlinks from Scoop.it, France Info, La Tribune and French government.",
    mozScore: 33,
    pageAuthority: 24,
    linkingDomains: 167,
    inboundLinks: "690.3K+",
    followedLinks: "689.6K+",
    category: "Tourism",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "690.3K+",
    topBacklinks: ["scoop.it (DA 92)", "franceinfo.fr (DA 91)", "latribune.fr (DA 86)", "culture.gouv.fr (DA 76)", "agriculture.gouv.fr (DA 72)"]
  },
  {
    name: "fffb.be",
    description: "Short and powerful Belgian domain with backlinks from Wikipedia, Variety, RTBF and Courrier International.",
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
    description: "Research domain with backlinks from Europa.eu, Cambridge, Springer and LSE.",
    mozScore: 32,
    pageAuthority: 30,
    linkingDomains: 106,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "Research",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.7K+",
    topBacklinks: ["europa.eu (DA 94)", "cam.ac.uk (DA 93)", "springer.com (DA 92)", "lse.ac.uk (DA 90)"]
  },
  {
    name: "co-da.eu",
    description: "Short and powerful EU domain with backlinks from Globo, HuffPost, CBS News, Gizmodo and Fast Company.",
    mozScore: 32,
    pageAuthority: 22,
    linkingDomains: 96,
    inboundLinks: "276+",
    followedLinks: "260+",
    category: "Collaboration",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "276+",
    topBacklinks: ["globo.com (DA 95)", "huffpost.com (DA 94)", "cbsnews.com (DA 93)", "gizmodo.com (DA 93)", "fastcompany.com (DA 92)"]
  },
  {
    name: "emg-nice2015.fr",
    description: "French domain with backlinks from Wikipedia, GoFundMe, Nice Matin and Triathlon.org.",
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
    description: "Educational EU domain with backlinks from Wikipedia, Penn State, Wisconsin and Council of Europe.",
    mozScore: 32,
    pageAuthority: 38,
    linkingDomains: 372,
    inboundLinks: "2.5K+",
    followedLinks: "2.3K+",
    category: "Education",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.5K+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "psu.edu (DA 92)", "scoop.it (DA 92)", "wisc.edu (DA 91)", "coe.int (DA 89)"]
  },
  {
    name: "citiexpress.eu",
    description: "Transport and logistics EU domain with backlinks from TripAdvisor, SkyscraperCity and Rick Steves.",
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
    description: "European project domain with backlinks from Wikipedia, Cambridge, UNESCO and Reddit.",
    mozScore: 31,
    pageAuthority: 27,
    linkingDomains: 162,
    inboundLinks: "379+",
    followedLinks: "266+",
    category: "Projects",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "379+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cambridge.org (DA 93)", "unesco.org (DA 93)", "reddit.com (DA 92)", "mdpi.com (DA 92)"]
  },
  {
    name: "ramcip-project.eu",
    description: "European research project domain with backlinks from Europa.eu, GitHub, NY Times and Springer.",
    mozScore: 31,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "333+",
    followedLinks: "293+",
    category: "Research",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "333+",
    topBacklinks: ["europa.eu (DA 97)", "github.com (DA 96)", "nytimes.com (DA 95)", "elpais.com (DA 94)", "springer.com (DA 93)"]
  },
  {
    name: "evader-project.eu",
    description: "EU project domain with backlinks from Europa.eu, Spiegel, Europa Press and Heise.",
    mozScore: 31,
    pageAuthority: 30,
    linkingDomains: 91,
    inboundLinks: "128+",
    followedLinks: "109+",
    category: "Projects",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "128+",
    topBacklinks: ["europa.eu (DA 97)", "spiegel.de (DA 93)", "europapress.es (DA 91)", "heise.de (DA 91)", "autoblog.com (DA 90)"]
  },
  {
    name: "toastit-live.be",
    description: "Belgian entertainment/media domain with backlinks from Wikipedia, KU Leuven, Nieuwsblad and Yle.",
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
    description: "Dutch network domain with backlinks from Microsoft, NOS, Neowin, Tweakers and XS4All.",
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
    description: "Digital transformation EU domain with backlinks from Europa.eu, Politico EU and LSE.",
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
    description: "EU land management/sustainability domain with backlinks from Europa.eu, ABC.es, Gencat.cat and Spanish universities.",
    mozScore: 31,
    pageAuthority: 33,
    linkingDomains: 200,
    inboundLinks: "7.5K+",
    followedLinks: "7.4K+",
    category: "Sustainability",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "7.5K+",
    topBacklinks: ["europa.eu (DA 97)", "abc.es (DA 93)", "gencat.cat (DA 89)", "ask.com (DA 88)", "ecoticias.com (DA 74)"],
    useCases: ["Nature Management & Rewilding NGO", "Sustainable Agriculture Platform", "Ecotourism & Agritourism", "Environmental Consultancy Firm", "Landscape Architecture Studio", "Organic Farm Collective", "Climate Action Foundation", "Permaculture Academy", "Forests & Biodiversity Initiative", "Regenerative Agriculture Community"]
  },
  // DA 30
  {
    name: "ilovecosmetics.eu",
    description: "Beauty and cosmetics domain with backlinks from Alza, Glamour Magazine and CB Insights.",
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
    useCases: ["Beauty & Skincare E-commerce", "Cosmetics Review Blog", "Make-up Artist Portfolio", "Natural Cosmetics Brand", "Beauty Influencer Platform", "Beauty Salon Chain", "K-Beauty & J-Beauty Import", "Vegan Cosmetics Webshop", "Beauty Box Subscription Service", "Cosmetics Ingredients Database"]
  },
  {
    name: "rtmpilecki.eu",
    description: "Historical/cultural EU domain with backlinks from Wikipedia (ES, ID, ZH), Polish government and Thread Reader.",
    mozScore: 30,
    pageAuthority: 27,
    linkingDomains: 96,
    inboundLinks: "199+",
    followedLinks: "95+",
    category: "Culture",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "199+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "gov.pl (DA 91)", "threadreaderapp.com (DA 78)", "gloria.tv (DA 69)", "dbpedia.org (DA 65)"]
  },
  {
    name: "friendsofthesupergrid.eu",
    description: "Energy and infrastructure EU domain with backlinks from Wikipedia, CNET, IEEE and The Conversation.",
    mozScore: 30,
    pageAuthority: 30,
    linkingDomains: 297,
    inboundLinks: "156.1K+",
    followedLinks: "155.8K+",
    category: "Energy",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/9B6cN54Pl5mu9GZe549Zm0l",
    backlinks: "156.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnet.com (DA 93)", "theconversation.com (DA 92)", "ieee.org (DA 92)", "corriere.it (DA 92)"]
  },
  {
    name: "eureka-hvacr.eu",
    description: "HVAC and climate technology EU domain with backlinks from Ow.ly, EurActiv and Danfoss.",
    mozScore: 30,
    pageAuthority: 23,
    linkingDomains: 80,
    inboundLinks: "375+",
    followedLinks: "357+",
    category: "Technology",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "375+",
    topBacklinks: ["ow.ly (DA 90)", "euractiv.com (DA 84)", "campaign-archive.com (DA 84)", "danfoss.com (DA 69)", "coleurope.eu (DA 57)"]
  },
  {
    name: "partymenu.eu",
    description: "EU catering/event domain with backlinks from Google.sk, Wikiwand, RA.co and Pravda.sk.",
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
    description: "Safety and emergency planning EU domain with backlinks from Europa.eu, El País, Springer and KU Leuven.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 99,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Safety",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.7K+",
    topBacklinks: ["europa.eu (DA 97)", "elpais.com (DA 94)", "springer.com (DA 93)", "mdpi.com (DA 92)", "xataka.com (DA 90)"]
  },
  {
    name: "greenweek2010.eu",
    description: "Sustainability domain with backlinks from Europa.eu, EurekAlert, RAI and AAAS.",
    mozScore: 29,
    pageAuthority: 28,
    linkingDomains: 109,
    inboundLinks: "259+",
    followedLinks: "249+",
    category: "Sustainability",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "259+",
    topBacklinks: ["europa.eu (DA 97)", "eurekalert.org (DA 91)", "rai.it (DA 81)", "au.dk (DA 77)", "aaas.org (DA 76)"]
  },
  {
    name: "bryn-somersethouse.co.uk",
    description: "British real estate/hospitality domain with backlinks from Forbes, The Guardian, Evening Standard and Time Out.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 96,
    inboundLinks: "167+",
    followedLinks: "132+",
    category: "Real Estate",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "167+",
    topBacklinks: ["forbes.com (DA 94)", "theguardian.com (DA 94)", "standard.co.uk (DA 93)", "timeout.com (DA 92)", "thetimes.com (DA 92)"]
  },
  {
    name: "euforistudy.eu",
    description: "Educational EU study domain with backlinks from The Guardian, Trinity College Dublin and VU Amsterdam.",
    mozScore: 29,
    pageAuthority: 27,
    linkingDomains: 72,
    inboundLinks: "215+",
    followedLinks: "170+",
    category: "Education",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "215+",
    topBacklinks: ["theguardian.com (DA 94)", "ask.com (DA 88)", "tcd.ie (DA 86)", "vu.nl (DA 76)", "muni.cz (DA 74)"]
  },
  {
    name: "beatassist.eu",
    description: "Music production domain with backlinks from Google Sites, Scoop.it, Envato and MusicRadar.",
    mozScore: 29,
    pageAuthority: 29,
    linkingDomains: 164,
    inboundLinks: "1.5K+",
    followedLinks: "1.2K+",
    category: "Music/Audio",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.5K+",
    topBacklinks: ["sites.google.com (DA 96)", "scoop.it (DA 92)", "envato.com (DA 91)", "informer.com (DA 90)", "codecanyon.net (DA 83)"]
  },
  {
    name: "energaware.eu",
    description: "Energy awareness EU project domain with backlinks from Europa.eu, UOL, El País and Le Figaro.",
    mozScore: 29,
    pageAuthority: 26,
    linkingDomains: 61,
    inboundLinks: "15.1K+",
    followedLinks: "15.1K+",
    category: "Energy",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "15.1K+",
    topBacklinks: ["europa.eu (DA 97)", "uol.com.br (DA 95)", "elpais.com (DA 94)", "lefigaro.fr (DA 93)", "mdpi.com (DA 92)"]
  },
  {
    name: "5gmedia.eu",
    description: "Telecom/media domain with backlinks from Medium, IBM, Telefónica and universities.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 69,
    inboundLinks: "338+",
    followedLinks: "265+",
    category: "Technology",
    price: "€675",
    stripePaymentLink: "https://buy.stripe.com/cNi00jdlR9CK5qJf989Zm0k",
    backlinks: "338+",
    topBacklinks: ["medium.com (DA 95)", "ibm.com (DA 93)", "telefonica.com (DA 79)", "upv.es (DA 79)", "upm.es (DA 78)"]
  },
  {
    name: "finnovaregio.eu",
    description: "Financial innovation EU regional domain with backlinks from Crunchbase, Splashthat and Climate-KIC.",
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
    description: "Design and innovation project domain with backlinks from Europa.eu, Euronews, AngelList and UAL Arts.",
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
    description: "EU mobility/parking domain with backlinks from Europa.eu, Medium, Zeit.de and Thread Reader.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 107,
    inboundLinks: "320+",
    followedLinks: "292+",
    category: "Mobility",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "320+",
    topBacklinks: ["europa.eu (DA 97)", "medium.com (DA 95)", "zeit.de (DA 91)", "threadreaderapp.com (DA 78)", "eur.nl (DA 68)"]
  },
  // DA 28
  {
    name: "bovisadrivein.it",
    description: "Italian entertainment domain with backlinks from Behance, Giphy, Corriere and MyMovies.",
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
    description: "EU sustainability domain with backlinks from Europa.eu, MDPI, EurekAlert and Wired.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 87,
    inboundLinks: "185+",
    followedLinks: "153+",
    category: "Sustainability",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "185+",
    topBacklinks: ["europa.eu (DA 97)", "mdpi.com (DA 92)", "eurekalert.org (DA 91)", "wired.it (DA 90)", "ub.edu (DA 86)"]
  },
  {
    name: "eu-sabana.eu",
    description: "Sustainable agriculture EU project domain with backlinks from Europa.eu, The Conversation and Frontiers.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 69,
    inboundLinks: "413+",
    followedLinks: "397+",
    category: "Agriculture",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "413+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "frontiersin.org (DA 92)", "diarioinformacion.com (DA 82)", "informacion.es (DA 78)"]
  },
  {
    name: "ellinikiglossa.eu",
    description: "Greek language/culture domain with strong backlinks from Wikipedia, UCI.edu and universities.",
    mozScore: 28,
    pageAuthority: 31,
    linkingDomains: 164,
    inboundLinks: "4.1K+",
    followedLinks: "4K+",
    category: "Language/Culture",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "4.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "uci.edu (DA 91)"]
  },
  {
    name: "movecare-project.eu",
    description: "Care and mobility EU project domain with backlinks from Springer, MDPI, Il Fatto Quotidiano and Italian universities.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "117+",
    followedLinks: "97+",
    category: "Healthcare",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "117+",
    topBacklinks: ["springer.com (DA 93)", "mdpi.com (DA 92)", "ilfattoquotidiano.it (DA 90)", "unimi.it (DA 72)", "polimi.it (DA 71)"]
  },
  {
    name: "davidhughesillustration.co.uk",
    description: "Creative UK domain with backlinks from The Guardian, Creative Bloq, ORF.at and Publishers Weekly.",
    mozScore: 28,
    pageAuthority: 27,
    linkingDomains: 157,
    inboundLinks: "3.9K+",
    followedLinks: "3.9K+",
    category: "Art/Design",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "3.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "creativebloq.com (DA 86)", "orf.at (DA 86)", "librarything.com (DA 80)", "publishersweekly.com (DA 77)"]
  },
  {
    name: "centremlm.be",
    description: "Belgian centre domain with backlinks from Wikipedia (FR, IT, NL), Le Figaro and Wiktionary.",
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
    description: "Belgian event domain with backlinks from TinyURL, UB.edu, Lund University and Confex.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 57,
    inboundLinks: "136+",
    followedLinks: "121+",
    category: "Events",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "136+",
    topBacklinks: ["tinyurl.com (DA 94)", "ub.edu (DA 86)", "lu.se (DA 79)", "confex.com (DA 73)", "sdu.dk (DA 71)"]
  },
  {
    name: "youthstartproject.eu",
    description: "Education/youth project domain with backlinks from Europa.eu, Campaign Archive, Observador and OpenEdition.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 64,
    inboundLinks: "2.9K+",
    followedLinks: "2.8K+",
    category: "Education",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "2.9K+",
    topBacklinks: ["europa.eu (DA 97)", "campaign-archive.com (DA 84)", "observador.pt (DA 84)", "openedition.org (DA 78)", "wort.lu (DA 75)"]
  },
  // DA 27
  {
    name: "spanvis.nl",
    description: "Dutch domain with backlinks from Wikipedia (EN, RU, NL), Wikiwand and XS4All.",
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
    description: "International mobility/transport domain with backlinks from Europa.eu, Springer, PLOS and Phys.org.",
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
    description: "Digital archive EU project domain with backlinks from Wikipedia, Europa.eu, W3.org, SlideShare and Oxford.",
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
    description: "Baltic region EU cooperation domain with backlinks from Europa.eu, Wikipedia DE, Ask.com and Rzeczpospolita.",
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
    description: "Transition and change EU project domain with backlinks from Europa.eu, Eventbrite, Storify and Sheffield University.",
    mozScore: 27,
    pageAuthority: 28,
    linkingDomains: 75,
    inboundLinks: "207+",
    followedLinks: "179+",
    category: "Projects",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "207+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "eventbrite.com (DA 93)", "storify.com (DA 90)", "shef.ac.uk (DA 79)"]
  },
  {
    name: "expo-2050.be",
    description: "Belgian expo/exhibition domain with backlinks from The Conversation, Radio France, RTBF and La Libre.",
    mozScore: 27,
    pageAuthority: 27,
    linkingDomains: 96,
    inboundLinks: "210+",
    followedLinks: "182+",
    category: "Events",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "210+",
    topBacklinks: ["theconversation.com (DA 92)", "radiofrance.fr (DA 92)", "theculturetrip.com (DA 89)", "rtbf.be (DA 89)", "lalibre.be (DA 84)"]
  },
  {
    name: "iceel.eu",
    description: "EU domain with backlinks from Europa.eu, France Info, CNRS and French universities.",
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
    description: "Startup and innovation EU forum domain with backlinks from Europa.eu, Pages.dev, Campaign Archive and Silicon Republic.",
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
    description: "Environment and nature EU project domain with backlinks from Europa.eu, FranceInfo, Campaign Archive and Midi Libre.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 54,
    inboundLinks: "67.8K+",
    followedLinks: "67.8K+",
    category: "Environment",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "67.8K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "campaign-archive.com (DA 84)", "midilibre.fr (DA 81)", "developpement-durable.gouv.fr (DA 74)"]
  },
  // DA 26
  {
    name: "covenant-capacity.eu",
    description: "EU covenant and capacity building domain with backlinks from Europa.eu, BT, MyNewsDesk and WWF Panda.",
    mozScore: 26,
    pageAuthority: 24,
    linkingDomains: 85,
    inboundLinks: "2.6K+",
    followedLinks: "2.5K+",
    category: "Collaboration",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.6K+",
    topBacklinks: ["europa.eu (DA 97)", "bt.com (DA 91)", "mynewsdesk.com (DA 89)", "campaign-archive.com (DA 84)", "panda.org (DA 77)"]
  },
  {
    name: "wetenschapbegintmetverwondering.nl",
    description: "Dutch science communication domain with backlinks from RUG, NU.nl and National Science Agenda.",
    mozScore: 27,
    pageAuthority: 24,
    linkingDomains: 52,
    inboundLinks: "97+",
    followedLinks: "81+",
    category: "Science",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "97+",
    topBacklinks: ["rug.nl (DA 84)", "nu.nl (DA 91)", "wetenschapsagenda.nl (DA 65)"]
  },
  {
    name: "gastrosafezone.eu",
    description: "Design and hospitality safety domain with backlinks from CNN, The Conversation, Pagina12 and Elle Decor.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 47,
    inboundLinks: "66+",
    followedLinks: "58+",
    category: "Design/Hospitality",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "66+",
    topBacklinks: ["cnn.com (DA 94)", "theconversation.com (DA 92)", "realty.rbc.ru (DA 88)", "pagina12.com.ar (DA 82)", "elledecor.com (DA 80)"]
  },
  {
    name: "khresmoi.eu",
    description: "Medical search EU project domain with backlinks from MDPI, Springer, BioMedCentral and Charles University.",
    mozScore: 27,
    pageAuthority: 32,
    linkingDomains: 184,
    inboundLinks: "31.7K+",
    followedLinks: "31.5K+",
    category: "Health",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "31.7K+",
    topBacklinks: ["mdpi.com (DA 92)", "springer.com (DA 93)", "biomedcentral.com (DA 91)", "cuni.cz (DA 85)"]
  },
  {
    name: "sialon.eu",
    description: "EU health research domain with backlinks from BBC, Europa.eu and The Conversation.",
    mozScore: 24,
    pageAuthority: 25,
    linkingDomains: 66,
    inboundLinks: "145+",
    followedLinks: "125+",
    category: "Health",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "145+",
    topBacklinks: ["bbc.co.uk (DA 95)", "europa.eu (DA 97)", "theconversation.com (DA 92)", "bbc.com (DA 94)"]
  },
  {
    name: "spaceinfoday.eu",
    description: "EU space domain with backlinks from Wikipedia, Europa.eu, ESA, UCM and ORF.",
    mozScore: 26,
    pageAuthority: 24,
    linkingDomains: 77,
    inboundLinks: "6.4K+",
    followedLinks: "6.3K+",
    category: "Technology",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "6.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "esa.int (DA 91)", "ucm.es (DA 89)", "orf.at (DA 86)"]
  },
  {
    name: "beehive-erasmusplus.eu",
    description: "Erasmus+ educational EU domain with backlinks from Pages.dev, Gameforge, GitBook and universities.",
    mozScore: 26,
    pageAuthority: 34,
    linkingDomains: 452,
    inboundLinks: "6.2K+",
    followedLinks: "3.7K+",
    category: "Education",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "6.2K+",
    topBacklinks: ["sakura.ne.jp (DA 93)", "pages.dev (DA 91)", "biglobe.ne.jp (DA 91)", "gameforge.com (DA 90)", "gitbook.io (DA 85)"]
  },
  {
    name: "dunyaendesiedefilm.nl",
    description: "Dutch film/media domain with backlinks from Wikipedia (EN, JA), IPFS, FilmWeb and Cinemagia.",
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
    description: "British radio/media domain with backlinks from Wikipedia, BBC, Bit.ly, Foursquare and DigitalSpy.",
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
    description: "British domain with backlinks from Wikipedia (EN, FR, JA, PL), Fandom and DigitalSpy.",
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
    description: "Belgian network domain with backlinks from Europa.eu, Wikipedia (ES, FR), Yumpu and Google.be.",
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
    name: "hotelgiotto.eu",
    description: "Hospitality domain with backlinks from Pages.dev, Wikitravel, Groupon UK and Travellerspoint.",
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
    description: "Green energy and charging EU domain with backlinks from Google Groups, MDPI, BioMedCentral and FAO.",
    mozScore: 25,
    pageAuthority: 28,
    linkingDomains: 128,
    inboundLinks: "5.5K+",
    followedLinks: "5.5K+",
    category: "Energy",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "5.5K+",
    topBacklinks: ["groups.google.com (DA 93)", "mdpi.com (DA 92)", "biomedcentral.com (DA 91)", "fao.org (DA 91)", "bayern.de (DA 89)"]
  },
  {
    name: "brave-project.eu",
    description: "EU project domain with backlinks from Europa.eu, El Diario, Stuttgarter Zeitung and universities.",
    mozScore: 24,
    pageAuthority: 24,
    linkingDomains: 73,
    inboundLinks: "194+",
    followedLinks: "133+",
    category: "Projects",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "194+",
    topBacklinks: ["europa.eu (DA 97)", "eldiario.es (DA 91)", "stuttgarter-zeitung.de (DA 81)", "techxplore.com (DA 79)", "uah.es (DA 70)"]
  },
  {
    name: "aaliance.eu",
    description: "Healthcare/elderly care EU domain with backlinks from Europa.eu, Cambridge, Springer, Heise and EurActiv.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 69,
    inboundLinks: "227+",
    followedLinks: "163+",
    category: "Healthcare",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "227+",
    topBacklinks: ["europa.eu (DA 97)", "cambridge.org (DA 93)", "springer.com (DA 93)", "heise.de (DA 91)", "euractiv.com (DA 84)"]
  },
  {
    name: "unamec.be",
    description: "Belgian medical/healthcare domain with backlinks from OUP, Yumpu, KU Leuven and UGent.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 93,
    inboundLinks: "188+",
    followedLinks: "150+",
    category: "Healthcare",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "188+",
    topBacklinks: ["oup.com (DA 93)", "yumpu.com (DA 91)", "kuleuven.be (DA 83)", "ugent.be (DA 76)", "justlanded.com (DA 76)"]
  },
  {
    name: "josephines.be",
    description: "Belgian lifestyle/hospitality domain with backlinks from Mixcloud, De Standaard and Elle.be.",
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
    description: "Historical WWI memorial domain with backlinks from Wikipedia (FR, DE), StackExchange, FranceInfo and INRIA.",
    mozScore: 25,
    pageAuthority: 27,
    linkingDomains: 122,
    inboundLinks: "443+",
    followedLinks: "318+",
    category: "History",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "443+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "stackexchange.com (DA 91)", "franceinfo.fr (DA 91)", "inria.fr (DA 83)"]
  },
  {
    name: "serletproject.eu",
    description: "EU project domain with backlinks from Apple.com, Bit.ly, RTL.fr and Wikipedia Greek.",
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
    description: "EU project domain with backlinks from Europa.eu, Wikipedia DE, Cambridge and Yumpu.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 161,
    inboundLinks: "1.1K+",
    followedLinks: "954+",
    category: "Projects",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "1.1K+",
    topBacklinks: ["europa.eu (DA 97)", "goo.gl (DA 95)", "de.wikipedia.org (DA 94)", "cambridge.org (DA 93)", "yumpu.com (DA 91)"]
  },
  {
    name: "tandemtech.be",
    description: "Belgian tech domain with backlinks from Medium, TinyURL, Bit.ly, Tweakers and Knack.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 61,
    inboundLinks: "613+",
    followedLinks: "565+",
    category: "Technology",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "613+",
    topBacklinks: ["medium.com (DA 95)", "tinyurl.com (DA 94)", "bit.ly (DA 94)", "about.me (DA 92)", "pages.dev (DA 91)"]
  },
  {
    name: "happyvpro.nl",
    description: "Dutch media domain with backlinks from TinyURL, Ello, XS4ALL, Emerce and VPRO.",
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
    description: "EU domain with backlinks from Pinterest, ANSA, RUG Groningen and Italian universities.",
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
    description: "EU H2020 mobility domain with backlinks from Europa.eu, Springer, MDPI and Frontiers.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 145,
    inboundLinks: "275+",
    followedLinks: "202+",
    category: "Mobility",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "275+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "mdpi.com (DA 92)", "frontiersin.org (DA 92)", "euractiv.com (DA 84)"]
  },
  {
    name: "heinekenthecity.nl",
    description: "Dutch urban/lifestyle domain with backlinks from Dezeen, Symbaloo, Fodors and VPRO.",
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
    description: "Photography EU domain with backlinks from E-Monsite, JournalDuNet, CNRS and Wikipedia SV.",
    mozScore: 24,
    pageAuthority: 31,
    linkingDomains: 578,
    inboundLinks: "4.6K+",
    followedLinks: "3.8K+",
    category: "Photography",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "4.6K+",
    topBacklinks: ["e-monsite.com (DA 92)", "home.blog (DA 91)", "journaldunet.com (DA 91)", "cnrs.fr (DA 90)", "allthatsinteresting.com (DA 85)"]
  },
  {
    name: "eulis.eu",
    description: "EU domain with backlinks from Wikipedia (EN, ES, PT, FR), Europa.eu and MDPI.",
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
    description: "Maritime EU domain with backlinks from Europa.eu, The Conversation, MDPI and Bristol University.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 90,
    inboundLinks: "146+",
    followedLinks: "115+",
    category: "Maritime",
    price: "€125",
    backlinks: "146+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "mdpi.com (DA 92)", "siliconrepublic.com (DA 83)", "bristol.ac.uk (DA 78)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "200jaarstaten-generaal.nl",
    description: "Dutch government domain with backlinks from NOS, Leiden University and House of Representatives.",
    mozScore: 22,
    pageAuthority: 21,
    linkingDomains: 37,
    inboundLinks: "150+",
    followedLinks: "136+",
    category: "Government/Culture",
    price: "€125",
    backlinks: "150+",
    topBacklinks: ["nos.nl (DA 90)", "universiteitleiden.nl (DA 82)", "transparent.com (DA 76)", "tweedekamer.nl (DA 64)", "rd.nl (DA 62)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eu-thor.eu",
    description: "EU project domain with backlinks from Wikipedia (EN, FR, DE), Europa.eu, Yumpu and WHOI.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 156,
    inboundLinks: "18.4K+",
    followedLinks: "18.3K+",
    category: "Projects",
    price: "€125",
    backlinks: "18.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "yumpu.com (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eccomascfd2006.nl",
    description: "Dutch technical domain with backlinks from TU Delft, Southampton, Liverpool and NTNU.",
    mozScore: 23,
    pageAuthority: 25,
    linkingDomains: 52,
    inboundLinks: "371+",
    followedLinks: "352+",
    category: "Technology",
    price: "€125",
    backlinks: "371+",
    topBacklinks: ["tudelft.nl (DA 85)", "soton.ac.uk (DA 85)", "uu.se (DA 83)", "liverpool.ac.uk (DA 83)", "ntnu.no (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "mbelgique.be",
    description: "Belgian national domain with backlinks from Wikipedia FR, BFMTV, Heise, NU.nl and Europe1.",
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
    description: "EU project domain about sustainable agriculture with backlinks from MDPI, ITACYL and CSIC.",
    mozScore: 23,
    pageAuthority: 24,
    linkingDomains: 40,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "Sustainability",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["mdpi.com (DA 92)", "itacyl.es (DA 45)", "cebas.csic.es (DA 42)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  // DA 22
  {
    name: "bruegel2019.be",
    description: "Cultural heritage domain with backlinks from Campaign Archive, Knack.be and Brusselslife.",
    mozScore: 22,
    pageAuthority: 24,
    linkingDomains: 42,
    inboundLinks: "323+",
    followedLinks: "312+",
    category: "Art/Heritage",
    price: "€125",
    backlinks: "323+",
    topBacklinks: ["campaign-archive.com (DA 84)", "knack.be (DA 79)", "brusselslife.be (DA 54)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "theworkshopschool.eu",
    description: "Educational workshop domain with backlinks from Wikipedia (EN, ES, FR, ZH), CreativeCommons.",
    mozScore: 22,
    pageAuthority: 25,
    linkingDomains: 104,
    inboundLinks: "4.9K+",
    followedLinks: "4.7K+",
    category: "Culture",
    price: "€125",
    backlinks: "4.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "ru.wikipedia.org (DA 94)", "creativecommons.org (DA 94)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "escmalta2018.eu",
    description: "ESC event domain with backlinks from ETH Zürich, Azure, Copernicus, CSIC and Monash University.",
    mozScore: 22,
    pageAuthority: 25,
    linkingDomains: 102,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "Events",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["ethz.ch (DA 89)", "azure.com (DA 84)", "copernicus.eu (DA 83)", "csic.es (DA 78)", "monash.edu (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eurasiancouncilforeignaffairs.eu",
    description: "International relations domain with backlinks from Wikipedia (EN, ES, FR, ZH), Cambridge and The Diplomat.",
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
    description: "Water and environment EU project domain with backlinks from Europa.eu, Bit.ly, Ask.com and Campaign Archive.",
    mozScore: 22,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "1.2K+",
    followedLinks: "1.1K+",
    category: "Environment",
    price: "€125",
    backlinks: "1.2K+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "ask.com (DA 88)", "campaign-archive.com (DA 84)", "worldwidetopsite.com (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "artsalivewales.org.uk",
    description: "Welsh art/culture domain with backlinks from The Guardian, Mirror, Eventbrite and Wales Online.",
    mozScore: 22,
    pageAuthority: 27,
    linkingDomains: 116,
    inboundLinks: "863+",
    followedLinks: "752+",
    category: "Art",
    price: "€125",
    backlinks: "863+",
    topBacklinks: ["theguardian.com (DA 94)", "mirror.co.uk (DA 94)", "eventbrite.co.uk (DA 91)", "walesonline.co.uk (DA 90)", "constantcontact.com (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  // DA 21
  {
    name: "stationlansingerland-zoetermeer.nl",
    description: "Dutch transport/station domain with backlinks from Wikipedia (FR, NL), NS, Nieuws.nl and ProRail.",
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
    description: "Medical research EU FP7 project domain with backlinks from Europa.eu, Springer, IIT and FGOV.be.",
    mozScore: 21,
    pageAuthority: 24,
    linkingDomains: 60,
    inboundLinks: "130+",
    followedLinks: "109+",
    category: "Research",
    price: "€79",
    backlinks: "130+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "iit.edu (DA 75)", "fgov.be (DA 72)", "upc.edu (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "ismagazine.nl",
    description: "Dutch magazine/media domain with backlinks from UNESCO, WUR and Startpagina.",
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
    description: "British betting/gaming domain with backlinks from OVH, Joomla.org, WSU and CSIC.",
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
    description: "Dutch sports/gymnastics domain with backlinks from LiveInternet, Pages.dev, XSRV and Toolforge.",
    mozScore: 21,
    pageAuthority: 29,
    linkingDomains: 246,
    inboundLinks: "7.6K+",
    followedLinks: "7.5K+",
    category: "Sports",
    price: "€79",
    backlinks: "7.6K+",
    topBacklinks: ["liveinternet.ru (DA 93)", "pages.dev (DA 91)", "xsrv.jp (DA 89)", "toolforge.org (DA 80)", "worldwidetopsite.com (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "nanostarproject.eu",
    description: "Nanotechnology EU project domain with backlinks from Springer, Sapo.pt, Pages.dev and universities (UPM, UC3M).",
    mozScore: 21,
    pageAuthority: 28,
    linkingDomains: 76,
    inboundLinks: "338+",
    followedLinks: "306+",
    category: "Technology",
    price: "€79",
    backlinks: "338+",
    topBacklinks: ["springer.com (DA 93)", "sapo.pt (DA 93)", "pages.dev (DA 91)", "upm.es (DA 78)", "uc3m.es (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  // DA 20
  {
    name: "espresso-project.eu",
    description: "Smart city and mobility project domain with backlinks from Europa.eu, Medium, MDPI and Telecom TV.",
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

const PremiumDomainsEN = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "",
    message: ""
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.domain) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email and domain choice are required.",
        variant: "destructive"
      });
      return;
    }

    // Construct mailto link
    const subject = encodeURIComponent(`Premium Domain Inquiry: ${formData.domain}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nDomain: ${formData.domain}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:support@iaee.eu?subject=${subject}&body=${body}`;
    
    toast({
      title: "Request is being sent",
      description: "Your email client will open to send the request."
    });
  };

  const handleDomainInquiry = (domainName: string) => {
    setFormData(prev => ({ ...prev, domain: domainName }));
    scrollToSection("contact");
  };

  return (
    <>
      <Helmet>
        <title>Premium Expired Domain Names with Backlinks High Authority & SEO Value</title>
        <meta name="description" content="Buy expired domain names with backlinks? Reliable expired domains with high authority and SEO value. Buy premium domain names for faster Google rankings. Directly available." />
        <meta name="keywords" content="buy expired domain, expired domains with backlinks, domain with authority, reliable expired domains, buy premium domain, domain with SEO value, old domain with links, best domains for sale" />
        <link rel="canonical" href="https://iaee.eu/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" className="flex items-center gap-3">
              <Crown className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent hover:from-amber-300 hover:to-amber-500 transition-all">
                Premium Domains
              </span>
            </RouterLink>
            <nav className="hidden md:flex items-center gap-6">
              <RouterLink to="/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
                <Home className="h-4 w-4" />
                Home
              </RouterLink>
              <button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Domains
              </button>
              <button onClick={() => scrollToSection("why-premium")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Why Premium?
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
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-amber-500/10 text-amber-400 border-amber-500/30 px-4 py-2">
                <Star className="w-4 h-4 mr-2 inline" />
                Exclusive Collection of Premium Domains
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Premium Expired Domain Names with Backlinks High Authority & SEO Value
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Strengthen your online presence with domain names that have built authority for years. 
                Ideal for faster rankings, powerful backlinks and immediate SEO benefits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("domains")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg px-8 py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-105"
                >
                  View Domains
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("why-premium")}
                  className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white text-lg px-8 py-6"
                >
                  More Information
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Average MOZ Score", value: "29+" },
                  { label: "Premium Domains", value: "110+" },
                  { label: "Years Experience", value: "10+" },
                  { label: "Satisfied Clients", value: "500+" }
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
                Available Domains
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Premium Domain Names For Sale
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Each domain is carefully selected based on MOZ authority, backlink profile and SEO potential. 
                Want to <strong className="text-white">buy an expired domain name</strong> or looking for <strong className="text-white">reliable expired domains</strong>? View our selection below.
              </p>
            </div>
            
            {/* SEO Intro Text */}
            <div className="max-w-5xl mx-auto mb-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">Looking for a domain name with real SEO value?</strong> With us you buy reliable <strong className="text-amber-400">expired domain names with backlinks</strong> and high authority, carefully checked for quality and history. With an expired domain you don't start from scratch, but immediately benefit from existing links, trust and online history.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                In addition to expired domain names, we also offer <strong className="text-amber-400">premium domain names</strong>: short, powerful names with brand value and commercial potential. Whether you're starting a website, webshop or SEO project — a <strong className="text-white">domain name with authority</strong> gives you a clear head start in Google.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                <strong className="text-white">Popular searches:</strong> buy expired domain with backlinks • reliable expired domains • expired domain with authority • buy premium domain • domain with SEO value • old domain with links • best domains for sale
              </p>
            </div>

            {/* VAT Notice */}
            <div className="max-w-5xl mx-auto mb-10 text-center">
              <p className="text-sm text-slate-300 font-medium bg-slate-800/40 border border-slate-700/40 rounded-lg px-4 py-3 inline-block">
                <span className="text-amber-400 font-semibold">VAT Information:</span> Prices are exclusive of VAT for private customers within the EU. Business customers within the EU can reverse charge VAT. For customers outside the EU, no VAT is charged.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumDomains.map((domain, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 group overflow-hidden"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600 text-xs">
                        {domain.category}
                      </Badge>
                      <div className="flex flex-col items-end">
                        <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                          domain.mozScore >= 35 ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          domain.mozScore >= 30 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                          domain.mozScore >= 25 ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                          'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                        }`}>
                          DA {domain.mozScore}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-amber-400 transition-colors mt-2">
                      {domain.name}
                    </CardTitle>
                    <CardDescription className="text-slate-400 text-sm leading-relaxed">
                      {domain.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-900/50 rounded-lg p-3">
                        <div className="text-xs text-slate-500 mb-1">Page Authority</div>
                        <div className="text-lg font-bold text-white">{domain.pageAuthority}</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-3">
                        <div className="text-xs text-slate-500 mb-1">Linking Domains</div>
                        <div className="text-lg font-bold text-white">{domain.linkingDomains}</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-3">
                        <div className="text-xs text-slate-500 mb-1">Inbound Links</div>
                        <div className="text-lg font-bold text-amber-400">{domain.inboundLinks}</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-3">
                        <div className="text-xs text-slate-500 mb-1">Followed Links</div>
                        <div className="text-lg font-bold text-amber-400">{domain.followedLinks}</div>
                      </div>
                    </div>
                    
                    {/* Top Backlinks - Expandable */}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="backlinks" className="border-slate-700/50">
                        <AccordionTrigger className="text-sm text-slate-300 hover:text-amber-400 py-2">
                          <span className="flex items-center gap-2">
                            <Link className="w-4 h-4" />
                            View Top Backlinks ({domain.topBacklinks.length})
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-1 text-sm">
                            {domain.topBacklinks.map((backlink, idx) => (
                              <li key={idx} className="text-slate-400 flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                                {backlink}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    {/* Price and CTA */}
                    <div className="pt-4 border-t border-slate-700/50">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-slate-400">Price</span>
                        <span className="text-3xl font-bold text-amber-400">{domain.price}</span>
                      </div>
                      
                      {/* Use Cases if available */}
                      {domain.useCases && domain.useCases.length > 0 ? (
                        <div className="flex flex-col gap-3">
                          {/* Use Cases Section */}
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="usecases" className="border-slate-700/50">
                              <AccordionTrigger className="text-sm text-slate-300 hover:text-amber-400 py-2">
                                <span className="flex items-center gap-2">
                                  <Target className="w-4 h-4" />
                                  View Potential Use Cases ({domain.useCases.length})
                                </span>
                              </AccordionTrigger>
                              <AccordionContent>
                                <ul className="space-y-1 text-sm">
                                  {domain.useCases.map((useCase, idx) => (
                                    <li key={idx} className="text-slate-400 flex items-center gap-2">
                                      <CheckCircle className="w-3 h-3 text-amber-500 flex-shrink-0" />
                                      {useCase}
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                          
                          {domain.stripePaymentLink ? (
                            <a 
                              href={domain.stripePaymentLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold rounded-md transition-all duration-200 shadow-md hover:shadow-lg text-lg"
                            >
                              Buy Now
                            </a>
                          ) : (
                            <div 
                              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#F59E0B] text-slate-950 font-bold rounded-md shadow-md text-lg"
                            >
                              Buy Now
                            </div>
                          )}
                          <div className="flex flex-col items-center gap-2 text-center">
                            <div className="flex items-center justify-center gap-1 flex-wrap">
                              {/* Visa */}
                              <div className="flex items-center bg-[#1A1F71] rounded px-1 py-0.5 h-4">
                                <span className="text-white font-bold text-[7px] italic tracking-tight" style={{fontFamily: 'Arial'}}>VISA</span>
                              </div>
                              {/* Mastercard */}
                              <div className="flex items-center bg-[#000000] rounded px-1 py-0.5 h-4">
                                <svg className="h-2.5 w-4" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="11" cy="10" r="8" fill="#EB001B"/>
                                  <circle cx="21" cy="10" r="8" fill="#F79E1B"/>
                                  <path d="M16 3.5C18.5 5.5 20 7.5 20 10C20 12.5 18.5 14.5 16 16.5C13.5 14.5 12 12.5 12 10C12 7.5 13.5 5.5 16 3.5Z" fill="#FF5F00"/>
                                </svg>
                              </div>
                              {/* PayPal */}
                              <div className="flex items-center bg-[#003087] rounded px-1 py-0.5 h-4">
                                <span className="text-white font-bold text-[7px] italic" style={{fontFamily: 'Arial'}}>Pay</span>
                                <span className="text-[#00ADEF] font-bold text-[7px] italic" style={{fontFamily: 'Arial'}}>Pal</span>
                              </div>
                              {/* Amazon Pay */}
                              <div className="flex items-center bg-[#232F3E] rounded px-1 py-0.5 h-4">
                                <svg className="h-2.5 w-8" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <text x="2" y="13" fill="#FF9900" fontSize="10" fontWeight="bold" fontFamily="Arial">amazon</text>
                                  <path d="M2 16C8 18 16 19 24 18C28 17.5 32 16.5 35 15" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                                  <path d="M34 13L36 15L34 17" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                  <text x="38" y="13" fill="white" fontSize="8" fontFamily="Arial">pay</text>
                                </svg>
                              </div>
                              {/* Apple Pay */}
                              <div className="flex items-center bg-black rounded px-1 py-0.5 h-4">
                                <svg className="h-2.5 w-6" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.5 4C9.5 4 10.3 3.5 10.8 2.7C11.3 2 11.5 1 11.4 0C10.5 0.1 9.4 0.6 8.8 1.4C8.3 2 7.9 3 8 4C9 4 9.5 4 8.5 4Z" fill="white"/>
                                  <path d="M11.4 4.3C9.8 4.2 8.4 5.2 7.6 5.2C6.8 5.2 5.6 4.3 4.3 4.4C2.6 4.4 1 5.3 0.2 6.9C-1.5 10 0.1 14.5 1.7 17C2.5 18.2 3.5 19.6 4.8 19.5C6 19.5 6.5 18.7 8 18.7C9.5 18.7 10 19.5 11.3 19.5C12.6 19.5 13.5 18.2 14.3 17C15.2 15.7 15.6 14.4 15.6 14.3C15.6 14.3 12.5 13.1 12.5 9.6C12.5 6.5 15 5.1 15.1 5C13.8 3.1 11.8 4.3 11.4 4.3Z" fill="white"/>
                                  <text x="18" y="14" fill="white" fontSize="10" fontWeight="500" fontFamily="Arial">Pay</text>
                                </svg>
                              </div>
                              {/* Google Pay */}
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
                              {/* Klarna */}
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
                            <p className="text-[10px] text-slate-400 leading-tight mt-2">
                              Secure payment via Stripe
                              <br />
                              Automatically converted to your local currency
                            </p>
                            <p className="text-[10px] text-slate-400 leading-tight mt-3">
                              After payment you will receive the transfer token (EPP/Auth code) within 24 hours at your email address.
                              <br />
                              Also check your spam folder.
                            </p>
                            <a href="#domain-transfer" className="text-[10px] text-amber-400 hover:text-amber-300 underline mt-2">
                              How does transfer work?
                            </a>
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
                              Buy Now
                            </a>
                          ) : (
                            <div 
                              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#F59E0B] text-slate-950 font-bold rounded-md shadow-md text-lg"
                            >
                              Buy Now
                            </div>
                          )}
                          <div className="flex flex-col items-center gap-2 text-center">
                            <div className="flex items-center justify-center gap-1 flex-wrap">
                              {/* Visa */}
                              <div className="flex items-center bg-[#1A1F71] rounded px-1 py-0.5 h-4">
                                <span className="text-white font-bold text-[7px] italic tracking-tight" style={{fontFamily: 'Arial'}}>VISA</span>
                              </div>
                              {/* Mastercard */}
                              <div className="flex items-center bg-[#000000] rounded px-1 py-0.5 h-4">
                                <svg className="h-2.5 w-4" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="11" cy="10" r="8" fill="#EB001B"/>
                                  <circle cx="21" cy="10" r="8" fill="#F79E1B"/>
                                  <path d="M16 3.5C18.5 5.5 20 7.5 20 10C20 12.5 18.5 14.5 16 16.5C13.5 14.5 12 12.5 12 10C12 7.5 13.5 5.5 16 3.5Z" fill="#FF5F00"/>
                                </svg>
                              </div>
                              {/* PayPal */}
                              <div className="flex items-center bg-[#003087] rounded px-1 py-0.5 h-4">
                                <span className="text-white font-bold text-[7px] italic" style={{fontFamily: 'Arial'}}>Pay</span>
                                <span className="text-[#00ADEF] font-bold text-[7px] italic" style={{fontFamily: 'Arial'}}>Pal</span>
                              </div>
                              {/* Amazon Pay */}
                              <div className="flex items-center bg-[#232F3E] rounded px-1 py-0.5 h-4">
                                <svg className="h-2.5 w-8" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <text x="2" y="13" fill="#FF9900" fontSize="10" fontWeight="bold" fontFamily="Arial">amazon</text>
                                  <path d="M2 16C8 18 16 19 24 18C28 17.5 32 16.5 35 15" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                                  <path d="M34 13L36 15L34 17" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                  <text x="38" y="13" fill="white" fontSize="8" fontFamily="Arial">pay</text>
                                </svg>
                              </div>
                              {/* Apple Pay */}
                              <div className="flex items-center bg-black rounded px-1 py-0.5 h-4">
                                <svg className="h-2.5 w-6" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.5 4C9.5 4 10.3 3.5 10.8 2.7C11.3 2 11.5 1 11.4 0C10.5 0.1 9.4 0.6 8.8 1.4C8.3 2 7.9 3 8 4C9 4 9.5 4 8.5 4Z" fill="white"/>
                                  <path d="M11.4 4.3C9.8 4.2 8.4 5.2 7.6 5.2C6.8 5.2 5.6 4.3 4.3 4.4C2.6 4.4 1 5.3 0.2 6.9C-1.5 10 0.1 14.5 1.7 17C2.5 18.2 3.5 19.6 4.8 19.5C6 19.5 6.5 18.7 8 18.7C9.5 18.7 10 19.5 11.3 19.5C12.6 19.5 13.5 18.2 14.3 17C15.2 15.7 15.6 14.4 15.6 14.3C15.6 14.3 12.5 13.1 12.5 9.6C12.5 6.5 15 5.1 15.1 5C13.8 3.1 11.8 4.3 11.4 4.3Z" fill="white"/>
                                  <text x="18" y="14" fill="white" fontSize="10" fontWeight="500" fontFamily="Arial">Pay</text>
                                </svg>
                              </div>
                              {/* Google Pay */}
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
                              {/* Klarna */}
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
                            <p className="text-[10px] text-slate-400 leading-tight mt-2">
                              Secure payment via Stripe
                              <br />
                              Automatically converted to your local currency
                            </p>
                            <p className="text-[10px] text-slate-400 leading-tight mt-3">
                              After payment you will receive the transfer token (EPP/Auth code) within 24 hours at your email address.
                              <br />
                              Also check your spam folder.
                            </p>
                            <a href="#domain-transfer" className="text-[10px] text-amber-400 hover:text-amber-300 underline mt-2">
                              How does transfer work?
                            </a>
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
                Strategic Advantage
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Premium Domain Names?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Premium domain names with high MOZ authority are a strategic investment that gives you an enormous head start in search results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Faster Rankings in Google",
                  description: "Domains with existing authority rank faster than new domains. Google trusts websites with a proven track record."
                },
                {
                  icon: Shield,
                  title: "More Trust from Google",
                  description: "A domain with years of history and quality backlinks is seen by Google as more reliable and receives higher rankings."
                },
                {
                  icon: Target,
                  title: "Higher Click-Through Rates (CTR)",
                  description: "Premium domain names inspire trust in users, leading to higher click-through rates in search results and advertisements."
                },
                {
                  icon: Zap,
                  title: "Immediate SEO Benefit",
                  description: "Instead of waiting years to build authority, you immediately benefit from the existing SEO value of the domain."
                },
                {
                  icon: Globe,
                  title: "Direct Type-In Traffic",
                  description: "Memorable premium domain names generate direct traffic from users who type the domain directly into their browser."
                },
                {
                  icon: Award,
                  title: "Sustainable SEO Investment",
                  description: "A premium domain is an asset that increases in value as your online presence grows and authority increases."
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
                    The Power of MOZ Domain Authority
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    MOZ Domain Authority (DA) is a score from 1-100 that predicts how well a website will rank in search engines. 
                    The higher the score, the more authority the domain has built through quality backlinks, age and reliability.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="rounded-lg bg-black border border-cyan-500/50 p-4 text-center">
                      <div className="text-xl font-bold text-cyan-400 mb-1">DA 20-25</div>
                      <div className="text-sm font-medium text-white">Good Authority</div>
                    </div>
                    
                    <div className="rounded-lg bg-black border border-yellow-500/50 p-4 text-center">
                      <div className="text-xl font-bold text-yellow-400 mb-1">DA 25-30</div>
                      <div className="text-sm font-medium text-white">Strong Authority</div>
                    </div>
                    
                    <div className="rounded-lg bg-black border border-green-500/50 p-4 text-center">
                      <div className="text-xl font-bold text-green-400 mb-1">DA 30+</div>
                      <div className="text-sm font-medium text-white">Premium Authority</div>
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
                SEO Strategies
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How Do SEO Redirects and Authority Building Work?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                There are multiple strategic ways to deploy premium domains for maximum SEO impact.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "301 Redirect Strategy",
                  description: "A 301 redirect passes all SEO value and authority from the premium domain to your main domain. This is the fastest way to improve your rankings.",
                  benefits: [
                    "Direct transfer of link juice",
                    "Retention of all backlinks",
                    "Quick boost in authority",
                    "One-time setup, lasting effect"
                  ]
                },
                {
                  title: "Authority Stacking",
                  description: "Build a network of authoritative domains that all link to your main site. This creates a powerful ecosystem of relevant, high-quality backlinks.",
                  benefits: [
                    "Multiple authority sources",
                    "Thematic relevance",
                    "Natural link profile",
                    "Long-term SEO strategy"
                  ]
                },
                {
                  title: "Use as Main Domain",
                  description: "Start your new project directly with a domain that already has authority. This saves years of link building and domain age building.",
                  benefits: [
                    "Start immediately with authority",
                    "Existing trust from Google",
                    "Faster indexation",
                    "Head start over competition"
                  ]
                },
                {
                  title: "Private Blog Network (PBN)",
                  description: "Use premium domains to set up valuable content sites that generate powerful backlinks to your main site.",
                  benefits: [
                    "Full control over backlinks",
                    "Thematic content sites",
                    "Diverse link profiles",
                    "Scalable link building"
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
                  Why These Domains Are Unique
                </h3>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Our premium domains are carefully selected and meet strict quality requirements.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { icon: Shield, title: "Clean History", desc: "No spam or penalty history" },
                  { icon: Link, title: "Quality Backlinks", desc: "From reliable sources" },
                  { icon: BarChart3, title: "High DA Score", desc: "Minimum DA 20+" },
                  { icon: Globe, title: "Relevant Niches", desc: "Thematically matching domains" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-amber-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
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
              <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Everything You Want to Know About Premium Domains
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Below you'll find answers to the most frequently asked questions about expired domain names, premium domains and SEO authority.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="faq-group-1" className="bg-slate-800/30 border border-slate-700/50 rounded-xl px-6">
                  <AccordionTrigger className="text-lg font-medium text-white hover:text-amber-400 py-6">
                    General Questions About Domain Names (10 Questions)
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-6 text-slate-300">
                      {[
                        {
                          question: "1. What is an expired domain name?",
                          answer: "An expired domain name is a domain that a previous owner has not renewed. It becomes available for purchase again. What makes it special: often an expired domain still has existing backlinks, domain history and SEO value that you can use immediately."
                        },
                        {
                          question: "2. What is the difference between an expired domain and a new domain?",
                          answer: "A new domain has no history, no backlinks, no authority. An expired domain often already has links from other websites, a domain age and established trust. This can give you a significant head start in search engines."
                        },
                        {
                          question: "3. What is a premium domain name?",
                          answer: "A premium domain is a domain of exceptional value, for example because it is: short and memorable, has a strong keyword, or already has high authority and backlinks. Premium domains are traded above the normal registration price."
                        },
                        {
                          question: "4. Why are expired domain names interesting for SEO?",
                          answer: "Because expired domains often already have: Domain age, Backlinks from other websites, Authority in Google. This means you don't start at zero, but with a head start."
                        },
                        {
                          question: "5. Are all expired domains good for SEO?",
                          answer: "No. Some expired domains have a bad history (spam, penalties, etc.). Therefore it's important to buy reliable expired domains that have been checked for quality, link profile and history."
                        },
                        {
                          question: "6. How can I tell if an expired domain is reliable?",
                          answer: "Key indicators are: Healthy backlink profile, No spam history, Consistent history (via Wayback Machine), Good MOZ or Ahrefs scores. Our domains are all pre-checked."
                        },
                        {
                          question: "7. What does 'domain authority' mean?",
                          answer: "Domain Authority (DA) is a score developed by MOZ that estimates how strong a domain is. The higher the score, the more likely the domain is to rank well. A high DA often comes from quality backlinks and a long domain history."
                        },
                        {
                          question: "8. Can I use an expired domain for any type of website?",
                          answer: "Yes, as long as the content fits the domain. For SEO it's smart to stay close to the original theme of the domain, for example if the domain had many links from tech sites, it's best to start a tech-related website."
                        },
                        {
                          question: "9. Do I become the full owner of the domain after purchase?",
                          answer: "Yes, after purchase you receive the transfer code (EPP code) and the domain is transferred to your name. You have full ownership."
                        },
                        {
                          question: "10. Does the price include hosting?",
                          answer: "No, the prices listed only include the domain name. Hosting can be arranged separately at any provider of your choice."
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

                <AccordionItem value="faq-group-2" className="bg-slate-800/30 border border-slate-700/50 rounded-xl px-6">
                  <AccordionTrigger className="text-lg font-medium text-white hover:text-amber-400 py-6">
                    Purchase and Technical Questions (8 Questions)
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-6 text-slate-300">
                      {[
                        {
                          question: "11. How does payment work?",
                          answer: "Payment is done via Stripe. You can pay with credit card, iDeal, PayPal, Apple Pay, Google Pay, Klarna and more. After payment you receive the EPP code within 24 hours."
                        },
                        {
                          question: "12. What is an EPP code?",
                          answer: "An EPP code (also called Auth code or transfer token) is a unique code needed to transfer the domain to your own registrar. You receive this from us after payment."
                        },
                        {
                          question: "13. How long does a domain transfer take?",
                          answer: "After you've entered the EPP code at your registrar, transfer usually takes 1-5 business days, depending on the domain extension (.nl, .eu, .com, etc.)."
                        },
                        {
                          question: "14. Can I resell the domain?",
                          answer: "Yes, you're the full owner. You can use, resell or rent it as you wish."
                        },
                        {
                          question: "15. What if I have problems with the transfer?",
                          answer: "Contact us at support@iaee.eu and we'll help you through the process."
                        },
                        {
                          question: "16. Are there additional costs on top of the listed price?",
                          answer: "The listed price is exclusive of VAT for EU customers. Non-EU customers pay no VAT. After purchase you may have to pay the annual renewal fee at your own registrar."
                        },
                        {
                          question: "17. Can I inquire about domains not listed?",
                          answer: "Yes, contact us via the contact form if you're looking for a specific type of domain. We may have more domains available."
                        },
                        {
                          question: "18. Is there a warranty on the domain?",
                          answer: "We guarantee that all data is accurate at the time of purchase. After transfer, the domain is entirely in your hands."
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

                <AccordionItem value="faq-group-3" className="bg-slate-800/30 border border-slate-700/50 rounded-xl px-6">
                  <AccordionTrigger className="text-lg font-medium text-white hover:text-amber-400 py-6">
                    SEO and Strategy Questions (18 Questions)
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-6 text-slate-300">
                      {[
                        {
                          question: "19. What's the best way to use an expired domain for SEO?",
                          answer: "The most used methods are: 301 redirect to your existing website to transfer authority, Use as main domain for a new project, Build a relevant content website that links to your main site, Authority stacking with multiple domains."
                        },
                        {
                          question: "20. How quickly do I see results after a 301 redirect?",
                          answer: "This varies, but often you see improvements within 2-8 weeks. Google needs time to crawl and process the redirect."
                        },
                        {
                          question: "21. Is it safe to buy an expired domain?",
                          answer: "Yes, if you buy from a reliable party that checks domains for spam history, penalties and link quality. That's exactly what we do."
                        },
                        {
                          question: "22. What is 'authority stacking'?",
                          answer: "Authority stacking is a strategy where you use multiple authoritative domains to strengthen your main website. Each domain passes its own authority on."
                        },
                        {
                          question: "23. What is the biggest advantage of an expired domain name?",
                          answer: "The biggest advantage is that you don't start from scratch in search engines."
                        },
                        {
                          question: "24. What is the biggest misconception about expired domain names?",
                          answer: "That they are risky by definition. In reality, untested domains are risky — not carefully selected expired domain names."
                        },
                        {
                          question: "25. Who is a reliable expired domain name most suitable for?",
                          answer: "For: starters, entrepreneurs, webshops, SEO projects, investors. Anyone searching for \"best domain to buy\" who wants to start smart."
                        },
                        {
                          question: "26. How do I know if a domain name is suitable for SEO?",
                          answer: "A domain name is suitable for SEO if: the name is logical and relevant, it has no spam history, quality backlinks are present. An expired domain name with good links often scores better here than a new domain name."
                        },
                        {
                          question: "27. Does buying an expired domain name affect Google rankings?",
                          answer: "Yes. Google looks at the history and link structure of a domain. A reliable expired domain name can help build visibility faster, if used correctly."
                        },
                        {
                          question: "28. What are the advantages of an expired domain name with authority?",
                          answer: "The main advantages are: faster trust from search engines, less dependence on link building, stronger starting position than competitors with new domains."
                        },
                        {
                          question: "29. Do I need a keyword in my domain name for SEO?",
                          answer: "Not necessarily. Searches like \"keyword domain SEO\" show this is a frequently asked question. A clear, reliable name is more important than exact keywords, especially with expired domain names with authority."
                        },
                        {
                          question: "30. Is a short domain name better than a long domain name?",
                          answer: "Yes. Short domain names are: easier to remember, more professional, more valuable. Many premium expired domain names are indeed short and powerful."
                        },
                        {
                          question: "31. Can I use an expired domain name for multiple projects?",
                          answer: "Yes, for example for: a main website, a niche project, a brand portal. However, it's important that the content logically connects to the domain's history."
                        },
                        {
                          question: "32. What happens to old backlinks when I place a new website?",
                          answer: "The backlinks remain as long as they're not removed by the referring websites. That's exactly one of the big advantages of buying an expired domain name."
                        },
                        {
                          question: "33. Is an expired domain name better than multiple new domains?",
                          answer: "For focus and SEO, one strong expired domain name is often more effective than multiple new domains without authority."
                        },
                        {
                          question: "34. Can I get customers faster with an expired domain name?",
                          answer: "Indirectly, yes. Faster visibility and more trust mean visitors convert sooner."
                        },
                        {
                          question: "35. How long does the value of an expired domain name last?",
                          answer: "As long as the domain is used and maintained well, the value is preserved and can even grow."
                        },
                        {
                          question: "36. Why should I buy a domain name from a specialized seller?",
                          answer: "Because a specialized seller: checks domains in advance, excludes risks, guides beginners, is transparent about quality and history. That makes the difference between gambling and conscious investing."
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
                  Get in Touch
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Request Information or Make an Offer
                </h2>
                <p className="text-slate-400">
                  Interested in one of our premium domains? Fill in the form and we'll contact you as soon as possible.
                </p>
              </div>
              
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50">
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
                          placeholder="Your name"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="your@email.com"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Globe className="w-4 h-4 inline mr-2" />
                        Domain Choice *
                      </label>
                      <Input
                        type="text"
                        value={formData.domain}
                        onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                        placeholder="e.g. FinanceAuthority.com"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Message / Additional Information
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Tell us more about your interest, ask questions or make an offer..."
                        rows={5}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40"
                    >
                      Send Request
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
                  Buying Expired Domain Names: Invest in Proven SEO Authority
                </h2>
                
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    Buying an <strong className="text-amber-400">expired domain name</strong> is the smartest way to immediately benefit from years of built-up <strong className="text-white">domain authority</strong> and <strong className="text-white">quality backlinks</strong>. Unlike a new domain name, a premium expired domain already has trust with Google and other search engines. This directly translates to better rankings, faster indexation and more organic traffic.
                  </p>
                  
                  <p>
                    Our carefully selected <strong className="text-amber-400">premium domains</strong> have a proven track record with backlinks from authoritative sources like Wikipedia, universities, government institutions and renowned news sites. These <strong className="text-white">high-quality backlinks</strong> are the result of years of online presence and are virtually impossible to build yourself — unless you're willing to invest thousands of euros in link building.
                  </p>
                  
                  <p>
                    Whether you want to <strong className="text-white">start a webshop</strong>, launch an <strong className="text-white">affiliate website</strong>, or give your existing business an <strong className="text-white">SEO boost</strong>: an expired domain name with high <strong className="text-amber-400">MOZ Domain Authority (DA)</strong> gives you an undeniable head start over the competition. While others wait months for Google to trust their new domain, you immediately benefit from existing authority.
                  </p>
                  
                  <p>
                    <strong className="text-white">Why wait?</strong> Every premium domain in our portfolio is checked for spam-free history, relevant backlinks and good link profiles. You're buying a strategic domain asset that immediately adds value to your online presence. From <strong className="text-white">301 redirects</strong> for authority stacking to directly starting a new website: the possibilities are endless.
                  </p>
                  
                  <div className="bg-gradient-to-r from-amber-500/10 to-slate-800/30 border border-amber-500/20 rounded-xl p-6 mt-8">
                    <p className="text-center text-lg mb-0">
                      <strong className="text-amber-400">Ready to accelerate your online success?</strong><br />
                      <span className="text-slate-300">View our portfolio of 110+ premium expired domain names and discover which domain fits your ambition perfectly. Invest today in proven authority and leave your competitors behind.</span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Domain Transfer Instructions - Collapsible Section */}
        <section id="domain-transfer" className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="border border-amber-500/30 rounded-xl bg-slate-800/50">
                  <div className="px-6 py-4">
                    <h2 className="text-xl font-bold text-white">
                      <div className="flex items-center gap-3">
                        <Globe className="w-6 h-6 text-amber-400" />
                        <span>How to transfer your domain with the transfer token (EPP/Auth code)?</span>
                      </div>
                    </h2>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="space-y-6 text-slate-300">
                      <p className="text-lg">
                        After your purchase you will receive a <strong className="text-amber-400">transfer token</strong> (also called EPP code or Auth code) within 24 hours at the email address you provided during payment. With this code you can easily transfer the domain to your own domain registrar or hosting provider.
                      </p>
                      
                      <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                        <h3 className="text-lg font-semibold text-white mb-4">Step-by-step instructions:</h3>
                        <ol className="space-y-4">
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">1</span>
                            <div>
                              <strong className="text-white">Receive the transfer token</strong>
                              <p className="text-slate-400 mt-1">Check your inbox (and spam folder) for the email with the transfer token. You'll receive this within 24 hours after payment.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">2</span>
                            <div>
                              <strong className="text-white">Log in to your domain registrar or hosting provider</strong>
                              <p className="text-slate-400 mt-1">Go to the domain management of your provider (e.g. GoDaddy, Namecheap, Cloudflare, etc.).</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">3</span>
                            <div>
                              <strong className="text-white">Start the domain transfer</strong>
                              <p className="text-slate-400 mt-1">Look for the option "Transfer domain", "Move domain" or "Take over domain". Enter the domain name you want to transfer.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">4</span>
                            <div>
                              <strong className="text-white">Enter the transfer token</strong>
                              <p className="text-slate-400 mt-1">Paste the transfer token (EPP/Auth code) you received from us in the designated field.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">5</span>
                            <div>
                              <strong className="text-white">Confirm the transfer</strong>
                              <p className="text-slate-400 mt-1">Enter the purchased domain name at your provider and confirm the transfer. Then enter the EPP code (transfer token) you received from us.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">6</span>
                            <div>
                              <strong className="text-white">Wait for completion</strong>
                              <p className="text-slate-400 mt-1">The transfer is now initiated and usually takes 1-5 business days, depending on the domain extension (.nl, .be, .eu, .com, etc.). Once the transfer is complete, the domain will automatically appear in your account.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">7</span>
                            <div>
                              <strong className="text-white">Use your domain</strong>
                              <p className="text-slate-400 mt-1">After completion you can use the domain immediately: use it as a 301 redirect to your existing website for extra SEO value, or link it to a hosting package to build a new website.</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      
                      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                        <div className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-white">Our recommendation: Choose a reliable registrar</strong>
                            <p className="text-slate-300 mt-1">
                              Looking for reliable hosting or domain registration? We recommend choosing a reputable registrar with excellent support, fast servers and competitive prices. Popular options include Cloudflare, Namecheap, and GoDaddy — all offer easy domain transfers.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-400 text-sm">
                        Do you have questions about the domain transfer? Feel free to contact us at <a href="mailto:support@iaee.eu" className="text-amber-400 hover:text-amber-300">support@iaee.eu</a>.
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
                Get in Touch
              </h2>
              <p className="text-slate-300 mb-8">
                Do you have questions about a specific domain or would you like advice on which expired domain name best fits your project? Feel free to contact us.
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
                    We respond to your message within 24 hours.
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
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        {/* Legal Footer */}
        <LegalLinksPremiumDomainsEN />

        {/* Footer */}
        <FooterPremiumDomainsEN />
      </div>
    </>
  );
};

export default PremiumDomainsEN;
