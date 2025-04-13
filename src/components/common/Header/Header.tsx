import { HStack } from '@/components/common/Stack';
import Line from '@/components/common/Line';
import HeaderTitle from './HeaderTitle';

const Header = ({ title }: { title: string }) => {
  return (
    <HStack alignItems="center" justifyContent="space-between" gap={16}>
      <Line />
      <HeaderTitle title={title} />
      <Line />
    </HStack>
  );
};

export default Header;
