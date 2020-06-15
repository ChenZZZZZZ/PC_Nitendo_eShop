//输入序号界面
<template>
  <div>
    <div class="tipText">
      <div>可输入以下代码</div>
      <div>-兑换码</div>
    </div>
    <div id="codeArea">
      <div class="tipH">
        -请输入兑换码-
      </div>
      <div class="codeBar">
        <p>
          <input type="text" maxlength="16" />
        </p>
      </div>
    </div>
  </div>
</template>
<script>
	export default {
		name: "EnterCode"
	}
</script>

<style>
.tipText{
  color: #aaaaaa;
  font-size: 20px;
  margin-left: 30px;
}
.tipH{
  text-align: center;
  color: #aaaaaa;
  font-size: 20px;
}
#codeArea{
  margin-top: 100px;
  margin-left: 290px;
}

</style>
