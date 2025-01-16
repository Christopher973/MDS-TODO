import EditProjectCell from 'src/components/Admin/Project/EditProjectCell'

type ProjectPageProps = {
  id: number
}

const EditProjectPage = ({ id }: ProjectPageProps) => {
  return <EditProjectCell id={id} />
}

export default EditProjectPage
