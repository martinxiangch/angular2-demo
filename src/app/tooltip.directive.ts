import { HostListener, Input, Injectable, ElementRef, Inject, Directive } from '@angular/core';

export class Overlay {
  private el: HTMLElement;
  constructor() {
    const el = document.createElement('div');
    el.className = 'tooltip';
    this.el = el;
  }
  close() {
    this.el.hidden = true;
  }
  open(el, text) {
    this.el.innerHTML = text;
    this.el.hidden = false;
    const rect = el.nativeElement.getBoundingClientRect();
    this.el.style.left = rect.left + 'px';
    this.el.style.top = rect.top + 'px';
  }
  attach(target) {
    target.appendChild(this.el);
  }
  detach() {
    this.el.parentNode.removeChild(this.el);
  }
}

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input()
  appTooltip: string;

  constructor(private el: ElementRef, private overlay: Overlay) {
    this.overlay.attach(el.nativeElement);
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.overlay.open(this.el, this.appTooltip);
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.overlay.close();
  }
}
