<template>
    <div id="container">
        <h3>Family Recipes</h3>
    <div v-if="recipes.length <= 0">
        <p>No recipes found</p>
    </div>
    <div v-else>
        <b-row>
            <b-col v-for="r in recipes" :key="r.id">
                <b-card no-body class="overflow-hidden" style="max-width: 600px;">
                    <b-row no-gutters id="row">
                        <b-col md="6"  class="col">
                            <b-card-img :src="r.image" style="height: 100%; width: 100%;" class="rounded-0" ></b-card-img>
                        </b-col>
                        <b-col md="6"  class="col" style="align-items: center;">
                        <div :title="r.name" class="recipe-title" style="margin-left: 20px;" >
                            {{ r.name }}
                        </div>
                            <ul class="recipe-overview" style="margin-top: 20px; margin-left: 20px;">
                                <li>Holiday : {{ r.holiday }} </li>
                                <li>Family member: {{ r.family_member }} likes</li>
                                <li>Ingredients: {{ r.ingredients }}</li>
                                <li>Instructions: {{ r.instructions }}</li>
                            </ul>
                        
                        </b-col>
                    </b-row>
                    
                </b-card>
            </b-col>
        </b-row>
    </div>  
</div>
</template>


<script>
    export default {
        name: "myFamilyRecipes",
        data() {
            return {
                form: {
                    name: "",
                    family_member: "",
                    holiday: "",
                    image: "",
                    ingredients: "",
                    instructions: ""
                },
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
                this.$root.store.server_domain + "/users/myFamilyRecipes", {
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
    }
</script>

<style>
    .overflow-hidden{
        background-color: #222327;
    }
    .recipe-title{
        color:lightblue ;
    }
</style>