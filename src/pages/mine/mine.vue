<template>
  <div class="mineWrap">
    <Myheader>
      <span>我的</span>
      <router-link to="/setting">
        <img src="../../assets/images/ic_settings.png" class="rightImg">
      </router-link>
    </Myheader>
    <Myminehead></Myminehead>
    <Myminemid></Myminemid>
    <Myallmine>
      <router-link  v-for="item in arr[0]" :to="{name:'Mymsg',params:{txt1:item.txt}}">
        <Myallmineitem :txts="item.txt">
          <img :src="item.url" slot="pics"/>
        </Myallmineitem>
      </router-link>
    </Myallmine>
    <Myallmine>
      <router-link  v-for="item in arr[1]" :to="{name:'Mymsg',params:{txt1:item.txt}}">
          <Myallmineitem :txts="item.txt">
                <img :src="item.url" slot="pics"/>
          </Myallmineitem>
      </router-link>
    </Myallmine>
    <Myallmine>
      <router-link  v-for="item in arr[2]" :to="{name:'Mymsg',params:{txt1:item.txt}}">
        <Myallmineitem :txts="item.txt">
          <img :src="item.url" slot="pics"/>
        </Myallmineitem>
      </router-link>
    </Myallmine>
  </div>
</template>
<script>
  import Myheader from '../../components/header'
  import Myminehead from '../../components/minehead'
  import Myminemid from '../../components/minemid'
  import Myallmine from '../../components/allmine'
  import Myallmineitem from '../../components/allmineitem'
  export default {
    components:{
      Myheader,
      Myminehead,
      Myminemid,
      Myallmine,
      Myallmineitem
    },
    data:function(){
        return{
            arr:[
                [
                  {txt:"喜欢",url:require("../../assets/images/ic_my_likes.png")},
                  {txt:"日记",url:require("../../assets/images/ic_my_note.png")},
                  {txt:"相册",url:require("../../assets/images/ic_my_album.png")},
                  {txt:"我的广播",url:require("../../assets/images/ic_my_status.png")}
                ],
              [
                {txt:"电影 电视",url:require("../../assets/images/ic_my_movies_tvs.png")},
                {txt:"读书",url:require("../../assets/images/ic_my_books.png")},
                {txt:"音乐",url:require("../../assets/images/ic_my_music.png")},
                {txt:"同城广播",url:require("../../assets/images/ic_my_events.png")}
              ],
              [
                {txt:"豆瓣时间",url:require("../../assets/images/ic_ost_play.png")},
                {txt:"豆列",url:require("../../assets/images/ic_my_doulist.png")},
                {txt:"订单",url:require("../../assets/images/ic_my_orders.png")},
                {txt:"钱包",url:require("../../assets/images/ic_my_wallet.png")}
              ]


            ]
        }
    }
  }
</script>
<style>
  .mineWrap{padding-top: 0.61rem;background: #eee;padding-bottom:0.65rem;}
  .mineWrap a{color: #333}
</style>
