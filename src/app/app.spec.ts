import { TestBed, ComponentFixture } from '@angular/core/testing';
import { App } from './app';

describe('App - Pruebas Unitarias', () => {
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

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should render header with title and subtitle', () => {
    const header = compiled.querySelector('.header');
    const h1 = header?.querySelector('h1');
    const subtitle = header?.querySelector('.subtitle');

    expect(header).toBeTruthy();
    expect(h1?.textContent).toContain('Pruebas Unitarias');
    expect(subtitle?.textContent).toContain('Colección');
  });

  it('should display exactly 4 team cards', () => {
    const teamCards = compiled.querySelectorAll('.team-card');
    expect(teamCards.length).toBe(4);
  });

  it('should render all team images with correct alt attributes', () => {
    const images = compiled.querySelectorAll('.teams-gallery img');
    const expectedTeams = ['Arsenal', 'Chelsea', 'Liga de Quito', 'PSG'];

    expect(images.length).toBe(4);
    images.forEach((img, index) => {
      expect(img.getAttribute('alt')).toBe(expectedTeams[index]);
    });
  });

  it('should render all team names below their images', () => {
    const teamNames = compiled.querySelectorAll('.team-name');
    const expectedNames = ['Arsenal', 'Chelsea', 'Liga de Quito', 'PSG'];

    expect(teamNames.length).toBe(4);
    teamNames.forEach((name, index) => {
      expect(name.textContent).toBe(expectedNames[index]);
    });
  });

  it('should have resources section with heading', () => {
    const infoSection = compiled.querySelector('.info-section');
    const h2 = infoSection?.querySelector('h2');

    expect(infoSection).toBeTruthy();
    expect(h2?.textContent).toContain('Recursos de Testing');
  });

  it('should display 3 external links with correct URLs', () => {
    const links = compiled.querySelectorAll('.resources-list a');

    expect(links.length).toBe(3);
    expect(links[0].getAttribute('href')).toBe('https://jasmine.github.io/');
    expect(links[1].getAttribute('href')).toBe('https://karma-runner.github.io/');
    expect(links[2].getAttribute('href')).toBe('https://angular.dev/');
  });

  it('should have all links opening in new tab', () => {
    const links = compiled.querySelectorAll('.resources-list a');

    links.forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank');
    });
  });

  it('should render footer with copyright text', () => {
    const footer = compiled.querySelector('.footer');
    const footerText = footer?.querySelector('p');

    expect(footer).toBeTruthy();
    expect(footerText?.textContent).toContain('2025');
    expect(footerText?.textContent).toContain('Proyecto de Pruebas Unitarias');
  });

  it('should have proper HTML structure with main sections', () => {
    const container = compiled.querySelector('.container');
    const header = compiled.querySelector('.header');
    const main = compiled.querySelector('main');
    const footer = compiled.querySelector('.footer');

    expect(container).toBeTruthy();
    expect(header).toBeTruthy();
    expect(main).toBeTruthy();
    expect(footer).toBeTruthy();
  });
});
