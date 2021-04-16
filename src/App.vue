<template>
  <div id="app">
    <TopsideBar :userIsLoged="false"></TopsideBar>
    <h1>Guia clientes</h1>
    <div fluid="lg">
      <b-container class="bv-client-row" align-v="start">
        <b-row class="text-center" align-v="start">
          <b-col cols="auto" class="mr-auto">
            <b-list-group>
              <b-list-group-item>Cras justo odio</b-list-group-item>
              <b-list-group-item active
                >Dapibus ac facilisis in</b-list-group-item
              >
              <b-list-group-item>Morbi leo risus</b-list-group-item>
              <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col cols="9" class="bg-info fluid">2 of 3 (wider)</b-col>
        </b-row>
        <b-row class="text-center">
          <b-col>@copy</b-col>
        </b-row>
      </b-container>
      <Clientes></Clientes>
    </div>
  </div>
</template>
<script>
import Clientes from "./components/Clientes";
import TopsideBar from "./components/TopsideBar";
export default {
  name: "App",
  components: {
    Clientes,
    TopsideBar,
  },
};
</script>
<style></style>
