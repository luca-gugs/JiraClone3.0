import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  TypeBody,
  TypeHeader1,
  TypeHeader2,
  TypeHeader3,
  TypeHeader4,
} from '.';

storiesOf('Atoms / Typography', module).add('default', () => (
  <>
    <TypeHeader1>H1. Heading / 1</TypeHeader1>
    <TypeHeader2>H2. Heading / 2</TypeHeader2>
    <TypeHeader3>H3. Heading / 3</TypeHeader3>
    <TypeHeader4>H4. Heading / 4</TypeHeader4>
    <TypeBody>
      body. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </TypeBody>
  </>
));
