import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";
import store from "./components/Redux/store";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchSuggestions from "./components/SearchSuggestions";
import VideoShimmer from "./components/VideoShimmer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,

      children: [
     
        { path: "/",
         element: <MainContainer /> },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/search",
          element: <SearchSuggestions />,
        },
           {
          path: "/shimmer",
          element: <VideoShimmer/>,
        },
      ],
    },
  ]);
  return (
    <div>
      <Provider store={store}>
      
       
           {/* <Header /> */}
         
     
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
