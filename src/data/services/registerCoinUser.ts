import { api } from './api';

type CoinUserRequestData = {
    symbol: string,
    price_purchase: string,
    investment: string,
    leverage: number

}

export function createCoinUser(data:CoinUserRequestData){
    console.log('entrou')

    console.log(data)
    const response = api.post("store/coin", {
        symbol: data.symbol,
        price_purchase: data.price_purchase,
        investment: data.investment,
        leverage: data.leverage
    })

    return true;
}