import Joi from 'joi'

const authFieldValidations = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  username: Joi.string().min(2).max(20).required(),
  usernameOrEmail: Joi.string().min(2).required(),
  currentPassword: Joi.string().min(8).max(20).required(),
  password: Joi.string().min(8).max(20).required(),
  passwordConfirmation: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'confirm password does not match with password' })
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

type LoginValues = {
  usernameOrEmail: string
  password: string
}

export function loginValidate(values: LoginValues) {
  const { usernameOrEmail, password } = authFieldValidations

  const schema = Joi.object({ usernameOrEmail, password })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type RegisterValues = {
  username: string
  email: string
  password: string
  passwordConfirmation: string
}

export function registerValidate(values: RegisterValues) {
  const { username, email, password, passwordConfirmation } =
    authFieldValidations

  const schema = Joi.object({ username, email, password, passwordConfirmation })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ForgotPasswordValues = {
  email: string
}

export function forgotPasswordValidate(values: ForgotPasswordValues) {
  const { email } = authFieldValidations

  const schema = Joi.object({ email })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ResetPasswordValues = {
  password: string
  passwordConfirmation: string
}

export function resetPasswordValidate(values: ResetPasswordValues) {
  const { password, passwordConfirmation } = authFieldValidations

  const schema = Joi.object({ password, passwordConfirmation })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type UpdateCurrentPasswordValues = {
  currentPassword: string
  password: string
  passwordConfirmation: string
}

export function updateCurrentPasswordValidate(
  values: UpdateCurrentPasswordValues
) {
  const { currentPassword, password, passwordConfirmation } =
    authFieldValidations

  const schema = Joi.object({ currentPassword, password, passwordConfirmation })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type UpdateUsernameValues = {
  username: string
}

export function updateUsernameValidate(values: UpdateUsernameValues) {
  const { username } = authFieldValidations

  const schema = Joi.object({ username })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type UpdateEmailValues = {
  email: string
}

export function updateEmailValidate(values: UpdateEmailValues) {
  const { email } = authFieldValidations

  const schema = Joi.object({ email })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
