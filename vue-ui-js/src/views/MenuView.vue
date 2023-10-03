<template >
    <div class="btn-container">
      <div>
        <v-btn @click = "goVuetifyComponent" > Vuetify Component</v-btn>
      </div>
      <br>
      <div>
        <button type="button" class="btn btn-warning">Bootstrap Component</button>
      </div>
      <br>
      <div>
        <div class="rounded-lg bg-white">Test Tailwind</div>
      </div>
    </div>
</template>
<script>
export default {
    methods: {
      goVuetifyComponent(){
        console.log("test");
        this.$router.push('/vuetify/component');
      }
    }
}
</script>
<style lang="scss" scoped>

@import '../sass/menu.scss'
    
</style>