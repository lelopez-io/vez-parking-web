<template>
  <div id="footer">
    <div class="container">
      <router-link to="/" class="logo">
        <img alt="VEZ Parking logo" src="@/assets/logo.png" />
        <!-- <div class="name">VEZ Parking</div> -->
      </router-link>
      <p>by</p>
      <ul class="nav-links">
        <router-link to="https://www.linkedin.com/in/lelopez6/" title="Luis"
          >Luis E. Lopez</router-link
        >
        <router-link to="#" title="Albert">Albert Philen</router-link>
        <router-link
          to="https://www.linkedin.com/in/mark-riddell-382805175/"
          title="Mark"
          >Mark Riddell</router-link
        >
        <router-link to="#" title="Matthew">Matthew Hunter</router-link>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$logo-size: 40px;
$slate-gray: #2c3e50;
$mint: #c1e7df;

$background-color: $slate-gray;

$text-color: $mint;
$text-color-active: white;

#footer {
  margin-top: 40px;
  width: 100vw;
  //style it
  background-color: $background-color;
  padding: 20px 0;

  box-shadow: 0px 10px 20px 2px black;
}

.container {
  max-width: 1032px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: white;
  & * {
    display: flex;
    // text-decoration: none;
  }
}

.logo {
  align-items: center;
  & img {
    width: $logo-size;
    height: $logo-size;
  }
}

.nav-links {
  padding: 0;
  margin: 0;
}

.nav-links > *,
.logo .name {
  color: $text-color;
  padding: 5px;
}

.nav-links > *:hover {
  color: $text-color-active;
}

.router-link-exact-active {
  color: $text-color-active;
}
</style>
