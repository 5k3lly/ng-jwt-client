import { Component } from '@angular/core';

@Component({
    selector: 'jjj-loggedin-page',
    template: `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1063" height="751">
	<defs>
		<pattern id="c" x="14" width="60" height="20" patternUnits="userSpaceOnUse">
			<rect width="60" height="20" fill="#fff"/>
			<rect width="30" height="10"/>
			<rect x="30" y="10" width="30" height="10"/>
		</pattern>
		<pattern id="c2" y="-9" xlink:href="#c"/>
	</defs>
	<rect width="1063" height="751" fill="url(#c2)"/>
	<circle cx="375.5" cy="-531.5" r="291.5" transform="rotate(90)" fill="url(#c)"/>
	<text x="50%" y="50%">You made it!</text>
</svg>
    `,
    styles: [`
text {
    fill: red;
    font: italic 72pt serif;
	text-anchor: middle;
}        
`]
})
export class LoggedInComponent {

}