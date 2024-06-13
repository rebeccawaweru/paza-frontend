import {InputAdornment, TextField, Box} from "@mui/material"
export default function BasicInput({...props}){
    return (
        <Box className={`grey ${props.custom ? props.custom : 'w-full 2xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-2/3'} mb-2`}>
        
        <TextField 
        className="focus:outline-none"
        autoComplete="off"
        sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'rgb(203 213 225)',
              fontWeight:600,
              fontSize:'15px',
              letterSpacing: 0.1,
              paddingLeft:'10px',
              opacity: 1, // Ensure the placeholder color is applied
            },
            background:"transparent"
          }}
        fullWidth 
        size="small"
        {...props}
        variant="outlined" 
        InputProps={{
            style:{
              color:"white",
            },
            startAdornment:props.start &&  (
              <InputAdornment  position="start"><i className={props.start}></i></InputAdornment>
            ),
            endAdornment: props.end && (
              <InputAdornment sx={{cursor:"pointer"}} onClick={props.show}  position="end"><i className={props.end}></i></InputAdornment>
            )
          }}
         />
      </Box>
    )
}