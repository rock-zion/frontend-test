import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import * as Pages from "./pageloader";
import { QueryClient, QueryClientProvider } from "react-query";
import FavouritesContextProvider from "./contexts/FavouritesContext";
import Navigation from "./components/Nav";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <FavouritesContextProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Router>
            <Navigation />
            <Switch>
              <Route path="/" exact>
                <Redirect to="/films" />
              </Route>
              <Route path="/films" exact component={Pages.HomePage} />
              <Route path="/people" exact component={Pages.Characters} />
              <Route path="/planets" exact component={Pages.Planets} />
              <Route path="/species" exact component={Pages.Species} />
              <Route path="/starships" exact component={Pages.Starships} />
              <Route path="/vehicles" exact component={Pages.Vehicles} />
              <Route path="/favourites" exact component={Pages.Favourites} />
              <Route
                path="/films/:name/:url"
                component={Pages.MoreDetailsPage}
              />
              <Route
                path="/planets/:name/:url/:id"
                component={Pages.MoreDetailsPage}
              />
              <Route
                path="/starships/:name/:url/:id"
                component={Pages.MoreDetailsPage}
              />
              <Route
                path="/species/:name/:url/:id"
                component={Pages.MoreDetailsPage}
              />
              <Route
                path="/vehicles/:name/:url/:id"
                component={Pages.MoreDetailsPage}
              />
              <Route
                path="/people/:name/:url/:id"
                component={Pages.MoreDetailsPage}
              />
            </Switch>
          </Router>
        </QueryClientProvider>
      </FavouritesContextProvider>
    </div>
  );
}

export default App;
