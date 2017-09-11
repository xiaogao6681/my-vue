<template>
  <div class="settingWrap">
    <Hearder col="#fff">
      <p>
        <router-link :to="{name:'Mine'}">
          <span class="symbol">< </span>
        </router-link>
        <span>我的{{msg}}</span>
      </p>
    </Hearder>
    <div class="bot">
      <img src="../../assets/images/ic_empty.png" alt=""><br/>
      <p>你还没有添加{{msg}}相关的内容</p>
    </div>
  </div>
  </template>
<script>
  import Hearder from '../../components/header'
  export default {
    components:{
        Hearder
    },
    props:[],
    data:function(){
      return{
        msg:"喜欢"
      }
    },
    methods:{

    },
    mounted(){
        this.msg=this.$route.params.txt1;
        if(this.msg.slice(0,2)=="我的"){
          this.msg=this.msg.slice(2,this.msg.length);
        }
    }
  }
</script>
<style>
  .settingWrap+.tabberWrap{display:none}
  .settingWrap{background: #fff}
  .settingWrap p{padding: 0 0.30rem;font-size: 0.16rem}
  .settingWrap p span{float: left}
  .settingWrap p .symbol{color: #42bd56;font-family: Consolas;font-size:0.26rem;margin-top: -2px;padding: 0 3px;margin-right: 7px}
  .settingWrap .bot{padding-top: 1.60rem;background: #fff}
  .settingWrap .bot img{width: 2.00rem;margin-bottom: 0.40rem}
</style>
