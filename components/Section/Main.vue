<template>
  <section class="main">
    <LayoutsContainer>
      <div class="main__block">
        <div class="main__action">
          <el-button class="main__btn" @click="change" type="primary" icon="el-icon-edit" circle></el-button>
          <el-button @click="clear" type="danger" icon="el-icon-delete" circle></el-button>
        </div>
        <div class="main__search">
          <el-input v-model.trim="name"  placeholder="Поиск по имени/фамилии"></el-input>
          <el-select class="main__select" v-model="email" placeholder="Поиск по email">
            <el-option
              v-for="item in users"
              :key="item.id"
              :value="item.email">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="main__content"  :class="{'main__horizontal' : changeStyle}">
        <UiCard v-for="item in filter"
          :key="item.id"
          :user="item"></UiCard>
      </div>
      <p class="main__text" v-show="notFound">Такого юзера с данным именем и email нет!</p>
      <div class="main__pagination">
        <el-pagination
         @current-change="handleCurrentChange"
          background
          layout="prev, pager, next"
          :total="20">
        </el-pagination>
      </div>
    </LayoutsContainer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { User } from '~/types/user/user-types'

export default Vue.extend({
  name: 'Main',
  mounted() {
    this.$store.dispatch('users/getUsers')
  },
  data() {
    return {
      name: '',
      email: '',
      changeStyle: false,
    }
  },
  methods: {
    handleCurrentChange(val: number) {
      this.$store.dispatch('users/getUsers', val)
    },
    clear():void {
      this.name = ''
      this.email = ''
    },
    change():void {
      this.changeStyle = !this.changeStyle
    }
  },
  computed: {
    users():[User] {
      return this.$store.getters['users/users'] || []
    },
    filter():User[] {
      let newArr: User[] = this.users
      newArr = newArr.filter((user) => {
        const fullName = `${user.first_name + user.last_name}`
        if (this.name && this.email) {
          return fullName.toLowerCase().includes(this.name.toLowerCase()) && user.email === this.email
        }
        if (this.name && fullName.toLowerCase().includes(this.name.toLowerCase())) {
          return user
        }
        if (user.email === this.email) {
          return user
        }
      })
      return this.name || this.email ? newArr : this.users
    },
    notFound():boolean {
      return !this.filter.length ? true : false
    },
  },
})
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.main {
  padding-top: 100px;
  padding-bottom: 42px;
  background: #1E1E1E;

  &__block {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
  }

  &__action {
    margin-top: 25px;
  }

  &__btn {
    @include tablets() {
      display: none;
    }

    @include phones() {
      display: none;
    }
  }

  &__search {
    display: flex;
    width: 40%;
    margin-top: 35px;
    margin-left: auto;

    @include phones() {
      width: 70%;
    }
  }

  &__select {
    margin-left: 15px;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 28px;
    grid-row-gap: 16px;
    margin-top: 50px;

    @include tablets() {
      grid-template-columns: repeat(2, 1fr);
    }

    @include phones() {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__horizontal {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;

    @include tablets() {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    @include phones() {
      display: grid;
      grid-column-gap: 28px;
      grid-row-gap: 16px;
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__text {
    font-size: 25px;
    text-align: center;
    color: #FFF;
    margin-top: 100px;
    margin-bottom: 125px;
  }

  &__pagination {
    margin-top: 35px;
  }
}
</style>
