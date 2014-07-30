#!/bin/bash

mkdir -p "$HOME/tmp"
PIDFILE="$HOME/tmp/nodejs.pid"

if [ -e "${PIDFILE}" ] && (ps -u $(whoami) -opid= |grep -P "^\s*$(cat ${PIDFILE})$" &> /dev/null); then
  echo "Already running."
  exit 99
fi

~/bin/forever start app.js >> $HOME/tmp/nodejs.log &

echo $! > "${PIDFILE}"
chmod 644 "${PIDFILE}"