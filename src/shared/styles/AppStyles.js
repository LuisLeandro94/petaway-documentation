import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box
} from '@chakra-ui/react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import {Tag, TagLabel} from '@chakra-ui/tag'

import SyntaxHighlighter from 'react-syntax-highlighter';


export const Wrapper = styled.div`
  text-align: center;
`

export const Content = styled.header`
  background: linear-gradient(90deg, rgba(37,37,37,1) 0%, rgba(129,129,129,1) 51%, rgba(37,37,37,1) 100%);;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const AboutContent = styled(Content)`
  align-items: flex-start;
`

export const AppLink = styled(Link)`
  color: #00A6AA;
`

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`

export const AboutLogo = styled.img`
  height: 200px;
  pointer-events: none;
  align-self: center;
  padding-top: 50px;
`

export const AboutTitle = styled.h1`
  font-size: 48px;
  margin: 50px 100px;
  color: #00A6AA;
  text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
`

export const AboutText = styled.p`
  font-size: 20px;
  color: white;
  margin: 0 150px;
`

export const EndpointButton = styled(Link)`
  z-index: 2;
  max-width: 270px;
  width: 100%;
  height: 60px;
  font-weight: 600;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: 0.1em;
  color: #00A6AA;
  cursor: pointer;
  text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
`

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  bottom: 0;
  z-index: 2;
  padding: 50px 0;
  cursor: pointer;
`

export const EndpointTitle = styled(AboutTitle)`
  font-size: 36px;
  align-self: flex-start;
  color: white;
`

export const EachCollapse = styled.div`
  width: 100%;
  align-self: flex-start;
  text-align: left;
`

export const Acc = styled(Accordion)`
  width: 70%;
  align-self: flex-start;
  margin-left: 150px;
`

export const AccItem = styled(AccordionItem)`
  background-color: white;
  border-radius: 10px;
  border: 1px solid #00A6AA;


`

export const ItemWrapper = styled.div`
  padding: 10px 0;

`

export const AccButton = styled(AccordionButton)`
  height: 50px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #00A6AA;
  cursor: pointer;

`

export const AccBox = styled(Box)`
` 
export const AccPanel = styled(AccordionPanel)`
  color: black;
`

export const AccTag = styled(Tag)`
  background-color: ${({action}) => action === 'Get' ? '#03adfc' : action === 'Put' ? '#fcd303' : action === 'Post' ? '#276100' : '#9c1503'};
  border-radius: 30px;
  border: 1px solid black;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  line-height: 20px;  
` 

export const AccTagLabel = styled(TagLabel)`
  width: 70px;
  text-transform: uppercase;
`

export const EndpointDescription = styled.div`
  font-size: 20px;
  color: black;
  font-style: italic;
  display: inline-block;
  text-align: center;
  margin-left: 30px;
`

export const AccTabList = styled(TabList)``

export const AccTab = styled(Tab)`
  width: 50%;
  border: none;
  border-bottom: 1px solid black;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  font-style: italic;

  &:first-of-type {
    border-right: 1px solid black;
  }

  &:hover {
    background-color: #00A6AA;
    transition: all .5s ease;
  }
`

export const AccTabPanels = styled(TabPanels)``

export const AccTabPanel = styled(TabPanel)`
  text-align: left;
`

export const AccTabs = styled(Tabs)`

` 

export const BusinessOperation = styled.div`
  font-size: 18px;
  padding: 20px;
`

export const BOSpan = styled.span`
  font-size: 20px;
  font-style: italic;
  color: #00A6AA;
`

export const CodeBlock = styled(SyntaxHighlighter)`
  font-size: 20px;
`