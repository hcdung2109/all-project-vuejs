<template>
    <div class="container-fluid">
        <div class="row">
            <Header></Header>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <p>sidebar</p>
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
    components: {
        Header
    },
    setup() {
        
    },
}
</script>
