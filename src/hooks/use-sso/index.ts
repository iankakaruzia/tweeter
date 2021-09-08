import { useAuth } from 'hooks/use-auth'

const useSSO = () => {
  const { ssoLogin } = useAuth()

  const redirectToSSO = async (uri: string) => {
    let timer: NodeJS.Timeout | null = null
    const url = `http://localhost:8080/${uri}`
    const newWindow = window.open(url, '_blank', 'width=600,height=700')

    if (newWindow) {
      timer = setInterval(async () => {
        if (newWindow.closed) {
          await ssoLogin()
          if (timer) clearInterval(timer)
        }
      }, 500)
    }
  }

  return { redirectToSSO }
}

export default useSSO
