import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'pokedex-intro',
	templateUrl: './intro.component.html',
	styleUrls: ['./intro.component.css']
})

export default class IntroComponent {
	public leftPokedexImg : string;
	public rightPokedexImg : string;
	public rightPokedexFrontImg : string;
	public backgroundImg : string;

	public clickedPokedex : boolean;
	public zoomInPokedex : boolean;

	constructor(
		private router: Router
	) {
		this.clickedPokedex = false;
		this.zoomInPokedex = false;

		this.leftPokedexImg = '../assets/images/pokedex_left.png';
		this.rightPokedexFrontImg = '../assets/images/pokedex_right_front.png';
		this.rightPokedexImg = '../assets/images/pokedex_right.png';

		this.backgroundImg = '../assets/images/background.png'
	}

	clickPokedex(){
		this.clickedPokedex = true;

		setTimeout( () => {
			this.zoomInPokedex = true;

			setTimeout( ()=> {
				this.router.navigate(['/home']);
			}, 1200);
		}, 3200);
	}
}