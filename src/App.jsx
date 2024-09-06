import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import { AppLayout } from "./Component/Layout/AppLayout";
import {Home} from "./Pages/Home";
import {About} from "./Pages/About";
import {Contact} from "./Pages/Contact";
import { AppLayout } from './Component/Layout/AppLayout';
import {ErrorPage} from "./Pages/ErrorPage";
import "./App.css";
import { QuestionPage } from './Pages/QuestionPage';

const App = () => {
 

  const router = createBrowserRouter([


    {
         path:"/", element:<AppLayout/>,
         errorElement:<ErrorPage/>,

         children:[

          {
            path:"/" , element:<Home/>,
          },
          {
            path:"/about" , element:<About/>
          },
           {
            path:"/contact" , element:<Contact/>
          }, 
          {
            path:"/movie" , element:<QuestionPage/>
          },

         ]
    },


  
    
  ]);
  return <RouterProvider router={router} />;
};

export default App;