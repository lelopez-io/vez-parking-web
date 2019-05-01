<template>
  <div id="hero">
    <div class="txt-ctn">
      <div class="title">
        <h1>vez parking</h1>
      </div>

      <div class="options">
        <div class="option-1">
          <h2>Self Park</h2>
          <p>Looking for parking nearby?</p>
          <button>Find Parking</button>
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
$slate-gray: #2c3e50;
$mint: #c1e7df;

#hero {
  padding: 0;
  display: flex;
}

.txt-ctn {
  text-align: left;
  padding: 0;
  width: 40%;
}

.title {
  display: flex;
  align-items: center;
  height: 50%;

  & h1 {
    font-size: 4em;
  }
}

.options {
  display: flex;

  & > * {
    width: 50%;
    padding-right: 10px;
  }

  button {
    display: inline-block;
    border: 2px solid $slate-gray;
    padding: 1rem 2rem;
    margin: 0;
    bottom: 0;

    text-decoration: none;
    background: white;
    color: $slate-gray;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  button:hover {
    background: $slate-gray;
    color: $mint;
  }

  button:focus {
    outline: none;
  }

  button:active {
    transform: scale(0.99);
  }
}
.img-ctn {
  width: 60%;
  & img {
    width: 100%;
  }
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

    & > * {
      width: 100%;
    }
  }
}
</style>
