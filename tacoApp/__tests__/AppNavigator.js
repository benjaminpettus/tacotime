import 'react-native';
import React from 'react';
import AppNavigator from '../app/navigation/AppNavigator';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <AppNavigator />
  );
  expect(tree).toMatchSnapshot();
});
