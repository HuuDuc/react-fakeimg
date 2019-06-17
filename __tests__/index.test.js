import React from 'react';
import FakeImg from '../src/index';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    const tree = renderer
        .create(<FakeImg alt="" width={200} height={200} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});