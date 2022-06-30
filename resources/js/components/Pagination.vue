<template>
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <a v-if="pagination.current_page > 1" class="page-link" @click="$emit('on-page-change', pagination.current_page - 1)" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li v-for="page in pagination.last_page" :key="page" @click="$emit('on-page-change', page)" class="page-item"><a class="page-link" href="#">{{ page }}</a></li>
                
                <li class="page-item">
                    <a v-show="pagination.current_page < pagination.last_page" class="page-link" @click="$emit('on-page-change', pagination.current_page + 1)"  href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>

export default{
    name:'Pagination',
    props: [
            'pagination'
        ]
}

</script>
