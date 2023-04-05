import React from 'react'
import { useSelector } from 'react-redux'

function FavoriteCoins() {
  const favoriteCoins = useSelector(state => state.favoriteCoins)
  return (
    <div>{favoriteCoins.map((e) => {
      return(
        <>
        {JSON.stringify(e)}
        </>
      )
    })
      }</div>
  )
}

export default FavoriteCoins