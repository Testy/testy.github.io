import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { interval } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private readonly minHeaderHeight = 48;
    private readonly minPaddingTop = 100;
    private readonly maxHeaderHeight = 250;

    private scrollOffset = 0;
    private scrollometer = 0;
    private shouldHide = false;

    public headerHeight = this.maxHeaderHeight;
    public contentPaddingTop = this.maxHeaderHeight;

    constructor(@Inject(DOCUMENT) private document: Document) {

    }

    ngOnInit(): void {
        interval(10).subscribe(() => this.adjustHeader());
    }

    private adjustHeader() {
        const headerHeightTarget = this.shouldHide ? this.maxHeaderHeight : this.minHeaderHeight;
        this.headerHeight = this.lerp(this.headerHeight, headerHeightTarget, 0.04);

        const paddingTopTarget = this.scrollOffset < 4 ? this.maxHeaderHeight : this.minPaddingTop;
        this.contentPaddingTop = this.lerp(this.contentPaddingTop, paddingTopTarget, 0.04);
    }

    private lerp(a, b, t) {
        return a + t * (b - a);
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scrollOffset = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        const difference = scrollOffset - this.scrollOffset;

        if (Math.sign(difference) === Math.sign(this.scrollometer)) {
            this.scrollometer += difference;
        } else {
            this.scrollometer = difference;
        }

        this.shouldHide = this.scrollometer < -100 || this.scrollOffset < 4;

        this.scrollOffset = scrollOffset;
    }
}
