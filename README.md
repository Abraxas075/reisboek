# Reisboek - een gedeelde vakantie-app

Een reisboek voor de hele groep: inloggen, een profiel met foto, de reis plannen
inclusief de heenreis, en daarna een hoofdscherm waar je per dag door de vakantie
scrollt. Met agenda, zoeken naar plekken in de buurt, fotoalbum per datum,
notities, to-do's en een boodschappenlijst per dag.

Gratis te hosten op GitHub Pages. Je hoeft niets te installeren; uploaden via de
website van GitHub is genoeg.

---

## Wat zit erin

| Bestand      | Wat het doet                                        |
| ------------ | --------------------------------------------------- |
| `index.html` | De hele app. Hier verander je niets in.             |
| `config.js`  | Jouw instellingen. Dit bestand pas je eventueel aan. |
| `README.md`  | Deze uitleg.                                        |

## Hoe de app loopt

1. **Inloggen** met een Gmail-adres en je naam. Vinkje *Ingelogd blijven* aan
   betekent dat je bij de volgende keer meteen binnen bent.
2. **Profiel** aanmaken: foto van jezelf, naam, telefoon, een regel over jou.
   Later te wijzigen via het menu linksboven.
3. **Reis plannen**: naam, bestemming, verblijfadres, data, en een apart blok
   voor de heenreis (vertrekpunt, vervoer, tijden, tussenstops).
4. **Hoofdscherm "Dagen"**: alle vakantiedagen naast elkaar, van links naar
   rechts te scrollen. Per dag zie je de gebeurtenissen op tijd, de foto's van
   die dag, de boodschappen, en op dag 1 de heenreis.
5. **Menu linksboven** voor de rest: Reis, Agenda, In de buurt, Foto's,
   Notities, To-do, Boodschappen, Mijn profiel, Uitloggen.

---

## Stap 1 - Zet de bestanden op GitHub

1. Maak een account op https://github.com/signup als je die nog niet hebt.
2. Ga naar https://github.com/new
3. *Repository name*: `reisboek`. Laat hem op **Public** staan - GitHub Pages is
   alleen gratis bij openbare repositories.
4. **Create repository**.
5. **Add file** -> **Upload files** -> sleep `index.html`, `config.js` en
   `README.md` erin -> onderaan **Commit changes**.

## Stap 2 - Zet GitHub Pages aan

1. In je repository: **Settings** -> **Pages** (linkermenu).
2. *Source*: **Deploy from a branch**.
3. *Branch*: **main**, map **/ (root)** -> **Save**.
4. Wacht een minuut of twee, ververs de pagina. Bovenaan staat je adres:

       https://JOUWNAAM.github.io/reisboek/

Open dat op je telefoon en zet het via het browsermenu op je beginscherm. Hij
gedraagt zich dan als een app.

## Stap 3 - Google Maps aanzetten

Zonder key werkt de app, maar zie je geen kaarten en kun je niet zoeken naar
plekken in de buurt.

1. Maak een project aan in de Google Cloud console:
   https://console.cloud.google.com/
2. Koppel een factureringsaccount. Dat moet, ook al blijft een app als deze
   binnen het gratis maandtegoed.
3. Zet deze drie API's aan via
   https://console.cloud.google.com/google/maps-apis/api-list
   - **Maps Static API** - de kaartafbeeldingen
   - **Maps Embed API** - de interactieve kaart
   - **Places API (New)** - zoeken en adres-suggesties
4. Maak een key aan: https://console.cloud.google.com/apis/credentials
5. **Beperk de key meteen.** Open hem en stel in:
   - *Application restrictions* -> **Websites** -> toevoegen:
     `https://JOUWNAAM.github.io/*`
   - *API restrictions* -> **Restrict key** -> alleen die drie API's
6. Open je app -> menu -> **Reis** -> *Google Maps API-key* -> plakken ->
   **Key opslaan**. Met **Key testen** zie je meteen wat Google ervan vindt.
7. Zet een budgetwaarschuwing op een laag bedrag:
   https://console.cloud.google.com/billing/budgets

> De key zit in de app en is dus zichtbaar voor wie de pagina bekijkt. De
> website-beperking uit stap 5 is wat hem beschermt: vanaf een ander adres
> weigert Google de aanvraag. Sla die stap niet over.

## Stap 4 - Delen met de groep (optioneel)

Zonder deze stap werkt alles, maar houdt iedereen zijn eigen reisboek op zijn
eigen telefoon. Met een gratis Firebase-project ziet de hele groep hetzelfde.

1. https://console.firebase.google.com/ -> **Project toevoegen**. Je mag hetzelfde
   Google-project kiezen als hierboven. Analytics kun je uitzetten.
2. Linkermenu -> **Firestore Database** -> **Database maken** -> *productiemodus*,
   locatie in Europa.
3. **Projectinstellingen** (tandwiel) -> onderaan bij *Jouw apps* -> web-icoon
   `</>` -> app registreren.
4. Je krijgt een blokje met `apiKey`, `authDomain`, `projectId` enzovoort. Neem
   die over in `config.js`, en verzin bij `tripId` iets dat niemand raadt.
5. Firestore -> **Regels** -> zet dit neer en publiceer:

       rules_version = '2';
       service cloud.firestore {
         match /databases/{database}/documents {
           match /trips/{tripId}/data/{doc} {
             allow read, write: if true;
           }
         }
       }

6. Upload het aangepaste `config.js` opnieuw: klik in GitHub op het bestand ->
   potloodje -> plakken -> **Commit changes**.

> Wat die regels betekenen: iedereen die je `tripId` kent kan meelezen en
> meeschrijven. Voor een vakantie met vrienden is dat meestal prima, mits je een
> moeilijk te raden `tripId` kiest. Zet er geen paspoortnummers of bankgegevens
> in.

## Stap 5 - Aanmelden

Iedereen opent hetzelfde adres en vult zijn Gmail-adres en naam in. Dat is een
naamplaatje, geen echte Google-login: er wordt geen wachtwoord gecontroleerd. Het
zorgt ervoor dat de groep ziet wie wat heeft toegevoegd.

---

## Over de Google-tijdlijn

De app kan je Google Maps-tijdlijn niet automatisch synchroniseren. Google heeft
die koppeling voor apps afgeschaft; de tijdlijn staat sinds 2024 alleen nog op je
eigen telefoon en er is geen API meer om hem uit te lezen.

Wat wel kan, en wat in het planscherm zit onder *Google-tijdlijn overnemen*:
open in de Google Maps-app je profielfoto -> **Je tijdlijn** -> de drie puntjes ->
**Tijdlijn exporteren**. Kies het JSON-bestand in de app; de momenten die binnen
je reisdata vallen komen dan in de agenda. Handig om achteraf je route terug te
zien.

## Veelvoorkomende problemen

**De pagina blijft op "Reisboek wordt geladen..." staan.**
Open hem op een computer, druk F12 en kijk in *Console* wat er rood staat.
Meestal ontbreekt `config.js` of staat er een komma te veel in.

**De kaart blijft leeg en de test zegt iets over "referer".**
Het adres in de website-beperking klopt niet. Het moet er precies zo staan:
`https://JOUWNAAM.github.io/*`, inclusief het sterretje. Een wijziging kan vijf
minuten duren.

**De test zegt "API has not been used in project".**
Die API staat nog niet aan. Terug naar stap 3, punt 3.

**"Opslaan lukte niet."**
De app probeert het drie keer. Blijft het misgaan, dan is de opslag vol (te veel
foto's) of ligt de verbinding eruit. Tik op *Vernieuw* en probeer opnieuw.

**Foto's zijn na een tijdje weg.**
In de lokale stand staan foto's in de opslag van de browser, en die wordt bij
"browsergegevens wissen" geleegd. Met Firebase (stap 4) staan ze in de database.
Bewaar belangrijke foto's altijd ook gewoon in je fotogalerij.

**Zoeken naar plekken doet niets.**
Buiten de Claude-app werkt zoeken alleen met een Google-key. Vul die in bij
*Reis*.
