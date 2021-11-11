# Lasers & Feelings companion app
An app to randomly combine the story prompts from Lasers & Feelings
Lasers & Feelings is a one-page RPG by John Harper
Available at http://www.onesevendesign.com/laserfeelings/

## pseudocode

### Create data object of original story prompts
- Divided by adventure sentance structure

### Map each element of the adventure sentance and randomly select one option
x Make an app that randomly selects one item of an array
  - check for "/" character, choose one (or offer choice?)
  - `split the options into differnt array items instead`
- Add each choice to a "sentance" array/string

### Display the complete sentance on the page
- Join the components into a complete string
x Print to the page 

### Randomly generate alternatives with Datamuse
x connect Datamuse API
x break sentance elements into individual words
x generate synonyms via Datamuse
x randomly select a synonym
  - compare against "words that commonly follow" for legibility
x reconstruct sentance element

## stretch goals
- automate capitalization and plurals
- click individual words to change just one
- random character generator (names? https://randommer.io/pet-names)
- random ship generator
- drop down selection from original elements for customization
- save data to firebase