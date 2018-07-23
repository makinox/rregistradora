import React, { Component } from 'react'
import './index.css'

export default class App extends Component {
    render () {
        return (
            <section className="section-1">
                <div className="container">
                    <div className="row row-section1">
                        <div className="col col-12 col-md-6">
                            <h1>Registradoras y equipos del caribe</h1>
                            {/* <h3>Distribuidores de registradoras y equipos a nivel internacional</h3> */}
                            <p>Exportamos maquinas y sofware financiero para cualquier tipo de empresa, en cualquier parte del mundo</p>
                            <a href="jsx-a11y/href-no-hash" className="btn btn-outline-info">Explora</a>
                            <a href="jsx-a11y/href-no-hash" className="btn btn-info">Cuentanos como podemos ayudarte</a>
                        </div>
                        <div className="col col-12 col-md-6">
                            <h3>Distribuidores de registradoras y equipos a nivel internacional</h3>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}