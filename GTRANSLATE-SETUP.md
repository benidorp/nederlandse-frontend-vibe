# GTranslate Pro Setup Instructies

## Stap 1: GTranslate PHP-bestanden installeren

1. Log in op je GTranslate Pro account
2. Download de PHP-bestanden voor subdirectory-methode
3. Upload de GTranslate map naar je `public_html` directory
   - De map moet zijn: `public_html/gtranslate/`
   - Inclusief alle PHP-bestanden die GTranslate je geeft

## Stap 2: Verificatie

De `.htaccess` is al geconfigureerd om:
- Taal subdirectories door te sturen naar GTranslate (`/fr/`, `/de/`, `/nl/`, etc.)
- GTranslate PHP-bestanden toe te staan
- De React app normaal te laten werken voor niet-vertaalde routes

## Stap 3: Testen

Na upload kun je testen door naar bijvoorbeeld te gaan:
- `https://iaee.eu/fr/` (Frans)
- `https://iaee.eu/de/` (Duits)
- `https://iaee.eu/nl/` (Nederlands)

## Opmerking

De GTranslateWidget die al in de code zit blijft gewoon werken voor de floating widget.
De subdirectories worden afgehandeld door de PHP-bestanden die je uploadt.
