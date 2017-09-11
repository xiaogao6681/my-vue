<template>
  <div class="headerWrap" :style="{background:col,color:col1}">
     <slot></slot>
  </div>
</template>

<script>
  export default {
    props:{
      col:{
        default:"#eee"
      },
      col1:{
        default:"#666"
      },
      top:{
        default:"19px;"
      }
    }
  }
</script>
<style>
  .headerWrap{width: 100vw;height: 0.60rem;line-height: 0.60rem;border-bottom: 1px solid #ccc;position: fixed;top: 0px;left: 0px;z-index:10}
</style>
