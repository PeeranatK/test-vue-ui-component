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
        <div class="rounded-lg bg-red">Test Tailwind</div>
      </div>
      <br>
      <div>
        <span>Display fix variable {{ count1 }}</span>
        <span>Display  variable {{ count2 }}</span>
        <br><br>
        <v-btn @click = "onClickAdd" >Add</v-btn>
        <br><br>
        <span>Display  object {{ account }}</span>
        <br>
        <span>Display  object2 {{ state.account }}</span>
        <br><br>
        <v-btn @click = "onClickClear" >Clear</v-btn>
        <br><br>
        <br><br>
        <v-btn @click = "getPokemon" >Log Ditto</v-btn>
        <br><br>
      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref , reactive } from 'vue'
import ResponseData from '@/models/ResponseData'
import api from '@/services/api'

export default defineComponent ({
    setup(){
      const defaultEmpty = {username : "", password : ""}
      //store value
      let count1 = 11; //not refresh
      const count2 = ref<number>(0) //refresh
      //store object
      const account = reactive({username : "admin", password : "pass"})
      const state = reactive( {account : {username : "admin", password : "pass"} })


      //vue3 function
      const onClickAdd = () => {
        count1 = count1 + 1
        count2.value = count2.value + 1
      }
      const onClickClear = () => {
        state.account = defaultEmpty
      }

      return {
        count1, count2, onClickAdd, state, onClickClear, account
      }
    },
    methods: {
        goVuetifyComponent(){
          console.log("test");
          this.$router.push('/about');
        },
        getPokemon(){
          api.get("ditto").then((response : ResponseData) => {
            console.log(response.data);
          })
          .catch((e : Error) => {
            console.log(e);
          }
          );
        }
    }
    
})
</script>
<style lang="scss" scoped>

@import '../sass/menu.scss'
    
</style>