import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function Air() {
  return (
    <div>
      <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image="https://www.science.org/do/10.1126/science.adi1750/abs/_040723powerplantsifter.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Air Pollution
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Air pollution is the contamination of air due to the presence of substances called pollutants in the atmosphere that are harmful to the health of humans and other living beings, or cause damage to the climate or to materials. It is also the contamination of the indoor or outdoor environment either by chemical, physical, or biological agents that alters the natural features of the atmosphere. There are many different types of air pollutants, such as gases (including ammonia, carbon monoxide, sulfur dioxide, nitrous oxides, methane and chlorofluorocarbons), particulates (both organic and inorganic), and biological molecules. Air pollution can cause diseases, allergies, and even death to humans; it can also cause harm to other living organisms such as animals and crops, and may damage the natural environment (for example, climate change, ozone depletion or habitat degradation) or built environment (for example, acid rain). Air pollution can be caused by both human activities and natural phenomena. Air quality is closely related to the Earth's climate and ecosystems globally. Many of the contributors of air pollution are also sources of greenhouse emission i.e., burning of fossil fuel. Air pollution is a significant risk factor for a number of pollution-related diseases, including respiratory infections, heart disease, chronic obstructive pulmonary disease (COPD), stroke, and lung cancer. Growing evidence suggests that air pollution exposure may be associated with reduced IQ scores, impaired cognition, increased risk for psychiatric disorders such as depression and detrimental perinatal health. The human health effects of poor air quality are far reaching, but principally affect the body's respiratory system and the cardiovascular system. Individual reactions to air pollutants depend on the type of pollutant a person is exposed to, the degree of exposure, and the individual's health status and genetics. Air pollution is the largest environmental risk factor for disease and premature death and the fourth largest risk factor overall for human health. Air pollution causes the premature deaths of around 7 million people worldwide each year, or a global mean loss of life expectancy (LLE) of 2.9 years, and there has been no significant change in the number of deaths caused by all forms of pollution since at least 2015. Outdoor air pollution attributable to fossil fuel use alone causes ~3.61 million deaths annually, making it one of the top contributors to human death. Anthropogenic ozone causes around 470,000 premature deaths a year and fine particulate (PM2.5) pollution around another 2.1 million. The scope of the air pollution crisis is large: In 2018, WHO estimated that "9 out of 10 people breathe air containing high levels of pollutants. "Although the health consequences are extensive, the way the problem is handled is considered largely haphazard or neglected. The World Bank has estimated that welfare losses (premature deaths) and productivity losses (lost labour) caused by air pollution cost the world economy $5 trillion per year. The costs of air pollution are generally an externality to the contemporary economic system and most human activity, although they are sometimes recovered through monitoring, legislation, and regulation. Many different technologies and strategies are available for reducing air pollution. Although a majority of countries have air pollution laws, according to UNEP, 43 percent of countries lack a legal definition of air pollution, 31 percent lack outdoor air quality standards, 49 percent restrict their definition to outdoor pollution only, and just 31 percent have laws for tackling pollution originating from outside their borders. National air quality laws have often been highly effective, notably the 1956 Clean Air Act in Britain and the US Clean Air Act, introduced in 1963. Some of these efforts have been successful at the international level, such as the Montreal Protocol, which reduced the release of harmful ozone depleting chemicals, and the 1985 Helsinki Protocol, which reduced sulfur emissions, while others, such as international action on climate change, have been less successful.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default Air