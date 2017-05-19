import 'react-native';
import React from 'react';
import PrimarySearch from '../app/components/PrimarySearch';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <PrimarySearch />
  );
  expect(tree).toMatchSnapshot();
});
