<template>
  <div class="card" @click="$emit('click', user.id)">
    <div class="card__content">
      <img class="card__img" :src=user.avatar>

      <h2 class="card__title">{{ user.first_name }}</h2>

      <span class="card__description">{{ user.last_name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IUser } from '~/store/types'

export default Vue.extend({
  name: 'Card',

  props:{
    user: {
      type: Object as () => IUser,
    },
  },
})
</script>

<style lang="scss" scoped>
 @import "@/styles/mixins.scss";

.card {
  width: 100%;
  background: var(--dark-1);
  padding: 15px 25px;
  border-radius: 35px;
  transition: .2s;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 5px 20px -4px rgba(112,43,254,0.61);
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__img {
    max-width: 30%;
    border-radius: 35px;
  }

  &__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    padding-top: 12px;
    color: var(--main-light);;
  }

  &__description {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: var(--main-light);
    overflow: hidden;
    margin-bottom: 14px;
  }
}
</style>
