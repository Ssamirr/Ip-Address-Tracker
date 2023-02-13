import React, { useState } from 'react'
import Header from '../components/Header'
import Map from '../components/Map'

function Home() {

    const [data, setData] = useState({})

    return (
        <>
            <Header data={data} setData={setData} />
            <Map data={data} />
        </>
    )
}

export default Home