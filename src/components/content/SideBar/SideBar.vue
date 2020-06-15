//侧边栏组件
<template>
  <div>
    <div class="side_bar">
      <div class="side_bar_item"><div id='t1' @click="getTitle1"><router-link class="textA" to="search" replace>搜索</router-link></div></div>
      <div class="side_bar_item"><div id='t2' @click="getTitle2"><router-link class="textA" to="recent_releases" replace>NEW</router-link></div></div>
      <div class="side_bar_item"><div id='t3' @click="getTitle3"><router-link class="textA" to="featured" replace>精选</router-link></div></div>
      <div class="side_bar_item"><div id='t4' @click="getTitle4"><router-link class="textA" to="great_deals" replace>减价</router-link></div></div>
      <div class="side_bar_item"><div id='t5' @click="getTitle5"><router-link class="textA" to="best_sellers" replace>排行榜</router-link></div></div>
      <div class="side_bar_item"><div id='t6' @click="getTitle6"><router-link class="textA" to="coming_soon" replace>即将发售</router-link></div></div>
      <div class="side_bar_item"><div id='t7' @click="getTitle7"><router-link class="textA" to="nontendo_switch_online" replace>Nintendo Switch Online</router-link></div></div>
      <div class="side_bar_item"><div id='t8' @click="getTitle8"><router-link class="textA" to="enter_code" replace>输入序号</router-link></div></div>
    </div>
    <div class="display_window"><router-view></router-view></div>
  </div>
</template>

<script>
	export default {
		name: "SideBar",
    //获取点击的栏目名字并设置为标题名称，并跳转回该页面
    methods:{
      getTitle1:function () {
        this.$store.state.title=document.getElementById('t1').innerText
        this.$router.push('/search')
      },
      getTitle2:function () {
        this.$store.state.title=document.getElementById('t2').innerText
        this.$router.push('/recent_releases')
      },
      getTitle3:function () {
        this.$store.state.title=document.getElementById('t3').innerText
        this.$router.push('/featured')
      },
      getTitle4:function () {
        this.$store.state.title=document.getElementById('t4').innerText
        this.$router.push('/great_deals')
      },
      getTitle5:function () {
        this.$store.state.title=document.getElementById('t5').innerText
        this.$router.push('/best_sellers')
      },
      getTitle6:function () {
        this.$store.state.title=document.getElementById('t6').innerText
        this.$router.push('/coming_soon')
      },
      getTitle7:function () {
        this.$store.state.title=document.getElementById('t7').innerText
        this.$router.push('/nintendo_switch_online')
      },
      getTitle8:function () {
        this.$store.state.title=document.getElementById('t8').innerText
        this.$router.push('/enter_code')
      },
    }
	}
</script>

<style>
.side_bar{
  float: left;
  position: fixed;
  background-color: orange;
  height: 692px;
  width: 480px;
  display: flex;
  flex-direction: column;
  z-index: 3;
}
.side_bar_item{
  flex: 1;
  font-size: 22px;
  margin: 0 auto;
  padding-top: 30px;
  color: white;
}
.display_window{
  position: absolute;
  margin-left: 515px;
  margin-top: 90px;
}
.textA{
  color: #ffcccc;
  text-decoration: none;
}
a:hover{
  color: white;
}
</style>
