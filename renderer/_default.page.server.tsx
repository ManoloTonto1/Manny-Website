export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname'];

import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { PageShell } from './PageShell';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import logoUrl from './logo.svg';
import type { PageContextServer } from './types';

async function render(pageContext: PageContextServer) {
	const { Page, pageProps } = pageContext;
	// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
	if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined');
	const pageHtml = ReactDOMServer.renderToString(
		<PageShell pageContext={pageContext}>
			<Page {...pageProps} />
		</PageShell>
	);

	// See https://vite-plugin-ssr.com/head
	const { documentProps } = pageContext.exports;
	const title = (documentProps && documentProps.title) || 'ManoloFolio - the best portfolio ever';
	const desc = (documentProps && documentProps.description) || 'The cleanest portfolio your eyes will ever see';

	const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="magicscroll/magicscroll.css"/>
        <script src="magicscroll/magicscroll.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

	return {
		documentHtml,
		pageContext: {
			// We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
		}
	};
}
