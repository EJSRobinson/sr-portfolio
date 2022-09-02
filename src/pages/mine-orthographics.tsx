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
import PdfShow from '../pdf-show';

const info = {
  totalPages: 4,
  zoomIncrement: 0.3,
  pageTitles: ['Roof Plan', 'Floor Plan - Year 1', 'Floor Plan - Post Year 1', 'Section A-A'],
  file: pdfFile,
};

export default function MineOrthographics() {
  return (
    <PdfShow
      totalPages={info.totalPages}
      zoomIncrement={info.zoomIncrement}
      pageTitles={info.pageTitles}
      file={info.file}
    />
  );
}
