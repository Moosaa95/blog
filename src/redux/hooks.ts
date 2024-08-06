import {useSelector, useDispatch} from "react-redux"
import {RootState, AppDispatch} from "@/redux/app/store"
import {TypedUseSelectorHook} from "react-redux"


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector