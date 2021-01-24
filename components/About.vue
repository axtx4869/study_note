<template>
  <div
    class="p-3 lg:mx-6 mx-auto my-6 lg:w-1/2 w-3/4 bg-blue-200 text-2xl font-fam-caveat transform lg:-rotate-3 stickey-shadow break-normal"
  >
    <!-- テープ -->
    <div class="bg-yellow-300 w-2/5 opacity-25 h-12 mg-tape"></div>
    <!-- テープここまで -->
    <div class="block sm:flex justify-center">
      <div class="flex sm:block justify-center">
        <!-- プロフィール画像 -->
        <div class="w-20 h-20">
          <img class="h-full m-auto" :src="profileImg" alt="プロフィール画像" />
        </div>
        <!-- プロフィール画像ここまで -->
        <!-- GitHub -->
        <div class="flex justify-center text-base">
          <a
            href="https://github.com/axtx4869"
            class="sm:static relative"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="sm:static absolute sm:inset-0 bottom-0">
              <fa-layers full-width class="fa-2x block mx-auto mb-1">
                <fa :icon="faGithub" />
              </fa-layers>
              GitHub
            </button>
          </a>
        </div>
        <!-- GitHubここまで -->
      </div>
      <!-- 紹介文 -->
      <div class="sm:m-0 -mt-3">
        <h1 class="font-bold underline line-color">
          {{ myName }}
        </h1>
        <p class="text-xl text-justify break-normal">
          {{ blogInfo }}
        </p>
      </div>
      <!-- 紹介文ここまで -->
    </div>
  </div>
</template>
<style>
.mg-tape {
  margin: -35px auto 10px 25%;
}
.stickey-shadow {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
}
.line-color {
  text-decoration-color: #cc7eb1;
}
</style>
<script>
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default {
  data() {
    return {
      myName: "Shota Furuno",
      blogInfo:
        "Welocome to my blog. I am Shota Furuno, the owner of this blog. This blog is about what I learn and myself. The posts are published on an irregular basis. New functions are going to be added sometime soon...",
      profileImg: require("~/assets/image/profile_image.webp")
    };
  },
  computed: {
    faGithub() {
      return faGithub;
    }
  }
};
</script>
