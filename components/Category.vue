<template>
  <div class="w-48 lg:my-4 mx-auto hand-writing text-2xl">
    <nuxt-link :to="`category/${category.sys.id}`" :class="addColor()">
      {{ category.fields.name }}
    </nuxt-link>
  </div>
</template>
<style>
.button.category {
  display: block;
  text-decoration: none;
  padding: 0.5rem;
  background: #f7f7f7;
  font-weight: bold;
  margin-bottom: 1rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.22);
}

/* programming */
.button.category.blue {
  border-left: solid 6px #5bb1fc;
  color: #5bb1fc;
}

/* Chinese */
.button.category.green {
  border-left: solid 6px #58ad5a;
  color: #58ad5a;
}

/* Everyday Life */
.button.category.red {
  border-left: solid 6px #ff3c3c;
  color: #ff3c3c;
}

/* Others */
.button.category.yellow {
  border-left: solid 6px #efcc4c;
  color: #efcc4c;
}

.button.category:hover {
  text-decoration: underline;
  text-underline-position: under;
  transition: transform 0.3s ease-in-out;
  transform: scale(1.1);
}

.button.category:active {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.11);
  transform: translateY(2px);
}
</style>
<script>
export default {
  props: {
    category: {
      type: Object,
      require: true
    },
    categories: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      categoryId: this.category.sys.id
    };
  },
  methods: {
    /**
     * カテゴリに応じたclassを配列に付与する。
     * @return {array} - classList配列を返す
     */
    addColor() {
      //categoriesの各投稿のidを空の配列に追加
      const caregoryIds = [];
      for (let index = 0; index < this.categories.length; index++) {
        caregoryIds.push(this.categories[index].sys.id);
      }
      const classList = ["button", "category"];
      switch (this.categoryId) {
        //カテゴリがdevelopmentの場合
        case caregoryIds[0]:
          classList.push("blue");
          break;
        //カテゴリがchineseの場合
        case caregoryIds[1]:
          classList.push("green");
          break;
        //カテゴリがmyselfの場合
        case caregoryIds[2]:
          classList.push("red");
          break;
        //その他のカテゴリの場合
        default:
          classList.push("yellow");
          break;
      }
      return classList;
    }
  }
};
</script>
