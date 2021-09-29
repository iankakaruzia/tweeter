export const formatPhone = (phone: string) => {
  return phone.replace(/\D/g, '')
}

export const parseStringToPhone = (phone: string | null | undefined) => {
  if (!phone) return ''
  return phone.replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3')
}
