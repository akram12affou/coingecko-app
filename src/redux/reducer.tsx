const thestate = {
    coins : [],
    coinDetails : [],
    userInfo : [],
    favoriteCoins : [],
    open : false
}

export default (state = thestate, { type, payload } : any) => {
  switch (type) {

  case 'FetchCoins':
    return { ...state, coins:payload }
  case 'fetchCoinDetails':
  return { ...state, coinDetails:payload }
  case 'SetUserInfo':
  return { ...state, userInfo:payload }
  case 'SetFavoriteCoins':
  return { ...state, favoriteCoins:payload }
 
  default:
    return state
  }
}
