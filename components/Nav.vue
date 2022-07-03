<template>
  <nav>
    <ul class="flex items-end">
      <a href="#home">
        <h5>tm.ox</h5>
      </a>
      <li v-for="(item, $index) in items" :key="$index">
        <a
          @click="setUrlSection(item.section)"
          :href="item.link"
          :class="{ active: urlSection === item.link }"
          class="pl-[2px]"
          >{{ item.name }}</a
        >
      </li>
      <li class="font-light ml-auto">building..</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "_ hi",
          link: "#main",
          section: "hi",
        },
        {
          name: "_ work",
          link: "#work",
          section: "work",
        },
        {
          name: "_ contact",
          link: "#contact",
          section: "contact",
        },
      ],
    };
  },
};
</script>
