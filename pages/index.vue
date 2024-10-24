<script setup>
definePageMeta({
  layout: false,
});

useHead({
  title: "Travis Horn"
})
</script>

<template>
  <div class="min-h-screen bg-hashnode-darkblue-950 text-white">
    <div class="bg-white/5 border-b border-white/10">
      <div class="max-w-xl mx-auto px-2 py-6 text-center flex flex-col gap-5 items-center">
        <img alt="Profile of Travis Horn" src="/profile.avif" class="w-28 h-28 rounded-full">

        <h1 class="text-3xl font-medium">Travis Horn</h1>

        <SocialLinks />

        <p class="max-w-xl">Data Scientist & Web Developer. I have a passion for discovering and working with cutting-edge technology. I enjoy collaborating with others to solve problems.</p>
      </div>
    </div>

    <main class="max-w-3xl mx-auto px-2 py-32">
      <div class="flex flex-col gap-16">
        <ContentList :query="{ limit: 6, sort: [{ datePublished: -1 }] }" v-slot="{ list }">
          <a v-for="article in list" :key="article._path" :href="article._path" class="md:flex gap-2 items-start">
            <img :alt="`Cover image for a blog article titled '${article.title}'`" :src="article.cover" class="object-scale-down mx-auto md:order-last mb-5 md:mb-0 md:w-72 rounded-md border border-white/10">
            <div class="flex flex-col gap-2">
              <h2 class="text-3xl font-bold">{{ article.title }}</h2>
              <div class="text-white/50">{{ new Date(article.datePublished).toLocaleDateString() }}</div>
              <p class="line-clamp-3 text-white/70 text-lg">{{ article.description }}</p>
            </div>
          </a>
        </ContentList>
      </div>
    </main>
  </div>
</template>
