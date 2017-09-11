<template>
  <div class="mineheadWrap">
    <img src="../assets/images/avatar_male_30.png" alt="">
    <router-link :to="{name:'Register',params:{url:'/mine'}}">
      <button>登录 / 注册</button>
     </router-link >
  </div>
</template>
<script>
  export default {

  }
</script>
<style>
 .mineheadWrap{width: 100vw;height:1.30rem;background: #42bd56;margin-bottom: 0.15rem;}
 .mineheadWrap img{float: left;padding-top: 0.35rem;padding-left: 0.30rem;width:0.70rem;}
 .mineheadWrap button{width: 1.70rem;height: 0.40rem;border: 1px solid #fff;float: right;text-align: center;line-height:0.40rem;margin:0.50rem 0.50rem 0 0;color: #fff;font-size: 0.18rem;border-radius: 5px;background: #42bd56}
</style>
