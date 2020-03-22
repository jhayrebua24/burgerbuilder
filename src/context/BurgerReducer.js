import {
  ADD_BUILD,
  DELETE_BUILD,
} from './actions';

const reducer = (state = {}, action) => {
  const { payload, type } = action;
  switch (type) {
  case ADD_BUILD:
    return {
      ...state,
      builds: [
        ...state.builds,
        payload.newBuild,
      ],
    }
  default:
    return state;
  }
}
export default reducer;
