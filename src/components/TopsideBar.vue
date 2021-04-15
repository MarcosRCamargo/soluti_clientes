<template>
<div>
    <MdButton>Botão md</MdButton>
    <MdTabs>Tab</MdTabs>
</div>
    
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Vue from 'vue'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped>

</style>
