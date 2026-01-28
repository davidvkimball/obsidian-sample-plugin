/**
 * Obsidian API Mock
 *
 * Lightweight stubs for Obsidian classes/types so tests can import
 * modules that reference 'obsidian' without needing a running app.
 *
 * Only stub what you actually need. Add more as your plugin grows.
 * These are NOT meant to simulate Obsidian behavior — they just
 * prevent import errors so you can test YOUR logic.
 */

// --- Core classes ---

export class Plugin {
	app: any;
	manifest: any;
	async loadData(): Promise<any> { return null; }
	async saveData(_data: any): Promise<void> {}
	addRibbonIcon(_icon: string, _title: string, _callback: (evt: MouseEvent) => void): HTMLElement {
		return document.createElement('div');
	}
	addStatusBarItem(): HTMLElement { return document.createElement('div'); }
	addCommand(_command: any): any { return {}; }
	addSettingTab(_tab: any): void {}
	registerDomEvent(_el: any, _type: string, _callback: any): void {}
	registerInterval(_id: number): number { return _id; }
	registerEvent(_event: any): void {}
}

export class PluginSettingTab {
	app: any;
	plugin: any;
	containerEl: HTMLElement = document.createElement('div');
	constructor(app: any, plugin: any) {
		this.app = app;
		this.plugin = plugin;
	}
	display(): void {}
	hide(): void {}
}

export class Modal {
	app: any;
	contentEl: HTMLElement = document.createElement('div');
	constructor(app: any) { this.app = app; }
	open(): void {}
	close(): void {}
	onOpen(): void {}
	onClose(): void {}
}

export class Notice {
	constructor(_message: string | DocumentFragment, _timeout?: number) {}
}

export class Setting {
	settingEl: HTMLElement = document.createElement('div');
	constructor(_containerEl: HTMLElement) {}
	setName(_name: string): this { return this; }
	setDesc(_desc: string | DocumentFragment): this { return this; }
	addText(_cb: (text: any) => any): this { return this; }
	addTextArea(_cb: (text: any) => any): this { return this; }
	addToggle(_cb: (toggle: any) => any): this { return this; }
	addDropdown(_cb: (dropdown: any) => any): this { return this; }
	addButton(_cb: (button: any) => any): this { return this; }
	addSlider(_cb: (slider: any) => any): this { return this; }
	setClass(_cls: string): this { return this; }
}

export class MarkdownView {
	editor: any;
	file: any;
	getViewType(): string { return 'markdown'; }
}

export class TFile {
	path = '';
	name = '';
	basename = '';
	extension = 'md';
	parent: TFolder | null = null;
}

export class TFolder {
	path = '';
	name = '';
	children: (TFile | TFolder)[] = [];
	parent: TFolder | null = null;
	isRoot(): boolean { return this.parent === null; }
}

export class App {
	vault: any = {};
	workspace: any = {};
	metadataCache: any = {};
}

// --- Interfaces (exported as empty types for compatibility) ---

export interface Editor {
	replaceSelection(replacement: string): void;
	getSelection(): string;
	getValue(): string;
	setValue(content: string): void;
}

// --- Utility types ---

export type EventRef = any;

// --- Functions ---

export function normalizePath(path: string): string {
	return path.replace(/\\/g, '/').replace(/\/+/g, '/');
}
