<template>
  <div class="bookWrap">
    <Allaudio titles="新手速递">
      <Audioitems msg="9.1">
        <img src="../assets/images/030.jpg" slot="audiopic"/>
        <span slot="audiotit">外婆的道歉信</span>
      </Audioitems>
      <Audioitems msg="9.3">
        <img src="../assets/images/031.jpg" slot="audiopic"/>
        <span slot="audiotit">与火同行</span>
      </Audioitems>
      <Audioitems msg="8.6">
        <img src="../assets/images/032.jpg" slot="audiopic"/>
        <span slot="audiotit">封闭式车库</span>
      </Audioitems>
      <Audioitems msg="9.0">
        <img src="../assets/images/033.jpg" slot="audiopic"/>
        <span slot="audiotit">日本新中产阶级</span>
      </Audioitems>
    </Allaudio>
    <Allaudio titles="最受关注的虚构的图书">
      <Audioitems msg="8.1">
        <img src="../assets/images/034.jpg" slot="audiopic"/>
        <span slot="audiotit">百鬼夜行 阳</span>
      </Audioitems>
      <Audioitems msg="8.3">
        <img src="../assets/images/035.jpg" slot="audiopic"/>
        <span slot="audiotit">恋情的终结</span>
      </Audioitems>
      <Audioitems msg="9.2">
        <img src="../assets/images/036.jpg" slot="audiopic"/>
        <span slot="audiotit">新名字的故事</span>
      </Audioitems>
      <Audioitems msg="9.2">
        <img src="../assets/images/037.jpg" slot="audiopic"/>
        <span slot="audiotit">鱼王</span>
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
  .bookWrap .allaudiowrap{height: 2.50rem;}

</style>
