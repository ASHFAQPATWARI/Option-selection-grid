Option-selection-grid
=====================

Angular directive for Option selection grid. version: 0.01
No jquery dependency

##Demo:

[Option-Selection-Grid demo] (http://plnkr.co/edit/COdVlbf1MA0DW978dHTH?p=preview)

##Dependency :-
> gridDirective.js

> gridDirective.css
 
> gridTemplate.html

##How to use it:

After including the `angular.js` file, add the `gridDirective.js` file and load the `gridDirective.css` file.
And inject the gridDirective module into your application module like this:

   ` angular.module("yourApp", ['OptionsGrid']);`

You can keep the background image wherever suitable for you and change the background url in the gridDirective.css file (line 77).

Add the directive in your html file like this:
```
  <option-selection-grid width="1000px" height="500px" options="options"></option-selection-grid>
  
```
# Important parameters:
* `width`: width of the container div
* `height`: height of the container div
* `options`: array of option names defined in your controller.

##Contribute: 
Feel free to contribute and send pull requests.

##License:
OPTION-SELECTION-GRID is licensed unter MIT License.



