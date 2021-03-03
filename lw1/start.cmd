@echo off
php -S localhost:8080
for %%x in (%cmdcmdline%) do if /i "%%~x"=="/c" set DOUBLECLICKED=1
if defined DOUBLECLICKED pause
