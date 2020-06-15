//游戏详情界面
<template>
  <div>
   <h2>游戏详情页面</h2>


  </div>

</template>

<script>
  //import swiper from "../../components/common/swiper/swiper";
  //import slide from "../../components/common/swiper/slide";
    export default {
      name: "GoodsDetail",
      data() {
        return{
          iid:null,
        }
      },
      created() {
        this.iid = this.$route.params.iid
      },
      components: {

      }
    }
</script>

<style scoped>

</style>
