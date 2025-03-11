import Link from "next/link";

function about () {
    return (
        <>
        <div className="aboutPage">
            <h1>About Page</h1>
            <p>This is the about page.</p>
        </div>
            <Link href="/">Home</Link>
        </>
    )

}

export default about;