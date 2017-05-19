import test from 'ava'
import Reducer from '../reducers/intl'
import { initialState, setLang } from '../actions/intl'
import { ACTION_SET_LANG_FAILED, ACTION_SET_LANG_SUCCEEDED } from '../constants'

const defaultIntl = require('../intl/en.yaml')

test('should handle ACTION_SET_LANG', async t => {
  t.deepEqual(Reducer(initialState, setLang({ lang: 'pk' })), {
    lang: 'pk',
    error: null,
    intl: null,
  })
})

// :TODO: this needs fixing but it's not used yet so 'evs

/* test('should handle ACTION_SET_LANG_FAILED', async t => {
  t.deepEqual(Reducer(initialState, [{ type: ACTION_SET_LANG_FAILED, lang: 'fr', error: new Error('oh gnoes') }]), {
    lang: 'en',
    error: new Error('oh gnoes'),
    intl: defaultIntl,
  })
})

test('should handle ACTION_SET_LANG_SUCCEEDED', async t => {
  t.deepEqual(Reducer(initialState, [{ type: ACTION_SET_LANG_SUCCEEDED, lang: 'fr', intlData: { french: 'oui' } }]), {
    lang: 'fr',
    error: null,
    intl: { french: 'oui' },
  })
}) */
