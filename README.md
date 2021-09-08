# Lasers & Feelings companion app
An app to randomly combine the story prompts from Lasers & Feelings
Lasers & Feelings is a one-page RPG by John Harper
Available at http://www.onesevendesign.com/laserfeelings/

## pseudocode

### Create data object of original story prompts
- Divided by adventure sentance structure

### Map each element of the adventure sentance and randomly select one option
- Make an app that randomly selects one item of an array
  - check for "/" character, choose one (or offer choice?)
- Add each choice to a "sentance" array/string

### Display the complete sentance on the page
- Join the components into a complete string
- Print to the page 

### Randomly generate alternatives with Datamuse
- connect Datamuse API
- break sentance elements into individual words
- generate synonyms via Datamuse
- randomly select a synonym
  - compare against "words that commonly follow" for legibility
- reconstruct sentance element

## stretch goals
- random character generator
- random ship generator
- save data to firebase