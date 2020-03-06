# COMMAND PROMPT:

COPY: xcopy src dest /e /i {insides of src folder into dest folder}
CREATE FILE: echo ## >> newemptyfile1
DELETE FILE/S: del <file/files/*> (removes files, not folders)
DELETE FOLDER/S: rmdir /q /s <folder/folders/< * not supported>
create folder: mkdir <folder-name>
PAUSE BATCH FILE AFTER EXECUTION: <code> && @pause
ECHO NEXT LINE CHARACTER: echo ..... && echo.This comes as new line.

EXAMPLES: 
cd jekyll-jinn/_site/ && xcopy . "../.." /e /i {" Quotes are important, otherwise cmd interpret them as option rather parameters}

__________________________________________________________
# LINUX:

copy: cp -r src dest
create: touch newemptyfile1
delete: rm -rf <file/folder>