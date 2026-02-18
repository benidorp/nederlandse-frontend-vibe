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
import LegalLinksPremiumDomainsTR from "@/components/premium-domains/LegalLinksPremiumDomainsTR";
import FooterPremiumDomainsTR from "@/components/premium-domains/FooterPremiumDomainsTR";
import LanguageSwitcher from "@/components/premium-domains/LanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import stripeLogo from "@/assets/stripe-logo.svg";
import { validateContactForm, buildSafeMailtoUrl } from "@/lib/formValidation";

// Premium domain data - exact copy from English version with Turkish translations
const premiumDomains = [
  // DA 38
  {
    name: "escp-eap.eu",
    description: "Wikipedia, Cornell, Spiegel ve Le Monde'dan backlinklere sahip premium işletme okulu alan adı.",
    mozScore: 38,
    pageAuthority: 28,
    linkingDomains: 292,
    inboundLinks: "4.6K+",
    followedLinks: "4.2K+",
    category: "Eğitim",
    price: "€1495",
    backlinks: "4.6K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "lemonde.fr (DA 93)", "cornell.edu (DA 92)", "spiegel.de (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/6oUeVdepVg18dXf9OO9Zm04"
  },
  // DA 37
  {
    name: "grandparkhotel.at",
    description: "The Guardian, Telegraph, Daily Mail, Irish Times ve Der Standard'dan backlinklere sahip premium Avusturya otel alan adı.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 198,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Konaklama",
    price: "€1750",
    backlinks: "1.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dailymail.co.uk (DA 94)", "irishtimes.com (DA 91)", "derstandard.at (DA 82)"],
    stripePaymentLink: "https://buy.stripe.com/8x2dR9epV9CK5qJaSS9Zm0i"
  },
  {
    name: "icesculpture.be",
    description: "Europa.eu, The Guardian, Telegraph, DW ve Boston.com'dan backlinklere sahip Belçika sanat/etkinlik alan adı.",
    mozScore: 37,
    pageAuthority: 33,
    linkingDomains: 349,
    inboundLinks: "1.9K+",
    followedLinks: "1.5K+",
    category: "Sanat",
    price: "€950",
    backlinks: "1.9K+",
    topBacklinks: ["europa.eu (DA 97)", "theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dw.com (DA 93)", "boston.com (DA 92)"],
    stripePaymentLink: "https://buy.stripe.com/fZu4gzdlRaGOg5n3qq9Zm0h"
  },
  {
    name: "tabby.eu",
    description: "YouTube, Le Monde, MDPI, Corriere ve Wired Italia'dan backlinklere sahip kısa ve akılda kalıcı AB alan adı.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 166,
    inboundLinks: "3K+",
    followedLinks: "2.9K+",
    category: "Genel",
    price: "€1950",
    stripePaymentLink: "https://buy.stripe.com/bJe7sL2HdcOWbP7bWW9Zm0g",
    backlinks: "3K+",
    topBacklinks: ["youtube.com (DA 100)", "lemonde.fr (DA 93)", "mdpi.com (DA 92)", "corriere.it (DA 92)", "wired.it (DA 90)"]
  },
  // DA 36
  {
    name: "antigonetickets.be",
    description: "Nieuwsblad, De Standaard ve GVA'dan backlinklere sahip Belçika biletleme alan adı.",
    mozScore: 36,
    pageAuthority: 23,
    linkingDomains: 120,
    inboundLinks: "6.6K+",
    followedLinks: "6.6K+",
    category: "Eğlence",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "6.6K+",
    topBacklinks: ["standaard.be (DA 81)", "nieuwsblad.be (DA 79)", "gva.be (DA 73)"]
  },
  {
    name: "beauxartsliege.be",
    description: "Wikipedia, CNN, Behance ve RTBF'den backlinklere sahip sanat alan adı.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 231,
    inboundLinks: "1.1K+",
    followedLinks: "831+",
    category: "Sanat/Kültür",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "1.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnn.com (DA 94)", "behance.net (DA 92)", "rtbf.be (DA 82)"]
  },
  {
    name: "paulsmithmusic.eu",
    description: "BBC, The Guardian, NME ve Pitchfork'tan backlinklere sahip müzik alan adı.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 302,
    inboundLinks: "719+",
    followedLinks: "663+",
    category: "Müzik",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "719+",
    topBacklinks: ["bbc.co.uk (DA 95)", "theguardian.com (DA 95)", "pitchfork.com (DA 88)", "nme.com (DA 86)"]
  },
  {
    name: "eu-asiacentre.eu",
    description: "Wikipedia, NBC News, Cambridge ve Reddit'ten backlinklere sahip AB-Asya alan adı.",
    mozScore: 36,
    pageAuthority: 33,
    linkingDomains: 277,
    inboundLinks: "898+",
    followedLinks: "785+",
    category: "Uluslararası",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "898+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "reddit.com (DA 97)", "nbcnews.com (DA 93)", "cam.ac.uk (DA 93)"]
  },
  // DA 35
  {
    name: "toulousespaceshow.eu",
    description: "Europa.eu, NASA.gov, IEEE.org ve Wikipedia'dan backlinklere sahip premium uzay alan adı.",
    mozScore: 35,
    pageAuthority: 31,
    linkingDomains: 397,
    inboundLinks: "3.4K+",
    followedLinks: "1.8K+",
    category: "Teknoloji",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "nasa.gov (DA 95)", "europa.eu (DA 94)", "ieee.org (DA 93)"]
  },
  {
    name: "martonecycling.eu",
    description: "Globo, Harper's Bazaar, Vogue ve Grazia'dan backlinklere sahip bisiklet alan adı.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 118,
    inboundLinks: "232+",
    followedLinks: "173+",
    category: "Spor",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "232+",
    topBacklinks: ["globo.com (DA 93)", "vogue.com (DA 92)", "harpersbazaar.com (DA 89)", "grazia.it (DA 73)"]
  },
  {
    name: "muenchner-kirchennachrichten.de",
    description: "Wikipedia (EN, DE, ZH, NL), Spiegel ve La Croix'dan backlinklere sahip Alman haber/dini alan adı.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 281,
    inboundLinks: "3.3K+",
    followedLinks: "1.8K+",
    category: "Haber",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.3K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "de.wikipedia.org (DA 94)", "fandom.com (DA 94)", "spiegel.de (DA 93)", "la-croix.com (DA 88)"]
  },
  // DA 33
  {
    name: "etongmbh.de",
    description: "Naver, Yumpu, Heise, Computerbase ve Motor-Talk'tan backlinklere sahip güçlü ticari otoriteye sahip Alman iş alan adı.",
    mozScore: 33,
    pageAuthority: 27,
    linkingDomains: 321,
    inboundLinks: "3.9K+",
    followedLinks: "1.6K+",
    category: "İş",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "3.9K+",
    topBacklinks: ["naver.com (DA 93)", "yumpu.com (DA 91)", "heise.de (DA 91)", "computerbase.de (DA 84)", "motor-talk.de (DA 73)"]
  },
  {
    name: "europe-en-midipyrenees.eu",
    description: "Scoop.it, France Info, La Tribune ve Fransız hükümetinden backlinklere sahip Fransız/Avrupa bölgesel alan adı.",
    mozScore: 33,
    pageAuthority: 24,
    linkingDomains: 167,
    inboundLinks: "690.3K+",
    followedLinks: "689.6K+",
    category: "Turizm",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "690.3K+",
    topBacklinks: ["scoop.it (DA 92)", "franceinfo.fr (DA 91)", "latribune.fr (DA 86)", "culture.gouv.fr (DA 76)", "agriculture.gouv.fr (DA 72)"]
  },
  {
    name: "fffb.be",
    description: "Wikipedia, Variety, RTBF ve Courrier International'dan backlinklere sahip kısa ve güçlü Belçika alan adı.",
    mozScore: 33,
    pageAuthority: 33,
    linkingDomains: 228,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Genel",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "1.7K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "variety.com (DA 93)", "constantcontact.com (DA 90)", "rtbf.be (DA 89)", "courrierinternational.com (DA 80)"]
  },
  // DA 32
  {
    name: "improve-research.eu",
    description: "Europa.eu, Cambridge, Springer ve LSE'den backlinklere sahip araştırma alan adı.",
    mozScore: 32,
    pageAuthority: 30,
    linkingDomains: 106,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "Araştırma",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.7K+",
    topBacklinks: ["europa.eu (DA 94)", "cam.ac.uk (DA 93)", "springer.com (DA 92)", "lse.ac.uk (DA 90)"]
  },
  {
    name: "co-da.eu",
    description: "Globo, HuffPost, CBS News, Gizmodo ve Fast Company'den backlinklere sahip kısa ve güçlü AB alan adı.",
    mozScore: 32,
    pageAuthority: 22,
    linkingDomains: 96,
    inboundLinks: "276+",
    followedLinks: "260+",
    category: "İşbirliği",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "276+",
    topBacklinks: ["globo.com (DA 95)", "huffpost.com (DA 94)", "cbsnews.com (DA 93)", "gizmodo.com (DA 93)", "fastcompany.com (DA 92)"]
  },
  {
    name: "emg-nice2015.fr",
    description: "Wikipedia, GoFundMe, Nice Matin ve Triathlon.org'dan backlinklere sahip Fransız alan adı.",
    mozScore: 32,
    pageAuthority: 31,
    linkingDomains: 191,
    inboundLinks: "3.1K+",
    followedLinks: "3K+",
    category: "Uluslararası",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "3.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "gofundme.com (DA 93)", "mundodeportivo.com (DA 92)", "nicematin.com (DA 73)", "triathlon.org (DA 68)"]
  },
  {
    name: "euromedialiteracy.eu",
    description: "Wikipedia, Penn State, Wisconsin ve Avrupa Konseyi'nden backlinklere sahip eğitim AB alan adı.",
    mozScore: 32,
    pageAuthority: 38,
    linkingDomains: 372,
    inboundLinks: "2.5K+",
    followedLinks: "2.3K+",
    category: "Eğitim",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.5K+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "psu.edu (DA 92)", "scoop.it (DA 92)", "wisc.edu (DA 91)", "coe.int (DA 89)"]
  },
  {
    name: "citiexpress.eu",
    description: "TripAdvisor, SkyscraperCity ve Rick Steves'den backlinklere sahip ulaşım ve lojistik AB alan adı.",
    mozScore: 32,
    pageAuthority: 32,
    linkingDomains: 171,
    inboundLinks: "307+",
    followedLinks: "254+",
    category: "Ulaşım",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "307+",
    topBacklinks: ["goo.gl (DA 95)", "tripadvisor.com (DA 93)", "skyscrapercity.com (DA 86)", "ricksteves.com (DA 77)", "rome2rio.com (DA 76)"]
  },
  // DA 31
  {
    name: "machuproject.eu",
    description: "Wikipedia, Cambridge, UNESCO ve Reddit'ten backlinklere sahip Avrupa proje alan adı.",
    mozScore: 31,
    pageAuthority: 27,
    linkingDomains: 162,
    inboundLinks: "379+",
    followedLinks: "266+",
    category: "Projeler",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "379+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cambridge.org (DA 93)", "unesco.org (DA 93)", "reddit.com (DA 92)", "mdpi.com (DA 92)"]
  },
  {
    name: "ramcip-project.eu",
    description: "Europa.eu, GitHub, NY Times ve Springer'dan backlinklere sahip Avrupa araştırma projesi alan adı.",
    mozScore: 31,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "333+",
    followedLinks: "293+",
    category: "Araştırma",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "333+",
    topBacklinks: ["europa.eu (DA 97)", "github.com (DA 96)", "nytimes.com (DA 95)", "elpais.com (DA 94)", "springer.com (DA 93)"]
  },
  {
    name: "evader-project.eu",
    description: "Europa.eu, Spiegel, Europa Press ve Heise'den backlinklere sahip AB proje alan adı.",
    mozScore: 31,
    pageAuthority: 30,
    linkingDomains: 91,
    inboundLinks: "128+",
    followedLinks: "109+",
    category: "Projeler",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "128+",
    topBacklinks: ["europa.eu (DA 97)", "spiegel.de (DA 93)", "europapress.es (DA 91)", "heise.de (DA 91)", "autoblog.com (DA 90)"]
  },
  {
    name: "toastit-live.be",
    description: "Wikipedia, KU Leuven, Nieuwsblad ve Yle'den backlinklere sahip Belçika eğlence/medya alan adı.",
    mozScore: 31,
    pageAuthority: 29,
    linkingDomains: 268,
    inboundLinks: "15.2K+",
    followedLinks: "15K+",
    category: "Medya",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "15.2K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "kuleuven.be (DA 83)", "nieuwsblad.be (DA 82)", "skynet.be (DA 80)", "yle.fi (DA 78)"]
  },
  {
    name: "hznet.nl",
    description: "Microsoft, NOS, Neowin, Tweakers ve XS4All'dan backlinklere sahip Hollanda ağ alan adı.",
    mozScore: 31,
    pageAuthority: 25,
    linkingDomains: 152,
    inboundLinks: "1.7K+",
    followedLinks: "1.6K+",
    category: "Ağ",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "1.7K+",
    topBacklinks: ["microsoft.com (DA 99)", "nos.nl (DA 90)", "neowin.net (DA 88)", "techpowerup.com (DA 83)", "tweakers.net (DA 79)"]
  },
  {
    name: "leading-the-digital-decade.eu",
    description: "Europa.eu, Politico EU ve LSE'den backlinklere sahip dijital dönüşüm AB alan adı.",
    mozScore: 31,
    pageAuthority: 30,
    linkingDomains: 80,
    inboundLinks: "189+",
    followedLinks: "174+",
    category: "Dijital",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "189+",
    topBacklinks: ["europa.eu (DA 97)", "politico.eu (DA 91)", "lse.ac.uk (DA 89)", "fapesp.br (DA 72)", "eureporter.co (DA 68)"]
  },
  {
    name: "landstewardship.eu",
    description: "Europa.eu, ABC.es, Gencat.cat ve İspanyol üniversitelerinden backlinklere sahip AB arazi yönetimi/sürdürülebilirlik alan adı.",
    mozScore: 31,
    pageAuthority: 33,
    linkingDomains: 200,
    inboundLinks: "7.5K+",
    followedLinks: "7.4K+",
    category: "Sürdürülebilirlik",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "7.5K+",
    topBacklinks: ["europa.eu (DA 97)", "abc.es (DA 93)", "gencat.cat (DA 89)", "ask.com (DA 88)", "ecoticias.com (DA 74)"],
    useCases: ["Doğa Yönetimi & Yeniden Vahşileştirme STK", "Sürdürülebilir Tarım Platformu", "Eko-turizm & Agro-turizm", "Çevre Danışmanlık Firması", "Peyzaj Mimarlığı Stüdyosu", "Organik Çiftlik Kolektifi", "İklim Eylemi Vakfı", "Permakültür Akademisi", "Ormanlar & Biyoçeşitlilik Girişimi", "Rejeneratif Tarım Topluluğu"]
  },
  {
    name: "imess.eu",
    description: "Bit.ly, Wikipedia (JA), UCL ve Helsinki Üniversitesi'nden backlinklere sahip AB alan adı.",
    mozScore: 31,
    pageAuthority: 32,
    linkingDomains: 174,
    inboundLinks: "748+",
    followedLinks: "675+",
    category: "Teknoloji",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "748+",
    topBacklinks: ["bit.ly (DA 94)", "ja.wikipedia.org (DA 93)", "ucl.ac.uk (DA 91)", "ku.dk (DA 87)", "helsinki.fi (DA 85)"]
  },
  // DA 30
  {
    name: "ilovecosmetics.eu",
    description: "Alza, Glamour Magazine ve CB Insights'tan backlinklere sahip güzellik ve kozmetik alan adı.",
    mozScore: 30,
    pageAuthority: 36,
    linkingDomains: 472,
    inboundLinks: "1.6K+",
    followedLinks: "1.3K+",
    category: "Güzellik",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "1.6K+",
    topBacklinks: ["alza.cz (DA 92)", "glamourmagazine.co.uk (DA 82)", "polyvore.com (DA 79)", "fave.co (DA 78)", "cbinsights.com (DA 77)"],
    useCases: ["Güzellik & Cilt Bakımı E-ticaret", "Kozmetik İnceleme Blogu", "Makyaj Sanatçısı Portfolyosu", "Doğal Kozmetik Markası", "Güzellik Influencer Platformu", "Güzellik Salonu Zinciri", "K-Beauty & J-Beauty İthalat", "Vegan Kozmetik Web Mağazası", "Güzellik Kutusu Abonelik Hizmeti", "Kozmetik İçerik Veritabanı"]
  },
  {
    name: "rtmpilecki.eu",
    description: "Wikipedia (ES, ID, ZH), Polonya hükümeti ve Thread Reader'dan backlinklere sahip tarihi/kültürel AB alan adı.",
    mozScore: 30,
    pageAuthority: 27,
    linkingDomains: 96,
    inboundLinks: "199+",
    followedLinks: "95+",
    category: "Kültür",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "199+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "gov.pl (DA 91)", "threadreaderapp.com (DA 78)", "gloria.tv (DA 69)", "dbpedia.org (DA 65)"]
  },
  {
    name: "friendsofthesupergrid.eu",
    description: "Wikipedia, CNET, IEEE ve The Conversation'dan backlinklere sahip enerji ve altyapı AB alan adı.",
    mozScore: 30,
    pageAuthority: 30,
    linkingDomains: 297,
    inboundLinks: "156.1K+",
    followedLinks: "155.8K+",
    category: "Enerji",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/9B6cN54Pl5mu9GZe549Zm0l",
    backlinks: "156.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnet.com (DA 93)", "theconversation.com (DA 92)", "ieee.org (DA 92)", "corriere.it (DA 92)"]
  },
  {
    name: "eureka-hvacr.eu",
    description: "Ow.ly, EurActiv ve Danfoss'tan backlinklere sahip HVAC ve iklim teknolojisi AB alan adı.",
    mozScore: 30,
    pageAuthority: 23,
    linkingDomains: 80,
    inboundLinks: "375+",
    followedLinks: "357+",
    category: "Teknoloji",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "375+",
    topBacklinks: ["ow.ly (DA 90)", "euractiv.com (DA 84)", "campaign-archive.com (DA 84)", "danfoss.com (DA 69)", "coleurope.eu (DA 57)"]
  },
  {
    name: "partymenu.eu",
    description: "Google.sk, Wikiwand, RA.co ve Pravda.sk'dan backlinklere sahip AB catering/etkinlik alan adı.",
    mozScore: 30,
    pageAuthority: 35,
    linkingDomains: 328,
    inboundLinks: "2.2K+",
    followedLinks: "2.1K+",
    category: "Yiyecek",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "2.2K+",
    topBacklinks: ["google.sk (DA 85)", "wikiwand.com (DA 85)", "ra.co (DA 85)", "pravda.sk (DA 79)", "dennikn.sk (DA 76)"]
  },
  {
    name: "dowse.eu",
    description: "GitHub, Medium, The Guardian ve Vercel'den backlinklere sahip AB alan adı.",
    mozScore: 30,
    pageAuthority: 33,
    linkingDomains: 184,
    inboundLinks: "853+",
    followedLinks: "462+",
    category: "Teknoloji",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "853+",
    topBacklinks: ["github.com (DA 96)", "medium.com (DA 95)", "theguardian.com (DA 94)", "vercel.app (DA 92)", "ycombinator.com (DA 90)"]
  },
  // DA 29
  {
    name: "evacuate.eu",
    description: "Europa.eu, El País, Springer ve KU Leuven'den backlinklere sahip güvenlik ve acil durum planlaması AB alan adı.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 99,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Güvenlik",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.7K+",
    topBacklinks: ["europa.eu (DA 97)", "elpais.com (DA 94)", "springer.com (DA 93)", "mdpi.com (DA 92)", "xataka.com (DA 90)"]
  },
  {
    name: "greenweek2010.eu",
    description: "Europa.eu, EurekAlert, RAI ve AAAS'dan backlinklere sahip sürdürülebilirlik alan adı.",
    mozScore: 29,
    pageAuthority: 28,
    linkingDomains: 109,
    inboundLinks: "259+",
    followedLinks: "249+",
    category: "Sürdürülebilirlik",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "259+",
    topBacklinks: ["europa.eu (DA 97)", "eurekalert.org (DA 91)", "rai.it (DA 81)", "au.dk (DA 77)", "aaas.org (DA 76)"]
  },
  {
    name: "bryn-somersethouse.co.uk",
    description: "Forbes, The Guardian, Evening Standard ve Time Out'tan backlinklere sahip İngiliz gayrimenkul/konaklama alan adı.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 96,
    inboundLinks: "167+",
    followedLinks: "132+",
    category: "Gayrimenkul",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "167+",
    topBacklinks: ["forbes.com (DA 94)", "theguardian.com (DA 94)", "standard.co.uk (DA 93)", "timeout.com (DA 92)", "thetimes.com (DA 92)"]
  },
  {
    name: "euforistudy.eu",
    description: "The Guardian, Trinity College Dublin ve VU Amsterdam'dan backlinklere sahip eğitim AB çalışma alan adı.",
    mozScore: 29,
    pageAuthority: 27,
    linkingDomains: 72,
    inboundLinks: "215+",
    followedLinks: "170+",
    category: "Eğitim",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "215+",
    topBacklinks: ["theguardian.com (DA 94)", "ask.com (DA 88)", "tcd.ie (DA 86)", "vu.nl (DA 76)", "muni.cz (DA 74)"]
  },
  {
    name: "beatassist.eu",
    description: "Google Sites, Scoop.it, Envato ve MusicRadar'dan backlinklere sahip müzik prodüksiyon alan adı.",
    mozScore: 29,
    pageAuthority: 29,
    linkingDomains: 164,
    inboundLinks: "1.5K+",
    followedLinks: "1.2K+",
    category: "Müzik/Ses",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.5K+",
    topBacklinks: ["sites.google.com (DA 96)", "scoop.it (DA 92)", "envato.com (DA 91)", "informer.com (DA 90)", "codecanyon.net (DA 83)"]
  },
  {
    name: "energaware.eu",
    description: "Europa.eu, UOL, El País ve Le Figaro'dan backlinklere sahip enerji farkındalığı AB proje alan adı.",
    mozScore: 29,
    pageAuthority: 26,
    linkingDomains: 61,
    inboundLinks: "15.1K+",
    followedLinks: "15.1K+",
    category: "Enerji",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "15.1K+",
    topBacklinks: ["europa.eu (DA 97)", "uol.com.br (DA 95)", "elpais.com (DA 94)", "lefigaro.fr (DA 93)", "mdpi.com (DA 92)"]
  },
  {
    name: "5gmedia.eu",
    description: "Medium, IBM, Telefónica ve üniversitelerden backlinklere sahip telekomünikasyon/medya alan adı.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 69,
    inboundLinks: "338+",
    followedLinks: "265+",
    category: "Teknoloji",
    price: "€675",
    stripePaymentLink: "https://buy.stripe.com/cNi00jdlR9CK5qJf989Zm0k",
    backlinks: "338+",
    topBacklinks: ["medium.com (DA 95)", "ibm.com (DA 93)", "telefonica.com (DA 79)", "upv.es (DA 79)", "upm.es (DA 78)"]
  },
  {
    name: "finnovaregio.eu",
    description: "Crunchbase, Splashthat ve Climate-KIC'den backlinklere sahip finansal inovasyon AB bölgesel alan adı.",
    mozScore: 29,
    pageAuthority: 20,
    linkingDomains: 41,
    inboundLinks: "156+",
    followedLinks: "143+",
    category: "Finans",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "156+",
    topBacklinks: ["goo.gl (DA 95)", "crunchbase.com (DA 91)", "splashthat.com (DA 86)", "emprendedores.es (DA 66)", "climate-kic.org (DA 64)"]
  },
  {
    name: "worth-project.eu",
    description: "Europa.eu, Euronews, AngelList ve UAL Arts'tan backlinklere sahip tasarım ve inovasyon proje alan adı.",
    mozScore: 29,
    pageAuthority: 32,
    linkingDomains: 162,
    inboundLinks: "245+",
    followedLinks: "209+",
    category: "Tasarım",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "245+",
    topBacklinks: ["europa.eu (DA 97)", "euronews.com (DA 92)", "angel.co (DA 86)", "campaign-archive.com (DA 84)", "arts.ac.uk (DA 81)"]
  },
  {
    name: "push-pull-parking.eu",
    description: "Europa.eu, Medium, Zeit.de ve Thread Reader'dan backlinklere sahip AB mobilite/otopark alan adı.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 107,
    inboundLinks: "320+",
    followedLinks: "292+",
    category: "Mobilite",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "320+",
    topBacklinks: ["europa.eu (DA 97)", "medium.com (DA 95)", "zeit.de (DA 91)", "threadreaderapp.com (DA 78)", "eur.nl (DA 68)"]
  },
  // DA 28
  {
    name: "scpenetwork.eu",
    description: "Springer, The Conversation, MDPI ve Player.fm'den backlinklere sahip AB ağ alan adı.",
    mozScore: 28,
    pageAuthority: 30,
    linkingDomains: 131,
    inboundLinks: "280+",
    followedLinks: "186+",
    category: "Araştırma",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "280+",
    topBacklinks: ["springer.com (DA 93)", "theconversation.com (DA 92)", "mdpi.com (DA 92)", "player.fm (DA 88)", "ncl.ac.uk (DA 85)"]
  },
  {
    name: "papilios.eu",
    description: "Yüksek linking domains ile Zoznam.sk, Centrum.cz ve Penize.cz'den backlinklere sahip AB alan adı.",
    mozScore: 28,
    pageAuthority: 32,
    linkingDomains: 833,
    inboundLinks: "20.2K+",
    followedLinks: "20.1K+",
    category: "Genel",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "20.2K+",
    topBacklinks: ["zoznam.sk (DA 90)", "centrum.cz (DA 72)", "penize.cz (DA 62)", "n-1publications.org (DA 55)", "vinosol.ch (DA 55)"]
  },
  {
    name: "bovisadrivein.it",
    description: "Behance, Giphy, Corriere ve MyMovies'den backlinklere sahip İtalyan eğlence alan adı.",
    mozScore: 28,
    pageAuthority: 22,
    linkingDomains: 52,
    inboundLinks: "78+",
    followedLinks: "60+",
    category: "Eğlence",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "78+",
    topBacklinks: ["behance.net (DA 93)", "giphy.com (DA 92)", "corriere.it (DA 92)", "ilgiornale.it (DA 85)", "elledecor.com (DA 81)"]
  },
  {
    name: "resurbis.eu",
    description: "Europa.eu, MDPI, EurekAlert ve Wired'dan backlinklere sahip AB sürdürülebilirlik alan adı.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 87,
    inboundLinks: "185+",
    followedLinks: "153+",
    category: "Sürdürülebilirlik",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "185+",
    topBacklinks: ["europa.eu (DA 97)", "mdpi.com (DA 92)", "eurekalert.org (DA 91)", "wired.it (DA 90)", "ub.edu (DA 86)"]
  },
  {
    name: "eu-sabana.eu",
    description: "Europa.eu, The Conversation ve Frontiers'dan backlinklere sahip sürdürülebilir tarım AB proje alan adı.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 69,
    inboundLinks: "413+",
    followedLinks: "397+",
    category: "Tarım",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "413+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "frontiersin.org (DA 92)", "diarioinformacion.com (DA 82)", "informacion.es (DA 78)"]
  },
  {
    name: "ellinikiglossa.eu",
    description: "Wikipedia, UCI.edu ve üniversitelerden güçlü backlinklere sahip Yunan dili/kültürü alan adı.",
    mozScore: 28,
    pageAuthority: 31,
    linkingDomains: 164,
    inboundLinks: "4.1K+",
    followedLinks: "4K+",
    category: "Dil/Kültür",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "4.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "uci.edu (DA 91)"]
  },
  {
    name: "bringaexpo.eu",
    description: "Origo.hu, Velvet.hu, Network.hu ve diğer Macar medya sitelerinden güçlü backlinklere sahip Macar bisiklet/fuar alan adı.",
    mozScore: 27,
    pageAuthority: 25,
    linkingDomains: 79,
    inboundLinks: "551+",
    followedLinks: "513+",
    category: "Spor/Etkinlik",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "551+",
    topBacklinks: ["origo.hu (DA 72)", "velvet.hu (DA 60)", "network.hu (DA 57)", "femcafe.hu (DA 56)", "hwsw.hu (DA 56)"]
  },
  {
    name: "movecare-project.eu",
    description: "Springer, MDPI, Il Fatto Quotidiano ve İtalyan üniversitelerinden backlinklere sahip bakım ve mobilite AB proje alan adı.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "117+",
    followedLinks: "97+",
    category: "Sağlık",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "117+",
    topBacklinks: ["springer.com (DA 93)", "mdpi.com (DA 92)", "ilfattoquotidiano.it (DA 90)", "unimi.it (DA 72)", "polimi.it (DA 71)"]
  },
  {
    name: "davidhughesillustration.co.uk",
    description: "The Guardian, Creative Bloq, ORF.at ve Publishers Weekly'den backlinklere sahip yaratıcı İngiliz alan adı.",
    mozScore: 28,
    pageAuthority: 27,
    linkingDomains: 157,
    inboundLinks: "3.9K+",
    followedLinks: "3.9K+",
    category: "Sanat/Tasarım",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "3.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "creativebloq.com (DA 86)", "orf.at (DA 86)", "librarything.com (DA 80)", "publishersweekly.com (DA 77)"]
  },
  {
    name: "centremlm.be",
    description: "Wikipedia (FR, IT, NL), Le Figaro ve Wiktionary'den backlinklere sahip Belçika merkez alan adı.",
    mozScore: 28,
    pageAuthority: 28,
    linkingDomains: 182,
    inboundLinks: "9.6K+",
    followedLinks: "9.3K+",
    category: "Genel",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "9.6K+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "it.wikipedia.org (DA 93)", "wiktionary.org (DA 93)", "lefigaro.fr (DA 93)", "nl.wikipedia.org (DA 91)"]
  },
  {
    name: "epc2018.be",
    description: "TinyURL, UB.edu, Lund Üniversitesi ve Confex'ten backlinklere sahip Belçika etkinlik alan adı.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 57,
    inboundLinks: "136+",
    followedLinks: "121+",
    category: "Etkinlikler",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "136+",
    topBacklinks: ["tinyurl.com (DA 94)", "ub.edu (DA 86)", "lu.se (DA 79)", "confex.com (DA 73)", "sdu.dk (DA 71)"]
  },
  {
    name: "youthstartproject.eu",
    description: "Europa.eu, Campaign Archive, Observador ve OpenEdition'dan backlinklere sahip eğitim/gençlik proje alan adı.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 64,
    inboundLinks: "2.9K+",
    followedLinks: "2.8K+",
    category: "Eğitim",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "2.9K+",
    topBacklinks: ["europa.eu (DA 97)", "campaign-archive.com (DA 84)", "observador.pt (DA 84)", "openedition.org (DA 78)", "wort.lu (DA 75)"]
  },
  // DA 27
  {
    name: "spanvis.nl",
    description: "Wikipedia (EN, RU, NL), Wikiwand ve XS4All'dan backlinklere sahip Hollanda alan adı.",
    mozScore: 27,
    pageAuthority: 29,
    linkingDomains: 241,
    inboundLinks: "2.1K+",
    followedLinks: "1.9K+",
    category: "Genel",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "ru.wikipedia.org (DA 94)", "nl.wikipedia.org (DA 91)", "wikiwand.com (DA 85)", "xs4all.nl (DA 79)"]
  },
  {
    name: "seatglobal.eu",
    description: "Europa.eu, Springer, PLOS ve Phys.org'dan backlinklere sahip uluslararası mobilite/ulaşım alan adı.",
    mozScore: 27,
    pageAuthority: 29,
    linkingDomains: 123,
    inboundLinks: "4.8K+",
    followedLinks: "4.7K+",
    category: "Ulaşım",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "4.8K+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "plos.org (DA 93)", "salon.com (DA 91)", "phys.org (DA 91)"]
  },
  {
    name: "arcomem.eu",
    description: "Wikipedia, Europa.eu, W3.org, SlideShare ve Oxford'dan backlinklere sahip dijital arşiv AB proje alan adı.",
    mozScore: 27,
    pageAuthority: 33,
    linkingDomains: 691,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "Dijital",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.7K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "w3.org (DA 95)", "slideshare.net (DA 94)", "ox.ac.uk (DA 92)"]
  },
  {
    name: "lt-pl-ru.eu",
    description: "Europa.eu, Wikipedia DE, Ask.com ve Rzeczpospolita'dan backlinklere sahip Baltık bölgesi AB işbirliği alan adı.",
    mozScore: 27,
    pageAuthority: 31,
    linkingDomains: 155,
    inboundLinks: "44.2K+",
    followedLinks: "37.2K+",
    category: "Uluslararası",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "44.2K+",
    topBacklinks: ["europa.eu (DA 97)", "de.wikipedia.org (DA 94)", "ask.com (DA 88)", "rp.pl (DA 82)", "worldwidetopsite.com (DA 71)"]
  },
  {
    name: "transitionproject.eu",
    description: "Europa.eu, Eventbrite, Storify ve Sheffield Üniversitesi'nden backlinklere sahip geçiş ve değişim AB proje alan adı.",
    mozScore: 27,
    pageAuthority: 28,
    linkingDomains: 75,
    inboundLinks: "207+",
    followedLinks: "179+",
    category: "Projeler",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "207+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "eventbrite.com (DA 93)", "storify.com (DA 90)", "shef.ac.uk (DA 79)"]
  },
  {
    name: "expo-2050.be",
    description: "The Conversation, Radio France, RTBF ve La Libre'den backlinklere sahip Belçika fuar/sergi alan adı.",
    mozScore: 27,
    pageAuthority: 27,
    linkingDomains: 96,
    inboundLinks: "210+",
    followedLinks: "182+",
    category: "Etkinlikler",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "210+",
    topBacklinks: ["theconversation.com (DA 92)", "radiofrance.fr (DA 92)", "theculturetrip.com (DA 89)", "rtbf.be (DA 89)", "lalibre.be (DA 84)"]
  },
  {
    name: "iceel.eu",
    description: "Europa.eu, France Info, CNRS ve Fransız üniversitelerinden backlinklere sahip AB alan adı.",
    mozScore: 27,
    pageAuthority: 30,
    linkingDomains: 130,
    inboundLinks: "3.6K+",
    followedLinks: "3.5K+",
    category: "Genel",
    price: "€450",
    stripePaymentLink: "https://buy.stripe.com/fZu14n6Xt7uCf1j9OO9Zm0j",
    backlinks: "3.6K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "cnrs.fr (DA 90)", "psl.eu (DA 78)", "education.fr (DA 77)"]
  },
  {
    name: "eustartupvillageforum.eu",
    description: "Europa.eu, Pages.dev, Campaign Archive ve Silicon Republic'ten backlinklere sahip startup ve inovasyon AB forum alan adı.",
    mozScore: 27,
    pageAuthority: 28,
    linkingDomains: 85,
    inboundLinks: "219+",
    followedLinks: "185+",
    category: "Startup'lar",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "219+",
    topBacklinks: ["europa.eu (DA 97)", "pages.dev (DA 91)", "campaign-archive.com (DA 84)", "siliconrepublic.com (DA 83)", "wko.at (DA 74)"]
  },
  {
    name: "life-envoll.eu",
    description: "Europa.eu, FranceInfo, Campaign Archive ve Midi Libre'den backlinklere sahip çevre ve doğa AB proje alan adı.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 54,
    inboundLinks: "67.8K+",
    followedLinks: "67.8K+",
    category: "Çevre",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "67.8K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "campaign-archive.com (DA 84)", "midilibre.fr (DA 81)", "developpement-durable.gouv.fr (DA 74)"]
  },
  // DA 26
  {
    name: "covenant-capacity.eu",
    description: "Europa.eu, BT, MyNewsDesk ve WWF Panda'dan backlinklere sahip AB anlaşma ve kapasite geliştirme alan adı.",
    mozScore: 26,
    pageAuthority: 24,
    linkingDomains: 85,
    inboundLinks: "2.6K+",
    followedLinks: "2.5K+",
    category: "İşbirliği",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.6K+",
    topBacklinks: ["europa.eu (DA 97)", "bt.com (DA 91)", "mynewsdesk.com (DA 89)", "campaign-archive.com (DA 84)", "panda.org (DA 77)"]
  },
  {
    name: "wetenschapbegintmetverwondering.nl",
    description: "RUG, NU.nl ve Ulusal Bilim Gündemleri'nden backlinklere sahip Hollanda bilim iletişimi alan adı.",
    mozScore: 27,
    pageAuthority: 24,
    linkingDomains: 52,
    inboundLinks: "97+",
    followedLinks: "81+",
    category: "Bilim",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "97+",
    topBacklinks: ["rug.nl (DA 84)", "nu.nl (DA 91)", "wetenschapsagenda.nl (DA 65)"]
  },
  {
    name: "khresmoi.eu",
    description: "MDPI, Springer, BioMedCentral ve Charles Üniversitesi'nden backlinklere sahip tıbbi arama AB proje alan adı.",
    mozScore: 27,
    pageAuthority: 32,
    linkingDomains: 184,
    inboundLinks: "31.7K+",
    followedLinks: "31.5K+",
    category: "Sağlık",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "31.7K+",
    topBacklinks: ["mdpi.com (DA 92)", "springer.com (DA 93)", "biomedcentral.com (DA 91)", "cuni.cz (DA 85)"]
  },
  {
    name: "sialon.eu",
    description: "BBC, Europa.eu ve The Conversation'dan backlinklere sahip AB sağlık araştırma alan adı.",
    mozScore: 24,
    pageAuthority: 25,
    linkingDomains: 66,
    inboundLinks: "145+",
    followedLinks: "125+",
    category: "Sağlık",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "145+",
    topBacklinks: ["bbc.co.uk (DA 95)", "europa.eu (DA 97)", "theconversation.com (DA 92)", "bbc.com (DA 94)"]
  },
  {
    name: "spaceinfoday.eu",
    description: "Wikipedia, Europa.eu, ESA, UCM ve ORF'dan backlinklere sahip AB uzay alan adı.",
    mozScore: 26,
    pageAuthority: 24,
    linkingDomains: 77,
    inboundLinks: "6.4K+",
    followedLinks: "6.3K+",
    category: "Teknoloji",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "6.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "esa.int (DA 91)", "ucm.es (DA 89)", "orf.at (DA 86)"]
  },
  {
    name: "beehive-erasmusplus.eu",
    description: "Pages.dev, Gameforge, GitBook ve üniversitelerden backlinklere sahip Erasmus+ eğitim AB alan adı.",
    mozScore: 26,
    pageAuthority: 34,
    linkingDomains: 452,
    inboundLinks: "6.2K+",
    followedLinks: "3.7K+",
    category: "Eğitim",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "6.2K+",
    topBacklinks: ["sakura.ne.jp (DA 93)", "pages.dev (DA 91)", "biglobe.ne.jp (DA 91)", "gameforge.com (DA 90)", "gitbook.io (DA 85)"]
  },
  {
    name: "dunyaendesiedefilm.nl",
    description: "Wikipedia (EN, JA), IPFS, FilmWeb ve Cinemagia'dan backlinklere sahip Hollanda film/medya alan adı.",
    mozScore: 26,
    pageAuthority: 23,
    linkingDomains: 102,
    inboundLinks: "214+",
    followedLinks: "180+",
    category: "Medya",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "214+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "ja.wikipedia.org (DA 93)", "ipfs.io (DA 84)", "filmweb.pl (DA 80)", "csfd.cz (DA 72)"]
  },
  {
    name: "102touchfm.co.uk",
    description: "Wikipedia, BBC, Bit.ly, Foursquare ve DigitalSpy'den backlinklere sahip İngiliz radyo/medya alan adı.",
    mozScore: 26,
    pageAuthority: 30,
    linkingDomains: 292,
    inboundLinks: "11.8K+",
    followedLinks: "8.8K+",
    category: "Medya",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "11.8K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "bbc.co.uk (DA 95)", "bit.ly (DA 94)", "foursquare.com (DA 92)", "digitalspy.com (DA 88)"]
  },
  {
    name: "tca2000.co.uk",
    description: "Wikipedia (EN, FR, JA, PL), Fandom ve DigitalSpy'den backlinklere sahip İngiliz alan adı.",
    mozScore: 26,
    pageAuthority: 29,
    linkingDomains: 180,
    inboundLinks: "662+",
    followedLinks: "460+",
    category: "İş",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "662+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "fr.wikipedia.org (DA 95)", "fandom.com (DA 94)", "ja.wikipedia.org (DA 93)", "pl.wikipedia.org (DA 93)"]
  },
  {
    name: "deparisnet.be",
    description: "Europa.eu, Wikipedia (ES, FR), Yumpu ve Google.be'den backlinklere sahip Belçika ağ alan adı.",
    mozScore: 26,
    pageAuthority: 28,
    linkingDomains: 135,
    inboundLinks: "710+",
    followedLinks: "445+",
    category: "Ağ",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "710+",
    topBacklinks: ["europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "jimdofree.com (DA 95)", "yumpu.com (DA 91)"]
  },
  // DA 25
  {
    name: "gastrosafezone.eu",
    description: "CNN, The Conversation, Pagina12 ve Elle Decor'dan backlinklere sahip tasarım ve konaklama güvenliği alan adı.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 47,
    inboundLinks: "66+",
    followedLinks: "58+",
    category: "Tasarım/Konaklama",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "66+",
    topBacklinks: ["cnn.com (DA 94)", "theconversation.com (DA 92)", "realty.rbc.ru (DA 88)", "pagina12.com.ar (DA 82)", "elledecor.com (DA 80)"]
  },
  {
    name: "hotelgiotto.eu",
    description: "Pages.dev, Wikitravel, Groupon UK ve Travellerspoint'ten backlinklere sahip konaklama alan adı.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 78,
    inboundLinks: "284+",
    followedLinks: "198+",
    category: "Konaklama",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "284+",
    topBacklinks: ["pages.dev (DA 91)", "wikitravel.org (DA 79)", "groupon.co.uk (DA 76)", "groupon.fr (DA 63)", "travellerspoint.com (DA 60)"]
  },
  {
    name: "recharge-green.eu",
    description: "Google Groups, MDPI, BioMedCentral ve FAO'dan backlinklere sahip yeşil enerji ve şarj AB alan adı.",
    mozScore: 25,
    pageAuthority: 28,
    linkingDomains: 128,
    inboundLinks: "5.5K+",
    followedLinks: "5.5K+",
    category: "Enerji",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "5.5K+",
    topBacklinks: ["groups.google.com (DA 93)", "mdpi.com (DA 92)", "biomedcentral.com (DA 91)", "fao.org (DA 91)", "bayern.de (DA 89)"]
  },
  {
    name: "brave-project.eu",
    description: "Europa.eu, El Diario, Stuttgarter Zeitung ve üniversitelerden backlinklere sahip AB proje alan adı.",
    mozScore: 24,
    pageAuthority: 24,
    linkingDomains: 73,
    inboundLinks: "194+",
    followedLinks: "133+",
    category: "Projeler",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "194+",
    topBacklinks: ["europa.eu (DA 97)", "eldiario.es (DA 91)", "stuttgarter-zeitung.de (DA 81)", "techxplore.com (DA 79)", "uah.es (DA 70)"]
  },
  {
    name: "aaliance.eu",
    description: "Europa.eu, Cambridge, Springer, Heise ve EurActiv'den backlinklere sahip sağlık/yaşlı bakımı AB alan adı.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 69,
    inboundLinks: "227+",
    followedLinks: "163+",
    category: "Sağlık",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "227+",
    topBacklinks: ["europa.eu (DA 97)", "cambridge.org (DA 93)", "springer.com (DA 93)", "heise.de (DA 91)", "euractiv.com (DA 84)"]
  },
  {
    name: "unamec.be",
    description: "OUP, Yumpu, KU Leuven ve UGent'ten backlinklere sahip Belçika tıbbi/sağlık alan adı.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 93,
    inboundLinks: "188+",
    followedLinks: "150+",
    category: "Sağlık",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "188+",
    topBacklinks: ["oup.com (DA 93)", "yumpu.com (DA 91)", "kuleuven.be (DA 83)", "ugent.be (DA 76)", "justlanded.com (DA 76)"]
  },
  {
    name: "josephines.be",
    description: "Mixcloud, De Standaard ve Elle.be'den backlinklere sahip Belçika yaşam tarzı/konaklama alan adı.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 69,
    inboundLinks: "175+",
    followedLinks: "145+",
    category: "Yaşam Tarzı",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "175+",
    topBacklinks: ["mixcloud.com (DA 92)", "standaard.be (DA 76)", "elle.be (DA 62)", "outtraveler.com (DA 55)", "seniorennet.be (DA 54)"]
  },
  {
    name: "front-vosges-14-18.eu",
    description: "Wikipedia (FR, DE), StackExchange, FranceInfo ve INRIA'dan backlinklere sahip tarihi I. Dünya Savaşı anıt alan adı.",
    mozScore: 25,
    pageAuthority: 27,
    linkingDomains: 122,
    inboundLinks: "443+",
    followedLinks: "318+",
    category: "Tarih",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "443+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "stackexchange.com (DA 91)", "franceinfo.fr (DA 91)", "inria.fr (DA 83)"]
  },
  {
    name: "serletproject.eu",
    description: "Apple.com, Bit.ly, RTL.fr ve Yunanca Wikipedia'dan backlinklere sahip AB proje alan adı.",
    mozScore: 25,
    pageAuthority: 30,
    linkingDomains: 491,
    inboundLinks: "2K+",
    followedLinks: "1.9K+",
    category: "İnovasyon",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "2K+",
    topBacklinks: ["apple.com (DA 99)", "bit.ly (DA 94)", "home.pl (DA 93)", "cocolog-nifty.com (DA 90)", "rtl.fr (DA 89)"]
  },
  {
    name: "landmark-project.eu",
    description: "Europa.eu, Wikipedia DE, Cambridge ve Yumpu'dan backlinklere sahip AB proje alan adı.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 161,
    inboundLinks: "1.1K+",
    followedLinks: "954+",
    category: "Projeler",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "1.1K+",
    topBacklinks: ["europa.eu (DA 97)", "goo.gl (DA 95)", "de.wikipedia.org (DA 94)", "cambridge.org (DA 93)", "yumpu.com (DA 91)"]
  },
  {
    name: "tandemtech.be",
    description: "Medium, TinyURL, Bit.ly, Tweakers ve Knack'ten backlinklere sahip Belçika teknoloji alan adı.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 61,
    inboundLinks: "613+",
    followedLinks: "565+",
    category: "Teknoloji",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "613+",
    topBacklinks: ["medium.com (DA 95)", "tinyurl.com (DA 94)", "bit.ly (DA 94)", "about.me (DA 92)", "pages.dev (DA 91)"]
  },
  {
    name: "happyvpro.nl",
    description: "TinyURL, Ello, XS4ALL, Emerce ve VPRO'dan backlinklere sahip Hollanda medya alan adı.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 74,
    inboundLinks: "1.5K+",
    followedLinks: "1.4K+",
    category: "Medya",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "1.5K+",
    topBacklinks: ["tinyurl.com (DA 94)", "ello.co (DA 85)", "xs4all.nl (DA 79)", "emerce.nl (DA 69)", "vpro.nl (DA 68)"]
  },
  {
    name: "edlupt.eu",
    description: "Pinterest, ANSA, RUG Groningen ve İtalyan üniversitelerinden backlinklere sahip AB alan adı.",
    mozScore: 25,
    pageAuthority: 28,
    linkingDomains: 192,
    inboundLinks: "119.7K+",
    followedLinks: "119.6K+",
    category: "Genel",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "119.7K+",
    topBacklinks: ["pinterest.com (DA 94)", "ansa.it (DA 91)", "rug.nl (DA 81)", "cnr.it (DA 75)", "unito.it (DA 70)"]
  },
  {
    name: "xcycle-h2020.eu",
    description: "Europa.eu, Springer, MDPI ve Frontiers'dan backlinklere sahip AB H2020 mobilite alan adı.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 145,
    inboundLinks: "275+",
    followedLinks: "202+",
    category: "Mobilite",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "275+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "mdpi.com (DA 92)", "frontiersin.org (DA 92)", "euractiv.com (DA 84)"]
  },
  {
    name: "heinekenthecity.nl",
    description: "Dezeen, Symbaloo, Fodors ve VPRO'dan backlinklere sahip Hollanda şehir/yaşam tarzı alan adı.",
    mozScore: 24,
    pageAuthority: 18,
    linkingDomains: 52,
    inboundLinks: "214+",
    followedLinks: "205+",
    category: "Yaşam Tarzı",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "214+",
    topBacklinks: ["dezeen.com (DA 88)", "symbaloo.com (DA 84)", "fodors.com (DA 82)", "vpro.nl (DA 68)", "clara.net (DA 65)"]
  },
  // DA 24
  {
    name: "vos-photos.eu",
    description: "E-Monsite, JournalDuNet, CNRS ve Wikipedia SV'den backlinklere sahip fotoğrafçılık AB alan adı.",
    mozScore: 24,
    pageAuthority: 31,
    linkingDomains: 578,
    inboundLinks: "4.6K+",
    followedLinks: "3.8K+",
    category: "Fotoğrafçılık",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "4.6K+",
    topBacklinks: ["e-monsite.com (DA 92)", "home.blog (DA 91)", "journaldunet.com (DA 91)", "cnrs.fr (DA 90)", "allthatsinteresting.com (DA 85)"]
  },
  {
    name: "eulis.eu",
    description: "Wikipedia (EN, ES, PT, FR), Europa.eu ve MDPI'dan backlinklere sahip AB alan adı.",
    mozScore: 24,
    pageAuthority: 33,
    linkingDomains: 246,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Genel",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "1.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "pt.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)"]
  },
  {
    name: "maribe.eu",
    description: "Europa.eu, The Conversation, MDPI ve Bristol Üniversitesi'nden backlinklere sahip denizcilik AB alan adı.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 90,
    inboundLinks: "146+",
    followedLinks: "115+",
    category: "Denizcilik",
    price: "€125",
    backlinks: "146+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "mdpi.com (DA 92)", "siliconrepublic.com (DA 83)", "bristol.ac.uk (DA 78)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "200jaarstaten-generaal.nl",
    description: "NOS, Leiden Üniversitesi ve Temsilciler Meclisi'nden backlinklere sahip Hollanda hükümet alan adı.",
    mozScore: 22,
    pageAuthority: 21,
    linkingDomains: 37,
    inboundLinks: "150+",
    followedLinks: "136+",
    category: "Hükümet/Kültür",
    price: "€125",
    backlinks: "150+",
    topBacklinks: ["nos.nl (DA 90)", "universiteitleiden.nl (DA 82)", "transparent.com (DA 76)", "tweedekamer.nl (DA 64)", "rd.nl (DA 62)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eu-thor.eu",
    description: "Wikipedia (EN, FR, DE), Europa.eu, Yumpu ve WHOI'den backlinklere sahip AB proje alan adı.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 156,
    inboundLinks: "18.4K+",
    followedLinks: "18.3K+",
    category: "Projeler",
    price: "€125",
    backlinks: "18.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "yumpu.com (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eccomascfd2006.nl",
    description: "TU Delft, Southampton, Liverpool ve NTNU'dan backlinklere sahip Hollanda teknik alan adı.",
    mozScore: 23,
    pageAuthority: 25,
    linkingDomains: 52,
    inboundLinks: "371+",
    followedLinks: "352+",
    category: "Teknoloji",
    price: "€125",
    backlinks: "371+",
    topBacklinks: ["tudelft.nl (DA 85)", "soton.ac.uk (DA 85)", "uu.se (DA 83)", "liverpool.ac.uk (DA 83)", "ntnu.no (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "mbelgique.be",
    description: "Wikipedia FR, BFMTV, Heise, NU.nl ve Europe1'den backlinklere sahip Belçika ulusal alan adı.",
    mozScore: 23,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "113+",
    followedLinks: "87+",
    category: "Genel",
    price: "€125",
    backlinks: "113+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "bfmtv.com (DA 92)", "heise.de (DA 91)", "nu.nl (DA 91)", "europe1.fr (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "lifemanev.eu",
    description: "MDPI, ITACYL ve CSIC'den backlinklere sahip sürdürülebilir tarım hakkında AB proje alan adı.",
    mozScore: 23,
    pageAuthority: 24,
    linkingDomains: 40,
    inboundLinks: "66+",
    followedLinks: "59+",
    category: "Tarım",
    price: "€125",
    backlinks: "66+",
    topBacklinks: ["mdpi.com (DA 92)", "itacyl.es (DA 59)", "csic.es (DA 78)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "flarum.eu",
    description: "Wikipedia (EN, ES, PT, FR, DE, RU), Creative Commons'dan backlinklere sahip kültür alan adı.",
    mozScore: 22,
    pageAuthority: 37,
    linkingDomains: 810,
    inboundLinks: "4.9K+",
    followedLinks: "4.7K+",
    category: "Kültür",
    price: "€125",
    backlinks: "4.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "ru.wikipedia.org (DA 94)", "creativecommons.org (DA 94)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "escmalta2018.eu",
    description: "ETH Zürich, Azure, Copernicus, CSIC ve Monash Üniversitesi'nden backlinklere sahip ESC etkinlik alan adı.",
    mozScore: 22,
    pageAuthority: 25,
    linkingDomains: 102,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "Etkinlikler",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["ethz.ch (DA 89)", "azure.com (DA 84)", "copernicus.eu (DA 83)", "csic.es (DA 78)", "monash.edu (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "waterpipp.eu",
    description: "Europa.eu, Bit.ly, Ask.com ve Campaign Archive'dan backlinklere sahip su ve çevre AB proje alan adı.",
    mozScore: 22,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "1.2K+",
    followedLinks: "1.1K+",
    category: "Çevre",
    price: "€125",
    backlinks: "1.2K+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "ask.com (DA 88)", "campaign-archive.com (DA 84)", "worldwidetopsite.com (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "artsalivewales.org.uk",
    description: "The Guardian, Mirror, Eventbrite ve Wales Online'dan backlinklere sahip Galler sanat/kültür alan adı.",
    mozScore: 22,
    pageAuthority: 27,
    linkingDomains: 116,
    inboundLinks: "863+",
    followedLinks: "752+",
    category: "Sanat",
    price: "€125",
    backlinks: "863+",
    topBacklinks: ["theguardian.com (DA 94)", "mirror.co.uk (DA 94)", "eventbrite.co.uk (DA 91)", "walesonline.co.uk (DA 90)", "constantcontact.com (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  // DA 21
  {
    name: "stationlansingerland-zoetermeer.nl",
    description: "Wikipedia (FR, NL), NS, Nieuws.nl ve ProRail'den backlinklere sahip Hollanda ulaşım/istasyon alan adı.",
    mozScore: 21,
    pageAuthority: 24,
    linkingDomains: 62,
    inboundLinks: "187+",
    followedLinks: "134+",
    category: "Ulaşım",
    price: "€79",
    backlinks: "187+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "nl.wikipedia.org (DA 91)", "ns.nl (DA 72)", "nieuws.nl (DA 63)", "prorail.nl (DA 55)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "oramed-fp7.eu",
    description: "Europa.eu, Springer, IIT ve FGOV.be'den backlinklere sahip tıbbi araştırma AB-FP7 proje alan adı.",
    mozScore: 21,
    pageAuthority: 24,
    linkingDomains: 60,
    inboundLinks: "130+",
    followedLinks: "109+",
    category: "Araştırma",
    price: "€79",
    backlinks: "130+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "iit.edu (DA 75)", "fgov.be (DA 72)", "upc.edu (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "ismagazine.nl",
    description: "UNESCO, WUR ve Startpagina'dan backlinklere sahip Hollanda dergi/medya alan adı.",
    mozScore: 21,
    pageAuthority: 20,
    linkingDomains: 56,
    inboundLinks: "496+",
    followedLinks: "339+",
    category: "Medya",
    price: "€79",
    backlinks: "496+",
    topBacklinks: ["unesco.org (DA 93)", "wur.nl (DA 71)", "jouwweb.nl (DA 63)", "startpagina.nl (DA 63)", "fok.nl (DA 59)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "wbetting.co.uk",
    description: "OVH, Joomla.org, WSU ve CSIC'den backlinklere sahip İngiliz bahis/oyun alan adı.",
    mozScore: 21,
    pageAuthority: 41,
    linkingDomains: 468,
    inboundLinks: "280.6K+",
    followedLinks: "198.3K+",
    category: "Oyun",
    price: "€79",
    backlinks: "280.6K+",
    topBacklinks: ["ovh.net (DA 92)", "joomla.org (DA 92)", "wsu.edu (DA 87)", "csic.es (DA 78)", "knows.nl (DA 65)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "fantasticgymnastics.nl",
    description: "LiveInternet, Pages.dev, XSRV ve Toolforge'dan backlinklere sahip Hollanda spor/jimnastik alan adı.",
    mozScore: 21,
    pageAuthority: 29,
    linkingDomains: 246,
    inboundLinks: "7.6K+",
    followedLinks: "7.5K+",
    category: "Spor",
    price: "€79",
    backlinks: "7.6K+",
    topBacklinks: ["liveinternet.ru (DA 93)", "pages.dev (DA 91)", "xsrv.jp (DA 89)", "toolforge.org (DA 80)", "worldwidetopsite.com (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  {
    name: "nanostarproject.eu",
    description: "Springer, Sapo.pt, Pages.dev ve üniversitelerden (UPM, UC3M) backlinklere sahip nanoteknoloji AB proje alan adı.",
    mozScore: 21,
    pageAuthority: 28,
    linkingDomains: 76,
    inboundLinks: "338+",
    followedLinks: "306+",
    category: "Teknoloji",
    price: "€79",
    backlinks: "338+",
    topBacklinks: ["springer.com (DA 93)", "sapo.pt (DA 93)", "pages.dev (DA 91)", "upm.es (DA 78)", "uc3m.es (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
  // DA 20
  {
    name: "espresso-project.eu",
    description: "Europa.eu, Medium, MDPI ve Telecom TV'den backlinklere sahip akıllı şehir ve mobilite proje alan adı.",
    mozScore: 20,
    pageAuthority: 28,
    linkingDomains: 81,
    inboundLinks: "191+",
    followedLinks: "146+",
    category: "Akıllı Şehir",
    price: "€79",
    backlinks: "191+",
    topBacklinks: ["europa.eu (DA 97)", "medium.com (DA 95)", "mdpi.com (DA 92)", "campaign-archive.com (DA 84)", "telecomtv.com (DA 67)"],
    stripePaymentLink: "https://buy.stripe.com/7sY28rdlR9CK2exf989Zm05"
  },
];

const PremiumDomainsTR = () => {
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
      const firstError = Object.values(errorResult.errors)[0] || "Lütfen girişinizi kontrol edin";
      toast({
        title: "Lütfen form hatalarını düzeltin",
        description: firstError,
        variant: "destructive"
      });
      return;
    }

    const { data } = validation;
    
    // Build safe mailto URL with sanitized data
    const subject = `Premium Domain Talebi: ${data.domain}`;
    const body = `Ad: ${data.name}\nE-posta: ${data.email}\nDomain: ${data.domain}\n\nMesaj:\n${data.message || ""}`;
    
    window.location.href = buildSafeMailtoUrl("support@iaee.eu", subject, body);
    
    toast({
      title: "Talep gönderiliyor",
      description: "E-posta istemciniz talebi göndermek için açılacak."
    });
  };

  const handleDomainInquiry = (domainName: string) => {
    setFormData(prev => ({ ...prev, domain: domainName }));
    scrollToSection("contact");
  };

  return (
    <>
      <Helmet>
        <html lang="tr" />
        <title>Backlink'li Premium Süresi Dolmuş Alan Adları | Yüksek Otorite & SEO Değeri</title>
        <meta name="description" content="Backlink'li süresi dolmuş alan adları mı satın almak istiyorsunuz? Yüksek otorite ve SEO değerine sahip güvenilir süresi dolmuş domain'ler. Daha hızlı Google sıralamaları için premium alan adları satın alın. Hemen mevcut." />
        <meta name="keywords" content="süresi dolmuş alan adı satın al, backlink'li süresi dolmuş alan adları, otoriteli alan adı, güvenilir süresi dolmuş domain'ler, premium alan adı satın al, SEO değerli alan adı, eski alan adı linklerle, satılık en iyi alan adları" />
        <link rel="canonical" href="https://www.iaee.eu/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri" />
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
        <meta property="og:title" content="Backlink'li Premium Süresi Dolmuş Alan Adları | Yüksek Otorite & SEO Değeri" />
        <meta property="og:description" content="Yüksek otorite ve SEO değerine sahip güvenilir süresi dolmuş domain'ler. Hemen mevcut." />
        <meta property="og:url" content="https://www.iaee.eu/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="IAEE Premium Domains" />
        <meta property="og:image" content="https://www.iaee.eu/images/premium-domains-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:alt" content="Premium Alan Adları - Yüksek Otorite Domainler" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Backlink'li Premium Süresi Dolmuş Alan Adları" />
        <meta name="twitter:description" content="Yüksek otorite ve SEO değerine sahip güvenilir domain'ler. Hemen mevcut." />
        <meta name="twitter:image" content="https://www.iaee.eu/images/premium-domains-og.jpg" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.iaee.eu/#organization",
                "name": "IAEE Premium Domains",
                "url": "https://www.iaee.eu",
                "description": "Yüksek otorite ve SEO değerine sahip premium süresi dolmuş domain'lerde uzman"
              },
              {
                "@type": "WebPage",
                "url": "https://www.iaee.eu/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri",
                "name": "Backlink'li Premium Süresi Dolmuş Alan Adları | Yüksek Otorite & SEO Değeri",
                "inLanguage": "tr"
              },
              {
                "@type": "ItemList",
                "name": "Premium Süresi Dolmuş Alan Adları",
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
                  {"@type": "Question", "name": "Süresi dolmuş domain nedir?", "acceptedAnswer": {"@type": "Answer", "text": "Süresi dolmuş domain, önceki sahibi tarafından yenilenmeyen ve artık kayıt için mevcut olan alan adıdır."}},
                  {"@type": "Question", "name": "Neden backlinkler önemlidir?", "acceptedAnswer": {"@type": "Answer", "text": "Backlinkler Google için en önemli sıralama faktörlerinden biridir. Kaliteli backlinke sahip domainler arama sonuçlarında avantajlıdır."}},
                  {"@type": "Question", "name": "301 yönlendirme SEO için nasıl çalışır?", "acceptedAnswer": {"@type": "Answer", "text": "301 yönlendirme, ziyaretçileri ve arama motorlarını eski domainden yeni web sitenize kalıcı olarak yönlendirir ve link değerini aktarır."}}
                ]
              }
            ]
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Language Switcher */}
        <LanguageSwitcher currentLanguage="tr" />
        
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/tr/premium-suresi-dolmus-alan-adlari-yuksek-otorite-seo-degeri" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 flex-shrink-0" />
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent hover:from-amber-300 hover:to-amber-500 transition-all truncate">
                Premium Domainler
              </span>
            </RouterLink>
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <RouterLink to="/expireddomainnames/tr/premium-suresi-dolmus-alan-adlari-yuksek-otorite-seo-degeri" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
                <Home className="h-4 w-4" />
                Ana Sayfa
              </RouterLink>
              <button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Domainler
              </button>
              <button onClick={() => scrollToSection("why-premium")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Neden Premium?
              </button>
              <button onClick={() => scrollToSection("seo-redirects")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                SEO & Yönlendirmeler
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                SSS
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold"
              >
                İletişim
              </Button>
            </nav>
            <Button 
              onClick={() => scrollToSection("domains")}
              className="md:hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-xs px-3 py-2"
            >
              Domainler
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
                Özel Premium Domain Koleksiyonu
              </Badge>
              
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Backlink'li Premium Süresi Dolmuş Alan Adları Satın Alın Yüksek Otorite & SEO Değeri
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Yıllar boyunca otorite kazanmış alan adlarıyla çevrimiçi varlığınızı güçlendirin. 
                Daha hızlı sıralamalar, güçlü backlinkler ve doğrudan SEO avantajları için ideal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("domains")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-105"
                >
                  Domainleri Görüntüle
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("why-premium")}
                  className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6"
                >
                  Daha Fazla Bilgi
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2">
                {[
                  { label: "Ortalama MOZ Skoru", value: "29+" },
                  { label: "Premium Domain", value: "110+" },
                  { label: "Yıllık Deneyim", value: "10+" },
                  { label: "Memnun Müşteri", value: "500+" }
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
                Mevcut Domainler
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Satılık Premium Alan Adları
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Her domain, MOZ otoritesi, backlink profili ve SEO potansiyeline göre özenle seçilmiştir. 
                <strong className="text-white">Süresi dolmuş alan adı satın almak</strong> mı istiyorsunuz veya <strong className="text-white">güvenilir süresi dolmuş domain'ler</strong> mi arıyorsunuz? Teklifimizi aşağıda görüntüleyin.
              </p>
            </div>
            
            {/* SEO Intro Text */}
            <div className="max-w-5xl mx-auto mb-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">Gerçek SEO değerine sahip bir alan adı mı arıyorsunuz?</strong> Bizimle kalite ve geçmiş açısından dikkatli bir şekilde kontrol edilmiş, <strong className="text-amber-400">backlink'li süresi dolmuş alan adları</strong> ve yüksek otorite satın alırsınız. Süresi dolmuş bir domain ile sıfırdan başlamazsınız, mevcut linklerden, güvenden ve çevrimiçi geçmişten hemen yararlanırsınız.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-amber-400">.EU ve diğer Avrupa alan uzantılarında uzmanlaşıyoruz</strong> ve Avrupa web adları segmentinde kendimizi açıkça farklılaştırıyoruz.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Bu süresi dolmuş domain'ler <strong className="text-amber-400">saygın şirketler, medya kuruluşları ve devlet kurumlarından</strong> mevcut backlinklere sahiptir — normal web siteleri için elde edilmesi çok zor veya imkansız olan temel linkler. Süresi dolmuş domain'ler, üst düzey pazarlamacıların, ajansların ve yatırımcıların yıllardır diğerlerinden daha hızlı büyümek için kullandıkları stratejik bir avantajdır.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Süresi dolmuş alan adlarının yanı sıra, <strong className="text-amber-400">premium alan adları</strong> da sunuyoruz: marka değeri ve ticari potansiyele sahip kısa, güçlü isimler. İster web sitesi, ister web mağazası veya SEO projesi başlatıyor olun — <strong className="text-white">otoriteli bir alan adı</strong> size Google'da net bir avantaj sağlar.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                <strong className="text-white">Popüler aramalar:</strong> backlink'li süresi dolmuş alan adı satın al • güvenilir süresi dolmuş domain'ler • otoriteli süresi dolmuş alan adı • premium alan adı satın al • SEO değerli alan adı • linkli eski alan adı • satılık en iyi alan adları
              </p>
            </div>

            {/* VAT Notice */}
            <div className="max-w-5xl mx-auto mb-10 text-center">
              <p className="text-sm text-slate-300 font-medium bg-slate-800/40 border border-slate-700/40 rounded-lg px-4 py-3 inline-block">
                <span className="text-amber-400 font-semibold">KDV bilgisi:</span> Fiyatlar AB içindeki özel müşteriler için KDV hariçtir. AB içindeki kurumsal müşteriler ters KDV uygulayabilir. AB dışındaki müşteriler için KDV alınmaz.
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
                      <img src="/images/premium-domains-logo-tr.png" alt={`${domain.name} premium alan adı`} className="w-20 h-auto object-contain" />
                    </div>
                    <div className="flex items-start justify-between gap-2">
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
                          <span>Backlinkler: {domain.backlinks}</span>
                        </div>
                      </div>
                      
                      {/* Extra stats for domains with detailed info */}
                      {domain.pageAuthority && (
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Sayfa Otoritesi:</span>
                            <span className="text-white ml-1 font-medium">{domain.pageAuthority}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Bağlantı Veren Domain:</span>
                            <span className="text-white ml-1 font-medium">{domain.linkingDomains}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Gelen Linkler:</span>
                            <span className="text-white ml-1 font-medium">{domain.inboundLinks}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">Takip Edilen Linkler:</span>
                            <span className="text-white ml-1 font-medium">{domain.followedLinks}</span>
                          </div>
                        </div>
                      )}
                      
                      {/* Top backlinks */}
                      {domain.topBacklinks && domain.topBacklinks.length > 0 && (
                        <div className="text-[10px] sm:text-xs">
                          <span className="text-slate-500 block mb-1">En İyi Backlinkler:</span>
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
                          <span className="text-slate-500 block mb-1">Uygun Kullanım Alanları:</span>
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
                        <span className="text-xs sm:text-sm font-medium text-slate-300">Fiyat</span>
                        <span className="text-base sm:text-lg font-bold text-amber-400">{domain.price}</span>
                      </div>
                      
                      {!domain.stripePaymentLink ? (
                        <div className="flex flex-col gap-2 sm:gap-3">
                          <div 
                            className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#F59E0B] text-slate-950 font-bold rounded-md shadow-md text-sm sm:text-base md:text-lg"
                          >
                            Şimdi Satın Al
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
                                Stripe ile güvenli ödeme
                                <br />
                                Otomatik olarak yerel para biriminize dönüştürülür
                              </p>
                              <p className="text-[8px] sm:text-[10px] text-slate-400 leading-tight mt-2 sm:mt-3">
                                Ödeme sonrasında transfer kodunu (EPP/Auth code) 24 saat içinde e-posta adresinize alacaksınız.
                                <br />
                                Spam klasörünüzü de kontrol edin.
                              </p>
                              <a href="#domain-transfer" className="text-[8px] sm:text-[10px] text-amber-400 hover:text-amber-300 underline mt-1.5 sm:mt-2">
                                Transfer nasıl çalışır?
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
                            Şimdi Satın Al
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
                                Stripe ile güvenli ödeme
                                <br />
                                Otomatik olarak yerel para biriminize dönüştürülür
                              </p>
                              <p className="text-[8px] sm:text-[10px] text-slate-400 leading-tight mt-2 sm:mt-3">
                                Ödeme sonrasında transfer kodunu (EPP/Auth code) 24 saat içinde e-posta adresinize alacaksınız.
                                <br />
                                Spam klasörünüzü de kontrol edin.
                              </p>
                              <a href="#domain-transfer" className="text-[8px] sm:text-[10px] text-amber-400 hover:text-amber-300 underline mt-1.5 sm:mt-2">
                                Transfer nasıl çalışır?
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
                Stratejik Avantaj
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Neden Premium Alan Adları?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Yüksek MOZ otoritesine sahip premium alan adları, arama sonuçlarında size büyük bir avantaj sağlayan stratejik bir yatırımdır.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Google'da Daha Hızlı Sıralama",
                  description: "Mevcut otoriteye sahip domainler yeni domainlerden daha hızlı sıralanır. Google, kanıtlanmış bir geçmişe sahip web sitelerine güvenir."
                },
                {
                  icon: Shield,
                  title: "Google'dan Daha Fazla Güven",
                  description: "Yıllık geçmişe ve kaliteli backlinklere sahip bir domain, Google tarafından daha güvenilir olarak görülür ve daha yüksek sıralamalar alır."
                },
                {
                  icon: Target,
                  title: "Daha Yüksek Tıklama Oranları (CTR)",
                  description: "Premium alan adları kullanıcılarda güven uyandırır, bu da arama sonuçlarında ve reklamlarda daha yüksek tıklama oranlarına yol açar."
                },
                {
                  icon: Zap,
                  title: "Anında SEO Avantajı",
                  description: "Otorite oluşturmak için yıllarca beklemek yerine, domain'in mevcut SEO değerinden hemen faydalanırsınız."
                },
                {
                  icon: Globe,
                  title: "Doğrudan Yazma Trafiği",
                  description: "Akılda kalıcı premium alan adları, domaini doğrudan tarayıcılarına yazan kullanıcılardan doğrudan trafik üretir."
                },
                {
                  icon: Award,
                  title: "Sürdürülebilir SEO Yatırımı",
                  description: "Premium domain, çevrimiçi varlığınız büyüdükçe ve otorite arttıkça değeri artan bir varlıktır."
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
                    MOZ Domain Authority'nin Gücü
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    MOZ Domain Authority (DA), bir web sitesinin arama motorlarında ne kadar iyi sıralanacağını tahmin eden 1-100 arasında bir puandır. 
                    DA 30+ olan domainler mükemmel bir başlangıç noktası sunurken, DA 50+ domainler sektörlerinde lider olarak kabul edilir. 
                    Bu otorite düzeylerine organik olarak ulaşmak normalde yıllar alır ve link oluşturma, içerik oluşturma ve teknik SEO'ya önemli yatırım gerektirir.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { range: "DA 20-29", label: "Gelişmekte", color: "text-blue-400" },
                      { range: "DA 30-39", label: "Güçlü", color: "text-emerald-400" },
                      { range: "DA 40+", label: "Mükemmel", color: "text-amber-400" }
                    ].map((item, index) => (
                      <div key={index} className="text-center p-4 bg-slate-800/50 rounded-lg">
                        <div className={`text-2xl font-bold ${item.color}`}>{item.range}</div>
                        <div className="text-slate-400 text-sm mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEO & Redirects Section */}
        <section id="seo-redirects" className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30">
                  <TrendingUp className="w-4 h-4 mr-2 inline" />
                  SEO Stratejisi
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Premium Domainlerinizi SEO için Kullanın
                </h2>
              </div>
              
              <div className="space-y-8">
                <Card className="bg-slate-800/50 border-slate-700/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <ArrowRight className="h-6 w-6 text-amber-400" />
                      301 Yönlendirme Stratejisi
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      Premium bir domainden ana sitenize 301 yönlendirme kurarak, domain'in backlink otoritesini doğrudan mevcut web sitenize aktarabilirsiniz. 
                      Bu, organik SEO büyümesini hızlandırmanın en etkili yollarından biridir.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle className="h-4 w-4" />
                        <span>Link otoritesini aktarır</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle className="h-4 w-4" />
                        <span>Sıralamaları artırır</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle className="h-4 w-4" />
                        <span>Google tarafından onaylandı</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <Globe className="h-6 w-6 text-amber-400" />
                      Yeni Web Sitesi Başlatın
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Premium domaini yepyeni bir web sitesi veya web mağazası için kullanın. Domain'in mevcut otoritesi, yeni içeriğinizin Google'da daha hızlı dizine alınmasına ve sıralanmasına yardımcı olur.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <Target className="h-6 w-6 text-amber-400" />
                      Özel Blog Ağı (PBN)
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Deneyimli SEO uzmanları, premium domainleri ana sitelerine link veren kaliteli içerik siteleri oluşturmak için kullanır. Bu strateji dikkatli uygulama gerektirir ancak önemli SEO avantajları sağlayabilir.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                  SSS
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Sıkça Sorulan Sorular
                </h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Premium domain nedir?",
                    answer: "Premium domain, yüksek ticari değere, güçlü backlinklere veya marka potansiyeline sahip alan adıdır. Bu domainler genellikle yıllarca çevrimiçi geçmişe sahiptir ve Google tarafından güvenilir olarak görülür."
                  },
                  {
                    question: "Süresi dolmuş domain nedir?",
                    answer: "Süresi dolmuş domain, önceki sahibi tarafından yenilenmemiş ve tekrar satın alınabilir hale gelmiş bir alan adıdır. Bu domainler genellikle hala değerli backlinklere ve otorite puanlarına sahiptir."
                  },
                  {
                    question: "MOZ Domain Authority (DA) nedir?",
                    answer: "MOZ DA, bir web sitesinin arama motorlarında ne kadar iyi sıralanacağını tahmin eden 1-100 arasında bir puandır. Daha yüksek DA, genellikle daha iyi sıralama potansiyeli anlamına gelir."
                  },
                  {
                    question: "Satın aldığım domaini nasıl alırım?",
                    answer: "Ödeme sonrasında 24 saat içinde e-posta adresinize bir transfer kodu (EPP/Auth code) gönderilir. Bu kodu kullanarak domaini kendi kayıt kuruluşunuza veya hosting sağlayıcınıza aktarabilirsiniz."
                  },
                  {
                    question: "301 yönlendirme ne işe yarar?",
                    answer: "301 yönlendirme, bir domainin tüm trafiğini ve SEO değerini başka bir URL'ye kalıcı olarak aktarır. Bu, premium domain'in otoritesinden mevcut web sitenizin yararlanmasını sağlar."
                  },
                  {
                    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
                    answer: "Stripe aracılığıyla Visa, Mastercard, PayPal, Apple Pay, Google Pay, Amazon Pay ve Klarna dahil tüm büyük ödeme yöntemlerini kabul ediyoruz."
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
                    <h3 className="font-semibold">Kapsamlı Rehber: Süresi Dolmuş Alan Adları & SEO Hakkında 35 Soru</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 pb-6 leading-relaxed">
                    <div className="space-y-8 whitespace-pre-line">
                      {[
                        {
                          question: "1. Başlangıç için hangi alan adını satın almalıyım?",
                          answer: "Başlangıç olarak, hatırlaması kolay, ne yaptığınızı açıkça gösteren ve güven uyandıran bir alan adı seçmelisiniz. Birçok yeni başlayan \"hangi alan adını satın almalıyım\" diye arar ve otomatik olarak yeni domainlere yönelirken, güvenilir bir süresi dolmuş alan adı genellikle zaten oluşturulmuş otorite ve değere sahiptir."
                        },
                        {
                          question: "2. Yeni alan adı ile süresi dolmuş alan adı arasındaki fark nedir?",
                          answer: "Yeni alan adının geçmişi yoktur ve tamamen sıfırdan başlar. Süresi dolmuş alan adı daha önce kayıt edilmiştir ve hala backlinklere, otoriteye ve Google'da güvene sahip olabilir. Bu, süresi dolmuş alan adını genellikle SEO ve görünürlük için daha çekici kılar."
                        },
                        {
                          question: "3. Yeni alan adı mı yoksa süresi dolmuş alan adı mı satın almak daha iyi?",
                          answer: "\"Yeni alan adı mı süresi dolmuş alan adı mı\" arayanlar genellikle hız ve sonuçları karşılaştırıyor. Markalama için yeni bir isim işe yarayabilir, ancak Google'da daha hızlı bulunmak için iyi bir süresi dolmuş alan adı genellikle net bir avantaj sağlar."
                        },
                        {
                          question: "4. Yeni web sitem neden Google'da bu kadar kötü sıralama alıyor?",
                          answer: "Yeni web sitelerinin henüz güvenilirliklerini oluşturması gerekir. Backlinkler ve geçmiş olmadan, bu genellikle aylar alır. İyi linklere sahip süresi dolmuş bir alan adı, tamamen sıfırdan başlamak zorunda kalmamayı sağlayabilir."
                        },
                        {
                          question: "5. Süresi dolmuş alan adı satın almak güvenli mi?",
                          answer: "Evet, kontrol edilmiş ve güvenilir bir süresi dolmuş alan adı olduğu sürece. Risk \"süresi dolmuş\" olmasında değil, spam, kötüye kullanım veya kötü backlinkler açısından kontrol edilmemiş domainlerdedir."
                        },
                        {
                          question: "6. İyi backlinklere sahip alan adı ne anlama gelir?",
                          answer: "İyi backlinklere sahip alan adı, gerçek, ilgili web sitelerinden referanslara sahiptir. Bu linkler, arama motorlarında otorite ve güven sağlar ve SEO performansı için önemlidir."
                        },
                        {
                          question: "7. Alan adı satın alırken backlinkler neden önemli?",
                          answer: "Backlinkler, Google'ın en önemli sıralama faktörlerinden biridir. \"SEO alan adı satın al\" araması yapıyorsanız, aslında zaten güven oluşturmuş bir domain arıyorsunuz — iyi bir süresi dolmuş alan adının tam olarak sunduğu şey."
                        },
                        {
                          question: "8. Süresi dolmuş alan adının güvenilir olup olmadığını nasıl görebilirim?",
                          answer: "Güvenilir bir süresi dolmuş alan adı şu konularda kontrol edilir: web sitesi geçmişi, backlink kalitesi, spam, kumar veya yetişkin içeriğinin bulunmaması. Satıcı olarak, yalnızca bu kriterleri karşılayan domainleri seçersiniz."
                        },
                        {
                          question: "9. Süresi dolmuş alan adını yeni bir web sitesi için kullanabilir miyim?",
                          answer: "Evet. Süresi dolmuş alan adını tamamen yeni bir proje için mükemmel şekilde kullanabilirsiniz. İçerik yenidir, ancak alan adı zaten çevrimiçi otorite getirir."
                        },
                        {
                          question: "10. Süresi dolmuş alan adı yeni başlayanlar için uygun mu?",
                          answer: "Kesinlikle. Yeni başlayanlar genellikle en çok fayda görür çünkü: daha hızlı görünürlük elde ederler, daha az SEO açığı vardır, daha profesyonel bir başlangıç yaparlar."
                        },
                        {
                          question: "11. Bazı alan adları neden diğerlerinden daha pahalı?",
                          answer: "\"Alan adı neden bu kadar pahalı\" gibi aramalar genellikle değeri yanlış anlamaktan kaynaklanır. Fiyat şunlarla belirlenir: isim kalitesi, SEO değeri, backlinkler, ticari uygulanabilirlik."
                        },
                        {
                          question: "12. Süresi dolmuş alan adını daha sonra satabilir miyim?",
                          answer: "Evet. Birçok kişi \"yatırım olarak alan adı\" arar. Güçlü bir süresi dolmuş alan adı genellikle değerini korur ve hatta fiyatı artabilir."
                        },
                        {
                          question: "13. Süresi dolmuş alan adı SEO için kötü olabilir mi?",
                          answer: "Yalnızca kötü bir geçmişi varsa. Bu yüzden şu arasında büyük bir fark vardır: kontrol edilmemiş süresi dolmuş domainler ve dikkatle seçilmiş, güvenilir alan adları."
                        },
                        {
                          question: "14. Süresi dolmuş alan adı satın alırken nelere dikkat etmeliyim?",
                          answer: "Önemli dikkat noktaları şunlardır: spam içermeyen geçmiş, ilgili backlinkler, mantıklı alan adı, ticari marka riski olmaması."
                        },
                        {
                          question: "15. Alan adı satın aldıktan sonra ne kadar hızlı başlayabilirim?",
                          answer: "Transfer sonrasında alan adını hemen kullanabilirsiniz: web sitesi, e-posta, web mağazası için. Yeni alan adıyla aynı şekilde."
                        },
                        {
                          question: "16. Süresi dolmuş alan adı kullanmak için teknik bilgi gerekiyor mu?",
                          answer: "Hayır. Süresi dolmuş alan adı teknik olarak yeni alan adıyla aynı şekilde çalışır ve herhangi bir hosting sağlayıcısıyla kullanılabilir."
                        },
                        {
                          question: "17. Süresi dolmuş alan adı web mağazası için uygun mu?",
                          answer: "Evet. Web mağazaları özellikle şunlardan yararlanır: güven, otorite, Google'da daha iyi başlangıç. Bu, dönüşümler için çok önemlidir."
                        },
                        {
                          question: "18. Alan adı satın alırken domain authority ne anlama gelir?",
                          answer: "Domain authority, bir domainin linklere ve geçmişe göre ne kadar güçlü olduğunun bir göstergesidir. Birçok süresi dolmuş alan adı burada yeni domainlerden daha yüksek puan alır."
                        },
                        {
                          question: "19. Süresi dolmuş alan adı link oluşturmadan daha mı iyi?",
                          answer: "Birçok girişimci için evet. Link oluşturma emek yoğun, pahalıdır ve yıllar alabilir. İyi bir süresi dolmuş alan adı ile şunları satın alırsınız: anında avantaj, daha az risk, daha hızlı sonuçlar."
                        },
                        {
                          question: "20. İyi bir süresi dolmuş alan adı ne kadar?",
                          answer: "Fiyatlar şunlara göre değişir: domain authority, backlink profili, sektör. Değeri olmayan ucuz bir domain çok az şey söyler — kalite maliyetlidir, ancak kendini geri öder."
                        },
                        {
                          question: "21. Alan adımda anahtar kelime SEO için önemli mi?",
                          answer: "Eskiye göre daha az önemli. Açık, güvenilir bir isim artık tam anahtar kelimelerden daha önemlidir."
                        },
                        {
                          question: "22. Süresi dolmuş alan adını affiliate web sitesi için kullanabilir miyim?",
                          answer: "Evet, özellikle ilgili backlinklere ve tematik geçmişe sahipse. Bu, rekabetçi nişlerde daha hızlı başlamanızı sağlar."
                        },
                        {
                          question: "23. Süresi dolmuş alan adı Google tarafından cezalandırılmışsa ne olur?",
                          answer: "Cezalı bir domain'den kaçınılmalıdır. Bu yüzden her domaini spam, cezalar ve doğal olmayan linkler açısından önceden kontrol ediyoruz."
                        },
                        {
                          question: "24. Satın aldığım alan adını kendi hostingime nasıl aktarırım?",
                          answer: "Satın alma sonrasında bir EPP/auth kodu alacaksınız. Bu kodu yeni kayıt kuruluşunuza girerek transferi tamamlarsınız."
                        },
                        {
                          question: "25. .tr veya .eu domaini .com'dan daha mı iyi?",
                          answer: "Hedef kitlenize bağlıdır. Türkiye için .tr güçlüdür. Avrupa için .eu. Uluslararası için .com. Domain'in otoritesi uzantıdan daha önemlidir."
                        },
                        {
                          question: "26. Süresi dolmuş alan adını mevcut web siteme yönlendirebilir miyim?",
                          answer: "Evet. 301 yönlendirme ile süresi dolmuş domain'in SEO değerini ana sitenize aktarırsınız. Bu, otorite artırma için popüler bir stratejidir."
                        },
                        {
                          question: "27. Süresi dolmuş alan adının Google'da sıralanması ne kadar sürer?",
                          answer: "Yeni domainden daha hızlı — genellikle günler veya haftalar içinde, domain'in kalitesine ve yerleştirdiğiniz içeriğe bağlı olarak."
                        },
                        {
                          question: "28. Süresi dolmuş alan adının yeni alan adına göre avantajları nelerdir?",
                          answer: "Daha hızlı görünürlük, mevcut backlinkler, Google'da daha fazla güven, link oluşturmaya daha az bağımlılık."
                        },
                        {
                          question: "29. Rastgele bir pazar yerinden süresi dolmuş alan adına güvenebilir miyim?",
                          answer: "Her zaman değil. Birçok pazar yeri kalite kontrolü yapmaz. Bu yüzden şeffaflık ve kalite garanti eden uzmanlaşmış bir satıcıdan satın almak daha akıllıcadır."
                        },
                        {
                          question: "30. Bir alan adının değerli backlinklere sahip olup olmadığını nasıl anlarım?",
                          answer: "Ahrefs, MOZ veya SEMrush gibi araçlar kullanın. Portföyümüzdeki her domain için bu bilgiyi şeffaf olarak sağlıyoruz."
                        },
                        {
                          question: "31. Süresi dolmuş alan adına yatırım yapmak iyi bir fikir mi?",
                          answer: "Birçok girişimci ve yatırımcı için evet. Otoriteli güçlü bir domain değerini korur ve hatta artabilir."
                        },
                        {
                          question: "32. Yeni web sitesi oluşturduğumda eski backlinklere ne olur?",
                          answer: "Backlinkler, referans veren web siteleri tarafından kaldırılmadığı sürece kalır. Bu, süresi dolmuş alan adının büyük avantajlarından biridir."
                        },
                        {
                          question: "33. Süresi dolmuş alan adını yerel işletme için kullanabilir miyim?",
                          answer: "Evet, özellikle domain bölgesel alaka veya yerel backlinklere sahipse. Bu, yerel aramalarda bulunmanıza yardımcı olabilir."
                        },
                        {
                          question: "34. Süresi dolmuş alan adı satın almanın riskleri var mı?",
                          answer: "Yalnızca domaini önceden kontrol etmezseniz. Spam, cezalar veya doğal olmayan linkler önceden filtrelediğimiz risklerdir."
                        },
                        {
                          question: "35. Neden uzmanlaşmış bir süresi dolmuş domain satıcısından satın almalıyım?",
                          answer: "Çünkü şunları elde edersiniz: önceden kontrol edilmiş kalite, riskten kaçınma, her domain hakkında şeffaflık ve kendi araştırmanızda zaman ve para tasarrufu."
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
                  İletişime Geçin
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Bilgi İsteyin veya Teklif Verin
                </h2>
                <p className="text-slate-400">
                  Premium domainlerimizden biriyle ilgileniyor musunuz? Formu doldurun, en kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
              
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Ad *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Adınız"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          E-posta *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="sizin@email.com"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Globe className="w-4 h-4 inline mr-2" />
                        Domain Tercihi *
                      </label>
                      <Input
                        type="text"
                        value={formData.domain}
                        onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                        placeholder="örn. FinanceAuthority.com"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Mesaj / Ek Bilgi
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="İlginiz hakkında daha fazla bilgi verin, sorular sorun veya teklif yapın..."
                        rows={5}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40"
                    >
                      Talebi Gönder
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
                  Süresi Dolmuş Alan Adları Satın Alın: Kanıtlanmış SEO Otoritesine Yatırım Yapın
                </h2>
                
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-amber-400">Süresi dolmuş alan adı satın almak</strong>, yıllar boyunca birikmiş <strong className="text-white">domain otoritesi</strong> ve <strong className="text-white">kaliteli backlinklerden</strong> hemen faydalanmanın en akıllı yoludur. Yeni alan adından farklı olarak, premium süresi dolmuş domain Google ve diğer arama motorları tarafından zaten güvenilir kabul edilir. Bu, doğrudan daha iyi sıralamalara, daha hızlı dizine alınmaya ve daha fazla organik trafiğe dönüşür.
                  </p>
                  
                  <p>
                    Özenle seçilmiş <strong className="text-amber-400">premium domainlerimiz</strong>, Wikipedia, üniversiteler, devlet kurumları ve saygın haber siteleri gibi otoriter kaynaklardan backlinklere sahip kanıtlanmış bir geçmişe sahiptir. Bu <strong className="text-white">yüksek kaliteli backlinkler</strong>, yılların çevrimiçi varlığının sonucudur ve kendiniz oluşturmanız pratik olarak imkansızdır — link oluşturmaya binlerce euro yatırım yapmaya istekli değilseniz.
                  </p>
                  
                  <p>
                    İster <strong className="text-white">web mağazası başlatmak</strong>, ister <strong className="text-white">affiliate web sitesi</strong> açmak veya mevcut işletmenize <strong className="text-white">SEO desteği</strong> vermek isteyin: yüksek <strong className="text-amber-400">MOZ Domain Authority (DA)</strong> değerine sahip süresi dolmuş alan adı size rekabet karşısında tartışmasız bir avantaj sağlar. Diğerleri Google'ın yeni domainlerine güvenmesini beklerken aylar geçirirken, siz mevcut otoriteden hemen yararlanırsınız.
                  </p>
                  
                  <p>
                    <strong className="text-white">Neden bekliyorsunuz?</strong> Portföyümüzdeki her premium domain, spam içermeyen geçmiş, ilgili backlinkler ve iyi link profilleri açısından kontrol edilmiştir. Çevrimiçi varlığınıza hemen değer katan stratejik bir varlık domain satın alıyorsunuz. Otorite yığınlama için <strong className="text-white">301 yönlendirmelerden</strong> doğrudan yeni web sitesi başlatmaya: olasılıklar sınırsız.
                  </p>
                  
                  <div className="bg-gradient-to-r from-amber-500/10 to-slate-800/30 border border-amber-500/20 rounded-xl p-6 mt-8">
                    <p className="text-center text-lg mb-0">
                      <strong className="text-amber-400">Çevrimiçi başarınızı hızlandırmaya hazır mısınız?</strong><br />
                      <span className="text-slate-300">110'dan fazla premium süresi dolmuş alan adı portföyümüzü görüntüleyin ve hırsınıza mükemmel uyan domaini keşfedin. Kanıtlanmış otoriteye bugün yatırım yapın ve rakiplerinizi geride bırakın.</span>
                    </p>
                  </div>
                </div>
              </article>

              {/* New EU Domain Value Section */}
              <div className="bg-gradient-to-br from-slate-800/80 via-slate-900/90 to-slate-800/80 border border-amber-500/30 rounded-2xl p-8 md:p-10 mt-16 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                  Neden Premium Avrupa .EU Alan Adları Bu Kadar Değerli
                </h2>
                
                <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                  <h3 className="text-xl md:text-2xl font-semibold text-amber-400 mb-6">
                    Avrupa ve uluslararası pazar için güvenilir geçmişe sahip değerli Avrupa .EU isimleri
                  </h3>
                  
                  <p>
                    Diğer uzantılar sıklıkla doygun haldeyken, <strong className="text-amber-400">.EU</strong> ve <strong className="text-white">Avrupa domain uzantıları</strong> <strong className="text-amber-400">güvenilirlik</strong>, <strong className="text-amber-400">itibar</strong> ve net bir <strong className="text-white">coğrafi kimlik</strong> sunar. Uygulamada, bu Avrupa isimleri genellikle birçok <strong className="text-slate-200">.com</strong>, <strong className="text-slate-200">.net</strong> veya <strong className="text-slate-200">.org</strong> isimlerinden daha değerli ve güvenilirdir.
                  </p>
                  
                  <p>
                    Hem Avrupalı hem de <strong className="text-white">uluslararası alıcılar</strong> için, çevrimiçi geçmişi olan bir <strong className="text-amber-400">uluslararası web adı</strong> ekstra güvenilirlik sunar. <strong className="text-white">İtibarlı eski bir web adresi</strong>, <strong className="text-amber-400">çok dilli bir web adı</strong> veya <strong className="text-white">Avrupa için bir web adı</strong>, <strong className="text-amber-400">uluslararası pazar</strong> için web adresi olarak veya kendilerini profesyonel olarak konumlandırmak isteyen işletmeler ve projeler için <strong className="text-white">küresel çevrimiçi ad</strong> olarak ideal şekilde uygundur. Birçok durumda, bir <strong className="text-amber-400">.EU adının</strong> otoritesi de Avrupa çekiciliğini ve biriken değeri korurken bir <strong className="text-white">yönlendirme</strong> aracılığıyla stratejik olarak kullanılabilir.
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
                        <span>Transfer kodu (EPP/Auth code) ile domaininizi nasıl aktarırsınız?</span>
                      </div>
                    </h2>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="space-y-6 text-slate-300">
                      <p className="text-lg">
                        Satın alma işleminizden sonra, 24 saat içinde ödeme sırasında verdiğiniz e-posta adresine bir <strong className="text-amber-400">transfer kodu</strong> (EPP kodu veya Auth code olarak da bilinir) alacaksınız. Bu kod ile domaini kolayca kendi domain kayıt kuruluşunuza veya hosting sağlayıcınıza aktarabilirsiniz.
                      </p>
                      
                      <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                        <h3 className="text-lg font-semibold text-white mb-4">Adım adım talimatlar:</h3>
                        <ol className="space-y-4">
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">1</span>
                            <div>
                              <strong className="text-white">Transfer kodunu alın</strong>
                              <p className="text-slate-400 mt-1">Transfer kodu içeren e-posta için gelen kutunuzu (ve spam klasörünüzü) kontrol edin. Bunu ödeme sonrasında 24 saat içinde alacaksınız.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">2</span>
                            <div>
                              <strong className="text-white">Domain kayıt kuruluşunuza veya hosting sağlayıcınıza giriş yapın</strong>
                              <p className="text-slate-400 mt-1">Sağlayıcınızın domain yönetim bölümüne gidin (örn. GoDaddy, Namecheap, Google Domains, OVH, vb.).</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">3</span>
                            <div>
                              <strong className="text-white">Domain transferini başlatın</strong>
                              <p className="text-slate-400 mt-1">"Domain aktar", "Domain transfer" veya "Domain içe aktar" seçeneğini arayın. Aktarmak istediğiniz domain adını girin.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">4</span>
                            <div>
                              <strong className="text-white">Transfer kodunu girin</strong>
                              <p className="text-slate-400 mt-1">Bizden aldığınız transfer kodunu (EPP/Auth code) belirlenen alana yapıştırın.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">5</span>
                            <div>
                              <strong className="text-white">Transferi onaylayın</strong>
                              <p className="text-slate-400 mt-1">Satın aldığınız domain adını sağlayıcınızda girin ve transferi onaylayın. Ardından bizden aldığınız EPP kodunu (transfer kodu) girin.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">6</span>
                            <div>
                              <strong className="text-white">Tamamlanmasını bekleyin</strong>
                              <p className="text-slate-400 mt-1">Transfer artık başlatıldı ve domain uzantısına bağlı olarak genellikle 1-5 iş günü sürer (.nl, .be, .eu, .com, vb.). Transfer tamamlandığında, domain otomatik olarak hesabınızda görünecektir.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">7</span>
                            <div>
                              <strong className="text-white">Domaininizi kullanın</strong>
                              <p className="text-slate-400 mt-1">Tamamlandıktan sonra domaini hemen kullanabilirsiniz: ekstra SEO değeri için mevcut web sitenize 301 yönlendirme olarak kullanın veya yeni web sitesi oluşturmak için hosting paketine bağlayın.</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      
                      <p className="text-slate-400 text-sm">
                        Domain transferi hakkında sorularınız mı var? <a href="mailto:support@iaee.eu" className="text-amber-400 hover:text-amber-300">support@iaee.eu</a> adresinden bizimle iletişime geçin.
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
                İletişime Geçin
              </h2>
              <p className="text-slate-300 mb-8">
                Belirli bir domain hakkında sorularınız mı var veya projenize en uygun süresi dolmuş alan adı konusunda tavsiye mi almak istiyorsunuz? Bizimle iletişime geçin.
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
                    Mesajınıza 24 saat içinde yanıt veririz.
                  </p>
                </div>

                {/* NordVPN Recommendation Section */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-4 mt-6">
                  <div className="text-center">
                    <h4 className="font-bold text-white text-lg mb-2">🔒 NordVPN ile Gizliliğinizi Koruyun</h4>
                    <p className="text-white/90 text-sm mb-3">
                      VPN nedir? <a href="https://www.dpbolvw.net/click-100643838-14471514" target="_blank" rel="nofollow noopener noreferrer" className="underline text-yellow-300 hover:text-yellow-200">Sanal Özel Ağ (VPN)</a> internet bağlantınızı şifreler ve IP adresinizi gizleyerek kişisel verilerinizi hackerlardan, takipçilerden ve gözetimden korur.
                    </p>
                    <p className="text-white/80 text-xs mb-4">
                      Premium domain sahipleri için çevrimiçi kimliğinizi korumak önemlidir. NordVPN, anonim gezinmenize, küresel içeriğe erişmenize ve iş işlemlerinizi güvence altına almanıza olanak tanır.
                    </p>
                    <a 
                      href="https://www.dpbolvw.net/click-100643838-14471514" 
                      target="_blank" 
                      rel="nofollow noopener noreferrer"
                      className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-6 rounded-full transition-colors text-sm"
                    >
                      NordVPN'i Şimdi Alın →
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
          aria-label="Yukarı çık"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        {/* Hidden Internal Links for SEO */}
        <HiddenInternalLinks />

        {/* Legal Footer */}
        <LegalLinksPremiumDomainsTR />

        {/* Footer */}
        <FooterPremiumDomainsTR />
      </div>
    </>
  );
};

export default PremiumDomainsTR;
