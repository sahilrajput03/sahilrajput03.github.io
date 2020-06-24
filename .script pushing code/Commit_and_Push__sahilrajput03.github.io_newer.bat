:: @echo off
:: Another comment style of comment:- REM @echo 
@ECHO OFF
cd temp-generatemd-dontdelete && rmdir /q /s . >nul 2>nul
cd ..\sahilrajput03 && SET folder=sahilrajput03
if %folder%==sahilrajput03 copy index.html index.htlm >nul 2>nul || echo FILE ALREADY BACKED UPPPPP!!
if %folder%==sahilrajput03 del *.html && cd more && del *.html && cd .. && cd .. && SET folder=githubrepos
:: ECHO PAUSE28 && @pause
if %folder%==githubrepos generate-md --layout github --input ./sahilrajput03 --output ./temp-generatemd-dontdelete | echo Good to see you!
:: ECHO PAUSE29 && @pause
xcopy temp-generatemd-dontdelete sahilrajput03 /e /i /y >nul 2>nul && cd sahilrajput03 && node nodescript.js >nul 2>nul && copy index.htlm index.html >nul 2>nul && set folder=sahilrajput03
if %folder%==sahilrajput03 cd more && node nodescript.js >nul 2>nul && cd .. && git add . && git commit -m "Commiting from automated cmd-bat file" >nul 2>nul
if %folder%==sahilrajput03 git push >nul 2>nul
echo Check repo @ https://github.com/sahilrajput03/sahilrajput03.github.io && @pause