import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { adminRoutes, staffRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
    const authState = useSelector((state) => state.auth);

    const [routesUser, setRoutesUser] = useState([]);

    useEffect(() => {
        if (authState.role === 'admin') {
            setRoutesUser(adminRoutes);
        } else if (authState.role === 'staff') {
            setRoutesUser(staffRoutes);
        }
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {routesUser.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
