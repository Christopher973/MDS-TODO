export const schema = gql`
  type Project {
    id: Int!
    name: String!
    description: String
    manager: User!
    managerId: Int!
    Task: [Task]!
    startDate: DateTime!
    endDate: DateTime
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    projects: [Project!]! @skipAuth
    project(id: Int!): Project @skipAuth
  }

  input CreateProjectInput {
    name: String!
    description: String
    managerId: Int!
    startDate: DateTime!
    endDate: DateTime
  }

  input UpdateProjectInput {
    name: String
    description: String
    managerId: Int
    startDate: DateTime
    endDate: DateTime
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: Int!, input: UpdateProjectInput!): Project! @requireAuth
    deleteProject(id: Int!): Project! @requireAuth
  }
`
