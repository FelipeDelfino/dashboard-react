import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../../dash/Title';
import { Container, Grid, Link, Paper, Typography } from '@mui/material';
import { Copyright } from '@mui/icons-material';
import GraphBar from './ChartBar';
import GraphPie from './ChartPie';
import GraphLineFit from './ChartLineFit';
import GraphRadar from './ChartRadar';
import GraphLineVertical from './ChartLineVertical';

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', 1000),
];

function Graph() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Graph Line (Sales)</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.error.light}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}


export default function Chart() {
  return (

    
    <>
    <Container maxWidth="xl" sx={{ mt: 6, mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={8}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 320,
            }}
          >
            <Graph />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 320,
            }}
          >
            <GraphPie />

          </Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid> */}
        <Grid item xs={12} md={8} lg={6}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 350,
            }}
          >

            <GraphBar />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 350,
            }}
          >

            <GraphLineFit />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={5}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 400,
            }}
          >

            <GraphRadar />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={7}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 400,
            }}
          >
            <GraphLineVertical />
          </Paper>
        </Grid>
      </Grid>
    </Container>
    <Typography variant="body2" color="text.secondary" align="center" sx={{mb:4}}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Felipe Delfino
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </>
  )
}