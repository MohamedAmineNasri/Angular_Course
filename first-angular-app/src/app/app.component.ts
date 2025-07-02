import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'This loaded dynacmically';
  imgUrl: string =
    'https://www.fusioncharts.com/blog/wp-content/uploads/2022/09/pexels-antonio-batinic%CC%81-4164418.jpg';
  isDisabled: boolean = true;
  isActive: boolean = true;
  isColor: boolean = true;

  fruitName: string = 'Apple';

  userName: string = ' nasri';

  textValue: string = 'Value Is Comping From The Component';

  onClick() {
    alert('Button Clicked');
  }
  onHover() {
    alert('Button Hovered');
  }

  keyEnter() {
    alert('Character Pressed');
  }

  EnterKeyEvent(event: any) {
    // alert(`Enter Key Pressed ${event}` )
    // console.log(`Enter Key Pressed ${event}`);
    // console.log(event.keyCode);
    if (event.keyCode === 13) {
      alert('Enter Key Pressed');
    }
  }

  KeyUpFiltering() {
    console.log('Key Up Filtering');
  }

  KeyUpFilteringTemplateVariable(user: HTMLInputElement) {
    console.log(user.value);
  }

  UpdateUsername(user: HTMLInputElement) {
    this.userName = user.value;
    console.log(this.userName);
  }

  onKeyUp(){
    console.log(this.textValue)
  }
}
