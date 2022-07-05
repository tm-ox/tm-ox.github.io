<template>
  <nav>
    <ul class="flex items-end">
      <a href="#home">
        <h5>tm.ox</h5>
      </a>
      <li v-for="(item, $index) in items" :key="$index">
        <a :href="item.link" class="pl-1">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: " _ hi",
          link: "#main",
          section: "hi",
        },
        {
          name: " _ work",
          link: "#work",
          section: "work",
        },
        {
          name: " _ contact",
          link: "#contact",
          section: "contact",
        },
      ],
    };
  },
};
</script>
