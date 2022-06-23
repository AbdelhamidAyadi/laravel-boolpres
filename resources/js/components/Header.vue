<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light px-5 mb-5">
            <router-link class="navbar-brand" to="/">Navbar</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="aboutus">About Us</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin">Admin</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </header>
</template>
<script>
    export default {
        name: 'Header'

    }

</script>
