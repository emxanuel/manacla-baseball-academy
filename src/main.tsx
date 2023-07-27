import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import './css/general.css'
import Trajectory from './components/Trajectory'
import Contact from './components/Contact'
import About from './components/About'
import Players from './components/Players'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' Component={() => <Layout Comp={Home} />} />
				<Route path='/trajectory' Component={() => <Layout Comp={Trajectory} />} />
				<Route path='/contact' Component={() => <Layout Comp={Contact} />} />
				<Route path='/about' Component={() => <Layout Comp={About} />} />
				<Route path='/players/:year' Component={() => <Layout Comp={Players}/>} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
)
