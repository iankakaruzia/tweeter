import { getStorageItem, removeStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return the item from localStorage', () => {
    window.localStorage.setItem(
      'TWEETER_user',
      JSON.stringify({ id: 1, username: 'any_username' })
    )

    expect(getStorageItem('user')).toStrictEqual({
      id: 1,
      username: 'any_username'
    })
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should add the item to localStorage', () => {
    setStorageItem('user', { id: 1, username: 'any_username' })

    expect(window.localStorage.getItem('TWEETER_user')).toStrictEqual(
      JSON.stringify({ id: 1, username: 'any_username' })
    )
  })
})

describe('removeStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should remove the item from localStorage', () => {
    window.localStorage.setItem(
      'TWEETER_user',
      JSON.stringify({ id: 1, username: 'any_username' })
    )

    removeStorageItem('user')

    expect(getStorageItem('user')).toStrictEqual({})
  })
})
