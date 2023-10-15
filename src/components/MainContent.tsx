import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function MainContent() {
    return (
        <Grid
            item
            xs={8}
            sx={{ p: 2, mt: -1, backgroundColor: "white" }}
        >
            <Typography variant="h6" gutterBottom>
                Experience
            </Typography>

            <Typography>
                <strong>Custom Software Engineering Associate - Accenture - 2.5 years (May 2021 - current)</strong>
                <br />
                <ul>
                    <li>Design, develop and test custom software solutions across multiple system
                        components or applications.</li>
                    <li>Create implementation or integration approach for
                        applications and components.</li>
                    <li>Translate system requirements into design
                        specifications.</li>
                    <li>Provide primary support for installation of application releases into
                        production.</li>
                    <li>Design and code applications in line with programming standards and
                        interface specifications.</li>
                </ul>
            </Typography>
            <Typography variant="h6" gutterBottom>
                Certifications
            </Typography>
            <Typography>
                <ul>
                    <li>Microsoft Azure Fundamentals AZ-900 -&nbsp;
                        <a target="_blank" rel="noopener" href='https://learn.microsoft.com/en-us/users/bedoyasan/transcript/de6rwaq9q31mmpw'>Verify achievement</a></li>
                    <li>Introduction to Cibersecurity - Cisco -&nbsp;
                        <a target="_blank" rel="noopener" href='https://www.credly.com/badges/b4dcc7f7-cbec-42c8-84f3-46cc2726e18f'>Verify achievement</a></li>
                    <li>C# Foundamentals - Microsoft - FreeCodeCamp -&nbsp;
                        <a target="_blank" rel="noopener" href='https://www.freecodecamp.org/certification/BedoyaSan/foundational-c-sharp-with-microsoft'>Verify achievement</a></li>
                </ul>
            </Typography>
            <Typography variant="h6" gutterBottom>
                Education
            </Typography>
            <Typography>
                <ul>
                    <li>System's engineering (6th Semester).&nbsp;
                        <strong>Universidad de Antioquia</strong></li>
                    <li>Diplomado de Habilidades en programación.&nbsp;
                        <strong>Misión Tic 2022 - Universidad Nacional</strong></li>
                </ul>
            </Typography>

        </Grid>
    );
}