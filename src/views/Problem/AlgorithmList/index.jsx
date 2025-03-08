import S from './AlgorithmList.styles';
import { VStack } from '../../../components/common/Stack';
import { useAlgorithm } from '../../../hooks/useAlgorithm';

export const AlgorithmListComponent = () => {
  const { selectedAlgorithm, algorithmList, setSelectedAlgorithm } = useAlgorithm();

  const handleAlgorithmItemClick = (algorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  return (
    <VStack style={{ height: 'fit-content', gap: '12px' }}>
      {algorithmList.map((algorithm) => (
        <S.AlgorithmItem
          key={algorithm.algorithmId}
          selected={selectedAlgorithm.week === algorithm.week}
          onClick={() => handleAlgorithmItemClick(algorithm)}
        >
          <S.WeekText selected={selectedAlgorithm.week === algorithm.week}>
            {algorithm.week}주차
          </S.WeekText>
          <S.AlgorithmName selected={selectedAlgorithm.week === algorithm.week}>
            {algorithm.name}
          </S.AlgorithmName>
        </S.AlgorithmItem>
      ))}
    </VStack>
  );
};
