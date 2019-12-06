import React from "react";
import ReactDOM from "react-dom";

import Map from './section_map';
import Services from './section_services';
import Footer from './footer';

console.log('main js loaded');


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
  },
  {
    title: 'Database Development',
    icon: 'database',
    desc: 'Database development with current database products. SQL, NoSQL, ElasticSearch ...',
    href: ''
  },
  {
    title: 'API Development',
    icon: 'globe',
    desc: 'Create fast, scalable and highly available Web APIs ...',
    href: ''
  }
]

const personDetails = {
  company: 'Mark Göricke IT Consulting',
  website: 'www.javamark.de',
  address: {
    street: 'Karl-Marx-Allee 120',
    city: 'Berlin',
    zip: '10243'
  },
  mobile: '+49 (0) 170 218 45 17',
  email: 'info@javamark.de',
  contact: [
    {
      title: 'Follow me on LinkedIn',
      icon: 'linkedin',
      href: 'https://www.linkedin.com/in/mark-goericke/'
    },
    {
      title: 'Follow me on Xing',
      icon: 'xing',
      href: 'https://www.xing.com/profile/Mark_Goericke/cv'
    },
    {
      title: 'Follow me on Github',
      icon: 'github',
      href: 'https://github.com/mgoericke'
    },
    {
      title: 'Follow me on Twitter',
      icon: 'twitter',
      href: 'https://twitter.com/mguser3'
    }
  ]
}

ReactDOM.render( <Services key="services" services={myServices}/>, document.getElementById('section_services'));
ReactDOM.render( <Map key="map"/>, document.getElementById('section_map'));
ReactDOM.render( <Footer key="footer" person={personDetails}/>, document.getElementById('footer'));
