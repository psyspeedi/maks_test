<template>
  <div class="trainer">
    <div class="trainer-content">
      <div class="avatar">
        <img width="128" height="128" :src="trainer.avatar || require('../assets/empty-avatar.png')" alt="">
      </div>
      <div class="info">
        <div class="name">
          <p><strong>Имя</strong></p>
          <span>{{trainer.name.firstName}} </span>
          <span>{{trainer.name.secondName}}</span>
        </div>

        <div class="age">
          <p><strong>Возраст</strong></p>
          <span>{{trainer.age}}</span>
        </div>

        <div class="from">
          <p><strong>Локация</strong></p>
          <span>{{trainer.location.city}} </span>
          <span>{{trainer.location.region}} </span>
          <span>{{trainer.location.country}} </span>
        </div>

        <div class="role">
          <p><strong>Направление</strong></p>
          <span>{{trainer.role}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Trainer',
    props: {
      trainer: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .trainer {
    width: 250px;
    margin-bottom: 50px;
    border: 2px solid #2c3e50;
    border-radius: 5px;
    padding: 10px;
  }
</style>