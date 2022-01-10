import { ReactNode } from 'react'
import { IconType } from 'react-icons'

export interface ILinkItem{
    href:string,
    _target?:any,
    path:string,
    children:string|IconType|ReactNode,
}
