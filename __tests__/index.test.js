import React from 'react';
import FakeImg from '../src/index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<FakeImg alt="" width={200} height={200} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});