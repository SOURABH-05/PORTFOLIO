import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String],
  link: String,
  github: String,
  image: String,
});



export const Project = mongoose.model('Project', ProjectSchema);