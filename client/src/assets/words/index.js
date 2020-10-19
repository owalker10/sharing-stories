import React from 'react'

const filenames = ['clothing','food','holidays','map','sports','story']


const files = {}
filenames.map(n => {
    files[n] = {
        static: require(`./${n}.png`),
        gif: require(`./${n}.gif`)
    }
})

export default files