import axios from 'axios';
import { Application } from 'express';

export default function (app: Application): void {
  app.post('/tasks/:id/delete', async (req, res) => {
    try {
      const taskId = req.params.id;
      const response = await axios.delete('http://localhost:4000/task/' + taskId);
      const task = response.data;

      res.render('home', { task });
    } catch (error) {
      console.error('Error making request:', error);
      res.render('home', {});
    }
  });
}
