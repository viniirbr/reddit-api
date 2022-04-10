import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

function Post(props) {

    
    const millis = props.date*1000;
    const today = moment.utc().valueOf();
    const diff = today - millis;
    
    const timePassedArray = [moment.duration(diff).years() + ' anos', moment.duration(diff).months() + ' meses', 
    moment.duration(diff).weeks() + ' semanas', moment.duration(diff).days() + ' dias', 
    moment.duration(diff).hours() + ' horas', moment.duration(diff).minutes() + ' minutos', 
    moment.duration(diff).seconds() + ' segundos']
    const timePassed = timePassedArray.filter(item => {
        if (Number(item.split(' ')[0]) !== 0) {
            return item;
        } else return null;
    })
  
    return (
        <PostWrapper>
            <Image />
            <TextData>
                <TitleSubtitleWrapper>
                    <h3>{props.title}</h3>
                    <p>enviado há {timePassed[0]} por <b>{props.author}</b></p>
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

    @media screen and (max-width: 550px) {
        height: initial;
    }
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