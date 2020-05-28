<template>
  <header v-if="dataReady">
    <div class="header-content">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo.png" alt="" />
        </router-link>
      </div>

      <div class="info">
        <nav class="menu">
          <ul>
            <li>
              <router-link active-class="link-active" to="/slider">Слайдер</router-link>
            </li>
            <li>
              <router-link active-class="link-active" to="/news">Новости</router-link>
            </li>
            <li>
              <router-link active-class="link-active" to="/trainer">Тренеры</router-link>
            </li>
          </ul>
        </nav>

        <div class="user" v-if="user.isLogin">
          <img :src="user.avatar" alt="avatar" />
          <span>
            <strong @click="profileHandler">{{ user.nick }}</strong>
            <small @click="logoutHandler">Выход</small>
          </span>
        </div>

        <div class="no-login" v-else>
          <small @click="loginHandler">Войти</small>
          <small>Регистраци</small>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'
  import '../assets/logo.png'
  export default {
    name: 'Header',
    data: () => ({
      dataReady: false
    }),
    computed: {
      ...mapGetters(['user'])
    },
    methods: {
      profileHandler() {
        this.$router.push('/user/' + this.user.id)
      },
      async loginHandler() {
        await this.$store.dispatch('login', this.user.id)
      },

      async logoutHandler() {
        await this.$store.dispatch('logout', this.user.id)
        this.$router.push('/')
      }
    },
    async mounted() {
      await this.$store.dispatch('fetchUser')
      this.dataReady = true
    }
  }
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: 100px;
    background: #e57373;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 101;
  }

  .header-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo img {
      height: 40px;
    }
  }

  .info {
    display: flex;
    width: 500px;
    justify-content: space-between;
    align-items: center;
    .menu {
      ul {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        width: 250px;

        li a {
          color: #fff;
          text-decoration: none;
          transition: 0.3s ease-in-out;

          &:hover {
            color: #2c3e50;
          }
        }
      }
    }

    .user {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 40px;
      }

      span {
        height: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        strong,
        small {
          transition: 0.3s ease-in-out;
          cursor: pointer;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }

  .link-active {
    color: #2c3e50 !important;
  }

  .no-login {
    width: 120px;
    display: flex;
    justify-content: space-between;

    small {
      cursor: pointer;
      transition: .3s ease-in-out;

      &:hover {
        color: #fff;
      }
    }
  }
</style>
