import React, { Component } from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

type slideShowProps = {
  itemData: {
    img: string;
    title: string;
    sub: string;
  }[];
};

class SimpleSlider extends Component<slideShowProps> {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        {this.props.itemData.map((item) => (
          <ImageList>
            <ImageListItem key={item.img} sx={{ border: 1, borderColor: '#222' }}>
              <img src={`${item.img}`} alt={item.title} loading='lazy' />
              <ImageListItemBar
                title={item.title}
                subtitle={item.sub}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          </ImageList>
        ))}
      </Slider>
    );
  }
}

export default function SlideShow(props: slideShowProps) {
  const { itemData } = props;
  return (
    <Box sx={{ width: 1000 }}>
      <SimpleSlider itemData={itemData} />
    </Box>
  );
}
