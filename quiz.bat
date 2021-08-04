@echo off
echo "Created by Cheyatz , Starting dev and json server ..."
start /min npm run json
start /min npm run dev
echo "Waiting 5 seconds for starting dev server ...."
timeout /t 5
start chrome --start-maximized http://localhost:3000/ticket
exit