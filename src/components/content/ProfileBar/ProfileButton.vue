<template>
	<div class="profile_button">
    <slot><div><img src="@/assets/image/mai.jpg" height="30" width="30"/></div></slot>
    <div id="profile_tip"> ></div>
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
  display: table;
  z-index: 3;
}
.profile_button img{
  border-radius: 50%;
}
#profile_tip{
  padding-bottom: 5px;
  padding-left: 5px;
  display: table-cell;
  vertical-align: middle;
}
</style>
