import React from 'react'
import styled from 'styled-components'

function Post(props) {
    return (
        <PostWrapper>
            <Image />
            <TextData>
                <TitleSubtitleWrapper>
                    <h3>{props.title}</h3>
                    <p>enviado há 6 horas por <b>{props.author}</b></p>
                </TitleSubtitleWrapper>
                <a href={props.url} target="_blank" rel='noreferrer'>Visite o post</a>
            </TextData>
        </PostWrapper>
    )
}

const PostWrapper = styled.div`
    display: flex;
    border-top: 2px solid rgba(167, 176, 190, 1);
    width: 100%;
    padding: 15px 0;
    height: 140px;
`

const Image = styled.div`
    width: 130px;
    min-width: 130px;
    height: 130px;
    background: rgba(167, 176, 190, 1);
    margin-right: 30px;
    border-radius: 10px;
`

const TextData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
        margin: 0;
        color: rgba(167, 176, 190, 1);
    }

    a {
        text-decoration: none;
        color: black;
        font-weight: 700;
    }
`
const TitleSubtitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3px;

    h3 {
        font: 2rem;
        margin: 0;
        font-weight: 700;
    }

    b {
        color: rgb(99, 36, 198);
    }
`

export default Post