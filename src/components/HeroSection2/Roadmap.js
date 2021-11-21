import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 6px;
`

const Subtitle = styled.span`
  color: #ffd800;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align === "left" ? "flex-start" : "flex-end"};
    margin: 100px 0;
    max-width: 226px;
    &.first {
        margin: 0 0 100px;
    }
`

const Description = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    //font-family: Helvetica, sans-serif;
    white-space: pre-wrap;
    color: #fff;
    text-align: ${props => props.align === 'left' ? 'left' : 'right'};
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align === "left" ? "flex-start" : "flex-end"};
    justify-content: center;
    width: 100%;
    height: 100%;
    //border-right: 1px solid #fff;
`

const Divider = styled.div`
    width: 4px;
    min-height: 100px;
    height: 100%;
    background-color: #fff;
    margin: 0 20px;
`

const Item = ({subtitle, text, align, className}) =>
    <ItemWrapper className={className} align={align}>
        <Subtitle>{subtitle}</Subtitle>
        <Description align={align}>{text}</Description>
    </ItemWrapper>

const dataL = [
    {
        subtitle: '0%',
        text: 'Announce drop\ndata, price,\n & details',
        align: 'right'
    },
    {
        subtitle: '40%',
        text: 'Signed partnership with \n'+
            'Action Figure Company',
        align: 'right'
    },
    {
        subtitle: '70%',
        text: 'Mental Health\n& Wellness\nCommunity Input',
        align: 'right'
    },
    {
        subtitle: '90%',
        text: 'Rent parcel in \n' +
            'Decentraland to open \n' +
            'the first Metaverse \n' +
            'Psychology Center',
        align: 'right'
    }
]

const dataR = [
    {
        subtitle: '20%',
        text: 'Merch collaboration\nwith designer\nBrian Lichtenberg',
        align: 'left'
    },
    {
        subtitle: '50%',
        text: 'Announce Mental Health\n& Wellness Partners',
        align: 'left'
    },
    {
        subtitle: '80%',
        text: 'Collaborate with\n' +
            'world famous sculptor \n' +
            'to make the first \n' +
            'AstroMojis sculptor',
        align: 'left'
    }
]


const Roadmap = () =>
    <Container>
        <Title>Roadmap</Title>
        <Row>
            <Column align="right">
                {dataL.map((item, index) =>
                    <Item className={index === 0 ? 'first' : ''} key={index} {...item} />
                )}
            </Column>
            <Divider/>
            <Column align="left">
                {dataR.map((item, index) =>
                    <Item key={index} {...item} />
                )}
            </Column>
        </Row>
    </Container>

export default Roadmap