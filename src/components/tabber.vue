<template>
  <div class="tabberWrap">
      <Wrap :sel="selected">
        <Items msg="首页" id="home" @change="getVal">
          <img src="../assets/images/ic_tab_home_normal.png" slot="normalImg" class="icon"/>
          <img src="../assets/images/ic_tab_home_active.png" slot="activeImg" class="icon"/>
        </Items>
        <Items msg="书影音" id="audio/film" @change="getVal">
          <img src="../assets/images/ic_tab_subject_normal.png" slot="normalImg" class="icon"/>
          <img src="../assets/images/ic_tab_subject_active.png" slot="activeImg" class="icon"/>
        </Items>
        <Items msg="广播" id="broadcast" @change="getVal">
          <img src="../assets/images/ic_tab_status_normal.png" slot="normalImg" class="icon"/>
          <img src="../assets/images/ic_tab_status_active.png" slot="activeImg" class="icon"/>
        </Items>
        <Items msg="小组" id="group" @change="getVal">
          <img src="../assets/images/ic_tab_group_normal.png" slot="normalImg" class="icon"/>
          <img src="../assets/images/ic_tab_group_active.png" slot="activeImg" class="icon"/>
        </Items>
        <Items msg="我的" id="mine" @change="getVal">
          <img src="../assets/images/ic_tab_profile_normal.png" slot="normalImg" class="icon"/>
          <img src="../assets/images/ic_tab_profile_active.png" slot="activeImg" class="icon"/>
        </Items>
      </Wrap>
  </div>
</template>

<script>
  import Wrap from './wrap'
  import Items from './items'
  export default {
    components:{
      Wrap,
      Items
    },
    data:function(){
      return {selected:"home"}
    },
    methods:{
      getVal:function(val){
        this.selected=val;
      }
    }
  }
</script>
<style>
.tabberWrap .wrapWrap .itemswrap span{
  font-size: 0.16rem;
}

</style>
