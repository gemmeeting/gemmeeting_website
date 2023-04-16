import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, Engine, Container, ISourceOptions } from 'tsparticles-engine';
import { loadFull } from "tsparticles";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  id = 'tsparticles';

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = 'http://foo.bar/particles.json';

  /* or the classic JavaScript object */
  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: '#fff',
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -10
    },
    fpsLimit: 20,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.grab,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffb300',
      },
      links: {
        color: '#ffb300',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 0.5, max: 2 },
      },
    },
    detectRetina: true,
  };

  constructor() {
    
  }
  
  ngOnInit(): void {
  }

  playvideo(): void {
    setTimeout(() => { // wait dom to finish loading
      let videoElement: any = document.getElementById('intro-video');
      if (videoElement) {
        videoElement.play();
      }
    }, 200);
  }
  
  // particlesLoaded(container: Container): void {
  //   // console.log(container);
  // }

  // async particlesInit(engine: Engine): Promise<void> {
  //   await loadFull(engine);
  // }

  openGoogleMapsLink() {
    window.location.href = 'https://goo.gl/maps/kQ6cybC1yVkzgogZ8'
  }
}