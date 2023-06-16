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
                  <input type="search" class="form-control" placeholder="type your keyboard">
                  <button><i class="bi bi-search"></i></button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
export default {
}
</script>

<style >
.hero-area {
  padding-top: 200px;
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
</style>
