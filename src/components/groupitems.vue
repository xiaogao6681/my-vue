<template>
  <div class="groupitemswrap">
    <slot name="pic"></slot>
    <div class="left">
      <h2>{{ msg1 }}</h2>
      <p>{{ text }}</p>
    </div>
    <span>{{ num2 }}人</span>
    <img src="../assets/images/ic_group_check_anonymous.png" class="mark" @click="fn()" v-show="bol"/>
    <img src="../assets/images/ic_voucher_checked.png" class="mark" @click="fn()"  v-show="!bol"/>
  </div>
</template>
<script>
  export default {
    props:["msg1","text","num2"],
    data: function () {
      return {
        bol:true,
        i:0
      }
    },
    computed: {},
    methods:{
        fn:function(){
            this.bol=!this.bol;
            if(this.bol==true){
                this.i--;
            }else {
              this.i++;
            }
            this.$emit("geti",this.i);
        }
    }
  }

</script>
<style>
  .allgroupwrap .groupitemswrap{height:0.38rem;padding: 0.30rem 0.20rem 0.20rem;position: relative;}
  .groupitemswrap .pic{float: left;width: 0.65rem;height: 0.60rem;border-radius: 5px;}
  .groupitemswrap .left{float: left;padding-left: 0.10rem;}
  .groupitemswrap h2{line-height: 0.10rem;height: 0.18rem;font-size: 0.16rem;}
  .allgroupwrap .mark{width: 0.25rem;position: absolute;right: 0.25rem;top: 0.40rem;}
  .groupitemswrap span{display: inline-block;width: 0.60rem;height: 0.30rem;font-size: 0.14rem;position: absolute;top: 0.30rem;right: 0.60rem;}
</style>
