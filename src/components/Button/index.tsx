import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  fullWidth?: boolean
  outlined?: boolean
  color?: 'primary' | 'gray'
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    fullWidth = false,
    outlined = false,
    color = 'primary',
    ...props
  },
  ref
) => {
  return (
    <S.Button
      fullWidth={fullWidth}
      outlined={outlined}
      color={color}
      ref={ref}
      {...props}
    >
      {!!children && <span>{children}</span>}
    </S.Button>
  )
}

export default forwardRef(Button)
