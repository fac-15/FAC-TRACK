const navState = url_slug => {
    // back link for tasks pages
    // - if nothing entered, set to '/dashboard'
    return url_slug ? `/${url_slug}` : '/dashboard' ;
};
  
module.exports = navState;