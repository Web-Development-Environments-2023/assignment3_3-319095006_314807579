<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image"  />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div v-if="this.fromRoute!='/users/myRecipes'">Likes: {{ recipe.popularity }} likes</div>
            </div>
            Ingredients:
            <ul>
              <li
                v-for="(sentence, index) in ingredientsArray"
                :key="index"
                
              >
              {{ sentence }} 
              </li>
              <!-- <li>                
                {{ recipe.ingredients }}
            </li> -->
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <!-- <li v-for="s in recipe.instructions" :key="s.number">
                {{ s.step }}
              </li> -->
              {{ recipe.instructions }}
            </ol>
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null,
      fromRoute: this.$route.params.from
    };
  },
  computed: {
    ingredientsArray() {
      return this.recipe.ingredients.split(',').filter(sentence => sentence.trim() !== '');
    }
  },
  mounted() {
    console.log("from: ",this.fromRoute);
    
  },
  async created() {
    if (this.fromRoute != "/users/myRecipes") {
      try {
        let response;
        // response = this.$route.params.response;

        try {
          response = await this.axios.get(
            // "https://test-for-3-2.herokuapp.com/recipes/info",
            this.$root.store.server_domain + "/recipes/" + this.$route.params.recipeId,
          );

          // console.log("response.status", response.status);
          if (response.status !== 200) this.$router.replace("/NotFound");
          else{
            if (localStorage.getItem("username") !== null){
              try{
                const response_viewed = await this.axios.post(
                  this.$root.store.server_domain + "/users/addLastViewed",{
                    recipeId: this.$route.params.recipeId,
                    username: localStorage.getItem("username")
                  }
                )
                console.log(response_viewed)
                
              }catch(error){
                console.log(error)
                return
              }
          }
        }} catch (error) {
          console.log("error.response.status", error.response.status);
          this.$router.replace("/NotFound");
          return;
        }

        let {
          // analyzedInstructions,
          instructions,
          ingredients,
          popularity,
          readyInMinutes,
          image,
          title,
          meals
        } = response.data;

        // let _instructions = analyzedInstructions
        //   .map((fstep) => {
        //     fstep.steps[0].step = fstep.name + fstep.steps[0].step;
        //     return fstep.steps;
        //   })
        //   .reduce((a, b) => [...a, ...b], []);

        let _recipe = {
          instructions,
          // _instructions,
          // analyzedInstructions,
          ingredients,
          popularity,
          readyInMinutes,
          image,
          title,
          meals
        };

        this.recipe = _recipe;
      } catch (error) {
        console.log(error);
      }
    }
    else {
      try {
        let response;
        // response = this.$route.params.response;

        try {
          const username = localStorage.getItem("username");
          response = await this.axios.get(
            this.$root.store.server_domain + "/users/"+ this.$route.params.recipeId,{
            params: {
              username: username
            }
          }
                      
          );

          // console.log("response.status", response.status);
          if (response.status !== 200) this.$router.replace("/NotFound");
        } catch (error) {
          console.log("error.response.status", error.response.status);
          this.$router.replace("/NotFound");
          return;
        }
        this.recipe=response.data[0];


    }catch (error) {
        console.log(error);
      }
  }
}};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.container{
  background: #222327;
}
/* .recipe-header{

} */
</style>
