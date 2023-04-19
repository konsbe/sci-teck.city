import React from "react";
import Link from "next/link";
import LoginForm from "@/src/components/LogInForm";
import styles from "../styles/forms.module.css";


function login() {
  return (
    <div>
      <p className={styles.formtext}>
        not an acount{" "}
        <span>
          <Link href="/signup" className={styles.linkText}>
            Sign Up
          </Link>
        </span>
      </p>
      <LoginForm />
    </div>
  );
}

export default login;
