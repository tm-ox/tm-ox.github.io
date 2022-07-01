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
      title: "tm.ox",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: `favicon.png`,
        },
      ],
      script: [{}],
    };
  },
};
</script>
