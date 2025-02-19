import styled from '@emotion/styled';
import { useRef, useState, useEffect } from 'react';
import Button from '../../Buttons';
import ImageIcon from '../../../assets/icons/image.svg';
const ProfileChangeModalChildren = ({ selectedFile, setselectedFile }) => {
  const fileInputRef = useRef();
  const [fileErrorText, setFileErrorText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setSelectedImage(null);
    }
  }, [selectedFile]);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setFileErrorText('이미지 파일만 로드해주세요');
        return;
      }
      setselectedFile(file);
    }
  };

  const handleFileDelete = () => {
    setselectedFile(null);
    setSelectedImage(null);
  };
  const handleFileInputButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        gap: 10,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button color={'blue'} size={'small'} onClick={handleFileInputButtonClick}>
          이미지 선택
        </Button>
      </div>
      <FileInput ref={fileInputRef} type="file" onChange={handleFileChange} />
      {selectedImage ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <img
            src={selectedImage}
            alt="선택된 이미지"
            style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '10px' }}
          />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button color={'red'} size={'small'} onClick={handleFileDelete}>
              초기화
            </Button>
          </div>
        </div>
      ) : (
        <Icon src={ImageIcon} />
      )}
      {fileErrorText && <div style={{ color: 'red' }}>{fileErrorText}</div>}
    </div>
  );
};
export default ProfileChangeModalChildren;

const FileInput = styled.input`
  display: none;
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
  margin: 5px;
`;
