export const schema = gql`
  type Task {
    id: Int!
    name: String!
    status: TaskStatus!
    percent: Int!
    project: Project!
    projectId: Int!
    User: User!
    userId: Int!
    startDate: DateTime!
    endDate: DateTime
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum TaskStatus {
    TODO
    IN_PROGRESS
    DONE
  }

  type Query {
    tasks: [Task!]! @skipAuth
    task(id: Int!): Task @skipAuth
  }

  input CreateTaskInput {
    name: String!
    status: TaskStatus!
    percent: Int!
    projectId: Int!
    userId: Int!
    startDate: DateTime!
    endDate: DateTime
  }

  input UpdateTaskInput {
    name: String
    status: TaskStatus
    percent: Int
    projectId: Int
    userId: Int
    startDate: DateTime
    endDate: DateTime
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @requireAuth
    deleteTask(id: Int!): Task! @requireAuth
  }
`
