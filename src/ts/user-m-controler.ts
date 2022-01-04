import { isMobile } from 'is-mobile';
import { IMovePosition } from './interfaces';

function getFirstChild(parent: Element, c: string): Element {
  const children: HTMLCollection = parent.children;
  const len = children.length;
  for (let i = 0; i < len; i++) {
    const child = children[i];
    if (child.classList.contains(c)) {
      return child;
    }
  }
  return null;
}

function posOffset(element: any): IMovePosition {
  const offset = {
    x: element.offsetLeft,
    y: element.offsetTop,
  };
  let p = element.parentElement;
  while (p) {
    offset.x += p.offsetLeft;
    offset.y += p.offsetTop;
    p = p.parentElement;
  }
  return offset;
}

function getMouseEventO(event: any): IMovePosition {
  if (event instanceof MouseEvent) {
    return {
      x: event.clientX,
      y: event.clientY,
    };
  }
  if (event instanceof TouchEvent) {
    const touch = event.touches[0];
    if (touch) {
      return {
        x: touch.clientX,
        y: touch.clientY,
      };
    }
  }
  return {
    x: 0,
    y: 0,
  };
}

function setControlPosition(container: any, element: any, event: any): IMovePosition {
  const cntOffset = posOffset(container);
  const eventO: IMovePosition = getMouseEventO(event); // touchesParent.touches && touchesParent.touches[0] || {clientX: cntOffset.x, clientY: cntOffset.y};
  const x = (eventO.x - cntOffset.x) - element.offsetWidth  / 2;
  const y = (eventO.y - cntOffset.y) - element.offsetHeight / 2;
  element.style.left = x;
  element.style.top  = y;
  return {x, y};
}

function getDir(pos: IMovePosition, element: any): string {
  let x = pos.x - (element && element.offsetWidth  / 2 || 0);
  let y = pos.y - (element && element.offsetHeight / 2 || 0);
  const alpha = Math.atan2(y, x);
  const ang = Math.PI / 4;
  if (-ang <= alpha && alpha <= ang) {
    return 'Right';
  }
  if (ang <= alpha && alpha <= 3 * ang) {
    return 'Bottom';
  }
  if (-3 * ang <= alpha && alpha <= -ang) {
    return 'Top';
  }
  if (3 * ang <= alpha || alpha <= -3 * ang) {
    return 'Left';
  }
  return '';
}

export class UserMControler {
  private lastDir: string = '';
  private callbacks: Function[] = [];
  private container: Element;
  private control: Element;
  private freeControlClass: string;

  constructor(containerSelector: string, freeControlClass: string) {
    this.freeControlClass = freeControlClass;
    this.container = document.querySelector(`.${containerSelector}`);
    this.control = getFirstChild(this.container, 'control-button');
    this.listen();
  }

  private userControl(on: boolean) {
    if (on) {
      this.container.classList.remove(this.freeControlClass);
    } else {
      this.lastDir = '';
      this.container.classList.add(this.freeControlClass);
    }
  }

  private moveControl(event: MouseEvent) {
    const lastDir = this.lastDir;
    const pos = setControlPosition(this.container, this.control, event);
    const newDir = getDir(pos, this.container);
    this.lastDir = newDir;
    if (lastDir !== newDir) {
      this.triggerDirChange(newDir, lastDir);
    }
  }

  private listen() {
    const self = this;

    if (isMobile()) {
      self.container.addEventListener('touchstart', function(event: MouseEvent) {
        self.userControl(true);
        self.moveControl(event);
      });

      self.container.addEventListener('touchend', function(event: MouseEvent) {
        self.userControl(false);
      });

      self.container.addEventListener('touchmove', function(event: MouseEvent) {
        self.moveControl(event);
      });
    } else {
      self.container.addEventListener('mousedown', function(event: MouseEvent) {
        self.userControl(true);
        self.moveControl(event);
      });

      self.container.addEventListener('mouseup', function(event: MouseEvent) {
        self.userControl(false);
      });

      self.container.addEventListener('mousemove', function(event: MouseEvent) {
        if (self.lastDir) {
          self.moveControl(event);
        }
      });

      self.container.addEventListener('mouseleave', function(event: MouseEvent) {
        self.userControl(false);
      });
    }
  }

  private triggerDirChange(newDir: string, oldDir: string) {
    for (let i = 0; i < this.callbacks.length; i++) {
      this.callbacks[i].call(null, newDir, oldDir);
    }
  }

  onChange(callback: Function) {
    this.callbacks.push(callback);
  }
}
