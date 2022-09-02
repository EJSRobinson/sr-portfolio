import React, { Component } from 'react';
import Box from '@mui/material/Box';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import i1 from '../files/mine/i1.jpg';
import i2 from '../files/mine/i2.jpg';
import i3 from '../files/mine/i3.jpg';
import i4 from '../files/mine/i4.jpg';
import i5 from '../files/mine/i5.jpg';
import i6 from '../files/mine/i6.jpg';
import SlideShow from '../slide-show';

const itemData = [
  {
    img: i1,
    title: 'Iteration 1',
    sub: 'DESCRIPTION',
  },
  {
    img: i2,
    title: 'Iteration 2',
    sub: 'DESCRIPTION',
  },
  {
    img: i3,
    title: 'Iteration 3',
    sub: 'DESCRIPTION',
  },
  {
    img: i4,
    title: 'Iteration 4',
    sub: 'DESCRIPTION',
  },
  {
    img: i5,
    title: 'Iteration 5',
    sub: 'DESCRIPTION',
  },
  {
    img: i6,
    title: 'Final Iteration',
    sub: 'DESCRIPTION',
  },
];

export default function MineConcepts() {
  return <SlideShow itemData={itemData} />;
}
