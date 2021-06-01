import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

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

const Button = ({
  children,
  fullWidth = false,
  outlined = false,
  color = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      fullWidth={fullWidth}
      outlined={outlined}
      color={color}
      {...props}
    >
      {!!children && <span>{children}</span>}
    </S.Button>
  )
}

export default Button
