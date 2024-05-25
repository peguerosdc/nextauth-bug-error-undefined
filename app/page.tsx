"use client"
import { signIn } from "next-auth/react"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <button onClick={() => signIn()}>Sign in</button>
    </main>
  );
}
