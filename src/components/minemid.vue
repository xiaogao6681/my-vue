<template>
  <div class="minemidWrap">
    <router-link :to="{name:'Register',params:{url:'/mine'}}">
      <p class="p1">
        <img src="../assets/images/ic_mine_notification.png">
        <span class="span1">提醒</span>
        <span class="span2">></span>
      </p>
      <p class="p2">
        暂无新提醒
      </p>
    </router-link>
  </div>
</template>
<script>
  export default {

  }
</script>
<style>
  .minemidWrap{height: 0.78rem;background: #fff;}
  .minemidWrap .p1 img{width: 0.30rem;float: left;padding-left:0.20rem;padding-top:0.05rem;}
  .minemidWrap .p1{height: 0.40rem;line-height: 0.42rem;float: left;background: #fff;width: 100vw;border-bottom: 1px solid #eee;}
  .minemidWrap .p1 .span1{float: left;padding-left: 0.08rem;}
  .minemidWrap .p1 .span2{float: right;font-family: Consolas;padding-right:0.26rem;}
  .minemidWrap .p2{width: 100vw;height:0.34rem;font-size:0.12rem;color: #999;background: #fff;line-height:0.34rem;}
  .minemidWrap{margin-bottom: 15px;}
</style>
