import Link from "next/link"
const page = () => {
  return (
    <>
    <div>
        <h1>USER DETAIL PAGE</h1>
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
