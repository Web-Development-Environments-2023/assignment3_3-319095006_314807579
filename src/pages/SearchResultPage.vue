<template>
    <div>
    <h1>yosi</h1>
</div>
</template>
<script>
export default {
    name:'searchResult',
    beforeRouteEnter(to, from, next) {
        const resultsArray = JSON.parse(to.query.recipes);
        // Use the resultsArray as needed
        next();
    }

}

const result = JSON.parse(this.$route.query.recipes)
console.log("sss")
console.log(result)
    
</script>
<style>

</style>