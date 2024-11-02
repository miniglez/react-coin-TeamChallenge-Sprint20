import React, {useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom"


const SingleCoin = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState(null)

    const getCoin = async () => {
        try {
            const response = await fetch(`https://api.coincap.io/v2/assets/${id}`)
            if(!response.ok){
                throw new Error ("Error to get the coin data", response.status)
            }
    
            const data = await response.json()
            setCoin(data)
    
        } catch (error) {
            console.error(error);
        }
    }

    const addFavourites = (coinToFavourite) => {
        localStorage.setItem(coinToFavourite, coinToFavourite)
    }

    useEffect(()=> {
        getCoin()
    }, [])

    return (
        <>
            {coin && (
                <>
                    <div>
                        <h1>{coin.data.name}</h1>
                        <h2>{coin.data.symbol}</h2>
                    </div>
                    <p>Valor moneda: {coin.data.priceUsd}</p>
                    <p>Cambio en las ultimas 24 horas: {coin.data.vwap24Hr}</p>
                    <button onClick={() => addFavourites(coin.data.id)}>Agregar a favorito</button>
                </>
            )
                }   
        </>
    )
}

export default SingleCoin