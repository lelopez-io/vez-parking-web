<template>
  <div id="learn-more">
    <img src="@/assets/phone.jpg" />
    <div class="txt-ctn">
      <h2>A Fleet of IoT Deviced</h2>
      <p>
        The VEZ project aims at fully leveraging the "Cloud" to enable quick and
        easy parking. Our technology can be deployed both in garages and open
        air lots. <a href="/about">Read More</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$mint: #c1e7df;
$dark-blue: #134d60;
$slate-gray: #2c3e50;
#learn-more {
  img {
    max-width: 100%;
  }

  .txt-ctn {
    display: flex;
    flex-direction: column;
    justify-content: center;

    background: url('../assets/phone.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 500px;

    & > * {
      max-width: 60%;
    }

    h2,
    p {
      padding: 15px 30px;
      background-color: rgba(255, 255, 255, 0.5);
      margin: 0;
    }

    h2 {
      padding-top: 30px;
    }
    p {
      font-size: 1.1em;
      padding-bottom: 30px;

      a {
        color: $dark-blue;
        transition: padding 0.3s;

        &:hover {
          color: $mint;

          background-color: $slate-gray;
          padding: 0 1em;
          transition: padding 0.3s;
        }
      }
    }
  }
}

@media (min-width: 767px) {
  #learn-more img {
    display: none;
  }
}

@media (max-width: 767px) {
  #learn-more .txt-ctn {
    height: 100%;
    background: none;

    & > * {
      max-width: 100%;
    }
  }
}
</style>
