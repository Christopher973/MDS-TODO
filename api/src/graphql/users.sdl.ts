export const schema = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    phone: String
    email: String!
    tasks: [Task]!
    projects: [Project]!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    phone: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    phone: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
