import axios from 'axios'

export default class UserService {
  static async getData(val:number) {
    return await axios.get(`https://reqres.in/api/users?page=${val}&per_page=6`)
  }
}
