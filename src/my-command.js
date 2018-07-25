import React from 'react';
import { render, Text, Artboard } from 'react-sketchapp';
import styled from 'styled-components/primitives';

const HelloLabel = styled.Text`
  font-size: 24;
  font-weight: bold;
  padding: 4px;
  text-align: center;
`;

const SamplePage = () => (
  <Artboard
    name='Sample Artboard'
    style={{
      width: 375,
      height: 667,
    }}
  >
    <HelloLabel name='hello label'>Hello world! in Artboard</HelloLabel>
  </Artboard>
);

export default (context) => {
  render(
    <SamplePage />,
    context.document.currentPage()
  );
}