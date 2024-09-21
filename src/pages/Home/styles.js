import styled from 'styled-components';

export const Container = styled.div`
    background: #ff3a28;
    padding: 15vh;
    
    border-radius: 6px;

    h1 {
        color: #FFFFFF;
        text-align: center;
    }

    input {
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-top: 30px;
        outline: none;
        padding-left: 10px;
    }


`
export const AddButton = styled.button `
    background: #FFCB00;
    color: #072262;
    height: 35px;
    border-radius: 5px;
    border: none;
    padding:  8px 20px;
    cursor: pointer;
    margin-left: 10px;
    font-size: 15px;
    font-weight: bold;

    &:hover {
        opacity: 0.8;
    }

`;

export const Product = styled.div` 
    display: flex;
    justify-content: space-between;
    height: 40px;
    background: #fff;
    border-radius: 5px;
    margin-top: 15px;
    padding: 0 10px;

    p {
        text-transform: capitalize;
        font-weight: bold;
        display: flex;
        align-items: center;
        color: #51a9e1;
    }


`

export const TrashButton = styled.button `
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
`
