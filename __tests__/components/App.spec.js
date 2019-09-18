import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import App from '../../App';
import * as response from '../../responses';
import { toBeEmpty, toHaveTextContent } from '@testing-library/jest-native';
expect.extend({ toBeEmpty, toHaveTextContent });

describe('App', () => {
  it('renders the correct title', () => {
      const { queryByText } = render(<App />);
      expect(queryByText('Magic 8 Ball')).not.toBeNull();
  });

  it('renders the correct button title', () => {
      const { queryByTestId, queryByText } = render(<App />);
      expect(queryByTestId('button')).not.toBeNull();
      expect(queryByText('Click Me')).not.toBeNull();
  });

  it('renders the correct image background', () => {
      const { queryByTestId } = render(<App />);
      expect(queryByTestId('image-background')).not.toBeNull();
      // expect(queryByText('Click Me')).not.toBeNull();
  });


  it('renders a response with an empty string', () => {
      const { queryByTestId} = render(<App />);
      const responseText = queryByTestId("response-text")
      expect(responseText).not.toBeNull();
      expect(responseText).toHaveTextContent("")
  });

  it('when the button is clicked, get response is called', () => {
    response.getResponse = jest.fn().mockImplementationOnce(() => {return "N"})
      const { queryByTestId } = render(<App />);
      const button = queryByTestId('button')
      const responseText = queryByTestId("response-text")
      fireEvent.press(button)
      expect(response.getResponse).toHaveBeenCalled();
      expect(responseText).toHaveTextContent("N");
  });

});
