//搜索栏界面
<template>
	<div class="searchArea">
    <div class="tipText">按关键字搜索</div>
    <div class="searchBar">
      <button><img src="../../assets/image/search.jpg" height="20" width="20"></button>
      <input type="text" placeholder="请输入">
      <hr>
    </div>

  </div>
</template>

<script>
	export default {
		name: "Search"
	}
</script>

<style scoped>
.tipText{
  color: #aaaaaa;
  font-size: 20px;
  padding-left: 90px;
}
.searchArea{
 margin-top: 100px;
  margin-left: 180px;
}
div.searchBar{
  padding-top: 30px;
}
div.searchBar input{
  width: 375px;
  border: 1px solid transparent;
  height: 36px;
  margin-left: 10px;

}
div.searchBar button{
  border: 1px solid transparent;
}
</style>
