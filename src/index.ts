import express, { NextFunction, type Request, type Response } from 'express'

import { projectRouter } from './projects/projects.router'
import { rundb } from './services/db'

import cors from 'cors'

const app = express()

app.use((_, res, next) => {
  res.set('Access-Control-Allow-Origin', '*'); // or 'localhost:8888'
  res.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.set(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  return next();
}); // sets headers before routes

app.use(express.json());
app.use(cors());
app.use(express.static('public'))

rundb().catch(console.dir);

app.use('/projects', projectRouter)

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  res.status(500).render('error', { error: err });
});

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
