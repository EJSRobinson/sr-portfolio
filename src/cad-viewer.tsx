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
  title: string;
};

export default function CadViewer(props: cadProps) {
  const { path, hOffset, vOffset, title } = props;
  return (
    <>
      <Box sx={{ ml: hOffset }}>
        <h4>{title}</h4>
      </Box>
      <Box sx={{ ml: hOffset, mt: vOffset }}>
        <StlViewer
          style={style}
          showAxes
          orbitControls
          shadows
          url={path}
          modelProps={{ scale: 0.2 }}
        />
      </Box>
    </>
  );
}
