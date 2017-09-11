<template>
  <div class="tvWrap">
    <div class="tvitemswrap">
      <Allaudio titles="今日更新">
        <Audioitems msg="7.3">
          <img src="../assets/images/040.jpg" slot="audiopic" class="bigImg"/>
          <span slot="audiotit" class="title">白鹿原</span>
          <span slot="update">
            更新至43集/每天更新/乐视<br/>视频<br/>
            13583人想看
          </span>
        </Audioitems>
        <Audioitems msg="5.1">
          <img src="../assets/images/043.jpg" slot="audiopic" class="bigImg"/>
          <span slot="audiotit" class="title">欢乐颂2</span>
          <span slot="update">
            更新至44集/每天更新/乐视<br/>视频,爱奇艺<br/>
            3564人想看
          </span>
        </Audioitems>
      </Allaudio>
    </div>
    <Allaudio titles="最近值得看的国产剧">
      <Audioitems msg="7.3">
        <img src="../assets/images/064.jpg" slot="audiopic"/>
        <span slot="audiotit">小情人</span>
      </Audioitems>
      <Audioitems msg="7.9">
        <img src="../assets/images/041.jpg" slot="audiopic"/>
        <span slot="audiotit">我女朋友的男...</span>
      </Audioitems>
      <Audioitems msg="4.7">
        <img src="../assets/images/042.jpg" slot="audiopic"/>
        <span slot="audiotit">废材兄弟5:泰爽</span>
      </Audioitems>
      <Audioitems msg="5.1">
        <img src="../assets/images/043.jpg" slot="audiopic"/>
        <span slot="audiotit">欢乐颂2</span>
      </Audioitems>
    </Allaudio>
  </div>
</template>
<script>
  import Audioitems from './audioitems'
  import Allaudio from './allaudio'
  export default {
      components: {
        Audioitems,
        Allaudio
      }
  }
</script>
<style>
  .tvWrap .allaudiowrap{height: 238px;width: 260vw;}
  .tvWrap>.allaudiowrap{
    width: 100vw;
  }
  .tvitemswrap .audioitemswrap{width: 75vw;height: 1.30rem;border: 1px solid #999;padding: 10px;float: left;margin-right:0.15rem;}
  .tvitemswrap .audioitemswrap .bigImg{float: left;padding-right:0.14rem;}
  .tvitemswrap .audioitemswrap .title{font-size:0.21rem;color: #333;margin-top: -0.20rem;display: inline-block;}
  .tvitemswrap .audioitemswrap span{height:0.22rem;line-height:0.22rem;color: #666;font-size:0.14rem;}
  .tvitemswrap .audioitemswrap .star img{width:0.12rem;height:0.12rem;float: left;margin-top: 4px;}
  .tvWrap>.audioitemswrap>.play{
    width: 120vw;
  }
</style>
