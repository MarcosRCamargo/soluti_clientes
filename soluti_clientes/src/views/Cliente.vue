<template>
  <div class="client">
    <h1>This is an client page</h1>
    <table>
      <tbody>
        <tr v-for="cliente of clientes" :key="cliente.id">
          <td>cliente.name</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Clientes  from '../services/clientes'

export default ({
  data(){
    return{
    clientes:[]
    }

  },
  mounted() {
    Clientes.listar().then(response =>{
      console.log(response.data)
      this.clientes = response.data
    })
  },
})
</script>
