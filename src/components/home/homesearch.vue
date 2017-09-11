<template>
  <div class="homeseartopchWrap" :style="{
    background:this.$route.params.col?this.$route.params.col:col,
    color:this.$route.params.col1?this.$route.params.col1:col1
  }">
    <div class="wrap">
      <div>
      <span v-show="this.$route.params.bol1?this.$route.params.bol1:bol1" class="all">
         {{ arr[selected] }}
         <img src="../../assets/images/spinner_ab_pressed_frodo.9.png" top="20px">
      </span>
        <span v-show="this.$route.params.bol1?!this.$route.params.bol1:!bol1">
           <img src="../../assets/images/ic_search.png" class="searchImg">
        </span>
        <input type="text" :placeholder="arr1[this.$route.params.num]">
      </div>
    </div>
    <router-link :to="this.$route.params.url" :style="{color:this.$route.params.col2?this.$route.params.col2:col2}"><span v-show="this.$route.params.bol1?!this.$route.params.bol1:!bol1">|</span>取消</router-link>
    <ul v-show="bol">
      <li v-for="(item,i) in arr" :class="{ac:i==selected}" @click="changeSel(i)">{{item}}</li>
    </ul>
    <router-link :to="{name:'Homeqrcode',params:{names:'Search',num:1,sel:1,bol2:true,bol1:false,url:this.$route.params.url}}">
      <img src="../../assets/images/ic_scan_gray.png" class="qrcode" v-show="this.$route.params.bol2?this.$route.params.bol2:bol2"/>
    </router-link>
  </div>

</template>
<script>
  export default {
      props:["txt","msg","bol"],
      props:{
        bol:{
          default:true
        },
        bol1:{
          default:true
        },
        col:{
          default:"#fff"
        },
        col1:{
          default:"#666"
        },
        col2:{
          default:"#666"
        },
        bol2:{
          default:false
        },
        num:{
          default:0
        }
      },
      data:function(){
          return {
            arr:[
              "全部",
              "电影/电视",
              "图书",
              "唱片",
              "用户",
              "小组",
              "群聊",
              "游戏/应用",
              "同城",
              "舞台剧"
            ],
            arr1:[
              "搜索",
              "影视 图书 唱片 活动等",
              "搜索豆瓣用户",
              "搜索小组话题"
            ],
            selected:0,
          }
      },
    methods:{
      changeSel:function(i){
            this.selected=i;
            this.$emit("change",this.selected);
      }
    }
  }
</script>
<style>
.homeseartopchWrap{width: 92%;height: 25px;background: #42bd56;padding: 17px 4%;position: relative}
.homeseartopchWrap img{width: 18px;vertical-align: middle}
.homeseartopchWrap span{float: left;padding: 0 10px;height: 25px;background: #fff;}
.homeseartopchWrap input{float: left;height: 25px;border: none;outline: none;width: 70vw;}
.homeseartopchWrap .wrap{width: 78vw;overflow: hidden;border-radius: 5px;}
.homeseartopchWrap .wrap div{width: 100vw;height: 25px;}
.homeseartopchWrap .wrap div span{font-size: 14px;color: #42bd56;}
.homeseartopchWrap .wrap div input{color: #999;font-size: 13px;}
.homeseartopchWrap a{color: #fff;position: absolute;top: 18px;right: 18px;font-size: 14px}
.homeseartopchWrap ul{width: 80px;line-height: 45px;border: 1px solid #ccc;box-shadow: 0 0 4px #333;position: absolute;top: 10px;left: 15px;background: #fff;padding: 0 10px;}
.homeseartopchWrap ul li{text-align: left;font-size: 16px;}
.homeseartopchWrap ul .ac{color:#42bd56 }
.homeseartopchWrap .wrap div span:nth-of-type(2){padding: 0 15px}
.homeseartopchWrap a span{font-size: 14px;color: #666}
.homeseartopchWrap .qrcode{position: absolute;top: 2px;right: 57px;width: 15px}
</style>
