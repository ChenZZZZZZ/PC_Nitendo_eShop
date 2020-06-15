

<template>
	<div class="tip_bar">
    <div class="tip_logo">
      Nintendo Switch
    </div>
    <div class="tip_button">
      <CircleButton><p>X</p></CircleButton>
      <span>结束</span>
      <CircleButton><p>B</p></CircleButton>
      <span>返回</span>
      <CircleButton><p>Y</p></CircleButton>
      <span>确认</span>
    </div>




  </div>
</template>

<script>
import CircleButton from "./CircleButton";
  export default {
		name: "TipBar",

    components: {
      CircleButton

		}
  }


</script>

<style scoped>
.tip_logo{
  display: inline-block;
  font-weight: bold;
  font-size: 24px;
  margin-left: 140px;
  padding-top: 10px;
}
.tip_button span{
  padding-left: 40px;
  margin-right: 40px;
  font-weight: bolder;
  color: darkgray;
}
.tip_button p{
  color: white;
  text-align: center;
}
.tip_button{
  float: right;
}
.tip_bar{
  height: 54px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f1f1f1;
}

</style>
