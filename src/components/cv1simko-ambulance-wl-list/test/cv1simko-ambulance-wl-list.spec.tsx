import { newSpecPage } from '@stencil/core/testing';
import { Cv1simkoAmbulanceWlList } from '../cv1simko-ambulance-wl-list';

describe('cv1simko-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv1simkoAmbulanceWlList],
      html: `<cv1simko-ambulance-wl-list></cv1simko-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <cv1simko-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cv1simko-ambulance-wl-list>
    `);
  });
});
