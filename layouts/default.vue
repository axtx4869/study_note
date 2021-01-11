<template>
  <div class="">
    <section class="header-bg">
      <header>
        <Header />
      </header>
    </section>
    <section class="bg-gray-300 note-bg">
      <div class="m-auto container">
        <main class="min-h-screen py-6">
          <nuxt />
        </main>
      </div>
    </section>
    <section class="bg-gray-500">
      <footer class="flex justify-center">
        <Footer />
      </footer>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
.header-bg {
  background-color: #59b9c6;
}

.note-bg {
  background-image: linear-gradient(#cad7e0 1px, rgba(0 0 0 / 0) 0),
    linear-gradient(90deg, #cad7e0 1px, rgba(0 0 0 / 0) 0);
  background-size: 20px 20px;
}
</style>
