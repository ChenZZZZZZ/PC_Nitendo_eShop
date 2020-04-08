<template>
  <div id="app">
      <div >
        <SideBar></SideBar>
        <ProfileBar></ProfileBar>
        <TipBar></TipBar>
      </div>
  </div>
</template>

<script>

import TipBar from "./components/content/TipBar";
import SideBar from "./components/common/SideBar";
import ProfileBar from "./components/content/ProfileBar";

export default {
  name: 'App',
  components: {
    ProfileBar,
    SideBar,
    TipBar,
  }
}
</script>

<style>
#app {

}

</style>
