export const DisplayPriceInTenge = (price)=>{
    return new Intl.NumberFormat('en-CN',{
        style : 'currency',
        currency : 'KZT'
    }).format(price)
}