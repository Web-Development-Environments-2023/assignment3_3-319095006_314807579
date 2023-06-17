<template>
    <div id="container">
        <h3>Family Recipes</h3>
    <div v-if="recipes.length <= 0">
        <p>No recipes found</p>
    </div>
    <div v-else>
    <b-row>
            <b-col v-for="r in recipes" :key="r.id">
                <b-card>
                    <div class="recipe-body">
                        <img v-if="image_load" :src="r.image" class="recipe-image" />
                        </div>
                        <div class="recipe-footer">
                        <div :title="r.name" class="recipe-title">
                            {{ r.name }}
                        </div>
                        <ul class="recipe-overview">
                            <li>Holiday : {{ r.holiday }} </li>
                            <li>Family member: {{ r.family_member }} likes</li>
                            <li>Ingredients: {{ r.ingredients }}</li>
                            <li>Instructions: {{ r.instructions }}</li>
                        </ul>
                        </div>
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
</style>