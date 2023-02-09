<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title" @click="toMain">Test Task</h1>
    </div>
  </header>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    toMain():void {
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
  background:#292D32;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 19px 0;
  z-index: 1000;

  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;;
    &:hover{
      cursor: pointer;
    }
  }
}
</style>
