import { newSpecPage } from '@stencil/core/testing';
import { Cv1simkoAmbulanceWlEditor } from '../cv1simko-ambulance-wl-editor';

describe('cv1simko-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [Cv1simkoAmbulanceWlEditor],
      html: `<cv1simko-ambulance-wl-editor entry-id="@new"></cv1simko-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll("md-filled-button");
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll("md-outlined-button");
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll("md-filled-tonal-button");
    expect(items.length).toEqual(1);
  });
});
