<template>
  <div class="homeqrcodeHearderWrap">
    <p>
      <router-link :to="{
          name:this.$route.params.names,
          params:this.$route.params
      }">
        <span class="symbol">
          <
        </span>
      </router-link>
        {{txt}}
      <span>
        <img src="../../assets/images/ic_action_overflow_white.png"/>
      </span>
    </p>
    <p v-show="bol" class="album">{{ msg }}</p>
  </div>
</template>
<script>
  export default {
      props:["txt","msg","bol"],
      methods:{
      },
      data:function(){
            return{
                url:"/home"
            }
      },
      mounted(){
            this.url=this.$route.params.url;
            console.log(this.$route.params)
      }
  }
</script>
<style>
.homeqrcodeHearderWrap{color: #e7e7e7;position: relative}
.homeqrcodeHearderWrap p{height: 70px;line-height: 70px;padding: 0 20px;text-align: left;}
.homeqrcodeHearderWrap img{width: 30px;position: absolute;top: 22px;right: 18px;}
.homeqrcodeHearderWrap .symbol{font-family: Consolas;float: left;font-size: 25px;margin-right: 10px;color: #fff;padding:0 5px;line-height: 67px;display: inline-block}
.homeqrcodeHearderWrap .album{position: absolute;top: 22px;right: 12px;background: #fff;height: 28px;line-height: 28px;color: #333;font-size: 14px;}
</style>
