import { useSelector } from 'react-redux';
export const useBasket = () => {
    const basketData = useSelector(state => state.basket)
    return basketData
}
