import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/resume">View My Resume</Link>
      This web application is under construction. Please check back tomorrow.
    </div>
  );
}