<template>
<div>
<b-container>
    <h3>
        {{ title }}:
    </h3>
        <ul v-for="r in lastViewed" :key="r.id" >
            <li v-if="r.title">
                <RecipePreview  class="recipePreview" :recipe="r" />

            </li>
        </ul>
</b-container>
</div>

</template>



<script>
import RecipePreview from "./RecipePreview.vue";
import { componentsPlugin } from "bootstrap-vue";

export default{
    data(){
        return{
            lastViewed: [],
        }
    },
    components: {
        RecipePreview
    },

    mounted(){
        this.getLastViewedRecipes();
    },
    props: {
        title: {
          type: String,
          required: true
        },

    },
    methods:{
    async getLastViewedRecipes(){
      try {
        const username = localStorage.getItem("username");
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/lastViewed",
          {
            params:{
              username: username
            }
          }
        );
        console.log(response.data)
        const lastViewed = response.data;
        let viewed =[];;
        viewed.push(...lastViewed);
        this.lastViewed = [];
       if (viewed.length > 0){
        this.lastViewed.push(viewed[0]);
       }
         if (viewed.length > 1){
          this.lastViewed.push(viewed[1]);
         }
            if (viewed.length > 2){
            this.lastViewed.push(viewed[2]);
            }
      } catch (error) {
        console.log(error);
        this.lastViewed=[];

      }
    }
}   
}


</script>
