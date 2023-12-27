import {
  ADD_TODO,
  DELETE_TODO,
  FINISHED_TODO,
  NOT_FINISHED_TODO,
  UPDATE_TODO,
  UPDATE_TODO_STATUS,
} from "./todoTypes";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const finishedTodo = (id) => {
  return {
    type: FINISHED_TODO,
    payload: id,
  };
};

export const notfinishedTodo = (id) => {
  return {
    type: NOT_FINISHED_TODO,
    payload: id,
  };
};

export const updateTodo = (id, data) => {
  return {
    type: UPDATE_TODO,
    payload: { id, data },
  };
};

export const updateTodoStatus = (id) => {
  return {
    type: UPDATE_TODO_STATUS,
    payload: id,
  };
};
