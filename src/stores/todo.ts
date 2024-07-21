import { defineStore } from "pinia"
interface todoItem{
  item: string
  id: number
  completed: boolean
}

export const useStore = defineStore("todoList", {
  state: () => ({
      todoList: [] as todoItem[],
      id: 0,
      completed: false
    }),

    actions: {
      addTodo(item: string) {
        this.todoList.push({item, id: this.id++, completed: false})
      },
      deleteTodo(itemId: number) {
        this.todoList = this.todoList.filter((item) => item.id !== itemId)
      },
      toggleCompleted(itemId: number) {
        const todo = this.todoList.find((item) => item.id === itemId)
        if(todo){
          todo.completed = !todo.completed
        }
      }
    }
  }
)