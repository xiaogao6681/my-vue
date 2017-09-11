<template>
  <div class="moreWrap">
    <div class="hearder">
      <p>
        <router-link :to="a">
             <span class="symbol">
              <
            </span>
        </router-link>
        {{ tit }}
       <span class="right">
            <img src="../../assets/images/ic_action_share_green.png"/>
         </span>

      </p>
    </div>
    <div class="main">
      <ul>
        <li v-for="(item,i) in arr">
          <img :src="item.url" alt="">
          <span>{{ item.txt }}</span><br/>
          <span>{{ item.des }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

  export default {
    components:{
    },
    props:[],
    data:function(){
      return{
        tit:'专题',
        a:'/home/film',
        arr:[
          {txt:"神奇女侠",url:require("../../assets/images/003.jpg"),des:"年金缴费韩国复古偶尔积分快乐的歌看得见的，你的风景HIV疾风剑豪那几个"},
          {txt:"我的笔记",url:require("../../assets/images/010.jpg"),des:"年金缴费韩国复古偶尔积分快乐的歌看得见的，较好的发货单比较难打飞机"},
          {txt:"哈哈",url:require("../../assets/images/011.jpg"),des:"年金缴费韩国复古偶尔积分快乐的歌看得见的，看你空间更多女姐姐"},
          {txt:"吃饭了",url:require("../../assets/images/012.jpg"),des:"年金缴费韩国复古偶尔积分快乐的歌看得见的,金华大世界韩国锦湖度假酒店"}
        ]
      }
    },
    methods:{

    },
    mounted(){
        this.a=this.$route.params.url;
        if(this.a=="/audio/film"){
            this.tit="院线电影"
        }else if(this.a=="/audio/book"){
          this.tit="新书速递"
        }else if(this.a=="/audio/tv"){
          this.tit="今日更新电视"
        }else if(this.a=="/audio/city"){
          this.tit="热门活动"
        }else if(this.a=="/audio/music"){
          this.tit="华语新碟榜"
        }
    }
  }

</script>
<style>
  .moreWrap+.tabberWrap{
    display: none;
  }
  .moreWrap .hearder{width: 100vw;height: 0.60rem;position: fixed;top: 0;left: 0;border-bottom: 1px solid #ccc;line-height:0.60rem;background: #fff}
  .moreWrap .hearder img{width:0.23rem;vertical-align: middle;height: 0.23rem}
  .moreWrap .hearder p{text-align: left;padding: 0 0.25rem}
  .moreWrap .hearder p span{text-align: left}
  .moreWrap .hearder p .symbol{font-family: Consolas;font-size: 0.26rem;color: #42bd56}
  .moreWrap .hearder p .right{float: right;padding: 0;width: 10vw}
  ul{padding: 0}
  li{list-style: none}
  .moreWrap .main{padding-top: 0.70rem}
  .moreWrap .main li{width: 88vw;height: 1.30rem;border-bottom: 1px solid #eee;padding: 0.20rem 6vw;text-align: left}
  .moreWrap .main li img{width: 30vw;height: 1.30rem;float: left;margin-right:0.20rem}
  .moreWrap .main li span:nth-of-type(1){font-size: 0.20rem;line-height: 0.35rem}
  .moreWrap .main li span:nth-of-type(2){font-size: 0.16rem;line-height: 0.28rem}
</style>
