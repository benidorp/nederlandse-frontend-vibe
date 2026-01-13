import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Crown, TrendingUp, Shield, Globe, Zap, Award, ArrowRight, ArrowLeft, CheckCircle, Star, Link, Target, BarChart3, Mail, User, MessageSquare, Lock, ArrowUp, Home, ExternalLink } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import LegalLinksPremiumDomainsAR from "@/components/premium-domains/LegalLinksPremiumDomainsAR";
import FooterPremiumDomainsAR from "@/components/premium-domains/FooterPremiumDomainsAR";
import LanguageSwitcher from "@/components/premium-domains/LanguageSwitcher";
import stripeLogo from "@/assets/stripe-logo.svg";
import { validateContactForm, buildSafeMailtoUrl } from "@/lib/formValidation";

// Premium domain data - exact copy from English version
const premiumDomains = [
  // DA 38
  {
    name: "escp-eap.eu",
    description: "نطاق مميز لكلية إدارة الأعمال مع روابط خلفية من ويكيبيديا وكورنيل وشبيغل ولوموند.",
    mozScore: 38,
    pageAuthority: 28,
    linkingDomains: 292,
    inboundLinks: "4.6K+",
    followedLinks: "4.2K+",
    category: "التعليم",
    price: "€1495",
    backlinks: "4.6K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "lemonde.fr (DA 93)", "cornell.edu (DA 92)", "spiegel.de (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/6oUeVdepVg18dXf9OO9Zm04"
  },
  // DA 37
  {
    name: "grandparkhotel.at",
    description: "نطاق فندقي نمساوي مميز مع روابط خلفية من الغارديان وتليغراف وديلي ميل وأيريش تايمز ودير ستاندارد.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 198,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "الضيافة",
    price: "€1750",
    backlinks: "1.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dailymail.co.uk (DA 94)", "irishtimes.com (DA 91)", "derstandard.at (DA 82)"],
    stripePaymentLink: "https://buy.stripe.com/8x2dR9epV9CK5qJaSS9Zm0i"
  },
  {
    name: "icesculpture.be",
    description: "نطاق فني/فعاليات بلجيكي مع روابط خلفية من Europa.eu والغارديان وتليغراف وDW وBoston.com.",
    mozScore: 37,
    pageAuthority: 33,
    linkingDomains: 349,
    inboundLinks: "1.9K+",
    followedLinks: "1.5K+",
    category: "الفن",
    price: "€950",
    backlinks: "1.9K+",
    topBacklinks: ["europa.eu (DA 97)", "theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dw.com (DA 93)", "boston.com (DA 92)"],
    stripePaymentLink: "https://buy.stripe.com/fZu4gzdlRaGOg5n3qq9Zm0h"
  },
  {
    name: "tabby.eu",
    description: "نطاق أوروبي قصير وسهل التذكر مع روابط خلفية من يوتيوب ولوموند وMDPI وكورييري وايرد إيطاليا.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 166,
    inboundLinks: "3K+",
    followedLinks: "2.9K+",
    category: "عام",
    price: "€1950",
    stripePaymentLink: "https://buy.stripe.com/bJe7sL2HdcOWbP7bWW9Zm0g",
    backlinks: "3K+",
    topBacklinks: ["youtube.com (DA 100)", "lemonde.fr (DA 93)", "mdpi.com (DA 92)", "corriere.it (DA 92)", "wired.it (DA 90)"]
  },
  // DA 36
  {
    name: "antigonetickets.be",
    description: "نطاق تذاكر بلجيكي مع روابط خلفية من Nieuwsblad وDe Standaard وGVA.",
    mozScore: 36,
    pageAuthority: 23,
    linkingDomains: 120,
    inboundLinks: "6.6K+",
    followedLinks: "6.6K+",
    category: "الترفيه",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "6.6K+",
    topBacklinks: ["standaard.be (DA 81)", "nieuwsblad.be (DA 79)", "gva.be (DA 73)"]
  },
  {
    name: "beauxartsliege.be",
    description: "نطاق فني مع روابط خلفية من ويكيبيديا وCNN وBehance وRTBF.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 231,
    inboundLinks: "1.1K+",
    followedLinks: "831+",
    category: "الفن/الثقافة",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "1.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnn.com (DA 94)", "behance.net (DA 92)", "rtbf.be (DA 82)"]
  },
  {
    name: "paulsmithmusic.eu",
    description: "نطاق موسيقي مع روابط خلفية من BBC والغارديان وNME وPitchfork.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 302,
    inboundLinks: "719+",
    followedLinks: "663+",
    category: "الموسيقى",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "719+",
    topBacklinks: ["bbc.co.uk (DA 95)", "theguardian.com (DA 95)", "pitchfork.com (DA 88)", "nme.com (DA 86)"]
  },
  {
    name: "eu-asiacentre.eu",
    description: "نطاق أوروبي-آسيوي مع روابط خلفية من ويكيبيديا وNBC News وكامبريدج وReddit.",
    mozScore: 36,
    pageAuthority: 33,
    linkingDomains: 277,
    inboundLinks: "898+",
    followedLinks: "785+",
    category: "دولي",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "898+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "reddit.com (DA 97)", "nbcnews.com (DA 93)", "cam.ac.uk (DA 93)"]
  },
  // DA 35
  {
    name: "toulousespaceshow.eu",
    description: "نطاق فضائي مميز مع روابط خلفية من Europa.eu وNASA.gov وIEEE.org وويكيبيديا.",
    mozScore: 35,
    pageAuthority: 31,
    linkingDomains: 397,
    inboundLinks: "3.4K+",
    followedLinks: "1.8K+",
    category: "التكنولوجيا",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "nasa.gov (DA 95)", "europa.eu (DA 94)", "ieee.org (DA 93)"]
  },
  {
    name: "martonecycling.eu",
    description: "نطاق ركوب الدراجات مع روابط خلفية من Globo وHarper's Bazaar وVogue وGrazia.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 118,
    inboundLinks: "232+",
    followedLinks: "173+",
    category: "الرياضة",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "232+",
    topBacklinks: ["globo.com (DA 93)", "vogue.com (DA 92)", "harpersbazaar.com (DA 89)", "grazia.it (DA 73)"]
  },
  {
    name: "muenchner-kirchennachrichten.de",
    description: "نطاق إخباري/ديني ألماني مع روابط خلفية من ويكيبيديا (EN, DE, ZH, NL) وشبيغل ولا كروا.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 281,
    inboundLinks: "3.3K+",
    followedLinks: "1.8K+",
    category: "الأخبار",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.3K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "de.wikipedia.org (DA 94)", "fandom.com (DA 94)", "spiegel.de (DA 93)", "la-croix.com (DA 88)"]
  },
  // DA 33
  {
    name: "etongmbh.de",
    description: "نطاق تجاري ألماني مع سلطة تجارية قوية وروابط خلفية من Naver وYumpu وHeise وComputerbase وMotor-Talk.",
    mozScore: 33,
    pageAuthority: 27,
    linkingDomains: 321,
    inboundLinks: "3.9K+",
    followedLinks: "1.6K+",
    category: "الأعمال",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "3.9K+",
    topBacklinks: ["naver.com (DA 93)", "yumpu.com (DA 91)", "heise.de (DA 91)", "computerbase.de (DA 84)", "motor-talk.de (DA 73)"]
  },
  {
    name: "europe-en-midipyrenees.eu",
    description: "نطاق فرنسي/أوروبي إقليمي مع روابط خلفية من Scoop.it وFrance Info وLa Tribune والحكومة الفرنسية.",
    mozScore: 33,
    pageAuthority: 24,
    linkingDomains: 167,
    inboundLinks: "690.3K+",
    followedLinks: "689.6K+",
    category: "السياحة",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "690.3K+",
    topBacklinks: ["scoop.it (DA 92)", "franceinfo.fr (DA 91)", "latribune.fr (DA 86)", "culture.gouv.fr (DA 76)", "agriculture.gouv.fr (DA 72)"]
  },
  {
    name: "fffb.be",
    description: "نطاق بلجيكي قصير وقوي مع روابط خلفية من ويكيبيديا وVariety وRTBF وCourrier International.",
    mozScore: 33,
    pageAuthority: 33,
    linkingDomains: 228,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "عام",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "1.7K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "variety.com (DA 93)", "constantcontact.com (DA 90)", "rtbf.be (DA 89)", "courrierinternational.com (DA 80)"]
  },
  // DA 32
  {
    name: "improve-research.eu",
    description: "نطاق بحثي مع روابط خلفية من Europa.eu وكامبريدج وSpringer وLSE.",
    mozScore: 32,
    pageAuthority: 30,
    linkingDomains: 106,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "البحث",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.7K+",
    topBacklinks: ["europa.eu (DA 94)", "cam.ac.uk (DA 93)", "springer.com (DA 92)", "lse.ac.uk (DA 90)"]
  },
  {
    name: "co-da.eu",
    description: "نطاق أوروبي قصير وقوي مع روابط خلفية من Globo وHuffPost وCBS News وGizmodo وFast Company.",
    mozScore: 32,
    pageAuthority: 22,
    linkingDomains: 96,
    inboundLinks: "276+",
    followedLinks: "260+",
    category: "التعاون",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "276+",
    topBacklinks: ["globo.com (DA 95)", "huffpost.com (DA 94)", "cbsnews.com (DA 93)", "gizmodo.com (DA 93)", "fastcompany.com (DA 92)"]
  },
  {
    name: "emg-nice2015.fr",
    description: "نطاق فرنسي مع روابط خلفية من ويكيبيديا وGoFundMe وNice Matin وTriathlon.org.",
    mozScore: 32,
    pageAuthority: 31,
    linkingDomains: 191,
    inboundLinks: "3.1K+",
    followedLinks: "3K+",
    category: "دولي",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "3.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "gofundme.com (DA 93)", "mundodeportivo.com (DA 92)", "nicematin.com (DA 73)", "triathlon.org (DA 68)"]
  },
  {
    name: "euromedialiteracy.eu",
    description: "نطاق تعليمي أوروبي مع روابط خلفية من ويكيبيديا وPenn State وWisconsin ومجلس أوروبا.",
    mozScore: 32,
    pageAuthority: 38,
    linkingDomains: 372,
    inboundLinks: "2.5K+",
    followedLinks: "2.3K+",
    category: "التعليم",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.5K+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "psu.edu (DA 92)", "scoop.it (DA 92)", "wisc.edu (DA 91)", "coe.int (DA 89)"]
  },
  {
    name: "citiexpress.eu",
    description: "نطاق نقل ولوجستيات أوروبي مع روابط خلفية من TripAdvisor وSkyscraperCity وRick Steves.",
    mozScore: 32,
    pageAuthority: 32,
    linkingDomains: 171,
    inboundLinks: "307+",
    followedLinks: "254+",
    category: "النقل",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "307+",
    topBacklinks: ["goo.gl (DA 95)", "tripadvisor.com (DA 93)", "skyscrapercity.com (DA 86)", "ricksteves.com (DA 77)", "rome2rio.com (DA 76)"]
  },
  // DA 31
  {
    name: "machuproject.eu",
    description: "نطاق مشروع أوروبي مع روابط خلفية من ويكيبيديا وكامبريدج واليونسكو وReddit.",
    mozScore: 31,
    pageAuthority: 27,
    linkingDomains: 162,
    inboundLinks: "379+",
    followedLinks: "266+",
    category: "المشاريع",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "379+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cambridge.org (DA 93)", "unesco.org (DA 93)", "reddit.com (DA 92)", "mdpi.com (DA 92)"]
  },
  {
    name: "ramcip-project.eu",
    description: "نطاق مشروع بحثي أوروبي مع روابط خلفية من Europa.eu وGitHub وNY Times وSpringer.",
    mozScore: 31,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "333+",
    followedLinks: "293+",
    category: "البحث",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "333+",
    topBacklinks: ["europa.eu (DA 97)", "github.com (DA 96)", "nytimes.com (DA 95)", "elpais.com (DA 94)", "springer.com (DA 93)"]
  },
  {
    name: "evader-project.eu",
    description: "نطاق مشروع أوروبي مع روابط خلفية من Europa.eu وSpiegel وEuropa Press وHeise.",
    mozScore: 31,
    pageAuthority: 30,
    linkingDomains: 91,
    inboundLinks: "128+",
    followedLinks: "109+",
    category: "المشاريع",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "128+",
    topBacklinks: ["europa.eu (DA 97)", "spiegel.de (DA 93)", "europapress.es (DA 91)", "heise.de (DA 91)", "autoblog.com (DA 90)"]
  },
  {
    name: "toastit-live.be",
    description: "نطاق ترفيه/إعلام بلجيكي مع روابط خلفية من ويكيبيديا وKU Leuven وNieuwsblad وYle.",
    mozScore: 31,
    pageAuthority: 29,
    linkingDomains: 268,
    inboundLinks: "15.2K+",
    followedLinks: "15K+",
    category: "الإعلام",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "15.2K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "kuleuven.be (DA 83)", "nieuwsblad.be (DA 82)", "skynet.be (DA 80)", "yle.fi (DA 78)"]
  },
  {
    name: "hznet.nl",
    description: "نطاق شبكة هولندي مع روابط خلفية من Microsoft وNOS وNeowin وTweakers وXS4All.",
    mozScore: 31,
    pageAuthority: 25,
    linkingDomains: 152,
    inboundLinks: "1.7K+",
    followedLinks: "1.6K+",
    category: "الشبكات",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "1.7K+",
    topBacklinks: ["microsoft.com (DA 99)", "nos.nl (DA 90)", "neowin.net (DA 88)", "techpowerup.com (DA 83)", "tweakers.net (DA 79)"]
  },
  {
    name: "leading-the-digital-decade.eu",
    description: "نطاق تحول رقمي أوروبي مع روابط خلفية من Europa.eu وPolitico EU وLSE.",
    mozScore: 31,
    pageAuthority: 30,
    linkingDomains: 80,
    inboundLinks: "189+",
    followedLinks: "174+",
    category: "الرقمي",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "189+",
    topBacklinks: ["europa.eu (DA 97)", "politico.eu (DA 91)", "lse.ac.uk (DA 89)", "fapesp.br (DA 72)", "eureporter.co (DA 68)"]
  },
  {
    name: "landstewardship.eu",
    description: "نطاق إدارة الأراضي/الاستدامة الأوروبي مع روابط خلفية من Europa.eu وABC.es وGencat.cat والجامعات الإسبانية.",
    mozScore: 31,
    pageAuthority: 33,
    linkingDomains: 200,
    inboundLinks: "7.5K+",
    followedLinks: "7.4K+",
    category: "الاستدامة",
    price: "€695",
    stripePaymentLink: "https://buy.stripe.com/dRm28r5TpaGO6uNe549Zm0b",
    backlinks: "7.5K+",
    topBacklinks: ["europa.eu (DA 97)", "abc.es (DA 93)", "gencat.cat (DA 89)", "ask.com (DA 88)", "ecoticias.com (DA 74)"],
    useCases: ["منظمة إدارة الطبيعة والتحريج", "منصة الزراعة المستدامة", "السياحة البيئية والزراعية", "شركة استشارات بيئية", "استوديو هندسة المناظر الطبيعية", "تعاونية المزارع العضوية", "مؤسسة العمل المناخي", "أكاديمية الزراعة المستدامة", "مبادرة الغابات والتنوع البيولوجي", "مجتمع الزراعة التجديدية"]
  },
  // DA 30
  {
    name: "ilovecosmetics.eu",
    description: "نطاق جمال ومستحضرات تجميل مع روابط خلفية من Alza وGlamour Magazine وCB Insights.",
    mozScore: 30,
    pageAuthority: 36,
    linkingDomains: 472,
    inboundLinks: "1.6K+",
    followedLinks: "1.3K+",
    category: "الجمال",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "1.6K+",
    topBacklinks: ["alza.cz (DA 92)", "glamourmagazine.co.uk (DA 82)", "polyvore.com (DA 79)", "fave.co (DA 78)", "cbinsights.com (DA 77)"],
    useCases: ["متجر إلكتروني للجمال والعناية بالبشرة", "مدونة مراجعات مستحضرات التجميل", "بورتفوليو فنان المكياج", "علامة تجارية لمستحضرات التجميل الطبيعية", "منصة مؤثري الجمال", "سلسلة صالونات التجميل", "استيراد مستحضرات التجميل الكورية واليابانية", "متجر مستحضرات التجميل النباتية", "خدمة اشتراك صناديق الجمال", "قاعدة بيانات مكونات مستحضرات التجميل"]
  },
  {
    name: "rtmpilecki.eu",
    description: "نطاق تاريخي/ثقافي أوروبي مع روابط خلفية من ويكيبيديا (ES, ID, ZH) والحكومة البولندية وThread Reader.",
    mozScore: 30,
    pageAuthority: 27,
    linkingDomains: 96,
    inboundLinks: "199+",
    followedLinks: "95+",
    category: "الثقافة",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "199+",
    topBacklinks: ["es.wikipedia.org (DA 96)", "gov.pl (DA 91)", "threadreaderapp.com (DA 78)", "gloria.tv (DA 69)", "dbpedia.org (DA 65)"]
  },
  {
    name: "friendsofthesupergrid.eu",
    description: "نطاق طاقة وبنية تحتية أوروبي مع روابط خلفية من ويكيبيديا وCNET وIEEE وThe Conversation.",
    mozScore: 30,
    pageAuthority: 30,
    linkingDomains: 297,
    inboundLinks: "156.1K+",
    followedLinks: "155.8K+",
    category: "الطاقة",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/9B6cN54Pl5mu9GZe549Zm0l",
    backlinks: "156.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnet.com (DA 93)", "theconversation.com (DA 92)", "ieee.org (DA 92)", "corriere.it (DA 92)"]
  },
  {
    name: "eureka-hvacr.eu",
    description: "نطاق تكييف وتقنية المناخ الأوروبي مع روابط خلفية من Ow.ly وEurActiv وDanfoss.",
    mozScore: 30,
    pageAuthority: 23,
    linkingDomains: 80,
    inboundLinks: "375+",
    followedLinks: "357+",
    category: "التكنولوجيا",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "375+",
    topBacklinks: ["ow.ly (DA 90)", "euractiv.com (DA 84)", "campaign-archive.com (DA 84)", "danfoss.com (DA 69)", "coleurope.eu (DA 57)"]
  },
  {
    name: "partymenu.eu",
    description: "نطاق تموين/فعاليات أوروبي مع روابط خلفية من Google.sk وWikiwand وRA.co وPravda.sk.",
    mozScore: 30,
    pageAuthority: 35,
    linkingDomains: 328,
    inboundLinks: "2.2K+",
    followedLinks: "2.1K+",
    category: "الطعام",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "2.2K+",
    topBacklinks: ["google.sk (DA 85)", "wikiwand.com (DA 85)", "ra.co (DA 85)", "pravda.sk (DA 79)", "dennikn.sk (DA 76)"]
  },
  // DA 29
  {
    name: "evacuate.eu",
    description: "نطاق سلامة وتخطيط طوارئ أوروبي مع روابط خلفية من Europa.eu وEl País وSpringer وKU Leuven.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 99,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "السلامة",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.7K+",
    topBacklinks: ["europa.eu (DA 97)", "elpais.com (DA 94)", "springer.com (DA 93)", "mdpi.com (DA 92)", "xataka.com (DA 90)"]
  },
  {
    name: "greenweek2010.eu",
    description: "نطاق استدامة مع روابط خلفية من Europa.eu وEurekAlert وRAI وAAAS.",
    mozScore: 29,
    pageAuthority: 28,
    linkingDomains: 109,
    inboundLinks: "259+",
    followedLinks: "249+",
    category: "الاستدامة",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "259+",
    topBacklinks: ["europa.eu (DA 97)", "eurekalert.org (DA 91)", "rai.it (DA 81)", "au.dk (DA 77)", "aaas.org (DA 76)"]
  },
  {
    name: "bryn-somersethouse.co.uk",
    description: "نطاق عقارات/ضيافة بريطاني مع روابط خلفية من Forbes والغارديان وEvening Standard وTime Out.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 96,
    inboundLinks: "167+",
    followedLinks: "132+",
    category: "العقارات",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "167+",
    topBacklinks: ["forbes.com (DA 94)", "theguardian.com (DA 94)", "standard.co.uk (DA 93)", "timeout.com (DA 92)", "thetimes.com (DA 92)"]
  },
  {
    name: "euforistudy.eu",
    description: "نطاق دراسي تعليمي أوروبي مع روابط خلفية من الغارديان وTrinity College Dublin وVU Amsterdam.",
    mozScore: 29,
    pageAuthority: 27,
    linkingDomains: 72,
    inboundLinks: "215+",
    followedLinks: "170+",
    category: "التعليم",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "215+",
    topBacklinks: ["theguardian.com (DA 94)", "ask.com (DA 88)", "tcd.ie (DA 86)", "vu.nl (DA 76)", "muni.cz (DA 74)"]
  },
  {
    name: "beatassist.eu",
    description: "نطاق إنتاج موسيقي مع روابط خلفية من Google Sites وScoop.it وEnvato وMusicRadar.",
    mozScore: 29,
    pageAuthority: 29,
    linkingDomains: 164,
    inboundLinks: "1.5K+",
    followedLinks: "1.2K+",
    category: "الموسيقى/الصوت",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.5K+",
    topBacklinks: ["sites.google.com (DA 96)", "scoop.it (DA 92)", "envato.com (DA 91)", "informer.com (DA 90)", "codecanyon.net (DA 83)"]
  },
  {
    name: "energaware.eu",
    description: "نطاق مشروع توعية بالطاقة أوروبي مع روابط خلفية من Europa.eu وUOL وEl País وLe Figaro.",
    mozScore: 29,
    pageAuthority: 26,
    linkingDomains: 61,
    inboundLinks: "15.1K+",
    followedLinks: "15.1K+",
    category: "الطاقة",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "15.1K+",
    topBacklinks: ["europa.eu (DA 97)", "uol.com.br (DA 95)", "elpais.com (DA 94)", "lefigaro.fr (DA 93)", "mdpi.com (DA 92)"]
  },
  {
    name: "5gmedia.eu",
    description: "نطاق اتصالات/إعلام مع روابط خلفية من Medium وIBM وTelefónica والجامعات.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 69,
    inboundLinks: "338+",
    followedLinks: "265+",
    category: "التكنولوجيا",
    price: "€675",
    stripePaymentLink: "https://buy.stripe.com/cNi00jdlR9CK5qJf989Zm0k",
    backlinks: "338+",
    topBacklinks: ["medium.com (DA 95)", "ibm.com (DA 93)", "telefonica.com (DA 79)", "upv.es (DA 79)", "upm.es (DA 78)"]
  },
  {
    name: "finnovaregio.eu",
    description: "نطاق ابتكار مالي إقليمي أوروبي مع روابط خلفية من Crunchbase وSplashthat وClimate-KIC.",
    mozScore: 29,
    pageAuthority: 20,
    linkingDomains: 41,
    inboundLinks: "156+",
    followedLinks: "143+",
    category: "المالية",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "156+",
    topBacklinks: ["goo.gl (DA 95)", "crunchbase.com (DA 91)", "splashthat.com (DA 86)", "emprendedores.es (DA 66)", "climate-kic.org (DA 64)"]
  },
  {
    name: "worth-project.eu",
    description: "نطاق مشروع تصميم وابتكار مع روابط خلفية من Europa.eu وEuronews وAngelList وUAL Arts.",
    mozScore: 29,
    pageAuthority: 32,
    linkingDomains: 162,
    inboundLinks: "245+",
    followedLinks: "209+",
    category: "التصميم",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "245+",
    topBacklinks: ["europa.eu (DA 97)", "euronews.com (DA 92)", "angel.co (DA 86)", "campaign-archive.com (DA 84)", "arts.ac.uk (DA 81)"]
  },
  {
    name: "push-pull-parking.eu",
    description: "نطاق تنقل/مواقف سيارات أوروبي مع روابط خلفية من Europa.eu وMedium وZeit.de وThread Reader.",
    mozScore: 29,
    pageAuthority: 30,
    linkingDomains: 107,
    inboundLinks: "320+",
    followedLinks: "292+",
    category: "التنقل",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "320+",
    topBacklinks: ["europa.eu (DA 97)", "medium.com (DA 95)", "zeit.de (DA 91)", "threadreaderapp.com (DA 78)", "eur.nl (DA 68)"]
  },
  // DA 28
  {
    name: "bovisadrivein.it",
    description: "نطاق ترفيه إيطالي مع روابط خلفية من Behance وGiphy وCorriere وMyMovies.",
    mozScore: 28,
    pageAuthority: 22,
    linkingDomains: 52,
    inboundLinks: "78+",
    followedLinks: "60+",
    category: "الترفيه",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "78+",
    topBacklinks: ["behance.net (DA 93)", "giphy.com (DA 92)", "corriere.it (DA 92)", "ilgiornale.it (DA 85)", "elledecor.com (DA 81)"]
  },
  {
    name: "resurbis.eu",
    description: "نطاق استدامة أوروبي مع روابط خلفية من Europa.eu وMDPI وEurekAlert وWired.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 87,
    inboundLinks: "185+",
    followedLinks: "153+",
    category: "الاستدامة",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "185+",
    topBacklinks: ["europa.eu (DA 97)", "mdpi.com (DA 92)", "eurekalert.org (DA 91)", "wired.it (DA 90)", "ub.edu (DA 86)"]
  },
  {
    name: "eu-sabana.eu",
    description: "نطاق مشروع زراعة مستدامة أوروبي مع روابط خلفية من Europa.eu وThe Conversation وFrontiers.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 69,
    inboundLinks: "413+",
    followedLinks: "397+",
    category: "الزراعة",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "413+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "frontiersin.org (DA 92)", "diarioinformacion.com (DA 82)", "informacion.es (DA 78)"]
  },
  {
    name: "ellinikiglossa.eu",
    description: "نطاق لغة/ثقافة يونانية مع روابط خلفية قوية من ويكيبيديا وUCI.edu والجامعات.",
    mozScore: 28,
    pageAuthority: 31,
    linkingDomains: 164,
    inboundLinks: "4.1K+",
    followedLinks: "4K+",
    category: "اللغة/الثقافة",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "4.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "uci.edu (DA 91)"]
  },
  {
    name: "bringaexpo.eu",
    description: "نطاق دراجات/معارض هنغاري مع روابط خلفية قوية من Origo.hu وVelvet.hu وNetwork.hu ومواقع إعلامية هنغارية أخرى.",
    mozScore: 27,
    pageAuthority: 25,
    linkingDomains: 79,
    inboundLinks: "551+",
    followedLinks: "513+",
    category: "الرياضة/الفعاليات",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "551+",
    topBacklinks: ["origo.hu (DA 72)", "velvet.hu (DA 60)", "network.hu (DA 57)", "femcafe.hu (DA 56)", "hwsw.hu (DA 56)"]
  },
  {
    name: "movecare-project.eu",
    description: "نطاق مشروع رعاية وتنقل أوروبي مع روابط خلفية من Springer وMDPI وIl Fatto Quotidiano والجامعات الإيطالية.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "117+",
    followedLinks: "97+",
    category: "الرعاية الصحية",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "117+",
    topBacklinks: ["springer.com (DA 93)", "mdpi.com (DA 92)", "ilfattoquotidiano.it (DA 90)", "unimi.it (DA 72)", "polimi.it (DA 71)"]
  },
  {
    name: "davidhughesillustration.co.uk",
    description: "نطاق إبداعي بريطاني مع روابط خلفية من الغارديان وCreative Bloq وORF.at وPublishers Weekly.",
    mozScore: 28,
    pageAuthority: 27,
    linkingDomains: 157,
    inboundLinks: "3.9K+",
    followedLinks: "3.9K+",
    category: "الفن/التصميم",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "3.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "creativebloq.com (DA 86)", "orf.at (DA 86)", "librarything.com (DA 80)", "publishersweekly.com (DA 77)"]
  },
  {
    name: "centremlm.be",
    description: "نطاق مركز بلجيكي مع روابط خلفية من ويكيبيديا (FR, IT, NL) وLe Figaro وWiktionary.",
    mozScore: 28,
    pageAuthority: 28,
    linkingDomains: 182,
    inboundLinks: "9.6K+",
    followedLinks: "9.3K+",
    category: "عام",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "9.6K+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "it.wikipedia.org (DA 93)", "wiktionary.org (DA 93)", "lefigaro.fr (DA 93)", "nl.wikipedia.org (DA 91)"]
  },
  {
    name: "epc2018.be",
    description: "نطاق فعاليات بلجيكي مع روابط خلفية من TinyURL وUB.edu وجامعة لوند وConfex.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 57,
    inboundLinks: "136+",
    followedLinks: "121+",
    category: "الفعاليات",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "136+",
    topBacklinks: ["tinyurl.com (DA 94)", "ub.edu (DA 86)", "lu.se (DA 79)", "confex.com (DA 73)", "sdu.dk (DA 71)"]
  },
  {
    name: "youthstartproject.eu",
    description: "نطاق مشروع تعليم/شباب مع روابط خلفية من Europa.eu وCampaign Archive وObservador وOpenEdition.",
    mozScore: 28,
    pageAuthority: 24,
    linkingDomains: 64,
    inboundLinks: "2.9K+",
    followedLinks: "2.8K+",
    category: "التعليم",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "2.9K+",
    topBacklinks: ["europa.eu (DA 97)", "campaign-archive.com (DA 84)", "observador.pt (DA 84)", "openedition.org (DA 78)", "wort.lu (DA 75)"]
  },
  // DA 27
  {
    name: "spanvis.nl",
    description: "نطاق هولندي مع روابط خلفية من ويكيبيديا (EN, RU, NL) وWikiwand وXS4All.",
    mozScore: 27,
    pageAuthority: 29,
    linkingDomains: 241,
    inboundLinks: "2.1K+",
    followedLinks: "1.9K+",
    category: "عام",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "ru.wikipedia.org (DA 94)", "nl.wikipedia.org (DA 91)", "wikiwand.com (DA 85)", "xs4all.nl (DA 79)"]
  },
  {
    name: "seatglobal.eu",
    description: "نطاق تنقل/نقل دولي مع روابط خلفية من Europa.eu وSpringer وPLOS وPhys.org.",
    mozScore: 27,
    pageAuthority: 29,
    linkingDomains: 123,
    inboundLinks: "4.8K+",
    followedLinks: "4.7K+",
    category: "النقل",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "4.8K+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "plos.org (DA 93)", "salon.com (DA 91)", "phys.org (DA 91)"]
  },
  {
    name: "arcomem.eu",
    description: "نطاق مشروع أرشيف رقمي أوروبي مع روابط خلفية من ويكيبيديا وEuropa.eu وW3.org وSlideShare وأكسفورد.",
    mozScore: 27,
    pageAuthority: 33,
    linkingDomains: 691,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "الرقمي",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.7K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "w3.org (DA 95)", "slideshare.net (DA 94)", "ox.ac.uk (DA 92)"]
  },
  {
    name: "lt-pl-ru.eu",
    description: "نطاق تعاون إقليمي بحر البلطيق الأوروبي مع روابط خلفية من Europa.eu وويكيبيديا DE وAsk.com وRzeczpospolita.",
    mozScore: 27,
    pageAuthority: 31,
    linkingDomains: 155,
    inboundLinks: "44.2K+",
    followedLinks: "37.2K+",
    category: "دولي",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "44.2K+",
    topBacklinks: ["europa.eu (DA 97)", "de.wikipedia.org (DA 94)", "ask.com (DA 88)", "rp.pl (DA 82)", "worldwidetopsite.com (DA 71)"]
  },
  {
    name: "transitionproject.eu",
    description: "نطاق مشروع انتقال وتغيير أوروبي مع روابط خلفية من Europa.eu وEventbrite وStorify وجامعة شيفيلد.",
    mozScore: 27,
    pageAuthority: 28,
    linkingDomains: 75,
    inboundLinks: "207+",
    followedLinks: "179+",
    category: "المشاريع",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "207+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "eventbrite.com (DA 93)", "storify.com (DA 90)", "shef.ac.uk (DA 79)"]
  },
  {
    name: "expo-2050.be",
    description: "نطاق معارض بلجيكي مع روابط خلفية من The Conversation وRadio France وRTBF وLa Libre.",
    mozScore: 27,
    pageAuthority: 27,
    linkingDomains: 96,
    inboundLinks: "210+",
    followedLinks: "182+",
    category: "الفعاليات",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "210+",
    topBacklinks: ["theconversation.com (DA 92)", "radiofrance.fr (DA 92)", "theculturetrip.com (DA 89)", "rtbf.be (DA 89)", "lalibre.be (DA 84)"]
  },
  {
    name: "iceel.eu",
    description: "نطاق أوروبي مع روابط خلفية من Europa.eu وFrance Info وCNRS والجامعات الفرنسية.",
    mozScore: 27,
    pageAuthority: 30,
    linkingDomains: 130,
    inboundLinks: "3.6K+",
    followedLinks: "3.5K+",
    category: "عام",
    price: "€450",
    stripePaymentLink: "https://buy.stripe.com/fZu14n6Xt7uCf1j9OO9Zm0j",
    backlinks: "3.6K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "cnrs.fr (DA 90)", "psl.eu (DA 78)", "education.fr (DA 77)"]
  },
  {
    name: "eustartupvillageforum.eu",
    description: "نطاق منتدى شركات ناشئة وابتكار أوروبي مع روابط خلفية من Europa.eu وPages.dev وCampaign Archive وSilicon Republic.",
    mozScore: 27,
    pageAuthority: 28,
    linkingDomains: 85,
    inboundLinks: "219+",
    followedLinks: "185+",
    category: "الشركات الناشئة",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "219+",
    topBacklinks: ["europa.eu (DA 97)", "pages.dev (DA 91)", "campaign-archive.com (DA 84)", "siliconrepublic.com (DA 83)", "wko.at (DA 74)"]
  },
  {
    name: "life-envoll.eu",
    description: "نطاق مشروع بيئة وطبيعة أوروبي مع روابط خلفية من Europa.eu وFranceInfo وCampaign Archive وMidi Libre.",
    mozScore: 27,
    pageAuthority: 22,
    linkingDomains: 54,
    inboundLinks: "67.8K+",
    followedLinks: "67.8K+",
    category: "البيئة",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "67.8K+",
    topBacklinks: ["europa.eu (DA 97)", "franceinfo.fr (DA 91)", "campaign-archive.com (DA 84)", "midilibre.fr (DA 81)", "developpement-durable.gouv.fr (DA 74)"]
  },
  // DA 26
  {
    name: "covenant-capacity.eu",
    description: "نطاق عهد وبناء قدرات أوروبي مع روابط خلفية من Europa.eu وBT وMyNewsDesk وWWF Panda.",
    mozScore: 26,
    pageAuthority: 24,
    linkingDomains: 85,
    inboundLinks: "2.6K+",
    followedLinks: "2.5K+",
    category: "التعاون",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "2.6K+",
    topBacklinks: ["europa.eu (DA 97)", "home.bt.com (DA 92)", "mynewsdesk.com (DA 89)", "wwf.panda.org (DA 87)", "oneworld.net (DA 76)"]
  },
  {
    name: "deparisnet.be",
    description: "نطاق شبكة بلجيكي مع روابط خلفية من Europa.eu وويكيبيديا (ES, FR) وYumpu وGoogle.be.",
    mozScore: 26,
    pageAuthority: 28,
    linkingDomains: 135,
    inboundLinks: "710+",
    followedLinks: "445+",
    category: "الشبكات",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "710+",
    topBacklinks: ["europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "jimdofree.com (DA 95)", "yumpu.com (DA 91)"]
  },
  // DA 25
  {
    name: "gastrosafezone.eu",
    description: "نطاق تصميم وسلامة ضيافة مع روابط خلفية من CNN وThe Conversation وPagina12 وElle Decor.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 47,
    inboundLinks: "66+",
    followedLinks: "58+",
    category: "التصميم/الضيافة",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "66+",
    topBacklinks: ["cnn.com (DA 94)", "theconversation.com (DA 92)", "realty.rbc.ru (DA 88)", "pagina12.com.ar (DA 82)", "elledecor.com (DA 80)"]
  },
  {
    name: "hotelgiotto.eu",
    description: "نطاق ضيافة مع روابط خلفية من Pages.dev وWikitravel وGroupon UK وTravellerspoint.",
    mozScore: 25,
    pageAuthority: 24,
    linkingDomains: 78,
    inboundLinks: "284+",
    followedLinks: "198+",
    category: "الضيافة",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "284+",
    topBacklinks: ["pages.dev (DA 91)", "wikitravel.org (DA 79)", "groupon.co.uk (DA 76)", "groupon.fr (DA 63)", "travellerspoint.com (DA 60)"]
  },
  {
    name: "recharge-green.eu",
    description: "نطاق طاقة خضراء وشحن أوروبي مع روابط خلفية من Google Groups وMDPI وBioMedCentral وFAO.",
    mozScore: 25,
    pageAuthority: 28,
    linkingDomains: 128,
    inboundLinks: "5.5K+",
    followedLinks: "5.5K+",
    category: "الطاقة",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "5.5K+",
    topBacklinks: ["groups.google.com (DA 93)", "mdpi.com (DA 92)", "biomedcentral.com (DA 91)", "fao.org (DA 91)", "bayern.de (DA 89)"]
  },
  {
    name: "brave-project.eu",
    description: "نطاق مشروع أوروبي مع روابط خلفية من Europa.eu وEl Diario وStuttgarter Zeitung والجامعات.",
    mozScore: 24,
    pageAuthority: 24,
    linkingDomains: 73,
    inboundLinks: "194+",
    followedLinks: "133+",
    category: "المشاريع",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "194+",
    topBacklinks: ["europa.eu (DA 97)", "eldiario.es (DA 91)", "stuttgarter-zeitung.de (DA 81)", "techxplore.com (DA 79)", "uah.es (DA 70)"]
  },
  {
    name: "aaliance.eu",
    description: "نطاق رعاية صحية/كبار السن أوروبي مع روابط خلفية من Europa.eu وكامبريدج وSpringer وHeise وEurActiv.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 69,
    inboundLinks: "227+",
    followedLinks: "163+",
    category: "الرعاية الصحية",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "227+",
    topBacklinks: ["europa.eu (DA 97)", "cambridge.org (DA 93)", "springer.com (DA 93)", "heise.de (DA 91)", "euractiv.com (DA 84)"]
  },
  {
    name: "unamec.be",
    description: "نطاق طبي/رعاية صحية بلجيكي مع روابط خلفية من OUP وYumpu وKU Leuven وUGent.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 93,
    inboundLinks: "188+",
    followedLinks: "150+",
    category: "الرعاية الصحية",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "188+",
    topBacklinks: ["oup.com (DA 93)", "yumpu.com (DA 91)", "kuleuven.be (DA 83)", "ugent.be (DA 76)", "justlanded.com (DA 76)"]
  },
  {
    name: "josephines.be",
    description: "نطاق نمط حياة/ضيافة بلجيكي مع روابط خلفية من Mixcloud وDe Standaard وElle.be.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 69,
    inboundLinks: "175+",
    followedLinks: "145+",
    category: "نمط الحياة",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "175+",
    topBacklinks: ["mixcloud.com (DA 92)", "standaard.be (DA 76)", "elle.be (DA 62)", "outtraveler.com (DA 55)", "seniorennet.be (DA 54)"]
  },
  {
    name: "front-vosges-14-18.eu",
    description: "نطاق نصب تذكاري تاريخي للحرب العالمية الأولى مع روابط خلفية من ويكيبيديا (FR, DE) وStackExchange وFranceInfo وINRIA.",
    mozScore: 25,
    pageAuthority: 27,
    linkingDomains: 122,
    inboundLinks: "443+",
    followedLinks: "318+",
    category: "التاريخ",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "443+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "stackexchange.com (DA 91)", "franceinfo.fr (DA 91)", "inria.fr (DA 83)"]
  },
  {
    name: "serletproject.eu",
    description: "نطاق مشروع أوروبي مع روابط خلفية من Apple.com وBit.ly وRTL.fr وويكيبيديا اليونانية.",
    mozScore: 25,
    pageAuthority: 30,
    linkingDomains: 491,
    inboundLinks: "2K+",
    followedLinks: "1.9K+",
    category: "الابتكار",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "2K+",
    topBacklinks: ["apple.com (DA 99)", "bit.ly (DA 94)", "home.pl (DA 93)", "cocolog-nifty.com (DA 90)", "rtl.fr (DA 89)"]
  },
  {
    name: "landmark-project.eu",
    description: "نطاق مشروع أوروبي مع روابط خلفية من Europa.eu وويكيبيديا DE وكامبريدج وYumpu.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 161,
    inboundLinks: "1.1K+",
    followedLinks: "954+",
    category: "المشاريع",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "1.1K+",
    topBacklinks: ["europa.eu (DA 97)", "goo.gl (DA 95)", "de.wikipedia.org (DA 94)", "cambridge.org (DA 93)", "yumpu.com (DA 91)"]
  },
  {
    name: "tandemtech.be",
    description: "نطاق تقنية بلجيكي مع روابط خلفية من Medium وTinyURL وBit.ly وTweakers وKnack.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 61,
    inboundLinks: "613+",
    followedLinks: "565+",
    category: "التكنولوجيا",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "613+",
    topBacklinks: ["medium.com (DA 95)", "tinyurl.com (DA 94)", "bit.ly (DA 94)", "about.me (DA 92)", "pages.dev (DA 91)"]
  },
  {
    name: "happyvpro.nl",
    description: "نطاق إعلام هولندي مع روابط خلفية من TinyURL وEllo وXS4ALL وEmerce وVPRO.",
    mozScore: 25,
    pageAuthority: 23,
    linkingDomains: 74,
    inboundLinks: "1.5K+",
    followedLinks: "1.4K+",
    category: "الإعلام",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "1.5K+",
    topBacklinks: ["tinyurl.com (DA 94)", "ello.co (DA 85)", "xs4all.nl (DA 79)", "emerce.nl (DA 69)", "vpro.nl (DA 68)"]
  },
  {
    name: "edlupt.eu",
    description: "نطاق أوروبي مع روابط خلفية من Pinterest وANSA وRUG Groningen والجامعات الإيطالية.",
    mozScore: 25,
    pageAuthority: 28,
    linkingDomains: 192,
    inboundLinks: "119.7K+",
    followedLinks: "119.6K+",
    category: "عام",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "119.7K+",
    topBacklinks: ["pinterest.com (DA 94)", "ansa.it (DA 91)", "rug.nl (DA 81)", "cnr.it (DA 75)", "unito.it (DA 70)"]
  },
  // DA 25
  {
    name: "xcycle-h2020.eu",
    description: "نطاق تنقل H2020 الأوروبي مع روابط خلفية من Europa.eu وSpringer وMDPI وFrontiers.",
    mozScore: 25,
    pageAuthority: 32,
    linkingDomains: 145,
    inboundLinks: "275+",
    followedLinks: "202+",
    category: "التنقل",
    price: "€249",
    stripePaymentLink: "https://buy.stripe.com/bJefZh5Tp7uCf1jaSS9Zm0m",
    backlinks: "275+",
    topBacklinks: ["europa.eu (DA 97)", "springer.com (DA 93)", "mdpi.com (DA 92)", "frontiersin.org (DA 92)", "euractiv.com (DA 84)"]
  },
  {
    name: "heinekenthecity.nl",
    description: "نطاق حضري/نمط حياة هولندي مع روابط خلفية من Dezeen وSymbaloo وFodors وVPRO.",
    mozScore: 24,
    pageAuthority: 18,
    linkingDomains: 52,
    inboundLinks: "214+",
    followedLinks: "205+",
    category: "نمط الحياة",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "214+",
    topBacklinks: ["dezeen.com (DA 88)", "symbaloo.com (DA 84)", "fodors.com (DA 82)", "vpro.nl (DA 68)", "clara.net (DA 65)"]
  },
  // DA 24
  {
    name: "vos-photos.eu",
    description: "نطاق تصوير أوروبي مع روابط خلفية من E-Monsite وJournalDuNet وCNRS وويكيبيديا SV.",
    mozScore: 24,
    pageAuthority: 31,
    linkingDomains: 578,
    inboundLinks: "4.6K+",
    followedLinks: "3.8K+",
    category: "التصوير",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "4.6K+",
    topBacklinks: ["e-monsite.com (DA 92)", "home.blog (DA 91)", "journaldunet.com (DA 91)", "cnrs.fr (DA 90)", "allthatsinteresting.com (DA 85)"]
  },
  {
    name: "eulis.eu",
    description: "نطاق أوروبي مع روابط خلفية من ويكيبيديا (EN, ES, PT, FR) وEuropa.eu وMDPI.",
    mozScore: 24,
    pageAuthority: 33,
    linkingDomains: 246,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "عام",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "1.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "es.wikipedia.org (DA 96)", "pt.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)"]
  },
  {
    name: "maribe.eu",
    description: "نطاق بحري أوروبي مع روابط خلفية من Europa.eu وThe Conversation وMDPI وجامعة بريستول.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 90,
    inboundLinks: "146+",
    followedLinks: "115+",
    category: "البحري",
    price: "€125",
    backlinks: "146+",
    topBacklinks: ["europa.eu (DA 97)", "theconversation.com (DA 92)", "mdpi.com (DA 92)", "siliconrepublic.com (DA 83)", "bristol.ac.uk (DA 78)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "200jaarstaten-generaal.nl",
    description: "نطاق حكومي هولندي مع روابط خلفية من NOS وجامعة لايدن ومجلس النواب.",
    mozScore: 22,
    pageAuthority: 21,
    linkingDomains: 37,
    inboundLinks: "150+",
    followedLinks: "136+",
    category: "الحكومة/الثقافة",
    price: "€125",
    backlinks: "150+",
    topBacklinks: ["nos.nl (DA 90)", "universiteitleiden.nl (DA 82)", "transparent.com (DA 76)", "tweedekamer.nl (DA 64)", "rd.nl (DA 62)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eu-thor.eu",
    description: "نطاق مشروع أوروبي مع روابط خلفية من ويكيبيديا (EN, FR, DE) وEuropa.eu وYumpu وWHOI.",
    mozScore: 23,
    pageAuthority: 28,
    linkingDomains: 156,
    inboundLinks: "18.4K+",
    followedLinks: "18.3K+",
    category: "المشاريع",
    price: "€125",
    backlinks: "18.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "europa.eu (DA 97)", "fr.wikipedia.org (DA 95)", "de.wikipedia.org (DA 94)", "yumpu.com (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "eccomascfd2006.nl",
    description: "نطاق تقني هولندي مع روابط خلفية من TU Delft وساوثهامبتون وليفربول وNTNU.",
    mozScore: 23,
    pageAuthority: 25,
    linkingDomains: 52,
    inboundLinks: "371+",
    followedLinks: "352+",
    category: "التكنولوجيا",
    price: "€125",
    backlinks: "371+",
    topBacklinks: ["tudelft.nl (DA 85)", "soton.ac.uk (DA 85)", "uu.se (DA 83)", "liverpool.ac.uk (DA 83)", "ntnu.no (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "mbelgique.be",
    description: "نطاق وطني بلجيكي مع روابط خلفية من ويكيبيديا FR وBFMTV وHeise وNU.nl وEurope1.",
    mozScore: 23,
    pageAuthority: 22,
    linkingDomains: 58,
    inboundLinks: "113+",
    followedLinks: "87+",
    category: "عام",
    price: "€125",
    backlinks: "113+",
    topBacklinks: ["fr.wikipedia.org (DA 95)", "bfmtv.com (DA 92)", "heise.de (DA 91)", "nu.nl (DA 91)", "europe1.fr (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "lifemanev.eu",
    description: "نطاق مشروع أوروبي عن الزراعة المستدامة مع روابط خلفية من MDPI وITACYL وCSIC.",
    mozScore: 23,
    pageAuthority: 24,
    linkingDomains: 40,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "الاستدامة",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["mdpi.com (DA 92)", "itacyl.es (DA 45)", "cebas.csic.es (DA 42)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  // DA 22
  {
    name: "bruegel2019.be",
    description: "نطاق تراث ثقافي مع روابط خلفية من Campaign Archive وKnack.be وBrusselslife.",
    mozScore: 22,
    pageAuthority: 24,
    linkingDomains: 42,
    inboundLinks: "323+",
    followedLinks: "312+",
    category: "الفن/التراث",
    price: "€125",
    backlinks: "323+",
    topBacklinks: ["campaign-archive.com (DA 84)", "knack.be (DA 75)", "brusselslife.be (DA 55)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "infoecmi.eu",
    description: "نطاق معلومات أوروبي مع روابط خلفية من ويكيبيديا (EN, ES, PT, RU, DE) وUCL وETH زيورخ.",
    mozScore: 22,
    pageAuthority: 31,
    linkingDomains: 259,
    inboundLinks: "1.2K+",
    followedLinks: "727+",
    category: "المعلومات",
    price: "€125",
    backlinks: "1.2K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "pt.wikipedia.org (DA 96)", "ru.wikipedia.org (DA 94)", "ucl.ac.uk (DA 91)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "romain-roquette.be",
    description: "نطاق شخصي/بورتفوليو بلجيكي مع روابط خلفية من Airbnb وFoursquare وThe Culture Trip وKnack.be.",
    mozScore: 22,
    pageAuthority: 28,
    linkingDomains: 63,
    inboundLinks: "112+",
    followedLinks: "74+",
    category: "البورتفوليو",
    price: "€125",
    backlinks: "112+",
    topBacklinks: ["airbnb.com (DA 93)", "foursquare.com (DA 92)", "theculturetrip.com (DA 89)", "untappd.com (DA 77)", "knack.be (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "naumburgermeister.eu",
    description: "نطاق حكومة محلية ألماني/أوروبي مع روابط خلفية من ويكيبيديا (EN, ES, FR, RU, NL) وBit.ly وCreative Commons.",
    mozScore: 22,
    pageAuthority: 32,
    linkingDomains: 810,
    inboundLinks: "4.9K+",
    followedLinks: "4.7K+",
    category: "الحكومة",
    price: "€125",
    backlinks: "4.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "ru.wikipedia.org (DA 94)", "creativecommons.org (DA 94)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "europeanmuseumforum.eu",
    description: "نطاق منتدى المتاحف الأوروبية مع روابط خلفية من ويكيبيديا (EN, ES, FR, RU, NL) وBit.ly وCreative Commons.",
    mozScore: 22,
    pageAuthority: 32,
    linkingDomains: 810,
    inboundLinks: "4.9K+",
    followedLinks: "4.7K+",
    category: "الثقافة",
    price: "€125",
    backlinks: "4.9K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "es.wikipedia.org (DA 96)", "fr.wikipedia.org (DA 95)", "ru.wikipedia.org (DA 94)", "creativecommons.org (DA 94)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "escmalta2018.eu",
    description: "نطاق فعالية ESC مع روابط خلفية من ETH زيورخ وAzure وCopernicus وCSIC وجامعة موناش.",
    mozScore: 22,
    pageAuthority: 25,
    linkingDomains: 102,
    inboundLinks: "1.1K+",
    followedLinks: "1K+",
    category: "الفعاليات",
    price: "€125",
    backlinks: "1.1K+",
    topBacklinks: ["ethz.ch (DA 89)", "azure.com (DA 84)", "copernicus.eu (DA 83)", "csic.es (DA 78)", "monash.edu (DA 77)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "waterpipp.eu",
    description: "نطاق مشروع مياه وبيئة أوروبي مع روابط خلفية من Europa.eu وBit.ly وAsk.com وCampaign Archive.",
    mozScore: 22,
    pageAuthority: 28,
    linkingDomains: 96,
    inboundLinks: "1.2K+",
    followedLinks: "1.1K+",
    category: "البيئة",
    price: "€125",
    backlinks: "1.2K+",
    topBacklinks: ["europa.eu (DA 97)", "bit.ly (DA 94)", "ask.com (DA 88)", "campaign-archive.com (DA 84)", "worldwidetopsite.com (DA 71)"],
    stripePaymentLink: "https://buy.stripe.com/cNi3cv81xg18g5nf989Zm06"
  },
  {
    name: "artsalivewales.org.uk",
    description: "نطاق فنون ويلز البريطاني مع روابط خلفية من The Guardian وBBC وArts Council.",
    mozScore: 21,
    pageAuthority: 23,
    linkingDomains: 45,
    inboundLinks: "89+",
    followedLinks: "76+",
    category: "الفنون",
    price: "€95",
    backlinks: "89+",
    topBacklinks: ["theguardian.com (DA 94)", "bbc.co.uk (DA 95)", "artscouncil.org.uk (DA 72)"],
    stripePaymentLink: "https://buy.stripe.com/test_abc123"
  }
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const PremiumDomainsAR = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateContactForm(formData);
    if (!validation.success) {
      const errorMessages = 'errors' in validation ? Object.values(validation.errors).join(', ') : 'خطأ في التحقق';
      toast({
        title: "خطأ في التحقق",
        description: errorMessages,
        variant: "destructive",
      });
      return;
    }

    const mailtoUrl = buildSafeMailtoUrl(
      'info@expireddomainnames.co',
      `استفسار عن نطاق: ${formData.domain}`,
      `الاسم: ${formData.name}\nالبريد الإلكتروني: ${formData.email}\nالنطاق: ${formData.domain}\nالرسالة: ${formData.message}`
    );
    
    window.location.href = mailtoUrl;
    
    toast({
      title: "تم فتح عميل البريد الإلكتروني",
      description: "يرجى إرسال البريد الإلكتروني لإكمال طلبك.",
    });
  };

  const handleDomainInquiry = (domainName: string) => {
    setFormData(prev => ({ ...prev, domain: domainName }));
    scrollToSection("contact");
  };

  return (
    <>
      <Helmet>
        <title>شراء أسماء نطاقات منتهية الصلاحية مميزة مع روابط خلفية وسلطة عالية وقيمة SEO</title>
        <meta name="description" content="شراء أسماء نطاقات منتهية الصلاحية مع روابط خلفية؟ نطاقات موثوقة مع سلطة عالية وقيمة SEO. اشترِ أسماء نطاقات مميزة لترتيب أسرع في جوجل. متاحة فوراً." />
        <meta name="keywords" content="شراء اسم نطاق منتهي الصلاحية, أسماء نطاقات منتهية الصلاحية مع روابط خلفية, اسم نطاق مع سلطة, نطاقات منتهية موثوقة, شراء اسم نطاق مميز, اسم نطاق مع قيمة SEO, اسم نطاق قديم مع روابط, أفضل أسماء النطاقات للبيع" />
        <link rel="canonical" href="https://iaee.eu/expireddomainnames/ar/shira-asma-nitaqat-mumayaza-sulta-aliya-qima-seo" />
        <html lang="ar" dir="rtl" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" dir="rtl">
        {/* Language Switcher */}
        <LanguageSwitcher currentLanguage="ar" />
        
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/ar/shira-asma-nitaqat-mumayaza-sulta-aliya-qima-seo" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 flex-shrink-0" />
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent hover:from-amber-300 hover:to-amber-500 transition-all truncate">
                النطاقات المميزة
              </span>
            </RouterLink>
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <RouterLink to="/expireddomainnames/ar/shira-asma-nitaqat-mumayaza-sulta-aliya-qima-seo" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
                <Home className="h-4 w-4" />
                الرئيسية
              </RouterLink>
              <button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                النطاقات
              </button>
              <button onClick={() => scrollToSection("why-premium")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                لماذا المميز؟
              </button>
              <button onClick={() => scrollToSection("seo-redirects")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                SEO والتحويلات
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                الأسئلة الشائعة
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold"
              >
                اتصل بنا
              </Button>
            </nav>
            {/* Mobile menu button */}
            <Button 
              onClick={() => scrollToSection("domains")}
              className="md:hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-xs px-3 py-2"
            >
              النطاقات
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
                <Star className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 inline" />
                مجموعة حصرية من النطاقات المميزة
              </Badge>
              
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  اشترِ أسماء نطاقات منتهية الصلاحية مميزة مع روابط خلفية وسلطة عالية وقيمة SEO
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                عزز حضورك عبر الإنترنت بأسماء نطاقات بنت سلطتها على مر السنين. 
                مثالية لترتيب أسرع وروابط خلفية قوية وفوائد SEO مباشرة.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("domains")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-105"
                >
                  عرض النطاقات
                  <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("why-premium")}
                  className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6"
                >
                  مزيد من المعلومات
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2">
                {[
                  { label: "متوسط درجة MOZ", value: "+29" },
                  { label: "نطاقات مميزة", value: "+110" },
                  { label: "سنوات الخبرة", value: "+10" },
                  { label: "عملاء راضون", value: "+500" }
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
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 inline" />
                النطاقات المتاحة
              </Badge>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
                أسماء نطاقات مميزة للبيع
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto text-sm sm:text-base px-2">
                تم اختيار كل نطاق بعناية بناءً على سلطة MOZ وملف الروابط الخلفية وإمكانية SEO. 
                هل تريد <strong className="text-white">شراء اسم نطاق منتهي الصلاحية</strong> أو تبحث عن <strong className="text-white">نطاقات منتهية موثوقة</strong>؟ اطلع على عروضنا أدناه.
              </p>
            </div>
            
            {/* SEO Intro Text */}
            <div className="max-w-5xl mx-auto mb-6 sm:mb-8 bg-slate-800/30 border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <p className="text-slate-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                <strong className="text-white">هل تبحث عن اسم نطاق بقيمة SEO حقيقية؟</strong> معنا يمكنك شراء <strong className="text-amber-400">أسماء نطاقات منتهية الصلاحية موثوقة مع روابط خلفية</strong> وسلطة عالية، تم فحصها بعناية للجودة والتاريخ. مع نطاق منتهي الصلاحية لا تبدأ من الصفر، بل تستفيد فوراً من الروابط الموجودة والثقة والتاريخ عبر الإنترنت.
              </p>
              <p className="text-slate-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                بالإضافة إلى أسماء النطاقات منتهية الصلاحية، نقدم أيضاً <strong className="text-amber-400">أسماء نطاقات مميزة</strong>: أسماء قصيرة وقوية بقيمة علامة تجارية وإمكانات تجارية. سواء كنت تبدأ موقعاً إلكترونياً أو متجراً إلكترونياً أو مشروع SEO — فإن <strong className="text-white">اسم نطاق بسلطة</strong> يمنحك ميزة واضحة في جوجل.
              </p>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                <strong className="text-white">عمليات البحث الشائعة:</strong> شراء اسم نطاق منتهي الصلاحية مع روابط خلفية • نطاقات منتهية موثوقة • اسم نطاق منتهي بسلطة • شراء اسم نطاق مميز • اسم نطاق بقيمة SEO • اسم نطاق قديم بروابط • أفضل أسماء النطاقات للبيع
              </p>
            </div>

            {/* VAT Notice */}
            <div className="max-w-5xl mx-auto mb-6 sm:mb-10 text-center px-2">
              <p className="text-xs sm:text-sm text-slate-300 font-medium bg-slate-800/40 border border-slate-700/40 rounded-lg px-3 sm:px-4 py-2 sm:py-3 inline-block">
                <span className="text-amber-400 font-semibold">معلومات ضريبة القيمة المضافة:</span> الأسعار غير شاملة ضريبة القيمة المضافة للعملاء الخاصين داخل الاتحاد الأوروبي. يمكن للعملاء التجاريين داخل الاتحاد الأوروبي تطبيق الرسوم العكسية. للعملاء خارج الاتحاد الأوروبي، لا يتم فرض ضريبة القيمة المضافة.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {premiumDomains.map((domain, index) => (
                <Card 
                  key={index} 
                  className="h-full flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group"
                >
                  <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-4 md:p-6">
                    <div className="flex items-start justify-between gap-2">
                      <Badge variant="outline" className="text-[10px] sm:text-xs border-slate-600 text-slate-400 flex-shrink-0">
                        {domain.category}
                      </Badge>
                      <div className="flex items-center gap-1 bg-amber-500/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex-shrink-0">
                        <BarChart3 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
                        <span className="text-[10px] sm:text-xs font-semibold text-amber-400">MOZ {domain.mozScore}</span>
                      </div>
                    </div>
                    <CardTitle className="text-base sm:text-lg md:text-xl text-white group-hover:text-amber-400 transition-colors mt-2 sm:mt-3 break-all" dir="ltr">
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
                          <span>الروابط الخلفية: {domain.backlinks}</span>
                        </div>
                      </div>
                      
                      {/* Extra stats for domains with detailed info */}
                      {domain.pageAuthority && (
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">سلطة الصفحة:</span>
                            <span className="text-white mr-1 font-medium">{domain.pageAuthority}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">نطاقات الربط:</span>
                            <span className="text-white mr-1 font-medium">{domain.linkingDomains}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">الروابط الواردة:</span>
                            <span className="text-white mr-1 font-medium">{domain.inboundLinks}</span>
                          </div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                            <span className="text-slate-500">الروابط المتبوعة:</span>
                            <span className="text-white mr-1 font-medium">{domain.followedLinks}</span>
                          </div>
                        </div>
                      )}
                      
                      {/* Top backlinks */}
                      {domain.topBacklinks && domain.topBacklinks.length > 0 && (
                        <div className="text-[10px] sm:text-xs">
                          <span className="text-slate-500 block mb-1">أفضل الروابط الخلفية:</span>
                          <div className="flex flex-wrap gap-0.5 sm:gap-1">
                            {domain.topBacklinks.slice(0, 5).map((link, i) => (
                              <Badge key={i} variant="outline" className="text-[8px] sm:text-[10px] border-amber-500/30 text-amber-400/80 bg-amber-500/5 px-1 sm:px-1.5 py-0" dir="ltr">
                                {link}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Use Cases */}
                      {domain.useCases && domain.useCases.length > 0 && (
                        <div className="text-[10px] sm:text-xs">
                          <span className="text-slate-500 block mb-1">مناسب لـ:</span>
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
                        <span className="text-xs sm:text-sm font-medium text-slate-300">السعر</span>
                        <span className="text-base sm:text-lg font-bold text-amber-400" dir="ltr">{domain.price}</span>
                      </div>
                      
                      {!domain.stripePaymentLink ? (
                        <div className="flex flex-col gap-2 sm:gap-3">
                          <div 
                            className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#F59E0B] text-slate-950 font-bold rounded-md shadow-md text-sm sm:text-base md:text-lg"
                          >
                            اشترِ الآن
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
                                دفع آمن عبر Stripe
                                <br />
                                يتم التحويل تلقائياً إلى عملتك المحلية
                              </p>
                              <p className="text-[8px] sm:text-[10px] text-slate-400 leading-tight mt-2 sm:mt-3">
                                بعد الدفع ستتلقى رمز النقل (EPP/Auth code) على بريدك الإلكتروني خلال 24 ساعة.
                                <br />
                                تحقق أيضاً من مجلد البريد العشوائي.
                              </p>
                              <a href="#domain-transfer" className="text-[8px] sm:text-[10px] text-amber-400 hover:text-amber-300 underline mt-1.5 sm:mt-2">
                                كيف يعمل النقل؟
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
                            className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold rounded-md shadow-md transition-all duration-200 hover:shadow-lg text-sm sm:text-base md:text-lg"
                          >
                            اشترِ الآن
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
                              <p className="text-[8px] sm:text-[10px] text-slate-400 leading-tight mt-1.5 sm:mt-2">دفع آمن عبر Stripe</p>
                              <a href="#domain-transfer" className="text-[8px] sm:text-[10px] text-amber-400 hover:text-amber-300 underline mt-1.5 sm:mt-2">كيف يعمل النقل؟</a>
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

        {/* Why Premium Domains Section */}
        <section id="why-premium" className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <Badge className="mb-3 sm:mb-4 bg-slate-800 text-amber-400 border-slate-700 text-xs sm:text-sm">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 inline" />
                لماذا النطاقات المميزة
              </Badge>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
                مزايا النطاق المميز
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
                اكتشف لماذا يختار رواد الأعمال والشركات الأذكياء النطاقات المميزة.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: TrendingUp,
                  title: "ترتيب أسرع في جوجل",
                  description: "استفد من السلطة الحالية وابدأ بأساس قوي بدلاً من الصفر."
                },
                {
                  icon: Link,
                  title: "روابط خلفية عالية الجودة",
                  description: "روابط مثبتة من مواقع موثوقة تزيد من مصداقيتك."
                },
                {
                  icon: Shield,
                  title: "تاريخ نظيف",
                  description: "كل نطاق يتم فحصه بعناية للتأكد من عدم وجود سجل بريد عشوائي أو عقوبات."
                },
                {
                  icon: Zap,
                  title: "فهرسة فورية",
                  description: "تعترف محركات البحث بالنطاقات القائمة بسرعة أكبر."
                },
                {
                  icon: Target,
                  title: "ميزة تنافسية",
                  description: "تفوق على منافسيك بالسلطة المبنية."
                },
                {
                  icon: Globe,
                  title: "استخدام متعدد الاستخدامات",
                  description: "مثالي للمواقع الإلكترونية والمتاجر الإلكترونية وتحويلات 301 ومشاريع SEO."
                }
              ].map((advantage, index) => (
                <Card key={index} className="bg-slate-800/40 border-slate-700/50 hover:border-amber-500/30 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                      <advantage.icon className="h-6 w-6 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{advantage.title}</h3>
                    <p className="text-slate-400">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Unique Value Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  لماذا هذه النطاقات فريدة
                </h3>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  تم اختيار نطاقاتنا المميزة بعناية وتلبي متطلبات جودة صارمة.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { icon: Shield, title: "تاريخ نظيف", desc: "لا سجل بريد عشوائي أو عقوبات" },
                  { icon: Link, title: "روابط خلفية عالية الجودة", desc: "من مصادر موثوقة" },
                  { icon: BarChart3, title: "درجة DA عالية", desc: "الحد الأدنى DA 20+" },
                  { icon: Globe, title: "امتدادات EU/عالمية", desc: ".eu, .nl, .be, .de, .co.uk" }
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

        {/* SEO Redirects Section */}
        <section id="seo-redirects" className="py-20 bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                <ArrowUp className="w-4 h-4 ml-2 inline" />
                SEO والتحويلات
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                كيفية استخدام النطاقات المميزة لـ SEO
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                اكتشف طرقاً مختلفة للاستفادة من نطاقك المميز لتحقيق أقصى نتائج SEO.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="bg-slate-800/40 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <ArrowRight className="text-amber-400" />
                    تحويل 301 إلى موقعك
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-400 space-y-4">
                  <p>يسمح لك تحويل 301 بنقل قيمة SEO للنطاق المميز إلى موقعك الحالي. يتم تمرير قوة الرابط إلى موقعك.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>نقل سلطة النطاق</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>تحسين الترتيب بسرعة أكبر</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>تعزيز ملف الروابط الحالي</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/40 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Globe className="text-amber-400" />
                    موقع إلكتروني جديد
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-400 space-y-4">
                  <p>ابدأ موقعاً إلكترونياً أو متجراً إلكترونياً جديداً مباشرة على النطاق المميز واستفد فوراً من السلطة الحالية.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>فهرسة أسرع</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>ثقة فورية</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>نتائج أسرع</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                الأسئلة الشائعة
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                أسئلة شائعة عن النطاقات المميزة و SEO
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "أين يمكنني شراء اسم نطاق منتهي الصلاحية مع روابط خلفية؟",
                    answer: "يمكنك شراء اسم نطاق منتهي الصلاحية مع روابط خلفية من بائع متخصص يفحص النطاقات يدوياً للجودة والتاريخ والسلطة. هذا يمنع شراء نطاق مع روابط بريد عشوائي أو مشاكل SEO. نحن نقدم فقط نطاقات منتهية موثوقة تم فحصها بعناية."
                  },
                  {
                    question: "ما هو اسم النطاق المنتهي الموثوق بسلطة عالية؟",
                    answer: "اسم النطاق المنتهي الموثوق بسلطة عالية هو نطاق لديه روابط خلفية عالية الجودة، وتاريخ موقع نظيف، ولا يوجد بريد عشوائي أو قمار أو ماضي للبالغين، وروابط ذات صلة من محتوى حقيقي. هذا النوع من أسماء النطاقات يقدم قيمة SEO حقيقية ويمنحك ميزة في جوجل."
                  },
                  {
                    question: "كم قيمة SEO لاسم نطاق منتهي الصلاحية مع روابط؟",
                    answer: "تكمن قيمة SEO لاسم نطاق منتهي الصلاحية مع روابط بشكل رئيسي في الروابط الخلفية الموجودة وسلطة النطاق المبنية والثقة الأسرع مع جوجل. هذا يمكن أن يقصر بشكل كبير الوقت للترتيب — غالباً أشهر إلى سنوات أسرع من اسم نطاق جديد."
                  },
                  {
                    question: "هل اسم النطاق المنتهي بسلطة أفضل من بناء الروابط؟",
                    answer: "في كثير من الحالات نعم. مع اسم نطاق منتهي الصلاحية تشتري روابط وسلطة موجودة، بينما بناء الروابط يمكن أن يكون مستهلكاً للوقت ومكلفاً ومحفوفاً بالمخاطر. اسم نطاق قديم بقيمة SEO يمنحك ميزة فورية دون أشهر من الاستثمار في بناء الروابط."
                  },
                  {
                    question: "هل يمكنني استخدام اسم نطاق منتهي الصلاحية لموقع إلكتروني جديد؟",
                    answer: "نعم. يمكنك استخدام اسم نطاق منتهي الصلاحية بقيمة SEO بشكل مثالي لموقع إلكتروني جديد، طالما أن المحتوى يتصل منطقياً بموضوع وتاريخ النطاق. الروابط الخلفية تبقى نشطة وتستفيد فوراً من السلطة المبنية."
                  },
                  {
                    question: "ما الفرق بين اسم نطاق مميز واسم نطاق منتهي الصلاحية؟",
                    answer: "اسم النطاق المميز ذو قيمة بشكل رئيسي بسبب جودة الاسم وقيمة العلامة التجارية، بينما اسم النطاق المنتهي الصلاحية مع روابط خلفية يجلب سلطة وتاريخ SEO إضافي. كلاهما يمكن أن يكون ذا قيمة، اعتماداً على هدفك. بعض النطاقات تجمع بين المزايا."
                  },
                  {
                    question: "لماذا أسماء النطاقات المنتهية الصلاحية مع روابط خلفية أغلى؟",
                    answer: "أسماء النطاقات المنتهية الصلاحية مع روابط خلفية أغلى لأن لديها بالفعل قيمة SEO، توفر الوقت والتكاليف، وتمكّن بداية أسرع. أنت تدفع مقابل الثقة المبنية، وليس فقط للاسم. غالباً ما يسترد الاستثمار نفسه بسرعة من خلال ترتيب أفضل."
                  },
                  {
                    question: "هل أسماء النطاقات المنتهية الصلاحية بسلطة مناسبة للمتاجر الإلكترونية؟",
                    answer: "نعم. للمتاجر الإلكترونية، الثقة أمر حاسم. اسم نطاق منتهي الصلاحية بسلطة عالية يمكن أن يساهم في رؤية أفضل وتحويلات أعلى وفهرسة أسرع. هذا يمنح متجرك الإلكتروني ميزة على المنافسين الذين يبدأون بنطاق جديد."
                  },
                  {
                    question: "هل يمكنني الجمع بين اسم نطاق مميز وفوائد SEO؟",
                    answer: "نعم. بعض أسماء النطاقات المميزة هي أيضاً نطاقات منتهية الصلاحية بتاريخ روابط قوي. هذا يجمع بين قيمة العلامة التجارية وسلطة SEO وهو غالباً الأكثر قيمة. في محفظتنا ستجد عدة نطاقات تقدم كلا المزايا."
                  },
                  {
                    question: "لماذا يختار المزيد من رواد الأعمال أسماء نطاقات منتهية الصلاحية بقيمة SEO؟",
                    answer: "لأن رواد الأعمال يبحثون عن نتائج أسرع في جوجل، واعتماد أقل على بناء الروابط وأساس قوي للنمو. اسم نطاق منتهي الصلاحية موثوق مع روابط خلفية وسلطة يقدم بالضبط تلك الميزة التي تصنع الفرق."
                  },
                  {
                    question: "ما هي سلطة النطاق (DA) ولماذا هي مهمة؟",
                    answer: "سلطة النطاق هي درجة من 1-100 طورتها MOZ تتوقع مدى جودة ترتيب موقع ويب في محركات البحث. DA أعلى يعني سلطة أكثر وفرص أفضل للترتيب العالي. تعتمد على عوامل مثل عدد وجودة الروابط الخلفية وعمر النطاق والموثوقية العامة."
                  },
                  {
                    question: "كيف يعمل تحويل 301 لـ SEO؟",
                    answer: "تحويل 301 هو تحويل دائم يخبر محركات البحث أن صفحة انتقلت بشكل دائم. عندما تقوم بتحويل 301 لنطاق مميز إلى موقعك، يتم نقل جزء كبير من قيمة SEO (قوة الرابط) لذلك النطاق إلى موقعك. هذا يمكن أن يحسن ترتيبك بشكل كبير."
                  },
                  {
                    question: "كم من الوقت يستغرق قبل أن أرى النتائج؟",
                    answer: "تأثيرات نقل النطاق أو تحويل 301 عادة ما تكون مرئية خلال 2-8 أسابيع في نتائج البحث. هذا يعتمد على مدى تكرار زحف جوجل لموقعك والحالة الحالية لموقعك. النطاقات المميزة مع روابط خلفية نشطة غالباً ما تظهر نتائج أسرع."
                  },
                  {
                    question: "ما أفضل طريقة للعثور على أسماء نطاقات منتهية الصلاحية بسلطة؟",
                    answer: "أفضل طريقة هي من خلال بائع متخصص يفحص النطاقات مسبقاً. البحث بنفسك عبر مواقع المزادات ينطوي على مخاطر. نحن نختار فقط أسماء نطاقات بروابط عالية الجودة، ولا يوجد تاريخ بريد عشوائي وقيمة SEO حقيقية. بهذه الطريقة تعرف أنك تستثمر في نطاق موثوق."
                  },
                  {
                    question: "لماذا توجد أحياناً مواقع من محفظتكم في تاريخ النطاق؟",
                    answer: "بعض أسماء النطاقات في محفظتنا استُخدمت سابقاً لمشاريعنا الخاصة أو مواقع اختبار أو تحويلات 301. هذا يشمل مواقع مثل NailTalk وOntwerpNovi وOliveVines ومشاريع مماثلة. هذا في الواقع ميزة: هذه النطاقات لها نتائج مثبتة وتم اختبارها بنشاط لأداء SEO. جميع أسماء نطاقاتنا يتم فحصها بدقة قبل البيع مع مصادر متعددة (مثل أرشيفات تاريخ الويب وجوجل وAhrefs وMOZ ومدققي البريد العشوائي) وهي خالية تماماً من التاريخ الضار مثل البريد العشوائي أو محتوى البالغين أو التاريخ المتعلق بالقمار. موقع من محفظتنا الخاصة في التاريخ هو إذن علامة جودة وإدارة دقيقة — وليس سبباً للقلق."
                  },
                  {
                    question: "كيف يعمل SEO وبناء الروابط؟ ولماذا أحتاج للاستمرار في صيانة نطاقي المشترى؟",
                    answer: "SEO (تحسين محركات البحث) يتعلق بتحسين موقعك حتى تتمكن محركات البحث مثل جوجل من العثور عليه وفهمه وترتيبه بشكل أفضل. بناء الروابط جزء حاسم من هذا: الحصول على روابط خلفية (مراجع) من مواقع أخرى إلى موقعك. هذه الروابط تعمل كـ 'أصوات ثقة' وتخبر جوجل أن محتواك ذو قيمة.\n\n**لماذا الصيانة ضرورية:**\nاسم نطاق مميز مع روابط خلفية موجودة يمنحك أساساً قوياً، لكن لا يوجد اسم نطاق يقدم ضمانات على الترتيب. SEO عملية مستمرة. الروابط الخلفية يمكن أن تختفي بمرور الوقت عندما تتوقف المواقع المرجعية عن العمل أو تزيل المحتوى. بالإضافة إلى ذلك، تتغير خوارزميات جوجل بانتظام، لذا ما يعمل اليوم قد يكون مختلفاً غداً."
                  }
                ].map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-slate-800/40 border border-slate-700/50 rounded-xl px-6 data-[state=open]:border-amber-500/30"
                  >
                    <AccordionTrigger className="text-right text-white hover:text-amber-400 hover:no-underline py-4">
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
                  <AccordionTrigger className="text-right text-white hover:text-amber-400 hover:no-underline py-4">
                    <h3 className="font-semibold">الدليل الكامل: 35 سؤالاً عن أسماء النطاقات المنتهية الصلاحية و SEO</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 pb-6 leading-relaxed">
                    <div className="space-y-8 whitespace-pre-line">
                      {[
                        {
                          question: "1. أي اسم نطاق يجب أن أشتريه كمبتدئ؟",
                          answer: "كمبتدئ، من الأفضل اختيار اسم نطاق سهل التذكر، يشير بوضوح إلى ما تفعله ويبث الثقة. كثير من المبتدئين يبحثون عن 'أي اسم نطاق يجب أن أشتريه' وينتهي بهم الأمر تلقائياً بنطاقات جديدة، بينما اسم نطاق منتهي الصلاحية موثوق غالباً لديه بالفعل سلطة وقيمة مبنية."
                        },
                        {
                          question: "2. ما الفرق بين اسم نطاق جديد واسم نطاق منتهي الصلاحية؟",
                          answer: "اسم النطاق الجديد ليس له تاريخ ويبدأ من الصفر تماماً. اسم النطاق المنتهي الصلاحية تم تسجيله من قبل وقد لا يزال لديه روابط خلفية وسلطة وثقة مع جوجل. هذا يجعل اسم النطاق المنتهي الصلاحية غالباً أكثر جاذبية لـ SEO والرؤية."
                        },
                        {
                          question: "3. هل من الأفضل شراء اسم نطاق جديد أو اسم نطاق منتهي الصلاحية؟",
                          answer: "أولئك الذين يبحثون عن 'اسم نطاق جديد أو اسم نطاق منتهي الصلاحية' عادة ما يقارنون السرعة والنتائج. للعلامة التجارية، يمكن أن يعمل اسم جديد، لكن للعثور عليه في جوجل بشكل أسرع، غالباً ما يقدم اسم نطاق منتهي الصلاحية جيد ميزة واضحة."
                        },
                        {
                          question: "4. لماذا يحصل موقعي الجديد على ترتيب سيء في جوجل؟",
                          answer: "المواقع الجديدة لا تزال بحاجة لبناء موثوقيتها. بدون روابط خلفية وتاريخ، هذا غالباً يستغرق أشهراً. اسم نطاق منتهي الصلاحية مع روابط جيدة يمكن أن يضمن أنك لا تضطر للبدء من الصفر تماماً."
                        },
                        {
                          question: "5. هل شراء اسم نطاق منتهي الصلاحية آمن؟",
                          answer: "نعم، طالما أنه اسم نطاق منتهي الصلاحية تم فحصه وموثوق. الخطر ليس في 'منتهي الصلاحية'، ولكن في النطاقات التي لم يتم فحصها للبريد العشوائي أو سوء الاستخدام أو الروابط الخلفية السيئة."
                        },
                        {
                          question: "6. ماذا يعني اسم نطاق مع روابط خلفية جيدة؟",
                          answer: "اسم النطاق مع روابط خلفية جيدة لديه مراجع من مواقع حقيقية وذات صلة. هذه الروابط تضمن السلطة والثقة مع محركات البحث، وهو أمر ضروري لأداء SEO."
                        },
                        {
                          question: "7. لماذا الروابط الخلفية مهمة عند شراء اسم نطاق؟",
                          answer: "الروابط الخلفية هي واحدة من أهم عوامل الترتيب في جوجل. عندما تبحث عن 'شراء اسم نطاق SEO'، فأنت في الواقع تبحث عن نطاق بنى بالفعل ثقة — بالضبط ما يقدمه اسم نطاق منتهي الصلاحية جيد."
                        },
                        {
                          question: "8. كيف أعرف إذا كان اسم نطاق منتهي الصلاحية موثوقاً؟",
                          answer: "اسم النطاق المنتهي الموثوق يتم فحصه لـ: تاريخ الموقع، جودة الروابط الخلفية، غياب البريد العشوائي والقمار أو محتوى البالغين. كبائع، نختار فقط النطاقات التي تلبي هذه المعايير."
                        },
                        {
                          question: "9. هل يمكنني استخدام اسم نطاق منتهي الصلاحية لموقع إلكتروني جديد؟",
                          answer: "نعم. يمكنك استخدام اسم نطاق منتهي الصلاحية بشكل مثالي لمشروع جديد تماماً. المحتوى جديد، لكن اسم النطاق يجلب بالفعل سلطة عبر الإنترنت."
                        },
                        {
                          question: "10. هل اسم نطاق منتهي الصلاحية مناسب للمبتدئين؟",
                          answer: "بالتأكيد. المبتدئون غالباً يستفيدون أكثر لأنهم: يحصلون على رؤية أسرع، لديهم تأخر SEO أقل، يبدأون بداية أكثر احترافية."
                        },
                        {
                          question: "11. لماذا بعض أسماء النطاقات أغلى من غيرها؟",
                          answer: "عمليات البحث مثل 'لماذا اسم النطاق باهظ الثمن' غالباً تأتي من سوء فهم القيمة. السعر يحدده: جودة الاسم، قيمة SEO، الروابط الخلفية، التطبيق التجاري."
                        },
                        {
                          question: "12. هل يمكنني بيع اسم نطاق منتهي الصلاحية لاحقاً؟",
                          answer: "نعم. كثير من الناس يبحثون عن 'اسم النطاق كاستثمار'. اسم نطاق منتهي قوي غالباً يحتفظ بقيمته ويمكن أن يزداد في السعر."
                        },
                        {
                          question: "13. هل يمكن أن يكون اسم نطاق منتهي الصلاحية سيئاً لـ SEO؟",
                          answer: "فقط إذا كان له تاريخ سيء. لهذا السبب هناك فرق كبير بين: نطاقات منتهية غير مفحوصة وأسماء نطاقات مختارة بعناية وموثوقة."
                        },
                        {
                          question: "14. ما الذي يجب أن أنتبه له عند شراء اسم نطاق منتهي الصلاحية؟",
                          answer: "نقاط الاهتمام المهمة هي: تاريخ خالٍ من البريد العشوائي، روابط خلفية ذات صلة، اسم نطاق منطقي، لا خطر علامة تجارية."
                        },
                        {
                          question: "15. كم سريعاً يمكنني البدء بعد شراء اسم نطاق؟",
                          answer: "بعد النقل يمكنك استخدام اسم النطاق فوراً لـ: موقع إلكتروني، بريد إلكتروني، متجر إلكتروني. تماماً مثل اسم نطاق جديد."
                        },
                        {
                          question: "16. هل أحتاج معرفة تقنية لاستخدام اسم نطاق منتهي الصلاحية؟",
                          answer: "لا. اسم النطاق المنتهي الصلاحية يعمل تقنياً بنفس طريقة اسم النطاق الجديد ويمكن استخدامه مع أي مزود استضافة."
                        },
                        {
                          question: "17. هل اسم نطاق منتهي الصلاحية مناسب لمتجر إلكتروني؟",
                          answer: "نعم. المتاجر الإلكترونية تستفيد بشكل خاص من: الثقة، السلطة، بداية أفضل في جوجل. هذا أمر حاسم للتحويلات."
                        },
                        {
                          question: "18. ماذا تعني سلطة النطاق عند شراء اسم نطاق؟",
                          answer: "سلطة النطاق هي مؤشر على مدى قوة النطاق بناءً على الروابط والتاريخ. كثير من أسماء النطاقات المنتهية الصلاحية تحصل على درجات أعلى هنا من النطاقات الجديدة."
                        },
                        {
                          question: "19. هل اسم نطاق منتهي الصلاحية أفضل من بناء الروابط؟",
                          answer: "لكثير من رواد الأعمال، نعم. بناء الروابط كثيف العمل ومكلف ويمكن أن يستغرق سنوات. مع اسم نطاق منتهي الصلاحية جيد تشتري: ميزة فورية، مخاطر أقل، نتائج أسرع."
                        },
                        {
                          question: "20. كم يكلف اسم نطاق منتهي الصلاحية جيد؟",
                          answer: "الأسعار تختلف اعتماداً على: سلطة النطاق، ملف الروابط الخلفية، الصناعة. نطاق رخيص بدون قيمة يقول القليل — الجودة تكلف، لكنها تسترد نفسها."
                        },
                        {
                          question: "21. هل الكلمة المفتاحية في اسم نطاقي مهمة لـ SEO؟",
                          answer: "أقل أهمية مما كانت عليه. اسم واضح وموثوق الآن أكثر أهمية من الكلمات المفتاحية الدقيقة."
                        },
                        {
                          question: "22. هل يمكنني استخدام اسم نطاق منتهي الصلاحية لموقع أفيلييت؟",
                          answer: "نعم، خاصة إذا كان له روابط خلفية ذات صلة وتاريخ موضوعي. هذا يمنحك بداية أسرع في مجالات تنافسية."
                        },
                        {
                          question: "23. ماذا لو تم معاقبة اسم نطاق منتهي الصلاحية من قبل جوجل؟",
                          answer: "يجب تجنب نطاق مع عقوبة. لهذا السبب نفحص كل نطاق مسبقاً للبريد العشوائي والعقوبات والروابط غير الطبيعية."
                        },
                        {
                          question: "24. كيف أنقل اسم نطاق مشترى إلى استضافتي الخاصة؟",
                          answer: "بعد الشراء ستحصل على كود EPP/auth. تُدخل هذا عند مسجل النطاق الجديد لإكمال النقل."
                        },
                        {
                          question: "25. هل نطاق .nl أو .eu أفضل من .com؟",
                          answer: "يعتمد على جمهورك المستهدف. لهولندا، .nl قوي. لأوروبا، .eu. للدولي، .com. سلطة النطاق أكثر أهمية من الامتداد."
                        },
                        {
                          question: "26. هل يمكنني تحويل اسم نطاق منتهي الصلاحية إلى موقعي الحالي؟",
                          answer: "نعم. بتحويل 301 تنقل قيمة SEO للنطاق المنتهي إلى موقعك الرئيسي. هذه استراتيجية شائعة لتعزيز السلطة."
                        },
                        {
                          question: "27. كم من الوقت يستغرق قبل أن يرتب اسم نطاق منتهي الصلاحية في جوجل؟",
                          answer: "أسرع من نطاق جديد — غالباً خلال أيام أو أسابيع، اعتماداً على جودة النطاق والمحتوى الذي تضعه."
                        },
                        {
                          question: "28. ما مزايا اسم نطاق منتهي الصلاحية مقارنة باسم نطاق جديد؟",
                          answer: "رؤية أسرع، روابط خلفية موجودة، ثقة أكثر مع جوجل، اعتماد أقل على بناء الروابط."
                        },
                        {
                          question: "29. هل يمكنني الوثوق باسم نطاق منتهي الصلاحية من سوق عشوائي؟",
                          answer: "ليس دائماً. كثير من الأسواق لا تفحص الجودة. لهذا السبب من الحكمة الشراء من بائع متخصص يضمن الشفافية والجودة."
                        },
                        {
                          question: "30. كيف أعرف إذا كان لاسم نطاق روابط خلفية قيمة؟",
                          answer: "استخدم أدوات مثل Ahrefs وMOZ أو SEMrush. نقدم هذه المعلومات بشفافية لكل نطاق في محفظتنا."
                        },
                        {
                          question: "31. هل الاستثمار في اسم نطاق منتهي الصلاحية فكرة جيدة؟",
                          answer: "لكثير من رواد الأعمال والمستثمرين، نعم. نطاق قوي بسلطة يحتفظ بقيمته ويمكن أن يزداد."
                        },
                        {
                          question: "32. ماذا يحدث للروابط الخلفية القديمة عندما أبني موقعاً إلكترونياً جديداً؟",
                          answer: "الروابط الخلفية تبقى طالما لم تُزَل من قبل المواقع المرجعية. هذا بالضبط واحد من المزايا العظيمة لاسم نطاق منتهي الصلاحية."
                        },
                        {
                          question: "33. هل يمكنني استخدام اسم نطاق منتهي الصلاحية لعمل محلي؟",
                          answer: "نعم، خاصة إذا كان للنطاق صلة إقليمية أو روابط خلفية محلية. هذا يمكن أن يساعدك في الظهور في عمليات البحث المحلية."
                        },
                        {
                          question: "34. هل هناك مخاطر مع شراء اسم نطاق منتهي الصلاحية؟",
                          answer: "فقط إذا لم تفحص النطاق مسبقاً. البريد العشوائي والعقوبات أو الروابط غير الطبيعية هي مخاطر نقوم بتصفيتها مسبقاً."
                        },
                        {
                          question: "35. لماذا الشراء من بائع نطاقات منتهية الصلاحية متخصص؟",
                          answer: "لأنك: تحصل على جودة مفحوصة مسبقاً، تتجنب المخاطر، تحصل على شفافية حول كل نطاق، وتوفر الوقت والمال على بحثك الخاص."
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
                  <Mail className="w-4 h-4 ml-2 inline" />
                  تواصل معنا
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  اطلب معلومات أو قدم عرضاً
                </h2>
                <p className="text-slate-400">
                  مهتم بأحد نطاقاتنا المميزة؟ املأ النموذج وسنتواصل معك في أقرب وقت ممكن.
                </p>
              </div>
              
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <User className="w-4 h-4 inline ml-2" />
                          الاسم *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="اسمك"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <Mail className="w-4 h-4 inline ml-2" />
                          البريد الإلكتروني *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="your@email.com"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                          dir="ltr"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Globe className="w-4 h-4 inline ml-2" />
                        اختيار اسم النطاق *
                      </label>
                      <Input
                        type="text"
                        value={formData.domain}
                        onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                        placeholder="مثال: FinanceAuthority.com"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                        required
                        dir="ltr"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <MessageSquare className="w-4 h-4 inline ml-2" />
                        رسالة / معلومات إضافية
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="أخبرنا المزيد عن اهتمامك، اطرح أسئلة أو قدم عرضاً..."
                        rows={5}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40"
                    >
                      إرسال الطلب
                      <ArrowLeft className="mr-2 h-5 w-5" />
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
                  شراء أسماء نطاقات منتهية الصلاحية: استثمر في سلطة SEO مثبتة
                </h2>
                
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-amber-400">شراء اسم نطاق منتهي الصلاحية</strong> هو أذكى طريقة للاستفادة فوراً من سنوات من <strong className="text-white">سلطة النطاق</strong> المتراكمة و<strong className="text-white">روابط خلفية عالية الجودة</strong>. على عكس اسم النطاق الجديد، نطاق منتهي الصلاحية مميز لديه بالفعل ثقة مع جوجل ومحركات البحث الأخرى. هذا يترجم مباشرة إلى ترتيب أفضل وفهرسة أسرع والمزيد من الزيارات العضوية.
                  </p>
                  
                  <p>
                    <strong className="text-amber-400">نطاقاتنا المميزة</strong> المختارة بعناية لها سجل مثبت مع روابط خلفية من مصادر موثوقة مثل ويكيبيديا والجامعات والمؤسسات الحكومية ومواقع الأخبار ذات السمعة الطيبة. هذه <strong className="text-white">الروابط الخلفية عالية الجودة</strong> هي نتيجة سنوات من الحضور عبر الإنترنت ومن المستحيل عملياً بناؤها بنفسك — إلا إذا كنت مستعداً لاستثمار آلاف اليوروهات في بناء الروابط.
                  </p>
                  
                  <p>
                    سواء كنت تريد <strong className="text-white">بدء متجر إلكتروني</strong>، أو إطلاق <strong className="text-white">موقع أفيلييت</strong>، أو إعطاء عملك الحالي <strong className="text-white">دفعة SEO</strong>: اسم نطاق منتهي الصلاحية بسلطة <strong className="text-amber-400">MOZ Domain Authority (DA)</strong> عالية يمنحك ميزة لا لبس فيها على المنافسة. بينما ينتظر الآخرون أشهراً حتى يثق جوجل بنطاقهم الجديد، أنت تستفيد فوراً من السلطة الموجودة.
                  </p>
                  
                  <p>
                    <strong className="text-white">لماذا الانتظار؟</strong> كل نطاق مميز في محفظتنا يتم فحصه لتاريخ خالٍ من البريد العشوائي وروابط خلفية ذات صلة وملفات روابط جيدة. أنت تشتري اسم نطاق أصل استراتيجي يضيف قيمة فوراً إلى حضورك عبر الإنترنت. من <strong className="text-white">تحويلات 301</strong> لتكديس السلطة إلى بدء موقع إلكتروني جديد مباشرة: الاحتمالات لا نهاية لها.
                  </p>
                  
                  <div className="bg-gradient-to-r from-amber-500/10 to-slate-800/30 border border-amber-500/20 rounded-xl p-6 mt-8">
                    <p className="text-center text-lg mb-0">
                      <strong className="text-amber-400">هل أنت مستعد لتسريع نجاحك عبر الإنترنت؟</strong><br />
                      <span className="text-slate-300">اطلع على محفظتنا من أكثر من 110 أسماء نطاقات منتهية الصلاحية مميزة واكتشف أي نطاق يناسب طموحك تماماً. استثمر في سلطة مثبتة اليوم واترك منافسيك خلفك.</span>
                    </p>
                  </div>
                </div>
              </article>
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
                        <span>كيف تنقل نطاقك برمز النقل (EPP/Auth code)؟</span>
                      </div>
                    </h2>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="space-y-6 text-slate-300">
                      <p className="text-lg">
                        بعد شرائك، ستحصل على <strong className="text-amber-400">رمز النقل</strong> (يسمى أيضاً كود EPP أو كود Auth) خلال 24 ساعة على عنوان البريد الإلكتروني الذي قدمته أثناء الدفع. بهذا الكود يمكنك نقل النطاق بسهولة إلى مسجل النطاق الخاص بك أو مزود الاستضافة.
                      </p>
                      
                      <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                        <h3 className="text-lg font-semibold text-white mb-4">تعليمات خطوة بخطوة:</h3>
                        <ol className="space-y-4">
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">1</span>
                            <div>
                              <strong className="text-white">استلام رمز النقل</strong>
                              <p className="text-slate-400 mt-1">تحقق من صندوق الوارد (ومجلد البريد العشوائي) للبريد الإلكتروني مع رمز النقل. ستحصل على هذا خلال 24 ساعة بعد الدفع.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">2</span>
                            <div>
                              <strong className="text-white">تسجيل الدخول إلى مسجل النطاق أو مزود الاستضافة</strong>
                              <p className="text-slate-400 mt-1">اذهب إلى إدارة النطاق لمزودك (مثل GoDaddy وNamecheap وGoogle Domains وOVH وغيرها).</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">3</span>
                            <div>
                              <strong className="text-white">ابدأ نقل النطاق</strong>
                              <p className="text-slate-400 mt-1">ابحث عن خيار "نقل نطاق" أو "نقل داخل" وأدخل اسم النطاق.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">4</span>
                            <div>
                              <strong className="text-white">أدخل رمز النقل</strong>
                              <p className="text-slate-400 mt-1">أدخل كود EPP/Auth الذي تلقيته منا. سيتم استخدام هذا للتحقق من ملكيتك.</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center">5</span>
                            <div>
                              <strong className="text-white">أكد النقل</strong>
                              <p className="text-slate-400 mt-1">اتبع خطوات مزودك لإكمال النقل. يستغرق هذا عادة 1-7 أيام، اعتماداً على المسجل والامتداد.</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      
                      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                        <p className="text-amber-400 font-medium mb-2">نصيحة:</p>
                        <p className="text-slate-400">تأكد من أن حساب البريد الإلكتروني المرتبط بنطاقك الجديد متاح ويعمل. قد يتم إرسال بريد إلكتروني للتحقق أثناء النقل.</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Processing Section */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">دفع آمن</h3>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                جميع المدفوعات تتم معالجتها بشكل آمن عبر Stripe. نقبل جميع بطاقات الائتمان الرئيسية وطرق الدفع المحلية.
              </p>
              <div className="flex justify-center mb-8">
                <img src={stripeLogo} alt="Stripe - دفع آمن" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
              </div>

              {/* NordVPN Recommendation Section */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <h4 className="font-bold text-white text-lg mb-2">🔒 احمِ خصوصيتك مع NordVPN</h4>
                  <p className="text-white/90 text-sm mb-3">
                    ما هي VPN؟ <a href="https://www.dpbolvw.net/click-100643838-15520886" target="_blank" rel="noopener noreferrer" className="underline text-yellow-300 hover:text-yellow-200">الشبكة الافتراضية الخاصة (VPN)</a> تشفر اتصالك بالإنترنت وتخفي عنوان IP الخاص بك، مما يحمي بياناتك الشخصية من القراصنة والمتتبعين والمراقبة.
                  </p>
                  <p className="text-white/80 text-xs mb-4">
                    لمالكي النطاقات المميزة، حماية هويتك عبر الإنترنت أمر ضروري. NordVPN يتيح لك التصفح بشكل مجهول والوصول إلى المحتوى العالمي وتأمين معاملاتك التجارية.
                  </p>
                  <a 
                    href="https://www.dpbolvw.net/click-100643838-15520886" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-6 rounded-full transition-colors text-sm"
                  >
                    احصل على NordVPN الآن ←
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Links */}
        <LegalLinksPremiumDomainsAR />
        
        {/* Footer */}
        <FooterPremiumDomainsAR />
      </div>
    </>
  );
};

export default PremiumDomainsAR;