import { TestBed, ComponentFixture } from '@angular/core/testing';
import { App } from './app';

describe('App Component - Pruebas Unitarias Exhaustivas', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  // PRUEBAS BÁSICAS DEL COMPONENTE

  it('should create the app component', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
    expect(component).not.toBeNull();
    expect(component).not.toBeUndefined();
  });

  it('should be an instance of App class', () => {
    expect(component).toBeInstanceOf(App);
    expect(component.constructor.name).toContain('App');
    expect(typeof component).toBe('object');
  });

  // PRUEBAS DEL HEADER

  it('should render app-header component', () => {
    const appHeader = compiled.querySelector('app-header');
    expect(appHeader).toBeTruthy();
    expect(appHeader).not.toBeNull();
    expect(appHeader?.tagName).toBe('APP-HEADER');
  });

  it('should have exactly one app-header', () => {
    const headers = compiled.querySelectorAll('app-header');
    expect(headers.length).toBe(1);
    expect(headers.length).toEqual(1);
    expect(headers.length).not.toBeGreaterThan(1);
  });

  // PRUEBAS DEL FOOTER

  it('should render app-footer component', () => {
    const appFooter = compiled.querySelector('app-footer');
    expect(appFooter).toBeTruthy();
    expect(appFooter).not.toBeNull();
    expect(appFooter?.tagName).toBe('APP-FOOTER');
  });

  it('should have exactly one app-footer', () => {
    const footers = compiled.querySelectorAll('app-footer');
    expect(footers.length).toBe(1);
    expect(footers.length).toEqual(1);
    expect(footers.length).not.toBeGreaterThan(1);
  });

  // PRUEBAS DE ESTRUCTURA PRINCIPAL

  it('should have container as root element', () => {
    const container = compiled.querySelector('.container');
    expect(container).toBeTruthy();
    expect(container).not.toBeNull();
    expect(container?.classList.contains('container')).toBe(true);
  });

  it('should have main element', () => {
    const main = compiled.querySelector('main');
    expect(main).toBeTruthy();
    expect(main?.tagName).toBe('MAIN');
    expect(main).not.toBeNull();
  });

  it('should have correct component order: header, main, footer', () => {
    const container = compiled.querySelector('.container');
    const children = Array.from(container?.children || []);

    expect(children.length).toBeGreaterThanOrEqual(3);
    expect(children[0].tagName).toBe('APP-HEADER');
    expect(children[1].tagName).toBe('MAIN');
    expect(children[2].tagName).toBe('APP-FOOTER');
  });

  // PRUEBAS DE LA GALERÍA DE EQUIPOS

  it('should render gallery section', () => {
    const gallerySection = compiled.querySelector('.gallery-section');
    expect(gallerySection).toBeTruthy();
    expect(gallerySection?.classList.contains('gallery-section')).toBe(true);
  });

  it('should display exactly 4 team cards', () => {
    const teamCards = compiled.querySelectorAll('.team-card');
    expect(teamCards.length).toBe(4);
    expect(teamCards.length).toEqual(4);
    expect(teamCards.length).not.toBeLessThan(4);
    expect(teamCards.length).not.toBeGreaterThan(4);
  });

  it('should have teams-gallery container', () => {
    const teamsGallery = compiled.querySelector('.teams-gallery');
    expect(teamsGallery).toBeTruthy();
    expect(teamsGallery).not.toBeNull();
  });

  it('should render all team images with correct alt attributes', () => {
    const images = compiled.querySelectorAll('.teams-gallery img');
    const expectedTeams = ['Arsenal', 'Chelsea', 'Liga de Quito', 'PSG'];

    expect(images.length).toBe(4);
    expect(images.length).toEqual(expectedTeams.length);

    images.forEach((img, index) => {
      expect(img.getAttribute('alt')).toBe(expectedTeams[index]);
      expect(img.getAttribute('alt')).toContain(expectedTeams[index]);
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  it('should have all images with src attributes', () => {
    const images = compiled.querySelectorAll('.teams-gallery img');
    const expectedSrcs = ['arsenal.png', 'chelsea.png', 'liga.png', 'psg.png'];

    images.forEach((img, index) => {
      const src = img.getAttribute('src');
      expect(src).toBe(expectedSrcs[index]);
      expect(src).toContain('.png');
      expect(src).not.toBe('');
      expect(src).toMatch(/\.png$/);
    });
  });

  it('should render all team names below their images', () => {
    const teamNames = compiled.querySelectorAll('.team-name');
    const expectedNames = ['Arsenal', 'Chelsea', 'Liga de Quito', 'PSG'];

    expect(teamNames.length).toBe(4);
    expect(teamNames.length).toEqual(4);

    teamNames.forEach((name, index) => {
      expect(name.textContent).toBe(expectedNames[index]);
      expect(name.textContent).toContain(expectedNames[index]);
      expect(name.textContent?.trim()).not.toBe('');
    });
  });

  it('should have team names as span elements', () => {
    const teamNames = compiled.querySelectorAll('.team-name');

    teamNames.forEach((name) => {
      expect(name.tagName).toBe('SPAN');
      expect(name.classList.contains('team-name')).toBe(true);
    });
  });

  it('should have each team card with image and name', () => {
    const teamCards = compiled.querySelectorAll('.team-card');

    teamCards.forEach((card) => {
      const img = card.querySelector('img');
      const name = card.querySelector('.team-name');

      expect(img).toBeTruthy();
      expect(name).toBeTruthy();
      expect(img).not.toBeNull();
      expect(name).not.toBeNull();
    });
  });

  // ==================== PRUEBAS DE LA SECCIÓN DE RECURSOS ====================

  it('should have resources section with heading', () => {
    const infoSection = compiled.querySelector('.info-section');
    const h2 = infoSection?.querySelector('h2');

    expect(infoSection).toBeTruthy();
    expect(infoSection).not.toBeNull();
    expect(h2?.textContent).toContain('Recursos de Testing');
    expect(h2?.textContent).toBe('Recursos de Testing');
  });

  it('should have h2 with correct text content', () => {
    const h2 = compiled.querySelector('.info-section h2');
    const text = h2?.textContent || '';

    expect(text).toMatch(/Recursos de Testing/);
    expect(text.length).toBeGreaterThan(10);
    expect(text).toContain('Recursos');
    expect(text).toContain('Testing');
  });

  it('should have resources list as ul element', () => {
    const resourcesList = compiled.querySelector('.resources-list');

    expect(resourcesList).toBeTruthy();
    expect(resourcesList?.tagName).toBe('UL');
    expect(resourcesList?.classList.contains('resources-list')).toBe(true);
  });

  it('should display 3 external links with correct URLs', () => {
    const links = compiled.querySelectorAll('.resources-list a');
    const expectedUrls = [
      'https://jasmine.github.io/',
      'https://karma-runner.github.io/',
      'https://angular.dev/',
    ];

    expect(links.length).toBe(3);
    expect(links.length).toEqual(3);
    expect(links.length).not.toBeLessThan(3);

    links.forEach((link, index) => {
      expect(link.getAttribute('href')).toBe(expectedUrls[index]);
      expect(link.getAttribute('href')).toContain('http');
      expect(link.getAttribute('href')).toMatch(/^https:\/\//);
    });
  });

  it('should have all links with correct text content', () => {
    const links = compiled.querySelectorAll('.resources-list a');
    const expectedTexts = ['Jasmine', 'Karma', 'Angular'];

    links.forEach((link, index) => {
      expect(link.textContent).toBe(expectedTexts[index]);
      expect(link.textContent).toContain(expectedTexts[index]);
      expect(link.textContent?.trim()).not.toBe('');
    });
  });

  it('should have all links opening in new tab', () => {
    const links = compiled.querySelectorAll('.resources-list a');

    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('target')).toEqual('_blank');
      expect(link.getAttribute('target')).not.toBe('_self');
    });
  });

  it('should have resources in list items', () => {
    const listItems = compiled.querySelectorAll('.resources-list li');

    expect(listItems.length).toBe(3);
    expect(listItems.length).toEqual(3);

    listItems.forEach((item) => {
      const link = item.querySelector('a');
      expect(link).toBeTruthy();
      expect(link).not.toBeNull();
    });
  });

  it('should have each link inside a list item', () => {
    const links = compiled.querySelectorAll('.resources-list li a');

    expect(links.length).toBe(3);
    links.forEach((link) => {
      expect(link.parentElement?.tagName).toBe('LI');
    });
  });

  // ==================== PRUEBAS DE ATRIBUTOS Y PROPIEDADES ====================

  it('should have correct link protocols', () => {
    const links = compiled.querySelectorAll('.resources-list a');

    links.forEach((link) => {
      const href = link.getAttribute('href') || '';
      expect(href).toMatch(/^https?:\/\//);
      expect(href.startsWith('https://')).toBe(true);
    });
  });

  it('should have valid image alt texts', () => {
    const images = compiled.querySelectorAll('.teams-gallery img');

    images.forEach((img) => {
      const alt = img.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt).not.toBe('');
      expect(alt?.length).toBeGreaterThan(2);
    });
  });

  // ==================== PRUEBAS DE CONTEO Y ESTRUCTURA ====================

  it('should have correct number of sections in main', () => {
    const sections = compiled.querySelectorAll('main section');

    expect(sections.length).toBe(2);
    expect(sections.length).toEqual(2);
    expect(sections[0].classList.contains('gallery-section')).toBe(true);
    expect(sections[1].classList.contains('info-section')).toBe(true);
  });

  it('should have main with exactly 2 sections', () => {
    const main = compiled.querySelector('main');
    const sections = main?.querySelectorAll('section');

    expect(sections?.length).toBe(2);
    expect(sections?.length).not.toBeGreaterThan(2);
    expect(sections?.length).not.toBeLessThan(2);
  });

  it('should have gallery section before info section', () => {
    const sections = compiled.querySelectorAll('main section');

    expect(sections[0].classList.contains('gallery-section')).toBe(true);
    expect(sections[1].classList.contains('info-section')).toBe(true);
  });

  // ==================== PRUEBAS DE CONTENIDO Y TEXTO ====================

  it('should not have empty team names', () => {
    const teamNames = compiled.querySelectorAll('.team-name');

    teamNames.forEach((name) => {
      expect(name.textContent).not.toBe('');
      expect(name.textContent?.trim()).not.toBe('');
      expect(name.textContent?.length).toBeGreaterThan(2);
    });
  });

  it('should have team names with proper capitalization', () => {
    const teamNames = compiled.querySelectorAll('.team-name');

    teamNames.forEach((name) => {
      const text = name.textContent || '';
      expect(text.charAt(0)).toMatch(/[A-Z]/);
      expect(text).toMatch(/^[A-Z]/);
    });
  });

  // PRUEBAS NEGATIVAS

  it('should not contain script tags', () => {
    const scripts = compiled.querySelectorAll('script');
    expect(scripts.length).toBe(0);
    expect(scripts.length).toEqual(0);
  });

  it('should not contain form elements in main content', () => {
    const main = compiled.querySelector('main');
    const forms = main?.querySelectorAll('form');
    const inputs = main?.querySelectorAll('input');

    expect(forms?.length).toBe(0);
    expect(inputs?.length).toBe(0);
  });

  it('should not have duplicate team names', () => {
    const teamNames = compiled.querySelectorAll('.team-name');
    const names = Array.from(teamNames).map((el) => el.textContent);
    const uniqueNames = new Set(names);

    expect(names.length).toBe(uniqueNames.size);
    expect(uniqueNames.size).toBe(4);
  });

  it('should not have empty href attributes', () => {
    const links = compiled.querySelectorAll('.resources-list a');

    links.forEach((link) => {
      const href = link.getAttribute('href');
      expect(href).not.toBe('');
      expect(href).not.toBe('#');
      expect(href).toBeTruthy();
    });
  });

  // PRUEBAS DE ARRAYS Y COLECCIONES

  it('should have all expected team names in array', () => {
    const teamNames = compiled.querySelectorAll('.team-name');
    const names = Array.from(teamNames).map((el) => el.textContent);
    const expectedNames = ['Arsenal', 'Chelsea', 'Liga de Quito', 'PSG'];

    expect(names).toEqual(expectedNames);
    expect(names).toContain('Arsenal');
    expect(names).toContain('Chelsea');
    expect(names).toContain('Liga de Quito');
    expect(names).toContain('PSG');
  });

  it('should have resource links matching expected URLs', () => {
    const links = compiled.querySelectorAll('.resources-list a');
    const hrefs = Array.from(links).map((el) => el.getAttribute('href'));

    expect(hrefs).toContain('https://jasmine.github.io/');
    expect(hrefs).toContain('https://karma-runner.github.io/');
    expect(hrefs).toContain('https://angular.dev/');
  });

  // PRUEBAS DE TIPOS Y CLASES

  it('should have proper CSS classes on elements', () => {
    const container = compiled.querySelector('.container');
    const gallery = compiled.querySelector('.gallery-section');
    const info = compiled.querySelector('.info-section');

    expect(container?.classList.contains('container')).toBe(true);
    expect(gallery?.classList.contains('gallery-section')).toBe(true);
    expect(info?.classList.contains('info-section')).toBe(true);
  });

  it('should have team-card elements with correct class', () => {
    const teamCards = compiled.querySelectorAll('.team-card');

    teamCards.forEach((card) => {
      expect(card.classList.contains('team-card')).toBe(true);
      expect(card.classList.contains('team-card')).toEqual(true);
    });
  });

  // PRUEBAS DE ELEMENTOS ESPECÍFICOS

  it('should have Arsenal as first team', () => {
    const firstTeamName = compiled.querySelector('.team-name');
    expect(firstTeamName?.textContent).toBe('Arsenal');
  });

  it('should have PSG as last team', () => {
    const teamNames = compiled.querySelectorAll('.team-name');
    const lastTeam = teamNames[teamNames.length - 1];
    expect(lastTeam?.textContent).toBe('PSG');
  });

  it('should have Jasmine as first resource link', () => {
    const firstLink = compiled.querySelector('.resources-list a');
    expect(firstLink?.textContent).toBe('Jasmine');
    expect(firstLink?.getAttribute('href')).toBe('https://jasmine.github.io/');
  });

  // PRUEBAS DE INTEGRACIÓN

  it('should have proper HTML structure with main sections', () => {
    const container = compiled.querySelector('.container');
    const appHeader = compiled.querySelector('app-header');
    const main = compiled.querySelector('main');
    const appFooter = compiled.querySelector('app-footer');

    expect(container).toBeTruthy();
    expect(appHeader).toBeTruthy();
    expect(main).toBeTruthy();
    expect(appFooter).toBeTruthy();
    expect(container).not.toBeNull();
    expect(appHeader).not.toBeNull();
    expect(main).not.toBeNull();
    expect(appFooter).not.toBeNull();
  });

  it('should have complete and valid DOM tree', () => {
    const container = compiled.querySelector('.container');
    const childCount = container?.children.length;

    expect(childCount).toBeGreaterThanOrEqual(3);
    expect(childCount).toBeDefined();
    expect(childCount).not.toBeUndefined();
  });

  // PRUEBAS DE EXPRESIONES REGULARES

  it('should have team names matching pattern', () => {
    const teamNames = compiled.querySelectorAll('.team-name');

    teamNames.forEach((name) => {
      const text = name.textContent || '';
      expect(text).toMatch(/^[A-Z]/);
      expect(text).toMatch(/[a-zA-Z\s]+/);
    });
  });

  it('should have URLs with valid domain patterns', () => {
    const links = compiled.querySelectorAll('.resources-list a');

    links.forEach((link) => {
      const href = link.getAttribute('href') || '';
      expect(href).toMatch(/https:\/\/[a-z.-]+\.[a-z]{2,}/);
      expect(href).toMatch(/\.(io|dev)\//);
    });
  });
});
