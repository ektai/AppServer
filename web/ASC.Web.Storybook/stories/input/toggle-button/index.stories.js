import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import Readme from './README.md';
import { ToggleButton } from 'asc-web-components';
import Section from '../../../.storybook/decorators/section';

storiesOf('Components|Input', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add('toggle button', () => {
    return (
      <Section>
        <ToggleButton
          isChecked={boolean('isChecked', false)}
          isDisabled={boolean('isDisabled', false)}
          onChange={(e) => {
            window.__STORYBOOK_ADDONS.channel.emit('storybookjs/knobs/change', {
              name: 'isChecked',
              value: e.target.checked
            });
          }}
        />
      </Section>
    )
  });