declare global {
  interface Window {
    fbq: any;
    _fbq?: any;
  }
}

export class FacebookPixel {
  private pixelId: string;

  constructor(pixelId: string) {
    this.pixelId = pixelId;
    this.initPixel();
  }

  private initPixel() {
    (function (f: Window, b: Document, e: string, v: string) {
      if (f.fbq) return;
      const n: any = (f.fbq = function (...args: any[]) {
        n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
      });

      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];

      const t: any = b.createElement(e);
      t.async = true;
      t.src = v;

      const s = b.getElementsByTagName(e)[0];
      s.parentNode?.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    window.fbq("init", this.pixelId);
    window.fbq("track", "PageView");
  }
}
