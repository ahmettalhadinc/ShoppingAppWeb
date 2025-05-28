import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  onSearchChange: (value: string) => void;
}

export default function CustomizedInputBase({ onSearchChange }: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, marginTop:3 }}
    >
  
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for items"
        inputProps={{ 'aria-label': 'search google maps' }}
           onChange={handleInputChange}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      

      </IconButton>
     
    </Paper>
  );
}