import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

interface UserProps {
    user: {
        name: {
            title: string
            first: string;
            last: string;
        }
        email: string;
        gender: string;
        dob: {
            age: number;
        }
        picture: {
            large: string;
            medium: string;

        }
        location: {
            city: string;
            country: string;
            state: string;
        }
        phone: number
    }
}

function User(props: UserProps) {
    return (
        <>
            <Card sx={{ maxWidth: 800, width: 600, minHeight: 500 }}>
                <CardMedia sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>

                    <Avatar
                        alt="Remy Sharp"
                        src={props.user.picture.large}
                        sx={{ width: 180, height: 180, mt: 6 }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography
                        sx={{
                            mt: 2,
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                        gutterBottom
                        variant="h6"
                        component="div"
                    >
                        {props.user.name.title} {props.user.name.first} {props.user.name.last}
                    </Typography>
                    <Grid container spacing={2}
                        sx={{
                            mt: 2
                        }}>
                        <Grid item sm={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'right'
                            }}
                            color="text.secondary">
                            <LocationOnIcon />
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', justifyContent: 'left' }}>
                            <Typography color="text.secondary">
                                {props.user.location.city}, {props.user.location.state}, {props.user.location.country}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}
                        sx={{
                            mt: 0.5
                        }}>
                        <Grid item sm={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'right'
                            }}
                            color="text.secondary">
                            <CallIcon />
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', justifyContent: 'left' }}>
                            <Typography color="text.secondary">
                                {props.user.phone}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}
                        sx={{
                            mt: 0.5
                        }}>
                        <Grid item sm={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'right'
                            }}
                            color="text.secondary">
                            <EmailIcon />
                        </Grid>
                        <Grid item xs={10} sx={{ display: 'flex', justifyContent: 'left' }}>
                            <Typography color="text.secondary">
                                {props.user.email}
                            </Typography>
                        </Grid>
                    </Grid>
                        
                </CardContent>
                <CardActions>
                    <Button variant="contained"
                    sx={{
                        ml:4,
                        mt:2,
                        mb:3
                    }}
                    >
                    Loading New
                    </Button>
                </CardActions>
            </Card>

        </>
    )
}

export default User