import React from 'react'
import Moment from 'moment';
import axios from 'axios';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


class TrucksList extends React.Component {
	state = {
		trucks: []
	}

	componentDidMount() {
		axios.get('http://localhost:4000/trucks')
		.then((response) => response.data)
		.then(response => this.setState({trucks: response}));
	}

	render() {
		return (
			<Container>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
					<TableRow>
						<TableCell>User</TableCell>
						<TableCell align="right">TruckType</TableCell>
						<TableCell align="right">StartLocation</TableCell>
						<TableCell align="right">StartDate</TableCell>
						<TableCell align="right">EndLocation</TableCell>
						<TableCell align="right">EndDate</TableCell>

					</TableRow>
					</TableHead>
					<TableBody>
					{this.state.trucks.map((row) => (
						<TableRow
							key={row.Id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
						<TableCell component="th" scope="row">
							{row.Username}
						</TableCell>
						<TableCell align="right">{row.TruckType}</TableCell>
						<TableCell align="right">{row.StartLocation}</TableCell>
						<TableCell align="right">{Moment(row.StartDate).format('MMM Do YY')}</TableCell>
						<TableCell align="right">{row.EndLocation}</TableCell>
						<TableCell align="right">{Moment(row.EndDate).format('MMM Do YY')}</TableCell>
						</TableRow>
					))}
					</TableBody>
				</Table>
				</TableContainer>
			</Container>
		)
	}
}

export default TrucksList