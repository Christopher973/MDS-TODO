import type {
  EditUserById,
  UpdateUserInput,
  UpdateUserMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserForm from 'src/components/Admin/User/UserForm'

export const QUERY: TypedDocumentNode<EditUserById> = gql`
  query EditUserById($id: Int!) {
    user: user(id: $id) {
      id
      firstName
      lastName
      phone
      email
      hashedPassword
      salt
      resetToken
      resetTokenExpiresAt
      createdAt
      updatedAt
    }
  }
`

const UPDATE_USER_MUTATION: TypedDocumentNode<
  EditUserById,
  UpdateUserMutationVariables
> = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      firstName
      lastName
      phone
      email
      hashedPassword
      salt
      resetToken
      resetTokenExpiresAt
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ user }: CellSuccessProps<EditUserById>) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User updated')
      navigate(routes.adminUsers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateUserInput, id: EditUserById['user']['id']) => {
    updateUser({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit User {user?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <UserForm user={user} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
