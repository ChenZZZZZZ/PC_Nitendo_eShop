//排行榜界面
<template>
  <div>
    <GoodsList :goods="gameGoods"></GoodsList>
  </div>
</template>

<script>
	import GoodsList from "../../components/content/Goods/GoodsList";

  export default {
		name: "BestSellers",
    data (){
      return{
        gameGoods:{  zd:{
            name:'塞尔达传说 旷野之息',
            price:299,
            img: require('@/assets/image/Zelda/z1.jpg'),
            iid:4,
            soldNum:200,
            downloadNum:10000,
            propularity:5000,
            count: 1,
            status: false
          },
          mo:{
            name:'超级马里奥 奥德赛',
            price:249,
            img: require('@/assets/image/MarioOdyssey/mo1.jpg'),
            iid:1,
            soldNum:300,
            downloadNum:500,
            propularity:100,
            count: 1,
            status: false
          },
          mt:{
            name:'集合吧！动物森友会',
            price:199,
            img: require('@/assets/image/MarioTennis/ac1.jpg'),
            iid:2,
            soldNum:400,
            downloadNum:5000,
            propularity:500,
            count: 1,
            status: false
          },
          mc:{
            name:'马里奥赛车8 豪华版',
            price:349,
            img: require("@/assets/image/MarioCart8/mc1.jpg"),
            iid:3,
            soldNum:100,
            downloadNum:100,
            propularity:10000,
            count: 1,
            status: false
          }
        }

      }
    },
    components: {GoodsList}
	}
</script>

<style scoped>

</style>
