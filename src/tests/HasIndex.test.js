import React from 'react';
import { shallow } from 'enzyme';
import HasIndex from '../HasIndex';

describe('HasIndex()', () => {
  const MockComponent = () => null;
  MockComponent.displayName = 'MockComponent';
  const MockComponentWithIndex = HasIndex(MockComponent, 'index');

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MockComponentWithIndex />);
  });

  it('has the expected displayName', () => {
    expect(MockComponentWithIndex.displayName).toBe('HasIndex(MockComponent)');
  });

  it('has an initial `index` state of 0', () => {
    expect(wrapper.state('index')).toBe(0);
  });

  it('passes the `index` state down as the `index` prop', () => {
    expect(wrapper.prop('index')).toBe(0);
    wrapper.setState({ index: 1 });
    expect(wrapper.prop('index')).toBe(1);
  });

  it('has an `index` state of 2 on decrement from 3', () => {
    wrapper.setState({ index: 3 });
    wrapper.prop('indexDecrement')();
    expect(wrapper.prop('index')).toBe(2);
  });

  it('has an `index` state of 1 on increment', () => {
    wrapper.setState({ index: 0 });
    wrapper.prop('indexIncrement')();
    expect(wrapper.prop('index')).toBe(1);
  });

  it('has the max `index` state on decrement from 0', () => {
    wrapper.setState({ index: 0 });
    wrapper.prop('indexDecrement')(3);
    expect(wrapper.prop('index')).toBe(2);
  });

  it('has the min `index` state on increment from the max', () => {
    wrapper.setState({ index: 2 });
    wrapper.prop('indexIncrement')(3);
    expect(wrapper.prop('index')).toBe(0);
  });
});
