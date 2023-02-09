<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Container',
}
</script>

<style lang='scss'>
@import "~/styles/mixins.scss";
.container {
  width: 100%;
  max-width: 1440px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
</style>
