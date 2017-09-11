<template>
  <div class="audioWrap">
    <Myheader>
      <span class="title">书影音</span>
      <router-link :to="{name:'Search',params:{url:arr[selected].site,sel:selected,num:1,sel:1,bol2:true}}">
            <img src="../../assets/images/ic_group_search.png" class="leftImg">
      </router-link>
      <router-link :to="{name:'Register',params:{url:arr[selected].site,sel:selected}}">
        <img src="../../assets/images/ic_chat_green.png" class="rightImg">
       </router-link>
    </Myheader>
    <ul>
      <li v-for="(item,i) in arr" @click="selected=i" :class="{actives:i==selected}">
        <router-link :to="item.site" >{{ item.msg }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  import Myheader from '../../components/header'
  import Tabber from '../../components/tabber'
  export default {
    data:function(){
      return{
        arr:[
          {site:"/audio/film",msg:"电影"},
          {site:"/audio/book",msg:"读书"},
          {site:"/audio/tv",msg:"电视"},
          {site:"/audio/city",msg:"同城"},
          {site:"/audio/music",msg:"音乐"}
        ],
        selected:0
      }
    },
    components: {
      Myheader,
      Tabber
    },
    props: ["sel", "mark"],
    mounted(){
        var temp=this.$route.path;
        var sel=this.selected;
      this.arr.forEach(function(item,i){
          if(item.site==temp){
            sel=i;
          }
      });
      this.selected=sel;
    }
  }
</script>
<style>
  .title{font-size: 0.18rem;}
  .audioWrap{background: #eee;width: 100vw;padding-top:1.31rem;padding-bottom: 0.6rem;overflow: hidden}
  .audioWrap ul li a{color: #666;text-decoration: none;display: inline-block;border-bottom: 1px solid transparent;width: 20vw;height:0.53rem;line-height: 0.53rem;font-size: 0.16rem}
  .audioWrap li{float: left}
  .audioWrap ul{height: 0.54rem;display: inline-block;background: #fff;border-bottom: 1px solid #ccc;margin-bottom: 0.10rem;position: fixed;top: 0.61rem;left: 0;z-index: 10;margin-top: 0}
  li{list-style: none}
  .audioWrap .actives a{color: #42bd56;border-bottom: 1px solid #42bd56}

</style>
