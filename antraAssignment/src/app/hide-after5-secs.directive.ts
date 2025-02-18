import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHideAfter5Secs]'
})
export class HideDerective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, "display", "none")
    }, 5000)
  }

}
