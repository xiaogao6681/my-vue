<template>
  <div>
    <h1>{{ msg }}</h1>
    <child :change="pageChange"></child>
  </div>
</template>
<script>
  import Child from './Child'
  export default {
    data:function(){
      return {msg:"please updata your"}
    },
    components:{
      Child
    },
    methods:{
      pageChange:function(num){
          this.msg="please update your page:"+num;
      }
    }
  }
</script>
