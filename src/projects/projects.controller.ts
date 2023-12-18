import { type Request, type Response } from 'express'

import { ProjectType } from './project';
import { projectsCollection } from './project.collection';

export class ProjectsController {

  static async getAllProjects (req: Request, res: Response): Promise<Response<ProjectType[]>> {
    try {
      const projects = await projectsCollection.find().toArray()
      return res.status(200).json(projects)
    } catch (err) {
      return res.status(400).json({ error: (err as Error).message });
    }
  }

  static async createProject (req: Request, res: Response): Promise<void> {
    console.log('Received request');
    const project: ProjectType = req.body;

    if (!project) {
      res.status(400).json({ error: 'No project data provided' });
      return;
    }

    console.log(req.body);
    const result = projectsCollection.insertOne(project);
    res.status(204).json(result);
    // try {
    //   const result = await projectsCollection.insertOne(project);
    //   res.status(204).json(result);
    // } catch (error) {
    //   console.log((error as Error).message);
    //   res.status(500).json({ message: (error as Error).message });
    // }
  }
}