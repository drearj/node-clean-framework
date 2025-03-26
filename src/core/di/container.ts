interface Dependency {
    [key: string]: any;
}

class Container {
    private dependencies: Dependency = {};

    register(name: string, dependency: any) {
        this.dependencies[name] = dependency;
    }

    resolve(name: string) {
        if (!this.dependencies[name]) {
            throw new Error(`Dependency ${name} not found`);
        }
        return this.dependencies[name];
    }
}

export const container = new Container();