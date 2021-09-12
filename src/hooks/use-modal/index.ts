import { useState } from 'react'

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleModal = () => setIsVisible((prevIsVisible) => !prevIsVisible)

  return {
    isVisible,
    toggleModal
  }
}

export default useModal
