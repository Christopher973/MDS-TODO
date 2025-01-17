// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import AppLayout from 'src/layouts/AppLayout/AppLayout'

import { useAuth } from './auth'


const Routes = () => {
  return (
    <Router>
      <Route path="/profile" page={ProfilePage} name="profile" />
      <Set wrap={AppLayout}>
        <Route path="/" page={HomePage} name="home" />

        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>



      <Set wrap={ScaffoldLayout} title="Projects" titleTo="adminProjects" buttonLabel="New Project" buttonTo="adminNewProject">
        <Route path="/admin/projects/new" page={AdminProjectNewProjectPage} name="adminNewProject" />
        <Route path="/admin/projects/{id:Int}/edit" page={AdminProjectEditProjectPage} name="adminEditProject" />
        <Route path="/admin/projects/{id:Int}" page={AdminProjectProjectPage} name="adminProject" />
        <Route path="/admin/projects" page={AdminProjectProjectsPage} name="adminProjects" />
      </Set>

      <Set wrap={ScaffoldLayout} title="Tasks" titleTo="adminTasks" buttonLabel="New Task" buttonTo="adminNewTask">
        <Route path="/admin/tasks/new" page={AdminTaskNewTaskPage} name="adminNewTask" />
        <Route path="/admin/tasks/{id:Int}/edit" page={AdminTaskEditTaskPage} name="adminEditTask" />
        <Route path="/admin/tasks/{id:Int}" page={AdminTaskTaskPage} name="adminTask" />
        <Route path="/admin/tasks" page={AdminTaskTasksPage} name="adminTasks" />
      </Set>

      <Set wrap={ScaffoldLayout} title="Users" titleTo="adminUsers" buttonLabel="New User" buttonTo="adminNewUser">
        <Route path="/admin/users/new" page={AdminUserNewUserPage} name="adminNewUser" />
        <Route path="/admin/users/{id:Int}/edit" page={AdminUserEditUserPage} name="adminEditUser" />
        <Route path="/admin/users/{id:Int}" page={AdminUserUserPage} name="adminUser" />
        <Route path="/admin/users" page={AdminUserUsersPage} name="adminUsers" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
