<template>
  <div class="localWrap">
      <p>
        <span class="left">
          当前城市:<span class="add"> 北京</span>
         <span class="arrow">></span>
        </span>
        <span class="right">
          类型 时间 地点
          <span class="arrow">></span>
        </span>
      </p>
  </div>
</template>
<script>

</script>
<style>
  .localWrap p{width: 100vw;height: 0.50rem;line-height: 0.50rem;background: #fff;overflow: hidden;margin-bottom: 0.20rem;padding-bottom: 0.10rem;}
  .localWrap .left{width: 43vw;border-right:0.01rem solid #eee;}
  .localWrap .add{color: #42bd56}
  .localWrap .arrow{float: right;font-family: Consolas;}
  .localWrap .right{float: left;width: 0.40vw;line-height: 0.50rem;text-align: left;padding-left: 0.10rem;padding: 0.06rem 0 0.06rem 0.10rem;}
</style>
