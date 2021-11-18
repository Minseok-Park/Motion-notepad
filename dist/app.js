import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";
var App = (function () {
    function App(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        var image = new ImageComponent("Image Title", "https://picsum.photos/600/300");
        image.attachTo(appRoot, "beforeend");
    }
    return App;
}());
new App(document.querySelector(".main"));
