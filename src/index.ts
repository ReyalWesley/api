import express, { NextFunction, type Request, type Response } from 'express'

import { projectRouter } from './projects/projects.router'
import { rundb } from './services/db'

const app = express()

app.use(express.json());
app.use(express.static('public'))

rundb().catch(console.dir);

app.use('/projects', projectRouter)

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  res.status(500).render('error', { error: err });
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
