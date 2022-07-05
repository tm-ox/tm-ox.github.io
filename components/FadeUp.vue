<template>
  <div
    class="origin"
    x-intersect.threshold.1="$el.classList.add('opacity-100', 'translate-y-0')"
    x-intersect:leave="$el.classList.remove('opacity-100', 'translate-y-0')"
  >
    <slot />
  </div>
</template>
