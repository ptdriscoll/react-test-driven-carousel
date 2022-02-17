import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from '../src/Carousel';
import slides from '../example/slides';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

storiesOf('Carousel', module).add('default', () => (
  <Carousel slides={slides} onIndexChange={action('onIndexChange')} />
));

const stories = storiesOf('Carousel', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Carousel
    autoAdvanceDelay={number('autoAdvanceDelay', 10e3)}
    slides={slides}
    onIndexChange={action('onIndexChange')}
  />
));
