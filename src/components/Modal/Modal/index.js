import { ModalContainer, Description, ButtonWrap } from './style';
import Button from '../../Buttons';

const Modal = ({ children, title, description, hide, closable, okText, handleOkButtonClick }) => {
  return (
    <ModalContainer>
      {title && <Description>{title}</Description>}
      {description && <Description>{description}</Description>}
      {children}
      <ButtonWrap>
        <Button color={'blue'} type={'active'} size={'medium'} onClick={handleOkButtonClick}>
          확인
        </Button>
        <Button type={'active'} size={'medium'} onClick={hide}>
          취소
        </Button>
      </ButtonWrap>
    </ModalContainer>
  );
};
export default Modal;
