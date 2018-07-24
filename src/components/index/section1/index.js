import React, { Component } from 'react'
import img1 from './../../../assets/index/section1/img1.jpg'
import './index.css'

export default class App extends Component {
    render () {
        return (
            <section className="section-1">
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-md-6 col-section1">
                            <h1>Registradoras y equipos del caribe</h1>
                            <p>Distribuidores de registradoras y equipos a nivel internacional.
                                <br/>
                                Exportamos maquinas y sofware financiero para cualquier tipo de empresa, en cualquier parte del mundo.
                            </p>
                            <a href="jsx-a11y/href-no-hash" className="m-1 btn btn-outline-info">Explora</a>
                            <a href="jsx-a11y/href-no-hash" className="m-1 btn btn-info">Cuentanos como podemos ayudarte</a>
                        </div>
                        <div className="col col-12 col-md-6 pt-4">
                            <img src={ img1 } alt="Negocios utilizando regypos" className="rounded-circle" width="600" height="600"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}