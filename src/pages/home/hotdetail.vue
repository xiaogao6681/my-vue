<template>
  <div class="hotdetailWrap">
      <div class="hearder">
        <p>
          <router-link to="/home">
             <span class="symbol">
              <
            </span>
          </router-link>
          日记
         <span class="right">
            <img src="../../assets/images/ic_menu_like.png"/>
            <img src="../../assets/images/ic_menu_reply.png"/>
            <img src="../../assets/images/ic_action_share_green.png"/>
         </span>

        </p>
      </div>
      <div class="main">
        <p>{{ this.$route.params.tit }}</p>
        <span>作者：{{ this.$route.params.author }}</span><br/><br/>
        <span>{{ this.$route.params.des }}</span>
      </div>
  </div>
</template>
<script>
  export default {
    components:{

    },
    data:function(){
      return {
      }
    },
    methods:{
    },
    mounted(){
        console.log(this.$route.params)
    }
  }
</script>
<style>
  .hotdetailWrap+.tabberWrap{display: none}
  .hotdetailWrap .hearder{width: 100vw;height: 0.60rem;position: fixed;top: 0;left: 0;border-bottom: 1px solid #ccc;line-height: 0.60rem}
  .hotdetailWrap .hearder img{width: 0.23rem;vertical-align: middle;height: 0.23rem}
  .hotdetailWrap .hearder p{text-align: left;padding: 0 0.25rem;}
  .hotdetailWrap .hearder p span{text-align: left}
  .hotdetailWrap .hearder p .symbol{font-family: Consolas;font-size: 0.26rem;color: #42bd56}
  .hotdetailWrap .hearder p .right{float: right;padding: 0;width: 40vw}
  .hotdetailWrap .hearder p .right img{margin-left: 0.15rem}
  .hotdetailWrap .main{padding: 0.80rem 0.20rem 0 0.20rem;text-align: left;font-size: 21px}
  .hotdetailWrap .main span{font-size: 0.18rem;}
  .hotdetailWrap .main p{margin-bottom: 0.13rem}
</style>
