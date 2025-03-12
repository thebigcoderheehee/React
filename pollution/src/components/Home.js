import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../App.css';

function Home() {
  return (
    <div>
        <h1>Pollution</h1>
        <p>Welcome to the Pollution App. This app is designed to provide information about different types of pollution. I will now explain what pollution is.</p>
        <br/>
        <br/>
        <p>Pollution is the introduction of contaminants into the natural environment that cause adverse change. Pollution can take the form of any substance (solid, liquid, or gas) or energy (such as radioactivity, heat, sound, or light). Pollutants, the components of pollution, can be either foreign substances/energies or naturally occurring contaminants. Although environmental pollution can be caused by natural events, the word pollution generally implies that the contaminants have an anthropogenic source that is, a source created by human activities, such as manufacturing, extractive industries, poor waste management, transportation or agriculture. Pollution is often classed as point source (coming from a highly concentrated specific site, such as a factory, mine, construction site), or nonpoint source pollution (coming from a widespread distributed sources, such as microplastics or agricultural runoff). Many sources of pollution were unregulated parts of industrialization during the 19th and 20th centuries until the emergence of environmental regulation and pollution policy in the later half of the 20th century. Sites where historically polluting industries released persistent pollutants may have legacy pollution long after the source of the pollution is stopped. Major forms of pollution include air pollution, water pollution, litter, noise pollution, plastic pollution, soil contamination, radioactive contamination, thermal pollution, light pollution, and visual pollution. Pollution has widespread consequences on human and environmental health, having systematic impact on social and economic systems. In 2019, pollution killed nine million people worldwide (one in six deaths), a number unchanged since 2015. Air pollution accounted for of these earlier deaths. A 2022 literature review found that levels of anthropogenic chemical pollution have exceeded planetary boundaries and now threaten entire ecosystems around the world. Pollutants frequently have outsized impacts on vulnerable populations, such as children and the elderly, and marginalized communities, because polluting industries and toxic waste sites tend to be collocated with populations with less economic and political power. This outsized impact is a core reason for the formation of the environmental justice movement, and continues to be a core element of environmental conflicts, particularly in the Global South. Because of the impacts of these chemicals, local, country and international policy have increasingly sought to regulate pollutants, resulting in increasing air and water quality standards, alongside regulation of specific waste streams. Regional and national policy is typically supervised by environmental agencies or ministries, while international efforts are coordinated by the UN Environmental Program and other treaty bodies. Pollution mitigation is an important part of all of the Sustainable Development Goals.</p>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} className='pollution-image'>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
      </ImageList>
    </div>
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

export default Home