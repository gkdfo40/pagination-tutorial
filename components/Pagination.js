import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

export default function Pagination({ pages, setCurrentPage }) {

    const numberOfPages = [];
    const [currentButton, setCurrentButton] = useState(1);
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

    for (let i = 1; i <= pages; i++) {
        numberOfPages.push(i)
    }

    useEffect(() => {
        let tempNumberOfPages = [...arrOfCurrButtons]



        if (numberOfPages.length < 7) {
            tempNumberOfPages = numberOfPages
        }

        else if (currentButton <= 4) {
            tempNumberOfPages = [1, 2, 3, 4, 5, 6, 7]
        }

        else if (currentButton > 4 && numberOfPages.length - currentButton >= 3) {
            const leftSliced = numberOfPages.slice(currentButton - 4, currentButton - 1)
            const rightSliced = numberOfPages.slice(currentButton, currentButton + 3)
            tempNumberOfPages = [...leftSliced, currentButton, ...rightSliced]
        }

        else if (numberOfPages.length - currentButton < 3) {
            const sliced = numberOfPages.slice(numberOfPages.length - 6)
            tempNumberOfPages = [...sliced]
        }
        setArrOfCurrButtons(tempNumberOfPages)
        setCurrentPage(currentButton)
    }, [currentButton])



    return (
        <ButtonsList>
            <ButtonCursor
                onClick={() => setCurrentButton(currentButton === 1 ? 1 : currentButton - 1)}
            >
                Prev
            </ButtonCursor>
            {arrOfCurrButtons.map((item, index) =>
                <Button
                    key={index}
                    onClick={() => setCurrentButton(item)}
                    color={currentButton === item ? 'white' : 'black'}
                    backcolor={currentButton === item ? 'black' : 'white'}
                    className={`${currentButton === item ? 'active' : ''}`}
                >
                    {item}
                </Button>
            )}
            <ButtonCursor
                onClick={() => setCurrentButton(currentButton === numberOfPages.length ? currentButton : currentButton + 1)}
            >
                Next
            </ButtonCursor>
        </ButtonsList>
    )
};

const ButtonsList = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
font-weight:500;
font-size:15px;
`;

const Button = styled.a`
display:flex;
justify-content:center;
align-items:center;
border:1px solid whitesmoke;
color: ${props => props.color};
background-color:${props => props.backcolor};
width:40px;
height:40px;

:active{
    color:white;
    background-color:black;
   
}

:hover:not(.active){
    background-color:whitesmoke;
}

`;

const ButtonCursor = styled.a`
display:flex;
justify-content:center;
align-items:center;
border:1px solid whitesmoke;
color: black;
background-color: white;
width:40px;
height:40px;

:hover{
    background-color:whitesmoke;
}

`;