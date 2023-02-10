import $api from '~/http'

export default class UserService {
  static async getData(page: number) {
    return await $api.get('/users', {
      params: {
        per_page: 6,
        page,
      }
    })
  }
}
