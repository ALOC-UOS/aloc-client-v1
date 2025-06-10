import { HStack, VStack } from '@/components/common/Stack';
import Header from '@/components/common/Header';
import ItemList from './ItemList';

const ShopPage = () => {
  return (
    <VStack gap={24} style={{ padding: '72px 40px', minHeight: '100dvh' }}>
      <Header title="상점" />
      <HStack alignItems="flex-start" gap={32} style={{ width: '100%' }}>
        <ItemList />
      </HStack>
    </VStack>
  );
};

export default ShopPage;
