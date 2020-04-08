<template>
	<div class="profile_avatar">
    <slot><div><img src="../../assets/image/mai.jpg" height="30" width="30"/></div></slot>
    <div id="profile_tip"> ></div>
  </div>
</template>

<script>
	export default {
		name: "ProfileAvatar"
	}
</script>

<style scoped>
.profile_avatar{
  position: absolute;
  right: 24px;
  top: 24px;
  color: orange;
  display: table;
}
.profile_avatar img{
  border-radius: 50%;
}
#profile_tip{
  padding-left: 5px;
  display: table-cell;
  vertical-align: middle;
}
</style>
