import React from 'react';
import DaumPostcode from "react-daum-postcode";
 
const PopupPostCode = ({onClose, onAddData}) => {
	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data);
        console.log(fullAddress);
        console.log(data.zonecode);
        onAddData(data);
    }
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: '50%',
        left: '50%',
        transform:'translate(-50%,-50%)',
        width: "400px",
        height: "400px",
        padding: "7px",
        border: "2px solid #666",
        background : "#FFF"
      };
 
    return(
        <div>
            <DaumPostcode style={postCodeStyle} onClick={onClose} onComplete={handlePostCode} /> 
            {/* <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>입력</button> */}
            <div id='postBtn' onClick={onClose}>X</div>
        </div>
    )
}
 
export default PopupPostCode;