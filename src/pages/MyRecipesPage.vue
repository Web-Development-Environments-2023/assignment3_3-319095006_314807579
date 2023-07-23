<template>
    <b-container id="cont">
        <h3>My Recipes</h3>
        <b-card-group deck class="recipes">
          <b-col v-for="r in recipes" :key="r.id">
            <RecipePreview class="recipePreview" :recipe="r" />
          </b-col>
      </b-card-group>
    </b-container>
  </template>


<script>
import RecipePreview from "../components/RecipePreview.vue";

export default {
  name: "myRecipes",
  components: {
    RecipePreview
  },
  data() {
    return {
        recipes: []
        
    };
  },
  mounted() {
    this.updateRecipes();
  },

  methods:
    {
        async updateRecipes() {
        try {
            const username = localStorage.getItem("username");
            const response = await this.axios.get(
            this.$root.store.server_domain + "/users/myRecipes", {
                params: {
                  username: username
                }
            });
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
.recipes{
  display: flex;
  flex-direction:column ;
}
</style>