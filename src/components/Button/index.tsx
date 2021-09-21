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
  isLoading?: boolean
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    fullWidth = false,
    outlined = false,
    color = 'primary',
    isLoading = false,
    ...props
  },
  ref
) => {
  return (
    <S.Button
      fullWidth={fullWidth}
      outlined={outlined}
      color={color}
      isLoading={isLoading}
      ref={ref}
      {...props}
    >
      {!!children && !isLoading && <span>{children}</span>}
    </S.Button>
  )
}

export default forwardRef(Button)
