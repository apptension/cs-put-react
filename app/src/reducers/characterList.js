import {CHARACTERS_LIST_REQUEST, CHARACTERS_LIST_SUCCESS, CHARACTERS_LIST_SEARCH} from '../actions';

const initialState = {
  isLoading: false,
  filteredItems: [],
  allItems: [],
  searchText: ''
};

export default function charactersList(state = initialState, action = null) {
  switch (action.type) {
    case CHARACTERS_LIST_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case CHARACTERS_LIST_SUCCESS:
      const items = action.payload;
      return Object.assign({}, state, {
        allItems: items,
        items: items,
        isLoading: false
      });
    case CHARACTERS_LIST_SEARCH:
      const {searchText} = action;
      const filteredItems = state.allItems.filter((item) => {
        const name = item.name.toLowerCase();
        return !action.searchText.length || name.indexOf(searchText.toLocaleLowerCase()) !== -1;
      });
      return Object.assign({}, state, {
        searchText, items: filteredItems
      });
    default:
      return state;
  }
}
