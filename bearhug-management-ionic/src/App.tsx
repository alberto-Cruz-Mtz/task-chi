import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
import "@ionic/react/css/palettes/dark.class.css";

/* Theme variables */
import "./theme/variables.css";
import LandingPage from "./pages/landing-page/LandingPage";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import {
  findUserByUsernameAndPassword,
  registerUser,
} from "./pages/auth/findUser";
import Product from "./pages/home/products/Product";
import FormAdd from "./pages/home/components/FormAdd";
import FormUpdate from "./pages/home/components/FormUpdate";
import Form from "./pages/home/components/Form";
import FormDelete from "./pages/home/components/FormDelete";
import TableProducts from "./pages/home/components/TableProducts";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/log-in">
          <Auth
            action={findUserByUsernameAndPassword}
            title="Bienvenido devuelta"
          />
        </Route>
        <Route exact path="/sign-up">
          <Auth action={registerUser} title="Registrate ahora" />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/home/product/add">
          <Product form={<FormAdd />} title="Registra tu producto" />
        </Route>
        <Route exact path="/home/product/update">
          <Product form={<FormUpdate />} title="Registra tu producto" />
        </Route>
        <Route exact path="/home/product/search">
          <Product form={<Form />} title="Registra tu producto" />
        </Route>
        <Route exact path="/home/product/delete">
          <Product form={<FormDelete />} title="Registra tu producto" />
        </Route>
        <Route exact path="/home/product/all">
          <TableProducts />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
