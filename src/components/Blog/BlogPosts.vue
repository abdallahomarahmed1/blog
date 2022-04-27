<template>
    <div class="post-box mb-5">
        <span class="post-views">{{views}}</span>
        <div class="post-title"><h3>{{title}}</h3></div>
        <span class="post-date">{{date}}</span>
        <p class="post-content">{{content |shorten(30, ' ....')}}</p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-auther">{{auther}}</span>
            </div>
            <div class="col-sm-6">
                <span class="post-cat">{{category | uppercase}}</span>
            </div>
        </div>
    </div>
</template>
<script>

export default({
    props: ['views','title', 'date','content','auther','category'],
    name: "post",
});
</script>
<style lang="scss" scoped>
.post-box {
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    .post-views {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: #4caf50;
        border-radius: 4px;
        padding: 1px 5px;
        color: #fff;
        text-align: center;
        font-weight: bold;
    }
    .post-date {
        display: block;
        padding: 0 0 5px;
        color: #888;
        font-size: 14px;
    }
    .post-content{
        line-height: 1.8;
        color: #666;
    }
    .post-auther {
        background-color: #41464b;
        padding: 6px 10px;
        border-radius: 4px;
        color: #fff;
    }
    .post-cat {
        background-color: #dc3545;
        padding: 6px 10px;
        border-radius: 4px;
        color: #fff;
    }
}
</style>