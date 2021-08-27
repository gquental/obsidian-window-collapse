import { Plugin } from 'obsidian';

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
	toggleCollapseLeft() {
		const leftSplit = this.app.workspace.leftSplit;

		leftSplit.collapsed ? leftSplit.expand() : leftSplit.collapse();
	}

	toggleCollapseRight() {
		const rightSplit = this.app.workspace.rightSplit;

		rightSplit.collapsed ? rightSplit.expand() : rightSplit.collapse();
	}

	toggleCollapse() {
		const leftIsCollapsed = this.app.workspace.leftSplit.collapsed ? 1 : 0;
		const rightIsCollapsed = this.app.workspace.rightSplit.collapsed ? 1 : 0;
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
