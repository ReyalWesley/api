import { type Request, type Response } from 'express'

import { Project } from './project';
import { projectsCollection } from './project.collection';

export class ProjectsController {
  static async getAllProjects (req: Request, res: Response): Promise<Response<Project[]>> {
    try {
      const projects = await projectsCollection.find().toArray()
      return res.status(200).json(projects)
    } catch (err) {
      return res.status(400).json({ error: (err as Error).message });
    }
  }

  static async createProject (req: Request, res: Response): Promise<Project | void> {
    try {
      const project = await projectsCollection.insertOne(req.body);
      console.log('project', project)
      res.status(200)
    } catch (e) {
      const message = (e as Error).message
      res.status(500).json({ message: message });
      console.log('Error when creating a project:', message)
    }
  }
}