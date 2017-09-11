<template>
  <div class="allmineWrap">
    <slot></slot>
  </div>
</template>
<script>
  export default {
      props:["titles","more"]
  }
</script>
<style>
 .allmineWrap{width: 100vw;height: 0.110rem;border-bottom: 1px solid #ccc;background: #fff;}
</style>
