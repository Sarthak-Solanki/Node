const tasks = {
  task: [
    {
      text: 'greocery shopping',
      completed: true
    },
    {
      text: 'yard clean',
      completed: false
    },
    {
      text: 'g shopping',
      completed: false
    }
  ],
  getTaskTodo () {
    return this.task.filter(task =>   task.completed === false
    )
  }
}

console.log(tasks.getTaskTodo())
