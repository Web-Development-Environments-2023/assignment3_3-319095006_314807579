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
                  <button @click="search"><i class="bi bi-search"></i></button>
                  <b-form-group 
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
                    label-for="None"
                  >
                    <b-form-select
                      id="sort_option"
                      v-model="selected_sort"
                      :options="sort_option"
                    ></b-form-select>
                  </b-form-group>
                </b-form>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import diets from '../assets/diets';
import cuisine from '../assets/cuisine';
import intolerances from '../assets/intolerances';
import 'bootstrap-icons/font/bootstrap-icons.css';
export default {
  name: "SearchPage",
  data() {

    return {
      validated: false,
      diet:[],
      cuisine:[],
      intolerances:[],
      selcted_cuisine:"",
      selected_diet:"",
      selected_intolerance:"",
      num_options:[5,10,15],
      selected_num:'',
      sort_option:['time','popularity'],
      selected_sort:"",
      selected_query:""
    };
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
        this.$router.push({path:"/search_result_page",query:{recipes:JSON.stringify(recipes)}})
      } catch (error) {
        console.log(error);
      }
    }
  }
}



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
.h-search-form button{
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
.h-search-form button:hover{
  background-color: blue;
}
#input-group-cuisine{
  padding-top: 60px;
  align-self: start;
  
  
}


</style>
