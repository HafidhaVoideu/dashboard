import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./scenes/global/TopBar";
import Sidebar from "./scenes/global/Sidebar";
import {Routes, Route} from "react-router-dom"
import { Team } from "./scenes/team";
import { Contacts } from "./scenes/contacts";
import { Invoices } from "./scenes/invoices";
import { FormDash } from "./scenes/form";
import { Bar } from "./scenes/bar";
import { Pie } from "./scenes/pie";
import { Line } from "./scenes/line";
import { Calendar } from "./scenes/calendar/index.js";
import { Geography } from "./scenes/geography";
import { FAQ } from "./scenes/faq";


import Dashboard from "./scenes/dashboard";


function App() {

  const [theme, colorMode] = useMode()
  return (
      <ColorModeContext.Provider  value={colorMode}>
    <ThemeProvider theme={theme}>
      <div className="app">
          <Sidebar/>

        <main className  = "content">
          <TopBar />
          <Routes>
            <Route path= "/" element= {<Dashboard/>}/>
            <Route path= "/team" element= {<Team/>}/>


            <Route path= "/contacts" element= {<Contacts/>}/>
            <Route path= "/invoices" element= {<Invoices/>}/>
            <Route path= "/form" element= {<FormDash/>}/>
            <Route path= "/bar" element= {<Bar/>}/>
            <Route path= "/pie" element= {<Pie/>}/>
            <Route path= "/line" element= {<Line/>}/>
            <Route path= "/calendar" element= {<Calendar/>}/>
            <Route path= "/geography" element= {<Geography/>}/>
            <Route path= "/faq" element= {<FAQ/>}/>

          </Routes>

        </main>

      </div>



      <CssBaseline/>

    </ThemeProvider>

 </ColorModeContext.Provider>

  )


}

export default App;
