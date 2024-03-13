export function calcSale(cost, sale) {
    let procent = cost / 100 * sale
    return Math.round(cost - procent)
}