import express from 'express';
import authRoute from './auth.route';
// import userRoute from './user.route';
import docsRoute from './docs.route';
import balanceRoute from './balanceAccount.route';
import transactionRoute from './transaction.route';
import config from '../../config/config';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute
  },
  // {
  //   path: '/users',
  //   route: userRoute
  // },
  {
    path: '/account',
    route: balanceRoute
  },
  {
    path: '/transaction',
    route: transactionRoute
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

export default router;
