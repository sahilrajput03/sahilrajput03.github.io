## Renaming extensions of multiple files:

https://unix.stackexchange.com/questions/19654/how-do-i-change-the-extension-of-multiple-files

***

## Converting multiple file with pandocto html, pandoc

(designing problem with pandoc, so avoiding for a while)

```bash
for f in *.md ; do pandoc ${f} -f markdown -t html -s -o ${f%.md}.html  ; done

___
#assigns appropriate metadat for all files
for f in *.md ; do pandoc "${f}" -f markdown -t html -s -o "${f%.md}.html" --metadata title="${f%.md}"  ; done

___
# to folder html in current folder
for f in *.md ; do pandoc "${f}" -f markdown -t html -s -o html/"${f%.md}.html" --metadata title="${f%.md}"  ; done
```





***

https://devhints.io/bash - bash cheatsheet.

***

## #Moving in teminal #Bash, #moving in cmd, #moving cmd,#move all files, # move everything, #move files, #move all files, # move hidden files 

```bash
Syntax:
$ mv [file/files] [directory]

$ mv package/* . # this will move all the files from the package to the current directory(except the files starting with .)

$ mv package/.* . # this will move all the files from the package to the current directory(only the files starting with .)

$ mv package/.* package/* . # this will move all the files from the package to the current directory (includes ALL FILES).
# All in addition to the moving you'll get the acceptable errors i.e.,
# 1. mv: cannot move ‘from/.’ to ‘to/.’: Device or resource busy
# 2. mv: cannot remove ‘from/..’: s  directory
```

***

## Download something with wget:

```bash
wget <link to anything>
```



***

```bash
cd %userprofile%
will open the current user's directory, additionally you may open via cd /users/chetan
```



***



In windows, directory system is case insensitive, so Car and car can not exist in the same folder.

Similary, when you cd /users/chetan or cd /Users/Chetan will result in same things(it would not give sideeffect).

```bash
dir /p
will print directory content to the screen but will stop when the screen is filled.
```



***

## Enable pasting with right click of mouse:

If you enable "Quick edit mode" then you can paste by right clicking with the mouse anywhere in the window - its not as quick as a shortcut key, but its quicker than the context menu.

To enable quick edit mode right click on the window border and select properties, on the resulting properties dialog make sure that "**Quick edit mode**" is selected and press OK:

![Screenshot of the properties dialog](ft1L6.png)

***

# COMMAND PROMPT:

```bash
COPY: 
xcopy src dest /e /i  #copies insides of src folder into dest folder
# /e is for copying directories, empty and non-empty including both types of directories.
# /I - If destination does not exist and copying more than one file, assumes that destination must be a directory.
# To overwrite while copying to the destination use /Y switch like below:
xcopy "./source" "./destination" /h /y
# /y Suppresses prompting to confirm you want to overwrite an existing destination file.
# /h is a switch for copying hidden and system files too.

CREATE FILE:
echo ## >> newemptyfile1

DELETE FILE/S:
del <file/files/*> (removes files, not folders)

DELETE FOLDER/S, empty folder: 
rmdir /q /s <folder/folders/		# {* not supported}
rmdir /q /s . # deletes everything in the current directory.
NOTE: You must use it in the way below, and notice the || in the end to follow any command further, as && doesn\'t work for this command to write any follow-up command.
cd temp-generatemd-dontdelete && rmdir /q /s . ||

create folder:
mkdir <folder-name>

PAUSE BATCH FILE AFTER EXECUTION:
<code> && @pause

ECHO NEXT LINE CHARACTER:
echo ..... && echo.This comes as new line.

RENAME:
ren dotenv_win .env

EDIT FILE:
notepad <file>
```

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

***

## Installing chocolatey:

Open powershell with admin.

1. Run 

```bash
Get-ExecutionPolicy
```

2. If it returns Restricted, then run 

```bash
Set-ExecutionPolicy AllSigned or 
Set-ExecutionPolicy Bypass -Scope Process.
```

3. Run the script:

   ```bash
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
   ```

   4. Wait a few seconds for the command to complete

   5. If you don't see any errors, you are ready to use Chocolatey! 

      ```
      choco
      choco -?
      ```

      ```bash 
      PS C:\Windows\system32> choco
      Chocolatey v0.10.15
      Please run 'choco -?' or 'choco <command> -?' for help menu.
      PS C:\Windows\system32>
      ```

      

   ***

   