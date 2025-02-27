import * as React from 'react'
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import InstaPost from './InstaPost';

function Center_section() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
      <Avatar
        alt="n"
        src="/broken-image.jpg"
      >
      </Avatar>
      <Avatar
        alt="n"
        src="/broken-image.jpg"
      />
      <Avatar
        alt="k"
        src="/broken-image.jpg"
      />
      <Avatar
        alt="m"
        src="/broken-image.jpg"
      />
      <Avatar
        alt="i"
        src="/broken-image.jpg"
      />
      <Avatar
        alt="r"
        src="/broken-image.jpg"
      />
      <Avatar
        alt="m"
        src="/broken-image.jpg"
      />
      <Avatar
        alt="a"
        src="/broken-image.jpg"
      />
    </Stack>
   <InstaPost Image="https://spaces-wp.imgix.net/2016/06/coding-in-the-classroom.png?auto=compress,format&q=50" username="sagar_dilip_dalvi"/>
   <InstaPost Image="https://i.ytimg.com/vi/_lFZhR1OuOA/maxresdefault.jpg" username="syohoho_huh_io"/>
    </div>
  )
}

export default Center_section