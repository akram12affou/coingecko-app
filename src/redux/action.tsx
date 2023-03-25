export const fetchCoins = (data: []) => {
    return(
        {
            type : 'FetchCoins',
            payload : data
        }
    )
}