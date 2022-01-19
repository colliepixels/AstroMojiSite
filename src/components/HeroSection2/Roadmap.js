import React, {useLayoutEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import useEventListener from "../../hooka/uaeEventlistener";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h3`
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 0px;
    color: #fff;
`

const Subtitle = styled.span`
  color: #ffd800;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  
  &.big {
    font-size: 3rem;
    
    @media screen and (max-width: 480px) {
        font-size: 2rem; 
    }
  }
  
  &.italic {
    font-style: italic;
    font-size: 2rem;
    margin-top: 18px;
  }
`

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align === "right" ? "flex-end" : "flex-start"};
    margin: 100px 0;
    max-width: 226px;
    
    .first {
        margin: 0 0 100px;
    }
`

const Description = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    white-space: pre-wrap;
    color: #fff;
    text-align: ${props => props.align === 'right' ? 'right' : 'left'};
`

const CenteredDescription = styled(Description)`
    text-align: center;
    max-width: 300px;
    width: 80%;
    margin: 20px auto;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: ${props => props.height ? props.height + 'px' : 'auto'};
    margin-bottom: -30px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align === "right" ? "flex-start" : "flex-end"};
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: ${props => props.align === "left" ? "0" : "-20px"};
`

const Divider = styled.div`
    width: 8px;
    min-height: 100px;
    height: ${props => props.height ? props.height + 'px' : '100%'};
    background-color: #fff;
    margin: 75px 20px 0;
    opacity: 0.6;
`

const Item = ({subtitle, text, align, className}) =>
    <ItemWrapper className={className} align={align}>
        <Subtitle>{subtitle}</Subtitle>
        <Description align={align}>{text}</Description>
    </ItemWrapper>

const dataL = [
    {
        subtitle: '0%',
        text: 'Announce drop data, price, & details ',
        align: 'right'
    },
    {
        subtitle: '25%',
        text: 'Wim Hof Method Sessions($315 value) prized to 1000 winners ',
        align: 'right'
    },
    {
        subtitle: '65%',
        text: 'Muse Headbands($200-$400 value)prized to 1000 winners ',
        align: 'right'
    },
    {
        subtitle: '95%',
        text: 'AstroMojis Collector Action Figures ($500 value) prized to 111 winners ',
        align: 'right'
    }
]

const dataR = [
    {
        subtitle: '10%',
        text: 'Decentraland wearable merch ($50 value) sent to first 1,111 minters',
        align: 'left'
    },
    {
        subtitle: '50%',
        text: 'Limited IRL hoodies prized to 111 winners',
        align: 'left'
    },
    {
        subtitle: '80%',
        text: 'Mental Health & Wellness Festival Lineup announcement',
        align: 'left'
    }
]


const Roadmap = () => {
    const leftColumn = useRef()
    const [h, setH] = useState(0)
    const [dividerHeight, setDividerHeight] = useState(0)

    useLayoutEffect(() => {
        const height = leftColumn.current.getBoundingClientRect().height
        setH(height)

        setDividerHeight(height - 150)
    }, [])

    const onChange = () => setH(leftColumn.current.getBoundingClientRect().height)
    useEventListener('resize', onChange)

    return (
        <Container>
            <Title>Roadmap</Title>
            <Row height={h}>
                <Column align="left" ref={leftColumn}>
                    {dataL.map((item, index) =>
                        <Item className={index === 0 ? 'first' : ''} key={index} {...item} />
                    )}
                </Column>
                <Divider height={dividerHeight}/>
                <Column align="right">
                    {dataR.map((item, index) =>
                        <Item key={index} {...item} />
                    )}
                </Column>
            </Row>
            <Subtitle className="italic" className="big">Sold out</Subtitle>
            <CenteredDescription>Plans to create a permanent Mental Health & Wellness center in the metaverse. Giving access to people in need at very affordable rates (or free!).</CenteredDescription>
        </Container>
    )
}


export default Roadmap
