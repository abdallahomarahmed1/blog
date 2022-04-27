<template>
  <div class="our-blog">
    <h1>{{PageName}}</h1>
    <p>{{PageDis}}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPosts v-for="post in posts" v-bind:key="post.id" :views="post.views" :title="post.title" :content="post.content" :auther="post.auther" :category="post.category"/>
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import JsonPosts from "../json/blog_posts";
export default {
  data: function(){
    return {
      PageName: "Blog",
      PageDis: "This is Blog Page",
      posts: JsonPosts,
    };
  },
  name: 'blog',
  components: {
    BlogPosts,
    BlogSidebar,
  },
};
</script>
