import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Favourites = () => {
    const [coins, setCoins] = useState(undefined)
    const dataArray = []


    const getCoins = () => {
        Object.keys(localStorage).forEach(async ele => {
            try {
                const response = await fetch(`https://api.coincap.io/v2/assets/${ele}`)
                if(!response.ok){
                    throw new Error ("Error to get the coin data", response.status)
                }
        
                const data = await response.json()
                dataArray.push(data)
                setCoins(dataArray)
        
            } catch (error) {
                console.error(error);
            }
        })
        //console.log(coins)
    }

    useEffect(()=> {
        getCoins()
    }, [])

    return(
        <>
        <ol>
            {coins && coins.map(ele => {
                console.log(ele)
                return(
                    <li key={ele.data.id}>
                        <Link to={"/coin/"+ ele.data.id}>
                            <h2>{ele.data.name}</h2>
                        </Link>
                    </li>
                )
            })}
        </ol>
        </>
    )
}

export default Favourites