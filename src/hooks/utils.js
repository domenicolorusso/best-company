export function currencyFormatter(number){
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(number);
}