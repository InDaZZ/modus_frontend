import { useSelector } from 'react-redux';
export const useAllPizzas = (data) => {
    const allPizzasData = useSelector(state => state.allPizzas)
    return allPizzasData
}