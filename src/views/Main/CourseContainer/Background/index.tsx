import { motion, AnimatePresence } from 'framer-motion';

const Background = ({ color }: { color: string }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={color}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          background: `linear-gradient(105deg, ${color}, #000000)`,
        }}
      />
    </AnimatePresence>
  );
};

export default Background;
