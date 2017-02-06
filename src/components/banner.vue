<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="img in bannerImage" :key="img.id">
                    <div class="banner-img" v-bind:style="{ backgroundImage: 'url('+ img +')' }"></div>
                </div>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import '../assets/lib/swiper-3.4.1.min.js';
    import '../assets/lib/swiper-3.4.1.min.css';

    export default {
        mounted () {
            this.bannerSwiper();
        },
        data () {
            return {
                bannerImage: [
                    './src/assets/images/banner1.jpg',
                    './src/assets/images/banner2.jpg',
                    './src/assets/images/banner3.jpg',
                    './src/assets/images/banner4.jpg'
                ]
            }
        },
        methods: {
            bannerSwiper () {
                let mySwiper = new Swiper ('.swiper-container', {
                    direction: 'horizontal',
                    loop: true,
                    // 分页器配置
                    pagination: '.swiper-pagination',
                    autoplay: 3000,
                    speed: 500,
                    autoplayDisableOnInteraction: false
                })
            }
        }
    }


</script>

<style lang="sass" rel="stylesheet/scss" scope>
    $rem: 75;
    .banner {
        width: 100%;
        height: 334rem/$rem;
        background: #f7f7f7;
    }
    .swiper-container,
    .swiper-wrapper,
    .swiper-slide {
        height: 334rem/$rem;
    }
    .swiper-pagination-bullet-active {
        background: rgba(217, 83, 79, .8);
    }
    .banner-img {
        width: 100%;
        height:334rem/$rem;
        background-repeat: no-repeat;
        background-position: center center;
        -webkit-background-size: cover;
        background-size: cover;
    }
</style>