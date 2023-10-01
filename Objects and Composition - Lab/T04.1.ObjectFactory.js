function factory(lib, ord) {

    let result = [];

    for (const line of ord) {

        let object = {};
        let template = line.template;

        for (const key in template) {

            object[key] = template[key]

        }

        let parts = line.parts;

        for (const key of parts) {

            object[key] = lib[key];

        }
        result.push(object);
    }

    return result;
}


const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

const products = factory(library, orders);
