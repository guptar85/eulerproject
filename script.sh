#!/usr/bin/env bash

# Performance tests
# Run as either 'perftest' (and pick a submission) or 'perftestall' (via the symlink) to process all of them.
# Uses 'hyperfine' with a single run as warmup, and the average taken from 10 (the default) runs.

subdir=submissions

heading() { figlet -w $(tput cols) $@ | lolcat; }
pick() { ls -1 ${subdir} | fzf; }

if [ $(basename $0) = "perftestall" ]
then
  candidatelist=$(ls -1 ${subdir})
else
  candidatelist=${1:-$(pick)}
fi

for sub in ${candidatelist}
do
  heading ${sub} \
  && hyperfine --time-unit millisecond --warmup 1 "node ${subdir}/${sub}/index"
done
