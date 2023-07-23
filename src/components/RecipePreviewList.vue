<template>
  <b-container>
    <h3>
      {{ title }}:
    </h3>
      <button @click="updateRecipes"> new random recipes</button>
      <div v-for="r in recipes" :key="r.id" >
        <RecipePreview class="recipePreview" :recipe="r" />
      </div>
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
    // random: {
    //   type: String,
    //   required: false,
    //   default: "false"
    // }
  },
  mounted() {
    // if (this.random==="true") {
      // console.log("random");
      this.updateRecipes();
      console.log(this.recipes)
    // }
    // else{
    //   this.getLastViewedRecipes();
    // }
  },

  data() {
    return {
      recipes: [],
      // lastViewed: []
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
        console.log(this.recipes)
      } catch (error) {
        console.log(error);
        this.recipes=[]
    }
    },

  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
