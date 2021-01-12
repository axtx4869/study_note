<template>
  <div>
    <div class="bg-yellow-300 w-2/5 opacity-25 h-12 mg-tape-slug"></div>
    <div class="bg-white m-4 py-6 sm:px-20 px-3 shadow">
      <div
        class="sm:w-11/12 sm:h-64 h-32 my-6 mx-auto bg-contain bg-center bg-no-repeat"
        :style="
          'background-image: url(' + post.fields.image.fields.file.url + ')'
        "
      ></div>
      <div class="">
        <h1 class="text-center text-4xl">
          {{ post.fields.title }}
        </h1>
        <small class="text-gray-500 block text-right">{{
          getFormattedDate(post.fields.date)
        }}</small>
        <div class="content" v-html="$md.render(post.fields.content)"></div>
      </div>
    </div>
  </div>
</template>

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

<style>
.content h1 {
  font-weight: bold;
  font-size: 1.8rem;
  margin: 25px 0;
  border-bottom: 2px solid #000;
  padding-left: 0.5rem;
}
.content h2 {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 20px 0;
  border-bottom: 1px solid #eee;
}
.content h3 {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 15px 0;
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
  background: #eee;
  padding: 2px;
}
.content pre code {
  background: none;
  padding: 0;
}
.content pre {
  background: #000;
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
