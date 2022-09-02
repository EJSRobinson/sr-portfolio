import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Collapse from '@mui/material/Collapse';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ApartmentIcon from '@mui/icons-material/Apartment';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ArticleIcon from '@mui/icons-material/Article';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';

type projectProps = {
  name: string;
  mainMenuOpen: boolean;
  setPage: Function;
  enableConcepting: boolean;
  enableOrthographics: boolean;
  enablePrespectives: boolean;
  enableCad: boolean;
  enableModel: boolean;
  iconType: string;
};

export default function ArcProject(props: projectProps) {
  const {
    name,
    mainMenuOpen,
    setPage,
    enableConcepting,
    enableCad,
    enableOrthographics,
    enablePrespectives,
    enableModel,
    iconType,
  } = props;
  const theme = useTheme();
  const [projectOpen, setProjectOpen] = React.useState(false);

  return (
    <ListItem sx={{ pl: 4 }}>
      <Box>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: projectOpen ? 'initial' : 'center',
            px: 2.5,
          }}
          onClick={() =>
            (() => {
              setPage(`${name}/about`);
              if (projectOpen) {
                setProjectOpen(false);
              } else {
                setProjectOpen(true);
              }
            })()
          }
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: mainMenuOpen ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {(() => {
              switch (iconType) {
                case 'mine':
                  return <NaturePeopleIcon />;
                default:
                  return <QuestionMarkIcon />;
              }
            })()}
          </ListItemIcon>
          <ListItemText primary={name} sx={{ opacity: mainMenuOpen ? 1 : 0 }} />
        </ListItemButton>
        <Collapse in={projectOpen} timeout='auto' unmountOnExit>
          <List disablePadding>
            {enableConcepting && (
              <ListItem sx={{ pl: 4 }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: mainMenuOpen ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => {
                    setPage(`${name}/concepting`);
                  }}
                >
                  <ListItemText primary={'Concepting'} sx={{ opacity: mainMenuOpen ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )}
            {enableOrthographics && (
              <ListItem sx={{ pl: 4 }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: mainMenuOpen ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => {
                    setPage(`${name}/orthographics`);
                  }}
                >
                  <ListItemText primary={'Orthographics'} sx={{ opacity: mainMenuOpen ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )}
            {enablePrespectives && (
              <ListItem sx={{ pl: 4 }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: mainMenuOpen ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => {
                    setPage(`${name}/perspectives`);
                  }}
                >
                  <ListItemText primary={'Perspectives'} sx={{ opacity: mainMenuOpen ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )}
            {enableCad && (
              <ListItem sx={{ pl: 4 }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: mainMenuOpen ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => {
                    setPage(`${name}/cad`);
                  }}
                >
                  <ListItemText primary={'CAD Model'} sx={{ opacity: mainMenuOpen ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )}
            {enableModel && (
              <ListItem sx={{ pl: 4 }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: mainMenuOpen ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => {
                    setPage(`${name}/model`);
                  }}
                >
                  <ListItemText primary={'Physical Model'} sx={{ opacity: mainMenuOpen ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </Collapse>
      </Box>
    </ListItem>
  );
}
