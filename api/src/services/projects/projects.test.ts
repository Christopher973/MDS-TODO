import type { Project } from '@prisma/client'

import {
  projects,
  project,
  createProject,
  updateProject,
  deleteProject,
} from './projects'
import type { StandardScenario } from './projects.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('projects', () => {
  scenario('returns all projects', async (scenario: StandardScenario) => {
    const result = await projects()

    expect(result.length).toEqual(Object.keys(scenario.project).length)
  })

  scenario('returns a single project', async (scenario: StandardScenario) => {
    const result = await project({ id: scenario.project.one.id })

    expect(result).toEqual(scenario.project.one)
  })

  scenario('creates a project', async (scenario: StandardScenario) => {
    const result = await createProject({
      input: {
        name: 'String',
        managerId: scenario.project.two.managerId,
        startDate: '2025-01-16T11:20:16.254Z',
        updatedAt: '2025-01-16T11:20:16.254Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.managerId).toEqual(scenario.project.two.managerId)
    expect(result.startDate).toEqual(new Date('2025-01-16T11:20:16.254Z'))
    expect(result.updatedAt).toEqual(new Date('2025-01-16T11:20:16.254Z'))
  })

  scenario('updates a project', async (scenario: StandardScenario) => {
    const original = (await project({ id: scenario.project.one.id })) as Project
    const result = await updateProject({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a project', async (scenario: StandardScenario) => {
    const original = (await deleteProject({
      id: scenario.project.one.id,
    })) as Project
    const result = await project({ id: original.id })

    expect(result).toEqual(null)
  })
})
