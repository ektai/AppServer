import React from 'react';
import { mount } from 'enzyme';
import RowContent from '.';
import Link from '../link';

describe('<RowContent />', () => {
  it('renders without error', () => {
    const wrapper = mount(     
      <RowContent>
          <Link type='page' title='Demo' isBold={true} fontSize={15} color='#333333' >Demo</Link>
          <Link type='page' title='Demo' fontSize={12} color='#A3A9AE' >Demo</Link>
          <Link type='action' title='Demo' fontSize={12} color='#A3A9AE' >Demo</Link>
          <Link type='page' title='0 000 0000000' fontSize={12} color='#A3A9AE' >0 000 0000000</Link>
          <Link type='page' title='demo@demo.com' fontSize={12} color='#A3A9AE' >demo@demo.com</Link>
      </RowContent>
    );

    expect(wrapper).toExist();
  });
});