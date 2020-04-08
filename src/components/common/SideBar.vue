<template>
	<div class="side_bar">
    <div class="side_bar_item"><slot><div class="side_bar_item_text">搜索</div></slot></div>
    <div class="side_bar_item"><slot><div class="side_bar_item_text">NEW</div></slot></div>
    <div class="side_bar_item"><slot><div class="side_bar_item_text">精选</div></slot></div>
    <div class="side_bar_item"><slot><div class="side_bar_item_text">减价</div></slot></div>
    <div class="side_bar_item"><slot><div class="side_bar_item_text">排行榜</div></slot></div>
    <div class="side_bar_item"><slot><div class="side_bar_item_text">即将发售</div></slot></div>
    <div class="side_bar_item"><slot><div class="side_bar_item_text">Nintendo Switch Online</div></slot></div>
    <div class="side_bar_item"><slot><div class="side_bar_item_text">输入序号</div></slot></div>
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
  position: relative;
  background-color: orange;
  height: 692px;
  width: 480px;
  display: flex;
  flex-direction: column;
}
.side_bar_item{
  flex: 1;
  font-size: 20px;
  margin: 0 auto;
  padding-top: 30px;
  color: aliceblue;
}
</style>
