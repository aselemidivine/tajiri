'use client'
import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";


const ToTop = () => {
    const [showButton, setShowButton] = useState(false);

    function ScrollToTopButton() {
    
        useEffect(() => {
          // Add event listener to check scroll position
          const handleScroll = () => {
            if (window.pageYOffset > 100) {
              setShowButton(true);
            } else {
              setShowButton(false);
            }
          };
    
          window.addEventListener("scroll", handleScroll);
    
          // Clean up the event listener
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []);
    
        const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        };
      }


  return (
        <div>
        {showButton && (
          <button className="scroll-to-top-button" onClick={scrollToTop}>
            <FaArrowUp className="scroll-to-top-icon" />
          </button>
        )}
      </div>
      
  )
}

export default ToTop



