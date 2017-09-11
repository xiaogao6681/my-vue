<template>
  <div class="musicWrap">
    <Allaudio titles="华语新碟榜">
      <Audioitems msg="8.2">
        <img src="../assets/images/060.jpg" slot="audiopic" class="bigimg"/>
        <span slot="audiotit">猎户星座<br/>
            <span class="musicauthor">朴树</span>
        </span>
      </Audioitems>
      <Audioitems msg="5.4">
        <img src="../assets/images/061.jpg" slot="audiopic" class="bigimg"/>
        <span slot="audiotit">放&披风<br/>
            <span class="musicauthor">陈奕迅</span>
        </span>
      </Audioitems>
      <Audioitems msg="8.7">
        <img src="../assets/images/062.jpg" slot="audiopic" class="bigimg"/>
        <span slot="audiotit">李志、电声与...<br/>
            <span class="musicauthor">李志</span>
        </span>
      </Audioitems>
      <Audioitems msg="7.6">
        <img src="../assets/images/063.jpg" slot="audiopic" class="bigimg"/>
        <span slot="audiotit">来日方长<br/>
            <span class="musicauthor">黄龄</span>
        </span>
      </Audioitems>
    </Allaudio>
    <Allaudio titles="欧美新碟榜">
      <Audioitems msg="8.7">
        <img src="../assets/images/065.jpg" slot="audiopic" class="bigimg"/>
        <span slot="audiotit">Cigares Afte...<br/>
            <span class="musicauthor">Cigares Afte...</span>
        </span>
      </Audioitems>
      <Audioitems msg="6.0">
        <img src="../assets/images/064.jpg" slot="audiopic" class="bigimg"/>
        <span slot="audiotit">One More Light<br/>
            <span class="musicauthor">Link Park</span>
        </span>
      </Audioitems>
      <Audioitems msg="7.4">
        <img src="../assets/images/066.jpg" slot="audiopic" class="bigimg"/>
        <span slot="audiotit">Harry Styles<br/>
            <span class="musicauthor">Harry Styles</span>
        </span>
      </Audioitems>
      <Audioitems msg="8.5">
        <img src="../assets/images/067.jpg" slot="audiopic" class="bigimg"/>
        <span slot="audiotit">Guardians of th...<br/>
            <span class="musicauthor">Various Artists</span>
        </span>
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
  .musicWrap .allaudiowrap{height: 2.50rem;}
  .musicWrap .allaudiowrap .bigimg{height: 1.08rem;width: 1.02rem; }
  .musicWrap .allaudiowrap .musicauthor{font-size: 0.13rem;color: #999;}
</style>
