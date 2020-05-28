<template>
  <div class="news-detail" v-if="dataReady">
    <h2>{{currentNews.title}}</h2>
    <p>{{currentNews.briefInformation}}</p>
    <p>{{currentNews.fullInformation}}</p>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'NewsDetail',
    data: () => ({
      dataReady: false
    }),
    computed: {
      ...mapGetters(['currentNews', 'news'])
    },
    async mounted() {
      if (!this.news.length) {
        await this.$store.dispatch('fetchNews')
      }
      this.$store.commit('getCurrentNews', this.$route.params.id)
      this.dataReady = true
    }
  }
</script>

<style lang="scss" scoped>
  .news-detail {
    max-width: 300px;
    margin: 0 auto;
  }
</style>