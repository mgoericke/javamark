import React from 'react';
import {shallow} from 'enzyme';
import Services from '../js/section-services';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter()
})

const myServices = [
  {
    title: 'Cloud Development',
    icon: 'cloud',
    desc: 'Build, migrate and deploy applications in the Amazon Web Services environment ...',
    href: ''
  },
  {
    title: 'Web Application Development',
    icon: 'file-code-o',
    desc: 'Backend development. Java, Spring, Python, JavaScript ...',
    href: ''
  }
]

describe("Services Component", () => {
  let component = shallow(<Services services={myServices}/>)
  it("Should be a 'section' element", () => {
    expect(component.type()).toEqual('section');
  })

  it("Should contain as many children as service examples", () => {
    expect(component.find('Service').length).toEqual(myServices.length);
  })
})
