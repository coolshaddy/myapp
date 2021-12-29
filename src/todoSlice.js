import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
    selectedTodos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todo.splice(action.payload, 1);
    },
    updateTodo: (state, action) => {
      const { index, title } = action.payload;
      if (index && state.todo[index]) {
        state.todo[index].title = title;
      }
    },
    selectTodo: (state, action) => {
      const { id } = action.payload;
      const index = state.todo.findIndex((x) => x.id === id);
      if (index !== -1) {
        const selectionIndex = state.selectedTodos.findIndex(
          (x) => x === index
        );
        if (selectionIndex === -1) {
          state.selectedTodos.push(selectionIndex);
        } else {
          state.selectedTodos.splice(selectionIndex, 1);
        }
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export const selectTodos = (state) => state.todo.todo;
export const selectSelectedTodos = (state) => state.todo.selectedTodos;

export default todoSlice.reducer;
