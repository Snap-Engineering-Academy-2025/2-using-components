import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, List } from '@mui/material';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function DataCard({ TeaName, TeaURL, text, description }) {
  
  return (
    <Card>
      <CardContent sx={{ pt: 0 }}>
        <Typography>{TeaName}</Typography>
        <CardMedia 
            component="img"
            height="140"
            image={TeaURL}
            alt={TeaName}
            sx={{ objectFit: 'cover', borderRadius: 1, mt: 1 }}
        />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {text}
        </Typography>
        <List variant="body2" sx={{ color: 'text.secondary' ,listStyleType: 'disc' }}>
          {description.map((item, index) => (
            <ListItem sx={{ display: 'list-item' }} key={index} disablePadding>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}