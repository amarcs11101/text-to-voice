import { Component } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'text-to-voice-app';
  voiceMesssage : string;
  message : string;
  sayIt() {
   this.message= (<HTMLInputElement>document.getElementById('textAreaMessage')).value;
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(this.message));
  }
}
