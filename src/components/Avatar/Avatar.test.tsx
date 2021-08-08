import React from "react";
import { cleanup, render } from "@testing-library/react";
import { mockImage } from "@/components/Image/__mocks__/mockImage";
import { Avatar } from ".";

afterEach(cleanup);

it("sets the aria label for screen readers", () => {
  const { getByLabelText } = render(<Avatar name="Foo" />);
  expect(getByLabelText("Foo's Avatar Image")).toBeInstanceOf(HTMLDivElement);
});

it("renders with an icon by default", () => {
  const { getByTestId } = render(<Avatar name="Foo" />);
  expect(getByTestId("icon-User")).toBeInstanceOf(SVGElement);
});

it("renders an image when image is passed in", () => {
  const { container } = render(<Avatar name="Foo" {...mockImage} />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="avatar"
      >
        <div
          class="gatsby-image-wrapper gatsby-image-wrapper-constrained"
          data-gatsby-image-wrapper=""
          style="position: relative; overflow: hidden; display: inline-block;"
        >
          <div
            style="max-width: 337px; display: block;"
          >
            <img
              alt=""
              aria-hidden="true"
              role="presentation"
              src="data:image/svg+xml;charset=utf-8,%3Csvg height='338' width='337' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
              style="max-width: 100%; display: block; position: static;"
            />
          </div>
          <img
            alt=""
            aria-hidden="true"
            data-placeholder-image=""
            decoding="async"
            src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACN1BMVEUAAAAuLjUuLjQwMDAvLTQvLTQvLTQvLTQvLTQvLTQvLTQvLTQvLTQvLTQvLTQvLDQvLTQvLTQvLTQvLTRFQ0ovLTQvLTQvLjQvLTQvLTQ8OkE3NTwvLTRIRkxEQkgvLTQvLTRAPkU/PUMvLTRCQEYwLjUvLTQvLTQvLTQwLjVGREovLTQvLTQzMTgvLTQvLTQvLTQvLTQvLTMvLTQ6OD8vLTRFQ0k1MzovLTQvLTQvLTRHRUtJR00vLTQvLTQvLTQvLTQvLTQvLTQvLDMvLTQvLTQvLTQvLTQvLTQvLTQvLTMvLTQvLTQvLTQvLDUvLDQvLDQvLTQvLTMvLTREQkhBP0YvLTQvLTQvLTQvLTQ4Nj1EQkkvLTQzMTgvLTQvLTQwLjUwLjQvLTQvLTRLSU8vLTQvLTQ+PUMvLTQvLTROTFI2NTswLjUvLTQvLTQvLTRPTlQvLTQvLTQvLTQvLTQvLjQvLTQvLTQvLTRBP0ZjYmcvLTQvLTQvLTQvLTQvLTQvLTQvLTQvLTMvLTQvLTQvLTMvLDQ+PUMvLTRbWV5APkRKSE5WVVpaWV47OUBgXmRUUlg2NDtMSlBvbXJfXWNwbnNWVFpVU1lcWmBRT1VhYGVQTlRvbnNZWF1NTFJYVlxYV1xXVVtTUlhJR05FQ0lBP0VzcndVVFlLSU9jYmdeXWJeXGJOTFJiYGVgXmNSUFZMS1FaWF5jYWY1MzqJh4uGhYl5eH2CgYVAPkVOTVN5eHxbWV9XVluB/3tAAAAAh3RSTlMAAAAACFdof5lQgX18m5wDcICFsvv7cQN+jvj4Uf7mj2Hn/gn4lQoeLpb4glizlfIS5A2Us2f76AzgmOf7kXK06wtkBtpOOa1r3QxjmmUBDwHcC3v66w4CKwPr+lSuoMGfr1UG9qIQ9kqK/e+eb57v/otL9GwBaoSp9vZ2RoN0nUc/BE0EAwLufufhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QcBEzMuthzuMgAAAXtJREFUGBklwUtIVGEYBuD3/f7/XGaOOIIOGJogLnTjZiIIjMIbSW4sUFyIm/ACrgZBV7W3UqJFi6CF6EJBkMEMkXQxYisLHKnFoJKiqHiBQdQjOOd3Rp+HyNPMgcm5QQ4B0GUejEFgrgOAQIR5gyQ/BMYv4BEIRoWM895IYIKTgCi/cPUQ35MwElejV763p6qOrciQ+mTR3sqUrj16lrooKVRlmYq4+pI+QfGDw4fWeqxuezMqIRNS3/zskxrvEMD5pLhIS0r6lZ2G7Vs19UBaVI94mtRnFhpZQrKUKFRkncRgoh48LxxyHduGZAQ/Zd3Y/g7+yj3sWGKK+LiC7TMkkcesbkv4c1L9PWQ63DXnTjb8WtnLXdoJzzsvXzn8CqDXbuWPxDWJ/ulOtnCBnOhm08E/Lr4YI9Cy0h2ORchLj6d/Lme7PkKA2oFxvbGqdcRKbujkm9+AAn6tDn9+qhI3u7NlMtqn97egkJN8q+cDL/t/quH5u+bKJdwCMKl5a4qUi5YAAAAASUVORK5CYII="
            style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;"
          />
          <picture>
            <source
              data-srcset="//images.ctfassets.net/rz1q59puyoaw/7GDSSUgdGoG1l2HEfVSrxz/0b8303fcaa1f283b1acd8f38be624dfb/rai-badge-full.png?w=84&h=84&q=50&fm=webp 84w,//images.ctfassets.net/rz1q59puyoaw/7GDSSUgdGoG1l2HEfVSrxz/0b8303fcaa1f283b1acd8f38be624dfb/rai-badge-full.png?w=169&h=170&q=50&fm=webp 169w,//images.ctfassets.net/rz1q59puyoaw/7GDSSUgdGoG1l2HEfVSrxz/0b8303fcaa1f283b1acd8f38be624dfb/rai-badge-full.png?w=337&h=338&q=50&fm=webp 337w"
              sizes="(min-width: 337px) 337px, 100vw"
              type="image/webp"
            />
            <img
              alt="Foo's Avatar Image"
              data-gatsby-image-ssr=""
              data-main-image=""
              data-src="//images.ctfassets.net/rz1q59puyoaw/7GDSSUgdGoG1l2HEfVSrxz/0b8303fcaa1f283b1acd8f38be624dfb/rai-badge-full.png?w=337&h=338&q=50&fm=png"
              data-srcset="//images.ctfassets.net/rz1q59puyoaw/7GDSSUgdGoG1l2HEfVSrxz/0b8303fcaa1f283b1acd8f38be624dfb/rai-badge-full.png?w=84&h=84&q=50&fm=png 84w,//images.ctfassets.net/rz1q59puyoaw/7GDSSUgdGoG1l2HEfVSrxz/0b8303fcaa1f283b1acd8f38be624dfb/rai-badge-full.png?w=169&h=170&q=50&fm=png 169w,//images.ctfassets.net/rz1q59puyoaw/7GDSSUgdGoG1l2HEfVSrxz/0b8303fcaa1f283b1acd8f38be624dfb/rai-badge-full.png?w=337&h=338&q=50&fm=png 337w"
              decoding="async"
              loading="lazy"
              sizes="(min-width: 337px) 337px, 100vw"
              style="height: 100%; left: 0px; position: absolute; top: 0px; transform: translateZ(0); transition: opacity 250ms linear; width: 100%; will-change: opacity; opacity: 0;"
              title="Foo's Avatar Image"
            />
          </picture>
          <noscript />
          <script
            type="module"
          >
            const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1)}}
          </script>
        </div>
      </div>
    </div>
  `);
});
