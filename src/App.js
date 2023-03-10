import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Split from 'react-split-grid'

import logo from './logo_cef.gif';
import './App.css';
import NamedPanel from './NamedPanel';

const theme = createTheme({
  palette: {
    primary: {
      main: "#275A14"
    }
  }
});

function App() {
  const [columns, setColumns] = React.useState(`1fr 5px 3fr`);

  const handleDrag = (direction, track, gridTemplateStyle) => {
    setColumns(gridTemplateStyle);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar variant="dense" disableGutters>
          <Box
            component="img"
            sx={{ height: 40, ml: '5px' }}
            alt="Centre d'étude de la forêt"
            src={logo}
          />
          <Typography variant="h6" color="inherit" component="div" style={{ marginLeft: 16 }}>
            Data Extractor
          </Typography>
        </Toolbar>
      </AppBar>
      <Split
        gridTemplateColumns={columns}
        onDrag={handleDrag}
        cursor="col-resize"
        minSize= "300"
        render={({ getGridProps, getGutterProps }) => (
          <div className="split-grid" {...getGridProps()}>
            <div className="split-column">
                    COLUMN A (position 0)
            </div>
            <div
              className="gutter gutter-vertical"
              {...getGutterProps("column", 1)}
            />
            <div className="split-column">
               COLUMN B (position 2)
            </div>
          </div>
        )}
      />
    </ThemeProvider>
  );
}

export default App;
