import express from 'express'

import { ProjectsController } from './projects.controller'

export const projectRouter = express.Router()

projectRouter.get('/', async (req, res) => {
  await ProjectsController.getAllProjects(req, res)
})

projectRouter.post('/add', async (req, res) => {
  const newProject = await ProjectsController.createProject(req, res)

  return newProject
})
