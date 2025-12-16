# Obsidian Sample Plugin

This is a sample plugin for Obsidian (https://obsidian.md).

This project uses TypeScript to provide type checking and documentation.
The repo depends on the latest plugin API (obsidian.d.ts) in TypeScript Definition format, which contains TSDoc comments describing what it does.

This sample plugin demonstrates some of the basic functionality the plugin API can do.
- Adds a ribbon icon, which shows a Notice when clicked.
- Adds a command "Open Sample Modal" which opens a Modal.
- Adds a plugin setting tab to the settings page.
- Registers a global click event and output 'click' to the console.
- Registers a global interval which logs 'setInterval' to the console.

## First time developing plugins?

Quick starting guide for new plugin devs:

- Check if [someone already developed a plugin for what you want](https://obsidian.md/plugins)! There might be an existing plugin similar enough that you can partner up with.
- Make a copy of this repo as a template with the "Use this template" button (login to GitHub if you don't see it).
- Clone your repo to a local development folder. For convenience, you can place this folder in your `.obsidian/plugins/your-plugin-name` folder.
- Install NodeJS, then run `npm i` in the command line under your repo folder.
- Run `npm run dev` to compile your plugin from `main.ts` to `main.js`.
- Make changes to `main.ts` (or create new `.ts` files). Those changes should be automatically compiled into `main.js`.
- Reload Obsidian to load the new version of your plugin.
- Enable plugin in settings window.
- For updates to the Obsidian API run `npm update` in the command line under your repo folder.

## Releasing new releases

- Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments. Note: The manifest.json file must be in two places, first the root path of your repository and also in the release.
- Publish the release.

> You can simplify the version bump process by running `npm version patch`, `npm version minor` or `npm version major` after updating `minAppVersion` manually in `manifest.json`.
> The command will bump version in `manifest.json` and `package.json`, and add the entry for the new version to `versions.json`

## Adding your plugin to the community plugin list

- Check the [plugin guidelines](https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines).
- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.

## How to use

- Clone this repo.
- Make sure your NodeJS is at least v16 (`node --version`).
- `npm i` or `yarn` to install dependencies.
- `npm run dev` to start compilation in watch mode.

## Setting up Reference Materials (.ref folder)

This project uses a `.ref` folder (gitignored) to reference Obsidian documentation and other projects. To set up:

1. **One-time setup**: Create a central `.ref/obsidian-dev` directory on your computer (e.g., `C:\Users\YourName\Development\.ref\obsidian-dev` or `~/Development/.ref/obsidian-dev`) and clone the 6 core Obsidian projects there. See [.agents/ref-instructions.md](.agents/ref-instructions.md) for details.

2. **Per-project setup**: Run the setup script to create symlinks in this project:
   - **Windows**: `scripts\setup-ref-links.bat` or `.\scripts\setup-ref-links.ps1`
   - **macOS/Linux**: `./scripts/setup-ref-links.sh`

The setup scripts will automatically:
- Detect your central `.ref/obsidian-dev` location
- Clone the 6 core Obsidian projects if they don't exist
- Pull the latest changes if the repos already exist
- Create the necessary symlinks

This allows all your projects to reference the same central location without duplicating repos. You can re-run the setup script anytime to keep your reference repos up to date.

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

## Improve code quality with eslint

This project includes ESLint with `eslint-plugin-obsidianmd` to catch common issues and enforce Obsidian plugin best practices.

**Note**: This project includes an `.npmrc` file that automatically configures npm to use `legacy-peer-deps` mode, which helps resolve dependency conflicts. When copying this template, make sure to include the `.npmrc` file.

### Running ESLint

- **Check for issues**: `npm run lint`
- **Auto-fix issues**: `npm run lint:fix`
- **Check specific file**: `npx eslint main.ts`
- **Check specific directory**: `npx eslint src/`

### Common Issues Caught

ESLint will catch issues like:
- Unhandled promises (missing `await` or error handling)
- Command IDs/names that include plugin ID/name
- Direct style manipulation (should use CSS classes or `setCssProps()`)
- Creating style elements (should use `styles.css` instead)
- Using deprecated APIs (like `navigator.platform`)
- And many more...

See [.agents/linting-fixes-guide.md](.agents/linting-fixes-guide.md) for detailed fixes for all common issues.

## Funding URL

You can include funding URLs where people who use your plugin can financially support it.

The simple way is to set the `fundingUrl` field to your link in your `manifest.json` file:

```json
{
    "fundingUrl": "https://buymeacoffee.com"
}
```

If you have multiple URLs, you can also do:

```json
{
    "fundingUrl": {
        "Buy Me a Coffee": "https://buymeacoffee.com",
        "GitHub Sponsor": "https://github.com/sponsors",
        "Patreon": "https://www.patreon.com/"
    }
}
```

## API Documentation

See https://github.com/obsidianmd/obsidian-api
