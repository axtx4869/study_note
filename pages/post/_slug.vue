<template>
  <section>
    <div class="bg-yellow-300 w-2/5 opacity-25 h-12 mg-tape-slug"></div>
    <div class="bg-white m-4 py-6 lg:px-16 md:px-12 px-6 shadow">
      <div
        class="md:h-64 sm:h-56 h-40 w-full sm:my-6 my-3 mx-auto object-cover"
      >
        <img
          :src="post.fields.image.fields.file.url"
          alt="投稿画像"
          class="h-full m-auto sm:object-cover object-contain"
        />
      </div>
      <div class="">
        <h1 class="text-center md:text-4xl text-2xl font-fam-comic">
          {{ post.fields.title }}
        </h1>
        <time class="text-gray-600 block text-right py-2">{{
          getFormattedDate(post.fields.date)
        }}</time>
        <div class="content" v-html="$md.render(post.fields.content)"></div>
      </div>
    </div>
  </section>
</template>
<style>
.content {
  font-family: "Comic Neue", sans-serif;
}

.content h1 {
  font-size: 1.6rem;
  margin: 25px 0;
  border-bottom: 2px solid #000;
  padding-left: 0.5rem;
}
.content h2 {
  font-size: 1.45rem;
  margin: 20px 0;
  border-bottom: 1px solid #eee;
}
.content h3 {
  font-size: 1.3rem;
  margin: 15px 0;
  text-decoration: underline;
  text-underline-position: under;
}

.content p {
  font-size: 1.2rem;
  line-height: 1.5rem;
}

.content a {
  color: blue;
}

.content ol,
ul {
  padding-left: 1rem;
}

.content li {
  list-style: disc;
}

.content li:first-line {
  margin-left: 1rem;
}

.content code {
  padding: 2px;
  overflow: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.content pre {
  background: #32375d;
  color: #fff;
  padding: 5px;
}

.shadow {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.22);
}

.mg-tape-slug {
  margin: 0 auto -50px 30%;
}
</style>

<script>
import client from "@/plugins/contentful.js";
export default {
  asyncData({ params }) {
    return Promise.all([
      client.getEntries({
        content_type: "blogPost", // blogPostタイプの記事データを全取得
        "fields.slug": params.slug // 取得対象をslugフィールドがURL内のslugパラメータと等しいものに限定
      })
    ])
      .then(([posts]) => {
        return {
          post: posts.items[0] // 取得した配列データの１つ目を変数postに代入
        };
      })
      .catch(console.error);
  },
  methods: {
    /**
     * 日付を年月日形式で表示させる
     * @param {number} - 投稿日時
     * @return {string} - 年月日形式で返す
     */
    getFormattedDate(date) {
      const originDate = new Date(date);
      const year = originDate.getFullYear();
      const month = originDate.getMonth() + 1;
      const day = originDate.getDate();
      return `${year}年${month}月${day}日`;
    }
  }
};
</script>
