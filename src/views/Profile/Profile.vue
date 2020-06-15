//个人信息详情界面
<template>
  <div v-if="gameGoods.length">
    <div class="count">总数量{{totalCount}}</div>
    <table>
      <thead>
      游戏列表
      </thead>
      <tbody>
      <tr v-for="(item,index) in gameGoods" :key="item.label">
        <td><img :src="item.img" alt="" height="130px" width="240px"></td>
        <td class="name">{{item.name}}</td>
        <td class="price">{{item.price| showPrice}}</td>
        <td class="button"><button @click="remove(index)">删除</button></td>
      </tr>
      </tbody>
    </table>
  </div>
  <h2 v-else>心愿单中没有商品</h2>

</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
      name: "Profile",
      data(){
          return{

          }
      },
      computed: {
        ...mapGetters(['gameGoods']),
        totalCount(){
          let totalCount = 0
          for(let i = 0; i < this.gameGoods.length; i++){
            totalCount += this.gameGoods[i].count
          }
          return totalCount
        }
      },
      methods: {
        //删除心愿单中的某个游戏
        remove(index){
          this.gameGoods.splice(index,1)
        }
      },
      filters: {
        showPrice(price) {
          return '￥'+price.toFixed(2)
        }
      }
    }
</script>

<style scoped>
.count{
  position: absolute;
  margin-left: 85%;
  font-weight: bold;
}
table{
  width: 950px;
  border-spacing: 7px;
  font-weight: bold;
}
table tr{

}
table thead{
  font-size: 20px;
}
.price{
  font-size: 24px;
  padding-top: 100px;

}
.name{

  padding-bottom: 100px;
  padding-right: 300px;
}
.button{
  padding-top: 100px;
}
</style>
