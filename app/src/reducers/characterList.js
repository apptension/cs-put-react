import {CHARACTERS_LIST_REQUEST, CHARACTERS_LIST_SUCCESS, CHARACTERS_LIST_SEARCH} from '../actions';

const initialState = {
  isLoading: false,
  filteredItems: [],
  allItems: [],
  query: ''
};

export default function charactersList(state = initialState, action = null) {
  switch (action.type) {
    case CHARACTERS_LIST_REQUEST:
      return state;
    case CHARACTERS_LIST_SUCCESS:
      return state;
    case CHARACTERS_LIST_SEARCH:
      return state;
    default:
      return state;
  }
}
