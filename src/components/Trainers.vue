<template>
  <div class="trainers-wrap">
    <div class="filter">
      <h5>Фильтр по направлению</h5>
      <select v-model="filter">
        <option value="all">Все</option>
        <option value="Бокс">Бокс</option>
        <option value="Смешанные единоборства">Смешанные единоборства</option>
        <option value="Качалка">Качалка</option>
        <option value="Муай Тай">Муай Тай</option>
        <option value="Гребля">Гребля</option>
      </select>
    </div>
    <div class="trainer-container" v-if="dataReady">
      <Trainer v-for="t in filteredTrainers" :trainer="t" :key="t.id" />
    </div>
  </div>
</template>

<script>
  import Trainer from './Trainer'
  import { mapGetters } from 'vuex'
  export default {
    name: 'Trainers',
    components: {
      Trainer
    },
    data: () => ({
      dataReady: false,
      filter: 'all'
    }),
    computed: {
      ...mapGetters(['trainers']),
      filteredTrainers() {
        if (this.filter !== 'all') {
          return this.trainers.filter(t => t.role === this.filter)
        }

        return this.trainers
      }
    },
    async mounted() {
      await this.$store.dispatch('fetchTrainers')
      this.dataReady = true
    }
  }
</script>

<style lang="scss" scoped>
  .trainer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 1200px;
    margin: 0 auto;
  }

  .filter {
    margin-bottom: 50px;
  }
</style>
