function display_access_denied_error() {
    document.body.innerHTML
        = '<div id="access-denied-error">'
        + '<div class="iframeWrapper noselect">'
        + '<iframe id="result" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0;" src="https://spitriziv.github.io/Viatic/www/sites/filter/V-104.html"></iframe>'
        + '</div>'
        + '</div>'
}
/* BLACKLIST COUNTRIES */
function block_blacklist_countries() {
    // Blacklist countries
    const blacklist_countries = [

    ]

    // Detecting the users country
    function get_country_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (blacklist_countries.includes(result.country)) { // If my ip country code is in blacklist
                    display_access_denied_error() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting country code from third party api
    get_country_code("https://get.geojs.io/v1/ip/country.json")
}

/* WHITELIST COUNTRIES */
function allow_whitelist_countries() {
    // Whitelist countries
    const whitelist_countries = [
        "DE", // Germany
        "US", // United States
        "GB", // United Kingdom
        "UA", // Ukraine
        "AR", // Argentina
        "FI", // Finland
        "CA", // Canada
        "JP", // Japan
        "NO", // Norway
        "RU" // Russia
    ]

    // Detecting the users country
    function get_country_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (!whitelist_countries.includes(result.country)) { // If my ip country code is not in whitelist
                    display_access_denied_error() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting country code from third party api
    get_country_code("https://get.geojs.io/v1/ip/country.json")
}

/* CALL FUNCTIONS */
block_blacklist_countries() // Block blacklist countries

// allow_whitelist_countries() // Allow whitelist countries

//ip_ban
function display_access_denied_error_ip_ban() {
    document.body.innerHTML
        = '<div id="access-denied-error">'
        + '<div class="iframeWrapper noselect">'
        + '<iframe id="result" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0;" src="https://spitriziv.github.io/Viatic/www/sites/filter/V-301-Github.html"></iframe>'
        + '</div>'
        + '</div>'
}
/* BLACKLIST ip_ban */
function block_blacklist_ip_ban() {
    // Blacklist ip_ban
    const blacklist_ip_ban = [

    ]

    // Detecting the users ip_ban
    function get_ip_ban_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip_ban info as json
            .then(result => {
                if (blacklist_ip_ban.includes(result.ip)) { // If my ip_ban code is in blacklist
                    display_access_denied_error_ip_ban() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting ip_ban code from third party api
    get_ip_ban_code("https://get.geojs.io/v1/ip/geo.json")
}

/* WHITELIST ip */
function allow_whitelist_ip_ban() {
    // Whitelist ip_ban
    const whitelist_ip_ban = [
        "10.26.15.238", //
        "207.0.0.1", //
        "207.190.88.66",
    ]

    // Detecting the users ip_ban
    function get_ip_ban_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip_ban info as json
            .then(result => {
                if (!whitelist_ip_ban.includes(result.ip)) { // If my ip_ban code is not in whitelist
                    display_access_denied_error_ip_ban() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting ip_ban code from third party api
    get_ip_ban_code("https://get.geojs.io/v1/ip/geo.json")
}

/* CALL FUNCTIONS */
block_blacklist_ip_ban() // Block blacklist ip_ban

// allow_whitelist_ip_ban() // Allow whitelist ip_ban







//TIMED EVENTS//
  var md = (new Date()).toISOString().substring(5, 10);
[].slice.call(document.querySelectorAll("[data-visible-from],[data-visible-to]")).forEach(function(el) {
  var from = el.dataset.visibleFrom || "01-01";
  var to = el.dataset.visibleTo || "12-31";
  el.style.display = (from <= md && md <= to ? "" : "none");
});
