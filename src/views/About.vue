<template>
  <div id="about">
    <h1>vez parking</h1>

    <h2>Inovation for the Cities of Tomorrow</h2>

    <div class="columns">
      <div>
        <p>
          <strong>The Problem:</strong> In today's urban infrasturcture, where
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

<style lang="scss">
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

.coming-soon {
  display: flex;
  justify-content: center;
  padding-top: 200px;
}

@media (min-width: 767px) {
  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
  }
}
</style>
