<template>
  <div class="min-h-screen bg-hashnode-darkblue-950 text-white">
    <header class="bg-white/5 border-b border-white/10">
      <div class="container mx-auto flex justify-between items-center px-2 py-6">
        <h1>
          <a href="/" class="flex gap-4 items-center text-3xl font-medium">
            <img alt="Profile of Travis Horn" src="/profile.avif" class="w-10 h-10 rounded-full">
            Travis Horn
          </a>
        </h1>

        <SocialLinks />
      </div>
    </header>

    <article class="prose prose-invert md:prose-md lg:prose-lg xl:prose-xl mx-auto px-2 py-6">
      <slot />
    </article>
  </div>
</template>
