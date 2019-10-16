# Sema

> Sema is a javascript app that presents poetry in a beautiful, readable
> form to encourage slow reading and to conveniently present the reader
> with auxiliary information to aid reader's interpretative efforts.
> Sema is an attempt to bring poetry online by creating a framework that
> functionally and seemless displays the text and pertinent information
> in a organic fashion without losing the slow and intentional pacing
> that great poetry requires. Sema is intuitive to use: click on a line
> from a randomly generated poem to enlarge it and bring it to the
> center of the screen. Click on a word to enlarge the word and display
> its definitions, etymology and other information culled from the
> Oxford English Dictionary API. Press a direction button to advance to
> the next line or jump back, then click anywhere else to return to the
> full poem. Adjacent to the poem will be displayed drop downs
> displaying information about the poems author. When the reader is done
> they can advance to another poem, either by the same poet, or from
> another random poet.

**MVPs**

 - fetches poems through PoetryDB api 
 - expands line then word on click
 - fetches word information from OED API
 - dynamic d3 data display

 
**Architecture and Technologies**
    

 - *Javascript* for front-end scripting
 - *D3* for dynamic display of data
 - *Oxford English Dictionary API* for word information
-  *Poetrydb API* to fetch poems and associated info
-  *Blast.js* to seperates words into DOM elements for manipulation
-  *Webpack* to bundle JS modules for browser
   
**Implementation Timeline**
Day 1:
 Learn D3
 Learn API's/ determine if I need a database
 Layout file structure
 Finalize design
Day 2:
 Work on rendering information dynamically
 Present poem and contextual information
Day 3:
 Get lines to pop and fill screen
 Get words to popout and present associated information
 Scoreboard rendering.
Day 4:
 Add flair and flashy visuals.
 Finish styling page.
 Complete MVPs and iron out project.
Day 5:
 Implement bonus features.
 
 ![wireframe](https://i.ibb.co/Hgj5TJS/Homepage.png)
