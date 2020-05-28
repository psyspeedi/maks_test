<template>
  <div class="card" @mouseenter="more = true" @mouseleave="more = false" @click="detailHandler">
    <div class="card-content">
      <div class="card-title">
        <h3>{{ title }}</h3>
      </div>
      <div class="card-brief" v-if="!more">
        <p>{{ briefInformation }}</p>
      </div>
      <div class="card-full" v-if="more">
        <p>{{ fullInformation }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewsCard',
    props: {
      title: {
        type: String,
        required: true
      },
      briefInformation: {
        type: String,
        required: true
      },
      fullInformation: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    },
    data: () => ({
      more: false
    }),
    methods: {
      detailHandler() {
        this.$router.push('/news/detail/' + this.id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    width: 300px;
    min-height: 300px;
    margin: 20px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
    padding: 10px;
    position: relative;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      height: 0;
      width: 0;
      border: 2px solid transparent;
      bottom: 0;
      left: 0;
      box-sizing: border-box;
    }

    &:after {
      content: '';
      position: absolute;
      height: 0;
      width: 0;
      border: 2px solid transparent;
      top: 0;
      right: 0;
      box-sizing: border-box;
    }

    &:hover:before {
      height: 100%;
      width: 100%;
      border: 2px solid #2c3e50;
      border-right: none;
      border-top: none;
      transition: height 0.3s linear, width 0.3s linear;
    }

    &:hover:after {
      height: 100%;
      width: 100%;
      border: 2px solid #2c3e50;
      border-left: none;
      border-bottom: none;
      transition: height 0.3s linear, width 0.3s linear;
    }

    .card-content {
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
      justify-content: space-between;
    }
  }
</style>
