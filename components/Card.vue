<template>
  <nuxt-link
    :to="'/post/' + post.fields.slug"
    class="xl:w-64 lg:w-56 w-10/12 mx-auto bg-white box-shadow hover:bg-blue-100"
  >
    <article class="lg:m-3">
      <div class="pl-3 pr-3 pt-3">
        <div
          class="mb-3 w-full h-64 bg-center bg-cover bg-height"
          :style="
            'background-image:url(' + post.fields.image.fields.file.url + ')'
          "
        ></div>
      </div>
      <div class="h-auto pl-4 pr-4 pb-4">
        <small class="text-gray-500">{{
          getFormattedDate(post.fields.date)
        }}</small>
        <br />
        <small class="block text-xs text-right underline light-blue"
          >#{{ post.fields.category.fields.name }}</small
        >
        <h3 class="font-bold py-2 font-fam-comic">{{ post.fields.title }}</h3>
      </div>
    </article>
  </nuxt-link>
</template>

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

<style>
.box-shadow {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.22);
}

.box-shadow:active {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.11);
  transform: translateY(2px);
}

.bg-height {
  height: 200px;
}

.light-blue {
  color: #0bd;
}
</style>
