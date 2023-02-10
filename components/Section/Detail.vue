<template>
  <section class="detail">
    <LayoutsContainer>
      <div class="detail__content">
        <div class="detail__left">
          <img class="detail__img" :src='user.avatar'>
        </div>

        <div class="detail__right">
          <h2 class="detail__title">{{ user.first_name }}</h2>

          <span class="detail__description">{{ user.last_name }}</span>
        </div>

      </div>
    </LayoutsContainer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { IUser } from '~/store/types'

export default Vue.extend({
  props: {
    user: {
      type: Object as () => IUser,
      required: true,
    }
  },
})
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.detail {
  padding-top: 220px;
  background: var(--main-positive-color);
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  @include tablets() {
    padding-bottom: 45px;
  }

  &__content {
    display: flex;
    @include tablets() {
      flex-direction: column;
    }

  }
  &__left {
    display: flex;
    flex-direction: column;
    margin-right: 81px;
    position: sticky;
  }

  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: var(--main-light);;
    margin-bottom: 24px;
  }

  &__img {
    width: 150px;
    border-radius: 8px;
    margin-bottom: 24px;
  }

  &__right {
    display: flex;
    flex-direction: column;
  }

  &__description {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: var(--main-light);
  }

  &__subtitle {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: var(--main-light);
    margin-top: 16px;
  }
}
</style>
