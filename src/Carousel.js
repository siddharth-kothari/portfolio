/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './Carousel.css'

function Carousel({ children, size }) {

    const sectionCount = Math.ceil(children.length / size)

    const buildPoints = () => {
        let temp = []

        for (let i = 0; i < sectionCount; i++) {
            temp.push(
                (<a href={'#section' + i} className="point" key={i}></a>)
            )
        }
        return temp
    }
    const build = (items, key) => {

        return (
            <section id={'section' + key} key={key}>
                {items.map((item) => item)}
            </section>
        )


    }
    const buildSection = () => {
        let template = []
        let ct = size
        let temp = []
        let key = 0
        for (let start = 0; start < children.length; start++) {
            if (ct <= 0) {
                ct = size;
                template.push(build(temp, key))
                temp = []
                temp.push(children[start])
                key++;
            }
            else {
                temp.push(children[start])
            }
            ct--;

        }
        if (temp.length > 0) {

            template.push(build(temp, key))

        }
        return template
    }


    return (
        <>
            <div className='Carousel'>
                {buildSection()}

            </div>
            <div className='points'>
                {buildPoints()}
            </div>

        </>
    )
}

export default Carousel