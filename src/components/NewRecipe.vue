<template>
    <div class="container">
        <h1 class="title">Add a New Recipe</h1>
        <b-form @submit.prevent="onCreate" @reset.prevent="onReset">
            <b-form-group
                id="input-group-recipeName"
                label-cols-sm="3"
                label="Recipe Name:"
                label-for="recipeName"
            >
                <b-form-input
                    id="recipeName"
                    v-model="$v.form.recipeName.$model"
                    type="text"
                    :state="validateState('recipeName')"
                ></b-form-input>
                <b-form-invalid-feedback v-if="!$v.form.recipeName.required">
                    Recipe name is required
                </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
                id="input-group-Image"
                label-cols-sm="3"
                label="Image:"
                label-for="Image"
            >
                <b-form-input
                    id="Image"
                    v-model="$v.form.Image.$model"
                    type="text"
                    :state="validateState('Image')"
                ></b-form-input>
                <b-form-invalid-feedback v-if="!$v.form.Image.required">
                    Image is required
                </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
                id="input-group-readyInMinutes"
                label-cols-sm="3"
                label="Ready In Minutes:"
                label-for="readyInMinutes"
            >
                <b-form-input
                    id="readyInMinutes"
                    v-model="$v.form.readyInMinutes.$model"
                    type="text"
                    :state="validateState('readyInMinutes')"
                ></b-form-input>
                <b-form-invalid-feedback v-if="!$v.form.readyInMinutes.required">
                    Ready in minutes is required
                </b-form-invalid-feedback>
                <b-form-invalid-feedback v-else-if="!$v.form.readyInMinutes.decimal">
                    Ready in minutes should be a number
                </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
                id="input-group-vegetarian"
                label-cols-sm="3"
                label="Vegetarian:"
                label-for="vegetarian"
            >
            <b-form-checkbox
                id="vegetarian"
                v-model="isChecked"
                type="checkbox"
                :state="validateState('vegetarian')"
            >vegetarian</b-form-checkbox>
            <b-form-invalid-feedback v-if="!$v.form.vegetarian.required">
                Vegetarian is required
            </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
                id="input-group-vegan"
                label-cols-sm="3"
                label="Vegan:"
                label-for="vegan"
            >
            <b-form-checkbox
                id="vegan"
                v-model="$v.form.vegan.$model"
                type="checkbox"
                :state="validateState('vegan')"
            >vegan</b-form-checkbox>
            <b-form-invalid-feedback v-if="!$v.form.vegan.required">
                Vegan is required
            </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
                id="input-group-gluten_free"
                label-cols-sm="3"
                label="Gluten Free:"
                label-for="gluten_free"
            >
            <b-form-checkbox
                id="gluten_free"
                v-model="$v.form.gluten_free.$model"
                type="checkbox"
                :state="validateState('gluten_free')"
            >gluten free</b-form-checkbox>
            <b-form-invalid-feedback v-if="!$v.form.gluten_free.required">
                Gluten Free is required
            </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
                id="input-group-ingredients"
                label-cols-sm="3"
                label="Ingredients:"
                label-for="ingredients"
            >
                <b-form-input
                    id="ingredients"
                    v-model="$v.form.ingredients.$model"
                    type="text"
                    :state="validateState('ingredients')"
                ></b-form-input>
                <b-form-invalid-feedback v-if="!$v.form.ingredients.required">
                    Ingredients is required
                </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
                id="input-group-instructions"
                label-cols-sm="3"
                label="Instructions:"
                label-for="instructions"
            >
                <b-form-input
                    id="instructions"
                    v-model="$v.form.instructions.$model"
                    type="text"
                    :state="validateState('instructions')"
                ></b-form-input>
                <b-form-invalid-feedback v-if="!$v.form.instructions.required">
                    Instructions is required
                </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
                id="input-group-meals"
                label-cols-sm="3"
                label="Meals:"
                label-for="meals"
            >
                <b-form-input
                    id="meals"
                    v-model="$v.form.meals.$model"
                    type="text"
                    :state="validateState('meals')"
                ></b-form-input>
                <b-form-invalid-feedback v-if="!$v.form.meals.required">
                    Meals is required
                </b-form-invalid-feedback>
                <b-form-invalid-feedback v-else-if="!$v.form.meals.decimal">
                    Meals should be a number
                </b-form-invalid-feedback>
        
            </b-form-group>
        </b-form>
    </div>
</template>


<script>
import { BFormCheckbox } from 'bootstrap-vue';
import {
    //input is a number
    decimal,
    required,

} from "vuelidate/lib/validators";

export default {
    components: {
    BFormCheckbox
    },
    name: "NewRecipe",
    data() {
        return {
            form: {
                recipeName: "",
                Image: "",
                readyInMinutes: "",
                vegetarian: "",
                vegan: "",
                gluten_free: "",
                ingredients: "",
                instructions: "",
                meals: ""
            },
            errors: [],
            validated: false,
            isChecked: false
        };
    },
    methods: {
        validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
        }
    },
    validations:
    {
        form: {
            recipeName: {
                required
            },
            Image: {
                
            },
            readyInMinutes: {
                required,
                decimal
                
            },
            vegetarian: {
                required
            },
            vegan: {
                required
            },
            gluten_free: {
                required
                
            },
            ingredients: {
                required
            },
            instructions: {
                required
            },
            meals: {
                required,
                decimal
            }
            

        }
    }
};
</script>

<style lang="scss" scoped>
</style>