import Home from '../pages/Home/Home';
import config from '../config/confix';
import MainLayout from '../layouts/MainLayout/MainLayout';

type RouteType = {
    path: string;
    component: React.ComponentType<any>;
    layout?: React.ComponentType<any>;
};

const publicRoutes: RouteType[] = [{ path: config.home, component: Home, layout: MainLayout }];

const privateRoutes: {
    path: string;
    component: any;
}[] = [];

export { publicRoutes, privateRoutes };
