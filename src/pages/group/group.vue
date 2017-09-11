<template>
  <div class="groupWrap">
    <Myheader><span>小组</span>
      <router-link :to="{name:'Search',params:{url:'/group',sel:3,num:3}}">
           <img src="../../assets/images/ic_group_search.png" class="leftImg">
      </router-link>
      <router-link :to="{name:'Register',params:{url:'/group'}}">
          <img src="../../assets/images/ic_chat_green.png" class="rightImg">
      </router-link>
    </Myheader>
    <Myjiongroup></Myjiongroup>
    <Myallgroup msg="影视">
      <Mygroupitems msg1="绝望主妇-Desperate" text="绝望的主妇（Desperateb  Housewives)" num2="9098"  @geti="getVal">
        <img src="../../assets/images/050.jpg" slot="pic" class="pic"/>
      </Mygroupitems>
      <Mygroupitems msg1="曹芳" text="拿放大镜几乎都是规划环境" num2="786" @geti="getVal">
        <img src="../../assets/images/051.jpg" slot="pic" class="pic"/>
      </Mygroupitems>
      <Mygroupitems msg1="你好乔安" text="当你还是一个懵懂的女孩" num2="7890" @geti="getVal">
        <img src="../../assets/images/052.jpg" slot="pic" class="pic"/>
      </Mygroupitems>
    </Myallgroup>
    <Myallgroup msg="生活">
      <Mygroupitems msg1="千山暮雪" text="童雪时一个坚强的人" num2="123" @geti="getVal">
        <img src="../../assets/images/060.jpg" slot="pic" class="pic"/>
      </Mygroupitems>
      <Mygroupitems msg1="妞妞" text="当山峰没有领教的时候，你发货的撒娇经济活动" num2="723" @geti="getVal">
        <img src="../../assets/images/061.jpg" slot="pic" class="pic"/>
      </Mygroupitems>
      <Mygroupitems msg1="你好乔安" text="当你还是一个懵懂的女孩" num2="564" @geti="getVal">
        <img src="../../assets/images/062.jpg" slot="pic" class="pic"/>
      </Mygroupitems>
    </Myallgroup>
    <div class="change">
        <p>
          <span class="left">
            <img src="../../assets/images/ic_reshare_flag.png" alt="">
            换一批
         </span>
          <span class="right" :class="{ac:n!=0}">
           选好了，进入小组
         </span>
        </p>
    </div>
  </div>
</template>
<script>
  import Myheader from '../../components/header'
  import Myjiongroup from '../../components/jiongroup'
  import Myallgroup from '../../components/allgroup'
  import Mygroupitems from '../../components/groupitems'
  export default {
    components:{
      Myheader,
      Myjiongroup,
      Myallgroup,
      Mygroupitems
    },
    data:function(){
        return{n:0}
    },
    methods: {
      getVal: function (i) {
          if(i==0){
            this.n--
          }else{
             this.n++
          }

      }
    }
  }
</script>
<style>
  .groupWrap{padding-top: 0.61rem;padding-bottom: 1.50rem;}
  .groupWrap .change{width: 92vw;height: 0.60rem;border-top: 1px solid #ccc;position: fixed;bottom: 0.68rem;left: 0;background: #fff;padding: 0 4vw;line-height: 0.50rem}
  .groupWrap .change .left{float: left;width: 30vw}
  .groupWrap .change .left img{width:0.28rem;vertical-align: middle}
  .groupWrap .change .right{float: right;width: 35vw;background: #ccc;border-radius: 5px;height:0.26rem;margin-top: 14px;line-height: 0.18rem;text-align: center;padding-left: 0.08rem;color: #fff}
  .groupWrap .change .right.ac{background:#42bd56; }
</style>
