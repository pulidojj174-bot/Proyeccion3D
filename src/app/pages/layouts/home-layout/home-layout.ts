import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../../../shared/organism/navbar/navbar";
import { Footer } from "../../../shared/organism/footer/footer";

@Component({
  selector: 'app-home-layout',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLayout {

}
