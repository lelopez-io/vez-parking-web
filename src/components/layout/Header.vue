<template>
  <div id="header">
    <div class="container">
      <router-link to="/" class="logo">
        <img alt="VEZ Parking logo" src="@/assets/logo.png" />
        <!-- <div class="name">VEZ Parking</div> -->
      </router-link>
      <ul class="nav-links">
        <router-link to="/" title="Home">Home</router-link>
        <router-link to="/about" title="About">About</router-link>
        <router-link to="/login" title="Login">Login</router-link>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$logo-size: 30px;
$light-mint: #e6f5f2;
$mint: #c1e7df;
$dark-blue: #134d60;
$slate-gray: #2c3e50;

$background-color: $slate-gray;
$text-color: $mint;
$text-color-active: white;

#header {
  //make it fixed
  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;
  height: 55px;
  width: 100vw;
  //style it
  background-color: $background-color;

  box-shadow: 0px 10px 20px -10px black;
}

.container {
  max-width: 1032px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  & * {
    display: flex;
    text-decoration: none;
  }
}

.logo {
  padding-left: 15px;
  //center vertically
  align-items: center;
  & img {
    width: $logo-size;
    height: $logo-size;
  }
}

.nav-links {
  padding-right: 15px;
}

.nav-links > *,
.logo .name {
  color: $text-color;
  padding-left: 10px;
}

.nav-links > *:hover {
  color: $text-color-active;
}

.router-link-exact-active {
  color: $text-color-active;
}
</style>
