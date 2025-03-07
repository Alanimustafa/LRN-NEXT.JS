import Link from "next/link"
import React from "react"


// This is the dynamic route for the user detail page. Note the :id parameter in the path. This id came from the folder we had created in the users folder. If we named the folder "name" folder "id", then the :id would be "name".
const page = ({params}: { params: {id: string}}) => {

    // we need to destructure the id from the params object.
    const { id } = params;
  return (
    <>
    <div>
        <h1>USER {id} DETAIL PAGE </h1>
        <p>This is the user detail page.</p>
    </div>
    <div className="homePageLink">
        <Link href="/">HomePage</Link>
    </div>
    <div className="usersPageLink">
        <Link href="/dashboard/users">Users Page</Link>
    </div>
    </>
  )
}

export default page
