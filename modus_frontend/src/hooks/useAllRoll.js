import { useSelector } from 'react-redux';
export const useAllRoll = () => {
    const allRollData = useSelector(state => state.allRolls)
    return allRollData
}