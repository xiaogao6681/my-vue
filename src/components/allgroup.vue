<template>
  <div class="allgroupwrap">
    <div class="line"></div>
    <p class="tite">{{ msg  }}</p>
    <slot></slot>
  </div>
</template>
<script>
  export default {
      props:["msg"]
  }
</script>
<style>
.allgroupwrap{width: 100vw;height:290px;position: relative;}
.allgroupwrap .line{border-bottom: 1px solid #ccc;height: 0.10rem;width: 90vw;margin-left: 5vw;}
.allgroupwrap{text-align: center;}
.allgroupwrap p{height: 0.16rem;line-height: 0.16rem;font-size: 0.14rem;}
.allgroupwrap .tite{width: 0.70rem;background: #fff;display: inline-block;position: absolute;left: 50vw;margin-left: -0.35rem;text-align: center;
  top:0px;}

</style>
