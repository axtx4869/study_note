<template>
  <nuxt-link
    :to="'/post/' + post.fields.slug"
    class="xl:w-64 lg:w-56 w-10/12 mx-auto bg-white box-shadow hover:bg-blue-100"
    aria-label="{description}"
  >
    <article class="m-3">
      <div class="h-40">
        <img
          :src="post.fields.image.fields.file.url"
          alt="投稿画像"
          class="h-40 w-full m-auto object-cover"
        />
      </div>
      <div class="h-auto p-4">
        <time class="text-gray-600">{{
          getFormattedDate(post.fields.date)
        }}</time>
        <br />
        <small class="block text-xs text-right underline my-3 tag-color"
          >#{{ post.fields.category.fields.name }}</small
        >
        <strong class="font-bold py-4 font-fam-comic">
          {{ post.fields.title }}
        </strong>
      </div>
    </article>
  </nuxt-link>
</template>
<style>
.box-shadow {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.22);
}

.box-shadow:active {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.11);
  transform: translateY(2px);
}

.tag-color {
  color: royalblue;
}
</style>

<script>
export default {
  props: {
    post: {
      type: Object,
      require: true
    }
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
