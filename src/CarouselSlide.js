import React from 'react';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

//As before, the function only takes a single argument, but now that argument is destructured.
//The values for the object keys imgUrl, description, and attribution are assigned to variables
//with those same names, and an object consisting of everything else in that object is assigned
//to a variable called rest using the destructuring spread syntax, ...rest.

//Conversely, the JSX spread {...rest} takes the key-value pairs from the rest object and converts
//them into props. Since rest was originally created from the leftover props given to CarouselSlide,
//everything but imgUrl, description, and attribution need to be passed through to the <figure>.

const CarouselSlide = ({ imgUrl, description, attribution, ...rest }) => (
  <figure {...rest}>
    <img src={imgUrl} />
    <figcaption>
      <strong>{description}</strong> {attribution}
    </figcaption>
  </figure>
);

CarouselSlide.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  description: propTypes.node.isRequired,
  attribution: propTypes.node,
};

export default CarouselSlide;
