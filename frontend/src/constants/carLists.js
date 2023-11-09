import {
    car1,
    car2,
    car3,
    car4,
    car5,
    car6,
    car7,
    car8,
    car9,
} from "../assets"

export const cars = [
    {
        name: 'All New Rush',
        type: 'SUV',
        gas: '70L',
        transmission: 'Manual',
        people: '6',
        price: '$72.00',
        originalPrice: '$80.00',
        image: car1
    },
    {
        name: 'CR-V',
        type: 'SUV',
        gas: '80L',
        transmission: 'Manual',
        people: '6',
        price: '$80.00',
        image: car2,
        favorite: true
    },
    {
        name: 'All New Terios',
        type: 'SUV',
        gas: '90L',
        transmission: 'Manual',
        people: '6',
        price: '$74.00',
        image: car3
    },
    {
        name: 'New MG ZS',
        type: 'SUV',
        gas: '80L',
        transmission: 'Manual',
        people: '6',
        price: '$80.00',
        image: car4
    },
    {
        name: 'MG ZX Exclusive',
        type: 'Hatchback',
        gas: '70L',
        transmission: 'Manual',
        people: '4',
        price: '$76.00',
        originalPrice: '$80.00',
        image: car5,
        favorite: true
    },
    {
        name: 'Rolls - Royce',
        type: 'Sport',
        gas: '70L',
        transmission: 'Manual',
        people: '4',
        price: '$76.00',
        image: car6,
    },
    {
        name: 'MG ZX Excite',
        type: 'Hatchback',
        gas: '90L',
        transmission: 'Manual',
        people: '4',
        price: '$74.00',
        image: car7,
    }
]

export const typeFilters = [
    {
        name: 'Sport',
        count: 10,
        checked: true,
    },
    {
        name: 'SUV',
        count: 12,
        checked: true,
    },
    {
        name: 'MPV',
        count: 16,
        checked: false,
    },
    {
        name: 'Sedan',
        count: 20,
        checked: false,
    },
    {
        name: 'Coupe',
        count: 14,
        checked: false,
    },
    {
        name: 'Hatchback',
        count: 14,
        checked: false,
    }
]

export const capacityFilters = [
    {
        name: '2 Person',
        count: 10,
        checked: true,
    },
    {
        name: '4 Person',
        count: 14,
        checked: false,
    },
    {
        name: '6 Person',
        count: 12,
        checked: false,
    },
    {
        name: '8 or More',
        count: 16,
        checked: true,
    }
]

export const popularCars = [
    {
        name: 'Koenigsegg',
        type: 'Sport',
        gas: '90L',
        transmission: 'Manual',
        people: '2',
        price: '$99.00',
        image: car8,
        favorite: true,
    },
    {
        name: 'Nissan GT - R',
        type: 'Sport',
        gas: '80L',
        transmission: 'Manual',
        people: '2',
        price: '$80.00',
        originalPrice: '$100.00',
        image: car9,
        favorite: false,
    },
    {
        name: 'Rolls - Royce',
        type: 'Sedan',
        gas: '70L',
        transmission: 'Manual',
        people: '4',
        price: '$96.00',
        image: car6,
        favorite: true,
    },
    {
        name: 'Nissan GT - R',
        type: 'Sport',
        gas: '80L',
        transmission: 'Manual',
        people: '2',
        price: '$80.00',
        originalPrice: '$100.00',
        image: car9,
        favorite: false,
    },
]