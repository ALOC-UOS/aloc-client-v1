import React from 'react';
import { BlackScreenContainer } from './style';

const BlackScreen = ({ isOpen, onClick }) => {
  return <BlackScreenContainer isOpen={isOpen} onClick={onClick} />;
};

export default BlackScreen;
