import { render } from 'utils/test-util'

import SocialMediaLogin from '.'

describe('<SocialMediaLogin />', () => {
  it('should render the social media login options', () => {
    const { container } = render(<SocialMediaLogin />)

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 {
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
        margin-bottom: 2rem;
      }

      .c1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        max-width: 23rem;
        width: 100%;
        -webkit-box-pack: space-around;
        -webkit-justify-content: space-around;
        -ms-flex-pack: space-around;
        justify-content: space-around;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
      }

      .c2 {
        border: 0;
        cursor: pointer;
        background: transparent;
        height: 4.3rem;
        width: 4.3rem;
        border-radius: 50%;
        -webkit-transition: opacity 0.2s;
        transition: opacity 0.2s;
      }

      .c2:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .c2:hover:not(:disabled) {
        opacity: 0.8;
      }

      <body>
        <div>
          <span
            class="c0"
          >
            or continue with these social profiles
          </span>
          <div
            class="c1"
          >
            <button
              aria-label="Login with Google"
              class="c2"
            >
              <img
                alt="Google"
                height="43"
                src="/img/Google.svg"
                width="43"
              />
            </button>
            <button
              aria-label="Login with Facebook"
              class="c2"
            >
              <img
                alt="Facebook"
                height="43"
                src="/img/Facebook.svg"
                width="43"
              />
            </button>
            <button
              aria-label="Login with Twitter"
              class="c2"
            >
              <img
                alt="Twitter"
                height="43"
                src="/img/Twitter.svg"
                width="43"
              />
            </button>
            <button
              aria-label="Login with Github"
              class="c2"
            >
              <img
                alt="Github"
                height="43"
                src="/img/Github.svg"
                width="43"
              />
            </button>
          </div>
        </div>
      </body>
    `)
  })
})
