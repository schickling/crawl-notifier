crawl-notifier
==============

Crawl any website and get notified via mail when changes occur

## Features

* Deadsimple configuration & usage
* Runs inside a [Docker](http://www.docker.com) container
* Uses jQuery for crawling
* Sends notifications via your [Mailgun](https://mailgun.com/) account
* Multiple receivers possible
* Runs until the `check` was successful

## Usage

```sh
$ docker run -d -e "MAILGUN_KEY=api-key" -v /my/local/crawlers:/data/crawlers schickling/crawl-notifier
```

For each page you want to crawl define a `crawler` file in a directory you mount with the `-v` argument above. A `crawler` file should be a UMD style module, defining an objects with `receiver`, `sender`, `url` and `check` properties like in the example below. The `check` method will be invoked with jQuery as parameter.

### Example Crawler

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

* **Node Mailgun API** - https://github.com/shz/node-mailgun
* **Node Web Crawler** - https://github.com/sylvinus/node-crawler
