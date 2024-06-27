import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { DestaquePipe } from './pipes/destaque.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SqrtPipe, DestaquePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'testepipe';
  hoje = new Date();
  salarioProfessor = 6453.67;
}
