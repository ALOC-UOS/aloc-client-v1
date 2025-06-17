import S from './Pagination.style';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <S.Container>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <S.PageButton
          key={page}
          isSelected={page === currentPage}
          aria-current={page === currentPage ? 'page' : undefined}
          onClick={() => onPageChange(page)}
        >
          {page}
        </S.PageButton>
      ))}
    </S.Container>
  );
};

export default Pagination;
