
<template>
  <div id="body">
    <div id="app" class="header" >
      <ul class="navbar" >
        <router-link class="co" :to="{ name: 'main' }"><i class="bi bi-house"></i>Vue Recipes</router-link>
        <router-link class="co" :to="{ name: 'search' }">Search</router-link>
        <router-link class="co" :to="{ name: 'about' }">About</router-link>
        <div class="main">
          <span id="nav" class="user" v-if="!$root.store.username">
            <router-link class="co" :to="{ name: 'login' }">Hello Guest  <i class="bi bi-person-fill"></i>Login </router-link>
            <router-link class="co" :to="{ name: 'register' }">Register</router-link>
            
          </span>
          <span  class="user" v-else>
            {{ $root.store.username }}: <button @click="Logout">Logout</button>
            <b-dropdown class="co"  text="Personal">
              <b-dropdown-item :to="{ name: 'myRecipes' }">My Recipes</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'myFavorites' }">My Favorites</b-dropdown-item>
              <b-dropdown-item :to="{name: 'myFamilyRecipes'}"> My Family Recipes</b-dropdown-item>
            </b-dropdown>
            <b-button class="co"  @click=showModal>New Recipe</b-button>
            <b-modal v-model="modalVisible" title="Add a New Recipe">

              <NewRecipe ref="NewRecipe"></NewRecipe>
              <template #modal-footer>
                <b-button @click="hideModal">Close</b-button>
                <b-button @click="onSave">Save</b-button>
              </template>
            </b-modal>

          </span>
        </div>
      </ul>
      
    </div>
    <div id="page_div">
    <router-view />
    </div>
  </div>
  
  
</template>

<script>
import { BModal } from 'bootstrap-vue';
import NewRecipe from "./components/NewRecipe";
/* import the fontawesome core */
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
      this.hideModal();
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
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Poppins:wght@500&display=swap');

*{
  padding: 0;
  margin: 0%;
  box-sizing: border-box;
  font-family: 'poppins',sans-serif;
  text-decoration: none;
  list-style: none;
  
}
:root{
  --bg-color:#222327;
  --text-color:#fff;
  --main-color:#29fd53;
}

// #body{
//   min-height: 100vh;
//   background: var(--bg-color);
//   color: var(--text-color);

  
// }
.header{
  position: fixed;
  height: 10%;
  width: 100%;
  top:0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  padding: 28px 12%;
  transition: all .50 ease;
  background: var(--bg-color);
  
}

.navbar{
  display: flex;
}

.co{
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 500;
  padding: 10px 0;
  margin: 0px 50px;
  transition: all .50s ease;
}
.co:hover{
  color: var(--main-color);
}
.navbar .co.active{
  color: var(--main-color);
}
.main{
  display: flex;
  
}
#page_div{
  margin-top: 120px;
  height: 90%;
}
.user{
  color: #fff;
}



</style>












<!-- <template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'main' }">Vue Recipes</router-link>|
      <router-link :to="{ name: 'search' }">Search</router-link>|
      <router-link :to="{ name: 'about' }">About</router-link>|
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
      this.hideModal();
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
</style> -->
