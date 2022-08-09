import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import Link from '@mui/material/Link';

function Home() {
  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 6, mb: 4 }}>
        <Paper sx={{ p: 1 }}>
          <Typography sx={{
            mt: 2,
            ml: 2
          }}
            variant="h5">
            Dashboard Test
          </Typography>
          <Typography sx={{
            mt: 1,
            ml: 2,
            mb: 2
          }}
            color="text.secondary">
            This is a front-end app with dummy data
            In the navigation tabs you will be able to see map, graphs and users
          </Typography>
        </Paper>
      </Container>

      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          Felipe Delfino
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </>
  )
}

export default Home