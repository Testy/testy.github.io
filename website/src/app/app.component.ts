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
    private readonly maxHeaderHeight = 225;

    public scrollOffset = 0;
    public headerHeight = this.maxHeaderHeight;
    public contentPaddingTop = this.maxHeaderHeight;

    constructor(@Inject(DOCUMENT) private document: Document) {

    }

    ngOnInit(): void {
        interval(10).subscribe(() => this.adjustHeader());
    }

    private adjustHeader() {
        const headerHeightTarget = this.scrollOffset < 4 ? this.maxHeaderHeight : this.minHeaderHeight;
        this.headerHeight = this.lerp(this.headerHeight, headerHeightTarget, 0.05);

        const paddingTopTarget = this.scrollOffset < 4 ? this.maxHeaderHeight : this.minPaddingTop;
        this.contentPaddingTop = this.lerp(this.contentPaddingTop, paddingTopTarget, 0.05);
    }

    private lerp(a, b, t) {
        return a + t * (b - a);
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.scrollOffset = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    }
}
