import { useEffect } from "react";
import { useRouter } from "next/router";
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";


const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    style={{ minHeight: '80vh' }}
  >
    <Grid item>
      <Typography variant="h3" align="center">
        404 - Сторінка не знайдена
      </Typography>
    </Grid>
    <Grid item style={{ marginTop: '60px' }}>
      <Typography variant="body1" align="center">
        Ви будете автоматично перенаправлені на головну сторінку через 5 секунд.
      </Typography>
    </Grid>
  </Grid>
  );
};

export default NotFound;