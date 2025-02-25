import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function Right_Section() {
  return (
    <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="p" src="/static/images/avatar/2.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="parag3195"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary', display: 'inline' }}
            >
            </Typography>
      {"Parag"}
      <Button variant="text">Switch</Button>
          </React.Fragment>
        }
      />
    </ListItem>
    <p> Suggested For You </p>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="k" src="/static/images/avatar/2.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="kaloge_rushikesh"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary', display: 'inline' }}
            >
            </Typography>
            {"Followed by karishma.k.kharate ..."}
            <Button variant="text">Follow</Button>
          </React.Fragment>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="k" src="/static/images/avatar/3.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="kiran_s_kawale"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary', display: 'inline' }}
            >
            </Typography>
            {'Followed by karishma.k.kharate ...'}
            <Button variant="text">Follow</Button>
          </React.Fragment>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="b" src="/static/images/avatar/3.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="bg_4962"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary', display: 'inline' }}
            >
            </Typography>
            {'Followed by mariner__mayank ...'}
            <Button variant="text">Follow</Button>
          </React.Fragment>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="u" src="/static/images/avatar/3.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="umeshj_44"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary', display: 'inline' }}
            >
            </Typography>
            {'Followed by sahil_vakte_patil + ...'}
            <Button variant="text">Follow</Button>
          </React.Fragment>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="s" src="/static/images/avatar/3.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="saindaneroshan"
        secondary={
          <React.Fragment>
            <Typography
           component="span"
              variant="body2"
              sx={{ color: 'text.primary', display: 'inline' }}
            >
            </Typography>
            {'Followed by karishma.k.kharate ...'}
            <Button variant="text">Follow</Button>
          </React.Fragment>
        }
      />
    </ListItem>
  </List>
  <div role="presentation">
        <Link underline="hover" color="inherit" href="">
          About / Help / Press / API / Jobs / Privacy / Terms / Locations / Language / Meta Verified
        </Link>
        <br/>
        <br/>
        <Link underline="hover" color="inherit" href="">
          ©️ 2025 INSTAGRAM FROM META
        </Link>
    </div>
  </div>
  )
}

export default Right_Section