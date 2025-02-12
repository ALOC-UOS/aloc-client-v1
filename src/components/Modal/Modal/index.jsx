import { ModalContainer, Description, ButtonWrap } from './style';
import Button from '../../Buttons';

const Modal = ({
  isOpen,
  children,
  title,
  description,
  hide,
  closable,
  okText,
  handleOkButtonClick,
}) => {
  return (
    <ModalContainer isOpen={isOpen}>
      {title && <Description>{title}</Description>}
      {description && <Description>{description}</Description>}
      {children}
      <ButtonWrap>
        <Button color={'blue'} buttonType={'active'} size={'medium'} onClick={handleOkButtonClick}>
          확인
        </Button>
        {closable && (
          <Button buttonType={'active'} size={'medium'} onClick={hide}>
            취소
          </Button>
        )}
      </ButtonWrap>
    </ModalContainer>
  );
};
export default Modal;
