import test from 'ava'
import Reducer from '../reducers/auth'
import { signIn, signInFailed, signInSucceeded } from '../actions/auth'
import { initialState } from '../reducers/auth'

test('should handle ACTION_SIGNIN', async t => {
  t.deepEqual(Reducer(initialState, signIn('testuser', 'testpass')), {
    activeLogin: -1,
    isLoggingIn: 'testuser',
    loginError: null,
    logins: [],
  })
})

test('should handle ACTION_SIGNIN_FAILED', async t => {
  t.deepEqual(Reducer(initialState, signInFailed(new Error('you am teh lose'))), {
    activeLogin: -1,
    isLoggingIn: false,
    loginError: new Error('you am teh lose'),
    logins: [],
  })
})

test('should handle ACTION_SIGNIN_SUCCEEDED', async t => {
  t.deepEqual(Reducer(initialState, signInSucceeded({ createToken: { token: 'hai' } })), {
    activeLogin: 0,
    isLoggingIn: false,
    loginError: null,
    logins: [{ token: 'hai' }],
  })
})
