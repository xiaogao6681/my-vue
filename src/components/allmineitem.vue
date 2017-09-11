<template>
  <div class="allmineitemWrap">
    <slot name="pics"></slot><br/>
    <span>{{ txts }}</span>
  </div>
</template>
<script>
  export default {
      props:["txts"]
  }
</script>
<style>
 .allmineitemWrap{width: 25vw;height: 0.89rem;background: #fff;float: left;padding-top: 0.20rem;}
 .allmineitemWrap img{width: 0.40rem;}
</style>
