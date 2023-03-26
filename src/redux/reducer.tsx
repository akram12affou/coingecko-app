const thestate = {
    coins : [],
    coinDetails : []
}

export default (state = thestate, { type, payload }) => {
  switch (type) {

  case 'FetchCoins':
    return { ...state, coins:payload }
  case 'fetchCoinDetails':
  return { ...state, coinDetails:payload }
  default:
    return state
  }
}
