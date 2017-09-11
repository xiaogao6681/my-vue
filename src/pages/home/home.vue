<template>
  <div class="homeWrap">
    <Myheader col="#42bd56" col1="#fff">
      <div class="myheaderWrap">
        <router-link :to="{name:'Search',params:{url:'/home',bol1:true,col:'#42bd56',col2:'#fff',num:0,sel:0}}">
          <div>
            <input type="text" class="searchBlank" placeholder="影视 图书 唱片 小组 舞台剧等">,
            <img src="../../assets/images/ic_search.png" class="searchImg">
          </div>
        </router-link>
        <router-link :to="{name:'Homeqrcode',params:{names:'Home'}}">
          <img src="../../assets/images/ic_scan_gray.png" class="leftImg" top="20px">
        </router-link>
        <router-link :to="{name:'Register',params:{url:'/home'}}">
          <img src="../../assets/images/ic_comment_full.png" class="rightImg">
        </router-link>
      </div>
    </Myheader>
    <Mybanner swiperId="myclass" :autoplay=2000>
      <div class="swiper-slide">
        <img src="../../assets/images/banner/01.jpg"/>
      </div>
      <div class="swiper-slide">
        <img src="../../assets/images/banner/02.jpg"/>
      </div>
      <div class="swiper-slide">
        <img src="../../assets/images/banner/03.jpg"/>
      </div>
    </Mybanner>
    <Hotwrap>
      <router-link v-for="(item,i) in arrhot" :to="{name:'Hotdetail',params:{tit:item.title,des:item.target.desc,author:item.target.author.name  }}">
        <Hot>
            <h2 slot="tit" class="title">{{item.title}}</h2>
            <p slot="txt" class="txt">{{ item.target.desc }}<br/>
              <span class="line">——</span>
            </p>
            <img :src="item.target.cover_url" slot="pic" class="hotpic"/>
            <span slot="author" class="author">作者：{{  item.target.author.name }}</span>
        </Hot>
      </router-link>
    </Hotwrap>
    <Tabber></Tabber>
  </div>
</template>
<script>
  import Myheader from '../../components/header'
  import Mybanner from '../../components/banner'
  import Hotwrap from '../../components/hotwrap'
  import Hot from '../../components/hot'
  export default {
    components:{
      Myheader,
      Mybanner,
      Hotwrap,
      Hot
    },
    data:function(){
      return{
          i:0,
          arrhot:[]
      }
    },
    mounted(){
      this.search();
    },
    methods:{
      search:function(){
          this.axios.get('/api/homeData').then((response) => {
            this.arrhot=response.data.data.recommend_feeds;
          })
      },
      searchAll:function(){
        this.$router.push('/homesearch');
      }
    }
  }
</script>
<style>
  .homeWrap{position: relative;padding-top: 0.60rem;padding-bottom:0.60rem;}
  .searchBlank{position: absolute;width: 2.46rem;height: 0.20rem;left: 0.15rem;top: 0.17rem;border:none;border-radius: 5px;outline: none;padding:0.05rem 0.30rem;}
  .myheaderWrap img{width: 0.20rem;}
  .searchImg{position: absolute;top: 0.22rem;left: 0.19rem;}
  .leftImg{position: absolute;top:0.19rem;right:0.60rem;width:0.30rem;}
  .rightImg{position: absolute;top:0.19rem;right:0.13rem;width:0.28rem;}
  .bannerWrap img{width: 100vw}
  .hot{height:0.40rem;}
  .hot span{display:inline-block;width:0.08rem;height:0.24rem;margin: 7px 0 7px 0;background: orange;margin-top: 10px;float: left;}
  .hot a{display: inline-block;float: left;line-height: 0.40rem;padding-left:0.15rem;text-decoration: none;color:orange}
  .hotpic{width: 100%}
  .left{width: 54%;float: left;text-align: left;padding:6px 15px;}
  .right{width: 30%;float: right;padding-right:14px;padding-top:9px;}
  .right img{height: 1.16rem;}
  .left h2{font-size: 0.16rem;color: #333}
  .left p{font-size: 0.14rem;color: #666;line-height:0.25rem}
  .from{float: right;padding-right:0.15rem;color: #999}
  .author{float: left;padding-bottom: 5px;color: #999;font-size: 0.14rem;}
  .txt{color: #666}
  .txt .line{color: #aaa}
  .myheaderWrap img{top:0.22rem;}
  .homeWrap .headerWrap{border-bottom: none}
</style>
