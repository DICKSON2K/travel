import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';

export const MapContainer = styled(Box)({
  height: '85vh',
  width: '100%',
});

export const MarkerContainer = styled(Box)({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  '&:hover': { zIndex: 2 },
});

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100px',
}));

export const Pointer = styled('img')({
  cursor: 'pointer',
});
 