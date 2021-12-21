import PropTypes from 'prop-types';
import { Avatar, Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';

import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import CommentBankOutlinedIcon from '@mui/icons-material/CommentBankOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

import { ToggleButtonGroup, ToggleButton } from '@mui/material';
export const BlogCard = ({ blog, blog_state, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar
          alt="Product"
          src={blog.media}
          variant="square"
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {blog.title}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        {blog.description}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <ClockIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1, pr: 4}}
            variant="body2"

          >

            Updated 2hr ago
          </Typography>
          
          <ToggleButton
          value="like"  
          selected = {false}  
          onChange={() => {
            
          
          }}
          >
          <ThumbUpOutlinedIcon fontSize="small" color = 'action'/>
          </ToggleButton>

          <ToggleButton
          value="dislike"  
          selected = {false}  
          onChange={() => {
            
          
          }}
          >
          <ThumbDownOutlinedIcon fontSize="small" color = 'action'/>
          </ToggleButton>

          <ToggleButton
          value="dislike"  
          selected = {false}  
          onChange={() => {
            
          
          }}
          >
          <VolunteerActivismOutlinedIcon fontSize="small" color = 'action'/>
          </ToggleButton>

          <ToggleButton
          value="dislike"  
          selected = {false}  
          onChange={() => {
            
          
          }}
          >
          <SentimentDissatisfiedOutlinedIcon fontSize="small" color = 'action'/>
          </ToggleButton>

          <ToggleButton
          value="dislike"  
          selected = {false}  
          onChange={() => {
            
          
          }}
          >
          <CommentBankOutlinedIcon fontSize="small" color = 'action'/>
          </ToggleButton>

          <Button item xs={8}
           color="textSecondary"
           display="inline"
           sx={{ pl: 1 }}
           variant="body2">
             Xem
          </Button>
          
        </Grid>

        <Grid container spacing={2}
          item
          sx={{
            alignItems: 'center',
            display: 'flex',
            
            

          }}
        >
          <PreviewOutlinedIcon color="action" sx={{ ml: 2}} />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 2}}
            variant="body2"
          >
            {blog.totalDownloads}
            {' '}
            Lượt xem
          </Typography>

         
        </Grid>
      </Grid>
    </Box>
  </Card>
);

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired
};
