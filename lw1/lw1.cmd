@echo off
php -v
for %%x in (%cmdcmdline%) do if /i "%%~x"=="/c" set DOUBLECLICKED=1
if defined DOUBLECLICKED pause
