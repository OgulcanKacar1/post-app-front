import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommendIcon from '@mui/icons-material/Comment';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      
    ],
  }));  


function Post(props){
    const {title, text, userId, username} = props;
    const [expanded, setExpanded] = React.useState(false);
    

      
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
      

    return(
        <div className='postContainer' >
            <Card sx={{ width: 800, margin: 2 , textAlign: 'left'}}>
                <CardHeader
                    avatar={
                    <Link sx={{textDecoration: 'none' ,boxShadow:'none', color:'white'}} to={{pathname: '/users/'+userId}}>
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {username.charAt(0).toUpperCase()}
                        </Avatar>
                    </Link>
                    
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={title}
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {text}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <CommendIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
    
}

export default Post;