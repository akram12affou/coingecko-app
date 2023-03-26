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