#!/usr/bin/env zsh

# cd to the location of the script
SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $SCRIPTPATH



installresult=$(npm i --silent)
if [[ "$installresult" == *"high"* ]]
then
  echo "Installation verified - NOT OK"
  echo $installresult
  exit 1
fi

LINTFIXMESSAGE=''
lintresult=$(npm run lint --silent)
if [[ "$lintresult" != *"2 errors"* ]]
then

  echo "Linting failed - will try to fix it"

  lintfixresult=$(npm run lint -- --fix)
  if [[ "$lintresult" != *"2 errors"* ]]
  then
    echo "Linting fix tried - NOT OK"
    echo $lintresult
    exit 1
  else
    # The fix worked - and we have no errors
    echo "Linting fixed - OK. Updating"
    git add -- . ':(exclude)package.*'
    git commit -m "Linting fixed by verification script" -n
    git push
    LINTFIXMESSAGE='(Fixed linting errors)'
  fi
fi




# cd back to where we came from
cd - > /dev/null

echo "Installation, linting$LINTFIXMESSAGE and testing verified - OK"
exit 0