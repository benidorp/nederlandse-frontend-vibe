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
import LanguageSwitcher from "@/components/premium-domains/LanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import stripeLogo from "@/assets/stripe-logo.svg";
import { validateContactForm, buildSafeMailtoUrl } from "@/lib/formValidation";

// Premium domain data - exact copy from Dutch version
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
    stripePaymentLink: "https://buy.stripe.com/6oUeVdepVg18dXf9OO9Zm04",
    image: "/images/premium-domains-logo.png"
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
    stripePaymentLink: "https://buy.stripe.com/8x2dR9epV9CK5qJaSS9Zm0i",
    image: "/images/premium-domains-logo.png"
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
    stripePaymentLink: "https://buy.stripe.com/fZu4gzdlRaGOg5n3qq9Zm0h",
    image: "/images/premium-domains-logo.png"
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
    topBacklinks: ["youtube.com (DA 100)", "lemonde.fr (DA 93)", "mdpi.com (DA 92)", "corriere.it (DA 92)", "wired.it (DA 90)"],
    image: "/images/premium-domains-logo.png"
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
    topBacklinks: ["standaard.be (DA 81)", "nieuwsblad.be (DA 79)", "gva.be (DA 73)"],
    image: "/images/premium-domains-logo.png"
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
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnn.com (DA 94)", "behance.net (DA 92)", "rtbf.be (DA 82)"],
    image: "/images/premium-domains-logo.png"
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
    topBacklinks: ["bbc.co.uk (DA 95)", "theguardian.com (DA 95)", "pitchfork.com (DA 88)", "nme.com (DA 86)"],
    image: "/images/premium-domains-logo.png"
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
    topBacklinks: ["en.wikipedia.org (DA 97)", "reddit.com (DA 97)", "nbcnews.com (DA 93)", "cam.ac.uk (DA 93)"],
    image: "/images/premium-domains-logo.png"
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
    topBacklinks: ["en.wikipedia.org (DA 97)", "nasa.gov (DA 95)", "europa.eu (DA 94)", "ieee.org (DA 93)"],
    image: "/images/premium-domains-logo.png"
  },
  {
    name: "martonecycling.eu",
    description: "Cycling domain with backlinks from Globo, Harper's Bazaar, Vogue and Grazia.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 118,
    inboundLinks: "232+",
    followedLinks: "173+",
    category: "Sport",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "232+",
    topBacklinks: ["globo.com (DA 93)", "vogue.com (DA 92)", "harpersbazaar.com (DA 89)", "grazia.it (DA 73)"],
    image: "/images/premium-domains-logo.png"
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
    topBacklinks: ["en.wikipedia.org (DA 97)", "de.wikipedia.org (DA 94)", "fandom.com (DA 94)", "spiegel.de (DA 93)", "la-croix.com (DA 88)"],
    image: "/images/premium-domains-logo.png"
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
    topBacklinks: ["naver.com (DA 93)", "yumpu.com (DA 91)", "heise.de (DA 91)", "computerbase.de (DA 84)", "motor-talk.de (DA 73)"],
    image: "/images/premium-domains-logo.png"
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
    topBacklinks: ["scoop.it (DA 92)", "franceinfo.fr (DA 91)", "latribune.fr (DA 86)", "culture.gouv.fr (DA 76)", "agriculture.gouv.fr (DA 72)"],
    image: "/images/premium-domains-logo.png"
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
    topBacklinks: ["en.wikipedia.org (DA 97)", "variety.com (DA 93)", "constantcontact.com (DA 90)", "rtbf.be (DA 89)", "courrierinternational.com (DA 80)"],
    image: "/images/premium-domains-logo.png"
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
    topBacklinks: ["europa.eu (DA 94)", "cam.ac.uk (DA 93)", "springer.com (DA 92)", "lse.ac.uk (DA 90)"],
    image: "/images/premium-domains-logo.png"
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
    topBacklinks: ["globo.com (DA 95)", "huffpost.com (DA 94)", "cbsnews.com (DA 93)", "gizmodo.com (DA 93)", "fastcompany.com (DA 92)"],
    image: "/images/premium-domains-logo.png"
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
    topBacklinks: ["en.wikipedia.org (DA 97)", "gofundme.com (DA 93)", "mundodeportivo.com (DA 92)", "nicematin.com (DA 73)", "triathlon.org (DA 68)"],
    image: "/images/premium-domains-logo.png"
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
    topBacklinks: ["es.wikipedia.org (DA 96)", "psu.edu (DA 92)", "scoop.it (DA 92)", "wisc.edu (DA 91)", "coe.int (DA 89)"],
    image: "/images/premium-domains-logo.png"
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
    topBacklinks: ["goo.gl (DA 95)", "tripadvisor.com (DA 93)", "skyscrapercity.com (DA 86)", "ricksteves.com (DA 77)", "rome2rio.com (DA 76)"],
    image: "/images/premium-domains-logo.png"
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
  {
    name: "imess.eu",
    description: "EU domain with backlinks from Bit.ly, Wikipedia (JA), UCL and University of Helsinki.",
    mozScore: 31,
    pageAuthority: 32,
    linkingDomains: 174,
    inboundLinks: "748+",
    followedLinks: "675+",
    category: "Technology",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "748+",
    topBacklinks: ["bit.ly (DA 94)", "ja.wikipedia.org (DA 93)", "ucl.ac.uk (DA 91)", "ku.dk (DA 87)", "helsinki.fi (DA 85)"]
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
  {
    name: "dowse.eu",
    description: "EU domain with backlinks from GitHub, Medium, The Guardian and Vercel.",
    mozScore: 30,
    pageAuthority: 33,
    linkingDomains: 184,
    inboundLinks: "853+",
    followedLinks: "462+",
    category: "Technology",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "853+",
    topBacklinks: ["github.com (DA 96)", "medium.com (DA 95)", "theguardian.com (DA 94)", "vercel.app (DA 92)", "ycombinator.com (DA 90)"]
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
    name: "scpenetwork.eu",
    description: "EU network domain with backlinks from Springer, The Conversation, MDPI and Player.fm.",
    mozScore: 28,
    pageAuthority: 30,
    linkingDomains: 131,
    inboundLinks: "280+",
    followedLinks: "186+",
    category: "Research",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "280+",
    topBacklinks: ["springer.com (DA 93)", "theconversation.com (DA 92)", "mdpi.com (DA 92)", "player.fm (DA 88)", "ncl.ac.uk (DA 85)"]
  },
  {
    name: "papilios.eu",
    description: "EU domain with high linking domains and backlinks from Zoznam.sk, Centrum.cz and Penize.cz.",
    mozScore: 28,
    pageAuthority: 32,
    linkingDomains: 833,
    inboundLinks: "20.2K+",
    followedLinks: "20.1K+",
    category: "General",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "20.2K+",
    topBacklinks: ["zoznam.sk (DA 90)", "centrum.cz (DA 72)", "penize.cz (DA 62)", "n-1publications.org (DA 55)", "vinosol.ch (DA 55)"]
  },
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
    name: "bringaexpo.eu",
    description: "Hungarian cycling/expo domain with strong backlinks from Origo.hu, Velvet.hu, Network.hu and other Hungarian media websites.",
    mozScore: 27,
    pageAuthority: 25,
    linkingDomains: 79,
    inboundLinks: "551+",
    followedLinks: "513+",
    category: "Sport/Events",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "551+",
    topBacklinks: ["origo.hu (DA 72)", "velvet.hu (DA 60)", "network.hu (DA 57)", "femcafe.hu (DA 56)", "hwsw.hu (DA 56)"]
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
    description: "Belgian center domain with backlinks from Wikipedia (FR, IT, NL), Le Figaro and Wiktionary.",
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
    description: "EU project domain with backlinks from Apple.com, Bit.ly, RTL.fr and Greek Wikipedia.",
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
    topBacklinks: ["campaign-archive.com (DA 84)", "knack.be (DA 75)", "brusselslife.be (DA 55)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "infoecmi.eu",
    description: "EU information domain with backlinks from Wikipedia (EN, ES, PT, RU, DE), UCL and ETH Zürich.",
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
    description: "Belgian personal/portfolio domain with backlinks from Airbnb, Foursquare, The Culture Trip and Knack.be.",
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
    description: "German/EU local government domain with backlinks from Wikipedia (EN, ES, FR, RU, NL), Bit.ly and Creative Commons.",
    mozScore: 22,
    pageAuthority: 32,
    linkingDomains: 810,
    inboundLinks: "4.9K+",
    followedLinks: "4.7K+",
    category: "Government",
    price: "€125",
    backlinks: "4.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "ru.wikipedia.org (DA 94)", "creativecommons.org (DA 94)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "europeanmuseumforum.eu",
    description: "European museum forum domain with backlinks from Wikipedia (EN, ES, FR, RU, NL), Bit.ly and Creative Commons.",
    mozScore: 22,
    pageAuthority: 32,
    linkingDomains: 810,
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
    description: "Welsh arts/culture domain with backlinks from The Guardian, Mirror, Eventbrite and Wales Online.",
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
    description: "Medical research EU-FP7 project domain with backlinks from Europa.eu, Springer, IIT and FGOV.be.",
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
      const firstError = Object.values(errorResult.errors)[0] || "Please check your input";
      toast({
        title: "Please correct the form errors",
        description: firstError,
        variant: "destructive"
      });
      return;
    }

    const { data } = validation;
    
    // Build safe mailto URL with sanitized data
    const subject = `Premium Domain Inquiry: ${data.domain}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\nDomain: ${data.domain}\n\nMessage:\n${data.message || ""}`;
    
    window.location.href = buildSafeMailtoUrl("support@iaee.eu", subject, body);
    
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
        <html lang="en" />
        <title>Buy Premium Expired Domain Names with Backlinks | High Authority & SEO Value</title>
        <meta name="description" content="Buy expired domain names with backlinks? Reliable expired domains with high authority and SEO value. Buy premium domain names for faster Google rankings. Immediately available." />
        <meta name="keywords" content="buy expired domain name, expired domain names with backlinks, domain name with authority, reliable expired domains, buy premium domain name, domain name with SEO value, old domain name with links, best domain names for sale" />
        <link rel="canonical" href="https://www.iaee.eu/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" />
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
        <meta property="og:title" content="Buy Premium Expired Domain Names with Backlinks | High Authority & SEO Value" />
        <meta property="og:description" content="Reliable expired domains with high authority and SEO value. Buy premium domain names for faster Google rankings." />
        <meta property="og:url" content="https://www.iaee.eu/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="IAEE Premium Domains" />
        <meta property="og:image" content="https://www.iaee.eu/images/premium-domains-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:alt" content="Premium Domains - High Authority Domain Names" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buy Premium Expired Domain Names with Backlinks" />
        <meta name="twitter:description" content="Reliable expired domains with high authority and SEO value. Immediately available." />
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
                "description": "Specialist in premium expired domain names with high authority and SEO value",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "support@iaee.eu",
                  "contactType": "sales"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://iaee.eu/expireddomainnames/en/buy-premium-domains-high-authority-seo-value/#webpage",
                "url": "https://iaee.eu/expireddomainnames/en/buy-premium-domains-high-authority-seo-value",
                "name": "Buy Premium Expired Domain Names with Backlinks | High Authority & SEO Value",
                "description": "Buy expired domain names with backlinks? Reliable expired domains with high authority and SEO value.",
                "inLanguage": "en",
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
                "name": "Premium Expired Domain Names",
                "description": "Curated selection of premium expired domain names with high authority",
                "numberOfItems": ${premiumDomains.length},
                "itemListElement": ${JSON.stringify(premiumDomains.slice(0, 10).map((domain, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                   "item": {
                    "@type": "Product",
                    "name": domain.name,
                    "description": domain.description,
                    "category": domain.category,
                    "image": "https://www.iaee.eu/images/premium-domains-logo.png",
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
                    "name": "What is an expired domain?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "An expired domain is a domain name that was not renewed by its previous owner and is now available for registration. These domains often retain their built-up backlinks and authority."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why are backlinks important?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Backlinks are one of the most important ranking factors for Google. Domains with quality backlinks from authoritative websites have an advantage in search engine results."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does a 301 redirect work for SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A 301 redirect permanently redirects visitors and search engines from the old domain to your new website, transferring link value for better rankings."
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
        <LanguageSwitcher currentLanguage="en" />
        
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 flex-shrink-0" />
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent hover:from-amber-300 hover:to-amber-500 transition-all truncate">
                Premium Domains
              </span>
            </RouterLink>
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
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
            <Button 
              onClick={() => scrollToSection("domains")}
              className="md:hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-xs px-3 py-2"
            >
              Domains
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
                Exclusive Collection of Premium Domains
              </Badge>
              
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Buy Premium Expired Domain Names with Backlinks High Authority & SEO Value
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Strengthen your online presence with domain names that have built authority over the years. 
                Ideal for faster rankings, powerful backlinks and direct SEO benefits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("domains")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-105"
                >
                  View Domains
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("why-premium")}
                  className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6"
                >
                  More Information
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2">
                {[
                  { label: "Average MOZ Score", value: "29+" },
                  { label: "Premium Domains", value: "110+" },
                  { label: "Years Experience", value: "10+" },
                  { label: "Satisfied Customers", value: "500+" }
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
                Available Domains
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Premium Domain Names For Sale
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Each domain is carefully selected based on MOZ authority, backlink profile and SEO potential. 
                Want to <strong className="text-white">buy an expired domain name</strong> or looking for <strong className="text-white">reliable expired domains</strong>? View our offering below.
              </p>
            </div>
            
            {/* SEO Intro Text */}
            <div className="max-w-5xl mx-auto mb-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">Looking for a domain name with real SEO value?</strong> With us you buy reliable <strong className="text-amber-400">expired domain names with backlinks</strong> and high authority, carefully checked for quality and history. With an expired domain you don't start from scratch, but immediately benefit from existing links, trust and online history.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-amber-400">We specialize in .EU and other European domain extensions</strong> and clearly distinguish ourselves within the segment of European web names.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                These expired domains have existing backlinks from <strong className="text-amber-400">reputable companies, media institutions and government organizations</strong> — essential links that for normal websites are very difficult or impossible to obtain. Expired domains are a strategic advantage that top marketers, agencies and investors have been using for years to grow faster than the rest.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                In addition to expired domain names, we also offer <strong className="text-amber-400">premium domain names</strong>: short, powerful names with brand value and commercial potential. Whether you're starting a website, webshop or SEO project — a <strong className="text-white">domain name with authority</strong> gives you a clear advantage in Google.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                <strong className="text-white">Popular searches:</strong> buy expired domain name with backlinks • reliable expired domains • expired domain name with authority • buy premium domain name • domain name with SEO value • old domain name with links • best domain names for sale
              </p>
            </div>

            {/* Important Information Box */}
            <div className="max-w-5xl mx-auto mb-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-amber-500/30 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-amber-400" />
                Important to Know
              </h3>
              <p className="text-amber-400 font-medium mb-4">🌐 Globally accessible – also for non-EU buyers</p>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  <span className="text-amber-400 font-semibold">EU residents</span> can freely register all European domain extensions
                </p>
                <p>
                  <span className="text-white font-semibold">.NL · .BE · .CO.UK</span> are freely registrable worldwide
                </p>
                <p>
                  For <span className="text-amber-400 font-semibold">.EU · .IT · .FR · .DE</span> normally an EU address or EU company is required
                </p>
                <p className="text-amber-400 font-medium pt-2">
                  ➡️ Not an EU resident? No problem, You can easily register these domains via a domain registrar with a trustee service — Using their physical EU address for registration.{" "}
                  <a 
                    href="#trustee-service-section" 
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('trustee-service-section');
                      element?.scrollIntoView({ behavior: 'smooth' });
                      // Also open the accordion
                      const trigger = element?.querySelector('button');
                      if (trigger && trigger.getAttribute('data-state') === 'closed') {
                        trigger.click();
                      }
                    }}
                    className="underline hover:text-amber-300 cursor-pointer"
                  >
                    What is a Trustee Service?
                  </a>
                </p>
              </div>
            </div>

            {/* VAT Notice */}
            <div className="max-w-5xl mx-auto mb-10 text-center">
              <p className="text-sm text-slate-300 font-medium bg-slate-800/40 border border-slate-700/40 rounded-lg px-4 py-3 inline-block">
                <span className="text-amber-400 font-semibold">VAT information:</span> Prices are exclusive of VAT for private customers within the EU. Business customers within the EU can apply reverse charge VAT. For customers outside the EU, no VAT is charged.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {premiumDomains.map((domain, index) => (
                <Card 
                  key={index} 
                  className="h-full flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group"
                >
                  <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-4 md:p-6">
                    <div className="mt-1 mb-2 flex justify-center">
                      <img src="/images/premium-domains-logo-en.png" alt={`${domain.name} premium domain`} className="w-20 h-auto object-contain" />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="outline" className="text-[10px] sm:text-xs border-slate-600 text-slate-400 flex-shrink-0">
                        {domain.category}
                      </Badge>
                      
                      <div className="flex items-center gap-1 bg-amber-500/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex-shrink-0">
                        <BarChart3 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
                        <span className="text-[10px] sm:text-xs font-semibold text-amber-400">MOZ {domain.mozScore}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-white group-hover:text-amber-400 transition-colors mt-2 sm:mt-3 break-all">
                      {domain.name}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-slate-300">
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
                          <span className="text-slate-500 block mb-1">Suitable for:</span>
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
                        <span className="text-xs sm:text-sm font-medium text-slate-300">Price</span>
                        <span className="text-base sm:text-lg font-bold text-amber-400">{domain.price}</span>
                      </div>
                      
                      {!domain.stripePaymentLink ? (
                        <div className="flex flex-col gap-2 sm:gap-3">
                          <div 
                            className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#F59E0B] text-slate-950 font-bold rounded-md shadow-md text-sm sm:text-base md:text-lg"
                          >
                            Buy Now
                          </div>
                          <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-center" data-nosnippet>
                            <div className="flex items-center justify-center gap-0.5 sm:gap-1 flex-wrap">
                              {/* Visa */}
                              <div className="flex items-center bg-[#1A1F71] rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
                                <span className="text-white font-bold text-[5px] sm:text-[7px] italic tracking-tight" style={{fontFamily: 'Arial'}}>VISA</span>
                              </div>
                              {/* Mastercard */}
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
                              <p className="text-[8px] sm:text-[10px] text-slate-400 leading-tight mt-1.5 sm:mt-2">
                                Secure payment via Stripe
                                <br />
                                Automatically converted to your local currency
                              </p>
                              <p className="text-[8px] sm:text-[10px] text-slate-400 leading-tight mt-2 sm:mt-3">
                                After payment you will receive the transfer token (EPP/Auth code) at your email address within 24 hours.
                                <br />
                                Also check your spam folder.
                              </p>
                              <a href="#domain-transfer" className="text-[8px] sm:text-[10px] text-amber-400 hover:text-amber-300 underline mt-1.5 sm:mt-2">
                                How does the transfer work?
                              </a>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-2 sm:gap-3">
                          <a 
                            href={domain.stripePaymentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold rounded-md transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base md:text-lg"
                          >
                            Buy Now
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          </a>
                          <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-center" data-nosnippet>
                            <div className="flex items-center justify-center gap-0.5 sm:gap-1 flex-wrap">
                              <div className="flex items-center bg-[#1A1F71] rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
                                <span className="text-white font-bold text-[5px] sm:text-[7px] italic tracking-tight" style={{fontFamily: 'Arial'}}>VISA</span>
                              </div>
                              <div className="flex items-center bg-[#000000] rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
                                <svg className="h-2 sm:h-2.5 w-3 sm:w-4" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="11" cy="10" r="8" fill="#EB001B"/><circle cx="21" cy="10" r="8" fill="#F79E1B"/>
                                  <path d="M16 3.5C18.5 5.5 20 7.5 20 10C20 12.5 18.5 14.5 16 16.5C13.5 14.5 12 12.5 12 10C12 7.5 13.5 5.5 16 3.5Z" fill="#FF5F00"/>
                                </svg>
                              </div>
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
                                Secure payment via Stripe
                                <br />
                                Automatically converted to your local currency
                              </p>
                              <p className="text-[8px] sm:text-[10px] text-slate-400 leading-tight mt-2 sm:mt-3">
                                After payment you will receive the transfer token (EPP/Auth code) at your email address within 24 hours.
                                <br />
                                Also check your spam folder.
                              </p>
                              <a href="#domain-transfer" className="text-[8px] sm:text-[10px] text-amber-400 hover:text-amber-300 underline mt-1.5 sm:mt-2">
                                How does the transfer work?
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
                Strategic Advantage
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Premium Domain Names?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Premium domain names with high MOZ authority are a strategic investment that gives you an enormous advantage in search results.
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
                  description: "A domain with years of history and quality backlinks is seen by Google as more reliable and gets higher rankings."
                },
                {
                  icon: Target,
                  title: "Higher Click-Through Rates (CTR)",
                  description: "Premium domain names inspire trust in users, leading to higher click-through rates in search results and advertisements."
                },
                {
                  icon: Zap,
                  title: "Immediate SEO Advantage",
                  description: "Instead of waiting years to build authority, you immediately benefit from the domain's existing SEO value."
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
                    "Advantage over competition"
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
                  { icon: Globe, title: "EU/Global TLDs", desc: ".eu, .nl, .be, .de, .co.uk" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-amber-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
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
                      <h3 className="text-lg sm:text-xl font-semibold">Premium .EU & European Extensions with History — What is a Trustee Service?</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pb-6 leading-relaxed">
                    <div className="space-y-6">
                      {/* Introduction */}
                      <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                        <p className="text-sm sm:text-base mb-3">
                          We specialize in <span className="text-amber-400 font-semibold">.EU and other European domain extensions</span>. Our portfolio consists of <span className="text-white font-semibold">premium and expired domain names</span> with proven online history, often from former European projects and initiatives.
                        </p>
                        <p className="text-amber-400 font-medium">🌐 Globally accessible – also for non-EU buyers via trustee registration using a verified EU address.</p>
                      </div>

                      {/* What is a Trustee */}
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                          🔐 What is a Trustee (Local Presence Service)?
                        </h4>
                        <p className="mb-3">A trustee is a recognized registrar that:</p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                            <span>Uses a physical address within the EU for registration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                            <span>Acts as administrative contact with the registry</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                            <span>Ensures the domain complies with all EU rules</span>
                          </li>
                        </ul>
                      </div>

                      {/* What this means for you */}
                      <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                        <h4 className="text-white font-semibold mb-3">What this means for you:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-green-400">✔️</span>
                            <span>You remain full owner and administrator</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-green-400">✔️</span>
                            <span>Free use for website, email, branding or redirects</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-green-400">✔️</span>
                            <span>No EU company or local address needed</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-green-400">✔️</span>
                            <span>Fully legal and transparent</span>
                          </div>
                        </div>
                        <p className="text-slate-400 text-sm mt-3">For non-EU buyers this is the standard and most commonly used solution.</p>
                      </div>

                      {/* Trustee Registrars */}
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                          🧩 Trustee Registration via Recognized Registrars
                        </h4>
                        <div className="space-y-4">
                          {/* INWX */}
                          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                            <h5 className="text-amber-400 font-semibold mb-2">INWX — Very affordable trustee (from €3)</h5>
                            <p className="text-sm mb-2"><span className="text-slate-400">Supported extensions:</span> .EU · .IT · .FR · .DE</p>
                            <p className="text-sm mb-2"><span className="text-slate-400">How it works:</span> During registration the trustee option is automatically offered. INWX uses an EU address for registration. You retain full control.</p>
                            <p className="text-sm"><span className="text-slate-400">💰 Cost:</span> <span className="text-white font-medium">€3 per year</span></p>
                            <a href="https://www.inwx.com/en/offer/localpresence" target="_blank" rel="nofollow noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-sm underline">🔗 inwx.com/en/offer/localpresence</a>
                          </div>

                          {/* 101domain */}
                          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                            <h5 className="text-amber-400 font-semibold mb-2">101domain — Trustee directly during checkout</h5>
                            <p className="text-sm mb-2">Trustee is automatically offered. Suitable for multiple European ccTLDs. Ideal for international businesses.</p>
                            <p className="text-sm"><span className="text-slate-400">💰 Cost:</span> <span className="text-white font-medium">± $25 per year</span></p>
                            <a href="https://www.101domain.com/trustee_service.htm" target="_blank" rel="nofollow noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-sm underline">🔗 101domain.com/trustee_service.htm</a>
                          </div>

                          {/* Netim */}
                          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                            <h5 className="text-amber-400 font-semibold mb-2">Netim — Trustee only when required</h5>
                            <p className="text-sm mb-2">Only active for extensions with obligation. Transparent and professional solution.</p>
                            <p className="text-sm"><span className="text-slate-400">💰 Cost:</span> <span className="text-white font-medium">€10–€30 per year</span></p>
                            <a href="https://www.netim.com/en/domain-name/services/trustee-service" target="_blank" rel="nofollow noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-sm underline">🔗 netim.com/en/domain-name/services/trustee-service</a>
                          </div>
                        </div>
                      </div>

                      {/* Comparison Table */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">📊 Overview at a Glance</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm border border-slate-700/50 rounded-lg overflow-hidden">
                            <thead className="bg-slate-800/70">
                              <tr>
                                <th className="text-left px-4 py-2 text-amber-400 font-semibold">Registrar</th>
                                <th className="text-left px-4 py-2 text-amber-400 font-semibold">Extensions</th>
                                <th className="text-left px-4 py-2 text-amber-400 font-semibold">Trustee Cost</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700/30">
                              <tr className="bg-slate-800/30">
                                <td className="px-4 py-2 text-white">INWX</td>
                                <td className="px-4 py-2">.EU · .IT · .FR · .DE</td>
                                <td className="px-4 py-2 text-green-400">€3 / year</td>
                              </tr>
                              <tr className="bg-slate-800/50">
                                <td className="px-4 py-2 text-white">101domain</td>
                                <td className="px-4 py-2">Various EU ccTLDs</td>
                                <td className="px-4 py-2">± $25 / year</td>
                              </tr>
                              <tr className="bg-slate-800/30">
                                <td className="px-4 py-2 text-white">Netim</td>
                                <td className="px-4 py-2">Various EU ccTLDs</td>
                                <td className="px-4 py-2">€10–€30 / year</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Why Premium EU Domains */}
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                          💎 Why Premium European Domains Are Extra Valuable
                        </h4>
                        <p className="mb-3">Our domains are more than just a name:</p>
                        <div className="grid sm:grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-2"><span>🔗</span><span>Online history & mentions</span></div>
                          <div className="flex items-center gap-2"><span>🏛️</span><span>Often former EU projects</span></div>
                          <div className="flex items-center gap-2"><span>🌍</span><span>Trust with European visitors</span></div>
                          <div className="flex items-center gap-2"><span>📉</span><span>Less competition than .COM</span></div>
                          <div className="flex items-center gap-2"><span>🔁</span><span>Perfect for 301 redirects (retain EU authority)</span></div>
                          <div className="flex items-center gap-2"><span>🧠</span><span>Interesting for branding, SEO and investments</span></div>
                        </div>
                        <p className="text-slate-400 text-sm mt-3">
                          In practice, these European names are often more valuable and reliable than many .COM, .NET or .ORG domains.
                        </p>
                      </div>

                      {/* For International Investors */}
                      <div className="bg-gradient-to-r from-amber-500/10 to-slate-800/30 rounded-xl p-5 border border-amber-500/20">
                        <h4 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                          🌍 Ideal for International Investors
                        </h4>
                        <p className="mb-3">For investors outside the EU, European domains offer:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Exclusivity through regulations</li>
                          <li>• Higher quality threshold</li>
                          <li>• Strong geographic positioning</li>
                          <li>• Attractive deployment for international projects</li>
                        </ul>
                        <p className="text-amber-400 font-medium mt-4">
                          Via trustee registration, even premium expired .EU domains are deployable worldwide.
                        </p>
                        <p className="text-white font-semibold mt-2">
                          ➡️ European authority. International applicability.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                FAQ about Premium Domains & SEO
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Where can I buy an expired domain name with backlinks?",
                    answer: "You can best buy an expired domain name with backlinks from a specialized seller who manually checks domains for quality, history and authority. This prevents you from buying a domain name with spam links or SEO problems. We only offer reliable expired domains that have been carefully checked."
                  },
                  {
                    question: "What is a reliable expired domain name with high authority?",
                    answer: "A reliable expired domain name with high authority is a domain that has quality backlinks, a clean website history, no spam, gambling or adult past, and relevant links from real content. This type of domain name offers real SEO value and gives you an advantage in Google."
                  },
                  {
                    question: "How much SEO value does an expired domain name with links have?",
                    answer: "The SEO value of an expired domain name with links lies mainly in existing backlinks, built-up domain authority and faster trust with Google. This can significantly shorten the time to rank — often months to years faster than with a new domain name."
                  },
                  {
                    question: "Is an expired domain name with authority better than link building?",
                    answer: "In many cases yes. With an expired domain name you buy existing links and authority, while link building can be time-consuming, expensive and risky. An old domain name with SEO value gives you an immediate advantage without months of investment in link building."
                  },
                  {
                    question: "Can I use an expired domain name for a new website?",
                    answer: "Yes. You can perfectly use an expired domain name with SEO value for a new website, as long as the content logically connects to the subject and history of the domain. The backlinks remain active and you immediately benefit from the built-up authority."
                  },
                  {
                    question: "What is the difference between a premium domain name and an expired domain name?",
                    answer: "A premium domain name is mainly valuable due to name quality and brand value, while an expired domain name with backlinks brings extra SEO authority and history. Both can be valuable, depending on your goal. Some domains combine both advantages."
                  },
                  {
                    question: "Why are expired domain names with backlinks more expensive?",
                    answer: "Expired domain names with backlinks are more expensive because they already have SEO value, they save time and costs, and they enable a faster start. You pay for built-up trust, not just for a name. The investment often pays for itself quickly through better rankings."
                  },
                  {
                    question: "Are expired domain names with authority suitable for webshops?",
                    answer: "Yes. For webshops, trust is crucial. An expired domain name with high authority can contribute to better visibility, higher conversions and faster indexation. This gives your webshop an advantage over competitors who start with a new domain name."
                  },
                  {
                    question: "Can I combine a premium domain name with SEO benefits?",
                    answer: "Yes. Some premium domain names are also expired domains with a strong link history. This combines brand value with SEO authority and is often the most valuable. In our portfolio you will find several domains that offer both advantages."
                  },
                  {
                    question: "Why are more and more entrepreneurs choosing expired domain names with SEO value?",
                    answer: "Because entrepreneurs are looking for faster results in Google, less dependence on link building and a strong foundation for growth. A reliable expired domain name with backlinks and authority offers exactly that advantage that makes the difference."
                  },
                  {
                    question: "What is Domain Authority (DA) and why is it important?",
                    answer: "Domain Authority is a score from 1-100 developed by MOZ that predicts how well a website will rank in search engines. A higher DA means more authority and better chances of ranking high. It is based on factors such as the number and quality of backlinks, the age of the domain and the overall reliability."
                  },
                  {
                    question: "How does a 301 redirect work for SEO?",
                    answer: "A 301 redirect is a permanent redirect that tells search engines that a page has been permanently moved. When you 301-redirect a premium domain to your site, a large part of the SEO value (link juice) of that domain is transferred to your site. This can significantly improve your rankings."
                  },
                  {
                    question: "How long does it take before I see results?",
                    answer: "The effects of a domain transfer or 301 redirect are usually visible within 2-8 weeks in the search results. This depends on how often Google crawls your site and the current state of your website. Premium domains with active backlinks often show results faster."
                  },
                  {
                    question: "What is the best way to find expired domain names with authority?",
                    answer: "The best way is through a specialized seller who pre-checks domains. Searching yourself via auction sites involves risks. We only select domain names with quality links, no spam history and real SEO value. This way you know for sure that you are investing in a reliable domain."
                  },
                  {
                    question: "Why are there sometimes websites from your portfolio in a domain's history?",
                    answer: "Some domain names in our portfolio were previously used for our own projects, test websites or 301 redirects. This includes websites such as NailTalk, OntwerpNovi, OliveVines and similar projects. This is actually an advantage: these domains have proven results and have been actively tested for SEO performance. All our domain names are thoroughly checked before sale with multiple sources (such as web history archives, Google, Ahrefs, MOZ and spam checkers) and are completely free of harmful history such as spam, adult content or gambling-related history. A website from our own portfolio in the history is therefore a sign of quality and careful management — no reason for concern."
                  },
                  {
                    question: "How does SEO and link building work? And why do I need to keep maintaining my purchased domain?",
                    answer: "SEO (Search Engine Optimization) is about optimizing your website so that search engines like Google can find, understand and rank it better. Link building is a crucial part of this: obtaining backlinks (references) from other websites to yours. These links act as 'votes of confidence' and tell Google that your content is valuable.\n\n**Why maintenance is essential:**\nA premium domain name with existing backlinks gives you a strong foundation, but no domain name offers guarantees on rankings. SEO is an ongoing process. Backlinks can disappear over time when referring websites go offline or remove content. In addition, Google's algorithms change regularly, so what works today may be different tomorrow.\n\n**Tips for successful maintenance and link building:**\n• **Create valuable content** — Regularly publish relevant, original articles, guides or tools that others want to share and link to.\n• **Guest blogging** — Write articles for respected websites in your industry with a link back to your site.\n• **Broken link building** — Find broken links on relevant websites and offer your content as a replacement.\n• **HARO/Helpareporter** — Respond to journalist questions to get mentions and links in news articles.\n• **Social media and PR** — Actively share your content and build relationships with influencers and media.\n• **Internal link structure** — Ensure logical internal links between your pages to distribute authority.\n• **Monitor your backlinks** — Use tools like Ahrefs, MOZ or SEMrush to monitor your link profile and disavow harmful links.\n• **Technical SEO** — Ensure fast loading times, mobile-friendly design and a secure HTTPS connection.\n\n**Important to know:**\nNo domain name, no matter how strong, guarantees top positions in Google. The built-up authority gives you a head start, but success depends on continuous effort: regular content, active link building and technical maintenance. See your premium domain as a solid foundation — you determine the structure above it with consistent SEO efforts."
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
                    <h3 className="font-semibold">Complete Guide: 35 Questions about Expired Domain Names & SEO</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 pb-6 leading-relaxed">
                    <div className="space-y-8 whitespace-pre-line">
                      {[
                        {
                          question: "1. Which domain name should I buy as a beginner?",
                          answer: "As a beginner, you are best off choosing a domain name that is easy to remember, clearly indicates what you do and exudes trust. Many starters search for \"which domain name should I buy\" and automatically end up with new domains, while a reliable expired domain name often already has built-up authority and value."
                        },
                        {
                          question: "2. What is the difference between a new domain name and an expired domain name?",
                          answer: "A new domain name has no history and starts completely from scratch. An expired domain name has been registered before and may still have backlinks, authority and trust with Google. That makes an expired domain name often more attractive for SEO and visibility."
                        },
                        {
                          question: "3. Is it better to buy a new domain name or an expired domain name?",
                          answer: "Those who search for \"new domain name or expired domain name\" are usually comparing speed and results. For branding, a new name can work, but for getting found in Google faster, a good expired domain name often offers a clear head start."
                        },
                        {
                          question: "4. Why does my new website score so poorly in Google?",
                          answer: "New websites still need to build their reliability. Without backlinks and history, this often takes months. An expired domain name with good links can ensure that you don't have to start completely from scratch."
                        },
                        {
                          question: "5. Is an expired domain name safe to buy?",
                          answer: "Yes, as long as it is a checked and reliable expired domain name. The risk is not in \"expired\", but in domains that have not been checked for spam, abuse or bad backlinks."
                        },
                        {
                          question: "6. What does a domain name with good backlinks mean?",
                          answer: "A domain name with good backlinks has references from real, relevant websites. These links ensure authority and trust with search engines, which is essential for SEO performance."
                        },
                        {
                          question: "7. Why are backlinks important when buying a domain name?",
                          answer: "Backlinks are one of the most important ranking factors of Google. When you search for \"SEO domain name buy\", you are actually looking for a domain that has already built up trust — exactly what a good expired domain name offers."
                        },
                        {
                          question: "8. How can I see if an expired domain name is reliable?",
                          answer: "A reliable expired domain name is checked for: website history, quality of backlinks, absence of spam, gambling or adult content. As a seller, you only select domains that meet these criteria."
                        },
                        {
                          question: "9. Can I use an expired domain name for a new website?",
                          answer: "Yes. You can perfectly use an expired domain name for a completely new project. The content is new, but the domain name already brings online authority."
                        },
                        {
                          question: "10. Is an expired domain name suitable for beginners?",
                          answer: "Certainly. Beginners often benefit the most because they: get faster visibility, have less SEO backlog, make a more professional start."
                        },
                        {
                          question: "11. Why are some domain names more expensive than others?",
                          answer: "Searches like \"why is a domain name so expensive\" often come from misunderstanding value. The price is determined by: name quality, SEO value, backlinks, commercial applicability."
                        },
                        {
                          question: "12. Can I sell an expired domain name later?",
                          answer: "Yes. Many people search for \"domain name as investment\". A strong expired domain name often retains its value and can even increase in price."
                        },
                        {
                          question: "13. Can an expired domain name be bad for SEO?",
                          answer: "Only if it has a bad history. That's why there is a big difference between: unchecked expired domains and carefully selected, reliable domain names."
                        },
                        {
                          question: "14. What should I pay attention to when buying an expired domain name?",
                          answer: "Important points of attention are: spam-free history, relevant backlinks, logical domain name, no trademark risk."
                        },
                        {
                          question: "15. How quickly can I start after buying a domain name?",
                          answer: "After transfer you can immediately use the domain name for: a website, email, webshop. Just like with a new domain name."
                        },
                        {
                          question: "16. Do I need technical knowledge to use an expired domain name?",
                          answer: "No. An expired domain name technically works the same as a new domain name and can be used with any hosting provider."
                        },
                        {
                          question: "17. Is an expired domain name suitable for a webshop?",
                          answer: "Yes. Webshops especially benefit from: trust, authority, better start in Google. That is crucial for conversions."
                        },
                        {
                          question: "18. What does domain authority mean when buying a domain name?",
                          answer: "Domain authority is an indication of how strong a domain is based on links and history. Many expired domain names score higher here than new domains."
                        },
                        {
                          question: "19. Is an expired domain name better than link building?",
                          answer: "For many entrepreneurs, yes. Link building is labor-intensive, expensive and can take years. With a good expired domain name you buy: an immediate head start, less risk, faster results."
                        },
                        {
                          question: "20. How much does a good expired domain name cost?",
                          answer: "Prices vary depending on: domain authority, backlink profile, industry. A cheap domain without value says little — quality costs, but earns itself back."
                        },
                        {
                          question: "21. Is a keyword in my domain name important for SEO?",
                          answer: "Less important than it used to be. A clear, reliable name is now more important than exact keywords."
                        },
                        {
                          question: "22. Can I use an expired domain name for an affiliate website?",
                          answer: "Yes, especially if it has relevant backlinks and thematic history. This gives you a quicker start in competitive niches."
                        },
                        {
                          question: "23. What if an expired domain name has been penalized by Google?",
                          answer: "A domain with a penalty should be avoided. That's why we check every domain in advance for spam, penalties and unnatural links."
                        },
                        {
                          question: "24. How do I transfer a purchased domain name to my own hosting?",
                          answer: "After purchase you will receive an EPP/auth code. You enter this at your new registrar to complete the transfer."
                        },
                        {
                          question: "25. Is a .nl or .eu domain better than a .com?",
                          answer: "It depends on your target audience. For the Netherlands, .nl is strong. For Europe, .eu. For international, .com. The authority of the domain is more important than the extension."
                        },
                        {
                          question: "26. Can I redirect an expired domain name to my existing website?",
                          answer: "Yes. With a 301 redirect you transfer the SEO value of the expired domain to your main site. This is a popular strategy for boosting authority."
                        },
                        {
                          question: "27. How long does it take before an expired domain name ranks in Google?",
                          answer: "Faster than with a new domain — often within days or weeks, depending on the quality of the domain and the content you place."
                        },
                        {
                          question: "28. What are the advantages of an expired domain name compared to a new domain name?",
                          answer: "Faster visibility, existing backlinks, more trust with Google, less dependence on link building."
                        },
                        {
                          question: "29. Can I trust an expired domain name from a random marketplace?",
                          answer: "Not always. Many marketplaces do not check quality. That's why it's wiser to buy from a specialized seller who guarantees transparency and quality."
                        },
                        {
                          question: "30. How do I know if a domain name has valuable backlinks?",
                          answer: "Use tools like Ahrefs, MOZ or SEMrush. We provide this information transparently for every domain in our portfolio."
                        },
                        {
                          question: "31. Is investing in an expired domain name a good idea?",
                          answer: "For many entrepreneurs and investors, yes. A strong domain with authority retains its value and can even increase."
                        },
                        {
                          question: "32. What happens to old backlinks when I build a new website?",
                          answer: "The backlinks remain as long as they are not removed by the referring websites. That is precisely one of the great advantages of an expired domain name."
                        },
                        {
                          question: "33. Can I use an expired domain name for a local business?",
                          answer: "Yes, especially if the domain has regional relevance or local backlinks. This can help you get found in local searches."
                        },
                        {
                          question: "34. Are there risks with buying an expired domain name?",
                          answer: "Only if you don't check the domain in advance. Spam, penalties or unnatural links are risks that we filter out in advance."
                        },
                        {
                          question: "35. Why buy from a specialized expired domain seller?",
                          answer: "Because you: get pre-checked quality, avoid risk, receive transparency about each domain, and save time and money on your own research."
                        }
                      ].map((faq, index) => (
                        <div key={index}>
                          <h4 className="text-lg font-semibold text-white mb-2">{faq.question}</h4>
                          <p className="text-slate-400">{faq.answer}</p>
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
        <section id="contact" className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30">
                  <Mail className="w-4 h-4 mr-2 inline" />
                  Get In Touch
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Request Information or Make an Offer
                </h2>
                <p className="text-slate-400">
                  Interested in one of our premium domains? Fill in the form and we will contact you as soon as possible.
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
                        Domain Name Choice *
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
                      Submit Request
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
                  Buy Expired Domain Names: Invest in Proven SEO Authority
                </h2>
                
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-amber-400">Buying an expired domain name</strong> is the smartest way to immediately benefit from years of accumulated <strong className="text-white">domain authority</strong> and <strong className="text-white">quality backlinks</strong>. Unlike a new domain name, a premium expired domain already has trust with Google and other search engines. This translates directly into better rankings, faster indexation and more organic traffic.
                  </p>
                  
                  <p>
                    Our carefully selected <strong className="text-amber-400">premium domains</strong> have a proven track record with backlinks from authoritative sources such as Wikipedia, universities, government institutions and reputable news sites. These <strong className="text-white">high-quality backlinks</strong> are the result of years of online presence and are practically impossible to build yourself — unless you're willing to invest thousands of euros in link building.
                  </p>
                  
                  <p>
                    Whether you want to <strong className="text-white">start a webshop</strong>, launch an <strong className="text-white">affiliate website</strong>, or give your existing business an <strong className="text-white">SEO boost</strong>: an expired domain name with high <strong className="text-amber-400">MOZ Domain Authority (DA)</strong> gives you an unmistakable advantage over the competition. While others wait months for Google to trust their new domain, you immediately benefit from existing authority.
                  </p>
                  
                  <p>
                    <strong className="text-white">Why wait?</strong> Every premium domain in our portfolio is checked for spam-free history, relevant backlinks and good link profiles. You buy a strategic asset domain name that immediately adds value to your online presence. From <strong className="text-white">301 redirects</strong> for authority stacking to directly starting a new website: the possibilities are endless.
                  </p>
                  
                  <div className="bg-gradient-to-r from-amber-500/10 to-slate-800/30 border border-amber-500/20 rounded-xl p-6 mt-8">
                    <p className="text-center text-lg mb-0">
                      <strong className="text-amber-400">Ready to accelerate your online success?</strong><br />
                      <span className="text-slate-300">View our portfolio of 110+ premium expired domain names and discover which domain perfectly fits your ambition. Invest in proven authority today and leave your competitors behind.</span>
                    </p>
                  </div>
                </div>
              </article>

              {/* New EU Domain Value Section */}
              <div className="bg-gradient-to-br from-slate-800/80 via-slate-900/90 to-slate-800/80 border border-amber-500/30 rounded-2xl p-8 md:p-10 mt-16 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                  Why Premium European .EU Domain Names Hold Such Value
                </h2>
                
                <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                  <h3 className="text-xl md:text-2xl font-semibold text-amber-400 mb-6">
                    Valuable European .EU Names with a Trusted Past for the European and International Market
                  </h3>
                  
                  <p>
                    Where other extensions are often saturated, <strong className="text-amber-400">.EU</strong> and <strong className="text-white">European domain extensions</strong> offer <strong className="text-amber-400">reliability</strong>, <strong className="text-amber-400">credibility</strong> and a clear <strong className="text-white">geographic identity</strong>. In practice, these European names are often more valuable and trustworthy than many <strong className="text-slate-200">.com</strong>, <strong className="text-slate-200">.net</strong> or <strong className="text-slate-200">.org</strong> names.
                  </p>
                  
                  <p>
                    For both European and <strong className="text-white">international buyers</strong>, an <strong className="text-amber-400">international web name</strong> with online history offers extra credibility. An <strong className="text-white">old web address with reputation</strong>, a <strong className="text-amber-400">multilingual web name</strong> or a <strong className="text-white">web name for Europe</strong> is ideally suited as a web address for the <strong className="text-amber-400">international market</strong> or as a <strong className="text-white">global online name</strong> for businesses and projects that want to position themselves professionally. In many cases, the authority of a <strong className="text-amber-400">.EU name</strong> can also be strategically deployed via a <strong className="text-white">redirect</strong>, while preserving the European appeal and accumulated value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Domain Transfer Instructions */}
        <section id="domain-transfer" className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="border border-amber-500/30 rounded-xl bg-slate-800/50">
                  <div className="px-6 py-4">
                    <h2 className="text-xl font-bold text-white">
                      <div className="flex items-center gap-3">
                        <Globe className="w-6 h-6 text-amber-400" />
                        <span>How do you transfer your domain with the transfer token (EPP/Auth code)?</span>
                      </div>
                    </h2>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="space-y-6 text-slate-300">
                      <p className="text-lg">
                        After your purchase, you will receive a <strong className="text-amber-400">transfer token</strong> (also called EPP code or Auth code) within 24 hours at the email address you provided during payment. With this code you can easily transfer the domain to your own domain registrar or hosting provider.
                      </p>
                      
                      <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                        <h3 className="text-lg font-semibold text-white mb-4">Step-by-step instructions:</h3>
                        <ol className="space-y-4">
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">1</span>
                            <div>
                              <strong className="text-white">Receive the transfer token</strong>
                              <p className="text-slate-400 mt-1">Check your inbox (and spam folder) for the email with the transfer token. You will receive this within 24 hours after payment.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">2</span>
                            <div>
                              <strong className="text-white">Log in to your domain registrar or hosting provider</strong>
                              <p className="text-slate-400 mt-1">Go to the domain management of your provider (e.g. GoDaddy, Namecheap, Google Domains, OVH, etc.).</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">3</span>
                            <div>
                              <strong className="text-white">Start the domain transfer</strong>
                              <p className="text-slate-400 mt-1">Look for the option "Transfer domain", "Domain transfer" or "Import domain". Enter the domain name you want to transfer.</p>
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
                Get In Touch
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

                {/* NordVPN Recommendation Section */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-4 mt-6">
                  <div className="text-center">
                    <h4 className="font-bold text-white text-lg mb-2">🔒 Protect Your Privacy with NordVPN</h4>
                    <p className="text-white/90 text-sm mb-3">
                      What is a VPN? A <a href="https://www.dpbolvw.net/click-100643838-14471514" target="_blank" rel="nofollow noopener noreferrer" className="underline text-yellow-300 hover:text-yellow-200">Virtual Private Network (VPN)</a> encrypts your internet connection and hides your IP address, protecting your personal data from hackers, trackers, and surveillance.
                    </p>
                    <p className="text-white/80 text-xs mb-4">
                      For premium domain owners, protecting your online identity is essential. NordVPN allows you to browse anonymously, access global content, and secure your business transactions.
                    </p>
                    <a 
                      href="https://www.dpbolvw.net/click-100643838-14471514" 
                      target="_blank" 
                      rel="nofollow noopener noreferrer"
                      className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-6 rounded-full transition-colors text-sm"
                    >
                      Get NordVPN Now →
                    </a>
                  </div>
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

        {/* Hidden Internal Links for SEO */}
        <HiddenInternalLinks />

        {/* Legal Footer */}
        <LegalLinksPremiumDomainsEN />

        {/* Footer */}
        <FooterPremiumDomainsEN />
      </div>
    </>
  );
};

export default PremiumDomainsEN;
