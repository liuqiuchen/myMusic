<template>
    <div>
        <div class="hot-product">
            <h1 class="hot-product-title">热门作品</h1>
            <div class="hot-product-show">
                <div class="hot-product-item" v-for="item in hotproduct" :key="item.id">
                    <div class="hot-product-img" v-bind:style="{backgroundImage: 'url(' + item.img + ')'}"></div>
                    <div class="hot-product-name" v-text="item.name"></div>
                    <div class="hot-product-author">
                        <span v-text="item.author"></span>
                    </div>
                </div>
            </div>
        </div>
        <p class="introduction">
            目前只有这一个页面，是用vue2.0的ES6组件模式开发的。
            浏览器和手机均可查看。
            不要用过老版本的手机或者浏览器，因为有的原生不支持vue这种流行框架。
        </p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                hotproduct: [
                    {
                        img: './src/assets/images/product1.jpg',
                        name: '追风筝的孩子',
                        author: '林俊杰'
                    },
                    {
                        img: './src/assets/images/product2.jpg',
                        name: '崇拜',
                        author: '林俊杰'
                    },
                    {
                        img: './src/assets/images/product3.jpg',
                        name: '天赋',
                        author: '唐嫣、罗晋'
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    $rem: 75;
    .hot-product {
        width: 100%;
        height: auto;
        padding-bottom: 15rem/$rem;
        background: #ffffff;
        margin-top: 25rem/$rem;
    }
    h1.hot-product-title {
        font-size: 28rem/$rem;
        font-weight: normal;
        color: #333333;
        margin: 0 0 15rem/$rem 25rem/$rem;
        padding-top: 20rem/$rem;
    }
    .hot-product-img {
        width: 200rem/$rem;
        height: 200rem/$rem;
        background: #cccccc;
        background-repeat:no-repeat;
        background-position: center center;
        -webkit-background-size: cover;
        background-size: cover;
        border: 1px solid #f7f7f7;
    }
    .hot-product-show {
        width: 700rem/$rem;
        margin: 0 25rem/$rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .hot-product-author {
            height: 18rem/$rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            span {
                color: #666666;
                font-size: 14rem/$rem;
            }
        }
        .hot-product-name {
            width: 200rem/$rem;
            overflow: hidden;
            -ms-text-overflow: ellipsis;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            white-space:nowrap;
            font-size: 18rem/$rem;
            color: #000;
            margin: 8rem/$rem 0 5rem/$rem 0;
        }
        i.icon-play {
            width: 17rem/$rem;
            height: 17rem/$rem;
            display: inline-block;
            background: url("../assets/images/icons/icon-play.png") no-repeat center center;
            -webkit-background-size: contain;
            background-size:contain;
            margin-right: 5rem/$rem;
        }
        .watch-num {
            color: #666666;
        }
    }
    .introduction {
        text-align: center;color: #666;font-size: 1.2rem/$rem;
        background: #f7f7f7;
        padding:25rem/$rem;
    }
</style>