<template>
  <div>
    <h1>Это профиль юзера <strong>{{user.nick}}</strong></h1>
    <img :src="user.avatar" alt="avatar">
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'User',
    computed: {
      ...mapGetters(['user'])
    }
  }
</script>