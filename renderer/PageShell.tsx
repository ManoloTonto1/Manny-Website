import React from 'react';
import { PageContextProvider } from './usePageContext';
import type { PageContext } from './types';
import './PageShell.css';
import Navbar from '../components/Navbar';

export { PageShell };

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
	return (
		<React.StrictMode>
			<PageContextProvider pageContext={pageContext}>
				<Navbar/>
				{children}
			</PageContextProvider>
		</React.StrictMode>
	);
}
