<template>
  <section class="tops">
    <van-nav-bar>
      <!-- <template #right>
        <van-icon name="search" size="18" />
      </template>-->
      <slot slot="left" name="left"></slot>
      <slot slot="title" name="title"></slot>
      <slot slot="right" name="right"></slot>
    </van-nav-bar>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {}
}
</script>
<style lang="stylus">
/* @import url(); 引入css类 */
.van-nav-bar
  background-color aquamarine
  display flex
  width 100%
.tops
     display flex
     width 100%
</style>