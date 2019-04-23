<template>
  <div id="header">
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
</template>

<style lang="scss" scoped>
$logo-size: 30px;
// $background-color: #134d60;
$background-color: #e6f5f2;
$text-color: #134d60;
$text-color-active: #2c3e50;

#header {
  //make it fixed
  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;
  height: 50px;
  width: 100vw;
  //style it
  background-color: $background-color;
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

// .nav-links > *:after {
//   display: block;
//   content: attr(title);
//   font-weight: bold;
//   height: 0;
//   overflow: hidden;
//   visibility: hidden;
// }

.nav-links > *:hover {
  color: $text-color-active;
}

.router-link-exact-active {
  color: $text-color-active;
  text-decoration: underline !important;
}
</style>
