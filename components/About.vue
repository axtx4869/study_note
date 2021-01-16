<template>
  <div
    class="p-3 lg:mx-6 mx-auto my-6 lg:w-1/2 w-3/4 bg-blue-200 text-2xl hand-writing transform md:-rotate-3 stickey-shadow break-normal"
  >
    <!-- テープ -->
    <div class="bg-yellow-300 w-2/5 opacity-25 h-12 mg-tape"></div>
    <!-- テープここまで -->
    <div class="">
      <div class="flex flex-col sm:flex-row">
        <div class="sm:block flex justify-center">
          <!-- プロフィール画像 -->
          <div
            class="bg-center bg-cover w-16 h-16 mr-4 rounded-full shadow photo"
            :style="{ backgroundImage: `url(${backgroundUrl})` }"
          ></div>
          <!-- プロフィール画像ここまで -->
          <!-- GitHub -->
          <div class="flex justify-center mt-5 text-base">
            <a
              href="https://github.com/axtx4869"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <fa-layers full-width class="fa-2x block mx-auto mb-1">
                  <fa :icon="faGithub" />
                </fa-layers>
                GitHub
              </button>
            </a>
          </div>
          <!-- GitHabここまで -->
        </div>
        <!-- 紹介文 -->
        <div class="sm:m-0 -mt-3">
          <h1 class="font-bold underline line-color">
            Shota Furuno
          </h1>
          <p class="text-xl text-justify break-normal">
            Welocome to my blog. This blog is about my everyday life and what I
            learn. In order to improve my English-writing skill, I'll try to
            write the posts in English, the category of which is "Everyday
            life".<br />
          </p>
        </div>
        <!-- 紹介文ここまで -->
      </div>
    </div>
  </div>
</template>
<style>
.photo {
  min-width: 4rem;
  min-height: 4rem;
}
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
      backgroundUrl: require("~/assets/image/profile.jpg")
    };
  },
  computed: {
    faGithub() {
      return faGithub;
    }
  }
};
</script>
