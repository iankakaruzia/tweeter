import { Https } from '@styled-icons/material-rounded'

import { FormWrapper } from 'components/AuthForm'
import TextField from 'components/TextField'
import Button from 'components/Button'

const ResetPasswordForm = () => {
  return (
    <FormWrapper>
      <form>
        <TextField placeholder='Password' type='password' icon={<Https />} />
        <TextField
          placeholder='Password Confirmation'
          type='password'
          icon={<Https />}
        />

        <Button>Reset Password</Button>
      </form>
    </FormWrapper>
  )
}

export default ResetPasswordForm
