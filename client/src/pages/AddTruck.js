import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const useStyles = makeStyles({

})

export default function AddTruck() {

    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                gutterBottom
                color="textSecondary"
            >
                Add a new Truck
            </Typography>

            <Button
                onClick={() => console.log('click add')}
                type="submit"
                color="secondary"
                variant="contained"
                startIcon={<AddBoxOutlinedIcon />}
            >
                Add
            </Button>
        </Container>
    )
}
