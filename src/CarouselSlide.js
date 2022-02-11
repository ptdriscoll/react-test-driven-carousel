import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//As before, the function only takes a single argument, but now that argument is destructured.
//The values for the object keys imgUrl, description, and attribution are assigned to variables
//with those same names, and an object consisting of everything else in that object is assigned
//to a variable called rest using the destructuring spread syntax, ...rest.

//Conversely, the JSX spread {...rest} takes the key-value pairs from the rest object and converts
//them into props. Since rest was originally created from the leftover props given to CarouselSlide,
//everything but imgUrl, description, and attribution need to be passed through to the <figure>.

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: ${(props) =>
    typeof props.imgHeight === 'number'
      ? `${props.imgHeight}px`
      : props.imgHeight};
`;

const CarouselSlide = ({
  imgUrl,
  imgHeight,
  description,
  attribution,
  ...rest
}) => (
  <figure {...rest}>
    <Img src={imgUrl} imgHeight={imgHeight} />
    <figcaption>
      <strong>{description}</strong> {attribution}
    </figcaption>
  </figure>
);

CarouselSlide.propTypes = {
  imgHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  attribution: PropTypes.node,
};

CarouselSlide.defaultProps = {
  imgHeight: 500,
};

export default CarouselSlide;
