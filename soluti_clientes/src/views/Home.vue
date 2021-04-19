<template>
  <div class="home">
    <HelloSoluti msg="Bem vindo a Gestão de Clientes Sis-Soluti" />
    <p>Usuários do sistema:</p>
    <p />
    <div class="mb-4">
      <b-avatar></b-avatar>
      <b-avatar variant="primary" text="BV"></b-avatar>
      <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
      <b-avatar variant="success" icon="people-fill"></b-avatar>
    </div>
    <b-list-group
      v-for="cliente of clientes"
      :key="cliente.id"
      style="max-width: 100%"
      class="fluid p-5 mb-4"
    >
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar variant="success" icon="people" class="mr-3"></b-avatar>
        <span class="mr-auto">{{ cliente.nome }}</span>
        <span class="mr-auto">@Certificado</span>
        <span>Verificação: <b-badge variant="success">valido</b-badge></span>
        <b-icon class="mr-auto" icon="shield-check"></b-icon>
        <b-badge variant="success">{{ cliente.email }}</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloSoluti from "@/components/HelloSoluti.vue";
import Cliente from "../services/clientes";
export default {
  name: "Home",
  components: {
    HelloSoluti,
  },
  data() {
    return {
      clientes: [],
    };
  },
  mounted() {
    Cliente.listar().then(resposta => {
      console.log(resposta.data);
      this.clientes = resposta.data
    });
  },
};
</script>
