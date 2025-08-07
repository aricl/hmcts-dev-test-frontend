import axios from 'axios';
import { Application } from 'express';

export default function (app: Application): void {
  app.get('/tasks/:id', async (req, res) => {
    try {
      const taskId = req.params.id;
      const response = await axios.get('http://localhost:4000/task/' + taskId);
      const task = response.data;

      const formattedTask = {
          title: task.title,
          description: task.description,
          status: task.status,
          due_date: (new Date(task.due_date)).toDateString()
      };

      res.render('view-task', { task: formattedTask });
    } catch (error) {
      console.error('Error making request:', error);
      res.render('home', {});
    }
  });
}
