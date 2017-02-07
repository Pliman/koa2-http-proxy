import httpProxy from 'http-proxy';
import Koa from 'koa';

const app = new Koa();

app.use(async(ctx) => {
	await new Promise((resolve, reject) => {
		httpProxy.createProxyServer({target: 'http://localhost:3100'}).web(ctx.req, ctx.res, function (err) {
			if (err) {
				return reject();
			}

			resolve();
		})
	})
});

app.listen(3000, (err) => {
	if (err) {
		console.log(err);
	}

	console.log('listening on port 3000');
});