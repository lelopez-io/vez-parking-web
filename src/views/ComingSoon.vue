<template>
  <div class="coming-soon">
    <div class="text">
      <h3 class="r">Live Feature Coming Soon</h3>
      <h3 class="g">Live Feature Coming Soon</h3>
      <h3 class="b">Live Feature Coming Soon</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coming-soon {
  min-height: calc(100vh - 55px);
}
.coming-soon {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #222;

  &:after {
    content: '';
    position: absolute;
    top: 0px;
    left: 20px;
    right: 20px;
    bottom: 0px;
    z-index: 1000;
    max-width: 1032px;
    margin: 0 auto;
    background: repeating-linear-gradient(
      0deg,
      #111 0px,
      #111 1px,
      transparent 2px,
      transparent 5px
    );
    background-size: 100% 5px;
    animation: lines 2s ease-out infinite;
    opacity: 0.3;
    mix-blend-mode: color-burn;
    pointer-events: none;
  }
  .text,
  .text > * {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .text {
    > * {
      font-size: 80px;
      animation: giggle 2s ease infinite;
      mix-blend-mode: difference;
    }
    .r {
      color: #f00;
      left: -0.5px;
    }
    .g {
      color: #0f0;
      animation-delay: -0.67s;
    }
    .b {
      color: #00f;
      animation-delay: -0.33s;
      left: 0.5px;
    }
  }
}

@keyframes giggle {
  0%,
  100% {
    transform: translate(-50%, -50%) translateY(-2px);
  }
  50% {
    transform: translate(-50%, -50%) translateY(2px);
  }
}
@keyframes lines {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: 0px 25px;
  }
}
</style>
