import React from "react";
import Link from "next/link";
import SignUpForm from "@/src/components/SignUpForm";
import styles from "../styles/forms.module.css";

function signup() {
  return (
    <div>
      <SignUpForm />
      <p className={styles.formtext}>
        already have an acount{" "}
        <span>
          <Link href="/login" className={styles.linkText}>
            Log in
          </Link>
        </span>
      </p>
    </div>
  );
}

export default signup;
