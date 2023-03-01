import React from 'react'
import styled from 'styled-components'

import Tile from 'src/components/layout/Tile'

const Wrapper = styled.table`
  table-layout: fixed;
  width: 100%;
  margin-bottom: 0.5rem;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 2px solid ${(props) => props.theme.colors.input};
  border-collapse: collapse;
  overflow: hidden;

  tr:nth-child(2n + 1) {
    background-color: ${(props) => props.theme.colors.tile};
  }

  th {
    padding: 0.75rem 0 0.75rem 0.75rem;
    font-size: 0.875rem;
    text-align: left;
    border-bottom: 2px solid ${(props) => props.theme.colors.title};
  }
  td {
    font-size: 0.8125rem;
    width: 60%;
    padding: 0.75rem;
  }
  td + td,
  th + th {
    width: 20%;
    font-weight: 700;
    text-align: right;
  }
`
const Text = styled.p`
  margin: 0;
  font-size: 0.75rem;
  font-weight: 300;
  text-align: right;
`
const Toggle = styled.button`
  display: inline;
  margin: 0;
  padding: 0;
  font-size: 0.65rem;
  color: ${(props) => props.theme.colors.main};
  background: none;
  border: none;
  cursor: pointer;
`
export default function Table(props) {
  return (
    <Tile.Tile large>
      <Tile.Content>
        <Wrapper>
          <tbody>
            <tr>
              <th>
                {props.title}{' '}
                {props.setNewWebsites && (
                  <Toggle
                    onClick={() =>
                      props.setNewWebsites(
                        (prevNewWebsites) => !prevNewWebsites
                      )
                    }
                  >
                    ({props.newWebsites ? 'Voir tous' : 'Voir les nouveaux'})
                  </Toggle>
                )}
              </th>
              <th>Visites</th>
              <th>%</th>
            </tr>
            {props.data &&
              props.data.map(
                (line, index) =>
                  (!props.limit || index < props.limit) && (
                    <tr key={line.label + line.nb_visits}>
                      <td>{line.label}</td>
                      <td>{line.nb_visits?.toLocaleString('fr-fr')}</td>
                      <td>
                        {props.total &&
                          Math.round((line.nb_visits / props.total) * 10000) /
                            100}
                        %
                      </td>
                    </tr>
                  )
              )}
          </tbody>
        </Wrapper>
        <Text>Données valables pour les 30 derniers jours</Text>
      </Tile.Content>
    </Tile.Tile>
  )
}
