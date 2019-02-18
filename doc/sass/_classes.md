# SReplyComponent

Provide some clean reply message display for your form, etc...


### Example
```html
	<div class="reply reply--success">
  <p class="p">
    Etiam ut leo sit amet nibh lacinia finibus. Pellentesque ultricies.
  </p>
</div>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


## Mixins


### s-reply-classes

Print out the bare and style component css
Generated classes:
- `.reply`
- `.reply--{color}`
- `.reply--interactive`


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary


### s-reply-classes-bare

Print out the bare component css
Generated classes:
- `.reply`


### s-reply-classes-style

Print out the style component css
Generated classes:
- `.reply`
- `.reply--{color}`
- `.reply--interactive`


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary