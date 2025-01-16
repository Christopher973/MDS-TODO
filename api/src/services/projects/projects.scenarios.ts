import type { Prisma, Project } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProjectCreateArgs>({
  project: {
    one: {
      data: {
        name: 'String',
        startDate: '2025-01-16T11:20:16.261Z',
        updatedAt: '2025-01-16T11:20:16.261Z',
        manager: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String2465847',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2025-01-16T11:20:16.261Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        startDate: '2025-01-16T11:20:16.261Z',
        updatedAt: '2025-01-16T11:20:16.261Z',
        manager: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String4329645',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2025-01-16T11:20:16.261Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Project, 'project'>
