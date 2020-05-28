<template>
  <div class="news">
    <div class="news-content">
      <NewsCard
        v-for="n in news"
        :title="n.title"
        :briefInformation="n.briefInformation"
        :fullInformation="n.fullInformation"
        :id="n.id"
        :key="n.fullInformation"
      />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import NewsCard from './NewsCard'
  export default {
    name: 'News',
    components: { NewsCard },
    data: () => ({
      dataReady: false
    }),
    computed: {
      ...mapGetters(['news'])
    },
    async mounted() {
      await this.$store.dispatch('fetchNews')
      this.dataReady = true
    }
  }
</script>

<style scoped lang="scss">
  .news {
    max-width: 1100px;
    margin: 0 auto;

    .news-content {
      display: flex;
      flex-wrap: wrap;
    }
  }

</style>
