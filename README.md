# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Ideas/TODOs

Sections:

- The button "Get Started" should maybe be "Ship Now" or "Deploy", in any case it should redirect to the developer quickstart

### Fixes

- Fix the color of the title (it's not white...)
- Fix the viewport (for some reason I can scroll on the right...)
- Fix again the navbar... The logo is not on the left and the button not on the right...
- Understand how to truly integrate Docusaurus
- Fix "Universal"/"Open Source" entries in the why section, they have the same symbol, also you talk about open source later, maybe it's redundant to have it also here
- Remove the pepsi logo and use your own
