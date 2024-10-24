<template>
  <ContentDoc v-slot="{ doc }">
    <img :alt="`Cover image for a blog article titled '${doc.title}'`" :src="doc.cover" class="rounded-lg border border-white/10">
    <h1>{{ doc.title }}</h1>
    <ContentRenderer :value="doc" />
  </ContentDoc>
</template>
