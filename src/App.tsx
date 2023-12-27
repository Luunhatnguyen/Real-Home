import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, ReactNode } from 'react';

import { publicRoutes } from './routes/routes';
import MainLayout from './layouts/MainLayout/MainLayout';
import BackToTop from './components/BackToTop/BackToTop';

type LayoutComponent = React.ComponentType<{ children: ReactNode }>;

function App() {
    return (
        <Router>
            <div className="App">
                <BackToTop />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        //What type of layout is a layout check
                        let Layout: LayoutComponent = MainLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = route.component;

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
