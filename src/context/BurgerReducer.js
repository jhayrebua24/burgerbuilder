import {
  ADD_BUILD,
  DELETE_BUILD,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  RESET_CART,
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
  case DELETE_BUILD:
    return {
      ...state,
      builds: state.builds.filter((build) => build.id !== payload.deletedId),
    }
  case ADD_TO_CART:
    return {
      ...state,
      builds: [
        ...state.builds.slice(0, state.builds.findIndex((build) => build.id === payload.id)),
        {
          ...state.builds[state.builds.findIndex((build) => build.id === payload.id)],
          onCart: state.builds[
            state.builds.findIndex((build) => build.id === payload.id)
          ].onCart + 1,
        },
        ...state.builds.slice(state.builds.findIndex((build) => build.id === payload.id) + 1),
      ],
    }
  case REMOVE_FROM_CART:
    return {
      ...state,
      builds: [
        ...state.builds.slice(0, state.builds.findIndex((build) => build.id === payload.id)),
        {
          ...state.builds[state.builds.findIndex((build) => build.id === payload.id)],
          onCart: payload.removeAll
            ? 0
            : state.builds[state.builds.findIndex((build) => build.id === payload.id)].onCart - 1,
        },
        ...state.builds.slice(state.builds.findIndex((build) => build.id === payload.id) + 1),
      ],
    }
  case RESET_CART:
    return {
      ...state,
      builds: state.builds.map((build) => ({ ...build, onCart: 0 })),
    }
  default:
    return state;
  }
}
export default reducer;
