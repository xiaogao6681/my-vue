<template>
  <div class="registerWrap">
    <p class="return">
      <router-link :to="{path:this.$route.params.url}">
       <span>
        <
      </span>
      </router-link>
    </p>

    <p class="welcome">欢迎来到豆瓣</p>
    <input type="text" placeholder="手机号/邮箱" @click="fn(0)" :class="{ac:sel==0}">
    <input type="text" placeholder="密码" @click="fn(1)":class="{ac:sel==1}"><br/>
    <button type="submit">登录</button>
    <p class="register">
      <span>注册豆瓣</span>
      <span class="mid">|</span>
      <span>忘记密码</span>
    </p>
    <p class="log">
        <img src="../../assets/images/ic_wechat.png" alt="">

      微信登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     |
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src="../../assets/images/ic_weibo.png" alt="">
      微博登录
    </p>

  </div>
</template>
<script>
  export default {
      data:function(){
          return {sel:0}
      },
      methods:{
          fn:function(i){
              this.sel=i;
          }
      },
      mounted(){

      }
  }
</script>
<style>
  .registerWrap+.tabberWrap{display: none}
  .registerWrap .return{padding: 0 0.28rem;font-family: Consolas;font-size: 0.32rem;height: 0.70rem;line-height:0.70rem;text-align: left;}
  .registerWrap .return span{color: #42bd56;}
  .registerWrap .welcome{font-size: 0.34rem;line-height: 1.90rem;color:#42bd56;margin-bottom: 0.15rem; height: 1.90rem;}
  .registerWrap input{width: 68%;height: 0.20rem;border: none;border-bottom: 1px solid #ccc;outline: none;padding: 0 2%;margin-bottom: 30px;}
  .registerWrap .ac{border-bottom: 2px solid #42bd56;margin-bottom: 0.29rem;}
  .registerWrap button{width: 72%;height:0.40rem;border: none;border-radius: 3px;background:#42bd56;color: #fff;outline: none }
  .registerWrap .register{margin: 0.20rem 0;font-size: 0.16rem;color: #555}
  .registerWrap .register span:nth-of-type(1){color:#42bd56 }
  .registerWrap .register .mid{margin: 0 0.08rem;}
  .registerWrap .log{height: 28px;font-size: 19px;position: fixed;left: 0;bottom: 0.35rem;width: 100%;line-height: 0;}
  .registerWrap .log img{height: 0.28rem;vertical-align: middle;}
</style>
