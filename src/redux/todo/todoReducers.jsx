import {
  ADD_TODO,
  DELETE_TODO,
  FINISHED_TODO,
  NOT_FINISHED_TODO,
  UPDATE_TODO,
  UPDATE_TODO_STATUS,
} from "./todoTypes";

const initalState = {
  data: [],
  updateState: 0,
  no: 1,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        data: [
          ...state.data,
          { id: state.no, todo: action.payload, status: 1 },
        ],
        no: state.no + 1,
      };

    case FINISHED_TODO:
      return {
        ...state,
        data: state.data.map((item) =>
          item.id == action.payload ? { ...item, status: 0 } : item
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        data: state.data.filter((item) => item.id != action.payload),
      };

    case NOT_FINISHED_TODO:
      return {
        ...state,
        data: state.data.map((item) =>
          item.id == action.payload ? { ...item, status: 1 } : item
        ),
      };

    case UPDATE_TODO:
      return {
        ...state,
        data: state.data.map((item) =>
          item.id == action.payload.id
            ? { ...item, todo: action.payload.data }
            : item
        ),
        updateState: 0,
      };

    case UPDATE_TODO_STATUS:
      return {
        ...state,
        updateState: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
