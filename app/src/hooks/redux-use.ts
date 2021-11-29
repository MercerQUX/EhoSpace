import { AppDispatch } from './../redux/redux-store';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/redux-store"


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;