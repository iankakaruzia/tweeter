import { rest } from 'msw'

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
  })
]
