import { rest } from 'msw'
import { LoginParams } from 'services/auth'

export const handlers = [
  rest.get('http://localhost:8080/users/me', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: null,
        provider: null,
        email: 'janedoe@email.com',
        username: 'janedoe',
        bio: null,
        profilePhoto: null,
        coverPhoto: null,
        phone: null,
        birthday: null
      })
    )
  }),
  rest.get('http://localhost:8080/validate', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        user: {
          email: 'janedoe@email.com',
          username: 'janedoe',
          name: null,
          profilePhoto: null
        }
      })
    )
  }),
  rest.post<LoginParams>('http://localhost:8080/login', (req, res, ctx) => {
    const { usernameOrEmail } = req.body

    if (usernameOrEmail === 'invalid_user') {
      return res(
        ctx.status(401),
        ctx.json({
          error: 'Unauthorized',
          message: 'Invalid crendentials',
          statusCode: 401
        })
      )
    }

    return res(
      ctx.status(200),
      ctx.json({
        user: {
          email: 'janedoe@email.com',
          username: 'janedoe',
          name: null,
          profilePhoto: null
        }
      })
    )
  }),
  rest.post('http://localhost:8080/logout', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Logged out'
      })
    )
  }),
  rest.post(
    'http://localhost:8080/confirm-account/valid-token',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          message: 'Account Successfully Activated!'
        })
      )
    }
  ),
  rest.post(
    'http://localhost:8080/confirm-account/bad-token',
    (req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({
          error: 'NotFound',
          message: 'Invalid confirmation token!',
          statusCode: 404
        })
      )
    }
  ),
  rest.post(
    'http://localhost:8080/confirm-account/server-error-token',
    (req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({
          error: 'ServerError',
          message: 'Any Error',
          statusCode: 404
        })
      )
    }
  )
]
