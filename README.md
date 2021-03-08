# Js-box

Js-box is the useful tool that allows you to store your js-things (drafts for example) in one place, group theme and execute

### Installation

> All you have to do to get it running is
1. Create a folder for your js-things `mkdir drafts`
1. Open that folder `cd drafts`
1. Initialize empty repo `npm init -y`
1. Install sandbox `npm install nodrafter`

### Examples of usage

> After you get prev step done, you can simply use it by 2 commands: `start` and `create`

* `npx nodrafter create examples1 functions arrays` will create the file examples1.js with sections 'functions' and 'arrays'
* `npx nodrafter create examples2` will create the file examples2.js with one 'main' section


* `npx nodrafter start examples1 functions arrays` will execute the file examples1.js with sections 'functions' and 'arrays'
* `npx nodrafter start examples2` will execute the file examples2.js with all its sections

### Helpers
You can use helpers, defined in global object like `white, green, yellow, black, red, blue, divide, depth, empty`