import axios from 'axios';
import { Application } from 'express';

export default function (app: Application): void {
  app.post('/tasks/:id/status', async (req, res) => {
    try {
      const taskId = req.params.id;
      const taskStatus = req.body.taskStatus;
      let formData = new FormData();
      formData.append('taskStatus', taskStatus);
      const response = await axios.post('http://localhost:4000/task/' + taskId + '/status', formData);
      const task = response.data;

      res.render('view-task', { task });
    } catch (error) {
      console.error('Error making request:', error);
      res.render('home', {});
    }
  });
}
