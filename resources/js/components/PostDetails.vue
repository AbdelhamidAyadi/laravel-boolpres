<template>
    <div>
        <h2>Details</h2>
        <div class="card text-center my-3">
            <div class="card-header">
                <h5>{{ post.title }}</h5>
            </div>
            <div class="card-body">
                <p class="card-text">{{ post.content }}</p>
                
            </div>

        </div>
    </div>
</template>
<script>
import Axios from 'axios';

export default{
    name:'PostDetails',
    data(){
        return{
            post:[]
        }
    },
    mounted(){
         Axios.get("http://127.0.0.1:8000/api/posts/" + this.$route.params.id )
                    .then((res) => {
                        this.post = res.data.post;
                        

                    })
    }
}

</script>