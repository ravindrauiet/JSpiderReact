import React, { useRef, useEffect } from "react";

const EventHandlingwithuseRef = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleInputChange = (event) => {
        console.log("Input changed:", event.target.value);
        inputRef.current.style.color="red"
        inputRef.current.style.backgroundColor="yellow"
      };

    inputRef.current.focus();
    inputRef.current.addEventListener("input", handleInputChange);

    // Cleanup function to remove the event listener
    return () => {
        inputRef.current.removeEventListener("input", handleInputChange);
        inputRef.current.style.backgroundColor="blue"
      };
  }, []);

  return <input ref={inputRef} type="text" />;
};

export default EventHandlingwithuseRef;