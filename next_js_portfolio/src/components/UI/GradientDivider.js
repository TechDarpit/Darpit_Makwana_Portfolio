import { info } from '@/pages/api/Info';
import Box from '@mui/material/Box';

const GradientDivider = ({ height = 5, width = 100 }) => {
  return (
    <Box
      sx={{
        background: info.gradient,
        height,
        width,
        marginBottom: 3,
      }}
    />
  );
};

export default GradientDivider;
