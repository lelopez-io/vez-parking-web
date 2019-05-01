<template>
  <div id="footer">
    <div class="container">
      <router-link to="/" class="logo">
        <img alt="VEZ Parking logo" src="@/assets/logo.png" />
        <!-- <div class="name">VEZ Parking</div> -->
      </router-link>
      <p>by</p>
      <ul class="nav-links">
        <a
          href="https://www.linkedin.com/in/lelopez-io/"
          target="_blank"
          title="Luis"
          >Luis E. Lopez</a
        >
        <a href="#footer" title="Albert">Albert Philen</a>
        <a
          href="https://www.linkedin.com/in/mark-riddell-382805175/"
          target="_blank"
          title="Mark"
          >Mark Riddell</a
        >
        <a href="#footer" title="Matthew">Matthew Hunter</a>
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
    text-decoration: none;
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
  text-align: center;
}

.nav-links > *:hover {
  color: $text-color-active;
}

.router-link-exact-active {
  color: $text-color-active;
}
</style>
