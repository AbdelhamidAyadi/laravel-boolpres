<template>
    <div class="container">
           <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Image</th>
      <th scope="col">Categoty</th>
   
    </tr>
  </thead>
  <tbody>
    <tr v-for="post in posts" :key="post.id">
      <th scope="row">{{ post.id }}</th>
      <td>{{ post.title }}</td>
      <td> <img :src="`${post.image}`" width="50px;" style="border-radius: 4px;"> </td>
      <td>{{ post.category.name }}</td>
      
    </tr>
    
  </tbody>
</table>
    </div>
</template>

<script>
    import Axios from 'axios'

    export default {
        name: "PostList",
        data(){
            return{
                posts:[]
            }
        },
        components: {
           
        },
        mounted(){
            Axios.get("http://127.0.0.1:8000/api/posts")
                 .then((res)=>{
                 this.posts = res.data.posts;
                 })
        }    

    }

</script>