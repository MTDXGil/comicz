import { motion } from "framer-motion";

export default function Modal({ children }) {
  return (
    <div className="modal">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="modal-overlay"
      ></motion.div>
      <div className="modal-content">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="modal-content-background"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
