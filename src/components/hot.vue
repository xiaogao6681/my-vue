<template>

   <div>
     <div class="hotWrap">
       <div class="left">
         <slot name="tit"></slot>
         <slot name="txt"></slot>
         <slot name="author"></slot>
       </div>
       <div class="right">
         <slot name="pic"></slot>
       </div>
       <slot name="from"></slot>

     </div>
   </div>
</template>
<style>
  .hotWrap{width: 100vw;height: 1.72rem;}
  hr{width: 100vw;margin: 0.05rem 0}
</style>
