import { ReactNode } from 'react'
import { IconType } from 'react-icons'

export interface ILinkItem{
    path:string,
    _target?:any,
    children:string|IconType|ReactNode,
}
