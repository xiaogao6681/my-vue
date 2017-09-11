<template>
  <div class="hotsearchtitleWrap">
    <p><span>热门搜索</span></p>
    <ul>
      <slot name="li"></slot>
    </ul>
  </div>
</template>
<script>
  export default {
    mounted(){
        var oInput=document.getElementsByTagName("input")[0];
        oInput.focus();
    },
    methods:{

    }
  }
</script>
<style>
  .hotsearchtitleWrap{background:#eee;width: 100%;height: 0.40rem;line-height: 0.40rem }
  .hotsearchtitleWrap p{height: 0.53rem;padding-left: 0.20rem;}
  .hotsearchtitleWrap p span{float: left;color: #666;font-size: 0.13rem;}
  li{list-style: none}
  ul{margin: 0.07rem 0;padding: 0}
  .hotsearchtitleWrap li{width: 95%;height: 0.52rem;line-height: 0.52rem;border-bottom: 1px solid #eee;text-align: left; padding-left: 5%}
  .hotsearchtitleWrap li span{margin-right:0.08rem;padding: 5px 6px 2px 7px;}
  .hotsearchtitleWrap li .num{font-size: 6px;}
  .hotsearchtitleWrap li #ac-0{background:url("../assets/images/ic_hottest_keyword.png");background-size: cover}
  .hotsearchtitleWrap li #ac-1{background:url("../assets/images/ic_hot_keyword_second.png");background-size: cover}
  .hotsearchtitleWrap li #ac-2{background:url("../assets/images/ic_hot_keyword_third.png");background-size: cover}
  .hotsearchtitleWrap li .name{font-size: 0.15rem;color: #222}
  .hotsearchtitleWrap li .des{font-size: 0.10rem;color: #666}
</style>
