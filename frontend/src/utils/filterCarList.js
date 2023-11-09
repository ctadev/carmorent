import { useSelector, useDispatch } from 'react-redux';
import { updateCounts } from '../redux/activeFiltersSlice';

export const useFilteredCarList = () => {
    const cars = useSelector((state) => state.carList.carList);
    const dispatch = useDispatch();
    const activeFilters = useSelector((state) => state.activeFilters);
    const { typeFilters, capacityFilters } = activeFilters;
    const activeTypeFilters = typeFilters.filter((filter) => filter.checked).map((filter) => filter.name);
    const activeCapacityFilters = capacityFilters.filter((filter) => filter.checked).map((filter) => parseInt(filter.name, 10));

    console.log('carList', cars);
    console.log('activeTypeFilters', activeTypeFilters);

    const filterCarList = cars.filter((car) => {
        console.log('car.type', car.type);
        console.log('car.people', car.people);
        return activeTypeFilters.includes(car.type) && activeCapacityFilters.includes(parseInt(car.capacity, 10));
    });

    const typeCounts = {};
    const capacityCounts = {};

    filterCarList.forEach((car) => {
        typeCounts[car.type] = (typeCounts[car.type] || 0) + 1;
        const capacity = parseInt(car.capacity, 10);
        capacityCounts[capacity] = (capacityCounts[capacity] || 0) + 1;
    });

    dispatch(updateCounts({ typeCounts, capacityCounts }));

    console.log('filterCarList', filterCarList);

    return filterCarList;
};