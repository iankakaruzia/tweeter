import { render } from 'utils/test-util'

import { FormLink, FormWrapper } from '.'

describe('<AuthForm />', () => {
  it('should render the link', () => {
    const { container } = render(
      <FormWrapper>
        <FormLink>
          Some random <a href='#'>link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
.c0 form {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.c1 {
  font-size: 1.4rem;
  line-height: 1.9rem;
  -webkit-letter-spacing: -0.035em;
  -moz-letter-spacing: -0.035em;
  -ms-letter-spacing: -0.035em;
  letter-spacing: -0.035em;
  color: #828282;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  margin-top: 3rem;
}

.c1 a {
  color: #8db9f5;
}

.c1 a:hover {
  color: #a4c8f7;
}

<body>
  <div>
    <div
      class="c0"
    >
      <div
        class="c1"
      >
        Some random 
        <a
          href="#"
        >
          link
        </a>
      </div>
    </div>
  </div>
</body>
`)
  })
})
