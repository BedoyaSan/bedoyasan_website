import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import BlueHexPlane from '../assets/BlueHexPlane.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Card, Stack } from '@mui/material';

export default function MainFeaturedPost() {
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${BlueHexPlane})`,
            }}
        >
            <Grid container spacing={5}>
                <Grid item xs={12} md={8}>
                    <Box sx={{ mt: 2, ml: 4 }}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            Santiago Bedoya
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph sx={{ pl: 2 }}>
                            Full-Stack Developer
                            <br />
                            Medellín, Colombia
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Card variant="outlined" sx={{ px: 5, pt: 1, pb: 2, mt: 3, mb: 3, backgroundColor: "rgb(90, 90, 90)" }}>
                            <Typography variant="h6" color={"white"} sx={{ mb: 1 }}>
                                Networks
                            </Typography>
                            <Link
                                href={"https://www.linkedin.com/in/bedoyasan"}
                                underline="hover"
                                target="_blank"
                                rel="noopener"

                            >
                                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2, color: "white" }}>
                                    <LinkedInIcon />
                                    <span>{"LinkedIn"}</span>
                                </Stack>
                            </Link>
                            <Link
                                href={"https://github.com/BedoyaSan"}
                                underline="hover"
                                target="_blank"
                                rel="noopener"
                            >
                                <Stack direction="row" spacing={2} alignItems="center" sx={{ color: "white" }}>
                                    <GitHubIcon />
                                    <span>{"GitHub"}</span>
                                </Stack>
                            </Link>
                        </Card>
                    </Box>

                </Grid>
            </Grid>
        </Paper>
    );
}