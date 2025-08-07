import axios from 'axios';
import { Application } from 'express';

export default function (app: Application): void {
  app.get('/', async (req, res) => {
    try {
      // An example of connecting to the backend (a starting point)
      const response = await axios.get('http://localhost:4000/task');
      const tasks = response.data;
      const formattedTasks = tasks.map(
        (task: { title: string; description: string; status: string; due_date: string | number | Date }) => [
          { text: task.title },
          { text: task.description },
          { text: task.status },
          { text: new Date(task.due_date).toDateString() },
        ]
      );

      res.render('home', { tasks: formattedTasks, tasks2: tasks });
    } catch (error) {
      console.error('Error making request:', error);
      res.render('home', {});
    }
  });
}
