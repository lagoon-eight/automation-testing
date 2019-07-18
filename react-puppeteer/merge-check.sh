#!/bin/bash

REMOTE_BRANCH=some-change
REMOTE_HOST=https://github.com/lagoon-eight/automation-testing.git

DONE="...done!"

echo "Starting the merge..."

echo "Removing existing tmp files..."
rm -Rf /Users/papiot/Documents/m8/tmp/*
echo $DONE

cd /Users/papiot/Documents/m8/tmp/

echo "Beginning the clone..."
git clone --single-branch --branch $REMOTE_BRANCH $REMOTE_HOST

cd automation-testing/react-puppeteer/

echo "Running npm install..."
npm install
echo $DONE

echo "Merging master into this branch"
git pull origin master
echo $DONE


echo "Running the tests..."
npm run test
echo "...done!"

if [ "$?" -ne "0" ]
then
    echo "Tests are failing...exiting"
    exit 123
fi

echo "All tests passed!"


