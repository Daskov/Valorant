import React, { useCallback, useRef, useState, useEffect } from "react";
import cs from "classnames";
import "./Animate.css";

const Animate = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  const animate = useCallback(() => {
    if (ref.current?.getBoundingClientRect().top < window.innerHeight) {
      setIsActive(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", animate);

    return () => window.removeEventListener("scroll", animate);
  }, []);

  const titleClass = cs({
    active: isActive,
    animate: true,
  });

  return (
    <div className={titleClass} ref={ref}>
      {children}
    </div>
  );
};

export default Animate;
