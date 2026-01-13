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
import LegalLinksPremiumDomainsPL from "@/components/premium-domains/LegalLinksPremiumDomainsPL";
import FooterPremiumDomainsPL from "@/components/premium-domains/FooterPremiumDomainsPL";
import LanguageSwitcher from "@/components/premium-domains/LanguageSwitcher";
import stripeLogo from "@/assets/stripe-logo.svg";
import { validateContactForm, buildSafeMailtoUrl } from "@/lib/formValidation";

// Premium domain data - identical to NL version
const premiumDomains = [
  // DA 38
  {
    name: "escp-eap.eu",
    description: "Domena premium szkoły biznesu z backlinkami z Wikipedii, Cornell, Spiegel i Le Monde.",
    mozScore: 38,
    pageAuthority: 28,
    linkingDomains: 292,
    inboundLinks: "4.6K+",
    followedLinks: "4.2K+",
    category: "Edukacja",
    price: "€1495",
    backlinks: "4.6K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "lemonde.fr (DA 93)", "cornell.edu (DA 92)", "spiegel.de (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/6oUeVdepVg18dXf9OO9Zm04"
  },
  // DA 37
  {
    name: "grandparkhotel.at",
    description: "Austriacka domena hotelowa premium z backlinkami z The Guardian, Telegraph, Daily Mail, Irish Times i Der Standard.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 198,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Hotelarstwo",
    price: "€1750",
    backlinks: "1.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dailymail.co.uk (DA 94)", "irishtimes.com (DA 91)", "derstandard.at (DA 82)"],
    stripePaymentLink: "https://buy.stripe.com/8x2dR9epV9CK5qJaSS9Zm0i"
  },
  {
    name: "icesculpture.be",
    description: "Belgijska domena sztuki/wydarzeń z backlinkami z Europa.eu, The Guardian, Telegraph, DW i Boston.com.",
    mozScore: 37,
    pageAuthority: 33,
    linkingDomains: 349,
    inboundLinks: "1.9K+",
    followedLinks: "1.5K+",
    category: "Sztuka",
    price: "€950",
    backlinks: "1.9K+",
    topBacklinks: ["europa.eu (DA 97)", "theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dw.com (DA 93)", "boston.com (DA 92)"],
    stripePaymentLink: "https://buy.stripe.com/fZu4gzdlRaGOg5n3qq9Zm0h"
  },
  {
    name: "tabby.eu",
    description: "Krótka i zapamiętywalna domena EU z backlinkami z YouTube, Le Monde, MDPI, Corriere i Wired Italia.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 166,
    inboundLinks: "3K+",
    followedLinks: "2.9K+",
    category: "Ogólne",
    price: "€1950",
    stripePaymentLink: "https://buy.stripe.com/bJe7sL2HdcOWbP7bWW9Zm0g",
    backlinks: "3K+",
    topBacklinks: ["youtube.com (DA 100)", "lemonde.fr (DA 93)", "mdpi.com (DA 92)", "corriere.it (DA 92)", "wired.it (DA 90)"]
  },
  // DA 36
  {
    name: "antigonetickets.be",
    description: "Belgijska domena biletowa z backlinkami z Nieuwsblad, De Standaard i GVA.",
    mozScore: 36,
    pageAuthority: 23,
    linkingDomains: 120,
    inboundLinks: "6.6K+",
    followedLinks: "6.6K+",
    category: "Rozrywka",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "6.6K+",
    topBacklinks: ["standaard.be (DA 81)", "nieuwsblad.be (DA 79)", "gva.be (DA 73)"]
  },
  {
    name: "beauxartsliege.be",
    description: "Domena sztuki z backlinkami z Wikipedii, CNN, Behance i RTBF.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 231,
    inboundLinks: "1.1K+",
    followedLinks: "831+",
    category: "Sztuka/Kultura",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "1.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnn.com (DA 94)", "behance.net (DA 92)", "rtbf.be (DA 82)"]
  },
  {
    name: "paulsmithmusic.eu",
    description: "Domena muzyczna z backlinkami z BBC, The Guardian, NME i Pitchfork.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 302,
    inboundLinks: "719+",
    followedLinks: "663+",
    category: "Muzyka",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "719+",
    topBacklinks: ["bbc.co.uk (DA 95)", "theguardian.com (DA 95)", "pitchfork.com (DA 88)", "nme.com (DA 86)"]
  },
  {
    name: "eu-asiacentre.eu",
    description: "Domena UE-Azja z backlinkami z Wikipedii, NBC News, Cambridge i Reddit.",
    mozScore: 36,
    pageAuthority: 33,
    linkingDomains: 277,
    inboundLinks: "898+",
    followedLinks: "785+",
    category: "Międzynarodowe",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "898+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "reddit.com (DA 97)", "nbcnews.com (DA 93)", "cam.ac.uk (DA 93)"]
  },
  // DA 35
  {
    name: "toulousespaceshow.eu",
    description: "Domena premium kosmiczna z backlinkami z Europa.eu, NASA.gov, IEEE.org i Wikipedii.",
    mozScore: 35,
    pageAuthority: 31,
    linkingDomains: 397,
    inboundLinks: "3.4K+",
    followedLinks: "1.8K+",
    category: "Technologia",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "nasa.gov (DA 95)", "europa.eu (DA 94)", "ieee.org (DA 93)"]
  },
  {
    name: "martonecycling.eu",
    description: "Domena rowerowa z backlinkami z Globo, Harper's Bazaar, Vogue i Grazia.",
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
    description: "Niemiecka domena wiadomości/religii z backlinkami z Wikipedii (EN, DE, ZH, NL), Spiegel i La Croix.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 281,
    inboundLinks: "3.3K+",
    followedLinks: "1.8K+",
    category: "Wiadomości",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.3K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "de.wikipedia.org (DA 94)", "fandom.com (DA 94)", "spiegel.de (DA 93)", "la-croix.com (DA 88)"]
  },
  // DA 33
  {
    name: "etongmbh.de",
    description: "Niemiecka domena firmowa z mocnym autorytetem biznesowym i backlinkami z Naver, Yumpu, Heise, Computerbase i Motor-Talk.",
    mozScore: 33,
    pageAuthority: 27,
    linkingDomains: 321,
    inboundLinks: "3.9K+",
    followedLinks: "1.6K+",
    category: "Biznes",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "3.9K+",
    topBacklinks: ["naver.com (DA 93)", "yumpu.com (DA 91)", "heise.de (DA 91)", "computerbase.de (DA 84)", "motor-talk.de (DA 73)"]
  },
  {
    name: "europe-en-midipyrenees.eu",
    description: "Francuska/europejska domena regionalna z backlinkami z Scoop.it, France Info, La Tribune i francuskiego rządu.",
    mozScore: 33,
    pageAuthority: 24,
    linkingDomains: 167,
    inboundLinks: "690.3K+",
    followedLinks: "689.6K+",
    category: "Turystyka",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "690.3K+",
    topBacklinks: ["scoop.it (DA 92)", "franceinfo.fr (DA 91)", "latribune.fr (DA 86)", "culture.gouv.fr (DA 76)", "agriculture.gouv.fr (DA 72)"]
  },
  {
    name: "fffb.be",
    description: "Krótka i mocna belgijska domena z backlinkami z Wikipedii, Variety, RTBF i Courrier International.",
    mozScore: 33,
    pageAuthority: 33,
    linkingDomains: 228,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Ogólne",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "1.7K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "variety.com (DA 93)", "constantcontact.com (DA 90)", "rtbf.be (DA 89)", "courrierinternational.com (DA 80)"]
  },
  // DA 32
  {
    name: "improve-research.eu",
    description: "Domena badawcza z backlinkami z Europa.eu, Cambridge, Springer i LSE.",
    mozScore: 32,
    pageAuthority: 30,
    linkingDomains: 106,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "Badania",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.7K+",
    topBacklinks: ["europa.eu (DA 94)", "cam.ac.uk (DA 93)", "springer.com (DA 92)", "lse.ac.uk (DA 90)"]
  },
  {
    name: "co-da.eu",
    description: "Krótka i mocna domena EU z backlinkami z Globo, HuffPost, CBS News, Gizmodo i Fast Company.",
    mozScore: 32,
    pageAuthority: 22,
    linkingDomains: 96,
    inboundLinks: "276+",
    followedLinks: "260+",
    category: "Współpraca",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "276+",
    topBacklinks: ["globo.com (DA 95)", "huffpost.com (DA 94)", "cbsnews.com (DA 93)", "gizmodo.com (DA 93)", "fastcompany.com (DA 92)"]
  },
  {
    name: "emg-nice2015.fr",
    description: "Francuska domena z backlinkami z Wikipedii, GoFundMe, Nice Matin i Triathlon.org.",
    mozScore: 32,
    pageAuthority: 31,
    linkingDomains: 191,
    inboundLinks: "3.1K+",
    followedLinks: "3K+",
    category: "Międzynarodowe",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "3.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "gofundme.com (DA 93)", "mundodeportivo.com (DA 92)", "nicematin.com (DA 73)", "triathlon.org (DA 68)"]
  },
  {
    name: "euromedialiteracy.eu",
    description: "Edukacyjna domena EU z backlinkami z Wikipedii, Penn State, Wisconsin i Rady Europy.",
    mozScore: 32,
    pageAuthority: 38,
    linkingDomains: 372,
    inboundLinks: "2.5K+",
    followedLinks: "2.3K+",
    category: "Edukacja",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.5K+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "psu.edu (DA 92)", "scoop.it (DA 92)", "wisc.edu (DA 91)", "coe.int (DA 89)"]
  },
  {
    name: "citiexpress.eu",
    description: "Domena transportowa i logistyczna EU z backlinkami z TripAdvisor, SkyscraperCity i Rick Steves.",
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
    description: "Europejska domena projektowa z backlinkami z Wikipedii, Cambridge, UNESCO i Reddit.",
    mozScore: 31,
    pageAuthority: 27,
    linkingDomains: 162,
    inboundLinks: "379+",
    followedLinks: "266+",
    category: "Projekty",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "379+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cambridge.org (DA 93)", "unesco.org (DA 93)", "reddit.com (DA 92)", "mdpi.com (DA 92)"]
  },
  {
    name: "ramcip-project.eu",
    description: "Europejska domena projektu badawczego z backlinkami z Europa.eu, GitHub, NY Times i Springer.",
    mozScore: 31,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "333+",
    followedLinks: "293+",
    category: "Badania",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "333+",
    topBacklinks: ["europa.eu (DA 97)", "github.com (DA 96)", "nytimes.com (DA 95)", "elpais.com (DA 94)", "springer.com (DA 93)"]
  },
  {
    name: "evader-project.eu",
    description: "Domena projektu EU z backlinkami z Europa.eu, Spiegel, Europa Press i Heise.",
    mozScore: 31,
    pageAuthority: 30,
    linkingDomains: 91,
    inboundLinks: "128+",
    followedLinks: "109+",
    category: "Projekty",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "128+",
    topBacklinks: ["europa.eu (DA 97)", "spiegel.de (DA 93)", "europapress.es (DA 91)", "heise.de (DA 91)", "autoblog.com (DA 90)"]
  },
  {
    name: "toastit-live.be",
    description: "Belgijska domena rozrywkowa/medialna z backlinkami z Wikipedii, KU Leuven, Nieuwsblad i Yle.",
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
    description: "Holenderska domena sieciowa z backlinkami z Microsoft, NOS, Neowin, Tweakers i XS4All.",
    mozScore: 31,
    pageAuthority: 25,
    linkingDomains: 152,
    inboundLinks: "1.7K+",
    followedLinks: "1.6K+",
    category: "Sieć",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "1.7K+",
    topBacklinks: ["microsoft.com (DA 99)", "nos.nl (DA 90)", "neowin.net (DA 88)", "techpowerup.com (DA 83)", "tweakers.net (DA 79)"]
  },
  {
    name: "leading-the-digital-decade.eu",
    description: "Domena cyfrowej transformacji EU z backlinkami z Europa.eu, Politico EU i LSE.",
    mozScore: 31,
    pageAuthority: 30,
    linkingDomains: 80,
    inboundLinks: "189+",
    followedLinks: "174+",
    category: "Cyfrowe",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "189+",
    topBacklinks: ["europa.eu (DA 97)", "politico.eu (DA 91)", "lse.ac.uk (DA 89)", "fapesp.br (DA 72)", "eureporter.co (DA 68)"]
  },
  {
    name: "landstewardship.eu",
    description: "Domena EU dotycząca zarządzania ziemią/zrównoważonego rozwoju z backlinkami z Europa.eu, ABC.es, Gencat.cat i hiszpańskich uniwersytetów.",
    mozScore: 31,
    pageAuthority: 33,
    linkingDomains: 200,
    inboundLinks: "7.5K+",
    followedLinks: "7.4K+",
    category: "Zrównoważony rozwój",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "7.5K+",
    topBacklinks: ["europa.eu (DA 97)", "abc.es (DA 93)", "gencat.cat (DA 89)", "ask.com (DA 88)", "ecoticias.com (DA 74)"]
  },
  // DA 30
  {
    name: "ilovecosmetics.eu",
    description: "Domena beauty i kosmetyczna z backlinkami z Alza, Glamour Magazine i CB Insights.",
    mozScore: 30,
    pageAuthority: 36,
    linkingDomains: 472,
    inboundLinks: "1.6K+",
    followedLinks: "1.3K+",
    category: "Uroda",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "1.6K+",
    topBacklinks: ["alza.cz (DA 92)", "glamourmagazine.co.uk (DA 82)", "polyvore.com (DA 79)", "fave.co (DA 78)", "cbinsights.com (DA 77)"]
  },
  {
    name: "rtmpilecki.eu",
    description: "Historyczna/kulturalna domena EU z backlinkami z Wikipedii (ES, ID, ZH), polskiego rządu i Thread Reader.",
    mozScore: 30,
    pageAuthority: 27,
    linkingDomains: 96,
    inboundLinks: "199+",
    followedLinks: "95+",
    category: "Kultura",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "199+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "gov.pl (DA 91)", "threadreaderapp.com (DA 78)", "gloria.tv (DA 69)", "dbpedia.org (DA 65)"]
  },
  {
    name: "friendsofthesupergrid.eu",
    description: "Domena energetyczna i infrastrukturalna EU z backlinkami z Wikipedii, CNET, IEEE i The Conversation.",
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
    description: "Domena HVAC i technologii klimatyzacyjnej EU z backlinkami z Ow.ly, EurActiv i Danfoss.",
    mozScore: 30,
    pageAuthority: 23,
    linkingDomains: 80,
    inboundLinks: "375+",
    followedLinks: "357+",
    category: "Technologia",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "375+",
    topBacklinks: ["ow.ly (DA 90)", "euractiv.com (DA 84)", "campaign-archive.com (DA 84)", "danfoss.com (DA 69)", "coleurope.eu (DA 57)"]
  },
  {
    name: "partymenu.eu",
    description: "Domena cateringowa/eventowa EU z backlinkami z Google.sk, Wikiwand, RA.co i Pravda.sk.",
    mozScore: 30,
    pageAuthority: 35,
    linkingDomains: 328,
    inboundLinks: "2.2K+",
    followedLinks: "2.1K+",
    category: "Gastronomia",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "2.2K+",
    topBacklinks: ["google.sk (DA 85)", "wikiwand.com (DA 85)", "ra.co (DA 85)", "pravda.sk (DA 79)", "dennikn.sk (DA 76)"]
  },
  // DA 29
  {
    name: "evacuate.eu",
    description: "Domena bezpieczeństwa i planowania awaryjnego EU z backlinkami z Europa.eu, El País, Springer i KU Leuven.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 99,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Bezpieczeństwo",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.7K+",
    topBacklinks: ["europa.eu (DA 97)", "elpais.com (DA 94)", "springer.com (DA 93)", "mdpi.com (DA 92)", "xataka.com (DA 90)"]
  },
  {
    name: "greenweek2010.eu",
    description: "Domena zrównoważonego rozwoju z backlinkami z Europa.eu, EurekAlert, RAI i AAAS.",
    mozScore: 29,
    pageAuthority: 28,
    linkingDomains: 109,
    inboundLinks: "259+",
    followedLinks: "249+",
    category: "Zrównoważony rozwój",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "259+",
    topBacklinks: ["europa.eu (DA 97)", "eurekalert.org (DA 91)", "rai.it (DA 81)", "au.dk (DA 77)", "aaas.org (DA 76)"]
  },
  {
    name: "bryn-somersethouse.co.uk",
    description: "Brytyjska domena nieruchomości/hotelarstwa z backlinkami z Forbes, The Guardian, Evening Standard i Time Out.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 96,
    inboundLinks: "167+",
    followedLinks: "132+",
    category: "Nieruchomości",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "167+",
    topBacklinks: ["forbes.com (DA 94)", "theguardian.com (DA 94)", "standard.co.uk (DA 93)", "timeout.com (DA 92)", "thetimes.com (DA 92)"]
  },
  {
    name: "euforistudy.eu",
    description: "Edukacyjna domena studiów EU z backlinkami z The Guardian, Trinity College Dublin i VU Amsterdam.",
    mozScore: 29,
    pageAuthority: 27,
    linkingDomains: 72,
    inboundLinks: "215+",
    followedLinks: "170+",
    category: "Edukacja",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "215+",
    topBacklinks: ["theguardian.com (DA 94)", "ask.com (DA 88)", "tcd.ie (DA 86)", "vu.nl (DA 76)", "muni.cz (DA 74)"]
  },
  {
    name: "beatassist.eu",
    description: "Domena produkcji muzycznej z backlinkami z Google Sites, Scoop.it, Envato i MusicRadar.",
    mozScore: 29,
    pageAuthority: 29,
    linkingDomains: 164,
    inboundLinks: "1.5K+",
    followedLinks: "1.2K+",
    category: "Muzyka/Audio",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.5K+",
    topBacklinks: ["sites.google.com (DA 96)", "scoop.it (DA 92)", "envato.com (DA 91)", "informer.com (DA 90)", "codecanyon.net (DA 83)"]
  },
  {
    name: "energaware.eu",
    description: "Domena projektu świadomości energetycznej EU z backlinkami z Europa.eu, UOL, El País i Le Figaro.",
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
    description: "Domena telekomunikacyjna/medialna z backlinkami z Medium, IBM, Telefónica i uniwersytetów.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 69,
    inboundLinks: "338+",
    followedLinks: "265+",
    category: "Technologia",
    price: "€675",
    stripePaymentLink: "https://buy.stripe.com/cNi00jdlR9CK5qJf989Zm0k",
    backlinks: "338+",
    topBacklinks: ["medium.com (DA 95)", "ibm.com (DA 93)", "telefonica.com (DA 79)", "upv.es (DA 79)", "upm.es (DA 78)"]
  },
  {
    name: "finnovaregio.eu",
    description: "Domena innowacji finansowych w regionie EU z backlinkami z Crunchbase, Splashthat i Climate-KIC.",
    mozScore: 29,
    pageAuthority: 20,
    linkingDomains: 41,
    inboundLinks: "156+",
    followedLinks: "143+",
    category: "Finanse",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "156+",
    topBacklinks: ["goo.gl (DA 95)", "crunchbase.com (DA 91)", "splashthat.com (DA 86)", "emprendedores.es (DA 66)", "climate-kic.org (DA 64)"]
  },
  {
    name: "worth-project.eu",
    description: "Domena projektu designu i innowacji z backlinkami z Europa.eu, Euronews, AngelList i UAL Arts.",
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
    description: "Domena mobilności/parkowania EU z backlinkami z Europa.eu, Medium, Zeit.de i Thread Reader.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 107,
    inboundLinks: "320+",
    followedLinks: "292+",
    category: "Mobilność",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "320+",
    topBacklinks: ["europa.eu (DA 97)", "medium.com (DA 95)", "zeit.de (DA 91)", "threadreaderapp.com (DA 78)", "eur.nl (DA 68)"]
  },
  // DA 28
  {
    name: "bovisadrivein.it",
    description: "Włoska domena rozrywkowa z backlinkami z Behance, Giphy, Corriere i MyMovies.",
    mozScore: 28,
    pageAuthority: 22,
    linkingDomains: 52,
    inboundLinks: "78+",
    followedLinks: "60+",
    category: "Rozrywka",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "78+",
    topBacklinks: ["behance.net (DA 93)", "giphy.com (DA 92)", "corriere.it (DA 92)", "ilgiornale.it (DA 85)", "elledecor.com (DA 81)"]
  },
  {
    name: "resurbis.eu",
    description: "Domena EU dotycząca zrównoważonego rozwoju z backlinkami z Europa.eu, MDPI, EurekAlert i Wired.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 87,
    inboundLinks: "185+",
    followedLinks: "153+",
    category: "Zrównoważony rozwój",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "185+",
    topBacklinks: ["europa.eu (DA 97)", "mdpi.com (DA 92)", "eurekalert.org (DA 91)", "wired.it (DA 90)", "ub.edu (DA 86)"]
  },
  {
    name: "eu-sabana.eu",
    description: "Domena projektu zrównoważonego rolnictwa EU z backlinkami z Europa.eu, The Conversation i Frontiers.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 69,
    inboundLinks: "413+",
    followedLinks: "397+",
    category: "Rolnictwo",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "413+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "frontiersin.org (DA 92)", "diarioinformacion.com (DA 82)", "informacion.es (DA 78)"]
  },
  {
    name: "ellinikiglossa.eu",
    description: "Domena języka/kultury greckiej z mocnymi backlinkami z Wikipedii, UCI.edu i uniwersytetów.",
    mozScore: 28,
    pageAuthority: 31,
    linkingDomains: 164,
    inboundLinks: "4.1K+",
    followedLinks: "4K+",
    category: "Język/Kultura",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "4.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "uci.edu (DA 91)"]
  },
  {
    name: "bringaexpo.eu",
    description: "Węgierska domena rowerowa/targowa z mocnymi backlinkami z Origo.hu, Velvet.hu, Network.hu i innych węgierskich mediów.",
    mozScore: 27,
    pageAuthority: 25,
    linkingDomains: 79,
    inboundLinks: "551+",
    followedLinks: "513+",
    category: "Sport/Wydarzenia",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "551+",
    topBacklinks: ["origo.hu (DA 72)", "velvet.hu (DA 60)", "network.hu (DA 57)", "femcafe.hu (DA 56)", "hwsw.hu (DA 56)"]
  },
  {
    name: "movecare-project.eu",
    description: "Domena projektu opieki i mobilności EU z backlinkami z Springer, MDPI, Il Fatto Quotidiano i włoskich uniwersytetów.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "117+",
    followedLinks: "97+",
    category: "Opieka zdrowotna",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "117+",
    topBacklinks: ["springer.com (DA 93)", "mdpi.com (DA 92)", "ilfattoquotidiano.it (DA 90)", "unimi.it (DA 72)", "polimi.it (DA 71)"]
  },
  {
    name: "davidhughesillustration.co.uk",
    description: "Kreatywna domena UK z backlinkami z The Guardian, Creative Bloq, ORF.at i Publishers Weekly.",
    mozScore: 28,
    pageAuthority: 27,
    linkingDomains: 157,
    inboundLinks: "3.9K+",
    followedLinks: "3.9K+",
    category: "Sztuka/Design",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "3.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "creativebloq.com (DA 86)", "orf.at (DA 86)", "librarything.com (DA 80)", "publishersweekly.com (DA 77)"]
  },
  {
    name: "centremlm.be",
    description: "Belgijska domena centrum z backlinkami z Wikipedii (FR, IT, NL), Le Figaro i Wiktionary.",
    mozScore: 28,
    pageAuthority: 28,
    linkingDomains: 182,
    inboundLinks: "9.6K+",
    followedLinks: "9.3K+",
    category: "Ogólne",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "9.6K+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "it.wikipedia.org (DA 93)", "wiktionary.org (DA 93)", "lefigaro.fr (DA 93)", "nl.wikipedia.org (DA 91)"]
  },
  {
    name: "epc2018.be",
    description: "Belgijska domena eventowa z backlinkami z TinyURL, UB.edu, Lund University i Confex.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 57,
    inboundLinks: "136+",
    followedLinks: "121+",
    category: "Wydarzenia",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "136+",
    topBacklinks: ["tinyurl.com (DA 94)", "ub.edu (DA 86)", "lu.se (DA 79)", "confex.com (DA 73)", "sdu.dk (DA 71)"]
  },
  {
    name: "youthstartproject.eu",
    description: "Domena projektu edukacyjnego/młodzieżowego z backlinkami z Europa.eu, Campaign Archive, Observador i OpenEdition.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 64,
    inboundLinks: "2.9K+",
    followedLinks: "2.8K+",
    category: "Edukacja",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "2.9K+",
    topBacklinks: ["europa.eu (DA 97)", "campaign-archive.com (DA 84)", "observador.pt (DA 84)", "openedition.org (DA 78)", "wort.lu (DA 75)"]
  },
  // DA 27
  {
    name: "spanvis.nl",
    description: "Holenderska domena z backlinkami z Wikipedii (EN, RU, NL), Wikiwand i XS4All.",
    mozScore: 27,
    pageAuthority: 29,
    linkingDomains: 241,
    inboundLinks: "2.1K+",
    followedLinks: "1.9K+",
    category: "Ogólne",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "ru.wikipedia.org (DA 94)", "nl.wikipedia.org (DA 91)", "wikiwand.com (DA 85)", "xs4all.nl (DA 79)"]
  },
  {
    name: "seatglobal.eu",
    description: "Międzynarodowa domena mobilności/transportu z backlinkami z Europa.eu, Springer, PLOS i Phys.org.",
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
    description: "Domena cyfrowego archiwum projektu EU z backlinkami z Wikipedii, Europa.eu, W3.org, SlideShare i Oxford.",
    mozScore: 27,
    pageAuthority: 33,
    linkingDomains: 691,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "Cyfrowe",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.7K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "w3.org (DA 95)", "slideshare.net (DA 94)", "ox.ac.uk (DA 92)"]
  },
  {
    name: "lt-pl-ru.eu",
    description: "Domena współpracy regionu bałtyckiego EU z backlinkami z Europa.eu, Wikipedii DE, Ask.com i Rzeczpospolita.",
    mozScore: 27,
    pageAuthority: 31,
    linkingDomains: 155,
    inboundLinks: "44.2K+",
    followedLinks: "37.2K+",
    category: "Międzynarodowe",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "44.2K+",
    topBacklinks: ["europa.eu (DA 97)", "de.wikipedia.org (DA 94)", "ask.com (DA 88)", "rp.pl (DA 82)", "worldwidetopsite.com (DA 71)"]
  },
  {
    name: "transitionproject.eu",
    description: "Domena projektu transformacji i zmian EU z backlinkami z Europa.eu, Eventbrite, Storify i Sheffield University.",
    mozScore: 27,
    pageAuthority: 28,
    linkingDomains: 75,
    inboundLinks: "207+",
    followedLinks: "179+",
    category: "Projekty",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "207+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "eventbrite.com (DA 93)", "storify.com (DA 90)", "shef.ac.uk (DA 79)"]
  },
  {
    name: "expo-2050.be",
    description: "Belgijska domena expo/wystawowa z backlinkami z The Conversation, Radio France, RTBF i La Libre.",
    mozScore: 27,
    pageAuthority: 27,
    linkingDomains: 96,
    inboundLinks: "210+",
    followedLinks: "182+",
    category: "Wydarzenia",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "210+",
    topBacklinks: ["theconversation.com (DA 92)", "radiofrance.fr (DA 92)", "theculturetrip.com (DA 89)", "rtbf.be (DA 89)", "lalibre.be (DA 84)"]
  },
  {
    name: "iceel.eu",
    description: "Domena EU z backlinkami z Europa.eu, France Info, CNRS i francuskich uniwersytetów.",
    mozScore: 27,
    pageAuthority: 30,
    linkingDomains: 130,
    inboundLinks: "3.6K+",
    followedLinks: "3.5K+",
    category: "Ogólne",
    price: "€450",
    stripePaymentLink: "https://buy.stripe.com/fZu14n6Xt7uCf1j9OO9Zm0j",
    backlinks: "3.6K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "cnrs.fr (DA 90)", "psl.eu (DA 78)", "education.fr (DA 77)"]
  },
  {
    name: "eustartupvillageforum.eu",
    description: "Domena forum startupów i innowacji EU z backlinkami z Europa.eu, Pages.dev, Campaign Archive i Silicon Republic.",
    mozScore: 27,
    pageAuthority: 28,
    linkingDomains: 85,
    inboundLinks: "219+",
    followedLinks: "185+",
    category: "Startupy",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "219+",
    topBacklinks: ["europa.eu (DA 97)", "pages.dev (DA 91)", "campaign-archive.com (DA 84)", "siliconrepublic.com (DA 83)", "wko.at (DA 74)"]
  },
  {
    name: "life-envoll.eu",
    description: "Domena projektu środowiskowego i przyrodniczego EU z backlinkami z Europa.eu, FranceInfo, Campaign Archive i Midi Libre.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 54,
    inboundLinks: "67.8K+",
    followedLinks: "67.8K+",
    category: "Środowisko",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "67.8K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "campaign-archive.com (DA 84)", "midilibre.fr (DA 81)", "developpement-durable.gouv.fr (DA 74)"]
  },
  // DA 26
  {
    name: "covenant-capacity.eu",
    description: "Domena budowania potencjału EU z backlinkami z Europa.eu, BT, MyNewsDesk i WWF Panda.",
    mozScore: 26,
    pageAuthority: 24,
    linkingDomains: 85,
    inboundLinks: "2.6K+",
    followedLinks: "2.5K+",
    category: "Współpraca",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.6K+",
    topBacklinks: ["europa.eu (DA 97)", "bt.com (DA 92)", "mynewsdesk.com (DA 86)", "wwf.panda.org (DA 80)", "eumayors.eu (DA 51)"]
  },
  {
    name: "deparisnet.be",
    description: "Belgijska domena sieciowa z backlinkami z Europa.eu, Wikipedii (ES, FR), Yumpu i Google.be.",
    mozScore: 26,
    pageAuthority: 28,
    linkingDomains: 135,
    inboundLinks: "710+",
    followedLinks: "445+",
    category: "Sieć",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "710+",
    topBacklinks: ["europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "jimdofree.com (DA 95)", "yumpu.com (DA 91)"]
  },
  // DA 25
  {
    name: "gastrosafezone.eu",
    description: "Domena designu i bezpieczeństwa gastronomicznego z backlinkami z CNN, The Conversation, Pagina12 i Elle Decor.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 47,
    inboundLinks: "66+",
    followedLinks: "58+",
    category: "Design/Gastronomia",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "66+",
    topBacklinks: ["cnn.com (DA 94)", "theconversation.com (DA 92)", "realty.rbc.ru (DA 88)", "pagina12.com.ar (DA 82)", "elledecor.com (DA 80)"]
  },
  {
    name: "hotelgiotto.eu",
    description: "Domena hotelarska z backlinkami z Pages.dev, Wikitravel, Groupon UK i Travellerspoint.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 78,
    inboundLinks: "284+",
    followedLinks: "198+",
    category: "Hotelarstwo",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "284+",
    topBacklinks: ["pages.dev (DA 91)", "wikitravel.org (DA 79)", "groupon.co.uk (DA 76)", "groupon.fr (DA 63)", "travellerspoint.com (DA 60)"]
  },
  {
    name: "recharge-green.eu",
    description: "Domena zielonej energii i ładowania EU z backlinkami z Google Groups, MDPI, BioMedCentral i FAO.",
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
    description: "Domena projektu EU z backlinkami z Europa.eu, El Diario, Stuttgarter Zeitung i uniwersytetów.",
    mozScore: 24,
    pageAuthority: 24,
    linkingDomains: 73,
    inboundLinks: "194+",
    followedLinks: "133+",
    category: "Projekty",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "194+",
    topBacklinks: ["europa.eu (DA 97)", "eldiario.es (DA 91)", "stuttgarter-zeitung.de (DA 81)", "techxplore.com (DA 79)", "uah.es (DA 70)"]
  },
  {
    name: "aaliance.eu",
    description: "Domena opieki zdrowotnej/starczej EU z backlinkami z Europa.eu, Cambridge, Springer, Heise i EurActiv.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 69,
    inboundLinks: "227+",
    followedLinks: "163+",
    category: "Opieka zdrowotna",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "227+",
    topBacklinks: ["europa.eu (DA 97)", "cambridge.org (DA 93)", "springer.com (DA 93)", "heise.de (DA 91)", "euractiv.com (DA 84)"]
  },
  {
    name: "unamec.be",
    description: "Belgijska domena medyczna/opiekuńcza z backlinkami z OUP, Yumpu, KU Leuven i UGent.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 93,
    inboundLinks: "188+",
    followedLinks: "150+",
    category: "Opieka zdrowotna",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "188+",
    topBacklinks: ["oup.com (DA 93)", "yumpu.com (DA 91)", "kuleuven.be (DA 83)", "ugent.be (DA 76)", "justlanded.com (DA 76)"]
  },
  {
    name: "josephines.be",
    description: "Belgijska domena lifestyle/hotelarska z backlinkami z Mixcloud, De Standaard i Elle.be.",
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
    description: "Historyczna domena pamiątkowa I wojny światowej z backlinkami z Wikipedii (FR, DE), StackExchange, FranceInfo i INRIA.",
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
    description: "Domena projektu EU z backlinkami z Apple.com, Bit.ly, RTL.fr i greckiej Wikipedii.",
    mozScore: 25,
    pageAuthority: 30,
    linkingDomains: 491,
    inboundLinks: "2K+",
    followedLinks: "1.9K+",
    category: "Innowacje",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "2K+",
    topBacklinks: ["apple.com (DA 99)", "bit.ly (DA 94)", "home.pl (DA 93)", "cocolog-nifty.com (DA 90)", "rtl.fr (DA 89)"]
  },
  {
    name: "landmark-project.eu",
    description: "Domena projektu EU z backlinkami z Europa.eu, Wikipedii DE, Cambridge i Yumpu.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 161,
    inboundLinks: "1.1K+",
    followedLinks: "954+",
    category: "Projekty",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "1.1K+",
    topBacklinks: ["europa.eu (DA 97)", "goo.gl (DA 95)", "de.wikipedia.org (DA 94)", "cambridge.org (DA 93)", "yumpu.com (DA 91)"]
  },
  {
    name: "tandemtech.be",
    description: "Belgijska domena technologiczna z backlinkami z Medium, TinyURL, Bit.ly, Tweakers i Knack.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 61,
    inboundLinks: "613+",
    followedLinks: "565+",
    category: "Technologia",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "613+",
    topBacklinks: ["medium.com (DA 95)", "tinyurl.com (DA 94)", "bit.ly (DA 94)", "about.me (DA 92)", "pages.dev (DA 91)"]
  },
  {
    name: "happyvpro.nl",
    description: "Holenderska domena medialna z backlinkami z TinyURL, Ello, XS4ALL, Emerce i VPRO.",
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
    description: "Domena EU z backlinkami z Pinterest, ANSA, RUG Groningen i włoskich uniwersytetów.",
    mozScore: 25,
    pageAuthority: 28,
    linkingDomains: 192,
    inboundLinks: "119.7K+",
    followedLinks: "119.6K+",
    category: "Ogólne",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "119.7K+",
    topBacklinks: ["pinterest.com (DA 94)", "ansa.it (DA 91)", "rug.nl (DA 81)", "cnr.it (DA 75)", "unito.it (DA 70)"]
  },
  {
    name: "xcycle-h2020.eu",
    description: "Domena mobilności EU H2020 z backlinkami z Europa.eu, Springer, MDPI i Frontiers.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 145,
    inboundLinks: "275+",
    followedLinks: "202+",
    category: "Mobilność",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "275+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "mdpi.com (DA 92)", "frontiersin.org (DA 92)", "euractiv.com (DA 84)"]
  },
  // DA 24
  {
    name: "heinekenthecity.nl",
    description: "Holenderska domena miejska/lifestyle z backlinkami z Dezeen, Symbaloo, Fodors i VPRO.",
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
  {
    name: "vos-photos.eu",
    description: "Fotograficzna domena EU z backlinkami z E-Monsite, JournalDuNet, CNRS i Wikipedii SV.",
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
    description: "Domena EU z backlinkami z Wikipedii (EN, ES, PT, FR), Europa.eu i MDPI.",
    mozScore: 24,
    pageAuthority: 33,
    linkingDomains: 246,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Ogólne",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "1.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "pt.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)"]
  },
  {
    name: "sialon.eu",
    description: "Domena EU badań zdrowotnych z backlinkami z BBC, Europa.eu i The Conversation.",
    mozScore: 24,
    pageAuthority: 25,
    linkingDomains: 66,
    inboundLinks: "145+",
    followedLinks: "125+",
    category: "Zdrowie",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "145+",
    topBacklinks: ["bbc.co.uk (DA 95)", "europa.eu (DA 97)", "theconversation.com (DA 92)", "bbc.com (DA 94)"]
  },
  // DA 23
  {
    name: "maribe.eu",
    description: "Morska domena EU z backlinkami z Europa.eu, The Conversation, MDPI i Bristol University.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 90,
    inboundLinks: "146+",
    followedLinks: "115+",
    category: "Morskie",
    price: "€125",
    backlinks: "146+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "mdpi.com (DA 92)", "siliconrepublic.com (DA 83)", "bristol.ac.uk (DA 78)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "200jaarstaten-generaal.nl",
    description: "Holenderska domena rządowa z backlinkami z NOS, Uniwersytetu w Leiden i Tweede Kamer.",
    mozScore: 22,
    pageAuthority: 21,
    linkingDomains: 37,
    inboundLinks: "150+",
    followedLinks: "136+",
    category: "Rząd/Kultura",
    price: "€125",
    backlinks: "150+",
    topBacklinks: ["nos.nl (DA 90)", "universiteitleiden.nl (DA 82)", "transparent.com (DA 76)", "tweedekamer.nl (DA 64)", "rd.nl (DA 62)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eu-thor.eu",
    description: "Domena projektu EU z backlinkami z Wikipedii (EN, FR, DE), Europa.eu, Yumpu i WHOI.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 156,
    inboundLinks: "18.4K+",
    followedLinks: "18.3K+",
    category: "Projekty",
    price: "€125",
    backlinks: "18.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "yumpu.com (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eccomascfd2006.nl",
    description: "Holenderska domena techniczna z backlinkami z TU Delft, Southampton, Liverpool i NTNU.",
    mozScore: 23,
    pageAuthority: 25,
    linkingDomains: 52,
    inboundLinks: "371+",
    followedLinks: "352+",
    category: "Technologia",
    price: "€125",
    backlinks: "371+",
    topBacklinks: ["tudelft.nl (DA 85)", "soton.ac.uk (DA 85)", "uu.se (DA 83)", "liverpool.ac.uk (DA 83)", "ntnu.no (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "mbelgique.be",
    description: "Belgijska domena narodowa z backlinkami z Wikipedii FR, BFMTV, Heise, NU.nl i Europe1.",
    mozScore: 23,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "113+",
    followedLinks: "87+",
    category: "Ogólne",
    price: "€125",
    backlinks: "113+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "bfmtv.com (DA 92)", "heise.de (DA 91)", "nu.nl (DA 91)", "europe1.fr (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "lifemanev.eu",
    description: "Domena projektu EU dotyczącego zrównoważonego rolnictwa z backlinkami z MDPI, ITACYL i CSIC.",
    mozScore: 23,
    pageAuthority: 24,
    linkingDomains: 40,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "Zrównoważony rozwój",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["mdpi.com (DA 92)", "itacyl.es (DA 45)", "cebas.csic.es (DA 42)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  // DA 22
  {
    name: "bruegel2019.be",
    description: "Domena dziedzictwa kulturowego z backlinkami z Campaign Archive, Knack.be i Brusselslife.",
    mozScore: 22,
    pageAuthority: 24,
    linkingDomains: 42,
    inboundLinks: "323+",
    followedLinks: "312+",
    category: "Sztuka/Dziedzictwo",
    price: "€125",
    backlinks: "323+",
    topBacklinks: ["campaign-archive.com (DA 84)", "knack.be (DA 77)", "tntcode.com (DA 61)", "tvl.be (DA 52)", "brusselslife.be (DA 52)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "infoecmi.eu",
    description: "Domena informacyjna EU z backlinkami z Wikipedii (EN, ES, PT, RU, DE), UCL i ETH Zürich.",
    mozScore: 22,
    pageAuthority: 31,
    linkingDomains: 259,
    inboundLinks: "1.2K+",
    followedLinks: "727+",
    category: "Informacja",
    price: "€125",
    backlinks: "1.2K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "pt.wikipedia.org (DA 96)", "ru.wikipedia.org (DA 94)", "ucl.ac.uk (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "romain-roquette.be",
    description: "Belgijska domena osobista/portfolio z backlinkami z Airbnb, Foursquare, The Culture Trip i Knack.be.",
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
    description: "Niemiecka/EU domena samorządowa z backlinkami z Wikipedii (EN, ES, FR, RU, NL), Bit.ly i Creative Commons.",
    mozScore: 22,
    pageAuthority: 32,
    linkingDomains: 810,
    inboundLinks: "4.9K+",
    followedLinks: "4.7K+",
    category: "Rząd",
    price: "€125",
    backlinks: "4.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "ru.wikipedia.org (DA 94)", "creativecommons.org (DA 94)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "europeanmuseumforum.eu",
    description: "Domena europejskiego forum muzealnego z backlinkami z Wikipedii (EN, ES, FR, RU, NL), Bit.ly i Creative Commons.",
    mozScore: 22,
    pageAuthority: 32,
    linkingDomains: 810,
    inboundLinks: "4.9K+",
    followedLinks: "4.7K+",
    category: "Kultura",
    price: "€125",
    backlinks: "4.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "ru.wikipedia.org (DA 94)", "creativecommons.org (DA 94)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "escmalta2018.eu",
    description: "Domena wydarzenia ESC z backlinkami z ETH Zürich, Azure, Copernicus, CSIC i Monash University.",
    mozScore: 22,
    pageAuthority: 25,
    linkingDomains: 102,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "Wydarzenia",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["ethz.ch (DA 89)", "azure.com (DA 84)", "copernicus.eu (DA 83)", "csic.es (DA 78)", "monash.edu (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eurasiancouncilforeignaffairs.eu",
    description: "Domena stosunków międzynarodowych z backlinkami z Wikipedii (EN, ES, FR, ZH), Cambridge i The Diplomat.",
    mozScore: 23,
    pageAuthority: 23,
    linkingDomains: 65,
    inboundLinks: "184+",
    followedLinks: "98+",
    category: "Międzynarodowe",
    price: "€125",
    backlinks: "184+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "bit.ly (DA 94)", "cam.ac.uk (DA 92)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "waterpipp.eu",
    description: "Domena projektu wodnego EU z backlinkami z Europa.eu, MDPI i EurekAlert.",
    mozScore: 22,
    pageAuthority: 22,
    linkingDomains: 68,
    inboundLinks: "164+",
    followedLinks: "109+",
    category: "Środowisko",
    price: "€125",
    backlinks: "164+",
    topBacklinks: ["europa.eu (DA 97)", "mdpi.com (DA 92)", "eurekalert.org (DA 91)", "unimi.it (DA 72)", "polimi.it (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "artsalivewales.org.uk",
    description: "Walijska domena kultury/sztuki z backlinkami z The Guardian, Mirror, Eventbrite i Wales Online.",
    mozScore: 22,
    pageAuthority: 27,
    linkingDomains: 116,
    inboundLinks: "863+",
    followedLinks: "752+",
    category: "Sztuka",
    price: "€125",
    backlinks: "863+",
    topBacklinks: ["theguardian.com (DA 94)", "mirror.co.uk (DA 94)", "eventbrite.co.uk (DA 91)", "walesonline.co.uk (DA 90)", "constantcontact.com (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  // DA 21
  {
    name: "stationlansingerland-zoetermeer.nl",
    description: "Holenderska domena transportu/stacji z backlinkami z Wikipedii (FR, NL), NS, Nieuws.nl i ProRail.",
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
    description: "Domena badań medycznych EU-FP7 z backlinkami z Europa.eu, Springer, IIT i FGOV.be.",
    mozScore: 21,
    pageAuthority: 24,
    linkingDomains: 60,
    inboundLinks: "130+",
    followedLinks: "109+",
    category: "Badania",
    price: "€79",
    backlinks: "130+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "iit.edu (DA 75)", "fgov.be (DA 72)", "upc.edu (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "ismagazine.nl",
    description: "Holenderska domena magazynu/mediów z backlinkami z UNESCO, WUR i Startpagina.",
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
    description: "Brytyjska domena zakładów/gier z backlinkami z OVH, Joomla.org, WSU i CSIC.",
    mozScore: 21,
    pageAuthority: 41,
    linkingDomains: 468,
    inboundLinks: "280.6K+",
    followedLinks: "198.3K+",
    category: "Gry",
    price: "€79",
    backlinks: "280.6K+",
    topBacklinks: ["ovh.net (DA 92)", "joomla.org (DA 92)", "wsu.edu (DA 87)", "csic.es (DA 78)", "knows.nl (DA 65)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "fantasticgymnastics.nl",
    description: "Holenderska domena sportowa/gimnastyczna z backlinkami z LiveInternet, Pages.dev, XSRV i Toolforge.",
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
    description: "Domena projektu nanotechnologii EU z backlinkami z Springer, Sapo.pt, Pages.dev i uniwersytetów (UPM, UC3M).",
    mozScore: 21,
    pageAuthority: 28,
    linkingDomains: 76,
    inboundLinks: "338+",
    followedLinks: "306+",
    category: "Technologia",
    price: "€79",
    backlinks: "338+",
    topBacklinks: ["springer.com (DA 93)", "sapo.pt (DA 93)", "pages.dev (DA 91)", "upm.es (DA 78)", "uc3m.es (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  // DA 20
  {
    name: "espresso-project.eu",
    description: "Domena projektu smart city i mobilności z backlinkami z Europa.eu, Medium, MDPI i Telecom TV.",
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

const PremiumDomainsPL = () => {
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
      toast({
        title: "Wypełnij wszystkie wymagane pola poprawnie",
        description: Object.values(errorResult.errors)[0] || "Sprawdź dane wejściowe",
        variant: "destructive"
      });
      return;
    }

    const { data } = validation;
    const subject = `Zapytanie o Domenę Premium: ${data.domain}`;
    const body = `Imię i nazwisko: ${data.name}\nE-mail: ${data.email}\nDomena: ${data.domain}\n\nWiadomość:\n${data.message || ""}`;
    
    window.location.href = buildSafeMailtoUrl("support@iaee.eu", subject, body);
    
    toast({
      title: "Zapytanie jest wysyłane",
      description: "Twój program pocztowy zostanie otwarty, aby wysłać zapytanie."
    });
  };

  const handleDomainInquiry = (domainName: string) => {
    setFormData(prev => ({ ...prev, domain: domainName }));
    scrollToSection("contact");
  };

  return (
    <>
      <Helmet>
        <title>Wygasłe domeny premium z backlinkami wysoki autorytet i wartość SEO</title>
        <meta name="description" content="Kup wygasłą domenę z backlinkami? Niezawodne wygasłe domeny z wysokim autorytetem i wartością SEO. Kup domenę premium dla szybszych rankingów Google. Dostępne natychmiast." />
        <meta name="keywords" content="kup wygasłą domenę, wygasłe domeny z backlinkami, domena z autorytetem, niezawodne wygasłe domeny, kup domenę premium, domena z wartością SEO" />
        <link rel="canonical" href="https://iaee.eu/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Language Switcher */}
        <LanguageSwitcher currentLanguage="pl" />
        
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 flex-shrink-0" />
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent truncate">Domeny Premium</span>
            </RouterLink>
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <RouterLink to="/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1"><Home className="h-4 w-4" />Strona główna</RouterLink>
              <button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">Domeny</button>
              <button onClick={() => scrollToSection("why-premium")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">Dlaczego Premium?</button>
              <button onClick={() => scrollToSection("faq")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">FAQ</button>
              <Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold">Kontakt</Button>
            </nav>
            <Button onClick={() => scrollToSection("domains")} className="md:hidden bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-xs px-3 py-2">Domeny</Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 sm:mb-6 bg-amber-500/10 text-amber-400 border-amber-500/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"><Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 inline" />Ekskluzywna Kolekcja Domen Premium</Badge>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2"><span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">Wygasłe domeny premium z backlinkami wysoki autorytet i wartość SEO</span></h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">Wzmocnij swoją obecność online dzięki domenom, które budowały autorytet przez lata.</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button size="lg" onClick={() => scrollToSection("domains")} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-lg shadow-amber-500/25">Zobacz Domeny<ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" /></Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("why-premium")} className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">Więcej Informacji</Button>
              </div>
              <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2">
                {[{ label: "Średni Wynik MOZ", value: "29+" },{ label: "Domeny Premium", value: "110+" },{ label: "Lat Doświadczenia", value: "10+" },{ label: "Zadowolonych Klientów", value: "500+" }].map((stat, index) => (
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
                Dostępne Domeny
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Domeny Premium Na Sprzedaż
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Każda domena jest starannie wybrana na podstawie autorytetu MOZ, profilu backlinków i potencjału SEO. 
                Szukasz <strong className="text-white">wygasłej domeny do kupienia</strong> lub <strong className="text-white">niezawodnych wygasłych domen</strong>? Sprawdź naszą ofertę poniżej.
              </p>
            </div>
            
            {/* SEO Intro Text */}
            <div className="max-w-5xl mx-auto mb-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">Szukasz domeny z prawdziwą wartością SEO?</strong> U nas kupisz niezawodne <strong className="text-amber-400">wygasłe domeny z backlinkami</strong> i wysokim autorytetem, starannie sprawdzone pod kątem jakości i historii. Z wygasłą domeną nie zaczynasz od zera, ale korzystasz bezpośrednio z istniejących linków, zaufania i historii online.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Oprócz wygasłych domen oferujemy również <strong className="text-amber-400">domeny premium</strong>: krótkie, mocne nazwy o wartości marki i potencjale komercyjnym. Niezależnie od tego, czy uruchamiasz stronę internetową, sklep internetowy, czy projekt SEO — <strong className="text-white">domena z autorytetem</strong> daje ci wyraźną przewagę w Google.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                <strong className="text-white">Często wyszukiwane:</strong> kup wygasłą domenę z backlinkami • niezawodne wygasłe domeny • wygasła domena z autorytetem • kup domenę premium • domena z wartością SEO • stara domena z linkami • najlepsze domeny na sprzedaż
              </p>
            </div>

            {/* VAT Notice */}
            <div className="max-w-5xl mx-auto mb-10 text-center">
              <p className="text-sm text-slate-300 font-medium bg-slate-800/40 border border-slate-700/40 rounded-lg px-4 py-3 inline-block">
                <span className="text-amber-400 font-semibold">Informacja o VAT:</span> Ceny nie zawierają VAT dla klientów indywidualnych w UE. Klienci biznesowi w UE mogą zastosować odwrotne obciążenie VAT. Dla klientów spoza UE VAT nie jest naliczany.
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
                          <span>Backlinki: {domain.backlinks}</span>
                        </div>
                      </div>
                      
                      {domain.pageAuthority && (
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Page Authority:</span>
                            <span className="text-white ml-1 font-medium">{domain.pageAuthority}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Linkujące Domeny:</span>
                            <span className="text-white ml-1 font-medium">{domain.linkingDomains}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Linki Przychodzące:</span>
                            <span className="text-white ml-1 font-medium">{domain.inboundLinks}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Linki Followed:</span>
                            <span className="text-white ml-1 font-medium">{domain.followedLinks}</span>
                          </div>
                        </div>
                      )}
                      
                      {domain.topBacklinks && domain.topBacklinks.length > 0 && (
                        <div className="text-[10px] sm:text-xs">
                          <span className="text-slate-500 block mb-1">Top Backlinki:</span>
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
                    
                    <div className="mt-auto space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-slate-700/50">
                      <div className="flex items-center justify-between">
                        <span className="text-lg sm:text-2xl font-bold text-white">{domain.price}</span>
                      </div>
                      
                      {domain.stripePaymentLink && (
                        <div className="space-y-2">
                          <a 
                            href={domain.stripePaymentLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full"
                          >
                            <Button 
                              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold"
                            >
                              <Lock className="w-4 h-4 mr-2" />
                              Kup Teraz
                            </Button>
                          </a>
                          <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
                            <span>Bezpieczna płatność przez</span>
                            <img src={stripeLogo} alt="Stripe" className="h-4 opacity-70" />
                          </div>
                          <div data-nosnippet>
                            <p className="text-[10px] text-slate-400 leading-tight mt-2">
                              Bezpieczna płatność przez Stripe
                              <br />
                              Automatycznie przeliczane na Twoją lokalną walutę
                            </p>
                            <p className="text-[10px] text-slate-400 leading-tight mt-3">
                              Po płatności otrzymasz token transferu (EPP/Auth-code) na swój adres e-mail w ciągu 24 godzin.
                              <br />
                              Sprawdź również folder spam.
                            </p>
                            <a href="#domein-verhuizen" className="text-[10px] text-amber-400 hover:text-amber-300 underline mt-2">
                              Jak działa transfer?
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
                Strategiczna Przewaga
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Dlaczego Domeny Premium?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Domeny premium z wysokim autorytetem MOZ to strategiczna inwestycja, która daje ogromną przewagę w wynikach wyszukiwania.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Szybsze Rankingi w Google",
                  description: "Domeny z istniejącym autorytetem rankują szybciej niż nowe domeny. Google ufa stronom z udokumentowaną historią."
                },
                {
                  icon: Shield,
                  title: "Większe Zaufanie od Google",
                  description: "Domena z wieloletnią historią i jakościowymi backlinkami jest postrzegana przez Google jako bardziej wiarygodna i otrzymuje wyższe rankingi."
                },
                {
                  icon: Target,
                  title: "Wyższy Współczynnik Klikalności (CTR)",
                  description: "Domeny premium budzą zaufanie użytkowników, co prowadzi do wyższych współczynników klikalności w wynikach wyszukiwania i reklamach."
                },
                {
                  icon: Zap,
                  title: "Natychmiastowa Korzyść SEO",
                  description: "Zamiast czekać latami na budowanie autorytetu, korzystasz bezpośrednio z istniejącej wartości SEO domeny."
                },
                {
                  icon: Globe,
                  title: "Bezpośredni Ruch Type-In",
                  description: "Zapamiętywalne domeny premium generują bezpośredni ruch od użytkowników, którzy wpisują domenę bezpośrednio w przeglądarkę."
                },
                {
                  icon: Award,
                  title: "Trwała Inwestycja SEO",
                  description: "Domena premium to aktyw, który zyskuje na wartości wraz ze wzrostem Twojej obecności online i autorytetu."
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
                    Siła MOZ Domain Authority
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    MOZ Domain Authority (DA) to wynik od 1 do 100, który przewiduje, jak dobrze strona będzie rankować w wyszukiwarkach. 
                    Im wyższy wynik, tym większy autorytet zbudowała domena poprzez jakościowe backlinki, wiek i wiarygodność.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="rounded-lg bg-black border border-cyan-500/50 p-4 text-center">
                      <div className="text-xl font-bold text-cyan-400 mb-1">DA 20-25</div>
                      <div className="text-sm font-medium text-white">Dobry Autorytet</div>
                    </div>
                    
                    <div className="rounded-lg bg-black border border-yellow-500/50 p-4 text-center">
                      <div className="text-xl font-bold text-yellow-400 mb-1">DA 25-30</div>
                      <div className="text-sm font-medium text-white">Mocny Autorytet</div>
                    </div>
                    
                    <div className="rounded-lg bg-black border border-green-500/50 p-4 text-center">
                      <div className="text-xl font-bold text-green-400 mb-1">DA 30+</div>
                      <div className="text-sm font-medium text-white">Premium Autorytet</div>
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
                Strategie SEO
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Jak Działają Przekierowania SEO i Budowanie Autorytetu?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Istnieje wiele strategicznych sposobów wykorzystania domen premium dla maksymalnego wpływu SEO.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Strategia Przekierowania 301",
                  description: "Przekierowanie 301 przekazuje całą wartość SEO i autorytet z domeny premium na Twoją główną domenę. To najszybszy sposób na poprawę rankingów.",
                  benefits: [
                    "Bezpośredni transfer link juice",
                    "Zachowanie wszystkich backlinków",
                    "Szybki wzrost autorytetu",
                    "Jednorazowa konfiguracja, trwały efekt"
                  ]
                },
                {
                  title: "Authority Stacking",
                  description: "Zbuduj sieć autorytatywnych domen, które wszystkie linkują do Twojej głównej strony. To tworzy potężny ekosystem odpowiednich, wysokiej jakości backlinków.",
                  benefits: [
                    "Wiele źródeł autorytetu",
                    "Tematyczna zgodność",
                    "Naturalny profil linków",
                    "Długoterminowa strategia SEO"
                  ]
                },
                {
                  title: "Użycie jako Głównej Domeny",
                  description: "Rozpocznij nowy projekt bezpośrednio z domeną, która już ma autorytet. Oszczędza to lata linkbuildingu i budowania wieku domeny.",
                  benefits: [
                    "Natychmiastowy start z autorytetem",
                    "Istniejące zaufanie od Google",
                    "Szybsza indeksacja",
                    "Przewaga nad konkurencją"
                  ]
                },
                {
                  title: "Private Blog Network (PBN)",
                  description: "Wykorzystaj domeny premium do tworzenia wartościowych stron z contentem, które generują potężne backlinki do Twojej głównej strony.",
                  benefits: [
                    "Pełna kontrola nad backlinkami",
                    "Tematyczne strony contentowe",
                    "Różnorodne profile linków",
                    "Skalowalne linkbuilding"
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
                  Dlaczego Te Domeny Są Wyjątkowe
                </h3>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Nasze domeny premium są starannie wybrane i spełniają rygorystyczne wymagania jakościowe.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { icon: Shield, title: "Czysta Historia", desc: "Bez spamu ani historii kar" },
                  { icon: Link, title: "Jakościowe Backlinki", desc: "Z wiarygodnych źródeł" },
                  { icon: BarChart3, title: "Wysoki Wynik DA", desc: "Minimum DA 20+" },
                  { icon: Globe, title: "Odpowiednie Nisze", desc: "Tematycznie pasujące domeny" }
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
                Często Zadawane Pytania
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                FAQ o Domenach Premium i SEO
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Gdzie mogę kupić wygasłą domenę z backlinkami?",
                    answer: "Wygasłą domenę z backlinkami najlepiej kupić u wyspecjalizowanego sprzedawcy, który ręcznie sprawdza domeny pod kątem jakości, historii i autorytetu. Dzięki temu unikniesz zakupu domeny ze spamowymi linkami lub problemami SEO. Oferujemy tylko niezawodne wygasłe domeny, które zostały starannie sprawdzone."
                  },
                  {
                    question: "Co to jest niezawodna wygasła domena z wysokim autorytetem?",
                    answer: "Niezawodna wygasła domena z wysokim autorytetem to domena, która ma jakościowe backlinki, czystą historię strony, bez spamu, hazardu czy historii dla dorosłych, oraz odpowiednie linki z prawdziwego contentu. Ten typ domeny oferuje prawdziwą wartość SEO i daje przewagę w Google."
                  },
                  {
                    question: "Ile wartości SEO ma wygasła domena z linkami?",
                    answer: "Wartość SEO wygasłej domeny z linkami polega głównie na istniejących backlinkach, zbudowanym autorytecie domeny i szybszym zaufaniu od Google. Może to znacznie skrócić czas potrzebny na rankowanie — często miesiące do lat szybciej niż z nową domeną."
                  },
                  {
                    question: "Czy wygasła domena z autorytetem jest lepsza niż linkbuilding?",
                    answer: "W wielu przypadkach tak. Z wygasłą domeną kupujesz istniejące linki i autorytet, podczas gdy linkbuilding jest czasochłonny, kosztowny i ryzykowny. Stara domena z wartością SEO daje ci natychmiastową przewagę bez miesięcy inwestowania w linkbuilding."
                  },
                  {
                    question: "Czy mogę użyć wygasłej domeny dla nowej strony?",
                    answer: "Tak. Możesz doskonale wykorzystać wygasłą domenę z wartością SEO dla nowej strony, pod warunkiem że treść logicznie pasuje do tematu i historii domeny. Backlinki pozostają aktywne i od razu korzystasz ze zbudowanego autorytetu."
                  },
                  {
                    question: "Jaka jest różnica między domeną premium a wygasłą domeną?",
                    answer: "Domena premium jest przede wszystkim wartościowa ze względu na jakość nazwy i wartość marki, podczas gdy wygasła domena z backlinkami wnosi dodatkowy autorytet SEO i historię. Obie mogą być wartościowe, w zależności od celu. Niektóre domeny łączą obie zalety."
                  },
                  {
                    question: "Dlaczego wygasłe domeny z backlinkami są droższe?",
                    answer: "Wygasłe domeny z backlinkami są droższe, ponieważ już mają wartość SEO, oszczędzają czas i koszty oraz umożliwiają szybszy start. Płacisz za zbudowane zaufanie, nie tylko za nazwę. Inwestycja często szybko się zwraca dzięki lepszym rankingom."
                  },
                  {
                    question: "Czy wygasłe domeny z autorytetem są odpowiednie dla sklepów internetowych?",
                    answer: "Tak. Dla sklepów internetowych zaufanie jest kluczowe. Wygasła domena z wysokim autorytetem może przyczynić się do lepszej widoczności, wyższych konwersji i szybszej indeksacji. Daje to sklepowi przewagę nad konkurentami, którzy zaczynają od nowej domeny."
                  },
                  {
                    question: "Czy mogę połączyć domenę premium z korzyściami SEO?",
                    answer: "Tak. Niektóre domeny premium to również wygasłe domeny z mocną historią linków. To łączy wartość marki z autorytetem SEO i jest często najbardziej wartościowe. W naszym portfolio znajdziesz różne domeny oferujące obie zalety."
                  },
                  {
                    question: "Dlaczego coraz więcej przedsiębiorców wybiera wygasłe domeny z wartością SEO?",
                    answer: "Ponieważ przedsiębiorcy szukają szybszych wyników w Google, mniejszej zależności od linkbuildingu i mocnej podstawy dla wzrostu. Niezawodna wygasła domena z backlinkami i autorytetem oferuje dokładnie tę przewagę, która robi różnicę."
                  },
                  {
                    question: "Co to jest Domain Authority (DA) i dlaczego jest ważny?",
                    answer: "Domain Authority to wynik od 1 do 100 opracowany przez MOZ, który przewiduje, jak dobrze strona będzie rankować w wyszukiwarkach. Wyższy DA oznacza większy autorytet i lepsze szanse na wysokie rankingi. Opiera się na czynnikach takich jak liczba i jakość backlinków, wiek domeny i ogólna wiarygodność."
                  },
                  {
                    question: "Jak działa przekierowanie 301 dla SEO?",
                    answer: "Przekierowanie 301 to stałe przekierowanie, które informuje wyszukiwarki, że strona została trwale przeniesiona. Gdy przekierujesz domenę premium 301 na swoją stronę, duża część wartości SEO (link juice) tej domeny jest przekazywana na Twoją stronę. To może znacząco poprawić Twoje rankingi."
                  },
                  {
                    question: "Jak długo trzeba czekać na wyniki?",
                    answer: "Pierwsze efekty zazwyczaj widać w ciągu 2-8 tygodni. Jednak pełny wpływ może rozwijać się przez kilka miesięcy, ponieważ wyszukiwarki ponownie oceniają i indeksują domenę. Zależy to od historii domeny, niszy i Twojej ogólnej strategii SEO."
                  },
                  {
                    question: "Co się stanie, jeśli domena ma złą historię?",
                    answer: "Wszystkie domeny w naszym portfolio są sprawdzone pod kątem negatywnej historii. Sprawdzamy spam, szkodliwe treści i kary od wyszukiwarek. Domeny ze złą historią nie są uwzględnione w naszej ofercie. Możesz być pewien, że kupujesz czystą domenę."
                  },
                  {
                    question: "Jak mogę przenieść domenę do mojego hostingu?",
                    answer: "Po zakupie otrzymasz kod autoryzacyjny (EPP-code) w ciągu 24 godzin na swój adres e-mail. Za pomocą tego kodu możesz rozpocząć transfer u preferowanego rejestratora lub dostawcy hostingu. Większość rejestratorów prowadzi Cię przez ten proces krok po kroku."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="bg-slate-800/30 border border-slate-700/50 rounded-lg px-6 data-[state=open]:border-amber-500/30">
                    <AccordionTrigger className="text-left text-white hover:text-amber-400 hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 pb-4">
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
                    <h3 className="font-semibold">Kompletny Przewodnik: 35 Pytań o Wygasłe Domeny i SEO</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 pb-6 leading-relaxed">
                    <div className="space-y-8 whitespace-pre-line">
                      {[
                        {
                          question: "1. Jaką domenę powinienem kupić jako początkujący?",
                          answer: "Jako początkujący najlepiej wybrać nazwę domeny, która jest łatwa do zapamiętania, jasno wskazuje na to, co robisz i budzi zaufanie. Wielu początkujących szuka \"jaką domenę powinienem kupić\" i automatycznie trafia na nowe domeny, podczas gdy wiarygodna wygasła domena często już zbudowała autorytet i wartość."
                        },
                        {
                          question: "2. Jaka jest różnica między nową domeną a wygasłą domeną?",
                          answer: "Nowa domena nie ma historii i zaczyna całkowicie od zera. Wygasła domena była wcześniej zarejestrowana i może nadal mieć backlinki, autorytet i zaufanie w Google. To sprawia, że wygasła domena jest często bardziej atrakcyjna dla SEO i widoczności."
                        },
                        {
                          question: "3. Czy lepiej kupić nową domenę czy wygasłą domenę?",
                          answer: "Kto szuka \"nowa domena czy wygasła domena\" zazwyczaj porównuje szybkość i wynik. Dla brandingu nowa nazwa może działać, ale dla szybszego znalezienia się w Google, dobra wygasła domena często daje wyraźną przewagę."
                        },
                        {
                          question: "4. Dlaczego moja nowa strona internetowa tak słabo wypada w Google?",
                          answer: "Nowe strony internetowe muszą dopiero zbudować swoją wiarygodność. Bez backlinków i historii trwa to często miesiące. Wygasła domena z dobrymi linkami może sprawić, że nie musisz zaczynać całkowicie od nowa."
                        },
                        {
                          question: "5. Czy bezpiecznie jest kupić wygasłą domenę?",
                          answer: "Tak, pod warunkiem że jest to sprawdzona i wiarygodna wygasła domena. Ryzyko nie polega na \"wygasłej\", ale na domenach, które nie zostały sprawdzone pod kątem spamu, nadużyć lub złych backlinków."
                        },
                        {
                          question: "6. Co oznacza domena z dobrymi backlinkami?",
                          answer: "Domena z dobrymi backlinkami ma odniesienia z prawdziwych, odpowiednich stron internetowych. Te linki zapewniają autorytet i zaufanie w wyszukiwarkach, co jest niezbędne dla wyników SEO."
                        },
                        {
                          question: "7. Dlaczego backlinki są ważne przy kupowaniu domeny?",
                          answer: "Backlinki są jednym z najważniejszych czynników rankingowych Google. Kiedy szukasz \"kup domenę SEO\", w rzeczywistości szukasz domeny, która już zbudowała zaufanie — dokładnie to, co oferuje dobra wygasła domena."
                        },
                        {
                          question: "8. Jak mogę sprawdzić, czy wygasła domena jest wiarygodna?",
                          answer: "Wiarygodna wygasła domena jest sprawdzana pod kątem: historii strony, jakości backlinków, braku spamu, hazardu lub treści dla dorosłych. Jako sprzedawca wybieramy tylko domeny, które spełniają te kryteria."
                        },
                        {
                          question: "9. Czy mogę użyć wygasłej domeny do nowej strony internetowej?",
                          answer: "Tak. Możesz idealnie wykorzystać wygasłą domenę do zupełnie nowego projektu. Treść jest nowa, ale nazwa domeny przynosi już autorytet online."
                        },
                        {
                          question: "10. Czy wygasła domena jest odpowiednia dla początkujących?",
                          answer: "Zdecydowanie. Początkujący często korzystają najbardziej, ponieważ: szybciej uzyskują widoczność, mają mniejsze opóźnienie SEO, robią bardziej profesjonalny start."
                        },
                        {
                          question: "11. Dlaczego niektóre domeny są droższe niż inne?",
                          answer: "Wyszukiwania takie jak \"dlaczego domena jest tak droga\" często wynikają z niezrozumienia wartości. Cena jest określana przez: jakość nazwy, wartość SEO, backlinki, zastosowanie komercyjne."
                        },
                        {
                          question: "12. Czy mogę później odsprzedać wygasłą domenę?",
                          answer: "Tak. Wiele osób szuka \"domena jako inwestycja\". Silna wygasła domena często zachowuje swoją wartość, a nawet może wzrosnąć."
                        },
                        {
                          question: "13. Czy wygasła domena może być zła dla SEO?",
                          answer: "Tylko jeśli ma złą historię. Dlatego różnica jest duża między: niesprawdzonymi wygasłymi domenami a starannie wybranymi, wiarygodnymi nazwami domen."
                        },
                        {
                          question: "14. Na co powinienem zwrócić uwagę przy kupowaniu wygasłej domeny?",
                          answer: "Ważne punkty uwagi to: historia wolna od spamu, odpowiednie backlinki, logiczna nazwa domeny, brak ryzyka naruszenia znaku towarowego."
                        },
                        {
                          question: "15. Jak szybko mogę zacząć po zakupie domeny?",
                          answer: "Po przeniesieniu możesz natychmiast użyć domeny do: strony internetowej, e-maila, sklepu internetowego. Tak jak w przypadku nowej domeny."
                        },
                        {
                          question: "16. Czy potrzebuję wiedzy technicznej, aby używać wygasłej domeny?",
                          answer: "Nie. Wygasła domena działa technicznie tak samo jak nowa domena i może być używana u każdego dostawcy hostingu."
                        },
                        {
                          question: "17. Czy wygasła domena jest odpowiednia dla sklepu internetowego?",
                          answer: "Tak. Sklepy internetowe szczególnie korzystają z: zaufania, autorytetu, lepszego startu w Google. To jest kluczowe dla konwersji."
                        },
                        {
                          question: "18. Co oznacza autorytet domeny przy zakupie domeny?",
                          answer: "Autorytet domeny to wskaźnik tego, jak silna jest domena na podstawie linków i historii. Wiele wygasłych domen ma tu wyższe wyniki niż nowe domeny."
                        },
                        {
                          question: "19. Czy wygasła domena jest lepsza niż link building?",
                          answer: "W wielu przypadkach tak. Kupujesz niejako istniejącą reputację, zamiast budować ją później drogo i ryzykownie."
                        },
                        {
                          question: "20. Dlaczego przedsiębiorcy świadomie wybierają wygasłą domenę?",
                          answer: "Ponieważ szukają: szybszego wyniku, mniejszego ryzyka SEO, inteligentnego startu z przewagą."
                        },
                        {
                          question: "21. Czy wygasła domena jest odpowiednia dla każdej niszy?",
                          answer: "Dla prawie każdej niszy dostępne są dobre wygasłe domeny, pod warunkiem że nazwa i historia logicznie pasują do tematu."
                        },
                        {
                          question: "22. Czy mogę uzyskać pomoc przy wyborze odpowiedniej domeny?",
                          answer: "Tak. Wielu początkujących szuka \"jaka domena pasuje do mojej firmy\". Doradztwo zapobiega błędnym zakupom i oszczędza pieniądze."
                        },
                        {
                          question: "23. Jaka jest największa zaleta wygasłej domeny?",
                          answer: "Największą zaletą jest to, że nie zaczynasz od zera w wyszukiwarkach."
                        },
                        {
                          question: "24. Jakie jest największe nieporozumienie dotyczące wygasłych domen?",
                          answer: "Że są z definicji ryzykowne. W rzeczywistości niesprawdzone domeny są ryzykowne — nie starannie wybrane wygasłe domeny."
                        },
                        {
                          question: "25. Dla kogo najbardziej odpowiednia jest wiarygodna wygasła domena?",
                          answer: "Dla: początkujących, przedsiębiorców, sklepów internetowych, projektów SEO, inwestorów. Każdy, kto szuka \"kup najlepszą domenę\" i chce zacząć mądrze."
                        },
                        {
                          question: "26. Jak wiem, czy domena jest odpowiednia dla SEO?",
                          answer: "Domena jest odpowiednia dla SEO, jeśli: nazwa jest logiczna i odpowiednia, nie ma historii spamu, są obecne jakościowe backlinki. Wygasła domena z dobrymi linkami często wypada tu lepiej niż nowa domena."
                        },
                        {
                          question: "27. Czy zakup wygasłej domeny ma wpływ na rankingi Google?",
                          answer: "Tak. Google patrzy na historię i strukturę linków domeny. Wiarygodna wygasła domena może pomóc szybciej budować widoczność, jeśli jest prawidłowo używana."
                        },
                        {
                          question: "28. Jakie są zalety wygasłej domeny z autorytetem?",
                          answer: "Najważniejsze zalety to: szybsze zaufanie w wyszukiwarkach, mniejsza zależność od link buildingu, silniejsza pozycja startowa niż konkurenci z nowymi domenami."
                        },
                        {
                          question: "29. Czy muszę mieć słowo kluczowe w mojej domenie dla SEO?",
                          answer: "Niekoniecznie. Wyszukiwania takie jak \"słowo kluczowe domena SEO\" pokazują, że to częste pytanie. Jasna, wiarygodna nazwa jest ważniejsza niż dokładne słowa kluczowe, szczególnie w przypadku wygasłych domen z autorytetem."
                        },
                        {
                          question: "30. Czy krótka domena jest lepsza niż długa domena?",
                          answer: "Tak. Krótkie domeny są: łatwiejsze do zapamiętania, bardziej profesjonalne, bardziej wartościowe. Wiele premium wygasłych domen jest właśnie krótkich i mocnych."
                        },
                        {
                          question: "31. Czy mogę użyć wygasłej domeny do wielu projektów?",
                          answer: "Tak, na przykład do: głównej strony internetowej, projektu niszowego, portalu marki. Ważne jest jednak, aby treść logicznie pasowała do historii domeny."
                        },
                        {
                          question: "32. Co dzieje się ze starymi backlinkami, gdy umieszczam nową stronę?",
                          answer: "Backlinki pozostają, dopóki nie zostaną usunięte przez strony odsyłające. To właśnie jedna z wielkich zalet zakupu wygasłej domeny."
                        },
                        {
                          question: "33. Czy wygasła domena jest lepsza niż wiele nowych domen?",
                          answer: "Dla skupienia i SEO jedna silna wygasła domena jest często skuteczniejsza niż wiele nowych domen bez autorytetu."
                        },
                        {
                          question: "34. Czy mogę szybciej zdobyć klientów z wygasłą domeną?",
                          answer: "Pośrednio tak. Szybsza widoczność i większe zaufanie sprawiają, że odwiedzający szybciej konwertują."
                        },
                        {
                          question: "35. Jak długo wartość wygasłej domeny się utrzymuje?",
                          answer: "Dopóki domena jest dobrze używana i utrzymywana, wartość się utrzymuje i może nawet rosnąć."
                        },
                        {
                          question: "36. Dlaczego powinienem kupić domenę od wyspecjalizowanego sprzedawcy?",
                          answer: "Ponieważ wyspecjalizowany sprzedawca: sprawdza domeny z wyprzedzeniem, wyklucza ryzyko, prowadzi początkujących, jest przejrzysty co do jakości i historii. To robi różnicę między hazardem a świadomą inwestycją."
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

        {/* Contact Form Section */}
        <section id="contact" className="py-20 bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                  <MessageSquare className="w-4 h-4 mr-2 inline" />
                  Skontaktuj się z nami
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Prześlij Zapytanie o Domenę
                </h2>
                <p className="text-slate-400">
                  Zainteresowany jedną z naszych domen premium? Wypełnij formularz, a skontaktujemy się z Tobą jak najszybciej.
                </p>
              </div>
              
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Imię i nazwisko *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Twoje imię"
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
                          placeholder="twoj@email.com"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Globe className="w-4 h-4 inline mr-2" />
                        Wybór Domeny *
                      </label>
                      <Input
                        type="text"
                        value={formData.domain}
                        onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                        placeholder="np. FinanceAuthority.com"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Wiadomość / Dodatkowe Informacje
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Powiedz nam więcej o swoim zainteresowaniu, zadaj pytania lub złóż ofertę..."
                        rows={5}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40"
                    >
                      Wyślij Zapytanie
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
                  Kupowanie Wygasłych Domen: Inwestuj w Udowodniony Autorytet SEO
                </h2>
                
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-amber-400">Kupowanie wygasłej domeny</strong> to najmądrzejszy sposób na natychmiastowe skorzystanie z latami budowanego <strong className="text-white">autorytetu domeny</strong> i <strong className="text-white">jakościowych backlinków</strong>. W przeciwieństwie do nowej domeny, domena premium expired już cieszy się zaufaniem Google i innych wyszukiwarek. Przekłada się to bezpośrednio na lepsze rankingi, szybszą indeksację i większy ruch organiczny.
                  </p>
                  
                  <p>
                    Nasze starannie wybrane <strong className="text-amber-400">domeny premium</strong> mają udokumentowaną historię z backlinkami z autorytatywnych źródeł takich jak Wikipedia, uniwersytety, instytucje rządowe i renomowane portale informacyjne. Te <strong className="text-white">wysokiej jakości backlinki</strong> są rezultatem lat obecności online i są praktycznie niemożliwe do zbudowania samodzielnie — chyba że jesteś gotów zainwestować tysiące euro w linkbuilding.
                  </p>
                  
                  <p>
                    Niezależnie od tego, czy chcesz <strong className="text-white">założyć sklep internetowy</strong>, uruchomić <strong className="text-white">stronę afiliacyjną</strong>, czy dać swojej firmie <strong className="text-white">boost SEO</strong>: wygasła domena z wysokim <strong className="text-amber-400">MOZ Domain Authority (DA)</strong> daje ci bezsporną przewagę nad konkurencją. Podczas gdy inni czekają miesiącami, aż Google zaufa ich nowej domenie, ty od razu korzystasz z istniejącego autorytetu.
                  </p>
                  
                  <p>
                    <strong className="text-white">Po co czekać?</strong> Każda domena premium w naszym portfolio jest sprawdzona pod kątem braku spamu, odpowiednich backlinków i dobrych profili linków. Kupujesz strategiczny aktyw domenowy, który natychmiast dodaje wartość do twojej obecności online. Od <strong className="text-white">przekierowań 301</strong> dla authority stacking po natychmiastowe uruchomienie nowej strony: możliwości są nieograniczone.
                  </p>
                  
                  <div className="bg-gradient-to-r from-amber-500/10 to-slate-800/30 border border-amber-500/20 rounded-xl p-6 mt-8">
                    <p className="text-center text-lg mb-0">
                      <strong className="text-amber-400">Gotowy przyspieszyć swój sukces online?</strong><br />
                      <span className="text-slate-300">Przejrzyj nasze portfolio ponad 110 premium wygasłych domen i odkryj, która domena idealnie pasuje do twoich ambicji. Zainwestuj dziś w udowodniony autorytet i zostaw konkurencję w tyle.</span>
                    </p>
                  </div>
                </div>
              </article>
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
                      <span>Jak przenieść domenę za pomocą tokena transferu (EPP/Auth code)?</span>
                    </div>
                  </h2>
                </div>
                <div className="px-6 pb-6">
                  <div className="space-y-6 text-slate-300">
                    <p className="text-lg">
                      Po zakupie otrzymasz <strong className="text-amber-400">token transferu</strong> (znany również jako kod EPP lub Auth-code) na adres e-mail podany podczas płatności w ciągu 24 godzin. Za pomocą tego kodu możesz łatwo przenieść domenę do swojego rejestratora lub dostawcy hostingu.
                    </p>
                    
                    <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                      <h3 className="text-lg font-semibold text-white mb-4">Instrukcja krok po kroku:</h3>
                      <ol className="space-y-4">
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">1</span>
                          <div>
                            <strong className="text-white">Odbierz token transferu</strong>
                            <p className="text-slate-400 mt-1">Sprawdź skrzynkę odbiorczą (i folder spam) pod kątem e-maila z tokenem transferu. Otrzymasz go w ciągu 24 godzin od płatności.</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">2</span>
                          <div>
                            <strong className="text-white">Zaloguj się u swojego rejestratora lub dostawcy hostingu</strong>
                            <p className="text-slate-400 mt-1">Przejdź do zarządzania domenami u swojego dostawcy (np. nazwa.pl, home.pl, OVH, GoDaddy itp.).</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">3</span>
                          <div>
                            <strong className="text-white">Rozpocznij transfer domeny</strong>
                            <p className="text-slate-400 mt-1">Znajdź opcję "Przenieś domenę", "Transfer domeny" lub "Przejmij domenę". Wpisz nazwę domeny, którą chcesz przenieść.</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">4</span>
                          <div>
                            <strong className="text-white">Wprowadź token transferu</strong>
                            <p className="text-slate-400 mt-1">Wklej token transferu (kod EPP/Auth-code), który od nas otrzymałeś, w odpowiednie pole.</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">5</span>
                          <div>
                            <strong className="text-white">Potwierdź transfer</strong>
                            <p className="text-slate-400 mt-1">Wpisz zakupioną nazwę domeny u swojego dostawcy i potwierdź transfer. Następnie wprowadź kod EPP (token transferu), który od nas otrzymałeś.</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">6</span>
                          <div>
                            <strong className="text-white">Poczekaj na zakończenie</strong>
                            <p className="text-slate-400 mt-1">Transfer zostanie teraz uruchomiony i zazwyczaj trwa 1-5 dni roboczych, w zależności od rozszerzenia domeny (.pl, .eu, .com itp.). Po zakończeniu transferu domena automatycznie pojawi się na Twoim koncie.</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">7</span>
                          <div>
                            <strong className="text-white">Używaj swojej domeny</strong>
                            <p className="text-slate-400 mt-1">Po zakończeniu możesz od razu korzystać z domeny: użyj jej jako przekierowania 301 na swoją istniejącą stronę dla dodatkowej wartości SEO lub połącz ją z pakietem hostingowym, aby zbudować nową stronę.</p>
                          </div>
                        </li>
                      </ol>
                    </div>
                    
                    <p className="text-slate-400 text-sm">
                      Masz pytania dotyczące transferu domeny? Skontaktuj się z nami pod adresem <a href="mailto:support@iaee.eu" className="text-amber-400 hover:text-amber-300">support@iaee.eu</a>.
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
                Skontaktuj Się
              </h2>
              <p className="text-slate-300 mb-8">
                Masz pytania dotyczące konkretnej domeny lub potrzebujesz porady, która wygasła domena najlepiej pasuje do Twojego projektu? Skontaktuj się z nami.
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
                    Odpowiadamy na wiadomości w ciągu 24 godzin.
                  </p>
                </div>

                {/* NordVPN Recommendation Section */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-4 mt-6">
                  <div className="text-center">
                    <h4 className="font-bold text-white text-lg mb-2">🔒 Chroń Swoją Prywatność z NordVPN</h4>
                    <p className="text-white/90 text-sm mb-3">
                      Czym jest VPN? <a href="https://www.tkqlhce.com/click-100643838-15295919" target="_blank" rel="noopener noreferrer" className="underline text-yellow-300 hover:text-yellow-200">Wirtualna Sieć Prywatna (VPN)</a> szyfruje Twoje połączenie internetowe i ukrywa Twój adres IP, chroniąc Twoje dane osobowe przed hakerami, śledzeniem i inwigilacją.
                    </p>
                    <p className="text-white/80 text-xs mb-4">
                      Dla właścicieli domen premium ochrona tożsamości online jest niezbędna. NordVPN pozwala przeglądać anonimowo, uzyskiwać dostęp do globalnych treści i zabezpieczać transakcje biznesowe.
                    </p>
                    <a 
                      href="https://www.tkqlhce.com/click-100643838-15295919" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-6 rounded-full transition-colors text-sm"
                    >
                      Pobierz NordVPN Teraz →
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
          aria-label="Powrót na górę"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        {/* Legal Footer */}
        <LegalLinksPremiumDomainsPL />
        
        {/* Footer */}
        <FooterPremiumDomainsPL />
      </div>
    </>
  );
};

export default PremiumDomainsPL;
