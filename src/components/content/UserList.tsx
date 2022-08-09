import { Alert, AlertTitle, CircularProgress, Container, Link, Paper, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import User from "./User";


interface User {
    name: {
        title: string;
        first: string;
        last: string;
    }
    email: string;
    gender: string;
    dob: {
        age: number;
    }
    picture: {
        large: string
        medium: string
    }
    location: {
        city: string;
        country: string;
        state: string;
    }
    phone: number

}

function UserList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState<User[]>([]);


    useEffect(() => {
        fetch("https://randomuser.me/api/?nat=br")
            .then(response => response.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data.results);
                    console.log(data)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })
    }, [])

    if (error) {
        return (
            <Container maxWidth="xl" sx={{
                mt: 6,
                mb: 4,
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Paper sx={{ p: 2, maxWidth: 800, width: 600 }}>
                    <Stack sx={{ width: '100%' }}>
                        <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            Could not load — <strong>reload the page!</strong>
                        </Alert>
                    </Stack>
                </Paper>
            </Container>
        );
    } else if (!isLoaded) {
        return (<Container maxWidth="xl" sx={{
            mt: 6,
            mb: 4,
            display: 'flex',
            justifyContent: 'center'
        }}>

            <Paper sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: 800,
                width: 600,
                minHeight: 500
            }}>
                <Skeleton animation="wave" variant="circular" width={180} height={180}  sx={{ mt: 3 }}/>
                <Skeleton animation="wave" variant="text" width={200} sx={{ mt: 2 }} />
                <Skeleton animation="wave" variant="text" width={400} sx={{ mt: 2 }} />
                <Skeleton animation="wave" variant="text" width={400} sx={{ mt: 1 }} />
                <Skeleton animation="wave" variant="text" width={400} sx={{ mt: 1 }} />
            </Paper>
        </Container>
        );
    } else {
        return (
            <>
                <Container
                    maxWidth="xl"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 6,
                        mb: 4
                    }}>
                    {users.map(user => (
                        <User key={user.name.title} user={user} />
                    ))}

                </Container>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4 }}>
                    {'Copyright © '}
                    <Link color="inherit" href="/">
                        Felipe Delfino
                    </Link>{' '}
                    {new Date().getFullYear()}.
                </Typography>
            </>
        );
    }
}






export default UserList