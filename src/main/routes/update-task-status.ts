import axios from 'axios';
import { Application } from 'express';

export default function (app: Application): void {
  app.get('/tasks/:id/status', async (req, res) => {
    try {
      const taskId = req.params.id;
      const response = await axios.get('http://localhost:4000/task/' + taskId);
      const task = response.data;

      res.render('update-task-status', { task });
    } catch (error) {
      console.error('Error making request:', error);
      res.render('home', {});
    }
  });
}
