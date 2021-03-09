<template>
  <div id="nav">
    <router-link to="/">
      <div id="logo">
        <img alt="logo" src="./assets/icon_bee.png" />
      </div>
    </router-link>

    <div class="navtext">
      <router-link to="/"
        ><img
          src="./assets/icon_Schrift.png"
          alt="BeeData Schrift"
          class="schrift"
        />
      </router-link>
      | <router-link to="/about">About</router-link> |
      <router-link to="/data">Data</router-link> |
      <router-link to="/charts">Charts</router-link>
    </div>
  </div>

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-left: 100px;
  padding-bottom: 100px;
  /* background: #eee; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #f3e34c;
}
#nav .navtext {
  position: absolute;
  right: 45%;
}
#nav #logo img {
  position: absolute;
  top: 1vh;
  left: 2vw;
  width: 100px;
}
h1 {
  color: black;
  font-family: "Raleway", sans-serif;
  font-size: 62px;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
}
.navtext .schrift {
  position: relative;
  top: 0;
  bottom: 20;
  margin: 0;
  height: 20px;
  vertical-align: middle;
}
</style>
