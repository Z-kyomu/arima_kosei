import { RouteObject } from 'react-router-dom';
import NormalLayout from '../components/NormalLayout'; // Un composant représentant un layout normal
import Lol from '../Pages/Games/Lol';
import Games from '../Pages/Games';
import Home from '../Pages/Home';

const NormalRoutes: RouteObject = {
    path: "*",
    element: <NormalLayout />, // Utilisation du composant NormalLayout pour envelopper toutes les routes
    children: [
        {
            path: "news",
            element: <Games />, // Route vers le composant NewsFeed lorsque l'URL est /news
        },
        {
            path: "map",
            element: <Lol />, // Route vers le composant Map lorsque l'URL est /map
        },
        {
            path: "*", // Si l'URL ne correspond à aucune des routes définies ci-dessus
            element: <Home/>, // Redirige vers le route /matching avec un état de matchingState: false
        },
    ],
};

export default NormalRoutes;
