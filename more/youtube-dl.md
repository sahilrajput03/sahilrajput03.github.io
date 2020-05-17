```
$ youtube-dl -a list.txt
```

Above command will download all the video-urls listed in the list.txt file.

***

```
$ youtube-dl -h will list the help for the program.
```



***

```
$ youtube-dl.exe --version
```

2020.03.08

***

```
youtube-dl -U // will update the program to the latest version.
```



***

```
youtube-dl --list-subs
```

lists all available subtiles for the requested file

***

## Download a particular quality of a video

```
youtube-dl -F <video-url>
#note the uppercase letter F option to get the available options to download.
```

```
youtube-dl -F 'http://www.youtube.com/watch?v=P9pzm5b6FFY'
#above command will list all the available quality and formats availabe to download, good thing is that corresponding to every available item, there's a format code(extreme left column). You need to use that format code to download that. LIke below:
```

```
youtube-dl -f 22 'http://www.youtube.com/watch?v=P9pzm5b6FFY'
#note the lowercase letter f option to set the format code.
```

-F, --list-formats               List all available formats of requested

***

