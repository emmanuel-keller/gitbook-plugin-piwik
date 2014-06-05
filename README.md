Piwik tracking for GitBook
==============

You can use install it via **NPM**:

```
$ npm install gitbook-plugin-piwik
```

And use it for your book with in the book.json:

```
{
    "plugins": ["piwik"]
}
```

You can set the URL of your Piwik instance, and tracking ID of the site using the plugins configuration in the book.json:

```
{
    "plugins": ["piwik"],
    "pluginsConfig": {
        "piwik": {
        	"URL": "www.example.com/piwik/",
		"siteId": 1
        }
    }
}
```