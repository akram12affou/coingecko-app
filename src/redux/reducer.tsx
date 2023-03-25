const thestate = {
    coins : []
}

export default (state = thestate, { type, payload }) => {
  switch (type) {

  case 'FetchCoins':
    return { ...state, coins:payload }

  default:
    return state
  }
}
