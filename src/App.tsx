import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

import { DataProvider } from './context/dataContext';

import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Category from './pages/Category';
import Bookmarked from './pages/Bookmarked';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='movies' element={<Category />} />
            <Route path='series' element={<Category />} />
            <Route path='bookmarked' element={<Bookmarked />} />
            <Route path='*' element={<NotFound />} />
        </Route>
    )
);

function App() {
    return (
        <DataProvider>
            <RouterProvider router={router} />
        </DataProvider>
    );
}

export default App;
