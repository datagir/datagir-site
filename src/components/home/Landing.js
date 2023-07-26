import React from 'react'
import styled from 'styled-components'

import useMounted from 'src/hooks/useMounted'

import Title from './landing/Title'

const Wrapper = styled.div`
  position: relative;
  min-height: 24rem;
  margin-bottom: 6em;

  ${(props) => props.theme.mq.medium} {
    min-height: 41.6666667vw;
  }
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 24rem;
  height: 24rem;
  background-color: ${(props) => props.theme.colors.main};

  ${(props) => props.theme.mq.medium} {
    width: 41.6666667vw;
    height: 41.6666667vw;
  }
  ${(props) => props.theme.mq.small} {
    width: calc(50vw - 0.5rem);
    height: calc(50vw - 0.5rem);
  }
`
const Flex = styled.div`
  display: flex;

  ${(props) => props.theme.mq.small} {
    flex-direction: column;
  }
`
const Subtitle = styled.div`
  position: relative;
  width: 24rem;
  padding: 0 1rem 0;
  font-size: 1.5em;
  font-weight: 700;
  text-align: right;
  color: ${(props) => props.theme.colors.background};
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transition: opacity 1400ms 1400ms;

  ${(props) => props.theme.mq.medium} {
    width: 41.6666667vw;
    padding: 0 1.33333333vw 0;
  }

  ${(props) => props.theme.mq.small} {
    width: auto;
    margin-bottom: 1rem;
    padding: 0;
    font-size: 1.25rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors.text};
    text-align: left;
  }
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 34rem;
  margin: 0.25em 0 0 1rem;
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transition: opacity 1400ms 1650ms;

  ${(props) => props.theme.mq.medium} {
    width: auto;
    margin: 0.25em 0 0 1.33333333vw;
  }
  ${(props) => props.theme.mq.small} {
    align-items: inherit;
    margin: 0;
  }
`
const Text = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
`
export default function Landing(props) {
  const mounted = useMounted()
  return (
    <Wrapper>
      <Background />
      <Title mounted={mounted} />
      <Flex>
        <Subtitle mounted={mounted} />
        <Content mounted={mounted}>
          <Text
            dangerouslySetInnerHTML={{
              __html: `À la suite de la création de l’incubateur de l’ADEME (Accélérateur de la Transition Écologique), la marque Datagir disparaît pour laisser grandir ses deux projets phares, Nos Gestes Climat et Impact CO2.`,
            }}
          />
        </Content>
      </Flex>
    </Wrapper>
  )
}
