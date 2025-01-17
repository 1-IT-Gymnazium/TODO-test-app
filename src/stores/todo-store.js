import { defineStore } from 'pinia';
import axios from 'axios';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  actions: {
    async fetchTodos() {
      const response = await axios.get('http://localhost:3000/todos');
      this.todos = response.data;
    },
    async addTodo(newTodo) {
      const response = await axios.post('http://localhost:3000/todos', newTodo);
      this.todos.push(response.data);
    },
    async removeTodo(id) {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    async updateTodo(updatedTodo) {
      await axios.put(`http://localhost:3000/todos/${updatedTodo.id}`, updatedTodo);
      const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        this.todos[index] = updatedTodo;
      }
    }
  }
});
