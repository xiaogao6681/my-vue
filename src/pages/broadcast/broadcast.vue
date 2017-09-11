<template>
  <div class="broadCast">
    <Myheader>
      <span>推荐广播</span>
      <router-link :to="{name:'Search',params:{url:'/broadcast',sel:2,num:2}}">
          <img src="../../assets/images/ic_status_search_user.png" class="leftImg twoman">
      </router-link>
      <router-link :to="{name:'Register',params:{url:'/broadcast'}}">
        <img src="../../assets/images/ic_chat_green.png" class="rightImg">
      </router-link>
    </Myheader>
    <Myfind></Myfind>
    <Mysign name="脑菇" num="9067人关注" likes="29" comments="6">
        <p slot="txt">
          整理照片发现这个在伦敦拍到的路人好像
        </p>
        <img src="../../assets/images/banner/02.jpg" class="bigImg" slot="pic"/>
       <img src="../../assets/images/209.jpg" class="head" slot="head"/>
    </Mysign>
    <Mysign name="加快离开" num="908人关注" likes="345" comments="67">
      <p slot="txt">
        看发动机几分地发挥积分公积
      </p>
      <img src="../../assets/images/208.jpg" class="head" slot="head"/>
    </Mysign>
    <Mysign name="夏天" num="9067人关注" likes="29" comments="6">
      <p slot="txt">
        今天的雨很大
      </p>
      <img src="../../assets/images/banner/01.jpg" class="bigImg" slot="pic"/>
      <img src="../../assets/images/209.jpg" class="head" slot="head"/>
    </Mysign>
  </div>
</template>
<script>
  import Myheader from '../../components/header'
  import Myfind from '../../components/find'
  import Mysign from '../../components/sign'
  export default {
    components:{
      Myheader,
      Myfind,
      Mysign
    }
  }
</script>
<style>
  .broadCast{padding-top: 0.61rem;padding-bottom: 0.67rem;}
  .broadCast .leftImg{width:0.30rem;top:0.19rem }
  .broadCast{background: #eee;}
</style>
