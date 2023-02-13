import React, { useEffect, useState } from 'react'
import arrow from "../assets/images/arrow.svg"
import Information from './Information';
import Loading from './Loading';

function Header(props) {

    let { data, setData } = props

    const [value, setValue] = useState("");
    const [change, setChange] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (change) {
            setLoading(true)
            fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_dTDi6Hf6A6iEvt5cf8S2qP56U2uIq&ipAddress=${value}`)
                .then(res => res.json())
                .then(data => {
                    if (Object.keys(data).includes("code")) {
                        setData({ error: "Not Data Found" });
                    } else {
                        setData(data)
                    }
                    setChange(false)
                    setLoading(false)
                })
        }
        // eslint-disable-next-line
    }, [change])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim().length) {
            setValue("89.219.155.176");
        }
        setChange(true)
        setData({})
    }

    return (
        <>
            <header>
                <h1>IP Address Tracker</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                        placeholder="Search for any IP address or domain"
                    />
                    <button ><span className="arrow">
                        <img src={arrow} alt="" /></span></button>
                </form>


                {JSON.stringify(data) !== "{}" && !Object.keys(data).includes("error") && !loading &&
                    <Information data={data} />
                }

            </header>

            {loading && <Loading />}

            {Object.keys(data).includes("error") &&
                <div className="error">Please make sure enter valid IP Address or Domain name</div>
            }
        </>
    )
}

export default Header