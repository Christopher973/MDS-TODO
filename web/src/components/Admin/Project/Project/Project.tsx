import type {
  DeleteProjectMutation,
  DeleteProjectMutationVariables,
  FindProjectById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_PROJECT_MUTATION: TypedDocumentNode<
  DeleteProjectMutation,
  DeleteProjectMutationVariables
> = gql`
  mutation DeleteProjectMutation($id: Int!) {
    deleteProject(id: $id) {
      id
    }
  }
`

interface Props {
  project: NonNullable<FindProjectById['project']>
}

const Project = ({ project }: Props) => {
  const [deleteProject] = useMutation(DELETE_PROJECT_MUTATION, {
    onCompleted: () => {
      toast.success('Project deleted')
      navigate(routes.adminProjects())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteProjectMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete project ' + id + '?')) {
      deleteProject({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Project {project.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{project.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{project.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{project.description}</td>
            </tr>
            <tr>
              <th>Manager id</th>
              <td>{project.managerId}</td>
            </tr>
            <tr>
              <th>Start date</th>
              <td>{timeTag(project.startDate)}</td>
            </tr>
            <tr>
              <th>End date</th>
              <td>{timeTag(project.endDate)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(project.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(project.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditProject({ id: project.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(project.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Project
