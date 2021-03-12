<template>
  <div class="about">
    <div class="head">
      <h1>About</h1>

      <div class="textfield">
        <router-link to="/"
          ><img
            src="../assets/icon_Schrift.png"
            alt="BeeData Schrift"
            class="schrift"
          />
        </router-link>
        <h2>Entwicklung eines Bienenüberwachungssystems</h2>
        <h2></h2>
        <h3>Wieso BeeData?</h3>
        <p>
          Zur Überwachung von Bienenstöcken müssen Imker immer Vorort die
          Gesundheit der Bienenvölker kontrollieren. Mithilfe von BeeData soll
          das Leben der Bienen und des Imkers verbessert werden. Durch BeeData
          soll es dem Benutzer möglich sein auch von größerer Entfernung den
          Zustand des Bienenstockes abzufragen.
        </p>
        <h3>Realisierung</h3>
        <p>
          Das Ziel des Projektes ist, die Gesundheit eines Bienenvolkes mithilfe
          diverser Daten zu überprüfen. Die Daten sollten einfach und
          übersichtlich dargestellt werden. Die Datenübertragung erfolgt über
          das Netzwerkprotokoll LoRa.
        </p>
        <h3>Lösung</h3>
        <p>
          Das Ergebnis des Projektes soll ein übersichtliches System zur
          Überwachung von Bienenvölkern sein. Es soll möglich sein mit einer App
          oder Website die
          <router-link to="/data">Daten</router-link> abzufragen. Die Daten
          werden übersichtlich in
          <router-link to="/charts">Diagrammen</router-link> dargestellt.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.head h1 {
  margin: 0;
  line-height: 100px;
  height: 100px;
}

.head img {
  position: relative;
  top: 0;
  bottom: 20;
  margin: 0;
  height: 100px;
  vertical-align: middle;
}
.textfield {
  margin-left: 30%;
  margin-right: 30%;
}
.textfield p {
  text-align: left;
}
.textfield h1 {
  text-align: left;
}
.textfield h2 {
  text-align: left;
  margin-top: 0;
  font-size: 35px;
}
.textfield h3 {
  text-align: left;
}
.textfield img {
  margin-bottom: 50px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .textfield {
    margin-left: 2%;
    margin-right: 2%;
  }
  .textfield h2 {
    text-align: left;
    font-size: 25px;
  }
  .textfield h3 {
    text-align: left;
    margin-bottom: 0;
  }
  .textfield img {
    width: 100%;
    height: auto;
  }
}
</style>
