import { BaseComponent } from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
    <section class="image">
        <div class="image__holder">
            <img class="img__thumbnail" />
            <h2 class="img__title"></h2>
        </div>
    </section>
    `);

    const imageElement = this.element.querySelector(
      ".img__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".img__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
