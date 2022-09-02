import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

// Importing your sample PDF
import pdfFile from '../files/mine/orth.pdf';

type pdfInfo = {
  totalPages: number;
  zoomIncrement: number;
  pageTitles: string[];
  file: any;
};

export default function PdfShow(props: pdfInfo) {
  const minZoom = 0.7;
  const width = 1100;
  const height = width / 2 ** (1 / 2);

  const { totalPages, zoomIncrement, pageTitles, file } = props;
  const [zoom, setZoom] = React.useState(minZoom);
  const [pageNum, setPageNum] = React.useState(1);

  return (
    <>
      <h4>{pageTitles[pageNum - 1]}</h4>
      <Box sx={{ width: width + 5, height: height + 5, border: 1 }}>
        <div style={{ width: width, height: height, overflow: 'scroll' }}>
          <Document className='lightbox-pdf' file={file}>
            <Page pageNumber={pageNum} scale={zoom} />
          </Document>
        </div>
      </Box>
      <Box>
        <IconButton
          color='primary'
          component='label'
          onClick={() => {
            if (pageNum > 1) {
              setPageNum(pageNum - 1);
              setZoom(minZoom);
            }
          }}
          disabled={pageNum === 1}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          color='primary'
          component='label'
          onClick={() => {
            if (zoom > minZoom) {
              setZoom(zoom - zoomIncrement);
            }
          }}
          disabled={zoom <= minZoom}
        >
          <RemoveIcon />
        </IconButton>
        <IconButton
          color='primary'
          component='label'
          onClick={() => {
            setZoom(zoom + zoomIncrement);
          }}
        >
          <AddIcon />
        </IconButton>
        <IconButton
          color='primary'
          component='label'
          disabled={pageNum >= totalPages}
          onClick={() => {
            setPageNum(pageNum + 1);
            setZoom(minZoom);
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </>
  );
}
