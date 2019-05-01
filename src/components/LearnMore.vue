<template>
  <div id="learn-more">
    <img src="@/assets/phone.jpg" />
    <div class="txt-ctn">
      <h2>Infor</h2>
      <p>This is information</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#learn-more {
  img {
    max-width: 100%;
  }

  .txt-ctn {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > * {
      max-width: 50%;
    }

    h2 {
      padding-left: 30px;
    }
    p {
      padding: 15px 30px;
      font-size: 1.1em;
      background-color: rgba(255, 255, 255, 0.5);
    }

    background: url('../assets/phone.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 500px;
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
