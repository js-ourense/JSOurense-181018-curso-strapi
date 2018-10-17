import React, { Component } from 'react'

class Footer extends Component {

  render() {
    return (
      <footer className="w3-grey w3-row-padding w3-padding-32">
      <div className="w3-center">
        <h3>
          <cite>Sapere aude</cite>
        </h3>
        <p>Powered by
          <a href="http://ourense.javascript.gal/"> © {this.props.year} Grupo de programadores de JavaScript de Ourense.</a>
        </p>
      </div>
    </footer>
    );
  }
}

export default Footer