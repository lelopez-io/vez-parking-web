<template>
  <div id="hero">
    <div class="txt-ctn">
      <div class="title">
        <h1>VEZ Parking</h1>
      </div>

      <div class="options">
        <div class="option-1">
          <h2>Self Park</h2>
          <p>Find parking easily</p>
          <button>Find Nearby Parking</button>
        </div>
        <div class="option-2">
          <h2>Coordinate</h2>
          <p>Manage visitor parking efficiently</p>
          <button>Get VEZ</button>
        </div>
      </div>
    </div>

    <div class="img-ctn">
      <img src="@/assets/hero.jpg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#hero {
  padding: 0 40px;
  display: flex;

  & > * {
    width: 50%;
  }
}
.txt-ctn {
  text-align: left;
  padding: 0 10px;
}

.title {
  display: flex;
  align-items: center;
  height: 50%;
}

.options {
  display: flex;

  & > * {
    width: 50%;
  }
}
.img-ctn img {
  width: 100%;
}

@media (max-width: 1023px) {
  #hero {
    flex-direction: column-reverse;

    & > * {
      width: 100%;
    }
  }
}

@media (max-width: 767px) {
  .options {
    flex-direction: column;
  }
}
</style>
