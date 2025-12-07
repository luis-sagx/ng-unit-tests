import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';

describe('Footer Component - Pruebas con Matchers', () => {
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
  });

  it('should be an instance of Footer class', () => {
    expect(component).toBeInstanceOf(Footer);
    expect(typeof component).toBe('object');
  });

  // Pruebas del elemento footer
  it('should render footer element with correct class', () => {
    const footerElement = compiled.querySelector('footer');

    expect(footerElement).toBeTruthy();
    expect(footerElement?.classList.contains('footer')).toBe(true);
    expect(footerElement?.tagName).toEqual('FOOTER');
  });

  // Pruebas del copyright text con múltiples matchers
  it('should render copyright paragraph with all matchers', () => {
    const paragraph = compiled.querySelector('footer p');

    expect(paragraph?.textContent).toBe('© 2025 - Luis Sagnay');
    expect(paragraph?.textContent).toContain('2025');
    expect(paragraph?.textContent).toContain('Luis Sagnay');
    expect(paragraph?.textContent).toContain('©');
  });

  it('should have copyright text with regex validation', () => {
    const paragraph = compiled.querySelector('footer p');
    const text = paragraph?.textContent || '';

    expect(text).toMatch(/© \d{4}/);
    expect(text).toMatch(/^©/);
    expect(text).not.toContain('2024');
  });

  it('should contain copyright symbol and author name', () => {
    const paragraph = compiled.querySelector('footer p');
    const text = paragraph?.textContent || '';

    expect(text.charAt(0)).toBe('©');
    expect(text.startsWith('©')).toBe(true);
    expect(text.endsWith('Luis Sagnay')).toBe(true);
  });

  it('should have current year using parseInt', () => {
    const paragraph = compiled.querySelector('footer p');
    const text = paragraph?.textContent || '';

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

  // Pruebas de contenido con comparación numérica
  it('should have text with correct length using numeric matchers', () => {
    const paragraph = compiled.querySelector('footer p');
    const text = paragraph?.textContent || '';

    expect(text.length).toBeGreaterThan(10);
    expect(text.length).toBeLessThan(50);
    expect(text.length).toBeGreaterThanOrEqual(20);
  });

  // Pruebas negativas
  it('should not contain unexpected HTML elements', () => {
    const footer = compiled.querySelector('footer');
    const links = footer?.querySelectorAll('a');
    const buttons = footer?.querySelectorAll('button');

    expect(links?.length).toBe(0);
    expect(buttons?.length).toBe(0);
  });

  // Pruebas de arrays y clases
  it('should have footer with correct class using array matchers', () => {
    const footer = compiled.querySelector('footer');
    const classList = Array.from(footer?.classList || []);

    expect(classList).toContain('footer');
    expect(classList).toEqual(['footer']);
    expect(classList.length).toBe(1);
  });

  // Pruebas de parsing de texto
  it('should have text parts separated correctly', () => {
    const paragraph = compiled.querySelector('footer p');
    const text = paragraph?.textContent || '';
    const parts = text.split('-').map((p) => p.trim());

    expect(parts.length).toBe(2);
    expect(parts[0]).toContain('2025');
    expect(parts[1]).toBe('Luis Sagnay');
  });
});
