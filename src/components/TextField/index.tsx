import {
  useState,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  HTMLInputTypeAttribute
} from 'react'
import { Visibility, VisibilityOff } from '@styled-icons/material-rounded'

import * as S from './styles'

export type TextInputVariant = 'primary' | 'secondary'

export type TextInputTypes =
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  disabled?: boolean
  error?: string
  variant?: TextInputVariant
  as?: React.ElementType
  fullWidth?: boolean
  type?: HTMLInputTypeAttribute | undefined
} & TextInputTypes

const TextInput = ({
  icon,
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  onInputChange,
  variant = 'primary',
  fullWidth = false,
  type = 'text',
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  const getInputType = () => {
    if (!isPassword) {
      return type
    }

    return showPassword ? 'text' : 'password'
  }

  const togglePasswordVisibiliy = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword)

  return (
    <S.Wrapper fullWidth={fullWidth} disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          variant={variant}
          hasIcon={!!icon}
          type={getInputType()}
          {...(label ? { id: name } : {})}
          {...props}
        />
        {isPassword && (
          <S.PasswordIcon
            aria-label={showPassword ? 'hide password' : 'reveal password'}
            onClick={togglePasswordVisibiliy}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </S.PasswordIcon>
        )}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextInput
