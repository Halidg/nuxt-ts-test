<template>
  <SectionMain
    :users="users"
    :total-pages="totalPages"
    @on-current-change="onCurrentChange"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { IUser } from '~/store/types'

export default Vue.extend({
  mounted() {
    this.$store.dispatch('users/getUsers')
  },

  methods: {
    onCurrentChange(page: number) {
      this.$store.dispatch('users/getUsers', page)
    },
  },

  computed: {
    users(): IUser[] {
      return this.$store.getters['users/users'] || []
    },

    totalPages(): number {
      return this.$store.getters['users/totalPages']
    },
  },
})
</script>