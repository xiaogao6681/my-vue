<template>
  <div class="audiodetailWrap">
    <div class="hearder">
      <p>
        <router-link :to="a">
             <span class="symbol">
              <
            </span>
        </router-link>
        <span class="mid">
          <img :src="arr[n].url"/>
          {{ tit }}
        </span>
       <span class="right">
            <img src="../../assets/images/ic_action_share_green.png"/>
       </span>
      </p>
    </div>
    <div class="main">
      <img src="../../assets/images/050.jpg" alt="">
      <p>赖声川导演、郑佩佩主演舞台剧《在那遥远的星球，一粒沙》武汉站</p>
      <p>255人感兴趣/126人要参加/46人已购票</p>
      <button>感兴趣</button><button>要参加</button>
    </div>
  </div>
</template>
<script>
  export default {
    data:function(){
      return{
        a:'/home/film',
        arr:[
          {txt:"神奇女侠",url:require("../../assets/images/rd__movie.png"),des:"年金缴费韩国复古偶尔积分快乐的歌看得见的，你的风景HIV疾风剑豪那几个"},
          {txt:"我的笔记",url:require("../../assets/images/rd__book.png"),des:"年金缴费韩国复古偶尔积分快乐的歌看得见的，较好的发货单比较难噶哈哈飞机"},
          {txt:"哈哈",url:require("../../assets/images/rd__video.png"),des:"年金缴费韩国复古偶尔积分快乐的歌看得见的，看你空间更多女姐姐"},
          {txt:"吃饭了",url:require("../../assets/images/rd__event.png"),des:"年金缴费韩国复古偶尔积分快乐的歌看得见的,金华大世界韩国锦湖度假酒店"},
          {txt:"吃饭了",url:require("../../assets/images/rd__music.png"),des:"年金缴费韩国复古偶尔积分快乐的歌看得见的,金华大世界韩国锦湖度假酒店"}
        ],
        n:0,
        tit:"更新"
      }
    },
    components: {

    },
    props: [],
    mounted(){
      this.a=this.$route.params.url;
      if(this.a=="/audio/film"){
        this.tit="电影";
          this.n=0;
      }else if(this.a=="/audio/book"){
        this.tit="图书";
        this.n=1;
      }else if(this.a=="/audio/tv"){
        this.tit="电视";
        this.n=2;
      }else if(this.a=="/audio/city"){
        this.tit="同城";
        this.n=3;
      }else if(this.a=="/audio/music"){
        this.tit="音乐";
        this.n=4;
      }
    }
  }
</script>
<style>
  .audiodetailWrap+.tabberWrap{
    display: none;
  }
  .audiodetailWrap .hearder{background: rgba(187, 187, 187, 0.68);height: 0.60rem;position: fixed;left: 0;top: 0;width: 100vw;line-height: 0.60rem}
  .audiodetailWrap p{text-align: left;padding: 0 18px;color: #fff}
  .audiodetailWrap .symbol{font-size:0.26rem;color: #fff;text-align: left;font-family: Consolas}
  .audiodetailWrap p img{width: 0.25rem;height:0.25rem}
  .audiodetailWrap .right{width: 10vw;padding: 0;margin-top: 11px}
  .audiodetailWrap .mid{margin-left: 30vw}
  .audiodetailWrap .mid img{vertical-align: middle;width: 0.20rem;height:0.20rem;margin-top: -3px}
  .audiodetailWrap .main{padding-top:0.60rem;padding-bottom:0.60rem}
  .audiodetailWrap .main img{width: 100vw;height: 60vh}
  .audiodetailWrap .main p{color: #111}
  .audiodetailWrap .main p:nth-of-type(1){font-size:0.26rem;line-height:0.39rem}
  .audiodetailWrap .main p:nth-of-type(2){font-size:0.18rem;color: #666;margin-bottom: 0.20rem}
  .audiodetailWrap .main button{background: #fff;border: 1px solid orange;color: orange;border-radius: 5px;width: 1.30rem;height: 0.40rem;margin-right: 10px}
</style>
