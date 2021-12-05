import { useAppSelector } from './redux-use';
export const useAuth = () =>{
    const {} = useAppSelector(state=>state.authReducer)
}