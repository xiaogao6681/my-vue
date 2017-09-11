<template>

<div class="swiper-slide">
  <router-link :to="{name:'Audiodetail',params:{url:url}}">
        <div class="audioitemswrap">
          <span><slot name="audiopic"></slot><br/></span>
          <slot name="audiotit"></slot><br/>
          <span class="star" v-show="msg>0">
                <img src="../assets/images/rating_star_small_on.png" v-for="items in arr1">
                <img src="../assets/images/rating_star_small_half.png" v-for="items in arr2">
                <img src="../assets/images/rating_star_small_off.png" v-for="items in arr3">
         </span>
          <span  v-show="msg>0">{{ msg }}<br/></span>
          <slot name="update"></slot>
          <slot></slot>
        </div>

    </router-link>
</div>
</template>
<script>
  import Mybanner from './banner'
  export default {
    components:{
      Mybanner
    },
    props:["msg"],
    data: function () {
      return {
        selected: 2,
        arr1:[],
        arr2:[],
        arr3:[],
        url:'/audio/film'
      }
    },
    computed: {},
    mounted(){
      this.url=this.$route.path;
      var oScore=this.msg;
      var n=Math.floor((this.msg-0)/2);
      var n1=(oScore-0)/2-n;
       n=n1>0.5?n+1:n;
      (n1>0.5)?this.arr2=[]:this.arr2.push(0);
      for(var i=0;i<n;i++){
        this.arr1.push(i);
      }
      var n3=5-this.arr1.length-this.arr2.length;
      for(var i=0;i<n3;i++){
        this.arr3.push(i);
      }
    }
  }

</script>
<style>
  h5{font-weight: normal;color: #222}
.audioitemswrap{float: left;text-align: left;padding-right: 0.14rem;}
.audioitemswrap span{height: 0.22rem;line-height:0.22rem;color: #444;font-size: 0.14rem;}
.audioitemswrap img{width:1.00rem;height: 1.30rem;}
.audioitemswrap .star img{width: 0.12rem;height: 0.12rem;float: left;margin-top: 4px;}
</style>
