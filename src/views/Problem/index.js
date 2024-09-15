import React, { useState } from 'react';
import S from './Problem.styles';
import TopBar from '../../components/TopBar';
import { AlgorithmListComponent as AlgorithmList } from './AlgorithmList';
import { ProblemListComponent as ProblemList } from './ProblemList';
import { SolvedUserListComponent as SolvedUserList } from './SolvedUserList';
import { VStack } from '../../styles/Stack.styles';
import { useProblem } from '../../hooks/useProblem';
import Dropdown from '../../components/Dropdown';
import downArrowBtn from '../../assets/down-arrow-btn.svg';

const Problem = () => {
  const { selectedSeason, setSelectedSeason } = useProblem();
  const { selectedCourse, setSelectedCourse } = useProblem();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [selectedSeason, setSelectedSeason] = useState(3);
  return (
    <S.ProblemContainer>
      <TopBar />
      <VStack style={{ height: '80vh', gap: '16px', minWidth: '262px' }}>
        <div
          style={{
            height: '88px',
            display: 'flex',
            justifyContent: 'center',
            padding: '24px',
            backgroundColor: '#f0f1f5',
            borderRadius: '48px',
          }}
        >
          <Dropdown>
            <Dropdown.Trigger
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              <div>시즌 {selectedSeason}</div>
              <img
                alt="Down Arrow"
                src={downArrowBtn}
                style={{
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </Dropdown.Trigger>
            <Dropdown.Menu isOpen={isDropdownOpen}>
              <Dropdown.Item
                onClick={() => {
                  setSelectedSeason(1);
                  setIsDropdownOpen(false);
                }}
              >
                시즌 1
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setSelectedSeason(2);
                  setIsDropdownOpen(false);
                }}
              >
                시즌 2
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setSelectedSeason(3);
                  setIsDropdownOpen(false);
                }}
              >
                시즌 3
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <S.Wrapping style={{ flexDirection: 'row', gap: '24px', flexShrink: 0 }}>
          <S.Button selected={selectedCourse === 'HALF'} onClick={() => setSelectedCourse('HALF')}>
            HALF
          </S.Button>
          <S.Button selected={selectedCourse === 'FULL'} onClick={() => setSelectedCourse('FULL')}>
            FULL
          </S.Button>
        </S.Wrapping>
        <S.Wrapping style={{ height: '100%' }}>
          <AlgorithmList />
        </S.Wrapping>
      </VStack>
      <S.Wrapping style={{ width: '100%', height: '80vh' }}>
        <ProblemList />
      </S.Wrapping>
      <SolvedUserList />
    </S.ProblemContainer>
  );
};

export default Problem;
