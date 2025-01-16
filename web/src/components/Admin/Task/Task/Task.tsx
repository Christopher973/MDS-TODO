import type {
  DeleteTaskMutation,
  DeleteTaskMutationVariables,
  FindTaskById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

const DELETE_TASK_MUTATION: TypedDocumentNode<
  DeleteTaskMutation,
  DeleteTaskMutationVariables
> = gql`
  mutation DeleteTaskMutation($id: Int!) {
    deleteTask(id: $id) {
      id
    }
  }
`

interface Props {
  task: NonNullable<FindTaskById['task']>
}

const Task = ({ task }: Props) => {
  const [deleteTask] = useMutation(DELETE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task deleted')
      navigate(routes.adminTasks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteTaskMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete task ' + id + '?')) {
      deleteTask({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Task {task.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{task.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{task.name}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{formatEnum(task.status)}</td>
            </tr>
            <tr>
              <th>Percent</th>
              <td>{task.percent}</td>
            </tr>
            <tr>
              <th>Project id</th>
              <td>{task.projectId}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{task.userId}</td>
            </tr>
            <tr>
              <th>Start date</th>
              <td>{timeTag(task.startDate)}</td>
            </tr>
            <tr>
              <th>End date</th>
              <td>{timeTag(task.endDate)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(task.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(task.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditTask({ id: task.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(task.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Task
