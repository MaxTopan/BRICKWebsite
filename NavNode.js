/// a circle (or maybe variable shape) that hovers around randomly
class NavNode {
    constructor(x, y, speed = 0.01, boundSize = 50, text, link) {
        this.anchorx = x;
        this.anchory = y;

        this.x = this.anchorx;
        this.y = this.anchory;
        this.boundSize = boundSize;

        this.speed = speed;
        this.tx = random(0, 1000);
        this.ty = random(0, 1000);

        this.text = text;
        this.link = link;
        this.maxwidth = 120;
        textFont("Courier New");

        this.rw = Math.min(textWidth(this.text), this.maxwidth);
        this.rh = this.textHeight(this.text);
    }

    update() {
        this.move();
        this.show();
    }

    move() {
        this.x = map(noise(this.tx), 0, 1, this.anchorx - this.boundSize, this.anchorx + this.boundSize);
        this.y = map(noise(this.ty), 0, 1, this.anchory - this.boundSize, this.anchory + this.boundSize);

        this.tx += this.speed;
        this.ty += this.speed;
    }

    show() {
        textAlign(CENTER, CENTER);
        rectMode(CENTER);
        textWrap(WORD);

        fill(0);
        rect(this.x, this.y, this.rw + 4, this.rh);
        fill(255);
        text(this.text, this.x, this.y, this.maxwidth);
    }

    clicked() {
        let lowX = this.x - this.rw / 2;
        let lowY = this.y - this.rh / 2;
        let highX = this.x + this.rw / 2;
        let highY = this.y + this.rh / 2;

        if (lowX <= mouseX && mouseX <= highX &&
            lowY <= mouseY && mouseY <= highY) {
            
            console.log(this.text);
            window.open(this.link, '_blank');
        }
    }

    textHeight(text) {
        var words = text.split(' ');
        var line = '';
        var lineHeight = textLeading();
        var h = lineHeight;

        for (var i = 0; i < words.length; i++) {
            var testLine = line + words[i] + ' ';
            var testWidth = textWidth(testLine);

            if (testWidth > this.maxwidth && i > 0) {
                line = words[i] + ' ';
                h += lineHeight;
            } else {
                line = testLine;
            }
        }

        return h;
    }
}