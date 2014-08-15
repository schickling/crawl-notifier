crawl-notifier
==============

Crawl any website and get notified via mail when changes occur

## Usage

```sh
$ docker run -d -e "MAILGUN_KEY=api-key" -v /my/local/crawlers:/data/crawlers schickling/crawl-notifier
```

### Example Crawler

A `crawler` file should be a UMD style module defining an objects with `receiver`, `sender`, `url` and `check` property like in the example below.

```js
module.exports = {
	receiver: ['john.doe@gmail.com', 'pheven@gmail.com'],
	sender: 'someone@gmail.com',
	url: 'http://time.is',
	check: function($) {
		return $('#twd').text() === '23:00:00'; // bed time
	}
};
```

## Credits

* **Node Docker Image** - https://github.com/dockerfile/nodejs
* **Node Mailgun API** - https://github.com/shz/node-mailgun
* **Node Web Crawler** - https://github.com/sylvinus/node-crawler