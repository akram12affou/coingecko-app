export const fetchCoins = (data: []) => {
    return(
        {
            type : 'FetchCoins',
            payload : data
        }
    )
}
export const fetchCoinDetails = (data: []) => {
    return(
        {
            type : 'fetchCoinDetails',
            payload : data
        }
    )
}
export const setUserInfo = (user: []) => {
    return(
        {
            type : 'SetUserInfo',
            payload : user
        }
    )
}
export const setFavoriteCoins = (coins: []) => {
    return(
        {
            type : 'SetFavoriteCoins',
            payload : coins
        }
    )
}
