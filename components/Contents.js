import styled from "styled-components"

export default function Contents({ props }) {
    const { currentPosts } = props;
    return (
        <ContentsBox>
            {currentPosts.map(data => (
                <Album key={data.id}>
                    <img src={data.thumbnailUrl} alt="thumbnailUrl" width="50px" height="50px" />
                    <Title>{data.title}</Title>
                </Album>
            ))}
        </ContentsBox>
    )
};

const ContentsBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;

const Album = styled.div`
width:400px;
height:100px;
:hover{
    opacity:0.6;
}
`
const Title = styled.a`
font-size:10px;
color:black;
`