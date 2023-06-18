<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row v-if="recipes.length !=0 ">
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { TRUE } from "sass";
import RecipePreview from "./RecipePreview.vue";
import { componentsPlugin } from "bootstrap-vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    random: {
      type: String,
      required: false,
      default: "false"
    }
  },
  mounted() {
    if (this.random==="true") {
      console.log("random");
      this.updateRecipes();
    }
    else{
      this.getLastViewedRecipes();
    }
  },

  data() {
    return {
      recipes: []
    };
  },
  // mounted() {
  //   this.updateRecipes();
  // },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/getRandomRecipes");
        console.log(response.data)
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
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
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
