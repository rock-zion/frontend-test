import loadable from "@loadable/component";
import Preloader from "./preloader";

export const HomePage = loadable(() => import("../Pages/Home"), {
  LoadingComponent: Preloader,
});

export const Characters = loadable(() => import("../Pages/Characters"), {
  LoadingComponent: Preloader,
});

export const Planets = loadable(() => import("../Pages/Planets"), {
  LoadingComponent: Preloader,
});

export const Species = loadable(() => import("../Pages/Species"), {
  LoadingComponent: Preloader,
});

export const Starships = loadable(() => import("../Pages/Starships"), {
  LoadingComponent: Preloader,
});

export const Vehicles = loadable(() => import("../Pages/Vehicles"), {
  LoadingComponent: Preloader,
});
