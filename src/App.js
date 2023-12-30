import "./App.css"
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import SearchResults from "./Components/SearchResults";
import MusicCategory from "./Components/MusicCategory";
import SportsCategory from "./Components/SportsCategory";
import LearningCategory from "./Components/LearningCategory"

function App() {

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },
      {
        path: "results",
        element: <SearchResults />
      },
      {
        path: "music",
        element: <MusicCategory />
      },
      {
        path: "sports",
        element: <SportsCategory />
      },
      {
        path: "Learning",
        element: <LearningCategory />
      },
    ]
  }])
  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>

      </Provider>
    </div>
  );
}

export default App;
