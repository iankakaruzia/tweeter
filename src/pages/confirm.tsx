import Auth from 'templates/Auth'
import ConfirmAccountForm from 'components/ConfirmAccountForm'
import { GetServerSidePropsContext } from 'next'
import { publicRoutes } from 'utils/routes'

export default function ConfirmAccount() {
  return (
    <Auth title='Confirm your Account'>
      <ConfirmAccountForm />
    </Auth>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  await publicRoutes(context)

  return {
    props: {}
  }
}
