<template>
  <div>
    <b-card title="Login no Sis Soluti" body-class="text-center" header-tag="nav">
      <b-card
        border-variant="success"
        header="Efetue seu Login."
        align="center"
      >
        <b-card-text>
          <b-form @submit.stop.prevent>
            <label for="email">E-mail:</label>
            <b-form-input
              type="email"
              id="email"
            ></b-form-input>
            <label for="text-password">Senha</label>
            <b-form-input
              type="password"
              id="text-password"
            ></b-form-input>

            <b-button variant="primary">Entrar</b-button>
          </b-form>
        </b-card-text>
      </b-card>
    </b-card>
  </div>
</template>