<template>
    <div>
        <!--<h1 v-if="htmlSize == 'pc'">{{htmlSize}}</h1>-->
        <comp-header></comp-header>
        <comp-banner></comp-banner>
        <comp-header-entry></comp-header-entry>
        <comp-hot-live></comp-hot-live>
        <comp-hot-product></comp-hot-product>
    </div>
</template>

<script>
    import './config/response';
    import './sass/app.scss';
    import CompHeader from './components/header.vue';
    import CompBanner from './components/banner.vue';
    import CompHeaderEntry from './components/headerEntry.vue';
    import CompHotLive from './components/hotLive.vue';
    import CompHotProduct from './components/hotProduct.vue';

    export default {
        components: {
            CompHeader,
            CompBanner,
            CompHeaderEntry,
            CompHotLive,
            CompHotProduct
        },
        data () {
            return {
                htmlSize: window.size
            }
        }
    }
</script>

