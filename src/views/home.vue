<template>
<section id="maod" >
  <section class="content " :class="{'fixed':show}">
     <Munt v-show="show"></Munt>
     <!-- 侧边导航 -->
    <Header style="width:100vw">
      <div slot="left"  @click="skewLeft">
        <van-icon name="wap-nav" />
      </div>
       <div slot="title" v-if="menuShow">
        <span>标题</span>
      </div>
      <router-link slot="right" to="/" v-if="menuShow">
        <van-icon name="search" />
      </router-link>
    </Header>
<!-- 头部组件结束 -->

 

<!-- <van-overlay :show="show" @click="show = false"> -->
<van-overlay :show="show" >
  
</van-overlay>
<!-- 遮罩层 -->
  </section>

  <Main></Main>

  <!-- <div>xxx</div> -->
  <a href="#maod" class="maod" v-show="maodShow">xxx</a>
  </section>
</template>

<script>
import {mapState} from 'vuex'
import Header from '../components/header'
import Munt from '../components/menu'
import Main from '../components/main'
export default {
  data() {
    return {
        menuShow:true,
        show:false,
        maodShow:false
    }
  },
  components: {
    Header,
    Munt,
    Main
  },
  computed: {
    ...mapState(['tblist'])
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // this.getGoods();
 this.$store.dispatch('getTbList')
  //  window.addEventListener('scroll', this.debounce(this.handleScroll,1000))
   window.onscroll = this.debounce(this.handleScroll,1000)  // 防抖
  },
  methods: {
    skewLeft() {
         this.show = !this.show 
        this.menuShow = !this.menuShow
    },

    // 防抖
debounce(fn,delay){
  console.log('aa');
  
 let timer = null //借助闭包
    return function() {
        if(timer){
            clearTimeout(timer) 
        }
        timer = setTimeout(fn,delay) // 简化写法
    }
},

//滚动事件
    handleScroll () {
      let scrollY = document.documentElement.scrollTop
      if (scrollY > 600) {
          console.log('ccc');
         this.maodShow=true
           }
        else {
        this.maodShow=false
        }
    }
      // async  getGoods() {
      //      let url = "https://gank.io/api/v2/banners";
      //       let data=  await this.$axios.get(url)
      //        console.log(data);
      // }

  }
}
</script>
<style  scoped>
/* @import url(); 引入css类 */
.skewLeft{
  width: 0%;
    /* transform: translateX(-250px); */
}
.content{
  display: flex;
}
.fixed{
 position: fixed;
}
.van-overlay{
  margin-top:45px;
 opacity: 0.8;
}

 .maod{
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: aquamarine;
   position: fixed;
   bottom: 20px;
   right: 20px;
 }
</style>