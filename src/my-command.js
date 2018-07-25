import React from 'react';
import { render, Text, Artboard } from 'react-sketchapp';

export default (context) => {
  render(
    <Artboard
      name='Sample Artboard'
      style={{
        width: 375,
        height: 667,
      }}
    >
      <Text>Hello world! in Artboard</Text>
    </Artboard>,
    context.document.currentPage()
  );
}