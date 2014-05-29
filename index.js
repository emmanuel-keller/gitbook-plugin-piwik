module.exports = {
    book: {
        assets: "./book",
        js: [
            "plugin.js"
        ],
        html: {
            "body:end": function() {
                var config = this.options.pluginsConfig.piwik || {};
                if (!config.siteId) throw "Need to option 'siteId' for Piwik plugin";
                if (!config.URL) throw "Need to option 'URL' for Piwik plugin";
                
                return "<script type=\"text/javascript\">"
                + "var _paq = _paq || [];_paq.push(['trackPageView']);_paq.push(['enableLinkTracking']);"
                + "(function() {"
                + "var u=((\"https:\" == document.location.protocol) ? \"https\" : \"http\") + \"://"
                + config.URL + "\";_paq.push(['setTrackerUrl', u+'piwik.php']);_paq.push(['setSiteId', " + config.siteId + "]);"
                + "var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript';"
                + "g.defer=true; g.async=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);"
                + "})();</script><noscript><p><img src=\"http://" + config.URL + "piwik.php?idsite=" + config.siteId
                + "\" style=\"border:0;\" alt=\"\" /></p></noscript>";
            }
        }
    }
};