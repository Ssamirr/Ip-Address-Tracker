import React from 'react'

function Information(props) {

    const { data } = props

    return (
        <>
                <div className="info">

                    <div>
                        <p>ip address</p>
                        <h3>{data.ip}</h3>
                    </div>

                    <div className="line">
                    </div>

                    <div>
                        <p>location</p>
                        <h3>{data.location.city}, {data.location.country} </h3>
                    </div>

                    <div className="line">
                    </div>

                    <div>
                        <p>timezone</p>
                        <h3>UTC {data.location.timezone}</h3>
                    </div>

                    <div className="line">
                    </div>

                    <div>
                        <p>isp</p>
                        <h3>{data.isp}</h3>
                    </div>

                </div>
            
        </>
    )
}

export default Information