import ProjectCell from 'src/components/Admin/Project/ProjectCell'

type ProjectPageProps = {
  id: number
}

const ProjectPage = ({ id }: ProjectPageProps) => {
  return <ProjectCell id={id} />
}

export default ProjectPage
