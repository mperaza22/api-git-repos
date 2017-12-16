import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private http: HttpClient){
	}

	ngOnInit(): void {
		this.http.get('https://api.github.com/users/mperaza22/repos').subscribe(data => {
			if(Array.isArray(data))
				this.repos = data;
		});
	}
}
