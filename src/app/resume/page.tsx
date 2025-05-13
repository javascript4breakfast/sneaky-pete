import Link from "next/link";

export default function ResumePage() {
    return (
      <main>
        <nav>
            <Link href="/">back</Link>
        </nav>
        <div>
            <h1>My Resume</h1>
            <p>This is where your resume content will go.</p>
        </div>
      </main>
    );
  }
  