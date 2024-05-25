import * as React from "react";
import { signIn } from "@/auth";

export default function Page(props) {
  const error = props.searchParams.error;
    return( <form action={async (formData) => {
      'use server'
      const email = formData.get('email')?.toString()
      await signIn("resend", {email })
    }}>
    <input
      type="email"
      name="email"
      placeholder="Correo electrónico"
      autoComplete="email"
      autoCorrect="off"
      autoCapitalize="none"
      required
    />
    <button type="submit">
      Sign in
    </button>
    {error && <p>{error}</p>}
  </form>)
}