
@echo off
RMDIR /S /Q .next
npm run build > build.log 2>&1
type build.log
