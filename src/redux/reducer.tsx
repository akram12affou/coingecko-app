const thestate = {
    coins : [],
    coinDetails : [],
    userInfo : [],
    favoriteCoins : []
}

export default (state = thestate, { type, payload }) => {
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
