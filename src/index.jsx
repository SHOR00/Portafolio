import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Section from './Section'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Header />
    <Section />
	</React.StrictMode>
)