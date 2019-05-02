<template>
  <div id="about">
    <h1>vez parking</h1>

    <h2>Innovation for the Cities of Tomorrow</h2>

    <div class="columns">
      <div>
        <p>
          <strong>The Problem:</strong> In today's urban infrastructure, where
          cars are heavily relied on, parking can be a huge waste of time.
        </p>
      </div>
      <div>
        <p>
          <strong>Our Solution:</strong> VEZ aims at allowing users to
          efficiently find parking spaces.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#about {
  margin-top: 55px;
  min-height: 90vh;
  h1 {
    font-size: 4em;
    padding: 61px 0 0;
    margin: 0;
  }
}

.columns p {
  margin-top: 0;
}

@media (min-width: 767px) {
  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
  }
}
</style>
