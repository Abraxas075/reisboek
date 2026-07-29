/* ------------------------------------------------------------------
   Instellingen voor het reisboek.

   Laat je dit bestand zoals het is, dan werkt de app meteen, maar
   blijft alles op het apparaat waar je het invult. Iedereen heeft dan
   zijn eigen lijstjes.

   Vul je de Firebase-gegevens in, dan krijg je:
   - een gedeeld reisboek voor de hele groep
   - echt inloggen met je Google-account
   - eventueel video-opslag (zie hieronder)

   Zie README.md, stap 4.
   ------------------------------------------------------------------ */

window.VAKANTIE_CONFIG = {
  // Naam van jullie reis in de database. Kies iets dat niemand raadt,
  // bijvoorbeeld "puglia-2026-k9t3xw".
  tripId: "onze-reis",

  // Laat leeg voor opslag op je eigen apparaat.
  // Vul in voor een gedeeld reisboek (kopieer uit Firebase).
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  },

  // Zet op true als je lange video's in Firebase Storage wilt bewaren.
  // Let op: dit kost geld zodra er veel gekeken wordt, en Google vraagt
  // hiervoor een betaalmethode. Voor een enkele lange video is een link
  // naar Google Foto's of YouTube goedkoper en net zo handig.
  opslag: false,
};
