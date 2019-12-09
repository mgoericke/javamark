import React from 'react'

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    let person = this.props.person;
    return (
      <footer>
          <div className="container">
              <div className="row">
                  <div className="col-lg-10 col-lg-offset-1 text-center">
                      <h4><strong>{person.company}</strong>
                      </h4>
                      <p>{person.address.street}
                      <br/>{person.address.zip} {person.address.city}</p>
                      <ul className="list-unstyled">
                          <li><i className="fa fa-phone fa-fw"></i> {person.mobile}</li>
                          <li><i className="fa fa-envelope-o fa-fw"></i> <a href={"mailto:" + person.email}>{person.email}</a></li>
                      </ul>
                      <br/>
                      <ul className="list-inline">
                        {person.contact.map((contact, idx) => {
                          let className = "fa fa-" + contact.icon+ " fa-fw fa-3x";
                          return <li>
                              <a href={contact.href} title={contact.title}><i className={className}></i></a>
                          </li>
                        })}
                      </ul>
                      <hr className="small" />
                      <p className="text-muted">Copyright &copy; {person.website} {new Date().getFullYear()}</p>
                  </div>
              </div>
          </div>
          <a id="to-top" href="#top" className="btn btn-dark btn-lg"><i className="fa fa-chevron-up fa-fw fa-1x"></i></a>
      </footer>
    )
  }
}

export default Footer;
