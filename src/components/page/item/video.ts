import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(
      `<section class="video">
      <div class="video__player">
        <iframe class="video__iframe"></iframe>
        <h3 class="video__title"></h3>
      </div>
    </section>`
    );

    const iframe = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;

    iframe.src = `https://www.youtube.com/embed/cdVREm6xVVk`;
    console.log(url);
    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;

    titleElement.textContent = title;
  }
}