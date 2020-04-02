# COMMAND PROMPT:

COPY: `xcopy src dest /e /i {insides of src folder into dest folder}`
CREATE FILE: `echo ## >> newemptyfile1`
DELETE FILE/S: `del <file/files/*> (removes files, not folders)`
DELETE FOLDER/S: `rmdir /q /s <folder/folders/< * not supported>`
create folder: `mkdir <folder-name>`
PAUSE BATCH FILE AFTER EXECUTION: `<code> && @pause`
ECHO NEXT LINE CHARACTER: `echo ..... && echo.This comes as new line.`
RENAME: `ren dotenv_win .env `
EDIT FILE: `notepad <file>`

EXAMPLES: 
cd jekyll-jinn/_site/ && xcopy . "../.." /e /i {" Quotes are important, otherwise cmd interpret them as option rather parameters}

***

## Create folder: md or mkdir

***

=>bat file example contents:-

echo "sahil"
echo "mohit"
@pause

{bat executables are like each line contains one command, and any command including multiple && , is considered single command}

__________________________________________________________
# LINUX:

copy: cp -r src dest
create: touch newemptyfile1
delete: rm -rf <file/folder>
pause in linux: read -p "The command has been completed. Press Enter  key to continue..."
 mv dotenv_unix .env 
Edit FIle: `vi <file>`

