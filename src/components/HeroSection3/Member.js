import React from 'react'
import styled from "styled-components";
import twitter from '../../images/twitter.png'

const Container = styled.div`
    display: flex;
    color: #fff;
    flex-direction: column;
    max-width: 700px;
    justify-content: flex-start;
    align-items: flex-start;
`

const Avatar = styled.img`
    margin-right: 18px;
    max-width: 200px;
    height: auto;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
    @media screen and (max-width: 480px) {
        flex-direction: column; 
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: -8px;
`

const Name = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 6px;
`

const Role = styled.span`
    font-size: 0.75rem;
    margin-bottom: 12px;
`

const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: #ffffff;
    margin-bottom: 10px;
`

const Description = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    //font-family: Helvetica, sans-serif;
    white-space: pre-wrap;
`

const Link = styled.a`
    color: #fff;
    text-decoration: none;
    margin-top: 6px;
    display: flex;
    align-items: center;
    
    img {
        width: 20px;
        height: auto;
        margin-right: 6px;
    }
    
    @media screen and (max-width: 480px) {
        margin-bottom: 12px;
    }
`

const Member = ({member}) => {
    return (
        <Container>
            <Row>
                <Column>
                    <a href={member.twitter_url} target="_blank" rel="noopener noreferrer"><Avatar src={member.image} alt={member.name}/></a>
                    <Link href={member.twitter_url} target="_blank" rel="noopener noreferrer"><img src={twitter}/>{member.twitter_handle}</Link>
                </Column>
                <Info>
                    <Name>{member.name}</Name>
                    <Role>{member.role}</Role>
                    <Line/>
                    <Description>{member.description}</Description>
                </Info>
            </Row>
        </Container>
    )
}

export default Member