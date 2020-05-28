<template>
  <footer>
    <div class="footer-content">
      <h3>This id Footer component</h3>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    position: fixed;
    height: 50px;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ce93d8;
  }

  .footer-content {
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
  }
</style>