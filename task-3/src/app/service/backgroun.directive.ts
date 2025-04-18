import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector : '[background]',
    standalone :true
})

export class BackgroundColor{
    constructor(private ele :ElementRef, private render : Renderer2){}

    // ngOnInit(){
    //     // this.render.setStyle(this.ele.nativeElement,'backgroundColor','black');
    //     this.render.setStyle(this.ele.nativeElement,'color','blue');
    // }

    @HostListener('mouseenter') OnmouseEnter(){
        this.render.addClass(this.ele.nativeElement,'highlight');
    }
    @HostListener('mouseout') OnmouseOut(){
        this.render.removeClass(this.ele.nativeElement,'highlight');
    }

    // @HostBinding('style.backgroundColor') backgroundColor : string ='yellow';
}