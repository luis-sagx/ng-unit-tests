import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';

describe('Footer Component - Pruebas Exhaustivas', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  // Pruebas básicas de existencia
  it('should create the footer component', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
    expect(component).not.toBeNull();
    expect(component).not.toBeUndefined();
    expect(component).not.toBeFalsy();
  });

  it('should be an instance of Footer class', () => {
    expect(component).toBeInstanceOf(Footer);
    expect(component.constructor.name).toBe('Footer');
  });

  // Pruebas del elemento footer
  it('should render footer element with correct class', () => {
    const footerElement = compiled.querySelector('footer');

    expect(footerElement).toBeTruthy();
    expect(footerElement).not.toBeNull();
    expect(footerElement?.classList.contains('footer')).toBe(true);
    expect(footerElement?.tagName).toBe('FOOTER');
    expect(footerElement?.tagName).toEqual('FOOTER');
  });

  it('should have exactly one footer element', () => {
    const footers = compiled.querySelectorAll('footer');
    expect(footers.length).toBe(1);
    expect(footers.length).toEqual(1);
    expect(footers.length).not.toBeGreaterThan(1);
    expect(footers.length).toBeLessThanOrEqual(1);
  });

  // Pruebas del copyright text
  it('should render copyright paragraph with correct text', () => {
    const paragraph = compiled.querySelector('footer p');

    expect(paragraph).toBeTruthy();
    expect(paragraph?.textContent).toBe('© 2025 - Luis Sagnay');
    expect(paragraph?.textContent).toContain('2025');
    expect(paragraph?.textContent).toContain('Luis Sagnay');
    expect(paragraph?.textContent).toContain('©');
  });

  it('should have copyright text with correct format', () => {
    const paragraph = compiled.querySelector('footer p');
    const text = paragraph?.textContent || '';

    expect(text).toMatch(/© \d{4}/);
    expect(text).toMatch(/©\s+2025\s+-\s+Luis Sagnay/);
    expect(text).not.toContain('2024');
    expect(text).not.toContain('2026');
  });

  it('should contain copyright symbol', () => {
    const paragraph = compiled.querySelector('footer p');
    const text = paragraph?.textContent || '';

    expect(text.charAt(0)).toBe('©');
    expect(text.startsWith('©')).toBe(true);
    expect(text).toMatch(/^©/);
  });

  it('should contain author name', () => {
    const paragraph = compiled.querySelector('footer p');
    const text = paragraph?.textContent || '';

    expect(text).toContain('Luis Sagnay');
    expect(text).toMatch(/Luis Sagnay$/);
    expect(text.endsWith('Luis Sagnay')).toBe(true);
  });

  it('should have current year in copyright', () => {
    const paragraph = compiled.querySelector('footer p');
    const text = paragraph?.textContent || '';

    expect(text).toContain('2025');
    expect(text).toMatch(/2025/);
    expect(parseInt(text.match(/\d{4}/)?.[0] || '0')).toBe(2025);
  });

  // Pruebas de estructura DOM
  it('should have correct DOM structure', () => {
    const footer = compiled.querySelector('footer');
    const children = footer?.children;

    expect(children).toBeDefined();
    expect(children?.length).toBe(1);
    expect(children?.[0].tagName).toBe('P');
  });

  it('should have only one paragraph inside footer', () => {
    const paragraphs = compiled.querySelectorAll('footer p');
    expect(paragraphs.length).toBe(1);
    expect(paragraphs.length).toEqual(1);
    expect(paragraphs.length).not.toBeGreaterThan(1);
  });

  it('should have paragraph as direct child of footer', () => {
    const footer = compiled.querySelector('footer');
    const firstChild = footer?.firstElementChild;

    expect(firstChild?.tagName).toBe('P');
    expect(footer?.children.length).toBe(1);
  });

  // Pruebas de contenido
  it('should have non-empty content', () => {
    const paragraph = compiled.querySelector('footer p');
    const text = paragraph?.textContent || '';

    expect(text).not.toBe('');
    expect(text.trim()).not.toBe('');
    expect(text.length).toBeGreaterThan(10);
    expect(text.length).toBeGreaterThanOrEqual(20);
  });

  it('should have text with correct character count', () => {
    const paragraph = compiled.querySelector('footer p');
    const text = paragraph?.textContent || '';

    expect(text.length).toBe(22);
    expect(text.length).toBeLessThan(50);
    expect(text.length).toBeLessThanOrEqual(22);
  });

  // Pruebas de elementos HTML
  it('should not contain links or buttons', () => {
    const footer = compiled.querySelector('footer');
    const links = footer?.querySelectorAll('a');
    const buttons = footer?.querySelectorAll('button');

    expect(links?.length).toBe(0);
    expect(buttons?.length).toBe(0);
    expect(links?.length).toEqual(0);
  });

  it('should not contain images or icons', () => {
    const footer = compiled.querySelector('footer');
    const images = footer?.querySelectorAll('img');
    const icons = footer?.querySelectorAll('i');

    expect(images?.length).toBe(0);
    expect(icons?.length).toBe(0);
  });

  it('should not contain navigation elements', () => {
    const footer = compiled.querySelector('footer');
    const nav = footer?.querySelector('nav');
    const ul = footer?.querySelector('ul');

    expect(nav).toBeNull();
    expect(ul).toBeNull();
    expect(nav).toBeFalsy();
  });

  // Pruebas de atributos y clases
  it('should have footer with correct class attribute', () => {
    const footer = compiled.querySelector('footer');
    const classList = Array.from(footer?.classList || []);

    expect(classList).toContain('footer');
    expect(classList).toEqual(['footer']);
    expect(classList.length).toBe(1);
  });

  it('should have paragraph without additional classes', () => {
    const paragraph = compiled.querySelector('footer p');
    const classList = paragraph?.classList;

    expect(classList?.length).toBe(0);
    expect(classList?.length).toEqual(0);
  });

  // Pruebas del componente
  it('should have component instance with correct type', () => {
    expect(typeof component).toBe('object');
    expect(component).toEqual(jasmine.any(Object));
    expect(component).toEqual(jasmine.any(Footer));
  });

  // Pruebas de contenido HTML completo
  it('should render complete footer HTML structure', () => {
    const footerHTML = compiled.querySelector('footer')?.innerHTML;

    expect(footerHTML).toContain('<p>');
    expect(footerHTML).toContain('</p>');
    expect(footerHTML).toMatch(/<p>.*<\/p>/);
    expect(footerHTML).not.toContain('<div>');
  });

  // Pruebas negativas
  it('should not have script or style tags', () => {
    const footer = compiled.querySelector('footer');
    const scripts = footer?.querySelectorAll('script');
    const styles = footer?.querySelectorAll('style');

    expect(scripts?.length).toBe(0);
    expect(styles?.length).toBe(0);
    expect(scripts?.length).toEqual(0);
  });

  it('should not contain form elements', () => {
    const footer = compiled.querySelector('footer');
    const inputs = footer?.querySelectorAll('input');
    const forms = footer?.querySelectorAll('form');

    expect(inputs?.length).toBe(0);
    expect(forms?.length).toBe(0);
  });

  // Pruebas de texto específico
  it('should contain dash separator', () => {
    const paragraph = compiled.querySelector('footer p');
    const text = paragraph?.textContent || '';

    expect(text).toContain('-');
    expect(text).toMatch(/-/);
    expect(text.split('-').length).toBe(2);
  });

  it('should have text parts separated correctly', () => {
    const paragraph = compiled.querySelector('footer p');
    const text = paragraph?.textContent || '';
    const parts = text.split('-').map((p) => p.trim());

    expect(parts.length).toBe(2);
    expect(parts[0]).toContain('2025');
    expect(parts[1]).toBe('Luis Sagnay');
  });
});
