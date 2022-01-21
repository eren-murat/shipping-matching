import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import RequestsList from '../components/RequestsList'

export default function Goods() {
  	return (
		<Container>
			<Typography
				variant="h6"
				component="h2"
				gutterBottom
				color="textSecondary"
				align="center"
			>
				Goods
			</Typography>
			<RequestsList />
		</Container>
  	)
}
