import styled from 'styled-components';

export const HomeContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    height: 100vh;

    background-color:black;
`;

export const Animation = styled.div`
    
    grid-columns: 1/1;
    grid-rows:1/2;

    display: flex;
    justify-content:center;
    align-items:center;

    color:green;
`;

export const GalleryAnimation = styled.div`

    grid-columns: 1/1;
    grid-rows:2/2;

    display:flex;
    justify-content:center;
    align-items:center;

    color: red;
`;

export const Letreiro = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    font-size: 80px;
    font-weight: bolder;
    font-family: 'Inter', sans-serif;
    letter-spacing: -0.40rem;

    color: white;
`;
