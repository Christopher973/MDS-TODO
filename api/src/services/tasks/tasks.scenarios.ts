import type { Prisma, Task } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: {
      data: {
        name: 'String',
        startDate: '2025-01-16T11:19:45.268Z',
        updatedAt: '2025-01-16T11:19:45.268Z',
        project: {
          create: {
            name: 'String',
            startDate: '2025-01-16T11:19:45.268Z',
            updatedAt: '2025-01-16T11:19:45.268Z',
            manager: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String2856314',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2025-01-16T11:19:45.268Z',
              },
            },
          },
        },
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String5196243',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2025-01-16T11:19:45.268Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        startDate: '2025-01-16T11:19:45.268Z',
        updatedAt: '2025-01-16T11:19:45.268Z',
        project: {
          create: {
            name: 'String',
            startDate: '2025-01-16T11:19:45.268Z',
            updatedAt: '2025-01-16T11:19:45.268Z',
            manager: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String7711866',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2025-01-16T11:19:45.268Z',
              },
            },
          },
        },
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String9518480',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2025-01-16T11:19:45.268Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Task, 'task'>
