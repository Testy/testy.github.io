import { Input, AfterViewInit, ElementRef, HostListener, Directive } from '@angular/core';
import * as highlight from 'highlight.js';

@Directive({
    selector: '[code]'
})

export class CodeDirective implements AfterViewInit {

    private el: HTMLElement;

    constructor(public element: ElementRef) {
        this.el = element.nativeElement;
    }

    ngAfterViewInit(): void {
        this.toMarkdown();
    }

    private toMarkdown() {
        this.el.innerHTML = highlight.highlight('typescript', this.el.innerText).value;
    }
}
