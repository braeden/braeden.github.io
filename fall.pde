Ball b;
int score;
ArrayList<Line> lines = new ArrayList<Line>();
void setup() {
  lines.clear();
  score = 0;
  smooth();
  ellipseMode(CENTER);
  size(400, 600);
  background(0);
  stroke(255);
  fill(255);
  b = new Ball();
  for (int i = 0; i<height; i+=50) {
    lines.add(new Line(i, int(random(0,width-50))));
  }
}
void draw() {
  background(0);
  b.update();
  b.display();
  for (int i = lines.size() - 1; i >= 0; i--) {
    Line l = lines.get(i);
    gameUpdate(l);
    l.check();
    l.display();
  }
  text(score,5,10);
}
class Ball {
  int x = width/2;
  int y = height-100;
  int vx = 0;
  int vy = 1;
  Ball() {}
  void display() {
    ellipse(x, y, 20, 20);
  }
  void update() {
    x += vx;
    y += vy;
    if (b.x+10 > width) {
      b.x = width-10;
    } else if (b.x-10 < 0) {
      b.x = 10;
    }
    if (b.y<10) {
      setup();
    }
  }
}
class Line {
  int yCord;
  int holePoint;
  Line(int yCord_, int holePoint_) {
    yCord = yCord_;
    holePoint = holePoint_;
  }
  void display() {
    line(0, yCord, holePoint, yCord);
    line(holePoint+50, yCord, width, yCord);
  }
  void update() {
    
  }
  void check() {
    if (yCord<0) { //Create and delete lines
      lines.remove(0);
      spawnLine();
      score++;
    }
    if (yCord == b.y+10) {
      if (b.x < holePoint || b.x+5 > holePoint+45) {
        b.y--;
      } else {
      }
    }
  }
}

void spawnLine() {
  lines.add(new Line(height, int(random(0,width-50))));
}

void gameUpdate(Line l) {
  if (l.yCord<0) { //Create and delete lines
    lines.remove(l);
    spawnLine();
  }
  if (l.yCord == b.y+10) {
    if (b.x < l.holePoint || b.x > l.holePoint+50) {
      b.y--;
    }
  }
  l.yCord--;
}
  
void keyPressed() {
  if (key == CODED) {
    if (keyCode == LEFT) {
      b.vx=-4;
    } else if (keyCode == RIGHT) {
      b.vx=4;
    } else if (keyCode == DOWN) {
      b.vx = 0;
    }
  }
}
