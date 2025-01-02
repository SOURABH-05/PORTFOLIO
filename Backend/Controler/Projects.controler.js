import { Project } from "../Model/Projects.Model.js"


export const getProject = async (req, res) => {
    try {
        const Projects = await Project.find()
        res.status(200).json(Projects)
    } catch (error) {
        res.status(500).json({ "message": "Internal error" })
    }
}