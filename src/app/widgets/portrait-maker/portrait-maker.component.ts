import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portrait-maker',
  standalone: true,
  imports: [],
  templateUrl: './portrait-maker.component.html',
  styleUrl: './portrait-maker.component.scss',
})
export class PortraitMakerComponent implements AfterViewInit {
  @ViewChild('myCanvas', { static: false })
  canvas!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D | null;

  constructor() {}

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.redraw();
  }

  advance(direction: -1 | 1, component: 'Hair' | 'Nose' | 'Mouth') {
    console.log(direction, component);
    this.redraw();
  }

  redraw() {
    if (this.ctx) {
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(0, 0, 256, 256);
      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(32, 32, 128, 128);
    } else {
      console.log('error, no cnv ctx!');
    }
  }

  saveImage() {
    console.log('saving...');
    console.log('Just save the nosenumber, hair number, etc on the server');
  }
}
