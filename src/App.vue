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

import TipBar from "./components/content/TipBar/TipBar";
import SideBar from "./components/content/SideBar/SideBar";
import ProfileBar from "./components/content/ProfileBar/ProfileBar";


export default {
  name: 'App',
  data(){
    return{
      title:""
    }
  },
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
