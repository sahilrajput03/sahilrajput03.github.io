cd temp-generatemd-dontdelete && rmdir /q /s . || cd .. && cd sahilrajput03 && del *.html && cd more && del *.html && cd .. && cd .. && generate-md --layout github --input ./sahilrajput03 --output ./temp-generatemd-dontdelete && xcopy temp-generatemd-dontdelete sahilrajput03 /e /i /y && cd sahilrajput03 && node nodescript.js && copy index.htlm index.html && cd more && node nodescript.js && cd .. && git add . && git commit -m "Commiting from automated cmd-bat file" && git push && @pause