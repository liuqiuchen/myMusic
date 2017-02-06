<template>
    <div class="header-entry">
        <div class="entry-item">
            <i class="icon-entry icon-chunwan"></i>
            春晚
        </div>
        <div class="entry-item">
            <i class="icon-entry icon-music-list"></i>
            歌单
        </div>
        <div class="entry-item">
            <i class="icon-entry icon-person"></i>
            歌手
        </div>
        <div class="entry-item">
            <i class="icon-entry icon-my-music"></i>
            我唱的
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss">
    $rem: 75;
    .header-entry {
        width: 100%;
        height: 92rem/$rem;
        background: #ffffff;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .entry-item {
        width: 85rem/$rem;
        height: 92rem/$rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 18rem/$rem;
        color: #666666;
        i.icon-entry {
            display: inline-block;
            margin-bottom: 5rem/$rem;
        }
        i.icon-music-list {
            width: 39rem/$rem;
            height: 38rem/$rem;
            background: url("../assets/images/icons/icon-music-list.png") no-repeat center center;
            -webkit-background-size: contain;
            background-size: contain;
        }
        i.icon-chunwan {
            width: 39rem/$rem;
            height: 38rem/$rem;
            background: url("../assets/images/icons/icon-chunwan.png") no-repeat center center;
            -webkit-background-size: contain;
            background-size: contain;
        }
        i.icon-person {
            width: 39rem/$rem;
            height: 38rem/$rem;
            background: url("../assets/images/icons/icon-person.png") no-repeat center center;
            -webkit-background-size: contain;
            background-size: contain;
        }
        i.icon-my-music {
            width: 39rem/$rem;
            height: 38rem/$rem;
            background: url("../assets/images/icons/icon-my.png") no-repeat center center;
            -webkit-background-size: contain;
            background-size: contain;
        }
    }
</style>