import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { interval } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private readonly minHeaderHeight = 86;
    private readonly minPaddingTop = 1;
    private readonly maxHeaderHeight = 250;

    private scrollOffset = 0;

    public taglineHeight = 1;
    public headerHeight = this.maxHeaderHeight;
    public contentPaddingTop = this.maxHeaderHeight;

    constructor(@Inject(DOCUMENT) private document: Document) {

    }

    ngOnInit(): void {
        interval(10).subscribe(() => this.adjustHeader());
    }

    private adjustHeader() {
        const taglineHeightTarget = this.scrollOffset < 8 ? 1 : 0;
        this.taglineHeight = this.lerp(this.taglineHeight, taglineHeightTarget, 0.04);

        const headerHeightTarget = this.scrollOffset < 8 ? this.maxHeaderHeight : this.minHeaderHeight;
        this.headerHeight = this.lerp(this.headerHeight, headerHeightTarget, 0.04);

        const paddingTopTarget = this.scrollOffset < 8 ? this.maxHeaderHeight : this.minPaddingTop;
        this.contentPaddingTop = this.lerp(this.contentPaddingTop, paddingTopTarget, 0.04);
    }

    private lerp(a, b, t) {
        return a + t * (b - a);
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scrollOffset = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        this.scrollOffset = scrollOffset;
    }
}
