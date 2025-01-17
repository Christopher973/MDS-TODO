// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const UserPage = () => {
  return (
    <>
      <Metadata title="User" description="User page" />

      <h1>UserPage</h1>
      <p>
        Find me in <code>./web/src/pages/UserPage/UserPage.tsx</code>
      </p>
      {/*
          My default route is named `user`, link to me with:
          `<Link to={routes.user()}>User</Link>`
      */}
    </>
  )
}

export default UserPage
