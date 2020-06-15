<template>
	<div class="profile_bar">
    <div id="view_name">排行榜</div>
    <div class="button"><ProfileButton></ProfileButton></div>
  </div>
</template>


<script>
import ProfileButton from "../common/ProfileButton/ProfileButton";
	export default {
		name: "ProfileBar",
    components: {ProfileButton}
  }
</script>

<style scoped>
.profile_bar{
  position: fixed;
  top:0;
  font-size: 30px;
  height: 80px;
  z-index: 1;
  background-color: white;
  width: 100%;
}
#view_name{
  padding-top: 40px;
  padding-left: 544px;
}
.button{
  margin-left: 90%;
  margin-top: -30px;
}
</style>
