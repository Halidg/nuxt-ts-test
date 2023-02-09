<template>
  <div class="card" @click="toDetail(user.id)">
    <div class="card__content">
      <img class="card__img" :src=user.avatar alt="">
      <h2 class="card__title">{{user.first_name}}</h2>
      <span class="card__description">{{user.last_name}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Card',
  props:{
    user: {
      type: Object
    },
  },
  methods: {
    toDetail(id:string) {
      this.$router.push(`/user/${id}`)
    }
  }
})
</script>

<style lang="scss" scoped>
 @import "@/styles/mixins.scss";

.card {
  background: #292D32;
  padding: 15px 25px;
  border-radius: 16px;
  transition: .2s;
  cursor: pointer;

  &:hover {
    box-shadow: 10px 10px 24px -4px rgba(112,43,254,0.61);

    @include phones() {
      box-shadow: none;
    }
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
    color: #FFFFFF;;
  }
  &__description {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 14px;
  }

}
</style>
