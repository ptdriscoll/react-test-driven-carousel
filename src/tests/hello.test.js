import React from 'react';

//jest.spyOn(React, "createElement") replaces the React.createElement() method with a spy
//that intercepts calls, allowing us to make assertions about how that method is used.

//expect(spy).toHaveBeenCalledWith()does just what it says. It fails if the spy wasn't called
//or was called with a different set of arguments.

describe('JSX', () => {
  it('calls React.createElement', () => {
    const createElementSpy = jest.spyOn(React, 'createElement');
    <h1>Hello, JSX!</h1>;
    expect(createElementSpy).toHaveBeenCalledWith('h1', null, 'Hello, JSX!');
  });
});
