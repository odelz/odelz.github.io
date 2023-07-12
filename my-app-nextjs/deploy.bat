@echo off

:: Create a temporary directory
mkdir deploy
cd deploy

:: Clone the GitHub Pages branch
git clone --branch gh-pages --single-branch https://github.com/odelz/odelz.github.io .

:: Clean the existing files
git rm -rf .

:: Copy the built files to the temporary directory
xcopy /E /I ..\.next\static static
xcopy /E /I ..\.next\server server
xcopy /E /I ..\.next\pages pages
xcopy /E /I ..\public public

:: Commit and push the changes
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

:: Cleanup
cd ..
rmdir /s /q deploy
