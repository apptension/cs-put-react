import api from '../services/api';

export const CHARACTERS_LIST_REQUEST = 'CHARACTERS_LIST_REQUEST';
export const CHARACTERS_LIST_SUCCESS = 'CHARACTERS_LIST_SUCCESS';
export const CHARACTERS_LIST_FAILURE = 'CHARACTERS_LIST_FAILURE';
export const CHARACTERS_LIST_SEARCH = 'CHARACTERS_LIST_SEARCH';

export function fetchCharacterList() {
  return (dispatch) => {
    dispatch({type: CHARACTERS_LIST_REQUEST});
    api.getCharacterList().then((characterList) => {
      dispatch({
        type: CHARACTERS_LIST_SUCCESS,
        payload: characterList
      })
    }, () => {
      dispatch({type: CHARACTERS_LIST_FAILURE});
    });
  }
}

export function searchCharacterList(searchText) {
  return {type: CHARACTERS_LIST_SEARCH, searchText};
}
