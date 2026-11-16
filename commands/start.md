---
description: Alias for /trackian:setup - sign in, choose how answers are written, and choose a first answer.
allowed-tools: Read
---
This is an alias for `/trackian:setup`. Follow the `trackian-get-started` skill from the top: check the sign-in, show the projects, run the first-run questions from `get_command` with `name: "start"` and save the profile to `.trackian/profile.md` in the current working directory (in the Claude app, where there is none, keep the answers for this conversation), then ask the "What to do next" question the reference ends with and run the workflow the user chooses.

Never ask the user to type a password or any other secret into the chat.
