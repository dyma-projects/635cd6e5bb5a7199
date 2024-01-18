import { Directive, ElementRef, HostListener } from '@angular/core';

const KEY_DOWN_COLOR = 'red';
const KEY_LEFT_COLOR = 'orange';
const KEY_RIGHT_COLOR = 'green';
const KEY_UP_COLOR = 'blue';

@Directive({ selector: '[colorFromDirectionKey]' })
export class ColorDirective {
  private readonly htmlElement: HTMLElement;

  constructor(elementRef: ElementRef) {
    this.htmlElement = elementRef.nativeElement as HTMLElement;
  }

  @HostListener('window:keydown', ['$event']) windowClick(
    $event: KeyboardEvent
  ) {
    switch ($event.key) {
      case 'ArrowDown':
        this.htmlElement.style.color = KEY_DOWN_COLOR;
        break;
      case 'ArrowLeft':
        this.htmlElement.style.color = KEY_LEFT_COLOR;
        break;
      case 'ArrowRight':
        this.htmlElement.style.color = KEY_RIGHT_COLOR;
        break;
      case 'ArrowUp':
        this.htmlElement.style.color = KEY_UP_COLOR;
        break;
    }
  }
}
