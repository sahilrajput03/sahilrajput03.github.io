# Other considerations

In order for your *italics* to look different than your normal text, you need to be using a font whose italics, look different. Such a font is OperatorMono (paid), or [FiraCodeiScript](https://github.com/kencrocken/FiraCodeiScript) [INSTALL, all three font files i.e., regular, italics, and bo] (free), or [FiraFlott](https://github.com/kosimst/FiraFlott) (free). I personally prefer FiraCodeiScript.

To make the italic characters linked, (not have spacing between them), like writing cursive, you need to enable font ligatures:

[![Ligature Example](KG1PI.png)](https://i.stack.imgur.com/KG1PI.png)

To do the above, make sure that your settings.json has the following:

```
{
  "editor.fontLigatures": true, 
  "editor.fontFamily": "'Fira Code iScript', Consolas, 'Courier New', monospace"
}
```

*The rest of the fonts are not needed, but they are fallback fonts in case that you are missing the first. Fonts with spaces in their names, usually need single quotes`'`. Also, you might **need to restart VS Code**.*