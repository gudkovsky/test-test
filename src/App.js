import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import StartPage from './components/pages/start-page/StartPage.jsx';
import FormPage from './components/pages/form-page/FormPage.jsx';
import LayoutForm from "./components/blocks/layout-form/LayoutForm.jsx";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<StartPage />}/>
          <Route path="create" element={<LayoutForm />}>
            <Route index element={<FormPage/>}/>
          </Route>
        </Route>
      </Routes>
    </HashRouter>
    )
  }
export default App;
