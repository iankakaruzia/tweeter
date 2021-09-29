export const formatStringToDate = (dateString: string) => {
  if (!dateString) return ''
  const dateArray = dateString.split('/')
  const year = dateArray[2]
  const month = dateArray[1]
  const day = dateArray[0]
  const formattedDate = new Date(`${year}/${month}/${day}`)
  return formattedDate
}

export const formatDateToString = (dateString: string | null | undefined) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}
