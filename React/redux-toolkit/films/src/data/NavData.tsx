import * as FaIcons from 'react-icons/fa';

export const NavData = [
    {
        title: 'Поиск',
        path: '/',
        isFavorite: false,
        icon: <FaIcons.FaSearch/>,
    },
    {
        title: 'Избранное',
        path: '/favorites',
        isFavorite: true,
        icon: <FaIcons.FaRegStar/>,
    },
]