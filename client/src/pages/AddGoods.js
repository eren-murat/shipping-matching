import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export default function AddGoods() {
  	return (
		<Container>
			<Typography
				variant="h6"
				component="h2"
				gutterBottom
				color="textSecondary"
			>
				Add new Goods
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
