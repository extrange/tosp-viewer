import csvData from './data.csv'
import parse from 'csv-parse/lib/sync';
import { useEffect } from 'react';
import { useState } from 'react';
import { Autocomplete, TextField, List, ListItem, ListItemText, Typography } from '@mui/material';
import { matchSorter } from 'match-sorter'

export const App = () => {

  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState()

  useEffect(() => fetch(csvData).then(r => r.text()).then(csv => {
    let data = parse(csv, {
      columns: true,
      skip_empty_lines: true
    })
    setData(data)
  }), [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px', margin: '0 auto'}}>
      <Typography variant={'h4'} align={'center'} gutterBottom sx={{ marginTop: '10px' }}>TOSP Table Viewer</Typography>
      <Typography variant={'caption'} align={'center'} gutterBottom>Last updated 9/11/21</Typography>
      <Autocomplete
        options={data.map(e => ({ id: e.id, name: e["TOSP Description"], commonName: e["Common name"], code: e["TOSP code"] }))}
        getOptionLabel={e => `${e.id}: ${e.name}`}
        filterOptions={(options, { inputValue }) => inputValue ? matchSorter(options, inputValue, { keys: ['name', 'commonName', 'code'] }) : options}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label={"Procedure Name"} placeholder={'Enter a procedure name or TOSP code'} />}
        onChange={(_event, value) => value ? setSelectedOption(data.find(e => e.id === value.id)) : setSelectedOption(null)}
      />
      <List dense>
        {selectedOption ? ["id", "TOSP code", "TOSP Description", "TOSP table no.", "TOSP Common name", "Setting", "Ward Type", "P25 Bill", "P50 Bill", "P75 Bill", "P25 Operation Fee", "P50 Operation Fee", "P75 Operation Fee", "P25 Surgeon Fee", "P50 Surgeon Fee", "P75 Surgeon Fee", "P25 Anaesthetist Fee", "P50 Anaesthetist Fee", "P75 Anaesthetist Fee", "P25 Facility Fee", "P50 Facility Fee", "P75 Facility Fee", "P25 Implant Fee", "P50 Implant Fee", "P75 Implant Fee", "P25 Other Fee", "P50 Other Fee", "P75 Other Fee"].map(e => (
          <ListItem key={e}>
            <ListItemText primary={e} secondary={selectedOption[e]} />
          </ListItem>
        )) : <Typography>Select a procedure to view details</Typography>}
      </List>
    </div>
  )
}