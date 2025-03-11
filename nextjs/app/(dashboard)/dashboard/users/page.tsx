import Link from "next/link"

const page = () => {
  return (
    <>
    <div>
        <h1>USERS Page!</h1>
        <p>This is the users page</p>
    </div>

    <Link href="/">Home Page</Link>

    <div className="usersList">
      <h2>User List</h2>
      <ul className="mt-10">
        <Link href="/dashboard/users/1"><li>User 1</li></Link>
        <Link href="/dashboard/users/2"><li>User 2</li></Link>
        <Link href="/dashboard/users/3"><li>User 3</li></Link>
        <Link href="/dashboard/users/4"><li>User 4</li></Link>
      </ul>
    </div>
    </>
  )
}

export default page
