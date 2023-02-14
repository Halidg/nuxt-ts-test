<template>
  <header class="header">
    <LayoutsContainer>
      <a class="header__title" @click="toMain">Test Task</a>
    </LayoutsContainer>
  </header>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    toMain() {
      this.$router.push('/')
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.header {
  width: 100%;
  position: fixed;
  background:var(--dark-1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 19px 0;
  z-index: 1000;

  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: var(--main-light);

    &:hover{
      cursor: pointer;
    }
  }
}
</style>
