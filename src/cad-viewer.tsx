import React from 'react';
import ReactDOM from 'react-dom';
import { StlViewer } from 'react-stl-viewer';
import Box from '@mui/material/Box';
const url = './src/files/mine/test.stl';

const style = {
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
};

type cadProps = {
  path: string;
  hOffset: number;
  vOffset: number;
};

export default function CadViewer(props: cadProps) {
  const { path, hOffset, vOffset } = props;
  return (
    <Box sx={{ ml: hOffset, mt: vOffset }}>
      <StlViewer style={style} orbitControls shadows url={path} />
    </Box>
  );
}
