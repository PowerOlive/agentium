import AppBar from '@material-ui/core/AppBar';
import yellow from '@material-ui/core/colors/yellow';
import Grid from '@material-ui/core/Grid';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {observer} from 'mobx-react';
import * as React from 'react';
import AboutCard from './about-card';
import EditUaListCard from './edit-ua-list-card';
import './options-view.css';

const APP_BAR_THEME = createMuiTheme({
  palette: {
    primary: {
      main: yellow[800],
      contrastText: '#fff',
    },
  },
});

const CardWrapper: React.StatelessComponent<{}> = ({children}) => (
  <Grid item={true} xs={12} md={10} lg={8}>
    {children}
  </Grid>
);

@observer
class OptionsView extends React.Component<{}, {}> {
  render() {
    document.body.classList.add('options-view');
    return (
      <div>
        <MuiThemeProvider theme={APP_BAR_THEME}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Agentium settings
              </Typography>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
        <Grid
          container={true}
          spacing={16}
          direction="row"
          justify="center"
          alignItems="center"
          className="options-cards-container"
        >
          <CardWrapper>
            <EditUaListCard />
          </CardWrapper>
          <CardWrapper>
            <AboutCard />
          </CardWrapper>
        </Grid>
      </div>
    );
  }
}

export default OptionsView;
