<template>
    <b-container>
        <h3>Favorite Recipes</h3>
      <b-row>
        <b-col v-for="r in recipes" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r" />
        </b-col>
      </b-row>
    </b-container>
  </template>


<script>
import RecipePreview from "../components/RecipePreview.vue";

export default {
  name: "myFavorites",
  components: {
    RecipePreview
  },
  data() {
    return {
        recipes:[]
        
    };
  },
  mounted() {
    this.updateRecipes();
  },

  methods:
    {
        async updateRecipes() {
        try {
            const response = await this.axios.get(
            this.$root.store.server_domain + "/users/favorites"
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
</style>