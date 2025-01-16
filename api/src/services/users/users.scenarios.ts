import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String520904',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2025-01-16T11:19:07.818Z',
      },
    },
    two: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String4391758',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2025-01-16T11:19:07.818Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
