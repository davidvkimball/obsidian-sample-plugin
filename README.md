# Obsidian Sample Plugin Plus

This is a sample plugin for [Obsidian](https://obsidian.md) enhanced with AI-assisted development tools and best practices.

This project uses TypeScript to provide type checking and documentation. The repo depends on the latest plugin API (obsidian.d.ts) in TypeScript Definition format, which contains TSDoc comments describing what it does.

This sample plugin demonstrates some of the basic functionality the plugin API can do:
- Adds a ribbon icon, which shows a Notice when clicked.
- Adds a command "Open Sample Modal" which opens a Modal.
- Adds a plugin setting tab to the settings page.
- Registers a global click event and output 'click' to the console.
- Registers a global interval which logs 'setInterval' to the console.

## What Makes This Enhanced Version Different?

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

You can add these enhancements to your existing plugin. Choose what you want:

#### Option 1: Just the AI System and Reference Materials

1. **Copy these to your plugin**:
   - `AGENTS.md` → Your plugin root
   - `.agents/` folder → Your plugin root
   - `scripts/` folder → Your plugin root

2. **Setup reference materials**:
   - **Windows**: `scripts\setup-ref-links.bat`
   - **macOS/Linux**: `./scripts/setup-ref-links.sh`

3. **Done!** You now have AI-assisted development guides and reference materials.

#### Option 2: Just ESLint (Matching Review Bot)

1. **Copy this to your plugin**:
   - `scripts/setup-eslint.mjs` → Your plugin's `scripts/` folder

2. **Run the setup script**:
   ```bash
   node scripts/setup-eslint.mjs
   npm install
   npm run lint
   ```

The script will automatically:
- Upgrade from ESLint 8 to ESLint 9 (if needed)
- Update `package.json` with correct dependencies
- Create/update `eslint.config.mjs` with flat config
- Fix `esbuild.config.mjs` (replaces `builtin-modules`, detects `main.ts` location)
- Migrate rules from `.eslintrc` (if present)

#### Option 3: Everything (Recommended)

1. **Copy these to your plugin**:
   - `AGENTS.md` → Your plugin root
   - `.agents/` folder → Your plugin root
   - `scripts/` folder → Your plugin root

2. **Setup reference materials**:
   - **Windows**: `scripts\setup-ref-links.bat`
   - **macOS/Linux**: `./scripts/setup-ref-links.sh`

3. **Setup ESLint**:
   ```bash
   node scripts/setup-eslint.mjs
   npm install
   npm run lint
   ```

## Setup Scripts Details

### ESLint Setup (`scripts/setup-eslint.mjs`)

**What it does:**
- ✅ Upgrades from ESLint 8 to ESLint 9 (if needed)
- ✅ Updates `package.json` with ESLint 9 dependencies (including `globals` package)
- ✅ Creates/updates `eslint.config.mjs` with flat config format
- ✅ Migrates rules from `.eslintrc` (if present)
- ✅ Fixes `esbuild.config.mjs`:
  - Replaces `builtin-modules` → `module.builtinModules`
  - Detects `main.ts` location (root or `src/`) and fixes `entryPoints`
- ✅ Removes deprecated `builtin-modules` package from `package.json`
- ✅ Updates lint scripts (removes `--ext` flag for ESLint 9)
- ✅ Creates/updates `.npmrc` file

**Compatibility:**
- Handles `main.ts` in root (simple plugins) or `src/` (organized plugins)
- Automatically migrates from ESLint 8 configurations
- Preserves your custom rules during migration

**Result:**
- ESLint 9 with exact parity to the Obsidian Review Bot
- All browser globals configured (document, window, console, setTimeout, etc.)
- Obsidian-specific globals included (DomElementInfo, createDiv, etc.)
- TypeScript type checking enabled

### Reference Materials Setup (`scripts/setup-ref-links.*`)

**What it does:**
- Creates `../.ref/obsidian-dev/` directory (central location for all reference repos)
- Clones or updates the 6 core Obsidian projects:
  - `obsidian-api` - Official API type definitions
  - `obsidian-sample-plugin` - Template plugin with best practices
  - `obsidian-developer-docs` - Source for docs.obsidian.md
  - `obsidian-plugin-docs` - Plugin-specific documentation
  - `obsidian-sample-theme` - Theme template
  - `eslint-plugin` - ESLint rules for Obsidian plugins
- Creates symlinks in your project's `.ref/` folder pointing to the central location
- Creates `plugins/` and `themes/` subdirectories for project-specific references

**Note:** The `.ref` folder is gitignored and acts as a "portal" to reference materials. It doesn't contain actual files, just symlinks. All your projects can share the same central reference repos.

**Windows Users:** Creating symlinks on Windows may require administrator privileges. If you get a "permission denied" error:
- Run PowerShell or Command Prompt as Administrator, then run the setup script
- Or enable Developer Mode in Windows Settings (Settings → Privacy & Security → For developers → Developer Mode)
- The script uses directory junctions (`mklink /J`) which work without admin rights in most cases

## First Time Developing Plugins?

Quick starting guide for new plugin devs:

- Check if [someone already developed a plugin for what you want](https://obsidian.md/plugins)! There might be an existing plugin similar enough that you can partner up with.
- Make a copy of this repo as a template with the "Use this template" button (login to GitHub if you don't see it).
- Clone your repo to a local development folder. For convenience, you can place this folder in your `.obsidian/plugins/your-plugin-name` folder.
- Install NodeJS (v16+), then run `npm i` in the command line under your repo folder.
- **Optional but recommended**: Run the setup scripts (see above)
- Run `npm run dev` to compile your plugin from `main.ts` to `main.js`.
- Make changes to `main.ts` (or create new `.ts` files). Those changes should be automatically compiled into `main.js`.
- Reload Obsidian to load the new version of your plugin.
- Enable plugin in settings window.
- For updates to the Obsidian API run `npm update` in the command line under your repo folder.

## How to Use

### Basic Development

- Clone this repo.
- Make sure your NodeJS is at least v16 (`node --version`).
- `npm i` or `yarn` to install dependencies.
- `npm run dev` to start compilation in watch mode.

### Using the AI System

- Read `AGENTS.md` for project-specific instructions
- Check `.agents/` folder for development guides:
  - `quick-reference.md` - One-page cheat sheet
  - `common-tasks.md` - Quick code examples
  - `code-patterns.md` - Comprehensive patterns
  - `troubleshooting.md` - Common issues and solutions
  - And more...

### Using Reference Materials

- Access Obsidian API: `.ref/obsidian-api/obsidian.d.ts`
- View sample code: `.ref/obsidian-sample-plugin/`
- Check ESLint rules: `.ref/eslint-plugin/`
- See [`.agents/ref-instructions.md`](.agents/ref-instructions.md) for details

### Using ESLint

- **Check for issues**: `npm run lint`
- **Auto-fix issues**: `npm run lint:fix`
- **Check specific file**: `npx eslint main.ts`
- **Check specific directory**: `npx eslint src/`

**Common Issues Caught:**
- Unhandled promises (missing `await` or error handling)
- Command IDs/names that include plugin ID/name
- Direct style manipulation (should use CSS classes or `setCssProps()`)
- Creating style elements (should use `styles.css` instead)
- Using deprecated APIs (like `navigator.platform`)
- And many more...

See [.agents/linting-fixes-guide.md](.agents/linting-fixes-guide.md) for detailed fixes for all common issues.

## Troubleshooting

### ESLint errors about missing globals

If you see `'document' is not defined` or similar errors:
1. Make sure you ran `npm install` after the setup script
2. Verify `globals` package is in `package.json` devDependencies
3. Check that `eslint.config.mjs` includes the globals configuration
4. Re-run: `node scripts/setup-eslint.mjs`

### Build errors about "main.ts" not found

The setup script automatically detects where `main.ts` is located and fixes `esbuild.config.mjs`. If you still get errors:
1. Verify `main.ts` exists in either root or `src/` (not both!)
2. Check `esbuild.config.mjs` has the correct `entryPoints` path
3. Re-run the setup script: `node scripts/setup-eslint.mjs`

### Reference folder not working

If `.ref` folder is empty or symlinks are broken:
1. Re-run the appropriate setup script (`.bat` for Windows, `.sh` for macOS/Linux)
2. Check that the central location exists: `../.ref/obsidian-dev/`
3. Verify symlinks were created in your project's `.ref/` folder

**Windows symlink issues:**
- If you get "permission denied" errors, run PowerShell/CMD as Administrator
- Or enable Developer Mode: Settings → Privacy & Security → For developers → Developer Mode
- Directory junctions should work without admin rights in most cases

## Releasing New Releases

- Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments. Note: The manifest.json file must be in two places, first the root path of your repository and also in the release.
- Publish the release.

> You can simplify the version bump process by running `npm version patch`, `npm version minor` or `npm version major` after updating `minAppVersion` manually in `manifest.json`.
> The command will bump version in `manifest.json` and `package.json`, and add the entry for the new version to `versions.json`

## Adding Your Plugin to the Community Plugin List

- Check the [plugin guidelines](https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines).
- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.

## Manually Installing the Plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

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
