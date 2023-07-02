import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';
import { isProduction } from './server';


const config: UserConfig = {
	plugins: [react(), ssr({ prerender: true })],
	
	
};

export default config;
