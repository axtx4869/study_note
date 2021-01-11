<template>
  <div class="py-6 w-4/5 m-auto grid gap-6 sm:w-full gr-temp-clm">
    <Card v-for="post in posts" :key="post.sys.id" :post="post" />
  </div>
</template>
<style></style>
<script>
import Card from "../../components/Card";
import client from "../../plugins/contentful.js";
export default {
  components: {
    Card
  },
  async asyncData({ params }) {
    const posts = await client.getEntries({
      content_type: "blogPost", // blogPostタイプの記事データを全取得
      query: params.keyword, // keywordパラメータをいずれかのフィールドに含む記事データのみを抽出
      order: "-sys.createdAt" //作成日時順に並べる
    });
    return {
      posts: posts.items // 取得したデータを配列postsに入れる
    };
  }
};
</script>
