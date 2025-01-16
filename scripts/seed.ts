import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

export default async () => {
  try {
    // Créer des utilisateurs
    const users = await db.user.createMany({
      data: [
        {
          firstName: 'Alice',
          lastName: 'Smith',
          email: 'alice@example.com',
          hashedPassword: 'hashedpassword1',
          salt: 'salt1',
        },
        {
          firstName: 'Bob',
          lastName: 'Johnson',
          email: 'bob@example.com',
          hashedPassword: 'hashedpassword2',
          salt: 'salt2',
        },
      ],
    })

    // Créer des projets
    const projects = await db.project.createMany({
      data: [
        {
          name: 'Project 1',
          description: 'Description for project 1',
          managerId: 1, // Assurez-vous que l'ID correspond à un utilisateur existant
          startDate: new Date(),
        },
        {
          name: 'Project 2',
          description: 'Description for project 2',
          managerId: 2, // Assurez-vous que l'ID correspond à un utilisateur existant
          startDate: new Date(),
        },
      ],
    })

    // Créer des tâches
    const tasks = await db.task.createMany({
      data: [
        {
          name: 'Task 1',
          status: 'TODO',
          percent: 0,
          projectId: 1, // Assurez-vous que l'ID correspond à un projet existant
          userId: 1, // Assurez-vous que l'ID correspond à un utilisateur existant
          startDate: new Date(),
        },
        {
          name: 'Task 2',
          status: 'IN_PROGRESS',
          percent: 50,
          projectId: 2, // Assurez-vous que l'ID correspond à un projet existant
          userId: 2, // Assurez-vous que l'ID correspond à un utilisateur existant
          startDate: new Date(),
        },
      ],
    })

    console.info('Seed data created successfully!')
  } catch (error) {
    console.error('Error seeding data:', error)
  } finally {
    await db.$disconnect()
  }
}
