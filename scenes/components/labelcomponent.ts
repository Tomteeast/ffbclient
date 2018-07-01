import * as Comp from ".";

export class Label extends Comp.UIComponent {
    private text: string;

    public constructor(config) {
        super(config);

        this.text = config.text;
    }

    public render(ctx: Comp.RenderContext): Phaser.GameObjects.GameObject {
        this.bounds.w = 0;
        let col = this.numberToRGBString(this.config.color);
        let bg = this.numberToRGBString(this.config.background);
        let bounds = this.getBounds(ctx);
        let g = ctx.scene.make.text({});
        g.setFontFamily("arial");
        g.setFontSize(bounds.height * 0.9);
        g.setColor(col);
        g.setText(this.text);
        g.setBackgroundColor(bg);

        this.bounds.w = g.displayWidth + "px";
        bounds = this.getBounds(ctx);

        console.log("Label bounds", bounds, g.displayWidth, ctx.w, ctx.h, ctx.scale);

        g.setPosition(bounds.x, bounds.y);

        return g;
    }    
}
