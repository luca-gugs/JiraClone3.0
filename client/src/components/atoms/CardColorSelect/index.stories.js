import React from 'react';
import CardColorSelect from './index';
import { storiesOf } from '@storybook/react';

storiesOf('Atoms / CardColorSelect', module).add('default', () => (
  <CardColorSelect label='Sample Title' />
));
