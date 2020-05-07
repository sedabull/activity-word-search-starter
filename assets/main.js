// COMPLETE THE TODOs BELOW...
// Note: The primary TODOs for this Activity will not require 
// you to edit the HTML or CSS.

// On our HTML page, we have a #search-button, a #textbox input,
// box a #sentence, and a #search-results DIV.

// TODO 1: Use querySelector to assign EACH of the above 
// elements to a variable, just like this:
let searchButton = document.querySelector('#search-button');
let textbox = document.querySelector('#textbox');
let sentence = document.querySelector('#sentence');
let searchResults = document.querySelector('#search-results');
let original = sentence.innerText;

searchButton.addEventListener('click', function () {
  sentence.innerHTML = original;
 
  // TODO 2: Write an IF statement which determines whether
  // the user-supplied string from #textbox is included in
  // the #sentence string.
  
  // Hint 1: To get the user-supplied string from the input 
  // box (#textbox), use the property .value on the variable
  // you assigned the textbox element to.

  // Hint 2: To get the string contained within #sentence, use
  // the property .innerText on the variable you assigned the
  // #sentence element to.

  // Hint 3: You can check whether string1 contains string2
  // by using string1.includes(string2) – which will return
  // true or false.
  
  if (textbox.value) {
    let pattern = RegExp(textbox.value.trim(), 'gi');
    let matches = sentence.innerText.match(pattern);

    if (matches) {
      sentence.innerHTML = sentence.innerHTML.replace(pattern, function(match) {
        return `<span class="highlight">${match}</span>`;
      });//end replace

      if (matches.length === 1) {
        searchResults.innerText = "1 match was found!";
      } else {
        searchResults.innerText = `${matches.length} matches were found!`;
      }//end if/else
    } else {
      searchResults.innerText = "No Results. Too bad!";
    }//end if/else
  } else {
    searchResults.innerText = "Please enter a search term.";
  }//end if/else

  // TODO 3: If the user-supplied string is included in the
  // #sentence string, update the innerText of #search-results
  // with a success message (such as, "A match was found!"),
  // otherwise update it with a failure message (such as, 
  // "No results. Too bad!")

});

// STRETCH GOALS (easiest to hardest):
//
//  • Customize the CSS to your liking.
//  • Use .trim() to remove unnecessary whitespace from the
//    user-supplied string.
//  • Use .toLowerCase() on both the sentence and the user-
//    supplied string, so that your word search is 
//    NOT case-sensitive.
//  • Count the number of times the word appears.
//  • Display the word count for the user.
//  • Find a way to highlight the matching word(s). 
//    Hint: .split() and Iteration.
