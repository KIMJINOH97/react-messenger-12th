import React from 'react';
import styled from 'styled-components';

const MessageSender = ({ message }) => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Wrapper>
            <MessageForm onSubmit={onSubmit}>
                <MessageContent></MessageContent>
                <MessageSendButton type="submit" value="전송"></MessageSendButton>
            </MessageForm>
        </Wrapper>
    );
};

export default MessageSender;

const Wrapper = styled.div`
    display: flex;

    background-color: white;
    position: fixed;
    opacity: 0.9;
    bottom: 0;
`;

const MessageForm = styled.form`
    width: 100vw;
    margin: 10px 3vw;
`;

const MessageContent = styled.input`
    width: 78vw;
    height: 25px;
    padding: 10px;
    margin-right: 10px;

    border: 1px solid gray;
    border-radius: 17.5px;
`;

const MessageSendButton = styled.input`
    width: 12vw;
    height: 45px;

    border-radius: 15px;
    background-color: #ffe066;
    text-align: center;
`;
