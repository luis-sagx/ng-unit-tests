import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';

describe('Header Component - Pruebas con Matchers', () => {
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
  });

  it('should be an instance of Header class', () => {
    expect(component).toBeInstanceOf(Header);
    expect(typeof component).toBe('object');
  });

  // Pruebas del elemento header
  it('should render header element with correct class', () => {
    const headerElement = compiled.querySelector('header');

    expect(headerElement).toBeTruthy();
    expect(headerElement?.classList.contains('header')).toBe(true);
    expect(headerElement?.tagName).toEqual('HEADER');
  });

  // Pruebas del título h1
  it('should render h1 element with title text using multiple matchers', () => {
    const h1 = compiled.querySelector('h1');

    expect(h1?.textContent).toBe('Pruebas Unitarias');
    expect(h1?.textContent).toContain('Pruebas');
    expect(h1?.textContent).toMatch(/Pruebas Unitarias/);
    expect(h1?.textContent).not.toContain('Testing');
  });

  it('should have h1 with correct length using comparison matchers', () => {
    const h1 = compiled.querySelector('h1');
    const text = h1?.textContent || '';

    expect(text.length).toBeGreaterThan(10);
    expect(text.length).toBeLessThan(30);
    expect(text).toMatch(/^[A-Z]/); // Comienza con mayúscula
  });

  // Pruebas del subtítulo
  it('should render subtitle with text and regex validation', () => {
    const subtitle = compiled.querySelector('.subtitle');

    expect(subtitle?.textContent).toContain('Colección');
    expect(subtitle?.textContent).toMatch(/^Colección/);
    expect(subtitle?.textContent).toMatch(/equipos$/);
    expect(subtitle?.textContent).not.toMatch(/\d+/); // No contiene números
  });

  it('should have subtitle as paragraph element', () => {
    const subtitle = compiled.querySelector('.subtitle');

    expect(subtitle?.tagName).toBe('P');
    expect(subtitle?.classList.contains('subtitle')).toBe(true);
    expect(subtitle?.classList.contains('title')).toBe(false);
  });

  // Pruebas de estructura DOM
  it('should have correct DOM structure with 2 children', () => {
    const header = compiled.querySelector('header');
    const children = header?.children;

    expect(children).toBeDefined();
    expect(children?.length).toBe(2);
    expect(children?.[0].tagName).toBe('H1');
    expect(children?.[1].tagName).toBe('P');
  });

  // Pruebas negativas
  it('should not contain unexpected elements', () => {
    const header = compiled.querySelector('header');
    const nav = header?.querySelector('nav');
    const img = header?.querySelector('img');

    expect(nav).toBeNull();
    expect(img).toBeNull();
    expect(nav).toBeFalsy();
  });

  // Pruebas de arrays y colecciones
  it('should have expected CSS classes using arrayContaining', () => {
    const header = compiled.querySelector('header');
    const classList = Array.from(header?.classList || []);

    expect(classList).toContain('header');
    expect(classList).toEqual(jasmine.arrayContaining(['header']));
  });
});
