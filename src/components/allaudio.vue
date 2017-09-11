<template>
  <div class="allaudiowrap">
    <h5>
      <a href="#">{{titles}}</a>
      <span>
        <router-link :to="{name:'More',params:{url:url}}">
          更多
        </router-link>
      </span>
    </h5>
    <div class="play">
      <Mybanner :slidesPerView=3.1 swiperId="myclass1" :autoplay=0>
        <slot></slot>
      </Mybanner>
    </div>
  </div>
</template>
<script>
  import Mybanner from './banner'
  export default {
     components:{
        Mybanner
     },
      props:["titles","more"],
      data:function(){
        return{
            url:'/audio/film'
        }
      },
      mounted(){
          this.url=this.$route.path;
      }
  }
</script>
<style>
 .allaudiowrap{background: #fff;padding: 0 4vw;white-space: nowrap;margin-bottom: 0.15rem;}
.allaudiowrap h5{width: 92vw;text-align: left;font-size: 0.19rem;letter-spacing: 0px;height: 63px;line-height: 63px;}
a{text-decoration: none;color: #333}
.allaudiowrap h5 span a{float: right;font-size: 14px;color: #42bd56}
  .play{
    width: 100%;
  }
 .tvWrap .allaudiowrap{
   width: 270vw;
 }
</style>
