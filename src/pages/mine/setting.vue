<template>
  <div class="settingWrap">
    <Hearder col="#fff">
      <p>
        <router-link to="/mine">
          <span class="symbol"><</span>
        </router-link>
        <span>设置</span>
      </p>
    </Hearder>
    <ul>
      <li v-for="(item,i) in arr">
        <p>{{ item.name }}<span>{{ item.sym }}<img src="../../assets/images/ic_feedback.png" v-show="i==4">></span></p>
      </li>
    </ul>
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
          arr:[
            {name:"推送"},
            {name:"兴趣标签"},
            {name:"清理存储空间",sym:"7.8MB"},
            {name:"将[小组放在桌面]"},
            {name:"帮助与反馈",sym:"来尽情吐槽吧"},
            {name:"网络诊断"},
            {name:"新功能介绍"},
            {name:"关于"},
            {name:"开源许可"}
          ]
      }
    },
    methods:{

    },
    mounted(){

    }
  }
</script>
<style>
  .settingWrap+.tabberWrap{
    display: none;
  }
  .settingWrap{padding-top: 0.60rem;background: #eee;padding-bottom: 0.40rem}
  .settingWrap .headerWrap p{line-height: 0.60rem;font-size:0.18rem;color: #222;text-align: left;padding: 0 20px}
  .settingWrap .headerWrap p span{text-align: left}
  .settingWrap .headerWrap p .symbol{font-family: Consolas;font-size: 0.26rem;color: #42bd56;padding: 0 0.07rem;margin-right: 0.20rem}
  .settingWrap ul{margin-top:0.25rem;}
  .settingWrap ul li{height: 0.58rem;line-height:0.58rem;background: #fff;border-bottom: 1px solid #eee;margin-bottom: 0.25rem;}
  .settingWrap ul li p{text-align: left;padding: 0 0.18rem;font-size: 0.14rem;color: #222}
  .settingWrap ul li p span{float: right;font-family: Consolas}
  .settingWrap li:nth-of-type(1),.settingWrap li:nth-of-type(5),.settingWrap li:nth-of-type(7),.settingWrap li:nth-of-type(8){margin-bottom: 0}
  .settingWrap img{width: 0.17rem;margin: 0 3px;vertical-align: middle;margin-top: -4px}
</style>
