<template>
  <div class="slider-section" v-if="dataReady">
    <div class="slider-wrap">
      <div class="slide slide-prev">
        <div class="slide-img slide-img-prev">
          <img @click="prevSlideHandler" :src="this.slides[prevSlide].image" alt="slide" />
        </div>
      </div>

      <div class="slide slide-center">
        <div class="slide-img slide-img-center" @dblclick="likedHandler">
          <img :src="this.slides[this.currentSlide].image" alt="slide" />
          <div class="likes-hover" :class="likesActive ? 'active-like' : null" v-if="user.isLogin">
            <HeartIcon />
          </div>
        </div>
        <span class="likes" v-if="user.isLogin">
          <i class="likes-icon">
            <HeartIcon />
          </i>
          {{ this.slides[this.currentSlide].likes }}
        </span>
      </div>

      <div class="slide slide-next">
        <div class="slide-img slide-img-next">
          <img @click="nextSlideHandler" :src="this.slides[nextSlide].image" alt="slide" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import HeartIcon from '../assets/icons/heart'
  export default {
    name: 'Slider',
    components: {
      HeartIcon
    },
    data: () => ({
      dataReady: false,
      currentSlide: 5,
      likesActive: false
    }),
    computed: {
      ...mapGetters(['slides', 'user']),
      nextSlide() {
        return this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1
      },
      prevSlide() {
        return this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1
      }
    },
    methods: {
      prevSlideHandler() {
        if (this.currentSlide <= 0) {
          return (this.currentSlide = this.slides.length - 1)
        }
        this.currentSlide--
      },
      nextSlideHandler() {
        if (this.currentSlide >= this.slides.length - 1) {
          return (this.currentSlide = 0)
        }
        this.currentSlide++
      },
      async likedHandler() {
        if (!this.user.isLogin) {
          return
        }

        this.likesActive = true
        setTimeout(() => {
          this.likesActive = false
        }, 1000)

        await this.$store.dispatch('updateSlides', {
          id: this.slides[this.currentSlide].id,
          likes: +this.slides[this.currentSlide].likes + 1
        })
      }
    },
    async mounted() {
      await this.$store.dispatch('fetchSlides')
      await this.$store.dispatch('fetchSlides')
      this.dataReady = true
    }
  }
</script>

<style lang="scss" scoped>
  .slider-section {
    margin-top: 100px;
    user-select: none;

    .slider-wrap {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: 1500px;

      .slide {
        width: 500px;
        min-width: 500px;
      }

      .slide-img {
        height: auto;
        max-height: 500px;
        display: inline-block;
        cursor: pointer;

        img {
          max-height: inherit;
        }
      }

      .slide-center {
        img {
          transition: 0.3s ease-in-out;
        }

        &:hover img {
          transform: scale(1.02);
        }

        .likes {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 40px;
          max-width: 70px;
          margin: 10px auto 0;

          &-icon svg {
            width: 15px;
            height: 15px;
            fill: #e57373;
          }
        }
      }

      .slide-next,
      .slide-prev {
        position: relative;
        transition: 0.3s ease-in-out;

        &:hover {
          transform: scale(1);
          &:after {
            border-color: #fff;
          }
        }

        &:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          border: solid;
          border-color: #000;
          border-width: 0 6px 6px 0;
          display: inline-block;
          padding: 6px;
          transition: 0.3s ease-in-out;
        }

        img {
          opacity: 0.6;
        }
      }

      .slide-prev {
        transform: perspective(1000px) rotateY(-45deg) scale(0.9);

        &:after {
          transform: rotate(135deg);
        }
      }

      .slide-next {
        transform: perspective(1000px) rotateY(45deg) scale(0.9);

        img {
          opacity: 0.6;
        }

        &:after {
          transform: rotate(-45deg);
        }
      }

      .slide-img-center {
        position: relative;

        &:hover .likes-hover svg {
          opacity: 0.3;
        }

        .likes-hover {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;

          svg {
            fill: #fff;
            width: 30%;
            margin-top: 200px;
            opacity: 0;
            transition: 0.3s ease-in-out;
          }
        }

        .likes-hover.active-like svg {
          fill: #e57373 !important;
          opacity: 1 !important;
        }
      }
    }
  }
</style>
