import express from 'express'

import { ProjectsController } from './projects.controller'

export const projectRouter = express.Router()

projectRouter.get('/', (req, res) => {
  ProjectsController.getAllProjects(req, res).catch(
    (err) => { console.log(err) }
  )
})

projectRouter.post('/add', (req, res) => {
  ProjectsController.createProject(req, res).catch(
    (err) => { console.log(err) }
  )
})
