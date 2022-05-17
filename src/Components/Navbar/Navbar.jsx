import React, { useState, useContext } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import riotp from "../../Assets/IntroImages/riotp.png";
import { animate, motion } from "framer-motion";
import "./Navbar.css";
import { userContext } from "../../Contexts/UserContext";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  const data = useContext(userContext);
  const { authWithGoogle, logOut, user } = data;
  const animateFrom = { opacity: 0, x: 100 };
  const animateTo = { opacity: 0.9, x: 0 };
  const animateFromLi = { opacity: 0, y: -40 };
  const animateToLi = { opacity: 1, y: 0 };
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <TiThMenuOutline
      onClick={() => setOpen(!open)}
      className="hamburger-menu"
    />
  );

  const closeIcon = (
    <RiCloseLine onClick={() => setOpen(!open)} className="hamburger-menu" />
  );

  const closeMenu = () => setOpen(false);
  return (
    <>
      <div className={`navbar ${open ? "active" : ""}`}>
        {open && (
          <motion.ul initial={animateFrom} animate={animateTo}>
            <motion.li
              initial={animateFromLi}
              animate={animateToLi}
              transition={{ delay: 0.3 }}
              onClick={() => open && closeMenu()}
            >
              <Link to="/">Main</Link>
            </motion.li>
            <motion.li
              initial={animateFromLi}
              animate={animateToLi}
              transition={{ delay: 0.3 }}
              onClick={() => open && closeMenu()}
            >
              <a href="#abgame">About game</a>
            </motion.li>
            <motion.li
              initial={animateFromLi}
              animate={animateToLi}
              transition={{ delay: 0.3 }}
              onClick={() => open && closeMenu()}
            >
              <Link to="/agents-page">Agents</Link>
            </motion.li>

            <motion.li
              initial={animateFromLi}
              animate={animateToLi}
              transition={{ delay: 0.3 }}
              onClick={() => open && closeMenu()}
            >
              <Link to="/payment-page">Buy the game</Link>
            </motion.li>
            <motion.li
              initial={animateFromLi}
              animate={animateToLi}
              transition={{ delay: 0.3 }}
              onClick={() => open && closeMenu()}
            >
              <Link to="/admin-page">Admin panel</Link>
            </motion.li>
            <motion.li
              initial={animateFromLi}
              animate={animateToLi}
              transition={{ delay: 0.3 }}
            >
              {user ? (
                <>
                  <div className="user">
                    <img src={user.photoURL} alt="" />
                    <span>{user.email}</span>
                    <button onClick={logOut}>
                      <BiLogOut />
                    </button>
                  </div>
                </>
              ) : (
                <button className="userBtn" onClick={authWithGoogle}>
                  LOGIN
                </button>
              )}
            </motion.li>
            <motion.li
              initial={animateFromLi}
              animate={animateToLi}
              transition={{ delay: 0.3 }}
            >
              <img width={137} src={riotp} alt="" />
            </motion.li>
          </motion.ul>
        )}
      </div>
      {open ? closeIcon : hamburgerIcon}
    </>
  );
};

export default Navbar;
