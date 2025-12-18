# Obsidian Sample Plugin Plus

This is a sample plugin for [Obsidian](https://obsidian.md) with AI-assisted development tools and best practices.

This project uses TypeScript to provide type checking and documentation. The repo depends on the latest plugin API (obsidian.d.ts) in TypeScript Definition format, which contains TSDoc comments describing what it does.

This sample plugin demonstrates some of the basic functionality the plugin API can do:
- Adds a ribbon icon, which shows a Notice when clicked.
- Adds a command "Open Sample Modal" which opens a Modal.
- Adds a plugin setting tab to the settings page.

## What Makes This Plus Version Different?

This template includes additional tools and documentation to improve your development experience:

### AI-Assisted Development System

- **`AGENTS.md`** - Project-specific instructions for AI coding assistants
- **`.agents/` folder** - Comprehensive development guides, code patterns, and best practices
- Helps AI assistants understand your project structure and coding conventions
- Provides quick reference guides and common task examples

### Reference Materials System (`.ref` folder)

- **Symlinks to Obsidian repositories** - Easy access to API docs, sample code, and examples
- **Centralized storage** - All projects share the same reference repos (no duplication)
- **6 core Obsidian projects** - API definitions, documentation, sample plugins, ESLint rules
- **Project-specific references** - Add your own plugin/theme references as needed

### ESLint 9 with Obsidian Rules

- **Exact parity with Review Bot** - Uses the same `obsidianmd.configs.recommended` configuration
- **Automatic migration** - Upgrades from ESLint 8 to ESLint 9 automatically
- **Smart detection** - Handles `main.ts` in root or `src/` folder automatically
- **Catches common issues** - Command naming, style manipulation, deprecated APIs, and more

**See also:** [obsidian-sample-theme-plus](https://github.com/davidvkimball/obsidian-sample-theme-plus) - The companion theme template with similar enhancements.

## Recommended Tools and Plugins for Plugin Development

These tools can significantly improve your plugin development workflow:

### Hot Reload Plugins

**[Hot Reload](https://github.com/pjeby/hot-reload)** - Automatically reload your plugin when code changes. Dramatically speeds up development by eliminating manual reloads.

**[Hot Reload Mobile](https://github.com/shabegom/obsidian-hot-reload-mobile)** - Mobile-compatible version of Hot Reload for testing on mobile devices.

## Quick Start

### For New Plugins (Using This as a Template)

1. **Use this template** - Click "Use this template" on GitHub or clone this repo
2. **Install dependencies**: `npm install`
3. **Optional: Setup reference materials** (recommended):
   - **Windows**: `scripts\setup-ref-links.bat`
   - **macOS/Linux**: `./scripts/setup-ref-links.sh`
4. **Optional: Setup ESLint** (recommended):
   ```bash
   node scripts/setup-eslint.mjs
   npm install
   npm run lint
   ```
5. **Start developing**: `npm run dev`

### For Existing Plugins (Upgrading to This System)

You can add these enhancements to your existing plugin:

1. **Copy these folders/files to your plugin**:
   - `AGENTS.md` → Your plugin root
   - `.agents/` folder → Your plugin root
   - `scripts/` folder → Your plugin root
   - `.github/` folder (optional) → Your plugin root (contains GitHub Actions workflows)

2. **Setup reference materials**:
   - **Windows**: `scripts\setup-ref-links.bat`
   - **macOS/Linux**: `./scripts/setup-ref-links.sh`
   - This creates symlinks to Obsidian reference repos in `.ref/` folder

3. **Setup ESLint** (recommended):
   ```bash
   node scripts/setup-eslint.mjs
   npm install
   npm run lint
   ```
   
   **What the setup script does automatically:**
   - Updates `package.json` with ESLint 9 dependencies and lint scripts
   - Creates/updates `eslint.config.mjs` (ESLint 9 flat config)
   - Updates `esbuild.config.mjs` (fixes builtinModules import and adds entry point detection)
   - Creates `scripts/lint-wrapper.mjs` (adds helpful success messages)
   - Creates `.npmrc` (npm configuration)
   - Removes legacy `.eslintrc` files if present
   
   **Note:** The script will update your existing `esbuild.config.mjs` and `eslint.config.mjs` files, but it preserves your custom configuration where possible. Review the changes after running the script.
   
   **Important:** Don't copy `package.json` from this template - it contains template-specific values. The setup script will update your existing `package.json` with only the necessary ESLint dependencies and scripts.

## First Time Developing Plugins?

- Check if [someone already developed a plugin for what you want](https://obsidian.md/plugins)!
- Make a copy of this repo as a template with the "Use this template" button
- Clone your repo to a local development folder
- Install NodeJS (v16+), then run `npm i`
- Run `npm run dev` to compile your plugin (builds to `main.js` in root for local testing)
- For releases, run `npm run build` which creates `dist/main.js`
- Reload Obsidian to load the new version of your plugin
- Enable plugin in settings window

## How to Use

### Basic Development

- Clone this repo
- Make sure your NodeJS is at least v16 (`node --version`)
- `npm i` to install dependencies
- **Development**: `npm run dev` - Builds to `main.js` in root (for local testing)
- **Production**: `npm run build` - Builds to `dist/main.js` (for releases)

### Using the AI System

- Read `AGENTS.md` for project-specific instructions
- Check `.agents/` folder for development guides
- See `.agents/quick-reference.md` for a one-page cheat sheet

### Using ESLint

- **Check for issues**: `npm run lint` (shows helpful success message when passing)
- **Auto-fix issues**: `npm run lint:fix`

The lint commands use `scripts/lint-wrapper.mjs` which adds helpful success messages. This file is automatically created/updated when you run `node scripts/setup-eslint.mjs`.

## Releasing New Releases

- Update your `manifest.json` with your new version number and minimum Obsidian version
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"`
- **Build for production**: Run `npm run build`
  - Creates all release files in the `dist/` folder:
    - `dist/main.js` (compiled from TypeScript)
    - `dist/manifest.json` (copied from root)
    - `dist/styles.css` (copied from root, if present)
- Create new GitHub release using your new version number as the "Tag version" (no `v` prefix)
- **Upload all files from `dist/` folder** to the release
- Publish the release

> **Tip:** You can simplify the version bump process by running `npm version patch`, `npm version minor` or `npm version major` after updating `minAppVersion` manually in `manifest.json`.

## GitHub Actions Workflows (Optional)

This template includes GitHub Actions workflows in `.github/workflows/`:

- **`lint.yml`** - Automatically checks your code on every push (builds and lints)
- **`release.yml`** - Automatically creates GitHub releases when you push a version tag

**These workflows are completely optional** - your plugin works fine without them. They're included as a convenience for automated testing and releases.

**If you want to modify the workflows:**
- You can edit them directly on GitHub.com (no special permissions needed)
- If you want to push workflow changes via Git, you'll need a Personal Access Token with the `workflow` scope (see [GitHub's documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens))
- Most users won't need to modify workflows - they work out of the box

## Adding Your Plugin to the Community Plugin List

- Check the [plugin guidelines](https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines)
- Publish an initial version
- Make sure you have a `README.md` file in the root of your repo
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin

## Manually Installing the Plugin

- Copy over all files from `dist/` folder (for production builds) or from root (for dev builds) to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`

## Funding URL

You can include funding URLs in your `manifest.json` file:

```json
{
    "fundingUrl": "https://buymeacoffee.com"
}
```

Or for multiple URLs:

```json
{
    "fundingUrl": {
        "Buy Me a Coffee": "https://buymeacoffee.com",
        "GitHub Sponsor": "https://github.com/sponsors"
    }
}
```

## Troubleshooting

### Upgrade Issues

If you're upgrading an existing plugin and encounter issues:

1. **ESLint errors after setup**: Run `npm install` to ensure all dependencies are installed
2. **Build errors**: Check that `esbuild.config.mjs` was updated correctly (the setup script should handle this automatically)
3. **Entry point not found**: The setup script adds entry point detection - verify `esbuild.config.mjs` has the detection logic for both `src/main.ts` and `main.ts`
4. **Workflow permission errors**: See [GitHub Actions Workflows (Optional)](#github-actions-workflows-optional) section above
5. **Package.json conflicts**: Don't copy `package.json` from the template - the setup script updates your existing one with only the necessary additions

### Common Issues

- **`.ref` folder is empty**: Run the setup script (`scripts\setup-ref-links.bat` or `.sh`)
- **Linting fails**: Make sure you ran `npm install` after running the ESLint setup script
- **Build fails**: Check that `esbuild.config.mjs` exists and has the correct entry point detection

## API Documentation

See https://github.com/obsidianmd/obsidian-api
