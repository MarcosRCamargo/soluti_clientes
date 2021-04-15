<template>
  <div id="app">
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

export default {
  name: 'App', 
  components:{
    Clientes
  }
}
</script>

<style>

</style>
