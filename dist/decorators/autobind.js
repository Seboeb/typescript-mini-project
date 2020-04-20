export function autobind(_, _2, descriptor) {
    const originalFnc = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalFnc.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
//# sourceMappingURL=autobind.js.map