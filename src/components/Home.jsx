import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"



const Home = () => {
    const [coins, setCoins] = useState(null)
    
    const getCoins = async () => {
        try {
            const response = await fetch("https://api.coincap.io/v2/assets")
            if(!response.ok){
                throw new Error ("Error to get the coin data", response.status)
            }
    
            const data = await response.json()
            setCoins(data)
    
        } catch (error) {
            console.error(error);
        }
    }
    


    useEffect(() => {
        getCoins()
    }, [])

    
    return (
        <>
        <ol>
            {coins && coins.data.map(ele => {
                return(
                    <li key={ele.id}>
                        <Link to={"/coin/"+ ele.id}>
                            <h2>{ele.name}</h2>
                        </Link>
                    </li>
                )
            })}
        </ol>
        </>
    )
}

export default Home