<template>
  <section class="main">
    <LayoutsContainer>
      <div class="main__block">
        <div class="main__action">
          <el-button
            class="main__btn"
            type="primary"
            :icon="isHorizontal ? 'el-icon-menu' : 'el-icon-s-fold'"
            circle
            @click="onChangeStyle"
          />
        </div>

        <div class="main__search">
          <el-input v-model.trim="name" clearable placeholder="Поиск по имени/фамилии" />

          <el-select v-model="email" clearable class="main__select" placeholder="Поиск по email">
            <el-option
              v-for="item in users"
              :key="item.id"
              :value="item.email">
            </el-option>
          </el-select>

        </div>
      </div>

      <div class="main__content" :class="{'main__content_horizontal' : isHorizontal}">
        <UiCard v-for="user in filteredUsers"
          :key="user.id"
          :user="user"
          @click="toDetail"
        />
      </div>

      <p class="main__text" v-if="notFound">Такого юзера с данным именем и email нет!</p>

      <div class="main__pagination">
        <el-pagination
          :page-count="totalPages"
          background
          layout="prev, pager, next"
          @current-change="onCurrentChange"
        >
        </el-pagination>
      </div>

    </LayoutsContainer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { IUser } from '~/store/types'

export default Vue.extend({
  name: 'Main',

  props: {
    users: {
      type: Array as () => IUser[],
      required: true,
    },
    totalPages: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      name: '',
      email: '',
      isHorizontal: false,
    }
  },

  methods: {
    onCurrentChange(page: number) {
      this.clearInputs()
      this.$emit('on-current-change', page)
    },

    clearInputs() {
      this.name = ''
      this.email = ''
    },

    toDetail(id: string) {
      this.$router.push(`/user/${id}`)
    },

    onChangeStyle() {
      this.isHorizontal = !this.isHorizontal
    }
  },

  computed: {
    filteredUsers(): IUser[] {
      let newArr: IUser[] = this.users

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
      return (this.name || this.email) ? newArr : this.users
    },

    notFound(): boolean {
      return !this.filteredUsers.length
    },
  },
})
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.main {
  padding-top: 100px;
  padding-bottom: 42px;
  background: var(--main-positive-color);

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
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 28px;
    grid-row-gap: 16px;
    margin-top: 50px;

    @include tablets() {
      grid-template-columns: repeat(2, 1fr);
    }

    @include phones() {
      grid-template-columns: repeat(1, 1fr);
    }

    &_horizontal {
      display: flex;

      @include tablets() {
        display: grid;
        grid-column-gap: 28px;
        grid-row-gap: 16px;
        margin-top: 50px;
        grid-template-columns: repeat(2, 1fr);
      }

      @include phones() {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }

  &__text {
    font-size: 25px;
    text-align: center;
    color: var(--main-light);
    margin-top: 100px;
    margin-bottom: 125px;
  }

  &__pagination {
    margin-top: 35px;
  }
}
</style>
