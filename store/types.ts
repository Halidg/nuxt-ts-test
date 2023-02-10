export interface IUser {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: { text: string, url: string};
}
