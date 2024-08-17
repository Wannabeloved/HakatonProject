import { Module } from '../core/module'

export class ClicksModule extends Module {
	constructor(type, text) {
		super(type, text)
		this.type = type
		this.text = text
	}

	trigger() {
		let counter = 0

		setTimeout(() => {
			document.removeEventListener('click', increment)
			alert(`Вы кликнули ${counter} раз!`)
		}, 3000)

		document.addEventListener('click', increment)

		function increment() {
			counter += 1
		}
	}

	toHTML() {
		return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
	}
}
