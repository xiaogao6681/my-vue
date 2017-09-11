<template>
  <div class="wrapWrap">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props:["sel"]
  }
</script>
<style>
.wrapWrap{width: 100%;height: 0.68rem;position: fixed;left: 0;bottom: 0;border-top: 1px solid #666;background: #eee}
</style>
