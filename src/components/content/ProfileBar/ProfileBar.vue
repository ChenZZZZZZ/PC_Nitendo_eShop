//个人信息栏组件：包含标题和个人信息按钮
<template>
	<div class="profile_bar">
    <div id="view_name">{{$store.state.title}}</div>
      <div class="button"  @click="getTitle"><router-link to="profile">
        <ProfileButton ></ProfileButton></router-link>
      </div>

  </div>
</template>


<script>
import ProfileButton from "./ProfileButton";
	export default {
		name: "ProfileBar",
    components: {ProfileButton},
    methods: {getTitle: function () {
          this.$store.state.title = '心愿单'
      }
    }
  }
</script>

<style scoped>
.profile_bar{
  position: fixed;
  top:0;
  font-size: 30px;
  height: 80px;
  z-index: 1;
  width: 93%;
  background-color: white;
}
#view_name{
  padding-top: 35px;
  padding-left: 544px;
}
.button{
  margin-left: 100%;
  margin-top: -30px;
}
</style>
