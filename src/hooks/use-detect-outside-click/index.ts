import { MutableRefObject, useEffect, useState } from 'react'

function useDetectOutsideClick<T = HTMLDivElement>(
  ref: MutableRefObject<T>,
  initialState: boolean
) {
  const [isActive, setIsActive] = useState(initialState)

  useEffect(() => {
    const onClick = () => {
      setIsActive(!isActive)
    }

    if (isActive) {
      window.addEventListener('click', onClick)
    }

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [isActive, ref])

  return [isActive, setIsActive] as const
}

export default useDetectOutsideClick
