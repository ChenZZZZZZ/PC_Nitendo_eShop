//圆形按钮组件
<template>
  <div class="inline">
    <div id="circle">
      <slot></slot>
    </div>
  </div>

</template>

<script>
	export default {
		name: "CircleButton"
	}

</script>

<style scoped>

#circle {
  width: 20px;
  height: 20px;
  background: darkgray;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 10px;
}
.inline{
  display: inline-block;
  margin-right: -15px;
}



</style>
