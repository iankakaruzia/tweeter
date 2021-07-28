import Link from 'next/link'
import { Email, Https, Person } from '@styled-icons/material-rounded'

import TextField from 'components/TextField'
import Button from 'components/Button'
import { FormLink, FormWrapper } from 'components/AuthForm'
import SocialMediaLogin from 'components/SocialMediaLogin'

const RegisterForm = () => {
  return (
    <FormWrapper>
      <form>
        <TextField placeholder='Email' type='email' icon={<Email />} />
        <TextField placeholder='Username' icon={<Person />} />
        <TextField placeholder='Password' type='password' icon={<Https />} />
        <TextField
          placeholder='Password Confirmation'
          type='password'
          icon={<Https />}
        />

        <Button>Start now</Button>

        <SocialMediaLogin />

        <FormLink>
          Already a member?{' '}
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default RegisterForm
