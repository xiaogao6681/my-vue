<template>
  <div>
    <ul>
      <li @click="turnPage(1)"><a href="#" :class="{disabled:currentIndex==1}">首页</a></li>
      <li @click="turnPage(currentIndex-1)"><a href="#" :class="{disabled:currentIndex==1}">上一页</a></li>
      <li @click="turnPage(currentIndex-3)" v-if="currentIndex-3>0"><a href="#" v-text="currentIndex-3"></a></li>
      <li @click="turnPage(currentIndex-2)" v-if="currentIndex-2>0"><a href="#" v-text="currentIndex-2"></a></li>
      <li @click="turnPage(currentIndex-1)" v-if="currentIndex-1>0"><a href="#" v-text="currentIndex-1"></a></li>
      <li class="active"><a href="#" v-text="currentIndex"></a></li>
      <li @click="turnPage(currentIndex+1)" v-if="currentIndex+1<=totalIndex"><a href="#" v-text="currentIndex+1"></a></li>
      <li @click="turnPage(currentIndex+2)" v-if="currentIndex+2<=totalIndex"><a href="#" v-text="currentIndex+2"></a></li>
      <li @click="turnPage(currentIndex+3)" v-if="currentIndex+3<=totalIndex"><a href="#" v-text="currentIndex+3"></a></li>
      <li @click="turnPage(currentIndex+1)"><a href="#" :class="{disabled:currentIndex==totalIndex}">下一页</a></li>
      <li @click="turnPage(totalIndex)"><a href="#" :class="{disabled:currentIndex==totalIndex}">尾页</a></li>
    </ul>
    <div>
      <small><span>现在是第{{ currentIndex }}页</span>共{{ totalIndex }}页<span></span></small>
      <input type="number" v-model="goPage" :class="{err:bol}"/><button @click="turnPage(goPage)" >Go</button>
    </div>
  </div>

</template>
<script>
  export default {
   data:function(){
     return {
       currentIndex:97,
       totalIndex:100,
       goPage:"",
       bol:false
     }
   },
    props:["change"],
    methods:{
      turnPage:function(num){
        var myNum=parseInt(num);
        if(myNum>100||myNum<1||!myNum){
          this.goPage="";
          this.bol=true;
          return;
        }else{
          this.bol=false;
        }
        this.currentIndex=myNum;
        this.goPage="";
        this.change(num);
      }
    }
  }
</script>
<style>
  ul{display: inline-block;padding: 1.00rem 0;}
  li{list-style: none;float: left;border: 1px solid #2c3e50}
  a{text-decoration: none;color: #2c3e50;display: block;padding: 0 0.10rem;height: 0.30rem;line-height: 0.30rem;}
  .active a{background: skyblue}
  .disabled{cursor:not-allowed;color: #eee;}
  .err{border: 1px solid red;}

</style>
