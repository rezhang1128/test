async function main() {
    const NAMES = [
      "Chris",
      "Li Kang",
      "Anne",
      "Francesca",
      "Mustafa",
      "Tina",
      "Bert",
      "Jada",
    ];
  
    /**
     * Create a function chooseName()
     * that returns a random name from the provided array (names)
     *
     * @param {string[]} names
     * @returns {string} Random name
     */
    function chooseName(names) {
      var len =  len(names);
      var ran =  Math.floor(Math.random() * len); 
      return names[ran];
    }
    // !Don't edit the code below here!
    console.log(
      "chooseName()",
      chooseName(NAMES)
    )
}