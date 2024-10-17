<template>
  <div class="about">
    <p>Diese Vue.js-Anwendung dient als exemplarische Umsetzung einer API-Anbindung 
      an Google Firebase. Sie ermöglicht eine benutzerfreundliche Authentifizierung 
      über E-Mail. Ein Benutzer kann sich mittels seiner E-Mail-Adresse und eines 
      Passworts registrieren. Nach einem erfolgreichen Login erhält er Zugriff auf
      die geschützte Route "/secret". 
      
      Falls ein Gast versucht, diese Route ohne vorherige Authentifizierung zu laden, 
      wird eine Fehlermeldung angezeigt. Die Überwachung der Routennavigation erfolgt 
      durch einen sogenannten Navigation Guard. Dieser Mechanismus gewährleistet, dass 
      nur authentifizierte Benutzer Zugriff auf geschützte Bereiche der Anwendung erhalten.
    </p>
  </div>
</template>

<style scoped>
.about {
  margin-top: 1em;
  font-size: 1.3em;
  line-height: 1.3em;
  text-align: justify;
}

.about::after { /* Die letzte Zeile soll nicht im blocksatz gestreckt werden */
  content: "";
  display: inline-block;
  width: 100%;
}
</style>
