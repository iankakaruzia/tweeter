import { useState, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

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
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper fullWidth={fullWidth} disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type='text'
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          variant={variant}
          hasIcon={!!icon}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextInput
