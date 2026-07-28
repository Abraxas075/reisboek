/* ------------------------------------------------------------------
   Instellingen voor het reisboek.

   Laat dit bestand zoals het is en de app werkt meteen, maar dan blijft
   alles op het apparaat waar je het invult. Iedereen heeft dan zijn
   eigen lijstjes.

   Wil je dat de hele groep hetzelfde reisboek ziet? Maak dan een gratis
   Firebase-project aan en vul de gegevens hieronder in. Zie README.md,
   stap 4.
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
};
