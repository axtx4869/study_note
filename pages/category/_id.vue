<template>
  <div
    class="py-6 w-4/5 m-auto grid gap-6 sm:w-full gr-temp-clm justify-center"
  >
    <Card v-for="post in posts" :key="post.sys.id" :post="post" />
  </div>
</template>

<script>
import Card from "@/components/Card";
import client from "@/plugins/contentful.js";
export default {
  components: {
    Card
  },
  async asyncData({ params }) {
    const posts = await client.getEntries({
      content_type: "blogPost", // blogPostタイプの記事データを全取得
      "fields.category.sys.id": params.id, //カテゴリのID=URL内のidパラメータとなる記事を取得
      order: "-sys.createdAt" // 作成日時順に並べる
    });
    return {
      posts: posts.items // 取得したデータを配列postsに入れる
    };
  }
};
</script>
