<template>
  <Transition name="page">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Transition>
</template>

<script lang="ts">
export default {
  head() {
    return {
      title: "tm-ox",
      link: [
        {
          rel: "icon",
          type: "image/ico",
          href: `favicon.ico`,
        },
      ],
      script: [{}],
    };
  },
};
</script>
