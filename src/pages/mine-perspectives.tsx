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
import exterior from '../images/mine/exterior.jpg';
import allotment from '../images/mine/allotment.jpg';
import augmented from '../images/mine/augmented.jpg';
import cafe from '../images/mine/cafe.jpg';
import market from '../images/mine/market.jpg';
import tunnel from '../images/mine/tunnel.jpg';
import SlideShow from '../slide-show';

const itemData = [
  {
    img: exterior,
    title: 'Exterior Perspective',
    sub: 'DESCRIPTION',
  },
  {
    img: cafe,
    title: 'Caferteria Perspective',
    sub: 'DESCRIPTION',
  },
  {
    img: tunnel,
    title: 'Tunnel Perspective',
    sub: 'DESCRIPTION',
  },
  {
    img: augmented,
    title: 'Augmented Perspective',
    sub: 'DESCRIPTION',
  },
  {
    img: market,
    title: 'Market Perspective',
    sub: 'DESCRIPTION',
  },
  {
    img: allotment,
    title: 'Allotment Perspective',
    sub: 'DESCRIPTION',
  },
];

export default function MinePerspectives() {
  return <SlideShow itemData={itemData} />;
}
