import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    background-color: ${props => props.isCompleted ? "green" : "#0a0a0a"};
    justify-content: center;
    width: 120px;
    height: 200px;
`;

export const Text = styled.p`
    font-size: 14px;
    color: rgb(154, 136, 102);
`;

export const ImageWrapper = styled.div`
    max-width: 64px;
    align-self: center;
    margin: 10px 0px;
`;

export const Image = styled.img`
    width: 100%;
    max-height: 130px;
`;

//background-color: #0a0a0a;

export const Tracker = styled.div`

`;

export const Button = styled.button`
    font-size: 12px;
    color: #dedede;
`;