import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';

describe('Header Component - Pruebas Exhaustivas', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  // Pruebas básicas de existencia
  it('should create the header component', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
    expect(component).not.toBeNull();
    expect(component).not.toBeUndefined();
  });

  it('should be an instance of Header class', () => {
    expect(component).toBeInstanceOf(Header);
  });

  // Pruebas del elemento header
  it('should render header element with correct class', () => {
    const headerElement = compiled.querySelector('header');

    expect(headerElement).toBeTruthy();
    expect(headerElement).not.toBeNull();
    expect(headerElement?.classList.contains('header')).toBe(true);
    expect(headerElement?.tagName).toBe('HEADER');
  });

  it('should have exactly one header element', () => {
    const headers = compiled.querySelectorAll('header');
    expect(headers.length).toBe(1);
    expect(headers.length).toEqual(1);
    expect(headers.length).not.toBeGreaterThan(1);
    expect(headers.length).not.toBeLessThan(1);
  });

  // Pruebas del título h1
  it('should render h1 element with title text', () => {
    const h1 = compiled.querySelector('h1');

    expect(h1).toBeTruthy();
    expect(h1?.textContent).toBe('Pruebas Unitarias');
    expect(h1?.textContent).toContain('Pruebas');
    expect(h1?.textContent).toContain('Unitarias');
    expect(h1?.textContent).toMatch(/Pruebas Unitarias/);
    expect(h1?.textContent).not.toContain('Testing');
  });

  it('should have h1 with correct length and case', () => {
    const h1 = compiled.querySelector('h1');
    const text = h1?.textContent || '';

    expect(text.length).toBeGreaterThan(10);
    expect(text.length).toBeLessThan(30);
    expect(text.length).toBeGreaterThanOrEqual(17);
    expect(text.length).toBeLessThanOrEqual(17);
    expect(text).toMatch(/^[A-Z]/); // Comienza con mayúscula
  });

  it('should have only one h1 element', () => {
    const h1Elements = compiled.querySelectorAll('h1');
    expect(h1Elements.length).toBe(1);
    expect(h1Elements.length).not.toBeGreaterThan(1);
  });

  // Pruebas del subtítulo
  it('should render subtitle paragraph with correct class and text', () => {
    const subtitle = compiled.querySelector('.subtitle');

    expect(subtitle).toBeTruthy();
    expect(subtitle?.textContent).toBe('Colección de los mejores equipos');
    expect(subtitle?.textContent).toContain('Colección');
    expect(subtitle?.textContent).toContain('mejores equipos');
    expect(subtitle?.textContent).toMatch(/Colección de los mejores equipos/);
  });

  it('should have subtitle as paragraph element', () => {
    const subtitle = compiled.querySelector('.subtitle');

    expect(subtitle?.tagName).toBe('P');
    expect(subtitle?.classList.contains('subtitle')).toBe(true);
    expect(subtitle?.classList.contains('title')).toBe(false);
  });

  it('should have subtitle text with correct properties', () => {
    const subtitle = compiled.querySelector('.subtitle');
    const text = subtitle?.textContent || '';

    expect(text.length).toBeGreaterThan(20);
    expect(text).toMatch(/^Colección/);
    expect(text).toMatch(/equipos$/);
    expect(text).not.toContain('Testing');
    expect(text).not.toMatch(/\d+/); // No contiene números
  });

  // Pruebas de estructura DOM
  it('should have correct DOM structure', () => {
    const header = compiled.querySelector('header');
    const children = header?.children;

    expect(children).toBeDefined();
    expect(children?.length).toBe(2);
    expect(children?.[0].tagName).toBe('H1');
    expect(children?.[1].tagName).toBe('P');
  });

  it('should have h1 before subtitle in DOM order', () => {
    const header = compiled.querySelector('header');
    const firstChild = header?.firstElementChild;
    const lastChild = header?.lastElementChild;

    expect(firstChild?.tagName).toBe('H1');
    expect(lastChild?.tagName).toBe('P');
    expect(firstChild).not.toBe(lastChild);
  });

  // Pruebas de contenido completo
  it('should render complete header content', () => {
    const headerHTML = compiled.querySelector('header')?.innerHTML;

    expect(headerHTML).toContain('<h1>');
    expect(headerHTML).toContain('</h1>');
    expect(headerHTML).toContain('<p');
    expect(headerHTML).toContain('</p>');
    expect(headerHTML).toMatch(/<h1>.*<\/h1>/);
  });

  it('should not contain unexpected elements', () => {
    const header = compiled.querySelector('header');
    const nav = header?.querySelector('nav');
    const img = header?.querySelector('img');
    const button = header?.querySelector('button');

    expect(nav).toBeNull();
    expect(img).toBeNull();
    expect(button).toBeNull();
    expect(nav).toBeFalsy();
  });

  // Pruebas de propiedades del componente
  it('should have component instance properties defined', () => {
    expect(component.constructor.name).toBe('Header');
    expect(typeof component).toBe('object');
    expect(component).toEqual(jasmine.any(Object));
  });

  // Pruebas negativas
  it('should not have empty text content', () => {
    const h1 = compiled.querySelector('h1');
    const subtitle = compiled.querySelector('.subtitle');

    expect(h1?.textContent).not.toBe('');
    expect(subtitle?.textContent).not.toBe('');
    expect(h1?.textContent?.trim()).not.toBe('');
  });

  it('should not contain script or style tags', () => {
    const header = compiled.querySelector('header');
    const scripts = header?.querySelectorAll('script');
    const styles = header?.querySelectorAll('style');

    expect(scripts?.length).toBe(0);
    expect(styles?.length).toBe(0);
  });

  // Pruebas de arrays y colecciones
  it('should have all expected CSS classes', () => {
    const header = compiled.querySelector('header');
    const classList = Array.from(header?.classList || []);

    expect(classList).toContain('header');
    expect(classList).toEqual(jasmine.arrayContaining(['header']));
    expect(classList.length).toBeGreaterThan(0);
  });
});
