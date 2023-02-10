<template>
  <SectionDetail :user="user" />
</template>

<script lang="ts">
import Vue from 'vue'
import { IUser } from '~/store/types'

export default Vue.extend({
  computed:{
    user(): IUser {
      return this.$store.getters['users/usersById'](this.$route.params.id)
    },
  },
})
</script>