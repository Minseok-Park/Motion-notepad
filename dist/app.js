import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent, PageItemComponent, } from "./components/page/page.js";
var App = (function () {
    function App(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        var image = new ImageComponent("Image Title", "https://picsum.photos/600/300");
        this.page.addChild(image);
        var video = new VideoComponent("Video title", "https://www.youtube.com/embed/ZcGB8Yc_SlE");
        this.page.addChild(video);
        var note = new NoteComponent("Note Title", "Note Body");
        this.page.addChild(note);
        var todo = new TodoComponent("Todo Title", "Todo item");
        this.page.addChild(todo);
    }
    return App;
}());
new App(document.querySelector(".main"));
