"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import "./routes.css";
import { pages } from "../options";

export const RoutingNavLayout = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const ref = useRef<any>(null);


  useLayoutEffect(() => {
    const { top } = ref.current.getBoundingClientRect();
    
    const handleScroll = () => {
      setIsSticky(window.scrollY > 65);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`routing-navbar ${isSticky ? "sticky" : ""}`}
      ref={ref}>
      {pages.map((page, index) => {
        return (
          <div className="route-element" key={index}>
            {page.title}
          </div>
        );
      })}
    </div>
  );
};

export default RoutingNavLayout;
