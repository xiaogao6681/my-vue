<template>
  <div class="cityWrap">
     <Local></Local>
    <Allaudio titles="新手速递">
      <Audioitems>
        <img src="../assets/images/050.jpg" slot="audiopic"/>
        <span slot="audiotit">2017 Liam<br/>
          Gallagher北京.
        </span>
        <span slot="update" class="date">2017-08-10</span>
        <br/>
        <span class="offical">官方售票</span>
      </Audioitems>
      <Audioitems>
        <img src="../assets/images/051.jpg" slot="audiopic"/>
        <span slot="audiotit">百老汇殿堂原<br/>
         版音乐剧《魔...
        </span>
        <span slot="update" class="date">2017-05-21</span>
        <br/>
        <span class="offical">官方售票</span>
      </Audioitems>
      <Audioitems>
        <img src="../assets/images/052.jpg" slot="audiopic"/>
        <span slot="audiotit">【北京站】孟京<br/>
          辉戏剧作品《...
        </span>
        <span slot="update" class="date">2017-05-01</span>
        <br/>
        <span class="offical">官方售票</span>
      </Audioitems>
      <Audioitems>
        <img src="../assets/images/053.jpg" slot="audiopic"/>
        <span slot="audiotit">2017喵星人侵占<br/>
          地球名猫展北...
        </span>
        <span slot="update" class="date">2017-04-28</span>
        <br/>
        <span class="offical">官方售票</span>
      </Audioitems>
    </Allaudio>
    <Allaudio titles="官方售票">
      <Audioitems>
        <img src="../assets/images/051.jpg" slot="audiopic"/>
        <span slot="audiotit">百老汇殿堂原<br/>
         版音乐剧《魔...
        </span>
        <span slot="update" class="date">2017-05-21</span>
        <br/>
        <span class="offical">官方售票</span>
      </Audioitems>
      <Audioitems>
        <img src="../assets/images/052.jpg" slot="audiopic"/>
        <span slot="audiotit">【北京站】孟京<br/>
          辉戏剧作品《...
        </span>
        <span slot="update" class="date">2017-05-01</span>
        <br/>
        <span class="offical">官方售票</span>
      </Audioitems>
      <Audioitems>
        <img src="../assets/images/053.jpg" slot="audiopic"/>
        <span slot="audiotit">2017喵星人侵占<br/>
          地球名猫展北...
        </span>
        <span slot="update" class="date">2017-04-28</span>
        <br/>
        <span class="offical">官方售票</span>
      </Audioitems>
      <Audioitems>
        <img src="../assets/images/050.jpg" slot="audiopic"/>
        <span slot="audiotit">2017 Liam<br/>
          Gallagher北京.
        </span>
        <span slot="update" class="date">2017-08-10</span>
        <br/>
        <span class="offical">官方售票</span>
      </Audioitems>
    </Allaudio>
  </div>
</template>
<script>
  import Local from './local'
  import Audioitems from './audioitems'
  import Allaudio from './allaudio'
  export default {
    components:{
      Local,
      Audioitems,
      Allaudio
    }
  }
</script>
<style>
  .cityWrap .allaudiowrap{height: 2.90rem;}
  .cityWrap .audioitemswrap span{line-height: 0.20rem;font-size: 0.14rem;letter-spacing: 0px;}
  .cityWrap .audioitemswrap .date{color: #999;}
  .cityWrap .audioitemswrap .offical{display: inline-block;font-size: 0.12rem;color: red;width: 0.50rem;height: 0.15rem;border: 1px solid red;border-radius: 5px;line-height: 0.15rem;}
</style>
