import React from 'react';
import styled from 'styled-components';

const ListFrame = ({ userImage, userName, statusMessage }) => {
  return (
    <Wrapper>
      <ProfilePicture>
        <ProfileImage src={userImage} />
      </ProfilePicture>
      <UserInfomationFrame>
        <UserName>{userName}</UserName>
        <UserStatusMessage>{statusMessage}</UserStatusMessage>
      </UserInfomationFrame>
      <UserMusic>{userName}</UserMusic>
    </Wrapper>
  );
};

export default ListFrame;

const Wrapper = styled.div`
  display: flex;
  padding: 5px;
  padding-left: 20px;
  height: 55px;
  &:hover {
    background-color: #f7f6f6;
  }
`;

const ProfilePicture = styled.div`
  flex: 0 0 53px;
  width: 53px;
  height: 53px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 22px;
`;

const UserInfomationFrame = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-direction: column;
  margin-left: 12px;
  font-size: 12.5px;
  font-weight: 600;
`;

const UserName = styled.div``;

const UserStatusMessage = styled.div`
  margin-bottom: 10px;
  font-weight: 100;
  color: #8e8d8d;
`;

const UserMusic = styled.div`
  padding-top: 20px;
  padding-right: 20px;
  width: 100px;

  font-size: 10px;
  font-weight: 600;
  text-align: right;
  vertical-align: middle;
`;