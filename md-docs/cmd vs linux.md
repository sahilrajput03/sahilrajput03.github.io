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

You may recover the premission of a folder via using this article: [Links](https://answers.microsoft.com/en-us/windows/forum/windows_8-files/you-dont-currently-have-permission-to-access-this/2cc4abe2-41ea-4023-b594-104c3b9e9f4d?auth=1) . Although, what actually solved the harsh problem is below command:

```bash
TAKEOWN /F <DIRECTORY> /R /D Y
```

***

You may set the low battery action and critical battery action to hibernate. And set the respective percentage to 20% and 12%. So than even when you have hibernated while doing work you  could boot again the last time and you know that you are risking the failure of power for the system this time. Its very important. You must set the reserve battery level below the critical battery level so that when you are risking power failure you could have some benefit of power. You must set it to 7%, so that when you start up pc after hibernating twice it could take the action to get the reserve battery when the battery reaches 7% after some time.

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

