import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors' 
import { green } from '@material-ui/core/colors' 
import Layout from './components/Layout'

import Home from './pages/Home'
import Trucks from './pages/Trucks'
import Goods from './pages/Goods'
import AddTruck from './pages/AddTruck'
import AddGoods from './pages/AddGoods'

const theme = createTheme({
	palette:{
		primary: green,
		secondary: orange
	},
	typography: {
		fontFamily: 'Quicksand',
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	}
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/trucks">
							<Trucks />
						</Route>
						<Route path="/goods">
							<Goods />
						</Route>
						<Route path="/addtruck">
							<AddTruck />
						</Route>
						<Route path="/addgoods">
							<AddGoods />
						</Route>
					</Switch>
				</Layout>
			</Router>
		</ThemeProvider>
  );
}

export default App;
