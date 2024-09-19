var form_element = document.getElementById('form');
var q_input_element = document.getElementById('query');
var search_button_element = document.getElementById('search-button');

const social_media_list = [
    'facebook.com',
    'reddit.com',
    'youtube.com',
    'instagram.com',
    'tiktok.com',
    'x.com',
]

function antiSocialMediaPattern() {
    final_query = '';
    for (const site of social_media_list) {
        final_query += ` -site:${site}`;
    }
    
    return final_query;
}

function executeQuery() {
    user_query_value = q_input_element.value;
    full_query = `https://duckduckgo.com/?t=ffab&q=${user_query_value}${antiSocialMediaPattern()}&ia=web`
    
    encoded_url = encodeURI(full_query);

    window.open(encoded_url, "_self");
}


window.addEventListener("DOMContentLoaded", function() {
    form_element.addEventListener("submit", function(e) {
        e.preventDefault(); // before the code

        executeQuery();
    })
});