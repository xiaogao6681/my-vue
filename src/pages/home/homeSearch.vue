<template>
  <div class="homesearchWrap" @click="hide($event)">
    <Homesearch :bol="flag" @change="getsel" :bol1="true"></Homesearch>
    <Myhotsearchtitle>
      <li slot="li" v-for="(item,i) in hotsearch[sel]">
        <span class="num" :id="'ac-'+i ">{{ i+1-0 }}</span>
        <span class="name">{{ item.name }}</span>
        <span class="des">{{ item.des }}</span>
      </li>
    </Myhotsearchtitle>
 </div>
  </template>
<script>
  import Homesearch from '../../components/home/homesearch'
  import Myhotsearchtitle from '../../components/hotsearchtitle'
  export default {
    components:{
      Myhotsearchtitle,
      Homesearch
    },
    props:[],
    data:function(){
      return{
        hotsearch:[
           [
             {name:"异性:灵契",des:"电影"},
             {name:"喜欢你",des:"电影"},
             {name:"异星觉醒",des:"电影"},
             {name:"加勒比海盗5:死无对证",des:"电影"},
             {name:"人类简史",des:"图书"},
             {name:"占星与玛法达星座运势",des:"小组"},
             {name:"高考",des:"话题"},
             {name:"11处特工皇妃",des:"图书"},
             {name:"纪念碑谷2",des:"游戏"},
             {name:"极简生活",des:"小组"},
             {name:"2017第二十届上海国际电影节",des:"小组"},
             {name:"七七的生活摄影课",des:"同城"},
             {name:"极简生活",des:"小组"}
           ],
          [
            {name:"占星与玛法达星座运势",des:"小组"},
            {name:"高考",des:"话题"},
            {name:"11处特工皇妃",des:"图书"},
            {name:"纪念碑谷2",des:"游戏"},
            {name:"极简生活",des:"小组"},
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"七七的生活摄影课",des:"同城"},
            {name:"极简生活",des:"小组"}
          ],
          [
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"七七的生活摄影课",des:"同城"},
            {name:"极简生活",des:"小组"}
          ],
          [
            {name:"占星与玛法达星座运势",des:"小组"},
            {name:"高考",des:"话题"},
            {name:"11处特工皇妃",des:"图书"},
          ],
          [
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"异性:灵契",des:"电影"},
            {name:"喜欢你",des:"电影"},
            {name:"异星觉醒",des:"电影"},
            {name:"加勒比海盗5:死无对证",des:"电影"},
            {name:"人类简史",des:"图书"},
            {name:"占星与玛法达星座运势",des:"小组"},
            {name:"高考",des:"话题"},
            {name:"11处特工皇妃",des:"图书"},
            {name:"纪念碑谷2",des:"游戏"},
            {name:"极简生活",des:"小组"},
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"七七的生活摄影课",des:"同城"},
            {name:"极简生活",des:"小组"}
          ],
          [
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"占星与玛法达星座运势",des:"小组"},
            {name:"高考",des:"话题"},
            {name:"11处特工皇妃",des:"图书"},
            {name:"纪念碑谷2",des:"游戏"},
            {name:"极简生活",des:"小组"},
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"七七的生活摄影课",des:"同城"},
            {name:"极简生活",des:"小组"}
          ],
          [
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"七七的生活摄影课",des:"同城"},
            {name:"极简生活",des:"小组"},
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"七七的生活摄影课",des:"同城"},
            {name:"极简生活",des:"小组"}
          ],
          [
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"占星与玛法达星座运势",des:"小组"},
            {name:"高考",des:"话题"},
            {name:"11处特工皇妃",des:"图书"},
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"占星与玛法达星座运势",des:"小组"},
            {name:"高考",des:"话题"},
            {name:"11处特工皇妃",des:"图书"},
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"占星与玛法达星座运势",des:"小组"},
            {name:"高考",des:"话题"},
            {name:"11处特工皇妃",des:"图书"}
          ],
          [
            {name:"七七的生活摄影课",des:"同城"},
            {name:"极简生活",des:"小组"},
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"七七的生活摄影课",des:"同城"},
            {name:"极简生活",des:"小组"}
          ],
          [
            {name:"高考",des:"话题"},
            {name:"11处特工皇妃",des:"图书"},
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"占星与玛法达星座运势",des:"小组"},
            {name:"高考",des:"话题"},
            {name:"11处特工皇妃",des:"图书"},
            {name:"2017第二十届上海国际电影节",des:"小组"},
            {name:"占星与玛法达星座运势",des:"小组"},
            {name:"高考",des:"话题"},
            {name:"11处特工皇妃",des:"图书"}
          ]

        ],
        flag:false,
        sel:0
      }
    },
    mounted(){

    },
    methods:{
        getsel:function(i){
            this.sel=i;
        },
      hide:function(i){

           if(i.path[0].tagName=="SPAN"){
               this.flag=true;
           }else{
             this.flag=false;
           }
      }
    }
  }
</script>
<style>
  .homesearchWrap+.tabberWrap{
    display: none;
  }
  .homesearchWrap .myheaderWrap img{position: absolute;left: 0.51rem;top:0.19rem;}
  .homesearchWrap .myheaderWrap span,.homesearchWrap .myheaderWrap a{color: #999;text-decoration: none}
  .homesearchWrap .myheaderWrap span{float: left;padding:0 0.40rem;color: #2c3e50}
  .homesearchWrap .myheaderWrap a{position: absolute;right: 0.17rem;top: 0.05rem;color: #fff;}
  .homesearchWrap .myheaderWrap input{width: 60%;float: left;}
</style>
