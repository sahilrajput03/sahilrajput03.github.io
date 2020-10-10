var ss = () => console.log(`amaazz`);

const copyToClipboard = (str) => {
	const el = document.createElement("textarea");
	el.value = str;
	document.body.appendChild(el);
	el.select();
	document.execCommand("copy");
	document.body.removeChild(el);
};

var copy = function (target) {
	console.log(`copy function executedd`);

	var textArea = document.createElement("textarea");
	textArea.setAttribute("style", "width:1px;border:0;opacity:0;");
	document.body.appendChild(textArea);
	textArea.value = target.innerHTML;
	textArea.select();
	document.execCommand("copy");
	document.body.removeChild(textArea);
};

var copyableElements = document.querySelectorAll(".hljs");

copyableElements.forEach(function (item) {
	var button = document.createElement("button");

	button.className = "copyButton";
	button.innerHTML = "Copy to clipboard";

	item.parentNode.insertBefore(button, item.nextSibling);

	button.addEventListener("click", function (e) {
		e.preventDefault();
		let copyingText = item.innerText;
		console.log(`::myLog::${copyingText} is copied to cliboard, Yikes!!`);
		copyToClipboard(copyingText); /* This works good for my case. */
	});
});

// ────────────────────────────────────────────────────────
// Sources:
// https://stackoverflow.com/questions/31908564/easy-way-to-add-copy-to-clipboard-to-github-markdown
// https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib
// Below is the lifesaver for this mission, coz it provides the copyToClipboard function.
// https://www.30secondsofcode.org/blog/s/copy-text-to-clipboard-with-javascript

// _________________________________________________
if (window.location.href.includes("https://reverberate.ml/uses")) {
	var links = document.links;
	for (var i = 0, linksLength = links.length; i < linksLength; i++) {
		if (links[i].hostname != window.location.hostname) {
			links[i].target = "_blank";
		}
	}
}
