import { newSpecPage } from '@stencil/core/testing';
import { Cv1simkoAmbulanceWlList } from '../cv1simko-ambulance-wl-list';

describe('cv1simko-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv1simkoAmbulanceWlList],
      html: `<cv1simko-ambulance-wl-list></cv1simko-ambulance-wl-list>`,
  });

  const wlList = page.rootInstance as Cv1simkoAmbulanceWlList;
  const expectedPatients = wlList?.waitingPatients?.length

  const items = page.root.shadowRoot.querySelectorAll("md-list-item");
  expect(items.length).toEqual(expectedPatients);
  });
});
