<template>
  <nav>
    <ul class="flex items-end">
      <a href="#home">
        <h5>TM.OX</h5>
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
          name: " _ HI",
          link: "#main",
          section: "hi",
        },
        {
          name: " _ WORK",
          link: "#work",
          section: "work",
        },
        {
          name: " _ CONTACT",
          link: "#contact",
          section: "contact",
        },
      ],
    };
  },
};
</script>
