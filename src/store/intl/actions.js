import { ACTION_SET_LANG } from './constants'

export const setLang = ({ lang }) => ({
  type: ACTION_SET_LANG,
  payload: { lang },
})
