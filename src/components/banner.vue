<template>
  <div class="swiper-container" :class="swiperId">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div :class="{'swiper-pagination':bol}" :style="{'text-align':Direction}"></div>
  </div>
</template>

<script>
  import "../assets/libs/swiper/js/swiper.js";
  export default {
    props: {
      swiperId: {
        type: String,
        default: ""
      },
      bol: {
        type: Boolean,
        default: true
      },
      Direction: {
        type: String,
        default: "center"
      },
      effect: {
        type: String,
        default: "slide"
      },
      direction: {
        type: String,
        default: "horizontal"
      },
      loop: {
        type: Boolean,
        default: true
      },
      autoplay: {
        type: Number,
        default: 2000
      },
      paginationType: {
        type: String,
        default: "bullets"
      },
      slidesPerView: {
        type:Number,
        default:1
      }
    },
    mounted(){
      var That=this;
      var Myswiper=new Swiper("."+That.swiperId,{
        loop:That.loop,
        autoplay:That.autoplay,
        paginationType:That.paginationType,
        slidesPerView:That.slidesPerView
      })
    }
  }
</script>

<style>
  @import "../assets/libs/swiper/css/swiper.min.css";
  .swiper-pagination-bullet-active{background: #fff;}
  .swiper-container img{width: 100%}
</style>
