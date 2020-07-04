<template>
<section class="menuHight">

<figure class="menuHeader">

<img src="../assets/logo.png" alt="">
  
<div class="menu-title">shaojinqi</div>
</figure>

 <van-sidebar v-model="activeKey"  id="id">
<van-sidebar-item :title="item" v-for="item in menuList" :key="item.id" />
  <!-- <van-sidebar-item title="福利"/> -->
  <!-- <van-sidebar-item title="每日推荐" />
  <van-sidebar-item title="IOS" />
  <van-sidebar-item title="Android" />
  <van-sidebar-item title="前端" /> -->
</van-sidebar>

</section>
</template>

<script>
import {mapState} from 'vuex'
export default {
data() {
return {
 activeKey: 0,
 menuList:[],
}
},
components:{

},
computed: {
  ...mapState(['menu_list'])
},
//生命周期 - 创建完成（访问当前this实例）
created() {
      this.menuList = this.$store.state.menu_list
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

  //  this.van = document.getElementById("id")
  //  this.lis = this.van.children
    // console.log(this.lis);
    //  let lis  = this.lis
  //  Object.keys(lis).map((key)=>{
  //     if(this.activeKey==key){
  //         console.log('aa');
  //         lis[key].classList.add('active')
  //     }
  //  }) 
//只添加了一次，不如直接在类里添加样式，插件封装的添加类加color样式



},
watch: {
  
},
methods:{
   
},
}
</script>
<style lang="styl" >
@import '../assets/menuss.styl';
div{
  /* background-color:rgb(56, 55, 55); */
}
</style>