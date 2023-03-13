import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Split from 'react-split-grid'
import { green } from '@mui/material/colors';

import logo from './logo_cef.gif';
import './App.css';
import NamedPanel from './NamedPanel';
import FieldDefPanel from './FieldDefPanel';
import PredefinedFieldsSetsPanel from './PredefinedFieldsSetsPanel';
import CSVOutputPanel from './CSVOutputPanel';
import DataInputPanel from './DataInputPanel';

const theme = createTheme({
  palette: {
    primary: {
      main: green[800]
    },
    secondary: {
      main: green[100],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#000',
          fontWeight: "bold",
          backgroundColor: "white"
        },
      },
    },
  },
});

function App() {
  const [columns, setColumns] = React.useState(`1fr 5px 1fr`);

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
            Regex Data Extractor
          </Typography>
        </Toolbar>
      </AppBar>
      <Split
        gridTemplateColumns={columns}
        onDrag={handleDrag}
        cursor="col-resize"
        minSize="300"
        render={({ getGridProps, getGutterProps }) => (
          <div className="split-grid" {...getGridProps()}>
            <Box className="split-column" sx={{backgroundColor: 'secondary.main'}}>
              <FieldDefPanel />
              <PredefinedFieldsSetsPanel />
              <CSVOutputPanel />
            </Box>
            <div
              className="gutter gutter-vertical"
              {...getGutterProps("column", 1)}
            />
            <Box className="split-column" sx={{backgroundColor: 'secondary.main'}}>
              <DataInputPanel />
            </Box>
          </div>
        )}
      />
    </ThemeProvider>
  );
}

export default App;
