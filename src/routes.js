import Converter from "./containers/Converter";

const routes = [
  {
    path: '/convert',
    component: Converter,
    exact: true,
    name: 'Convert'
  },
];

export default routes;
