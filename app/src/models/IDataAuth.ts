export interface IDataAuth {
  id: number ;
  login: string| null;
  isAuth: boolean;
  isLoading:boolean;
  error: string;
}
