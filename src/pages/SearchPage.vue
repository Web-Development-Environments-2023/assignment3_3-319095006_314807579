<template>
  <section class="hero-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2 text-center">
          <div class="hero-caption">
            <h2>Search your next recipe!</h2>
            <p>Over a milion recipes, just choose one</p>

            <div class="h-search-form">
              <form action="#">
                <b-form >
                  <input v-model="selected_query" type="search" class="form-control" placeholder="type your keyboard">
                  <button @click="search" class="s_btn"><i class="bi bi-search"></i></button>  
                  <b-card id="options">
                  <b-form-group 
                    class="mt-2"
                    id="input-group-cuisine"
                    label-cols-sm="8"
                    label="Cuisine:"
                    label-for="none"
                  >
                    <b-form-select
                      id="cuisine"
                      v-model="selcted_cuisine"
                      :options="cuisine"
                    ></b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="input-group-diet"
                    label-cols-sm="8"
                    label="Diet:"
                    label-for="none"
                  >
                    <b-form-select
                      id="diet"
                      v-model="selcted_diet"
                      :options="diet"
                    ></b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="input-group-intolerances"
                    label-cols-sm="8"
                    label="Intolerances:"
                    label-for="none"
                  >
                    <b-form-select
                      id="intolerances"
                      v-model="selcted_intolerance"
                      :options="intolerances"
                    ></b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="input-group-number-of-res"
                    label-cols-sm="8"
                    label="How many recipes?:"
                    label-for="5"
                  >
                    <b-form-select
                      id="recipes_num"
                      v-model="selected_num"
                      :options="num_options"
                    ></b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="input-group-sort"
                    label-cols-sm="8"
                    label="Would you like to sort?:"
                    label-for="sort_option"
                  >
                    <b-form-select
                      id="sort_option"
                      v-model="selected_sort"
                      :options="sort_option"
                      
                    >
                    </b-form-select>
                  </b-form-group>
                  
                </b-card>
                
                </b-form>
                
            </form>
            
            <div v-if="recipes.length > 0">
              <b-row>
                <b-row v-for="r in recipes" :key="r.id" >
                  <RecipePreview class="recipePreview" :recipe="r" />
                </b-row>
              </b-row>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button id="last_btn" @click="getLastSearch">Last Search</button>
  </section>
</template>

<script>
import diets from '../assets/diets';
import cuisine from '../assets/cuisine';
import intolerances from '../assets/intolerances';
import 'bootstrap-icons/font/bootstrap-icons.css';
import RecipePreview from '../components/RecipePreview.vue';
export default {
  name: "SearchPage",
  data() {
    return {
      validated: false,
      diet:[],
      cuisine:[],
      intolerances:[],
      selcted_cuisine: null,
      selected_diet: null,
      selected_intolerance:null,
      num_options:[5,10,15],
      selected_num:'',
      sort_option:['time','popularity'],
      selected_sort:null,
      selected_query:"",
      recipes: [],
      searchData:[]
    };
  },
  components: {
    RecipePreview
  },
  mounted(){
    this.diet.push(...diets)
    this.cuisine.push(...cuisine)
    this.intolerances.push(...intolerances)
  },
  methods: {
    async search() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/search",{
            params:{
              query:this.selected_query,
              number: this.selected_num,
              cuisine:this.selcted_cuisine,
              diet:this.selcted_diet,
              intolerances:this.selected_intolerance,
              sort:this.selected_sort
            }
          } 
        );
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        console.log(this.recipes)
        if (localStorage.getItem("username")!=null){
          
          searchData.push(this.selected_query)
          searchData.push(this.selected_num)
          searchData.push(this.selected_cuisine)
          searchData.push(this.selected_diet)
          searchData.push(this.selcted_intolerance)
          searchData.push(this.selected_sort)
          console.log(searchData)
          localStorage.setItem("last_search",JSON.stringify(searchData));
        }
        // this.$router.push({path:"/search_result_page",params:{recipes:this.recipes}})
      } catch (error) {
        console.log(error);
      }
    },
    async getLastSearch(){
      // Retrieve the last search data as an array
      const lastSearchData = JSON.parse(localStorage.getItem('last_search'));
      console.log(lastSearchData)
      if (localStorage.getItem("username")==null){
        const search = localStorage.getItem("last_search")
        this.query = search[0]
        this.selected_num = search[1]
        this.selcted_cuisine = search[2]
        this.selcted_diet = search[3]
        this.selected_intolerance = search[4]
        this.selected_sort = search[5]
        this.search()
  
    }

  }
}
};



</script>

<style >
.hero-area {
  padding-top: 50px;
  padding-bottom: 150px;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
}

.hero-area::after {

  content: "";
  clear: both;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background: cadetblue;
  top: 0;
  left: 0;
  z-index: -1;
}
.hero-caption{
  display: flex;
  flex-direction: column;
}
.hero-caption h2{
  
font-size: 42px;
font-weight: 700;
color: #fff;
margin-top: 20px;
}
.hero-caption p{
font-size: 24px;
font-weight: 500;
color: #e8e8e8;
margin-top: 30px;
margin-bottom: 30px;
}
.h-search-form{
  width: 100%;
  position: relative;
}
.h-search-form input{
  width: 100%;
  padding:0 30px ;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  text-transform: capitalize;
  position: relative;
  color: #333;
  height: 70px;
}
.h-search-form .s_btn{
  right: 6px;
  height: 60px;
  border: none;
  color: #fff;
  background-color: #5f3afc;
  top: 5px;
  border-radius: 50px;
  position: absolute;
  width: 100px;
}
.h-search-form .s_btn:hover{
  background-color: blue;
}
/* #input-group-cuisine{
  padding-top: 60px;
  align-self: start;
} */
#last_btn{
  right: 6px;
  height: 60px;
  border: none;
  color: #fff;
  background-color: #5f3afc;
  top: 5px;
  border-radius: 50px;
  position: absolute;
  width: 100px;
  
}
#last_btn:hover{
  background-color: blue;
}
#options{
  
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-top: 20px;
  text-align: left;
  background-color: cadetblue;
  width: 50%;
  margin-left: 25%;
  border: none;

}




</style>
