<template>
<section>
  <!-- <div class="tbContent">
    <div class="tbimg" v-for="item in tblist" :key="item.id">
        <img v-lazy="item.images[0]" alt="aa">
    </div>
    
  </div> -->



<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  class="tbContent"
    @load="onLoad"
>
  <!-- <van-cell v-for="item in tblist" :key="item.id" :title="item" /> -->
  <div class="tbimg" v-for="item in tblist" :key="item.id">
        <img v-lazy="item.images[0]" alt="aa">
   </div>
</van-list>




</section>
</template>

<script>
import {mapState} from 'vuex'
export default {
data() {
return {
   imgs:{},
    loading: false,
    finished: false,
}
},
components:{

},
computed: {
     ...mapState(['tblist'])
},
//生命周期 - 创建完成（访问当前this实例）
created() {
        // this.imgs = this.$store.state.tblist
        // console.log(this.imgs);
        // console.log(this.imgs.length);
        
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods:{
   
 onLoad() {
      // 异步更新数据
      setTimeout(() => {
        // console.log('aa');
          this.imgs = this.$store.state.tblist
          //将数据给到imgs

        // let imgss = this.imgs
        // console.log(imgss instanceof Array);
            let imgss  = [...this.imgs]
            //转为数组
          imgss.forEach((item,index)=>{   
            // console.log(item);
             this.imgs.push(item)
             //遍历并将遍历的项加入imgs
          })
        // 加载状态结束
        this.loading = false;
  if (this.imgs.length >= 50) {
          this.finished = true;
        }
        // 数据全部加载完成
       
      }, 1000);
    },



/* fetch_items(){
   var that = this;
 //  this.$store.dispatch('getTbList')  
//试验-- 可以在这里重新发请求更新数据 重新遍历新的数据 加载更多项
 最后将方法放到onLoad中
} */


},
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.tbContent{
   /* display: flex;
    flex-direction: row; */
}
.tbimg{
    /* display: flex; */
    width: 50vw;
    display: inline-block;
     border: 4px solid aliceblue;
    box-sizing: border-box;
}
.tbContent img{
    max-height: 300px;
    min-height: 300px;
     overflow: hidden;
     width: 100%;
    border-radius: 4px;
      box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
}

</style>