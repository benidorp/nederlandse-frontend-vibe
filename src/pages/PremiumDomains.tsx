import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Crown, TrendingUp, Shield, Globe, Zap, Award, ArrowRight, CheckCircle, Star, Link, Target, BarChart3, Mail, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Premium domain data - can be easily updated
const premiumDomains = [
  {
    name: "escp-eap.eu",
    description: "Premium business school domein met backlinks van Wikipedia, Cornell, Spiegel en Le Monde.",
    mozScore: 38,
    pageAuthority: 28,
    linkingDomains: 292,
    inboundLinks: "4.6K+",
    followedLinks: "4.2K+",
    category: "Onderwijs",
    price: "Op aanvraag",
    backlinks: "4.6K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cornell.edu (DA 92)", "spiegel.de (DA 90)", "lemonde.fr (DA 93)"]
  },
  {
    name: "toulousespaceshow.eu",
    description: "Premium ruimtevaart domein met backlinks van Europa.eu, NASA.gov, IEEE.org en Wikipedia.",
    mozScore: 35,
    pageAuthority: 31,
    linkingDomains: 397,
    inboundLinks: "3.4K+",
    followedLinks: "1.8K+",
    category: "Technologie",
    price: "Op aanvraag",
    backlinks: "3.4K+",
    topBacklinks: ["europa.eu (DA 94)", "nasa.gov (DA 95)", "ieee.org (DA 93)", "en.wikipedia.org (DA 97)"]
  },
  {
    name: "antigonetickets.be",
    description: "Belgisch ticketing domein met backlinks van Nieuwsblad, De Standaard en GVA.",
    mozScore: 36,
    pageAuthority: 23,
    linkingDomains: 120,
    inboundLinks: "6.6K+",
    followedLinks: "6.6K+",
    category: "Entertainment",
    price: "Op aanvraag",
    backlinks: "6.6K+",
    topBacklinks: ["nieuwsblad.be (DA 79)", "standaard.be (DA 81)", "gva.be (DA 73)"]
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
    price: "Op aanvraag",
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
    price: "Op aanvraag",
    backlinks: "719+",
    topBacklinks: ["bbc.co.uk (DA 95)", "theguardian.com (DA 95)", "nme.com (DA 86)", "pitchfork.com (DA 88)"]
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
    price: "Op aanvraag",
    backlinks: "898+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "nbcnews.com (DA 93)", "cam.ac.uk (DA 93)", "reddit.com (DA 97)"]
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
    price: "Op aanvraag",
    backlinks: "232+",
    topBacklinks: ["globo.com (DA 93)", "harpersbazaar.com (DA 89)", "vogue.com (DA 92)", "grazia.it (DA 73)"]
  },
  {
    name: "improve-research.eu",
    description: "Onderzoeksdomein met backlinks van Europa.eu, Cambridge, Springer en LSE.",
    mozScore: 32,
    pageAuthority: 30,
    linkingDomains: 106,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "Onderzoek",
    price: "Op aanvraag",
    backlinks: "2.7K+",
    topBacklinks: ["europa.eu (DA 94)", "cam.ac.uk (DA 93)", "springer.com (DA 92)", "lse.ac.uk (DA 90)"]
  },
  {
    name: "etongmbh.de",
    description: "Duits bedrijfsdomein met sterke zakelijke autoriteit en backlinks van Naver, Yumpu, Heise, Computerbase en Motor-Talk.",
    mozScore: 33,
    pageAuthority: 27,
    linkingDomains: 321,
    inboundLinks: "3.9K+",
    followedLinks: "1.6K+",
    category: "Business",
    price: "Op aanvraag",
    backlinks: "3.9K+",
    topBacklinks: ["naver.com (DA 93)", "yumpu.com (DA 91)", "heise.de (DA 91)", "computerbase.de (DA 84)", "motor-talk.de (DA 73)"]
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
    price: "Op aanvraag",
    backlinks: "276+",
    topBacklinks: ["globo.com (DA 95)", "huffpost.com (DA 94)", "cbsnews.com (DA 93)", "gizmodo.com (DA 93)", "fastcompany.com (DA 92)"]
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
    price: "Op aanvraag",
    backlinks: "690.3K+",
    topBacklinks: ["scoop.it (DA 92)", "franceinfo.fr (DA 91)", "latribune.fr (DA 86)", "culture.gouv.fr (DA 76)", "agriculture.gouv.fr (DA 72)"]
  },
  {
    name: "machuproject.eu",
    description: "Europees project domein met backlinks van Wikipedia, Cambridge, UNESCO en Reddit.",
    mozScore: 31,
    pageAuthority: 27,
    linkingDomains: 162,
    inboundLinks: "379+",
    followedLinks: "266+",
    category: "Projecten",
    price: "Op aanvraag",
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
    price: "Op aanvraag",
    backlinks: "333+",
    topBacklinks: ["europa.eu (DA 97)", "github.com (DA 96)", "nytimes.com (DA 95)", "elpais.com (DA 94)", "springer.com (DA 93)"]
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
    price: "Op aanvraag",
    backlinks: "1.7K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "variety.com (DA 93)", "constantcontact.com (DA 90)", "rtbf.be (DA 89)", "courrierinternational.com (DA 80)"]
  },
  {
    name: "emg-nice2015.fr",
    description: "Frans domein met sterke autoriteit, ideaal voor internationale projecten.",
    mozScore: 31,
    category: "Internationaal",
    price: "Op aanvraag",
    backlinks: "720+"
  },
  {
    name: "euromedialiteracy.eu",
    description: "Educatief EU-domein gericht op media en onderwijs.",
    mozScore: 31,
    category: "Onderwijs",
    price: "Op aanvraag",
    backlinks: "720+"
  },
  {
    name: "evader-project.eu",
    description: "EU-project domein met sterke backlinks.",
    mozScore: 31,
    category: "Projecten",
    price: "Op aanvraag",
    backlinks: "710+"
  },
  {
    name: "toastit-live.be",
    description: "Belgisch entertainment/media domein.",
    mozScore: 31,
    category: "Media",
    price: "Op aanvraag",
    backlinks: "690+"
  },
  {
    name: "citiexpress.eu",
    description: "Transport en logistiek EU-domein.",
    mozScore: 31,
    category: "Transport",
    price: "Op aanvraag",
    backlinks: "680+"
  },
  {
    name: "ilovecosmetics.eu",
    description: "Beauty en cosmetica domein met sterke consumentenappeal.",
    mozScore: 31,
    category: "Beauty",
    price: "Op aanvraag",
    backlinks: "710+"
  },
  {
    name: "hznet.nl",
    description: "Nederlands netwerk domein met lokale autoriteit.",
    mozScore: 31,
    category: "Netwerk",
    price: "Op aanvraag",
    backlinks: "700+"
  },
  {
    name: "bovisadrivein.it",
    description: "Italiaans entertainment domein, geschikt voor bioscopen of evenementen.",
    mozScore: 31,
    category: "Entertainment",
    price: "Op aanvraag",
    backlinks: "680+"
  },
  {
    name: "rtmpilecki.eu",
    description: "Historisch/cultureel EU-domein met sterke backlinks.",
    mozScore: 31,
    category: "Cultuur",
    price: "Op aanvraag",
    backlinks: "690+"
  },
  {
    name: "friendsofthesupergrid.eu",
    description: "Energie en infrastructuur EU-domein.",
    mozScore: 30,
    category: "Energie",
    price: "Op aanvraag",
    backlinks: "670+"
  },
  {
    name: "evacuate.eu",
    description: "Veiligheid en noodplanning EU-domein.",
    mozScore: 30,
    category: "Veiligheid",
    price: "Op aanvraag",
    backlinks: "660+"
  },
  {
    name: "leading-the-digital-decade.eu",
    description: "Digitale transformatie EU-domein met sterke autoriteit.",
    mozScore: 30,
    category: "Digitaal",
    price: "Op aanvraag",
    backlinks: "680+"
  },
  {
    name: "greenweek2010.eu",
    description: "Duurzaamheids domein, perfect voor milieu-initiatieven.",
    mozScore: 29,
    category: "Duurzaamheid",
    price: "Op aanvraag",
    backlinks: "580+"
  },
  {
    name: "resurbis.eu",
    description: "EU-domein voor duurzaamheid of circulaire economie projecten.",
    mozScore: 29,
    category: "Duurzaamheid",
    price: "Op aanvraag",
    backlinks: "560+"
  },
  {
    name: "bryn-somersethouse.co.uk",
    description: "Brits vastgoed/hospitality domein met lokale autoriteit.",
    mozScore: 29,
    category: "Vastgoed",
    price: "Op aanvraag",
    backlinks: "520+"
  },
  {
    name: "euforistudy.eu",
    description: "Educatief EU-studie domein.",
    mozScore: 29,
    category: "Onderwijs",
    price: "Op aanvraag",
    backlinks: "540+"
  },
  {
    name: "beatassist.eu",
    description: "Geschikt voor muziekproductie, audio software of creative tools.",
    mozScore: 29,
    category: "Muziek/Audio",
    price: "Op aanvraag",
    backlinks: "540+"
  },
  {
    name: "eureka-hvacr.eu",
    description: "HVAC en klimaattechniek EU-domein.",
    mozScore: 29,
    category: "Technologie",
    price: "Op aanvraag",
    backlinks: "530+"
  },
  {
    name: "energaware.eu",
    description: "Energie bewustzijn EU-project domein.",
    mozScore: 29,
    category: "Energie",
    price: "Op aanvraag",
    backlinks: "520+"
  },
  {
    name: "5gmedia.eu",
    description: "Perfect voor telecom, media of technologie gerelateerde bedrijven.",
    mozScore: 29,
    category: "Technologie",
    price: "Op aanvraag",
    backlinks: "510+"
  },
  {
    name: "finnovaregio.eu",
    description: "Financiële innovatie EU-regio domein.",
    mozScore: 28,
    category: "Finance",
    price: "Op aanvraag",
    backlinks: "500+"
  },
  {
    name: "worth-project.eu",
    description: "Design en innovatie project domein met creatieve waarde.",
    mozScore: 28,
    category: "Design",
    price: "Op aanvraag",
    backlinks: "530+"
  },
  {
    name: "eu-sabana.eu",
    description: "Duurzame landbouw EU-project domein.",
    mozScore: 28,
    category: "Landbouw",
    price: "Op aanvraag",
    backlinks: "510+"
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
    price: "Op aanvraag",
    backlinks: "4.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "uci.edu (DA 91)"]
  },
  {
    name: "seatglobal.eu",
    description: "Internationaal mobiliteit/transport domein.",
    mozScore: 28,
    category: "Transport",
    price: "Op aanvraag",
    backlinks: "540+"
  },
  {
    name: "movecare-project.eu",
    description: "Zorg en mobiliteit EU-project domein.",
    mozScore: 28,
    category: "Zorg",
    price: "Op aanvraag",
    backlinks: "510+"
  },
  {
    name: "davidhughesillustration.co.uk",
    description: "Creatief UK domein, perfect voor illustratie of design studios.",
    mozScore: 27,
    category: "Kunst/Design",
    price: "Op aanvraag",
    backlinks: "490+"
  },
  {
    name: "arcomem.eu",
    description: "Digitaal archief/geheugen EU-project domein.",
    mozScore: 27,
    category: "Digitaal",
    price: "Op aanvraag",
    backlinks: "500+"
  },
  {
    name: "centremlm.be",
    description: "Belgisch centrum domein met lokale autoriteit.",
    mozScore: 27,
    category: "Algemeen",
    price: "Op aanvraag",
    backlinks: "470+"
  },
  {
    name: "lt-pl-ru.eu",
    description: "Baltische regio EU-samenwerkingsdomein.",
    mozScore: 27,
    category: "Internationaal",
    price: "Op aanvraag",
    backlinks: "480+"
  },
  {
    name: "transitionproject.eu",
    description: "Transitie en verandering EU-project domein.",
    mozScore: 27,
    category: "Projecten",
    price: "Op aanvraag",
    backlinks: "470+"
  },
  {
    name: "expo-2050.be",
    description: "Belgisch expo/tentoonstelling domein.",
    mozScore: 27,
    category: "Evenementen",
    price: "Op aanvraag",
    backlinks: "460+"
  },
  {
    name: "covenant-capacity.eu",
    description: "EU-covenant en capaciteitsopbouw domein.",
    mozScore: 26,
    category: "Samenwerking",
    price: "Op aanvraag",
    backlinks: "450+"
  },
  {
    name: "eustartupvillageforum.eu",
    description: "Startup en innovatie EU-forum domein.",
    mozScore: 26,
    category: "Startups",
    price: "Op aanvraag",
    backlinks: "440+"
  },
  {
    name: "youthstartproject.eu",
    description: "Onderwijs/jeugd project domein met educatieve waarde.",
    mozScore: 26,
    category: "Onderwijs",
    price: "Op aanvraag",
    backlinks: "480+"
  },
  {
    name: "life-envoll.eu",
    description: "Milieu en natuur EU-project domein.",
    mozScore: 26,
    category: "Milieu",
    price: "Op aanvraag",
    backlinks: "470+"
  },
  {
    name: "hotelgiotto.eu",
    description: "Hospitality domein met Europese toeristische waarde.",
    mozScore: 26,
    category: "Hospitality",
    price: "Op aanvraag",
    backlinks: "480+"
  },
  {
    name: "recharge-green.eu",
    description: "Groene energie en opladen EU-domein.",
    mozScore: 26,
    category: "Energie",
    price: "Op aanvraag",
    backlinks: "430+"
  },
  {
    name: "unamec.be",
    description: "Belgisch medisch/zorg domein.",
    mozScore: 26,
    category: "Zorg",
    price: "Op aanvraag",
    backlinks: "440+"
  },
  {
    name: "josephines.be",
    description: "Belgisch lifestyle/hospitality domein.",
    mozScore: 26,
    category: "Lifestyle",
    price: "Op aanvraag",
    backlinks: "430+"
  },
  {
    name: "wetenschapbegintmetverwondering.nl",
    description: "Nederlands educatief wetenschapsdomein.",
    mozScore: 26,
    category: "Onderwijs",
    price: "Op aanvraag",
    backlinks: "440+"
  },
  {
    name: "gastrosafezone.eu",
    description: "Gastronomie en voedselveiligheid EU-domein.",
    mozScore: 26,
    category: "Food",
    price: "Op aanvraag",
    backlinks: "420+"
  },
  {
    name: "khresmoi.eu",
    description: "Medische informatie EU-project domein.",
    mozScore: 26,
    category: "Gezondheid",
    price: "Op aanvraag",
    backlinks: "430+"
  },
  {
    name: "sialon.eu",
    description: "Gezondheidsonderzoek EU-domein.",
    mozScore: 26,
    category: "Gezondheid",
    price: "Op aanvraag",
    backlinks: "420+"
  },
  {
    name: "spaceinfoday.eu",
    description: "Ruimtevaart informatie EU-evenement domein.",
    mozScore: 26,
    category: "Technologie",
    price: "Op aanvraag",
    backlinks: "410+"
  },
  {
    name: "beehive-erasmusplus.eu",
    description: "Sterk educatief domein, perfect voor onderwijsplatforms of EU-projecten.",
    mozScore: 26,
    category: "Onderwijs",
    price: "Op aanvraag",
    backlinks: "440+"
  },
  {
    name: "brave-project.eu",
    description: "Innovatief EU-project domein voor tech of sociale initiatieven.",
    mozScore: 25,
    category: "Projecten",
    price: "Op aanvraag",
    backlinks: "410+"
  },
  {
    name: "aaliance.eu",
    description: "Gezondheidszorg/ouderenzorg EU-domein met sterke autoriteit.",
    mozScore: 25,
    category: "Zorg",
    price: "Op aanvraag",
    backlinks: "440+"
  },
  {
    name: "serletproject.eu",
    description: "Europees innovatie project domein.",
    mozScore: 25,
    category: "Innovatie",
    price: "Op aanvraag",
    backlinks: "430+"
  },
  {
    name: "landmark-project.eu",
    description: "Project domein met Europese autoriteit voor grote initiatieven.",
    mozScore: 25,
    category: "Projecten",
    price: "Op aanvraag",
    backlinks: "420+"
  },
  {
    name: "tca2000.co.uk",
    description: "Brits bedrijfsdomein met gevestigde autoriteit.",
    mozScore: 25,
    category: "Business",
    price: "Op aanvraag",
    backlinks: "430+"
  },
  {
    name: "tandemtech.be",
    description: "Belgisch technologie domein.",
    mozScore: 25,
    category: "Technologie",
    price: "Op aanvraag",
    backlinks: "400+"
  },
  {
    name: "lifemanev.eu",
    description: "EU-life project domein.",
    mozScore: 25,
    category: "Milieu",
    price: "Op aanvraag",
    backlinks: "390+"
  },
  {
    name: "happyvpro.nl",
    description: "Nederlands media domein.",
    mozScore: 25,
    category: "Media",
    price: "Op aanvraag",
    backlinks: "400+"
  },
  {
    name: "xcycle-h2020.eu",
    description: "EU-fiets en mobiliteit H2020 project domein.",
    mozScore: 24,
    category: "Mobiliteit",
    price: "Op aanvraag",
    backlinks: "380+"
  },
  {
    name: "deparisnet.be",
    description: "Belgisch netwerk domein.",
    mozScore: 24,
    category: "Netwerk",
    price: "Op aanvraag",
    backlinks: "370+"
  },
  {
    name: "vos-photos.eu",
    description: "Perfect voor fotografie, stock images of creatieve platforms.",
    mozScore: 23,
    category: "Fotografie",
    price: "Op aanvraag",
    backlinks: "380+"
  },
  {
    name: "eulis.eu",
    description: "Kort en memorabel EU-domein voor diverse toepassingen.",
    mozScore: 23,
    category: "Algemeen",
    price: "Op aanvraag",
    backlinks: "360+"
  },
  {
    name: "maribe.eu",
    description: "Maritiem EU-domein, geschikt voor scheepvaart of oceaan projecten.",
    mozScore: 23,
    category: "Maritiem",
    price: "Op aanvraag",
    backlinks: "340+"
  },
  {
    name: "200jaarstaten-generaal.nl",
    description: "Historisch en autoritatief .nl domein met sterke Nederlandse relevantie.",
    mozScore: 23,
    category: "Overheid/Cultuur",
    price: "Op aanvraag",
    backlinks: "350+"
  },
  {
    name: "infoecmi.eu",
    description: "EU-informatie domein.",
    mozScore: 23,
    category: "Informatie",
    price: "Op aanvraag",
    backlinks: "340+"
  },
  {
    name: "eu-thor.eu",
    description: "EU-project domein.",
    mozScore: 23,
    category: "Projecten",
    price: "Op aanvraag",
    backlinks: "350+"
  },
  {
    name: "oramed-fp7.eu",
    description: "Medisch onderzoek EU-FP7 project domein.",
    mozScore: 23,
    category: "Onderzoek",
    price: "Op aanvraag",
    backlinks: "340+"
  },
  {
    name: "heinekenthecity.nl",
    description: "Nederlands stedelijk/lifestyle domein.",
    mozScore: 23,
    category: "Lifestyle",
    price: "Op aanvraag",
    backlinks: "330+"
  },
  {
    name: "grandparkhotel.at",
    description: "Premium Oostenrijks hoteldomein met sterke toeristische waarde.",
    mozScore: 37,
    category: "Hospitality",
    price: "Op aanvraag",
    backlinks: "890+"
  },
  {
    name: "bruegel2019.be",
    description: "Cultureel erfgoed domein, ideaal voor kunst, musea of Vlaamse projecten.",
    mozScore: 22,
    category: "Kunst/Erfgoed",
    price: "Op aanvraag",
    backlinks: "320+"
  },
  {
    name: "romain-roquette.be",
    description: "Belgisch persoonlijk/portfolio domein.",
    mozScore: 22,
    category: "Portfolio",
    price: "Op aanvraag",
    backlinks: "310+"
  },
  {
    name: "naumburgermeister.eu",
    description: "Duits/EU lokaal bestuur domein.",
    mozScore: 22,
    category: "Overheid",
    price: "Op aanvraag",
    backlinks: "300+"
  },
  {
    name: "europeanmuseumforum.eu",
    description: "Europees museum forum domein.",
    mozScore: 22,
    category: "Cultuur",
    price: "Op aanvraag",
    backlinks: "310+"
  },
  {
    name: "escmalta2018.eu",
    description: "ESC evenement domein.",
    mozScore: 22,
    category: "Evenementen",
    price: "Op aanvraag",
    backlinks: "290+"
  },
  {
    name: "eurasiancouncilforeignaffairs.eu",
    description: "Internationale betrekkingen EU-domein.",
    mozScore: 22,
    category: "Internationaal",
    price: "Op aanvraag",
    backlinks: "290+"
  },
  {
    name: "waterpipp.eu",
    description: "Water en milieu EU-project domein.",
    mozScore: 22,
    category: "Milieu",
    price: "Op aanvraag",
    backlinks: "280+"
  },
  {
    name: "stationlansingerland-zoetermeer.nl",
    description: "Nederlands transport/station domein.",
    mozScore: 21,
    category: "Transport",
    price: "Op aanvraag",
    backlinks: "270+"
  },
  {
    name: "mbelgique.be",
    description: "Belgisch nationaal domein.",
    mozScore: 21,
    category: "Algemeen",
    price: "Op aanvraag",
    backlinks: "260+"
  },
  {
    name: "nanostarproject.eu",
    description: "Nanotechnologie EU-project domein.",
    mozScore: 21,
    category: "Technologie",
    price: "Op aanvraag",
    backlinks: "270+"
  },
  {
    name: "eccomascfd2006.nl",
    description: "Nederlands technisch domein.",
    mozScore: 21,
    category: "Technologie",
    price: "Op aanvraag",
    backlinks: "250+"
  },
  {
    name: "espresso-project.eu",
    description: "Smart city en mobiliteit project domein.",
    mozScore: 20,
    category: "Smart City",
    price: "Op aanvraag",
    backlinks: "290+"
  },
  {
    name: "dunyaendesiedefilm.nl",
    description: "Nederlands film/media domein.",
    mozScore: 0,
    category: "Media",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "edlupt.eu",
    description: "EU-domein.",
    mozScore: 0,
    category: "Algemeen",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "epc2018.be",
    description: "Belgisch evenement domein.",
    mozScore: 0,
    category: "Evenementen",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "fantasticgymnastics.nl",
    description: "Nederlands sport/gymnastiek domein.",
    mozScore: 0,
    category: "Sport",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "front-vosges-14-18.eu",
    description: "Historisch WO1 herdenkingsdomein.",
    mozScore: 0,
    category: "Geschiedenis",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "icesculpture.be",
    description: "Belgisch kunst/evenement domein.",
    mozScore: 0,
    category: "Kunst",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "ismagazine.nl",
    description: "Nederlands magazine/media domein.",
    mozScore: 0,
    category: "Media",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "landstewardship.eu",
    description: "EU landbeheer/duurzaamheid domein.",
    mozScore: 0,
    category: "Duurzaamheid",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "nailtalk.nl",
    description: "Nederlands beauty/nagel domein.",
    mozScore: 0,
    category: "Beauty",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "partymenu.eu",
    description: "EU catering/evenement domein.",
    mozScore: 0,
    category: "Food",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "push-pull-parking.eu",
    description: "EU mobiliteit/parking domein.",
    mozScore: 0,
    category: "Mobiliteit",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "spanvis.nl",
    description: "Nederlands domein.",
    mozScore: 0,
    category: "Algemeen",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "tabby.eu",
    description: "Kort en memorabel EU-domein.",
    mozScore: 0,
    category: "Algemeen",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "werving-selectiebureau.nl",
    description: "Nederlands HR/recruitment domein.",
    mozScore: 0,
    category: "Business",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "muenchner-kirchennachrichten.de",
    description: "Duits nieuws/religieus domein.",
    mozScore: 0,
    category: "Nieuws",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "wbetting.co.uk",
    description: "Brits betting/gaming domein.",
    mozScore: 0,
    category: "Gaming",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "artsalivewales.org.uk",
    description: "Welsh kunst/cultuur domein.",
    mozScore: 0,
    category: "Kunst",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "102touchfm.co.uk",
    description: "Brits radio/media domein.",
    mozScore: 0,
    category: "Media",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "ontwerpnovi.nl",
    description: "Nederlands design/architectuur domein.",
    mozScore: 0,
    category: "Design",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "iceel.eu",
    description: "EU-domein.",
    mozScore: 0,
    category: "Algemeen",
    price: "Op aanvraag",
    backlinks: "TBD"
  },
  {
    name: "iaee.eu",
    description: "EU-domein.",
    mozScore: 0,
    category: "Algemeen",
    price: "Op aanvraag",
    backlinks: "TBD"
  }
];

const PremiumDomains = () => {
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
        title: "Vul alle verplichte velden in",
        description: "Naam, e-mail en domeinkeuze zijn verplicht.",
        variant: "destructive"
      });
      return;
    }

    // Construct mailto link
    const subject = encodeURIComponent(`Premium Domein Aanvraag: ${formData.domain}`);
    const body = encodeURIComponent(
      `Naam: ${formData.name}\nE-mail: ${formData.email}\nDomein: ${formData.domain}\n\nBericht:\n${formData.message}`
    );
    window.location.href = `mailto:info@iaee.eu?subject=${subject}&body=${body}`;
    
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
        <title>Premium Expired domeinnamen met backlinks hoge autoriteit & SEO-Waarde</title>
        <meta name="description" content="Expired domeinnaam met backlinks kopen? Betrouwbare expired domeinen met hoge autoriteit en SEO-waarde. Premium domeinnaam kopen voor snellere Google rankings. Direct beschikbaar." />
        <meta name="keywords" content="expired domeinnaam kopen, expired domeinnamen met backlinks, domeinnaam met autoriteit, betrouwbare expired domeinen, premium domeinnaam kopen, domeinnaam met SEO waarde, oude domeinnaam met links, beste domeinnamen te koop" />
        <link rel="canonical" href="https://www.iaee.eu/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Premium Domeinen
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
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
                Exclusieve Collectie Premium Domeinen
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Premium Expired domeinnamen met backlinks hoge autoriteit & SEO-Waarde
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Versterk uw online aanwezigheid met domeinnamen die al jaren autoriteit hebben opgebouwd. 
                Ideaal voor snellere rankings, krachtige backlinks en directe SEO-voordelen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("domains")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg px-8 py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-105"
                >
                  Bekijk Domeinen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("why-premium")}
                  className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white text-lg px-8 py-6"
                >
                  Meer Informatie
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Gemiddelde MOZ Score", value: "29+" },
                  { label: "Premium Domeinen", value: "110+" },
                  { label: "Jaren Ervaring", value: "10+" },
                  { label: "Tevreden Klanten", value: "500+" }
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
                Beschikbare Domeinen
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Premium Domeinnamen Te Koop
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Elk domein is zorgvuldig geselecteerd op basis van MOZ-autoriteit, backlinkprofiel en SEO-potentieel. 
                Zoek je een <strong className="text-white">expired domeinnaam kopen</strong> of <strong className="text-white">betrouwbare expired domeinen</strong>? Bekijk ons aanbod hieronder.
              </p>
            </div>
            
            {/* SEO Intro Text */}
            <div className="max-w-4xl mx-auto mb-16 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">Op zoek naar een domeinnaam met echte SEO-waarde?</strong> Bij ons koop je betrouwbare <strong className="text-amber-400">expired domeinnamen met backlinks</strong> en hoge autoriteit, zorgvuldig gecontroleerd op kwaliteit en historie. Met een expired domein start je niet vanaf nul, maar profiteer je direct van bestaande links, vertrouwen en online geschiedenis.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Naast expired domeinnamen bieden wij ook <strong className="text-amber-400">premium domeinnamen</strong> aan: korte, krachtige namen met merkwaarde en commerciële potentie. Of je nu een website, webshop of SEO-project start — een <strong className="text-white">domeinnaam met autoriteit</strong> geeft je een duidelijke voorsprong in Google.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                <strong className="text-white">Veel gezocht:</strong> expired domeinnaam met backlinks kopen • betrouwbare expired domeinen • expired domeinnaam met autoriteit • premium domeinnaam kopen • domeinnaam met SEO waarde • oude domeinnaam met links • beste domeinnamen te koop
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumDomains.map((domain, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group"
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
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Link className="w-4 h-4" />
                          <span>Backlinks: {domain.backlinks}</span>
                        </div>
                        <span className="text-amber-400 font-semibold">{domain.price}</span>
                      </div>
                      
                      {/* Extra stats for domains with detailed info */}
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
                          <div className="flex flex-wrap gap-1">
                            {domain.topBacklinks.slice(0, 5).map((link, i) => (
                              <Badge key={i} variant="outline" className="text-[10px] border-amber-500/30 text-amber-400/80 bg-amber-500/5">
                                {link}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <Button 
                      onClick={() => handleDomainInquiry(domain.name)}
                      className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-amber-500 hover:to-amber-600 hover:text-slate-950 transition-all duration-300 border border-slate-600 hover:border-amber-500"
                    >
                      Neem Contact Op
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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
              <Card className="bg-gradient-to-br from-amber-500/10 to-slate-800/50 border-amber-500/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    De Kracht van MOZ Domain Authority
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    MOZ Domain Authority (DA) is een score van 1-100 die voorspelt hoe goed een website zal ranken in zoekmachines. 
                    Hoe hoger de score, hoe meer autoriteit het domein heeft opgebouwd door kwaliteitsbacklinks, leeftijd en betrouwbaarheid.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { range: "DA 20-25", label: "Goede Autoriteit", color: "text-blue-400" },
                      { range: "DA 25-30", label: "Sterke Autoriteit", color: "text-amber-400" },
                      { range: "DA 30+", label: "Premium Autoriteit", color: "text-emerald-400" }
                    ].map((item, index) => (
                      <div key={index} className="text-center p-4 rounded-lg bg-slate-900/50">
                        <div className={`text-lg font-bold ${item.color}`}>{item.range}</div>
                        <div className="text-sm text-slate-400">{item.label}</div>
                      </div>
                    ))}
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
                    <strong className="text-white">Waarom wachten?</strong> Elk premium domein in ons portfolio is gecontroleerd op spamvrije geschiedenis, relevante backlinks en schone linkprofielen. U koopt geen risico — u koopt een strategisch actief dat direct waarde toevoegt aan uw online aanwezigheid. Van <strong className="text-white">301 redirects</strong> voor authority stacking tot het direct starten van een nieuwe website: de mogelijkheden zijn eindeloos.
                  </p>
                  
                  <div className="bg-gradient-to-r from-amber-500/10 to-slate-800/30 border border-amber-500/20 rounded-xl p-6 mt-8">
                    <p className="text-center text-lg mb-0">
                      <strong className="text-amber-400">Klaar om uw online succes te versnellen?</strong><br />
                      <span className="text-slate-300">Bekijk ons portfolio van 110+ premium expired domeinnamen en ontdek welk domein perfect past bij uw ambitie. Investeer vandaag nog in bewezen autoriteit en laat uw concurrenten achter.</span>
                    </p>
                  </div>
                </div>
              </article>
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
                    <a href="mailto:info@iaeecommunity.com" className="text-amber-400 hover:text-amber-300 transition-colors text-lg font-medium">
                      info@iaeecommunity.com
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

        {/* Footer */}
        <footer className="py-12 bg-slate-950 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Crown className="h-6 w-6 text-amber-400" />
                <span className="text-lg font-semibold text-white">Premium Domeinen</span>
              </div>
              <p className="text-slate-500 text-sm text-center md:text-right">
                © {new Date().getFullYear()} IAEE. Alle rechten voorbehouden.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PremiumDomains;
