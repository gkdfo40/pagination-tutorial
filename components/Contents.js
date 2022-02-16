import styled from "styled-components"

export default function Contents({ props }) {
    const { currentPosts } = props;
    return (
        <ContentsBox>
            {currentPosts.map(data => (
                <Album key={data.id}>
                    <ThumNail src={data.thumbnailUrl} alt="thumbnailUrl" />
                    <Title>{data.title}</Title>
                </Album>
            ))}
        </ContentsBox>
    )
};

const ContentsBox = styled.div`
display:flex;
flex-wrap:wrap;
flex-flow:wrap;
justify-content:flex-start;
align-items:center;
margin-bottom:20px;
`;

const Album = styled.div`
display:flex;
width:30%;
margin-right:100px;
:hover{
    opacity:0.6;
}
`;

const ThumNail = styled.img`
padding:1em;
width:100px;
height:100px;
`;

const Title = styled.a`
padding:1em;
font-size:1em;
font-weight:bold;
color:black;
`;