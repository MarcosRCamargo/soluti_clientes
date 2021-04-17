<template>
  <div class="fluid p-4">
    <!-- Styled -->
    <b-form-file
      accept=".pem, .pfx"
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Selecione ou arraste seu certificado digital aqui..."
      drop-placeholder="Arraste o arquivo aqui..."
      browse-text="Procuar"
      aria-required="true"
    ></b-form-file>
  
    <div class="mt-3">Certificado Selecionado: {{ file1 ? file1.name : '' }}</div>
    
     <div class="fluid p-5"><b-button block  @click="loadFile" class="mr-2"  variant="success">Salvar</b-button></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        file1: null,
      }
    }
  }
</script>
