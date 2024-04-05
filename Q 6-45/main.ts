// ex_05

// Storing a person’s name,and include some whitespace characters at the beginning and end of the name.

const personName : string = "  Zain Ul Abedin  ";

// console.log(personName);   (if we comment out this statement. It will print in keyboard whitespaces)


// use each character combination, "\t" and "\n", at least once.

const characterCombination : string = `\n\t ${personName} \t\n`;

// Print the name

console.log(characterCombination);


// Print the name after striping the white spaces.

const stripingWhitespaces : string = characterCombination.trim();

// print the name

console.log(stripingWhitespaces);

// Done