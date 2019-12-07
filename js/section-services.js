import React from 'react'

class Services extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <section id="services" className="services bg-primary">
          <div className="container">
              <div className="row text-center">
                  <div className="col-lg-10 col-lg-offset-1">
                      <div className="row">
                        {this.props.services.map((service, idx) => {
                          return <Service service={service} key={"service-" + idx}/>
                        }) }
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

class Service extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    let service = this.props.service;
    let className = 'fa fa-' + service.icon + ' fa-stack-1x text-primary';
    return (
      <div className="col-md-3 col-sm-6">
          <div className="service-item">
              <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className={className}></i>
          </span>
              <h4>
                  <strong>{service.title}</strong>
              </h4>
              <p>{service.desc}</p>
              { /* a href="#" className="btn btn-light">Learn More</a */ }
          </div>
      </div>
    )
  }
}

export default Services;
