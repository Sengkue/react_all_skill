import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <Button
    variant="soft"
    onClick={() => {
      setMode(mode === 'light' ? 'dark' : 'light');
    }}
    >
      {mode === 'light' ? <WbSunnyIcon /> : <NightlightIcon />}
    </Button>
  );
}

export default function LoginFinal() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Use navigate to navigate to the desired route
    navigate('/');
  };
  return (
    <CssVarsProvider>
      <main>
        <ModeToggle />
        <Sheet
          sx={{
            width: isMobile ? '95%' : '35%',
            mx: 'auto', // margin left & right
            my: 15, // margin top & bottom
            py: 10, // padding top & bottom
            px: isMobile ? 2 : 5, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input
              name="phone"
              type="number"
              placeholder="020xxxx-xxxx"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>

          <Button onClick={handleButtonClick}>Log in</Button>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}