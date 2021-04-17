<template>
  <div class="fluid p-5" >
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Insira seu nome..."
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="CPF:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.cpf"
          placeholder="000.000.000-00"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Telefone:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.telephone"
          placeholder="(00) 9 9999-9999"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="E-mail:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.email"
          type="email"
          placeholder="meuemail@exemplo.com"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Data de Nascimento:"
        label-for="input-5"
      >
        <b-form-datepicker placeholder="Selecione uma data"
          v-model="form.data_nasc"
          :min="min"
          :max="max"
          locale="pt-br"
        ></b-form-datepicker>
      </b-form-group>

      <b-form-group id="input-group-6" label="Senha:" label-for="input-6">
        <b-form-input
          id="input-6"
          type="password"
          v-model="senha"
          required
          
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-7"
        label="Confirmar Senha:"
        label-for="input-7"
      >
        <b-form-input
          @change="onDefinePassWord"
          id="input-7"
          type="password"
          v-model="confirmar_senha"
          required
        ></b-form-input>
      </b-form-group>
      <b-button  block  class="pb-2" type="submit" variant="primary">Cadastrar</b-button> 
      <b-button  block class="pb-2" type="reset" variant="danger">Cancelar</b-button>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
export default {
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    // 15th two months prior
    const minDate = new Date(today);
    minDate.setFullYear(minDate.getMonth() - 50);
    minDate.setDate(15);
    // 15th in two months
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 2);
    maxDate.setDate(15);
    return {
      value: "",
      min: minDate,
      max: maxDate,
      form: {
        email: "",
        name: "",
        cpf: "",
        telephone: "",
        data_nasc: Date,
        hash_senha: String,
      },
      show: true,
    };
  },
  methods: {
    onDefinePassWord() {
      if (this.senha === this.confirmar_senha) {
        const encryptedPass = this.CryptoJS.MD5(this.senha).toString();
        this.form.hash_senha = encryptedPass;
      }
      else{
          alert("As senhas estão divergentes.");
          this.form.hash_senha = "";
      }

     
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
        this.cpf= "",
        this.telephone= "",
        this.data_nasc= "",
        this.hash_senha= "",
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>