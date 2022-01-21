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


class RequestsList extends React.Component {
	state = {
		requests: []
	}

	componentDidMount() {
		axios.get('http://localhost:4000/requests')
		.then((response) => response.data)
		.then(response => this.setState({requests: response}));
	}

	render() {
		return (
			<Container>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
					<TableRow>
						<TableCell>User</TableCell>
						<TableCell align="right">Goods</TableCell>
						<TableCell align="right">Start</TableCell>
						<TableCell align="right">End</TableCell>
						<TableCell align="right">Start</TableCell>
						<TableCell align="right">End</TableCell>
						<TableCell align="right">Volume</TableCell>
						<TableCell align="right">Weight</TableCell>
						<TableCell align="right">Budget</TableCell>
						<TableCell align="right">Phone</TableCell>
						<TableCell align="right">Email</TableCell>

					</TableRow>
					</TableHead>
					<TableBody>
					{this.state.requests.map((row) => (
						<TableRow
							key={row.Id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">{row.Username}</TableCell>
							<TableCell align="right">{row.GoodsType}</TableCell>
							<TableCell align="right">{row.StartLocation}</TableCell>
							<TableCell align="right">{row.EndLocation}</TableCell>
							<TableCell align="right">{Moment(row.StartDateMax).format('D/M/YY')}</TableCell>
							<TableCell align="right">{Moment(row.EndDateMax).format('D/M/YY')}</TableCell>
							<TableCell align="right">{row.Volume}</TableCell>
							<TableCell align="right">{row.Weight}</TableCell>
							<TableCell align="right">{row.Budget}</TableCell>
							<TableCell align="right">{row.PhoneNumber}</TableCell>
							<TableCell align="right">{row.Email}</TableCell>
						</TableRow>
					))}
					</TableBody>
				</Table>
				</TableContainer>
			</Container>
		)
	}
}

export default RequestsList