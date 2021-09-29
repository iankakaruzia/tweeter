export function date(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 10
  let value = e.currentTarget.value
  if (!value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)) {
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, '$1/$2')
    value = value.replace(/(\d{2})(\d)/, '$1/$2')
    value = value.replace(/(\d{4})$/, '$1')
    e.currentTarget.value = value
  }
  return e
}

export function phone(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 15
  let value = e.currentTarget.value
  if (!value.match(/^(?:\()\d{2}(?:\))\s\d{4,5}(?:-)\d{4}$/)) {
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, '($1) $2')
    value = value.replace(/(\d{4,5})(\d{4})$/, '$1-$2')
    e.currentTarget.value = value
  }
  return e
}
