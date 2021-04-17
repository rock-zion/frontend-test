import loadable from "@loadable/component";
import Preloader from "./preloader";

export const HomePage = loadable(() => import("../Pages/Home"), {
  LoadingComponent: Preloader,
});
