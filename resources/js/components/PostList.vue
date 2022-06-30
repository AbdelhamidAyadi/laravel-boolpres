<template>
    <div class="container">
        <Pagination :pagination="pagination" @on-page-change="getPosts" />
        <div v-for="post in posts" :key="post.id" class="card text-center my-3">
            <div class="card-header">
                <h5>{{ post.title }}</h5>
            </div>
            <div class="card-body">
                <p class="card-text">{{ post.content }}</p>
                <router-link :to="{name:'PostDetails', params: { id: post.id}}" class="btn btn-primary">Details</router-link>
            </div>

        </div>
    </div>
</template>

<script>
    import Axios from 'axios'
    import Pagination from './Pagination.vue'

    export default {
        name: "PostList",
        data() {
            return {
                posts: [],
                pagination: {}
            }
        },
        components: {
            Pagination
        },
        mounted() {
          this.getPosts();
        },
        methods: {
            getPosts(page = 1) {
                Axios.get("http://127.0.0.1:8000/api/posts?page=" + page )
                    .then((res) => {
                        this.posts = res.data.posts.data;
                        const {
                            last_page,
                            current_page
                        } = res.data.posts;
                        this.pagination = {
                            last_page: last_page,
                            current_page: current_page

                        }

                    })
            }
        }

    }

</script>
