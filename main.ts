import { App, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class WindowCollapse extends Plugin {
	async onload() {
		this.addCommand({
			id: 'collapse-left-sidebar',
			name: 'Toggle Collapse Left Sidebar',
			callback: () => {
				this.toggleCollapseLeft();
			},
		});

		this.addCommand({
			id: 'collapse-right-sidebar',
			name: 'Toggle Collapse Right Sidebar',
			callback: () => {
				this.toggleCollapseRight();
			},
		});

		this.addCommand({
			id: 'collapse-sidebars',
			name: 'Toggle Collapse Sidebars',
			callback: () => {
				this.toggleCollapse()
			},

		});
	}

	onunload() {
		console.log('unloading plugin');
	}

	toggleCollapseLeft() {
		document.querySelector('.mod-left .workspace-ribbon-collapse-btn').click();
	}

	toggleCollapseRight() {
		document.querySelector('.mod-right .workspace-ribbon-collapse-btn').click();
	}

	toggleCollapse() {
		let leftIsCollapsed = (document.querySelector('.workspace-ribbon.mod-left').classList.contains('is-collapsed')) ? 1 : 0;
		let rightIsCollapsed = (document.querySelector('.workspace-ribbon.mod-right').classList.contains('is-collapsed')) ? 1 : 0;
		let total = leftIsCollapsed + rightIsCollapsed;

		if (total != 1) {
			this.toggleCollapseRight();
			this.toggleCollapseLeft();

			return
		}

		if (leftIsCollapsed) {
			this.toggleCollapseRight();

			return;
		}

		if (rightIsCollapsed) {
			this.toggleCollapseLeft();

			return;
		}
	}
}
