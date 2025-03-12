import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function Land() {
  return (
    <div>
      <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://ibanplastic.com/wp-content/uploads/2018/10/Land-Pollution-1.jpg"
          height={470}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Land Pollution
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Soil contamination, soil pollution, or land pollution as a part of land degradation is caused by the presence of xenobiotic (human-made) chemicals or other alteration in the natural soil environment. It is typically caused by industrial activity, agricultural chemicals or improper disposal of waste. The most common chemicals involved are petroleum hydrocarbons, polynuclear aromatic hydrocarbons (such as naphthalene and benzo(a)pyrene), solvents, pesticides, lead, and other heavy metals. Contamination is correlated with the degree of industrialization and intensity of chemical substance. The concern over soil contamination stems primarily from health risks, from direct contact with the contaminated soil, vapour from the contaminants, or from secondary contamination of water supplies within and underlying the soil. Mapping of contaminated soil sites and the resulting clean ups are time-consuming and expensive tasks, and require expertise in geology, hydrology, chemistry, computer modelling, and GIS in Environmental Contamination, as well as an appreciation of the history of industrial chemistry. In North America and Western Europe the extent of contaminated land is best known, with many of countries in these areas having a legal framework to identify and deal with this environmental problem. Developing countries tend to be less tightly regulated despite some of them having undergone significant industrialization.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default Land