
import fetch from 'node-fetch';

export { onBeforeRender };
export type Repo = {
	name: string;
	description: string;
	url: string;
	language: string;
	stars: number;
	forks: number;
	homepage: string;
};
async function onBeforeRender(pageContext: any) {
	// `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
	const response = await fetch('https://api.github.com/users/ManoloTonto1/repos?per_page=100', {
		headers: {
			Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
		}
	});
	console.log(process.env.GITHUB_TOKEN);
	const repos = await response.json();
	let _repos: Repo[] = repos.map((repo: any) => {
		if (repo.fork === true) {
			return;
		}
		if (repo.name === 'ManoloTonto1') {
			return;
		}
		return {
			name: repo.name,
			description: repo.description? repo.description : 'No description',
			url: repo.html_url,
			language: repo.language,
			stars: repo.stargazers_count,
			forks: repo.forks_count,
			homepage: repo.homepage
		};
	});
	_repos =_repos.filter((repo: Repo) => repo !== undefined);


	// `movies` will be serialized and passed to the browser; we select only the data we
	// need in order to minimize what is sent to the browser.
	

	// We make `movies` available as `pageContext.pageProps.movies`
	const pageProps = { repos: _repos };
	return {
		pageContext: {
			pageProps
		}
	};
}