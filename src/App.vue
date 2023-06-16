<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'main' }">Vue Recipes</router-link>|
      <router-link :to="{ name: 'search' }">Search</router-link>|
      <router-link :to="{ name: 'about' }">About</router-link>|
      {{ !$root.store.username }}
      <span v-if="!$root.store.username">
        Hello Guest:
        <router-link :to="{ name: 'register' }">Register</router-link>|
        <router-link :to="{ name: 'login' }">Login</router-link>|
      </span>
      <span v-else>
        {{ $root.store.username }}: <button @click="Logout">Logout</button>|
        <b-dropdown text="Personal">
          <b-dropdown-item :to="{ name: 'myRecipes' }">My Recipes</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'myFavorites' }">My Favorites</b-dropdown-item>
          <b-dropdown-item :to="{name: 'myFamilyRecipes'}"> My Family Recipes</b-dropdown-item>
        </b-dropdown>|
        <b-button @click=showModal>New Recipe</b-button>|
        <b-modal v-model="modalVisible" title="Add a New Recipe">

          <NewRecipe ref="NewRecipe"></NewRecipe>
          <template #modal-footer>
            <b-button @click="hideModal">Close</b-button>
            <b-button @click="onSave">Save</b-button>
          </template>
        </b-modal>

      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
import { BModal } from 'bootstrap-vue';
import NewRecipe from "./components/NewRecipe";
export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BModal,
    NewRecipe
  },
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    onSave(){
      this.$refs.NewRecipe.saveRecipe();
    },
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    showModal() {
      this.modalVisible = true;
    },
    hideModal() {
      this.modalVisible = false;
    }
}
};

</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
