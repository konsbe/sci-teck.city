"use client";
import React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "./Navbar.module.css";
import { Button } from "@mui/material";
import { loginButton, logoutButton } from "./options";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a>
        <Avatar sx={{ml: 2}} alt={"k"}></Avatar>
      </a>
      <a>
        <Button
        //   onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white" }}
          className={styles.colorButtons}>
          {loginButton[0].icon}
        </Button>
      </a>
    </nav>
  );
};
