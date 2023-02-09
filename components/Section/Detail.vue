<template>
  <section class="detail">
    <LayoutsContainer>
      <div class="detail__content">
        <div class="detail__left">
          <img class="detail__img" :src='user.avatar' alt="">
        </div>
        <div class="detail__right">
          <h2 class="detail__title">{{user.first_name}}</h2>
          <span class="detail__description">{{user.last_name}}</span>
        </div>
      </div>
    </LayoutsContainer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { User } from '~/types/user/user-types'

export default Vue.extend({
  computed:{
    user():User {
      const idToNumber = Number(this.$route.params.id)
      return this.$store.getters['users/usersById'](idToNumber)
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.detail {
  padding-top: 220px;
  background: #1E1E1E;
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
    color: #FFFFFF;;
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
    color: #FFFFFF;
  }

  &__subtitle {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    margin-top: 16px;
  }
}
</style>
