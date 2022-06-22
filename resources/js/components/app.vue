<template>
    <div class="container">
         <Header/>  
         <PostList/>    
    </div>
</template>

<script>
    import Header from './Header.vue'
    import PostList from './PostList.vue'
    export default {
        name: "App",
        components: {
            Header,
            PostList
        }
    }

</script>
