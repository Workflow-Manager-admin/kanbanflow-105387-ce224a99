#!/bin/bash
cd /home/kavia/workspace/code-generation/kanbanflow-105387-ce224a99/kanbanboard
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

