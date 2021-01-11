<template>
  <input
    type="text"
    placeholder="Search for posts"
    class="bg-white m-auto p-2 text-xs rounded w-full focus:outline-none search-shadow"
    v-model="keyword"
    @keypress.enter="$router.push('/search/' + keyword)"
  />
</template>
<style>
.search-shadow:focus {
  box-shadow: 0px 0px 10px 0.2px #1253a4;
}
</style>
<script>
export default {
  data() {
    return {
      keyword: ""
    };
  }
};
</script>
