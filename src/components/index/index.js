import React, { Component } from 'react'
import Section1 from './section1/index'
import Section2 from './section2/index'

export default class App extends Component {
    render (){
        return (
            <section>
                <Section1/>
                <Section2/>
            </section>
        )
    }
}