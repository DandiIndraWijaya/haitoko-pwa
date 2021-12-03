import React from 'react';
import { Box, Typography, makeStyles, OutlinedInput, InputAdornment, Grid, IconButton } from '@material-ui/core';
import { Search, FilterList } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  inputField: {
    width: '100%',
    marginTop: 10,
    borderRadius: 100,
  },
  filterIcon: {
    color: theme.palette.primary.main,
    marginTop: 10,
    fontSize: 32,
  },
}));

const SearchProduct = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={10}>
          <OutlinedInput
            type="number"
            required
            name="name"
            className={classes.inputField}
            placeholder="Cari produk"
            // onChange={() => onChangeForm()}
            startAdornment={(
              <InputAdornment position="start" className={classes.icon}>
                <Search />
              </InputAdornment>
          )}
          />
        </Grid>
        <Grid item xs={2}>
          <Box style={{ textAlign: 'center' }}>
            <IconButton style={{ padding: 0 }}>
              <FilterList className={classes.filterIcon} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchProduct;
