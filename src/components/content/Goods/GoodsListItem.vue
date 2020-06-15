//商品列表项目组件
<template>
  <div>
    <img :src="goodsItem.img" height="240px" width="440px" alt="" @click="itemClick">
    <div class="goodsInfo">
      <div class="name">{{goodsItem.name}}</div>
      <div class="price">{{goodsItem.price| showPrice}}<span class="text">元</span>
        <div class="buttonArea">
          <div><button @click="like">收藏</button></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

    export default {
      name: "GoodsListItem",
      props: {
        goodsItem: {
          type: Object,
          default(){
            return{
            }
          }
        }
      },
      data(){
        return{

        }
      },
      methods: {
        //点击跳转到商品详情页面携带iid，并把标题改成游戏名字
        itemClick(){
          this.$router.push('goods_detail/'+this.goodsItem.iid)
          this.$store.state.title = this.goodsItem.name
        },
        //点击把商品加入心愿单，先把需要的商品数据存入对象再传到vuex
        like(){

          const product = {}
          product.img = this.goodsItem.img
          product.iid = this.goodsItem.iid
          product.name = this.goodsItem.name
          product.price = this.goodsItem.price
          product.count = this.goodsItem.count
          product.status = !this.goodsItem.status

          this.$store.dispatch('addLike',product)
        }
      },
      filters: {
        showPrice(price) {
          return '￥'+price.toFixed(2)
        }
      },

    }
</script>

<style scoped>
.goodsInfo{
  height: 50px;
}
.name{
  display: inline-block;
  padding: 10px 5px;
  font-size: 18px;
}
.price{
  display: inline-block;
  float: right;
  padding: 10px 10px;
  font-size: 25px;
}
.text{
  padding: 3px;
  font-size: 16px;
}
.buttonArea{
  margin-left: 10px;
  float: right;
}
div img{
  cursor: pointer;
}
.orange{
  background-color: orange;
}
</style>
