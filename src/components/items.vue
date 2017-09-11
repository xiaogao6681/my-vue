<template>
  <div class="itemswrap" @click="fn">
    <span v-show="bol"><slot name="normalImg"></slot><br/></span>
    <span v-show="!bol"><slot name="activeImg"></slot><br/></span>
    <span v-text="msg" :class="{act:!bol}"></span>
  </div>
</template>
<script>
  export default {
    props:["msg","id"],
    computed:{
        bol:function(){
            if(this.$parent.sel==this.id){
              return false;
            }
            return true;
        }
    },
    methods:{
      fn:function(){
        this.$router.push("/"+this.id);
        this.$emit("change",this.id)
      }
    }
  }
</script>
<style>
  .itemswrap{width: 20%;float: left;text-align: center;padding: 0.20rem 0;position: relative;color: #666;}
  .icon{width: 0.30rem;position: absolute;top: 2px;left: 0.25rem;}
  .act{color: #42bd56}
</style>
