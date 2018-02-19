const FETCHING_FEEDBACKS = 'FETCHING_FEEDBACKS';
const FETCHING_FEEDBACKS_FAILURE = 'FETCHING_FEEDBACKS_FAILURE';
const FETCHING_FEEDBACKS_SUCCESS = 'FETCHING_FEEDBACKS_SUCCESS';

function fetchingFeedbacks() {
  return {
    type: FETCHING_FEEDBACKS,
  };
}

function fetchingFeedbacksFailure(error) {
  console.warn(error); // eslint-disable-line
  return {
    type: FETCHING_FEEDBACKS_FAILURE,
    error: 'Error fetching feedbacks.',
  };
}

export function fetchingFeedbacksSuccess(data) {
  return {
    type: FETCHING_FEEDBACKS_SUCCESS,
    feedbacks: data,
  }
}

const initialState = {
  isFetching: true,
  error: '',
  feedbacks: [],
};

export default function feedbacks(state = initialState, action) {
  switch (action.type) {
    case FETCHING_FEEDBACKS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_FEEDBACKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case FETCHING_FEEDBACKS_SUCCESS:
      return {

      };
    default:
      return state;
  }
}