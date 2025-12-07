import { TestBed, ComponentFixture } from '@angular/core/testing';
import { App } from './app';

describe('App Component - Pruebas con Matchers de Jasmine', () => {
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

  // ==================== PRUEBAS BÁSICAS ====================

  it('should create the app component', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
    expect(component).not.toBeNull();
  });

  it('should be an instance of App class', () => {
    expect(component).toBeInstanceOf(App);
    expect(typeof component).toBe('object');
  });

  // ==================== PRUEBAS DE COMPONENTES ====================

  it('should render app-header and app-footer components', () => {
    const appHeader = compiled.querySelector('app-header');
    const appFooter = compiled.querySelector('app-footer');

    expect(appHeader).toBeTruthy();
    expect(appFooter).toBeTruthy();
    expect(appHeader?.tagName).toBe('APP-HEADER');
    expect(appFooter?.tagName).toBe('APP-FOOTER');
  });

  // ==================== PRUEBAS DE ESTRUCTURA ====================

  it('should have correct component order: header, main, footer', () => {
    const container = compiled.querySelector('.container');
    const children = Array.from(container?.children || []);

    expect(children.length).toBeGreaterThanOrEqual(3);
    expect(children[0].tagName).toBe('APP-HEADER');
    expect(children[1].tagName).toBe('MAIN');
    expect(children[2].tagName).toBe('APP-FOOTER');
  });

  it('should have 2 sections in main using numeric matchers', () => {
    const sections = compiled.querySelectorAll('main section');

    expect(sections.length).toBe(2);
    expect(sections.length).not.toBeGreaterThan(2);
    expect(sections.length).not.toBeLessThan(2);
  });

  // ==================== PRUEBAS DE GALERÍA ====================

  it('should display exactly 4 team cards', () => {
    const teamCards = compiled.querySelectorAll('.team-card');
    expect(teamCards.length).toBe(4);
    expect(teamCards.length).toEqual(4);
  });

  it('should render team images with correct attributes', () => {
    const images = compiled.querySelectorAll('.teams-gallery img');
    const expectedTeams = ['Arsenal', 'Chelsea', 'Liga de Quito', 'PSG'];

    images.forEach((img, index) => {
      expect(img.getAttribute('alt')).toBe(expectedTeams[index]);
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  it('should have all images with src matching pattern', () => {
    const images = compiled.querySelectorAll('.teams-gallery img');

    images.forEach((img) => {
      const src = img.getAttribute('src');
      expect(src).toMatch(/\.png$/);
      expect(src).toContain('.png');
    });
  });

  it('should render team names using multiple matchers', () => {
    const teamNames = compiled.querySelectorAll('.team-name');

    teamNames.forEach((name) => {
      expect(name.textContent).not.toBe('');
      expect(name.textContent?.trim()).not.toBe('');
      expect(name.textContent?.length).toBeGreaterThan(2);
    });
  });

  it('should have team names with proper capitalization using regex', () => {
    const teamNames = compiled.querySelectorAll('.team-name');

    teamNames.forEach((name) => {
      const text = name.textContent || '';
      expect(text).toMatch(/^[A-Z]/);
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
    });
  });

  // ==================== PRUEBAS DE RECURSOS ====================

  it('should have resources section with heading', () => {
    const h2 = compiled.querySelector('.info-section h2');

    expect(h2?.textContent).toBe('Recursos de Testing');
    expect(h2?.textContent).toContain('Recursos');
    expect(h2?.textContent).toMatch(/Recursos de Testing/);
  });

  it('should display 3 external links with URLs', () => {
    const links = compiled.querySelectorAll('.resources-list a');
    const expectedUrls = [
      'https://jasmine.github.io/',
      'https://karma-runner.github.io/',
      'https://angular.dev/',
    ];

    expect(links.length).toBe(3);
    links.forEach((link, index) => {
      expect(link.getAttribute('href')).toBe(expectedUrls[index]);
      expect(link.getAttribute('href')).toMatch(/^https:\/\//);
    });
  });

  it('should have all links with text content', () => {
    const links = compiled.querySelectorAll('.resources-list a');
    const expectedTexts = ['Jasmine', 'Karma', 'Angular'];

    links.forEach((link, index) => {
      expect(link.textContent).toBe(expectedTexts[index]);
      expect(link.textContent).toContain(expectedTexts[index]);
    });
  });

  it('should have all links opening in new tab', () => {
    const links = compiled.querySelectorAll('.resources-list a');

    links.forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('target')).not.toBe('_self');
    });
  });

  // ==================== PRUEBAS CON ARRAYS ====================

  it('should have all expected team names in array', () => {
    const teamNames = compiled.querySelectorAll('.team-name');
    const names = Array.from(teamNames).map((el) => el.textContent);
    const expectedNames = ['Arsenal', 'Chelsea', 'Liga de Quito', 'PSG'];

    expect(names).toEqual(expectedNames);
    expect(names).toContain('Arsenal');
    expect(names).toContain('PSG');
  });

  it('should have resource links using arrayContaining', () => {
    const links = compiled.querySelectorAll('.resources-list a');
    const hrefs = Array.from(links).map((el) => el.getAttribute('href'));

    expect(hrefs).toContain('https://jasmine.github.io/');
    expect(hrefs).toContain('https://angular.dev/');
  });

  // ==================== PRUEBAS NEGATIVAS ====================

  it('should not have duplicate team names', () => {
    const teamNames = compiled.querySelectorAll('.team-name');
    const names = Array.from(teamNames).map((el) => el.textContent);
    const uniqueNames = new Set(names);

    expect(names.length).toBe(uniqueNames.size);
    expect(uniqueNames.size).toBe(4);
  });

  it('should not contain script or form elements', () => {
    const scripts = compiled.querySelectorAll('script');
    const forms = compiled.querySelectorAll('form');

    expect(scripts.length).toBe(0);
    expect(forms.length).toBe(0);
  });

  it('should not have empty href attributes', () => {
    const links = compiled.querySelectorAll('.resources-list a');

    links.forEach((link) => {
      const href = link.getAttribute('href');
      expect(href).not.toBe('');
      expect(href).toBeTruthy();
    });
  });

  // ==================== PRUEBAS DE CLASES CSS ====================

  it('should have proper CSS classes on main sections', () => {
    const gallery = compiled.querySelector('.gallery-section');
    const info = compiled.querySelector('.info-section');

    expect(gallery?.classList.contains('gallery-section')).toBe(true);
    expect(info?.classList.contains('info-section')).toBe(true);
  });

  // ==================== PRUEBAS CON REGEX ====================

  it('should have URLs with valid domain patterns', () => {
    const links = compiled.querySelectorAll('.resources-list a');

    links.forEach((link) => {
      const href = link.getAttribute('href') || '';
      expect(href).toMatch(/https:\/\/[a-z.-]+\.[a-z]{2,}/);
      expect(href).toMatch(/\.(io|dev)\//);
    });
  });

  // ==================== PRUEBAS DE ELEMENTOS ESPECÍFICOS ====================

  it('should have Arsenal as first team and PSG as last', () => {
    const teamNames = compiled.querySelectorAll('.team-name');
    const firstTeam = teamNames[0];
    const lastTeam = teamNames[teamNames.length - 1];

    expect(firstTeam?.textContent).toBe('Arsenal');
    expect(lastTeam?.textContent).toBe('PSG');
  });

  it('should have Jasmine as first resource link', () => {
    const firstLink = compiled.querySelector('.resources-list a');
    expect(firstLink?.textContent).toBe('Jasmine');
    expect(firstLink?.getAttribute('href')).toContain('jasmine');
  });
});
