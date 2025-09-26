// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="auth-screen">
      <!-- Routed pages (splash, login, room, quiz, etc.) will load here -->
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .auth-screen {
      padding: 2rem;
      text-align: center;
    }
    button {
      background-color: #4285F4;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #357ae8;
    }
  `]
})
export class App {}
