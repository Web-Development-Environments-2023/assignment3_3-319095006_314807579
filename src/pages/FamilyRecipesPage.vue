<template>
    <div id="container">
        <h3>Family Recipes</h3>
    <b-row>
        <b-col v-for="r in recipes" :key="r.id">
            <b-card>
                <h4>"r.name"</h4>
                <p>"r.family_member"</p>
                <p>"r.holiday"</p>
                <p>"r.image"</p>
                <p>"r.ingredients"</p>
                <p>"r.instructions"</p>
            </b-card>
        </b-col>
    </b-row>
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
                const response = await this.axios.get(
                this.$root.store.server_domain + "/users/myFamilyRecipes"
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