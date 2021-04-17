<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Sis Soluti</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"
            ><b-icon icon="info-circle" aria-hidden="true"></b-icon> Saiba
            Mais</b-nav-item
          >
          <b-nav-item href="#"
            ><b-icon icon="telephone" aria-hidden="true"></b-icon>
            Contato</b-nav-item
          >
          <b-nav-item href="#" v-if="userIsLoged === true"
            ><b-icon icon="award-fill" aria-hidden="true"></b-icon>Meus
            Certificados</b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

          <div v-if="userIsLoged === true">
            <b-nav-item-dropdown right>
              <template #button-content>
                <em><b-icon icon="person-fill"></b-icon> Usuário</em>
              </template>
              <b-dropdown-item href="#"
                ><b-icon icon="gear-fill" aria-hidden="true"></b-icon>
                Profile</b-dropdown-item
              >
              <b-dropdown-item href="#"
                ><b-icon icon="power" aria-hidden="true"></b-icon> Sign
                Out</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </div>
          <div v-else>
            
            <b-nav-item right>
              <router-link to="/cadastrar" class="color-wite"><b-icon icon="person"></b-icon>Cadastrar</router-link>
            </b-nav-item>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TopSideBar",
  data: () => ({}),
  props: {
    userIsLoged: Boolean,
  },
};
</script>
