# GTranslate Pro Setup Instructies - Subdomain Methode

## Stap 1: DNS Configuratie

1. Ga naar je DNS provider (waar je domeinnaam geregistreerd is)
2. Voeg een CNAME record toe:
   - **Type**: CNAME
   - **Name/Host**: `sm`
   - **Value/Points to**: `evn.tdn.gtranslate.net`
   - **TTL**: Auto of 3600
3. Wacht op DNS propagatie (kan tot 24 uur duren, meestal binnen 1-2 uur)

## Stap 2: GTranslate Dashboard Configuratie

1. Log in op je GTranslate Pro account
2. Ga naar je website instellingen
3. Selecteer **Subdomain methode** in plaats van Subdirectory
4. Sla de instellingen op

## Stap 3: Verificatie

Na DNS propagatie werken de vertalingen via:
- `https://sm.iaee.eu/fr/` (Frans)
- `https://sm.iaee.eu/de/` (Duits)
- `https://sm.iaee.eu/nl/` (Nederlands)
- etc. voor alle 70+ talen

Je hoofd domein `https://iaee.eu` blijft normaal werken voor de originele Engels versie.

## Voordelen Subdomain Methode

- **Geen PHP vereist**: Werkt op elke hosting, zelfs Lovable hosting
- **Onafhankelijk**: Vertalingen worden gehost door GTranslate servers
- **Eenvoudig**: Alleen DNS configuratie nodig
- **Sneller**: Geen server-side processing op jouw hosting

## Opmerking

De GTranslateWidget die al in de code zit blijft gewoon werken voor de floating language selector.
De vertalingen worden automatisch afgehandeld door GTranslate via de subdomain.
