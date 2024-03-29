import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
// import Dashboard from "./scenes/dashboard";
import Home from "./scenes/home";
import Topbar from "./scenes/global/Topbar";
import SidebarComponent from "./scenes/global/Sidebar";
import Footer from "./scenes/global/Footer";
import WordScramble from "./scenes/wordscramble";
import SecretWord from "./scenes/secretword";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";

import { inject } from '@vercel/analytics';
 
inject();

function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarComponent />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wordscramble" element={<WordScramble />} />
              <Route path="/secretword" element={<SecretWord />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
            <Footer />
          </main>
        </div>
      </ThemeProvider>

    </ColorModeContext.Provider>
  );
}

export default App;
