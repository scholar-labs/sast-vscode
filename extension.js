const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "sec-check" is now active!');

	const disposable = vscode.commands.registerCommand('sec-check.testCommand', function () {
		vscode.window.showInformationMessage('this is a notification from security-check!');
	});

	const disposable2 = vscode.commands.registerCommand('sec-check.showTime', function() {
		const time = new Date();
		vscode.window.showWarningMessage(`the time is ${time.toLocaleTimeString()}`);
	})

	const disposable3 = vscode.commands.registerCommand('sec-check.print', function() {
		const editor = vscode.window.activeTextEditor;
		const outputChannel = vscode.window.createOutputChannel('Current File Content');

		if(editor) {
			const fileContent = editor.document.getText();

			// const errors = checkRules(fileContent);

			outputChannel.append('This is the content of your file. \n');
			outputChannel.append(fileContent);
			outputChannel.show();
		}
		
		else {
			vscode.window.showErrorMessage(`No editor open currently.`);
		}
	})

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
	context.subscriptions.push(disposable3);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
