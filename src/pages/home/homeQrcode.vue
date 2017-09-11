<template>
  <div class="homeqrcodeWrap" @click="hideAlbum($event)">
     <Homeqrcodehearder txt="图书条形码/二维码" msg="从相册中打开" :bol="flag"></Homeqrcodehearder>
     <Qrcodeblank></Qrcodeblank>
  </div>
</template>
<script>
  import Homeqrcodehearder from '../../components/home/homeQrcodeheader'
  import Qrcodeblank from '../../components/home/Qrcodeblank'
  export default {
    components:{
      Homeqrcodehearder,
      Qrcodeblank
    },
    data:function(){
      return {
        flag:false
      }
    },
    methods:{
      hideAlbum:function(i){
        if(i.path[0].tagName=="IMG"||i.path[0].className=="album"){
          this.flag=true;
        }
        else{
          this.flag=false;
        }

      }
    }
  }
</script>
<style>
  .homeqrcodeWrap+.tabberWrap{display: none}
  .homeqrcodeWrap{background: #666;width: 100vw;height: 100vh;}
  .qrcodevblankWrap .box p{font-size: 0.15rem}
</style>
