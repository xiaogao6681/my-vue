<template>
  <div class="qrcodevblankWrap">
    <div class="box">
      <div class="frame">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>对准图书条形码、二维码自动扫描</p>
    </div>
  </div>
</template>
<script>
  export default {
      props:[],
      methods:{
      }
  }
</script>
<style>
.qrcodevblankWrap .box{width:68%;height: 35%;margin: auto;position: absolute;left: 0;right: 0;top:0;bottom: 0}
.qrcodevblankWrap .frame{height: 70%;}
.qrcodevblankWrap p{height: 50px;line-height: 50px;color: #e7e7e7;}
.qrcodevblankWrap .frame div{width: 18%;height: 18%;position: absolute;}
.qrcodevblankWrap .frame div:nth-child(1){left: 0;top: 0;border-top: 1px solid #9bcc75;border-left: 1px solid #9bcc75}
.qrcodevblankWrap .frame div:nth-child(2){right: 0;top: 0;border-top: 1px solid #9bcc75;border-right: 1px solid #9bcc75}
.qrcodevblankWrap .frame div:nth-child(3){left: 0;bottom: 30%;border-bottom: 1px solid #9bcc75;border-left: 1px solid #9bcc75}
.qrcodevblankWrap .frame div:nth-child(4){right: 0;bottom: 30%;border-bottom: 1px solid #9bcc75;border-right: 1px solid #9bcc75}
.qrcodevblankWrap .box p{line-height: 70px;}
</style>
