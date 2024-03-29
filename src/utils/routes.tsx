import { createBrowserRouter } from "react-router-dom";
import { StartPage } from "../pages/startPager";
import { GamePage } from "../pages/gamePage";
import { TryAgainPage } from "../pages/tryAgainPage";
import { EndPage } from "../pages/endPage";

export const routes = createBrowserRouter([
  {
    path: '/',
    element:<StartPage />
  },
  {
    path: '/game',
    element:<GamePage />
  },
  {
    path: '/tryAgain',
    element:<TryAgainPage />
  },
  {
    path: '/endGame',
    element:<EndPage />
  },
]);