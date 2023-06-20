<template>
    <b-container  style="margin-bottom: 50px;" >
      <div style="margin-top: 20px;">
        <h3>Favorite Recipes</h3>
      </div>
        <b-row v-for="r in recipes" :key="r.id">
        <b-col>
          <RecipePreview class="recipePreview" :recipe="r" style="width: 100%;" />
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
            const username = localStorage.getItem("username");
            const response = await this.axios.get(
            this.$root.store.server_domain + "/users/favorites", {
                params: {
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
</style>