<template>
    <div class="hot-live">
        <h1 class="hot-live-title">热门直播 <span class="hot-live-more">全部&nbsp;></span></h1>
        <div class="hot-live-show">
            <div class="hot-live-item" v-for="item in hotLive" :key="item.id">
                <div class="hot-live-img" v-bind:style="{backgroundImage: 'url(' + item.img + ')'}"></div>
                <div class="hot-live-name" v-text="item.name"></div>
                <div class="hot-live-play-count">
                    <i class="icon-play"></i>
                    <span v-text="item.watchNum"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                hotLive: [
                    {
                        img: './src/assets/images/live1.jpg',
                        name: '惊鸿一面',
                        watchNum: 585
                    },
                    {
                        img: './src/assets/images/live2.jpg',
                        name: '百鬼夜行特曼（念白念白念白念白)',
                        watchNum: 1854
                    },
                    {
                        img: './src/assets/images/live3.jpg',
                        name: '脑内革命女孩',
                        watchNum: 23
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    $rem: 75;
    .hot-live {
        width: 100%;
        height: auto;
        padding-bottom: 15rem/$rem;
        background: #ffffff;
        margin-top: 25rem/$rem;
    }
    h1.hot-live-title {
        font-size: 28rem/$rem;
        font-weight: normal;
        color: #333333;
        margin: 0 0 15rem/$rem 25rem/$rem;
        padding-top: 20rem/$rem;
        .hot-live-more {
            float: right;
            margin-right: 25rem/$rem;
            font-size: 18rem/$rem;
            color: #666666;
        }
    }
    .hot-live-img {
        width: 200rem/$rem;
        height: 200rem/$rem;
        background: #cccccc;
        background-repeat:no-repeat;
        background-position: center center;
        -webkit-background-size: cover;
        background-size: cover;
        border: 1px solid #f7f7f7;
    }
    .hot-live-show {
        width: 700rem/$rem;
        margin: 0 25rem/$rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .hot-live-play-count {
            height: 18rem/$rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            span {
                color: #666666;
                font-size: 14rem/$rem;
            }
        }
        .hot-live-name {
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
</style>