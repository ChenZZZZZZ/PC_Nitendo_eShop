<template>
  <div>
    <div class="side_bar">
      <div class="side_bar_item"><slot><div class="side_bar_item_text"><router-link to="search">搜索</router-link></div></slot></div>
      <div class="side_bar_item"><slot><div class="side_bar_item_text"><router-link to="recent_releases">NEW</router-link></div></slot></div>
      <div class="side_bar_item"><slot><div class="side_bar_item_text"><router-link to="featured">精选</router-link></div></slot></div>
      <div class="side_bar_item"><slot><div class="side_bar_item_text"><router-link to="great_deals">减价</router-link></div></slot></div>
      <div class="side_bar_item"><slot><div class="side_bar_item_text"><router-link to="best_sellers">排行榜</router-link></div></slot></div>
      <div class="side_bar_item"><slot><div class="side_bar_item_text"><router-link to="coming_soon">即将发售</router-link></div></slot></div>
      <div class="side_bar_item"><slot><div class="side_bar_item_text"><router-link to="nontendo_switch_online">Nintendo Switch Online</router-link></div></slot></div>
      <div class="side_bar_item"><slot><div class="side_bar_item_text"><router-link to="enter_code">输入序号</router-link></div></slot></div>
    </div>
    <div class="display_window"><router-view></router-view></div>
  </div>
</template>

<script>
	export default {
		name: "SideBar"
	}
</script>

<style scoped>
.side_bar{
  float: left;
  position: fixed;
  background-color: orange;
  height: 692px;
  width: 480px;
  display: flex;
  flex-direction: column;
  z-index: 2;
}
.side_bar_item{
  flex: 1;
  font-size: 20px;
  margin: 0 auto;
  padding-top: 30px;
  color: aliceblue;
}
.display_window{
  position: absolute;
  margin-left: 545px;
  margin-top: 90px;
}
</style>
