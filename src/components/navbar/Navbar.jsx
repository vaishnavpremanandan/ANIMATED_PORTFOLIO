import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/vaishnav.premanandan?mibextid=9R9pXO">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://instagram.com/__va_is_hn_av__?igshid=dWIwcWdkZTBjM3cy">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@vaishnavpremanandan3785">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://dribbble.com/vaishnav_prem?onboarding=true&designer=true">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
