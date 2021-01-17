<template>
  <div>
    <div class="flex lg:flex-row flex-col">
      <!-- 紹介文 -->
      <about />
      <!-- カテゴリー -->
      <aside class="lg:ml-auto lg:mr-12 mx-auto">
        <category
          :categories="categories"
          v-for="(category, index) in categories"
          :key="index"
          :category="category"
        />
      </aside>
    </div>
    <div class="w-48 m-auto p-3">
      <!-- 検索フォーム -->
      <search />
    </div>
    <div
      class="py-6 w-4/5 m-auto grid gap-6 sm:w-full gr-temp-clm  justify-center"
    >
      <!-- 投稿 -->
      <card v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </div>
</template>
<style>
.gr-temp-clm {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.hand-writing {
  font-family: Caveat, sans-serif;
}
</style>

<script>
import About from "@/components/About.vue";
import Category from "@/components/Category.vue";
import Search from "@/components/Search.vue";
import Card from "@/components/Card.vue";
import client from "@/plugins/contentful.js";
export default {
  data() {
    return {
      posts: "",
      categories: ""
    };
  },
  components: {
    About,
    Category,
    Card
  },
  async asyncData({ env }) {
    const posts = await client.getEntries({
      content_type: "blogPost", // blogPostタイプの記事データを全取得
      order: "-sys.createdAt" //　降順
    });
    const categories = await client.getEntries({
      content_type: "category", // categoryタイプの記事データを全取得
      order: "sys.createdAt" // 昇順
    });
    return {
      posts: posts.items, // 取得したデータを配列postsに入れる
      categories: categories.items // 取得したデータを配列categoriesに入れる
    };
  }
};
</script>
