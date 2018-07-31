<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in slides" :key="index" class="slide">
        <img :src="item" class="swiperImg">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      slides: [
        'https://ossdopimg.lynkco.com/2018072720591694636700.jpg',
        'https://ossdopimg.lynkco.com/2018062901411926791672.png',
        'https://ossdopimg.lynkco.com/2018051418091007466872.png',
        'https://ossdopimg.lynkco.com/2018071013535723226211.jpg'
      ],
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        centeredSlides: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        scrollbar: '.swiper-scrollbar',
        // mousewheelControl: true,
        observeParents: true,
        debugger: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="stylus" scoped>
.slide
  height 100%
  .swiperImg
    width 100%
</style>
