<template>
 <div class="container"> 
    <h1 class="title" >All recipes in one place</h1>
    <b-row class="container">
    <b-col style="width: 50%;">
  
      <RecipePreviewList title="Random Recipes" class="RandomRecipes center" random="true"></RecipePreviewList>
    </b-col>
    <b-col style="width: 50%;">
      <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>
        <RecipePreviewList style="width: 100%; height: 100%;"
          title="Last Viewed Recipes"
          random="false"
          :class="{
            RandomRecipes: true,
            blur: !$root.store.username,
            center: true
          }"
          disabled
        ></RecipePreviewList >
    </b-col>
  </b-row>
</div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  }
  
};


</script>

<style lang="scss" scoped>
.title{
  text-align: center;
  margin: 10px 0 10px;
  color: darkcyan;
  font-size: 50px;
  font-weight: 700;
}
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
