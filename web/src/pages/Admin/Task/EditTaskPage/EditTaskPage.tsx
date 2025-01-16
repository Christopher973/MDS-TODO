import EditTaskCell from 'src/components/Admin/Task/EditTaskCell'

type TaskPageProps = {
  id: number
}

const EditTaskPage = ({ id }: TaskPageProps) => {
  return <EditTaskCell id={id} />
}

export default EditTaskPage
