import { USER_RATE_ARTICLE, CURRENT_AVG_RATE } from '../actions/types';

const InitialState = {
  rating: { stars: 0 },
};

export default function rate(state = InitialState, action) {
  switch (action.type) {
    case USER_RATE_ARTICLE:
      return { ...state, val: action.val };
    case CURRENT_AVG_RATE:
      console.log('dkdkdk', action.payload.averageRating);
      return {
        ...state,
        stars: action.payload.averageRating,
      };
    default:
      return state;
  }
}
