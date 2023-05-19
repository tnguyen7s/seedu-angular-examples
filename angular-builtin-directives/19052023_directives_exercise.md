- Create a project named `box-project` using `ng new`

- Install bootstrap by typing `npm install bootstrap`; 

_angular.json_ file:
- Navigate to the styles array and add a new import above the "src/styles.css" as "node_modules/bootstrap/dist/css/bootstrap.min.css",


### STEP 1: Creating a Component 

- Create a component named box

_box/box.component.html file_:

- Add a `<div class="card mt-3 box">` with a `<p class="text-center">I am a box!</p>` inside.

```html
<div class="card mt-3 box">
  <p class="text-center">I am a box!</p>
</div>
```

_app.component.html file_:

- First, create a container, row, and column that takes up the full width. Put an `<h1>` inside.

- Since we chose the string "app-box" for our selector, we can use that tag inside of our HTML.

```html
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-xs-12">
      <h1>Angular Boxes</h1>
      <app-box></app-box>
    </div>
  </div>
</div>
```

---

### STEP 2: Creating a Component Boxes

_Terminal_:

- Create a new component using the CLI that will hold multiple "app-box" components. Title it "boxes"

```zsh
ng g c boxes
```

_boxes/boxes.component.html file_:

- Create three instances of the "app-box" component using the `<app-box></app-box>` tags.

```html
<app-box></app-box>
<app-box></app-box>
<app-box></app-box>
```

_app.component.html file_:

- Change the tag to render the `<app-boxes>` instead of a singular `<app-box>`.

---

### STEP 3: Styling the Components

_app.component.css file_:

- Style the `<h1>` tag to be "red", have a size of "4rem" and a margin-bottom of ".5em".

```css
h1 {
  color: crimson;
  font-size: 4rem;
  margin-bottom: 0.5em;
}
```

_box/box.component.css file_:

- Style the ".box" class by adding a background-color, color, font-size, height, and flex properties.

```css
.box {
  background-color: saddlebrown;
  color: white;
  font-size: 1.5rem;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### STEP 4: Outputting Dynamic Content (Databinding)

_box/box.component.ts file_:

- Create two new variables: `boxNumber = 2;` and `isEmpty = false;`

_box/box.component.html file_:

- Output these variables in the box markup inside two paragraph elements. (Walkthrough the ternary operator slowly)!

```html
<p class="text-center">I am box number {{ boxNumber }}!</p>
<p>I am {{ isEmpty ? "empty" : "full" }}.</p>
```

_boxes/boxes.component.ts file_:

- Create a new boolean variable: `canOpenMoreBoxes = false`.

- Inside the "ngOnInit", create a timeout function that sets the "canOpenMoreBoxes" boolean variable to true after 3 seconds.

```typescript
export class BoxesComponent implements OnInit {
  canOpenMoreBoxes = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.canOpenMoreBoxes = true;
    }, 3000);
  }
}
```

_boxes/boxes.component.html file_:

- Create a button above the boxes that allows us to create a new box. (This button should be disabled if "canOpenMoreBoxes" is false).

```html
<button class="btn btn-primary" [disabled]="!canOpenMoreBoxes">
  Open New Box
</button>
```

_boxes/boxes.component.ts file_:

- Create another variable: `boxMockText = "You should open a box man."`.

- Create a function that changes the "boxMockText" whenever you open a new box. Name this function accordingly.

```typescript
export class BoxesComponent implements OnInit {
  canOpenMoreBoxes = false;
  boxMockText = "You haven't opened a box in a while";

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.canOpenMoreBoxes = true;
    }, 3000);
  }

  onOpenBox() {
    this.boxMockText = "You just opened another box!";
  }
}
```

_boxes/boxes.component.html file_:

- Create a paragraph tag below the button that outputs the "boxMockText" variable string.

- Add a `(click)` event listener on the button that calls our "onOpenBox()" function.

- Remove the "boxNumber" paragraph.

```html
<button
  class="btn btn-primary"
  [disabled]="!canOpenMoreBoxes"
  (click)="onOpenBox()"
>
  Open New Box
</button>
<p>{{ boxMockText }}</p>
<hr />
<!-- . . . -->
```

_boxes/boxes.component.ts file_:

- Create a new variable: `boxName = "Default Box";`

- Inside the "onOpenBox()" function, change the string to a template literal (``) and add in the "boxName" variable.

```typescript
boxName = "Default Box"

// . . .

onOpenBox() {
  this.boxMockText = `You just opened a box called: ${this.boxName}`
}
```

_boxes/boxes.component.html file_:

- Create a label and input that binds to the "boxName" variable.

- _Note_: Make sure you have the { FormsModule } imported in your application.

```html
<label for="boxName">Box Name:</label>
<input type="text" class="form-control mb-3" [(ngModel)]="boxName" />
<button
  class="btn btn-primary"
  [disabled]="!canOpenMoreBoxes"
  (click)="onOpenBox()"
>
  Open New Box
</button>
<!-- . . . -->
```

---

### STEP 5: Using Angular Directives

_boxes/boxes.component.html file_:

- Add an `*ngIf` directive to the `{{ boxMockText }}` paragraph and bind it to a boolean varaible "haveOpenedABox".

```html
<p *ngIf="haveOpenedABox">{{boxMockText}}</p>
```

_boxes/boxes.component.ts file_:

- Create the "haveOpenedABox" variable and set it to initialize as false.

- In the "onOpenBox()" function, set the "haveOpenedABox" to true.

```typescript
haveOpenedABox = false;
// . . .
onOpenBox() {
  // . . .
  haveOpenedABox = true;
}
```

_box/box.component.ts file_:

- Create a constructor. Inside, set our "isEmpty" variable to be true half the time and false the other half using math.

- Create a function that gets a color depending on our "isEmpty" variable.

```typescript
constructor() {
  this.isEmpty = Math.random() > 0.5;
}

getColor() {
  return this.isEmpty === true ? 'red' : 'green';
}
```

_box/box.component.html file_:

- Using the "isEmpty" variable, display different text with a different class depending on the value.

```html
<p>
  I am
  <span [ngStyle]="{ color: getColor() }">{{ isEmpty ? "empty" : "full" }}</span
  >.
</p>
```

- We can do this in a different way using the `[ngClass]` Directive. We will show this by placing a "ngClass" attribute on the card div.

```html
<div class="card" [ngClass]="{ emptyBox: isEmpty === true }"></div>
```

_box/box.component.css file_:

- Create style for the ".emptyBox" class.

```css
.emptyBox {
  height: 100px;
  font-size: 1rem;
  opacity: 0.75;
}
```

_boxes/boxes.component.ts file_:

- Create an array called "boxes" and fill it with dummy data.

- Inside the "onOpenBox()" function, push the current boxName to the "boxes" array.

```typescript
export class BoxesComponent implements OnInit {
  canOpenMoreBoxes = false;
  hasOpenedABox = false;
  boxMockText = "";
  boxName = "";
  boxes = ["Box 1", "Box 2", "Box 3"];

  // . . .

  onOpenBox() {
    this.hasOpenedABox = true;
    this.boxes.push(this.boxName);
    this.boxMockText = `You just opened a box called: "${this.boxName}"!`;
  }
}
```

_boxes/boxes.component.html file_:

- Remove all but on `<app-box>` tag.

- Place an "\*ngFor" loop on the `<app-box>` that loops over all the boxes in the "boxes" array.

```html
<app-box *ngFor="let box of boxes"></app-box>
```

---