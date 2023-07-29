import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import './css/general.css'
import Trajectory from './pages/Trajectory'
import Contact from './pages/Contact'
import About from './pages/About'
import Players from './pages/Players'
import Activities from './pages/Activities'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path='/' Component={() => <Layout Comp={Home} />} />
				<Route path='/trajectory' Component={() => <Layout Comp={Trajectory} />} />
				<Route path='/contact' Component={() => <Layout Comp={Contact} />} />
				<Route path='/about' Component={() => <Layout Comp={About} />} />
				<Route path='/players/:year' Component={() => <Layout Comp={Players} />} />
				<Route path='/activities' Component={() => <Layout Comp={Activities} />}></Route>
			</Routes>
		</HashRouter>
	</React.StrictMode>,
)
