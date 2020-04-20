namespace App {
  // Autobind decorator
  export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalFnc = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalFnc.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }
}
