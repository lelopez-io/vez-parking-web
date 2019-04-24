<template>
  <div class="container">
    <div class="content">
      <div class="text">
        <h2>At a parking lot?</h2>
        <h5 class="sub-heading">Scan QR code to view availability</h5>
      </div>
      <img src="@/assets/qr-code.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$light-mint: #e6f5f2;
$mint: #c1e7df;
$dark-blue: #134d60;
$slate-gray: #2c3e50;

$text-padding: 30px;

.container {
  margin: 40px 0px;
  height: 150px;
  background-color: $slate-gray;

  display: flex;
  align-items: center;
}

.content {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0 $text-padding;
  cursor: pointer;
}

.text {
  display: flex;
  align-items: center;

  & > * {
    padding-right: $text-padding;
  }
}

@media (max-width: 767px) {
  .sub-heading {
    display: none;
  }
}
</style>
