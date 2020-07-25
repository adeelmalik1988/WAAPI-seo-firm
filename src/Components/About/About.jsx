import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import adeelmalik from './../Images/adeelmalik.jpg';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    root: {

    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function About() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Avatar alt="Adeel Malik" src={adeelmalik} className={classes.large} />

            <Typography className={classes.title} color="textSecondary" gutterBottom>
                ADEEL MALIK
                        <br />
                        CEO | ISLAMABAD SEO SERVICES
          </Typography>

        
        </div>
    )

}

export default About;