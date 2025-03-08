import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-black-50);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled(motion.div)`
  position: relative;
  transition: none;
  background-color: var(--color-white);
  padding: 24px 12px 16px 12px;
  border-radius: 16px;
  min-width: 360px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  z-index: 1001;
`;

export default { Backdrop, ModalContainer };
