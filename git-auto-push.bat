@echo off
REM This batch file adds, commits, and pushes changes to the current git branch
git add .
git commit -m "Initial commit"
git push -u origin master
