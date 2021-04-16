<template>
  <div id="app">
    <TopsideBar :userIsLoged="false"></TopsideBar>
    <h1>Guia clientes</h1>
    <div>
      <Clientes></Clientes>
      <Clientes></Clientes>
      <Clientes></Clientes>
      <Clientes></Clientes>
    </div>
  </div>
</template>

<script>

import Clientes from './components/Clientes'
import TopsideBar from './components/TopsideBar'

export default {
  name: 'App', 
  components:{
    Clientes,
    TopsideBar
  }
}
</script>

<style>

</style>
