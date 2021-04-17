import loadable from "@loadable/component";
import Preloader from "./preloader";

export const Home = loadable(() => import("../Pages/Home"), {
    LoadingComponent: Preloader,
}) 