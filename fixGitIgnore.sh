#!/bin/sh

echo 'Make sure to commit all changes you want to keep before continuing, as this script will discard EVERY change made to the project.'
echo 'Continue ? [N/y]'

read input

if [[ $input = "Y" || $input = "y" ]]; then
	git rm -r --cached .
	git add .
	echo "Check if everything is now fine by running 'git status'"
	echo "Commit your .gitignore and the changes you want to keep and discard the ones you don't want"
	echo "Repeat until your .gitignore actually does what it should and you're good to go :)"
fi