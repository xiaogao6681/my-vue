<template>
  <div class="filmWrap">
    <Allaudio titles="影院热映">
      <Audioitems msg="7.5">
        <img src="../assets/images/010.jpg" slot="audiopic"/>
        <span slot="audiotit">神奇女侠</span>
      </Audioitems>
      <Audioitems msg="7.4">
        <img src="../assets/images/011.jpg" slot="audiopic"/>
        <span slot="audiotit">加勒比海盗5</span>
      </Audioitems>
      <Audioitems msg="9.2">
        <img src="../assets/images/012.jpg" slot="audiopic"/>
        <span slot="audiotit">摔跤吧！爸爸</span>
      </Audioitems>
      <Audioitems msg="6.6">
        <img src="../assets/images/013.jpg" slot="audiopic"/>
        <span slot="audiotit">哆啦A梦</span>
      </Audioitems>
    </Allaudio>
    <Hotfilm>
      <img src="../assets/images/020.jpg"/>
      <p>演技太尴尬？欧阳娜娜自嘲是“靠实力失败”第一人</p>
    </Hotfilm>
  </div>
</template>
<script>
  import Audioitems from './audioitems'
  import Hotfilm from './hotfilm'
  import Allaudio from './allaudio'
  export default {
    components: {
      Audioitems,
      Hotfilm,
      Allaudio
    }
  }
</script>
<style>
  .filmWrap .allaudiowrap{height: 2.50rem;}

</style>
