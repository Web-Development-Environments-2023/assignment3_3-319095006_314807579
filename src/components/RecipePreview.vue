<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 600px;">
      
        <b-row no-gutters id="row">
          
            <b-col md="6"  class="col">
              <router-link
            :to="{ name: 'recipe', params: { recipeId: recipe.id, from: fromRoute } }"
            class="recipe-preview"
          >
              <b-card-img :src="recipe.image" style="height: 100%; width: 100%;" class="rounded-0">
              </b-card-img>
            </router-link>
            </b-col>
            <b-col md="4" class="col">
              <router-link
            :to="{ name: 'recipe', params: { recipeId: recipe.id, from: fromRoute } }"
            class="recipe-preview"
          >
              <b-card-body :title="recipe.title">
                <b-card-text>
                  <div id="inst">
                    <li>{{ recipe.readyInMinutes }} minutes</li>
                    <li>{{ recipe.popularity }} likes</li>
                  </div>
                </b-card-text>
              </b-card-body>
              </router-link>
            </b-col>
           
          <b-col md="2">
            <div v-if="recipe.vegan==='true'" class="vegan">
              <i class="bi bi-check2-circle">vegan</i>
            </div>
            <div v-if="recipe.vegetarian==='true'" class="vegetarian">
              <i class="bi bi-check2-circle">vegetarian</i>
            </div>
            <div v-if="recipe.gluten_free ==='true'" class="glutenFree">
              <i class="bi bi-check2-circle">gluten free</i>
            </div>
            <div v-if="recipe.viewed === 'true'" class="viewed">
              <i class="bi bi-eye-fill"></i>
            </div>
            <div >
              <button @click="toggle_favorite" style="background: none; border: none;">
                    <i :class="recipe.favorite ? 'bi bi-star-fill' : 'bi bi-star'" style="size: 20px;"></i>
              </button>
            </div>
          </b-col>
        </b-row>
      
      
    </b-card>
  </div>

</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
export default {
  mounted() {
    // if(this.$route.path == '/')
    this.axios.get(this.recipe.image).then((i) => {
      this.image_load = true;
    });
  },
  data() {
    return {
      image_load: false,
      isFavorite: false,
      fromRoute: this.$route.path
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    },

    // id: {
    //   type: Number,
    //   required: true
    // },
    // title: {
    //   type: String,
    //   required: true
    // },
    // readyInMinutes: {
    //   type: Number,
    //   required: true
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // popularity: {
    //   type: Number,
    //   required: false,
      
    //   default() {
    //     return undefined;
    //   }
    // },
    // favorite: {
    //   type: Boolean,
    //   required: false,
    //   default() {
    //     return false;
    //   }
    // },
    // vegan: {
    //   type: Boolean,
    //   required: false,
    //   default() {
    //     return false;
    //   }
    // },
    // vegetarian: {
    //   type: Boolean,
    //   required: false,
    //   default() {
    //     return false;
    //   }
    // },
    // gluten_free: {
    //   type: Boolean,
    //   required: false,
    //   default() {
    //     return false;
    //   }
    // },
    // viewed: {
    //   type: Boolean,
    //   required: false,
    //   default() {
    //     return false;
    //   }
    // }
  },
  methods: {
    async toggle_favorite() {
      console.log("recipeID: "+ this.recipe.id)
      const user_name = localStorage.getItem("username")
      console.log(user_name)
      try{
        const response = await this.axios.post(this.$root.store.server_domain + "/users/favorites",
        {
          username:user_name,
          recipeId: this.recipe.id
        },{withCredentials:true}
        
      );
      
    }catch(err){
            
    }
  }
}};
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 98%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}
#icons{
  display: flex;
  flex-direction: column;
} 
#inst{
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #fff;
}
 i{
  font-size: 0.7rem;
  color: #fff;
}
.overflow-hidden{
  height: 100%;
  width: 100%;
  margin: 70px;
  display: relative;
  flex-wrap: wrap;
  background-color: #222327;
 
  
}


</style>
