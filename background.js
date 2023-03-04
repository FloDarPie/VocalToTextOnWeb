// Bind la touche "Ctrl+Maj+K" à l'action de démarrer la reconnaissance vocale
browser.commands.onCommand.addListener(function(command) {
  if (command == "startDictation") {
    recognition.start();
    console.log("Reconnaissance vocale démarrée");

    recognition.onresult = function(event) {
      let text = event.results[0][0].transcript;
      console.log("Transcription : " + text);
      typeText(text);
    };

    recognition.onerror = function(event) {
      console.log("Erreur lors de la reconnaissance vocale : " + event.error);
    };

    recognition.onend = function() {
      console.log("Reconnaissance vocale terminée");
    };
  }
});

// Crée un raccourci clavier pour le démarrage de la reconnaissance vocale
browser.commands.update({
  name: 'startDictation',
  shortcut: 'Ctrl+Shift+K'
});
