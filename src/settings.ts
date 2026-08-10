import { App, PluginSettingTab, Setting, SettingDefinitionItem } from "obsidian";
import MyPlugin from "./main";

export interface MyPluginSettings {
	mySetting: string;
}

export const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export class SampleSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	/**
	 * Declarative settings API (Obsidian 1.13 and later). Obsidian renders these
	 * definitions itself and indexes them for the built-in settings search, so
	 * prefer this over building the UI by hand in display().
	 *
	 * `key` is the property name on `this.plugin.settings`. The default
	 * getControlValue/setControlValue implementations read, mutate and persist
	 * that object, so no manual onChange or save call is needed here.
	 */
	getSettingDefinitions(): SettingDefinitionItem[] {
		return [
			{
				name: 'Settings #1',
				desc: 'It\'s a secret',
				control: {
					type: 'text',
					key: 'mySetting',
					placeholder: 'Enter your secret',
				},
			},
		];
	}

	/**
	 * Fallback for Obsidian versions before 1.13, which do not call
	 * getSettingDefinitions(). Keep it in sync with the definitions above, or
	 * drop it once the plugin's minAppVersion is 1.13.0 or later.
	 */
	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Settings #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value: string) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
