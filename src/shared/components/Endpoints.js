import React from "react";
import { AboutTitle, Acc, AccBox, AccButton, AccItem, AccPanel, AccTab, AccTabList, AccTabPanel, AccTabPanels, AccTabs, AccTag, AccTagLabel, BOSpan, BusinessOperation, ButtonContainer, CodeBlock, Content, EndpointButton, EndpointDescription, EndpointTitle, ItemWrapper, Wrapper } from "../styles/AppStyles";
import {
  AccordionIcon,
} from '@chakra-ui/react'

import { EndpointList } from "./Lists";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Endpoints = () => {
return (
    <Wrapper>
      <Content>
        <AboutTitle>Endpoints</AboutTitle>
        <EndpointTitle>User</EndpointTitle>
        {EndpointList.map((endpoint) => endpoint.noun === 'User' ? <Acc allowMultiple={false} allowToggle>
          <ItemWrapper>
            <AccItem>
                <AccButton>
                  <AccBox flex='1' textAlign='left'>
                    <AccTag action={endpoint.action}>
                      <AccTagLabel>{endpoint.action}</AccTagLabel>
                    </AccTag>
                    <EndpointDescription>{endpoint.desc}</EndpointDescription>
                  </AccBox>
                  <AccordionIcon />
                </AccButton>
              <AccPanel pb={4}>
                <AccTabs variant='unstyled'>
                  <AccTabList>
                    <AccTab _selected={{bg: '#00A6AA'}}>Description</AccTab>
                    <AccTab _selected={{bg: '#00A6AA'}}>Test</AccTab>
                  </AccTabList>
                  <AccTabPanels>
                    <AccTabPanel>
                      <BusinessOperation>
                        <BOSpan>
                          Business Operation: {' '}
                        </BOSpan>
                        {endpoint.businessOperation}
                      </BusinessOperation>
                      <BusinessOperation>
                      <BOSpan>
                          Endpoint: {' '}
                        </BOSpan>
                        {endpoint.endpoint}
                      </BusinessOperation>
                    </AccTabPanel>
                    <AccTabPanel>
                    <CodeBlock language="javascript" style={dracula}>
                      {endpoint.tests}
                    </CodeBlock>
                    </AccTabPanel>
                  </AccTabPanels>
                </AccTabs>
              </AccPanel>
            </AccItem>
          </ItemWrapper>
        </Acc>
         : '')}
        <EndpointTitle>Walker</EndpointTitle>
        {EndpointList.map((endpoint) => endpoint.noun === 'Walker' ? <Acc allowMultiple={false} allowToggle>
          <ItemWrapper>
            <AccItem>
                <AccButton>
                  <AccBox flex='1' textAlign='left'>
                    <AccTag action={endpoint.action}>
                      <AccTagLabel>{endpoint.action}</AccTagLabel>
                    </AccTag>
                    <EndpointDescription>{endpoint.desc}</EndpointDescription>
                  </AccBox>
                  <AccordionIcon />
                </AccButton>
              <AccPanel pb={4}>
                <AccTabs colorScheme='green'>
                  <AccTabList>
                    <AccTab _selected={{bg: '#00A6AA'}}>Description</AccTab>
                    <AccTab _selected={{bg: '#00A6AA'}}>Test</AccTab>
                  </AccTabList>
                  <AccTabPanels>
                    <AccTabPanel>
                      <BusinessOperation>
                        <BOSpan>
                          Business Operation: {' '}
                        </BOSpan>
                        {endpoint.businessOperation}
                      </BusinessOperation>
                      <BusinessOperation>
                      <BOSpan>
                          Endpoint: {' '}
                        </BOSpan>
                        {endpoint.endpoint}
                      </BusinessOperation>
                    </AccTabPanel>
                    <AccTabPanel>
                    <CodeBlock language="javascript" style={dracula}>
                      {endpoint.tests}
                    </CodeBlock>
                    </AccTabPanel>
                  </AccTabPanels>
                </AccTabs>
              </AccPanel>
            </AccItem>
          </ItemWrapper>
        </Acc>
         : '')}
        <EndpointTitle>Authorization</EndpointTitle>
        {EndpointList.map((endpoint) => endpoint.noun === 'Authorization' ? <Acc allowMultiple={false} allowToggle>
          <ItemWrapper>
            <AccItem>
                <AccButton>
                  <AccBox flex='1' textAlign='left'>
                    <AccTag action={endpoint.action}>
                      <AccTagLabel>{endpoint.action}</AccTagLabel>
                    </AccTag>
                    <EndpointDescription>{endpoint.desc}</EndpointDescription>
                  </AccBox>
                  <AccordionIcon />
                </AccButton>
              <AccPanel pb={4}>
                <AccTabs colorScheme='green'>
                  <AccTabList>
                    <AccTab _selected={{bg: '#00A6AA'}}>Description</AccTab>
                    <AccTab _selected={{bg: '#00A6AA'}}>Test</AccTab>
                  </AccTabList>
                  <AccTabPanels>
                    <AccTabPanel>
                      <BusinessOperation>
                        <BOSpan>
                          Business Operation: {' '}
                        </BOSpan>
                        {endpoint.businessOperation}
                      </BusinessOperation>
                      <BusinessOperation>
                      <BOSpan>
                          Endpoint: {' '}
                        </BOSpan>
                        {endpoint.endpoint}
                      </BusinessOperation>
                    </AccTabPanel>
                    <AccTabPanel>
                    <CodeBlock language="javascript" style={dracula}>
                      {endpoint.tests}
                    </CodeBlock>
                    </AccTabPanel>
                  </AccTabPanels>
                </AccTabs>
              </AccPanel>
            </AccItem>
          </ItemWrapper>
        </Acc>
         : '')}
        <EndpointTitle>Pet</EndpointTitle>
        {EndpointList.map((endpoint) => endpoint.noun === 'Pet' ? <Acc allowMultiple={false} allowToggle>
          <ItemWrapper>
            <AccItem>
                <AccButton>
                  <AccBox flex='1' textAlign='left'>
                    <AccTag action={endpoint.action}>
                      <AccTagLabel>{endpoint.action}</AccTagLabel>
                    </AccTag>
                    <EndpointDescription>{endpoint.desc}</EndpointDescription>
                  </AccBox>
                  <AccordionIcon />
                </AccButton>
              <AccPanel pb={4}>
                <AccTabs colorScheme='green'>
                  <AccTabList>
                    <AccTab _selected={{bg: '#00A6AA'}}>Description</AccTab>
                    <AccTab _selected={{bg: '#00A6AA'}}>Test</AccTab>
                  </AccTabList>
                  <AccTabPanels>
                    <AccTabPanel>
                      <BusinessOperation>
                        <BOSpan>
                          Business Operation: {' '}
                        </BOSpan>
                        {endpoint.businessOperation}
                      </BusinessOperation>
                      <BusinessOperation>
                      <BOSpan>
                          Endpoint: {' '}
                        </BOSpan>
                        {endpoint.endpoint}
                      </BusinessOperation>
                    </AccTabPanel>
                    <AccTabPanel>
                    <CodeBlock language="javascript" style={dracula}>
                      {endpoint.tests}
                    </CodeBlock>
                    </AccTabPanel>
                  </AccTabPanels>
                </AccTabs>
              </AccPanel>
            </AccItem>
          </ItemWrapper>
        </Acc>
         : '')}
        <EndpointTitle>Service</EndpointTitle>
        {EndpointList.map((endpoint) => endpoint.noun === 'Service' ? <Acc allowMultiple={false} allowToggle>
          <ItemWrapper>
            <AccItem>
                <AccButton>
                  <AccBox flex='1' textAlign='left'>
                    <AccTag action={endpoint.action}>
                      <AccTagLabel>{endpoint.action}</AccTagLabel>
                    </AccTag>
                    <EndpointDescription>{endpoint.desc}</EndpointDescription>
                  </AccBox>
                  <AccordionIcon />
                </AccButton>
              <AccPanel pb={4}>
                <AccTabs colorScheme='green'>
                  <AccTabList>
                    <AccTab _selected={{bg: '#00A6AA'}}>Description</AccTab>
                    <AccTab _selected={{bg: '#00A6AA'}}>Test</AccTab>
                  </AccTabList>
                  <AccTabPanels>
                    <AccTabPanel>
                      <BusinessOperation>
                        <BOSpan>
                          Business Operation: {' '}
                        </BOSpan>
                        {endpoint.businessOperation}
                      </BusinessOperation>
                      <BusinessOperation>
                      <BOSpan>
                          Endpoint: {' '}
                        </BOSpan>
                        {endpoint.endpoint}
                      </BusinessOperation>
                    </AccTabPanel>
                    <AccTabPanel>
                    <CodeBlock language="javascript" style={dracula}>
                      {endpoint.tests}
                    </CodeBlock>
                    </AccTabPanel>
                  </AccTabPanels>
                </AccTabs>
              </AccPanel>
            </AccItem>
          </ItemWrapper>
        </Acc>
         : '')}
        <EndpointTitle>Events</EndpointTitle>
        {EndpointList.map((endpoint) => endpoint.noun === 'Event' ? <Acc allowToggle>
          <ItemWrapper>
            <AccItem>
                <AccButton>
                  <AccBox flex='1' textAlign='left'>
                    <AccTag action={endpoint.action}>
                      <AccTagLabel>{endpoint.action}</AccTagLabel>
                    </AccTag>
                    <EndpointDescription>{endpoint.desc}</EndpointDescription>
                  </AccBox>
                  <AccordionIcon />
                </AccButton>
              <AccPanel pb={4}>
                <AccTabs colorScheme='green'>
                  <AccTabList>
                    <AccTab _selected={{bg: '#00A6AA'}}>Description</AccTab>
                    <AccTab _selected={{bg: '#00A6AA'}}>Test</AccTab>
                  </AccTabList>
                  <AccTabPanels>
                    <AccTabPanel>
                      <BusinessOperation>
                        <BOSpan>
                          Business Operation: {' '}
                        </BOSpan>
                        {endpoint.businessOperation}
                      </BusinessOperation>
                      <BusinessOperation>
                      <BOSpan>
                          Endpoint: {' '}
                        </BOSpan>
                        {endpoint.endpoint}
                      </BusinessOperation>
                    </AccTabPanel>
                    <AccTabPanel>
                    <CodeBlock language="javascript" style={dracula}>
                      {endpoint.tests}
                    </CodeBlock>
                    </AccTabPanel>
                  </AccTabPanels>
                </AccTabs>
              </AccPanel>
            </AccItem>
          </ItemWrapper>
        </Acc>
         : '')}
         <ButtonContainer>
           <EndpointButton to='/'>Home</EndpointButton>
         </ButtonContainer>
      </Content>
    </Wrapper>
  )
}

export default Endpoints