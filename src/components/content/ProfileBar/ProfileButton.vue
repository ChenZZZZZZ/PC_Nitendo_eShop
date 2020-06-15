//包含头像的按钮
<template>
	<div class="profile_button">
    <div><img src="@/assets/image/mai.jpg" height="30" width="30"/></div>
  </div>
</template>

<script>
	export default {
		name: "ProfileButton"
	}
</script>

<style scoped>
.profile_button{
  color: orange;
  z-index: 1;
}
.profile_button img{
  border-radius: 50%;
}
</style>
