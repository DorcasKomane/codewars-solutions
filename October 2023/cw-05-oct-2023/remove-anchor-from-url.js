// Complete the function/method so that it returns the url with anything after 
// the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    const urlIndex = url.indexOf('#');
    return urlIndex === - 1 ? url : url.slice(0, urlIndex);
}

console.log(removeUrlAnchor('www.codewars.com#about'));