import React from 'react';
import renderer from 'react-test-renderer';

import GoButton from '../../app/components/GoButton';
import GoColors from '../../app/config/GoColors';

/**
 * Test whether different variants of the GoButton render correctly (with mixed colors)
 */
it('GoButton renders correctly with available colors in config', () => {
  for (const color in GoColors) {
    for (const backgroundColor in GoColors) {
      const tree = renderer.create(<GoButton text="Test" color={color} backgroundColor={backgroundColor} onPress={[Function]} />).toJSON();
      expect(tree).toMatchSnapshot();
    }
  }
});

/**
 * Test whether GoButton renders correctly with optional properties not set
 */
it('GoButton renders correctly with optional properties not set', () => {
  const tree = renderer.create(<GoButton text="Test" onPress={[Function]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
