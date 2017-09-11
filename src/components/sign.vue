<template>
  <div class="signWrap" v-show="bol">
    <p>{{ name }}</p><br/>
    <p class="number">{{ num }}</p><br/>
    <slot name="txt"><br/></slot>
    <slot name="pic"></slot>
    <slot name="head"></slot>
    <img src="../assets/images/ic_like_full.png" class="likeImg"/>
    <span class="like">{{ likes }}</span>
    <img src="../assets/images/ic_comment_full.png" class="commentImg"/>
    <span class="comment">{{ comments }}</span>
    <img src="../assets/images/ic_close_status_recommend.png" class="close" @click="bol=false"/>
    <router-link :to="{name:'Register',params:{url:'/broadcast'}}">
        <button type="submit">关注</button>
    </router-link>
  </div>
</template>
<script>
  export default {
    props:["name","num","likes","comments"],
    data:function(){
        return {
            bol:true
        }
    }
  }
</script>
<style>
  .signWrap{margin: 0.12rem;background: #fff;border: 1px solid #ccc;border-radius: 9px;position: relative;padding: 20px 13px 50px 70px;}
  .signWrap .likeImg,.signWrap .commentImg{width: 0.18rem;position: absolute;bottom: 0.15rem;}
  .signWrap .likeImg{left:0.60rem;}
  .signWrap .commentImg{left: 1.27rem;}
  .signWrap .comment{position: absolute;left: 1.50rem;bottom: 0.15rem;}
  .signWrap .like{position: absolute;left: 0.85rem;bottom: 0.15rem;}
  .signWrap .head{position: absolute;top:0.17rem;left: 0.10rem;width: 0.50rem;border-radius: 50%;}
  .signWrap .close{width:0.28rem;position: absolute;top: 5px ;right: 5px;}
  .signWrap button{width: 0.52rem;height:0.25rem;background:#42bd56;outline: none;border: none; border-radius: 4px;color: #fff;font-size: 14px;position: absolute;top:0.24rem;right:0.30rem;}
  .signWrap p{line-height:0.20rem;text-align: left;font-size: 0.16rem;}
  .signWrap .number{font-size:0.14rem;color: #999;line-height: 0.10rem}
  .signWrap .bigImg{width: 2.72rem;height: 0.80rem;text-align: left}
  .signWrap span{color: #999;}
</style>
